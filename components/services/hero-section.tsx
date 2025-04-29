'use client';

import React, { useRef } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { BrandButton } from '@/components/ui/brand-button';
import { FadeIn } from '@/components/animations/fade-in';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { SectionHeading, SubTitle } from '@/components/section-header';

export const HeroSection = () => {
  const t = useTranslations('Services.hero');
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-r from-zinc-900/90 to-gray-200/90 py-16 text-white md:py-36"
      ref={heroRef}
    >
      <div className="absolute inset-0 z-0 opacity-70">
        <Image
          src="/images/services/services_hero.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <motion.div
        className="container relative z-10"
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
      >
        <FadeIn direction="left" className="mb-14 max-w-5xl">
          <SectionHeading
            title={t('create_journey')}
            className="whitespace-pre-line text-white"
            size="lg"
          />
          <SubTitle
            title={t('english_made_easy')}
            className="text-gray-50 md:text-[27px]"
            size="lg"
          />
        </FadeIn>
        <FadeIn direction="left">
          <BrandButton
            size="lg"
            variant="white"
            className="text-lg font-bold md:px-10 md:py-8 md:text-xl"
            asChild
          >
            <Link href="/contact">{t('get_started')}</Link>
          </BrandButton>
        </FadeIn>
      </motion.div>
    </section>
  );
};
