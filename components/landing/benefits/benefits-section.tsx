'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { BrandButton } from '@/components/ui/brand-button';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/fade-in';
import { BadgeCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { PersonalizedLessonUI } from '@/components/landing/benefits/personalized-lesson';
import { TimeSlot } from '@/components/landing/benefits/time-slot';
import { CalendarGrid } from '@/components/landing/benefits/calendar-grid';

export const BenefitsSection = () => {
  const t = useTranslations('Home.Benefits');
  const locale = useLocale();

  // 그라데이션 하이라이트 렌더링 함수
  const renderHighlight = (chunks: React.ReactNode) => (
    <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text font-bold text-transparent">
      {chunks}
    </span>
  );

  return (
    <section className="brand-section bg-white">
      <div className="container">
        <div className="space-y-32">
          {/* Card 1 - Time Zone */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <FadeIn direction="left" className="space-y-6">
              <h3 className="text-3xl font-bold text-black md:text-4xl">
                {t.rich('timezone.title', {
                  highlight: renderHighlight,
                })}
              </h3>
              <ul className="mt-6 space-y-4">
                <BadgeListItem>{t('timezone.p1')}</BadgeListItem>
                <BadgeListItem>{t('timezone.p2')}</BadgeListItem>
              </ul>
              <BrandButton size="lg" variant="default" className="mt-4 text-white" asChild>
                <Link href={`/${locale}/contact`} className="flex items-center">
                  {t('timezone.cta')}
                </Link>
              </BrandButton>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="brand-card p-8">
                <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-[0_10px_30px_rgba(41,128,255,0.08)]">
                  <div className="mb-4 flex items-center justify-between">
                    <h4 className="font-medium">April 2025</h4>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                        <span className="sr-only">Previous month</span>
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                        <span className="sr-only">Next month</span>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-7 gap-2 text-center text-sm">
                    <div className="font-medium text-gray-500">Su</div>
                    <div className="font-medium text-gray-500">Mo</div>
                    <div className="font-medium text-gray-500">Tu</div>
                    <div className="font-medium text-gray-500">We</div>
                    <div className="font-medium text-gray-500">Th</div>
                    <div className="font-medium text-gray-500">Fr</div>
                    <div className="font-medium text-gray-500">Sa</div>
                    {/* Calendar days */}
                    <CalendarGrid />
                  </div>
                  <div className="mt-6 space-y-3">
                    <TimeSlot time="9:00 AM - 9:25 AM" />
                    <TimeSlot time="11:00 AM - 11:50 AM" />
                    <TimeSlot time="6:00 PM - 6:50 PM" />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Card 2 - Personalized */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <FadeIn direction="right" className="order-2 lg:order-1">
              <h3 className="mb-4 text-3xl font-bold text-black md:text-4xl">
                {t.rich('australia.title', {
                  highlight: renderHighlight,
                })}
              </h3>
              <p className="text-lg leading-relaxed text-black text-opacity-50">
                {t('australia.p1')}
              </p>
              <ul className="mt-8 space-y-4">
                <BadgeListItem>{t('australia.professionals')}</BadgeListItem>
                <BadgeListItem>{t('australia.students')}</BadgeListItem>
                <BadgeListItem>{t('australia.holiday')}</BadgeListItem>
              </ul>
              <BrandButton size="lg" variant="default" className="mt-4 text-white" asChild>
                <Link href={`/${locale}/contact`} className="flex items-center">
                  {t('australia.cta')}
                </Link>
              </BrandButton>
            </FadeIn>
            <FadeIn direction="left" delay={0.2} className="order-1 space-y-6 lg:order-2">
              <div className="brand-card overflow-hidden p-0">
                <div className="relative h-[350px]">
                  <Image
                    src="/images/landing_confidence.webp"
                    alt="Australia at your fingertips"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Card 3 - Australia */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <FadeIn direction="left" className="space-y-6">
              <div className="brand-card overflow-hidden p-0">
                <div className="rounded-xl bg-gray-50 p-6 shadow-md">
                  <PersonalizedLessonUI />
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <h3 className="text-3xl font-bold text-black md:text-4xl">
                {t.rich('personalized.title', {
                  highlight: renderHighlight,
                })}
              </h3>
              <ul className="mt-6 space-y-4">
                <BadgeListItem>{t('personalized.p1')}</BadgeListItem>
                <BadgeListItem>{t('personalized.p2')}</BadgeListItem>
              </ul>
              <BrandButton size="lg" variant="default" className="mt-4 text-white" asChild>
                <Link href={`/${locale}/contact`} className="flex items-center">
                  {t('personalized.cta')}
                </Link>
              </BrandButton>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

const BadgeListItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="flex items-start">
      <BadgeCheck className="mr-3 mt-[2px] h-6 w-6 flex-shrink-0 text-primary" />
      <p className="text-lg text-black text-opacity-70">{children}</p>
    </li>
  );
};
