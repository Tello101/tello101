'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { BrandButton } from '@/components/ui/brand-button';
import { FadeIn } from '@/components/animations/fade-in';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionHeading, SubTitle } from '@/components/section-header';

export const HeroSection = () => {
  const heroRef = useRef(null);
  const t = useTranslations('Home.Hero');

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-r from-primary/90 to-secondary/90 py-16 text-white md:py-52"
      ref={heroRef}
    >
      <div className="absolute inset-0 z-0 opacity-70">
        <Image
          src="/images/landing_hero.JPG"
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
        <FadeIn direction="left" className="mb-14 md:mb-20">
          <SectionHeading
            size="xl"
            title={t('title')}
            className="mb-6 whitespace-pre-line text-white"
          />
          <SubTitle title={t('subtitle')} size="lg" className="text-gray-50 md:text-3xl" />
        </FadeIn>
        <FadeIn direction="left">
          <BrandButton
            size="lg"
            variant="white"
            className="text-lg font-bold md:py-8 md:text-xl"
            asChild
          >
            <Link href="/contact">{t('cta')}</Link>
          </BrandButton>
        </FadeIn>
      </motion.div>
    </section>
  );
};
