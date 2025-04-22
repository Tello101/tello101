import React from 'react';
import { ContactSection } from '@/components/contact/contact-section';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const locale = params.locale;

  try {
    const t = await getTranslations({ locale, namespace: 'Common.metadata.contact' });

    return {
      title: t('title'),
      description: t('description'),
    };
  } catch (error) {
    return {
      title: '호주 영어 튜터 체험 수업 신청하기 | 텔로101',
      description:
        '지금 내 영어 실력과 목표에 딱 맞는 튜터를 만나보세요! 간단한 정보만 입력하면 맞춤 튜터와 체험 수업을 들을 수 있어요.',
    };
  }
}

export default function ContactPage() {
  return (
    <div className="w-full overflow-hidden">
      <ContactSection />
    </div>
  );
}
