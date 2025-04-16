'use client';

import React from 'react';
import Link from 'next/link';
import { FadeIn } from '@/components/animations/fade-in';
import { BrandButton } from '@/components/ui/brand-button';
import { SectionHeader } from '@/components/landing/section-header';

export const CtaSection = () => {
	return (
		<section className='brand-cta-section pt-32 pb-32 md:pt-40 md:pb-40'>
			<FadeIn className='container text-center'>
				<SectionHeader title='Experience a trial lesson with us now' />
				<BrandButton size='lg' variant='white' asChild className='mt-2'>
					<Link href='/contact' className='flex items-center'>
						BOOK NOW
					</Link>
				</BrandButton>
			</FadeIn>
		</section>
	);
};
