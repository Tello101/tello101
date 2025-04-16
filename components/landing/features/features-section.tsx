'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/animations/fade-in';
import { StaggerContainer } from '@/components/animations/stagger-container';
import { StaggerItem } from '@/components/animations/stagger-item';
import { FeatureCard } from '@/components/landing/features/feature-card';
import { ServiceIcon } from '@/components/landing/features/service-icon';
import { SectionHeader } from '@/components/landing/section-header';

export const FeaturesSection = () => {
	const t = useTranslations('Home.Features');

	return (
		<section className='brand-section bg-white'>
			<div className='container'>
				<FadeIn className='text-center mb-16'>
					<SectionHeader title={t('title')} />
					<p className='text-xl text-gray-600 max-w-2xl mx-auto'>{t('subtitle')}</p>
				</FadeIn>

				<StaggerContainer className='flex flex-wrap gap-8 justify-center'>
					<StaggerItem>
						<FeatureCard
							icon={<ServiceIcon type='conversation' />}
							title={t('everyday.title')}
							features={[{ text: t('everyday.item1') }, { text: t('everyday.item2') }]}
						/>
					</StaggerItem>

					<StaggerItem>
						<FeatureCard
							icon={<ServiceIcon type='education' />}
							title={t('guidance.title')}
							features={[{ text: t('guidance.item1') }, { text: t('guidance.item2') }]}
						/>
					</StaggerItem>

					<StaggerItem>
						<FeatureCard
							icon={<ServiceIcon type='business' />}
							title={t('business.title')}
							features={[{ text: t('business.item1') }, { text: t('business.item2') }]}
						/>
					</StaggerItem>
				</StaggerContainer>
			</div>
		</section>
	);
};
