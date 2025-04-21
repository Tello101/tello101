'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '@/components/animations/fade-in';
import { SectionHeader } from '@/components/section-header';

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
		<section className='relative bg-primary overflow-hidden' ref={heroRef}>
			{/* 배경 이미지 - 페럴렉스 효과 */}
			<motion.div className='absolute inset-0 w-full h-full opacity-25' style={{ y: bgY }}>
				<Image
					src='/images/tutors/tutors_hero.png'
					alt='Tello101 Tutors'
					fill
					style={{ objectFit: 'contain', objectPosition: 'center' }}
					priority
				/>
			</motion.div>
			{/* 어두운 오버레이 */}
			<div className='absolute inset-0 bg-primary/10'></div>

			{/* 컨텐츠 */}
			<motion.div className='container relative z-10 py-16 md:py-24' style={{ opacity }}>
				<div className='max-w-4xl mx-auto text-center'>
					<FadeIn direction='up' delay={0.2} className='mb-10'>
						<SectionHeader
							title={t('hero.title')}
							className='font-bold text-white mb-10 md:whitespace-pre-line text-4xl md:text-6xl'
						/>
					</FadeIn>
					<FadeIn direction='up' delay={0.5}>
						<p className='text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-sm'>{t('hero.subtitle')}</p>
					</FadeIn>
				</div>
			</motion.div>
		</section>
	);
};
