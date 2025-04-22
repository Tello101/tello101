'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { BrandButton } from '@/components/ui/brand-button';
import { useLocale } from 'next-intl';
import { SectionHeading } from '@/components/section-header';

export const ServicesCta = () => {
  const t = useTranslations('Services.cta');
  const locale = useLocale();

  return (
    <section className="bg-primary/100 py-20">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading title={t('title')} size="lg" className="text-white" />
          <BrandButton
            size="lg"
            variant="white"
            className="mt-5 text-lg font-bold md:py-7 md:text-xl"
            asChild
          >
            <Link href={`/${locale}/contact`}>{t('enquire_now')}</Link>
          </BrandButton>
        </div>
      </div>
    </section>
  );
};
