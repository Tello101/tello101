'use client';

import type React from 'react';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface StaggerContainerProps {
	children: React.ReactNode;
	className?: string;
	delay?: number;
	staggerChildren?: number;
	once?: boolean;
}

export function StaggerContainer({
	children,
	className = '',
	delay = 0,
	staggerChildren = 0.2, // 애니메이션 속도 늦춤 (0.1 -> 0.2)
	once = true,
}: StaggerContainerProps) {
	const controls = useAnimation();
	const ref = useRef(null);
	const isInView = useInView(ref, { once, margin: '-100px' });

	useEffect(() => {
		if (isInView) {
			controls.start('visible');
		}
	}, [controls, isInView]);

	const variants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren,
				delayChildren: delay,
			},
		},
	};

	return (
		<motion.div ref={ref} initial='hidden' animate={controls} variants={variants} className={className}>
			{children}
		</motion.div>
	);
}
