'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface ComparisonSideProps {
	title: string;
	description: string;
	isTello?: boolean;
}

export const ComparisonSide = ({ title, description, isTello = false }: ComparisonSideProps) => {
	const t = useTranslations('Home.Comparison');

	return (
		<motion.div
			className={`p-6 md:p-8 relative ${isTello ? 'border-b md:border-b-0 md:border-r border-gray-100' : 'bg-gray-50'}`}
			initial={{ opacity: 0, x: isTello ? -10 : 10 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.5, delay: 0.2 }}
		>
			<div className={`absolute top-0 left-0 w-1 h-full ${isTello ? 'bg-primary' : 'bg-gray-300'}`}></div>
			<div className='flex items-center mb-4'>
				<motion.div
					className={`w-10 h-10 rounded-full ${
						isTello ? 'bg-primary/10' : 'bg-gray-200'
					} flex items-center justify-center mr-4`}
					transition={{ type: 'spring', stiffness: 400, damping: 10 }}
				>
					{isTello ? (
						<svg className='w-5 h-5 text-primary' fill='currentColor' viewBox='0 0 20 20'>
							<path
								fillRule='evenodd'
								d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
								clipRule='evenodd'
							/>
						</svg>
					) : (
						<svg className='w-5 h-5 text-gray-500' fill='currentColor' viewBox='0 0 20 20'>
							<path
								fillRule='evenodd'
								d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
								clipRule='evenodd'
							/>
						</svg>
					)}
				</motion.div>
				{isTello ? (
					<motion.h3
						className='text-xl font-bold text-primary'
						whileHover={{ color: '#6b7280' }}
						transition={{ duration: 0.2 }}
					>
						{t('tello')}
					</motion.h3>
				) : (
					<motion.h3
						className='text-xl font-bold text-gray-500'
						whileHover={{ color: '#6b7280' }}
						transition={{ duration: 0.2 }}
					>
						{t('others')}
					</motion.h3>
				)}
			</div>
			<motion.h4
				className='text-lg font-bold mb-2'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.3, delay: 0.3 }}
			>
				{title}
			</motion.h4>
			<motion.p
				className='text-gray-600'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.3, delay: 0.4 }}
			>
				{description}
			</motion.p>
		</motion.div>
	);
};
