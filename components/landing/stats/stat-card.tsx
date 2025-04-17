import React, { ReactNode } from 'react';
import Image from 'next/image';

interface StatCardProps {
	value: string;
	label: string;
	iconSrc?: string;
	bgColor?: string;
}

export const StatCard = ({ value, label, iconSrc, bgColor = 'bg-white' }: StatCardProps) => {
	return (
		<div
			className={`${bgColor} rounded-xl px-6 py-10 text-center whitespace-pre-line shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-between h-full border border-gray-100`}
		>
			<div className='flex flex-col items-center justify-center'>
				<h3 className='text-3xl lg:text-4xl font-bold text-black mb-2'>{value}</h3>
				<p className='text-xl md:text-2xl text-gray-700 mb-10'>{label}</p>
			</div>
			{iconSrc && (
				<div className='relative w-full h-20 min-w-20 flex items-end justify-center'>
					<Image src={iconSrc} alt={label} width={80} height={80} className='object-contain' />
				</div>
			)}
		</div>
	);
};
