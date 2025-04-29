'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '@/components/animations/fade-in';
import { SectionHeading, SubTitle } from '@/components/section-header';

export const HeroSection = () => {
  const t = useTranslations('Tutors');
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-r from-amber-900/50 to-amber-900/50"
      ref={heroRef}
    >
      {/* 배경 이미지 - 페럴렉스 효과 */}
      <motion.div
        className="absolute inset-0 h-full w-full opacity-20 md:opacity-50"
        style={{ y: bgY }}
      >
        <Image
          src="/images/tutors/hero.png"
          alt="Tello101 Tutors"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* 어두운 오버레이 */}
      <div className="absolute inset-0 bg-primary/10"></div>

      {/* 컨텐츠 */}
      <motion.div
        className="container relative z-10 py-16 md:pb-[370px] md:pt-20"
        style={{ opacity }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn direction="up" delay={0.2} className="mb-10">
            <SectionHeading
              title={t('hero.title')}
              className="text-white md:whitespace-pre-line"
              size="xl"
            />
          </FadeIn>
          <FadeIn direction="up" delay={0.5}>
            <SubTitle title={t('hero.subtitle')} className="text-gray-50" size="lg" />
          </FadeIn>
        </div>
      </motion.div>
    </section>
  );
};
