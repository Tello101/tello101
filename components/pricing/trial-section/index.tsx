'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { SectionHeader } from '@/components/section-header';
import Image from 'next/image';
import { FadeIn } from '@/components/animations/fade-in';
import { TrialCard } from './trial-card';

export const TrialSection = () => {
	const t = useTranslations('Pricing');

	return (
		<section className='py-16 md:py-24 bg-gray-50'>
			<div className='container'>
				<div className='text-center mb-16 max-w-3xl mx-auto'>
					<SectionHeader title={t('trial_offer.title')} />
					<p className='text-lg text-gray-500 mt-4'>{t('trial_offer.subtitle')}</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16'>
					{/* 체험 수업 혜택 카드 3개 */}
					{[0, 1, 2].map((index) => (
						<FadeIn key={index} delay={index * 0.1} direction='up'>
							<Card className='hover:shadow-lg transition-all h-full'>
								<CardContent className='p-8 h-full flex flex-col items-center text-center'>
									<Image
										src={`/images/pricing/trial_offer_card_${index + 1}.png`}
										alt={t(`trial_offer.boxes.${index}.title`)}
										width={100}
										height={100}
									/>
									<h3 className='text-xl font-bold mb-4 text-primary'>{t(`trial_offer.boxes.${index}.title`)}</h3>
									<p className='text-gray-500 flex-grow'>{t(`trial_offer.boxes.${index}.desc`)}</p>
								</CardContent>
							</Card>
						</FadeIn>
					))}
				</div>

				{/* 체험 수업 가격 */}
				<div className='bg-primary p-10 rounded-xl w-full'>
					<div className='max-w-2xl mx-auto '>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
							{/* 25분 체험 수업 */}
							<TrialCard
								minutes='minutes25'
								originalPrice='40'
								discountKey='discount67'
								price={t('trial_offer.25_price')}
								direction='right'
								delay={0.1}
							/>

							{/* 50분 체험 수업 */}
							<TrialCard
								minutes='minutes50'
								originalPrice='71'
								discountKey='discount65'
								price={t('trial_offer.50_price')}
								direction='left'
								delay={0.2}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
