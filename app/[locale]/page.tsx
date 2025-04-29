import React from 'react';
import { HeroSection } from '@/components/landing/hero/hero-section';
import { StatSection } from '@/components/landing/stats/stat-section';
import { FeaturesSection } from '@/components/landing/features/features-section';
import { ComparisonSection } from '@/components/landing/comparison/comparison-section';
import { BenefitsSection } from '@/components/landing/benefits/benefits-section';
import { TeamSection } from '@/components/landing/tutors/team-section';
import { VideoSection } from '@/components/landing/video-section';
import { TestimonialSection } from '@/components/landing/testimonial-section';
import { CtaSection } from '@/components/landing/cta-section';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const locale = params.locale;

  try {
    const t = await getTranslations({ locale, namespace: 'Common.metadata.default' });

    return {
      title: t('title'),
      description: t('description'),
    };
  } catch (error) {
    return {
      title: '호주 영어 1:1 튜터 플랫폼 | 텔로101',
      description:
        '호주 영어 발음부터 회화까지! 호주 영어 전문 튜터와 1:1 과외, 지금 텔로101에서 쉽고 재미있게 시작해보세요.',
    };
  }
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StatSection />
      <FeaturesSection />
      <ComparisonSection />
      <BenefitsSection />
      <TeamSection />
      <VideoSection />
      <TestimonialSection />
      <CtaSection />
    </div>
  );
}
