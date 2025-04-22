'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/animations/fade-in';
import { StaggerContainer } from '@/components/animations/stagger-container';
import { StaggerItem } from '@/components/animations/stagger-item';
import { FeatureCard } from '@/components/landing/features/feature-card';
import { ServiceIcon } from '@/components/landing/features/service-icon';
import { SectionHeading, SubTitle } from '@/components/section-header';

export const FeaturesSection = () => {
  const t = useTranslations('Home.Features');

  return (
    <section className="brand-section bg-gray-50">
      <div className="container">
        <FadeIn className="mb-16 text-center">
          <SectionHeading title={t('title')} />
          <SubTitle title={t('subtitle')} className="text-opacity-50" />
        </FadeIn>

        <StaggerContainer className="flex flex-wrap justify-center gap-8">
          <StaggerItem>
            <FeatureCard
              icon={<ServiceIcon type="conversation" />}
              title={t('everyday.title')}
              features={[{ text: t('everyday.item1') }, { text: t('everyday.item2') }]}
            />
          </StaggerItem>

          <StaggerItem>
            <FeatureCard
              icon={<ServiceIcon type="education" />}
              title={t('guidance.title')}
              features={[{ text: t('guidance.item1') }, { text: t('guidance.item2') }]}
            />
          </StaggerItem>

          <StaggerItem>
            <FeatureCard
              icon={<ServiceIcon type="business" />}
              title={t('business.title')}
              features={[{ text: t('business.item1') }, { text: t('business.item2') }]}
            />
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};
