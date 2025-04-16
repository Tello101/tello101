'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { FadeIn } from '@/components/animations/fade-in';
import { BrandButton } from '@/components/ui/brand-button';
import { SectionHeader } from '@/components/landing/section-header';

export const CtaSection = () => {
	const t = useTranslations('Home.FinalCta');
	const locale = useLocale();

	return (
		<section className='brand-cta-section pt-32 pb-32 md:pt-40 md:pb-40'>
			<FadeIn className='container text-center'>
				<SectionHeader title={t('title')} />
				<BrandButton size='lg' variant='white' asChild className='mt-2'>
					<Link href={`/${locale}/contact`} className='flex items-center'>
						{t('cta')}
					</Link>
				</BrandButton>
			</FadeIn>
		</section>
	);
};
