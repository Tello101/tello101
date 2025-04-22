'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { FadeIn } from '@/components/animations/fade-in';
import { StaggerContainer } from '@/components/animations/stagger-container';
import { BrandButton } from '@/components/ui/brand-button';
import { TeamMemberCard } from '@/components/landing/tutors/team-member-card';
import { SectionHeading } from '@/components/section-header';

export const TeamSection = () => {
  const t = useTranslations('Home.Team');
  const locale = useLocale();

  return (
    <section className="brand-section brand-gradient-light">
      <div className="container">
        <FadeIn className="mb-16 text-center">
          <SectionHeading title={t('title')} />
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 gap-8 px-10 sm:grid-cols-2 lg:grid-cols-4">
          <TeamMemberCard
            name="Luca"
            university="University of Sydney"
            field="Law"
            imagePath="/images/tutors/tutor_luca.webp"
          />

          <TeamMemberCard
            name="Joanne"
            university="UNSW"
            field="Medicine"
            imagePath="/images/tutors/tutor_joanne.webp"
          />

          <TeamMemberCard
            name="Eric"
            university="University of Sydney"
            field="Law"
            imagePath="/images/tutors/tutor_eric.webp"
          />

          <TeamMemberCard
            name="Nathan"
            university="ANU"
            field="Languages"
            imagePath="/images/tutors/tutor_nathan.webp"
          />
        </StaggerContainer>

        <FadeIn className="mt-12 text-center">
          <BrandButton size="lg" variant="default" asChild>
            <Link href={`/${locale}/tutors`} className="flex items-center">
              {t('cta')}
            </Link>
          </BrandButton>
        </FadeIn>
      </div>
    </section>
  );
};
