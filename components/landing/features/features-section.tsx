'use client';

import React from 'react';
import { FadeIn } from '@/components/animations/fade-in';
import { StaggerContainer } from '@/components/animations/stagger-container';
import { StaggerItem } from '@/components/animations/stagger-item';
import { FeatureCard } from '@/components/landing/features/feature-card';
import { ServiceIcon } from '@/components/landing/features/service-icon';
import { SectionHeader } from '@/components/landing/section-header';

export const FeaturesSection = () => {
	return (
		<section className='brand-section bg-white'>
			<div className='container'>
				<FadeIn className='text-center mb-16'>
					<SectionHeader title='The perfect path to real-world speaking' />
					<p className='text-xl text-gray-600 max-w-2xl mx-auto'>
						No more dry textbooks — just authentic conversations
					</p>
				</FadeIn>

				<StaggerContainer className='flex flex-wrap gap-8 justify-center'>
					<StaggerItem>
						<FeatureCard
							icon={<ServiceIcon type='conversation' />}
							title='Everyday Conversations'
							features={[{ text: 'Free Talking' }, { text: 'Tello101 Pouches' }]}
						/>
					</StaggerItem>

					<StaggerItem>
						<FeatureCard
							icon={<ServiceIcon type='education' />}
							title='Australian Job & University Guidance'
							features={[{ text: 'Cover Letter & Resume Writing' }, { text: 'Academic Support' }]}
						/>
					</StaggerItem>

					<StaggerItem>
						<FeatureCard
							icon={<ServiceIcon type='business' />}
							title='Business English'
							features={[{ text: 'Emails and Business Presentations' }, { text: 'Interview Prep' }]}
						/>
					</StaggerItem>
				</StaggerContainer>
			</div>
		</section>
	);
};
