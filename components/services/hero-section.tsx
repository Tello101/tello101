import React, { useRef } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { BrandButton } from '@/components/ui/brand-button';
import { FadeIn } from '@/components/animations/fade-in';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { SectionHeader } from '@/components/section-header';

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
			className='relative py-16 md:py-36 text-white bg-gradient-to-b from-orange-100/70 to-orange-300/80 overflow-hidden'
			ref={heroRef}
		>
			<div className='absolute inset-0 z-0 opacity-70'>
				<Image src='/images/services/services_hero.png' alt='Background' fill className='object-cover' priority />
			</div>

			<motion.div className='container relative z-10' style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}>
				<FadeIn direction='left' className='mb-12 max-w-4xl'>
					<SectionHeader title={t('create_journey')} className='text-white mb-5 whitespace-pre-line' />
					<p className='text-lg md:text-2xl'>{t('english_made_easy')}</p>
				</FadeIn>
				<FadeIn direction='left'>
					<BrandButton size='lg' variant='white' className='text-lg sm:px-10 sm:py-6' asChild>
						<Link href='/contact'>{t('get_started')}</Link>
					</BrandButton>
				</FadeIn>
			</motion.div>
		</section>
	);
};
