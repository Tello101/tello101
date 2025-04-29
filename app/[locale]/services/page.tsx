import React from 'react';
import { HeroSection } from '@/components/services/hero-section';
import { ServicesSteps } from '@/components/services/services-steps';
import { ServicesCta } from '@/components/services/services-cta';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const locale = params.locale;

  try {
    const t = await getTranslations({ locale, namespace: 'Common.metadata.services' });

    return {
      title: t('title'),
      description: t('description'),
    };
  } catch (error) {
    return {
      title: '호주 영어 1:1 튜터링 시작하기 | 텔로101',
      description:
        '장소, 시간 걱정 없이 시작하는 호주 영어! 튜터 선택부터 수업 예약, 피드백까지 — 텔로101과 함께 쉽고 유연하게 배워보세요.',
    };
  }
}

export default function ServicesPage() {
  return (
    <div className="w-full overflow-hidden">
      <HeroSection />
      <ServicesSteps />
      <ServicesCta />
    </div>
  );
}
