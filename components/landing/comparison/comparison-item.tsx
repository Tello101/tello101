'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ComparisonSide } from './comparison-side';

interface ComparisonItemProps {
	telloTitle: string;
	telloDescription: string;
	otherTitle: string;
	otherDescription: string;
	index?: number;
}

export const ComparisonItem = ({
	telloTitle,
	telloDescription,
	otherTitle,
	otherDescription,
	index = 0,
}: ComparisonItemProps) => {
	return (
		<motion.div
			className='bg-white rounded-xl shadow-md overflow-hidden'
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{
				duration: 0.5,
				delay: index * 0.2,
				ease: 'easeOut',
			}}
		>
			<div className='grid grid-cols-1 md:grid-cols-2'>
				<ComparisonSide title={telloTitle} description={telloDescription} isTello={true} />
				<ComparisonSide title={otherTitle} description={otherDescription} isTello={false} />
			</div>
		</motion.div>
	);
};
