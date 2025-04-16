'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { BrandButton } from '@/components/ui/brand-button';
import { FadeIn } from '@/components/animations/fade-in';
import { StaggerContainer } from '@/components/animations/stagger-container';
import { StaggerItem } from '@/components/animations/stagger-item';
import { motion, useScroll, useTransform } from 'framer-motion';
import { StatCard } from '@/components/landing/hero/stat-card';

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
			className='relative py-32 text-white bg-gradient-to-r from-primary/90 to-secondary/90 md:py-40 overflow-hidden'
			ref={heroRef}
		>
			<div className='absolute inset-0 z-0 opacity-20'>
				<Image src='/images/landing_hero.JPG' alt='Background' fill className='object-cover' priority />
			</div>
			<motion.div className='container relative z-10' style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}>
				<FadeIn direction='left' className='mb-8'>
					<h1 className='text-3xl sm:text-5xl md:text-7xl font-bold mb-4 leading-10 lg:whitespace-pre-line'>
						{t('title')}
					</h1>
					<p className='text-xl md:text-2xl'>{t('subtitle')}</p>
				</FadeIn>
				<FadeIn direction='left' className='mb-48'>
					<BrandButton size='lg' variant='white' className='px-8 py-6 text-lg' asChild>
						<Link href='/contact'>{t('cta')}</Link>
					</BrandButton>
				</FadeIn>

				<StaggerContainer className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12' delay={0.4}>
					<StaggerItem>
						<StatCard value={t('stats.conversionValue')} label={t('stats.conversionLabel')} />
					</StaggerItem>
					<StaggerItem>
						<StatCard value={t('stats.tutorsValue')} label={t('stats.tutorsLabel')} />
					</StaggerItem>
					<StaggerItem>
						<StatCard value={t('stats.studentsValue')} label={t('stats.studentsLabel')} />
					</StaggerItem>
					<StaggerItem>
						<StatCard value={t('stats.experienceValue')} label={t('stats.experienceLabel')} />
					</StaggerItem>
				</StaggerContainer>
			</motion.div>
		</section>
	);
};
