import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { BrandButton } from '@/components/ui/brand-button';
import { useLocale } from 'next-intl';

export const ServicesCta = () => {
	const t = useTranslations('Services.cta');
	const locale = useLocale();

	return (
		<section className='py-20 bg-primary/100'>
			<div className='container'>
				<div className='max-w-4xl mx-auto text-center'>
					<h3 className='text-4xl md:text-5xl font-bold mb-14 text-white'>{t('title')}</h3>
					<BrandButton size='lg' variant='white' asChild className='text-xl sm:px-8 sm:py-6'>
						<Link href={`/${locale}/contact`}>{t('enquire_now')}</Link>
					</BrandButton>
				</div>
			</div>
		</section>
	);
};
