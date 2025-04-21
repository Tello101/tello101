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
			className='brand-section text-white'
			style={{ background: 'linear-gradient(135deg, #2980ff 0%, #71e2ff 100%)' }}
		>
			<FadeIn className='container text-center'>
				<h2 className='text-4xl md:text-6xl font-bold mb-14'>{t('title')}</h2>
				<BrandButton size='lg' variant='white' asChild className='mt-2 text-xl md:text-2xl sm:px-9 sm:py-7'>
					<Link href={`/${locale}/contact`} className='flex items-center'>
						{t('cta')}
					</Link>
				</BrandButton>
			</FadeIn>
		</section>
	);
};
