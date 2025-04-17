'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { StaggerContainer } from '@/components/animations/stagger-container';
import { StaggerItem } from '@/components/animations/stagger-item';
import { StatCard } from '@/components/landing/stats/stat-card';

export const StatSection = () => {
	const t = useTranslations('Home.Hero');

	return (
		<section className='py-16 bg-black'>
			<div className='container'>
				<StaggerContainer className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6' delay={0.2}>
					<StaggerItem>
						<StatCard
							value={t('stats.conversionValue')}
							label={t('stats.conversionLabel')}
							iconSrc='/images/stat_conversion.png'
						/>
					</StaggerItem>
					<StaggerItem>
						<StatCard
							value={t('stats.tutorsValue')}
							label={t('stats.tutorsLabel')}
							iconSrc='/images/stat_university.png'
						/>
					</StaggerItem>
					<StaggerItem>
						<StatCard
							value={t('stats.studentsValue')}
							label={t('stats.studentsLabel')}
							iconSrc='/images/stat_statistics.png'
						/>
					</StaggerItem>
					<StaggerItem>
						<StatCard
							value={t('stats.experienceValue')}
							label={t('stats.experienceLabel')}
							iconSrc='/images/stat_career.png'
						/>
					</StaggerItem>
				</StaggerContainer>
			</div>
		</section>
	);
};
