'use client';

import type React from 'react';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface FadeInProps {
	children: React.ReactNode;
	delay?: number;
	direction?: 'up' | 'down' | 'left' | 'right' | 'none';
	className?: string;
	duration?: number;
	once?: boolean;
	distance?: number;
}

export function FadeIn({
	children,
	delay = 0,
	direction = 'up',
	className = '',
	duration = 0.8, // 애니메이션 속도 늦춤 (0.5 -> 0.8)
	once = true,
	distance = 50,
}: FadeInProps) {
	const controls = useAnimation();
	const ref = useRef(null);
	const isInView = useInView(ref, { once });

	useEffect(() => {
		if (isInView) {
			controls.start('visible');
		}
	}, [controls, isInView]);

	const getDirectionOffset = () => {
		switch (direction) {
			case 'up':
				return { y: distance };
			case 'down':
				return { y: -distance };
			case 'left':
				return { x: distance };
			case 'right':
				return { x: -distance };
			case 'none':
				return {};
			default:
				return { y: distance };
		}
	};

	const variants = {
		hidden: {
			opacity: 0,
			...getDirectionOffset(),
		},
		visible: {
			opacity: 1,
			x: 0,
			y: 0,
			transition: {
				duration,
				delay,
				ease: [0.25, 0.1, 0.25, 1],
			},
		},
	};

	return (
		<motion.div ref={ref} initial='hidden' animate={controls} variants={variants} className={className}>
			{children}
		</motion.div>
	);
}
