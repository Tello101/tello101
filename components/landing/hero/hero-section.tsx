'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BrandButton } from '@/components/ui/brand-button';
import { FadeIn } from '@/components/animations/fade-in';
import { StaggerContainer } from '@/components/animations/stagger-container';
import { StaggerItem } from '@/components/animations/stagger-item';
import { motion, useScroll, useTransform } from 'framer-motion';
import { StatCard } from '@/components/landing/hero/stat-card';

export const HeroSection = () => {
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
			className='relative py-32 text-white bg-gradient-to-r from-primary/90 to-secondary/90 md:py-40 overflow-hidden'
			ref={heroRef}
		>
			<div className='absolute inset-0 z-0 opacity-20'>
				<Image src='/images/landing_hero.JPG' alt='Background' fill className='object-cover' priority />
			</div>
			<motion.div className='container relative z-10' style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}>
				<FadeIn direction='left' className='mb-8'>
					<h1 className='text-3xl sm:text-5xl md:text-7xl font-bold mb-4 leading-10 whitespace-pre-line'>
						{`Tello101,\nAustralia's #1 English Tutoring Platform`}
					</h1>
					<p className='text-xl md:text-2xl'>
						1:1 online lessons with native speakers from Australia's top universities.
					</p>
				</FadeIn>
				<FadeIn direction='left' className='mb-48'>
					<BrandButton size='lg' variant='white' className='px-8 py-6 text-lg' asChild>
						<Link href='/contact'>BOOK TRIAL NOW</Link>
					</BrandButton>
				</FadeIn>

				<StaggerContainer className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12' delay={0.4}>
					<StaggerItem>
						<StatCard value='100%' label='Trial conversion rate' />
					</StaggerItem>
					<StaggerItem>
						<StatCard value='99%' label="Tutors from Australia's Top 4 Universities" />
					</StaggerItem>
					<StaggerItem>
						<StatCard value='300+' label='Students taught' />
					</StaggerItem>
					<StaggerItem>
						<StatCard value='120' label='Years combined teaching experience' />
					</StaggerItem>
				</StaggerContainer>
			</motion.div>
		</section>
	);
};
