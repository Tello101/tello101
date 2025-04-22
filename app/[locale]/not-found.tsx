'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BrandButton } from '@/components/ui/brand-button';
import { useTranslations, useLocale } from 'next-intl';

export default function NotFound() {
	const t = useTranslations('NotFound');
	const locale = useLocale();

	return (
		<div className='container flex flex-col gap-5 items-center justify-center min-h-[70vh] py-12 text-center'>
			<div className='max-w-md mx-auto'>
				<Image src='/images/404.png' alt='404' width={120} height={100} className='h-auto' priority />
			</div>
			<h2 className='text-3xl font-bold mb-5 text-primary'>{t('title')}</h2>
			<BrandButton variant='default' asChild>
				<Link href={`/${locale}`}>{t('back')}</Link>
			</BrandButton>
		</div>
	);
}
