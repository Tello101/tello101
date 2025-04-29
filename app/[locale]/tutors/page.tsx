import React from 'react';
import { ReviewsSection } from '@/components/tutors/reviews/reviews-section';
import { HeroSection } from '@/components/tutors/hero-section';
import { PointsSection } from '@/components/tutors/points/points-section';
import { TutorListSection } from '@/components/tutors/tutor-list/tutor-list-section';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const locale = params.locale;

  try {
    const t = await getTranslations({ locale, namespace: 'Common.metadata.tutors' });

    return {
      title: t('title'),
      description: t('description'),
    };
  } catch (error) {
    return {
      title: '호주 명문대 출신 1:1 영어 튜터 | 텔로101',
      description:
        '호주 명문대 출신 원어민 튜터와 1:1 맞춤 수업! 수업 후 바로 받는 피드백까지 — 영어 실력과 커리어, 둘 다 키워보세요.',
    };
  }
}

export default function TutorsPage() {
  return (
    <div className="w-full overflow-hidden">
      <HeroSection />
      <PointsSection />
      <TutorListSection />
      <ReviewsSection />
    </div>
  );
}
