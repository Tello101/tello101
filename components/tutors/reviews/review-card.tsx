'use client';

import React from 'react';
import { Review } from '@/lib/constants/reviews';

export const ReviewCard = ({ quote, author, rating }: Review) => {
	const renderStars = (rating: number) => {
		return Array(rating)
			.fill(0)
			.map((_, i) => (
				<svg key={i} className='w-5 h-5 text-primary fill-current' viewBox='0 0 24 24'>
					<path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
				</svg>
			));
	};

	return (
		<div
			className='flex-shrink-0 w-[250px] md:w-[300px] bg-white p-5 border border-gray-100 shadow-md'
			style={{
				borderTopLeftRadius: '0.75rem',
				borderTopRightRadius: '0.75rem',
				borderBottomRightRadius: '0.75rem',
				borderBottomLeftRadius: '0',
			}}
		>
			<div className='flex items-center mb-3'>
				{renderStars(rating)}
				<span className='ml-1 text-sm text-primary font-semibold'>{rating.toFixed(1)}</span>
			</div>
			<p className='text-sm text-gray-700 line-clamp-5 mb-4'>{quote}</p>
			<div className='mt-auto'>
				<p className='text-sm font-semibold text-gray-800'>{author}</p>
			</div>
		</div>
	);
};
