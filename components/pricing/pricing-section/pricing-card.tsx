'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import { FadeIn } from '@/components/animations/fade-in';
import { cn } from '@/lib/utils';

// 가격 카드 컴포넌트
interface PricingCardProps {
  card: {
    bg: string;
    border: string;
    text: string;
    price: string;
    label: string;
    lessonKey: string;
  };
  index: number;
  minutesType: 'minutes25' | 'minutes50';
  delay?: number;
}

export const PricingCard = ({ card, index, minutesType, delay = 0 }: PricingCardProps) => {
  const t = useTranslations('Pricing');

  return (
    <FadeIn delay={delay} direction="up">
      <Card
        className={`overflow-hidden border-2 transition-all hover:shadow-xl ${card.border} flex h-full flex-col rounded-xl`}
      >
        <CardHeader
          className={`p-6 ${card.bg} flex flex-col items-center gap-2 border-b text-center ${card.border}`}
        >
          <div className={`${card.label} mx-auto w-fit rounded-full bg-opacity-40 px-4 py-1`}>
            <span className={`text-sm font-bold ${card.text} tracking-wider`}>{`${t(
              `common.${card.lessonKey}.count`,
            )} ${t(`common.${card.lessonKey}.desc`)}`}</span>
          </div>
          <div className="flex items-end justify-end">
            <span className={cn(`text-4xl font-extrabold`, card.price)}>
              {t(`pricing_info.${minutesType}.${index}.price`)}
            </span>
            <span className="mb-1 ml-1 text-gray-500">₩</span>
          </div>
        </CardHeader>

        <CardContent className="flex-1 p-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-500">
              <CheckCircle2 className={`h-5 w-5 ${card.text}`} />
              <p>{t(`pricing_info.${minutesType}.${index}.per_lesson`)}</p>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <CheckCircle2 className={`h-5 w-5 ${card.text}`} />
              <p>{t(`pricing_info.${minutesType}.${index}.valid`)}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </FadeIn>
  );
};
