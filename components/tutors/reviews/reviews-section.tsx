'use client';

import React from 'react';
import { ReviewSlider } from '@/components/tutors/reviews/reviews-slider';
import { reviews } from '@/lib/constants/reviews';
import { useTranslations } from 'next-intl';

export const ReviewsSection = () => {
	const t = useTranslations('Tutors');

	const renderHighlight = (chunks: React.ReactNode) => (
		<span className='bg-primary inline-block text-transparent bg-clip-text font-bold'>{chunks}</span>
	);

	return (
		<section className='py-16 md:py-20 brand-gradient-light border-t border-gray-100'>
			<div className='relative'>
				<h2 className='text-center font-bold text-black text-4xl md:text-5xl mb-16'>
					{t.rich('reviews.title', {
						highlight: renderHighlight,
					})}
				</h2>

				<ReviewSlider reviews={reviews} />
			</div>
		</section>
	);
};
