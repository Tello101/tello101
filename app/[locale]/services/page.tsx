'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export default function ServicesPage() {
	const t = useTranslations('Header');

	return (
		<div className='container py-20'>
			<h1 className='text-4xl font-bold mb-6'>{t('services')}</h1>
			<p className='text-xl'>This page is under construction.</p>
		</div>
	);
}
