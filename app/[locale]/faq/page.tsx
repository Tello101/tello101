import React from 'react';
import { FAQSection } from '@/components/faq/faq-section';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const locale = params.locale;

  try {
    const t = await getTranslations({ locale, namespace: 'Common.metadata.faq' });

    return {
      title: t('title'),
      description: t('description'),
    };
  } catch (error) {
    return {
      title: '자주 묻는 질문 - 호주 영어 튜터 과외 | 텔로101',
      description:
        '수업 예약, 취소, 결제, 튜터 선택까지! 텔로101을 이용하며 자주 받는 질문과 답변을 한눈에 확인해보세요.',
    };
  }
}

export default function FaqPage() {
  return (
    <div className="w-full overflow-hidden">
      <FAQSection />
    </div>
  );
}
