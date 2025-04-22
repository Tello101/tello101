'use client';

import React from 'react';
import { PricingSection } from '@/components/pricing/pricing-section';
import { TrialSection } from '@/components/pricing/trial-section';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const locale = params.locale;

  try {
    const t = await getTranslations({ locale, namespace: 'Common.metadata.pricing' });

    return {
      title: t('title'),
      description: t('description'),
    };
  } catch (error) {
    return {
      title: '호주 영어 튜터 1:1 수업, 1회 1만원대부터 | 텔로101',
      description:
        '회당 1만 원대 호주 명문대 원어민 튜터와 1:1 영어 과외 - 지금 텔로101에서 체험 수업부터 시작해 보세요. 수업은 원하는 시간에 자유롭게 예약할 수 있어요.',
    };
  }
}

export default function PricingPage() {
  return (
    <div className="overflow-hidden">
      <PricingSection />
      <TrialSection />
    </div>
  );
}
