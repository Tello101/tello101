'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { FadeIn } from '@/components/animations/fade-in';
import { StaggerContainer } from '@/components/animations/stagger-container';
import { BrandButton } from '@/components/ui/brand-button';
import { SectionHeader } from '@/components/section-header';
import { TeamMemberCard } from '@/components/landing/tutors/team-member-card';

export const TeamSection = () => {
	const t = useTranslations('Home.Team');
	const locale = useLocale();

	return (
		<section className='brand-section brand-gradient-light'>
			<div className='container'>
				<FadeIn className='text-center mb-16'>
					<SectionHeader title={t('title')} />
				</FadeIn>

				<StaggerContainer className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-10'>
					<TeamMemberCard
						name='Luca'
						university='University of Sydney'
						field='Law'
						imagePath='/images/tutors/tutor_luca.webp'
					/>

					<TeamMemberCard
						name='Joanne'
						university='UNSW'
						field='Medicine'
						imagePath='/images/tutors/tutor_joanne.webp'
					/>

					<TeamMemberCard
						name='Eric'
						university='University of Sydney'
						field='Law'
						imagePath='/images/tutors/tutor_eric.webp'
					/>

					<TeamMemberCard
						name='Nathan'
						university='ANU'
						field='Languages'
						imagePath='/images/tutors/tutor_nathan.webp'
					/>
				</StaggerContainer>

				<FadeIn className='text-center mt-12'>
					<BrandButton size='lg' variant='default' asChild>
						<Link href={`/${locale}/tutors`} className='flex items-center'>
							{t('cta')}
						</Link>
					</BrandButton>
				</FadeIn>
			</div>
		</section>
	);
};
