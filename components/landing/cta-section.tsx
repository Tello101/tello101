'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { FadeIn } from '@/components/animations/fade-in';
import { BrandButton } from '@/components/ui/brand-button';

export const CtaSection = () => {
  const t = useTranslations('Home.FinalCta');
  const locale = useLocale();

  return (
    <section
      className="brand-section text-white"
      style={{ background: 'linear-gradient(135deg, #2980ff 0%, #71e2ff 100%)' }}
    >
      <FadeIn className="container text-center">
        <h2 className="mb-14 text-4xl font-bold md:text-6xl">{t('title')}</h2>
        <BrandButton
          size="lg"
          variant="white"
          className="text-lg font-bold md:py-8 md:text-xl"
          asChild
        >
          <Link href={`/${locale}/contact`}>{t('cta')}</Link>
        </BrandButton>
      </FadeIn>
    </section>
  );
};
