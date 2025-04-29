'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { FadeIn } from '@/components/animations/fade-in';
import { TrialCard } from './trial-card';
import { SubTitle } from '@/components/section-header';

export const TrialSection = () => {
  const t = useTranslations('Pricing');

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2
            className={`mb-6 flex items-center justify-center text-[32px] font-bold leading-tight text-black md:text-5xl`}
          >
            <Image src="/images/pricing/star.png" alt="Star" width={60} height={60} />
            {t('trial_offer.title')}
            <Image src="/images/pricing/star.png" alt="Star" width={60} height={60} />
          </h2>
          <SubTitle title={t('trial_offer.subtitle')} className="text-gray-500 md:text-[22px]" />
        </div>

        <div className="mx-auto mb-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {/* 체험 수업 혜택 카드 3개 */}
          {[0, 1, 2].map((index) => (
            <FadeIn key={index} delay={index * 0.1} direction="up">
              <Card className="h-full transition-all hover:shadow-lg">
                <CardContent className="flex h-full flex-col items-center p-8 text-center">
                  <Image
                    src={`/images/pricing/trial_offer_card_${index + 1}.png`}
                    alt={t(`trial_offer.boxes.${index}.title`)}
                    width={100}
                    height={100}
                  />
                  <h3 className="mb-4 text-xl font-bold text-primary">
                    {t(`trial_offer.boxes.${index}.title`)}
                  </h3>
                  <p className="flex-grow text-gray-500">{t(`trial_offer.boxes.${index}.desc`)}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        {/* 체험 수업 가격 */}
        <div className="mx-auto w-full max-w-lg">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {/* 25분 체험 수업 */}
            <TrialCard
              minutes="minutes25"
              originalPrice="40"
              discountKey="discount67"
              price={t('trial_offer.25_price')}
              direction="right"
              delay={0.1}
            />

            {/* 50분 체험 수업 */}
            <TrialCard
              minutes="minutes50"
              originalPrice="71"
              discountKey="discount65"
              price={t('trial_offer.50_price')}
              direction="left"
              delay={0.2}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
