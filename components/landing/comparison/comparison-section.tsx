'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/animations/fade-in';
import { SectionHeader } from '@/components/landing/section-header';
import { ComparisonItem } from './comparison-item';

export const ComparisonSection = () => {
	const t = useTranslations('Home.Comparison');

	return (
		<section className='brand-section px-4 bg-gray-50'>
			<div className='container'>
				<FadeIn className='text-center mb-16'>
					<SectionHeader title={t('title')} />
				</FadeIn>

				<div className='grid gap-8'>
					{t.raw('items').map((item: any, index: number) => (
						<ComparisonItem
							key={index}
							index={index}
							telloTitle={item.tello.title}
							telloDescription={item.tello.description}
							otherTitle={item.other.title}
							otherDescription={item.other.description}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
