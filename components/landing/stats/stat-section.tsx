'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { StaggerContainer } from '@/components/animations/stagger-container';
import { StaggerItem } from '@/components/animations/stagger-item';
import { StatCard } from '@/components/landing/stats/stat-card';

export const StatSection = () => {
  const t = useTranslations('Home.Hero');

  return (
    <section className="bg-primary py-8">
      <div className="container">
        <StaggerContainer
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          delay={0.2}
        >
          <StaggerItem>
            <StatCard
              value={t('stats.conversionValue')}
              label={t('stats.conversionLabel')}
              iconSrc="/images/landing/stat_conversion.png"
            />
          </StaggerItem>
          <StaggerItem>
            <StatCard
              value={t('stats.tutorsValue')}
              label={t('stats.tutorsLabel')}
              iconSrc="/images/landing/stat_university.png"
            />
          </StaggerItem>
          <StaggerItem>
            <StatCard
              value={t('stats.studentsValue')}
              label={t('stats.studentsLabel')}
              iconSrc="/images/landing/stat_statistics.png"
            />
          </StaggerItem>
          <StaggerItem>
            <StatCard
              value={t('stats.experienceValue')}
              label={t('stats.experienceLabel')}
              iconSrc="/images/landing/stat_career.png"
            />
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};
