'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { BrandButton } from '@/components/ui/brand-button';
import { FadeIn } from '@/components/animations/fade-in';
import { motion, useScroll, useTransform } from 'framer-motion';

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
			className='relative py-16 md:py-52 text-white bg-gradient-to-r from-primary/90 to-secondary/90 overflow-hidden'
			ref={heroRef}
		>
			<div className='absolute inset-0 z-0 opacity-70'>
				<Image src='/images/landing_hero.JPG' alt='Background' fill className='object-cover' priority />
			</div>
			<motion.div className='container relative z-10' style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}>
				<FadeIn direction='left' className='mb-20'>
					<h1 className='text-4xl sm:text-6xl md:text-7xl font-bold mb-6 leading-10 whitespace-pre-line'>
						{t('title')}
					</h1>
					<p className='text-xl md:text-2xl'>{t('subtitle')}</p>
				</FadeIn>
				<FadeIn direction='left'>
					<BrandButton size='lg' variant='white' className=' text-xl sm:px-12 sm:py-8 sm:text-[22px]' asChild>
						<Link href='/contact'>{t('cta')}</Link>
					</BrandButton>
				</FadeIn>
			</motion.div>
		</section>
	);
};
