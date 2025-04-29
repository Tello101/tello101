'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { FadeIn } from '@/components/animations/fade-in';

interface TrialCardProps {
  minutes: 'minutes25' | 'minutes50';
  originalPrice: string;
  discountKey: 'discount67' | 'discount65';
  price: string;
  direction: 'left' | 'right';
  delay?: number;
}

export const TrialCard = ({
  minutes,
  originalPrice,
  discountKey,
  price,
  direction,
  delay = 0,
}: TrialCardProps) => {
  const t = useTranslations('Pricing');

  return (
    <FadeIn delay={delay} direction={direction}>
      <Card className="overflow-hidden rounded-3xl border-none bg-white shadow-lg">
        {/* 상단 색상 영역 */}
        <div
          className={`w-full bg-gradient-to-r py-3 text-center text-2xl font-bold text-white ${minutes === 'minutes25' ? 'from-blue-500 to-red-500' : 'from-purple-500 to-red-500'}`}
        >
          <p>{t(`common.${discountKey}`)}</p>
        </div>

        <CardContent className="p-5 text-center">
          {/* 가격 영역 - 훨씬 더 강조 */}
          <div className="my-3 flex items-center justify-center">
            <div className="relative mr-2">
              <span className="absolute -top-5 right-0 text-lg font-light text-gray-400 line-through">
                ${originalPrice}
              </span>
              <span
                className={`${minutes === 'minutes25' ? 'text-blue-500' : 'text-purple-500'} text-[42px] font-bold`}
              >
                {price}
              </span>
            </div>
            <span className="mb-3 self-end text-base text-gray-500">AUD</span>
          </div>

          {/* 수업 설명 */}
          <div className="my-2 text-sm text-gray-600">{`${t('common.lesson1.count')} ${t('common.lesson1.desc')}`}</div>

          {/* 할인 정보 - 하단 배너로 변경 */}
          <div
            className={`-mx-5 -mb-5 mt-4 py-2 text-center text-base font-medium text-white ${minutes === 'minutes25' ? 'bg-blue-400' : 'bg-purple-400'}`}
          >
            <p>{t(`common.${minutes}`)}</p>
          </div>
        </CardContent>
      </Card>
    </FadeIn>
  );
};
