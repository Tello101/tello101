'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { FadeIn } from '@/components/animations/fade-in';
import { BrandButton } from '@/components/ui/brand-button';

export const TestimonialSection = () => {
	const t = useTranslations('Home.Testimonial');
	const locale = useLocale();

	return (
		<section className='brand-section bg-gray-50'>
			<div className='container'>
				<FadeIn>
					<div className='brand-testimonial max-w-3xl mx-auto'>
						<div className='flex flex-col sm:flex-row bg-white rounded-xl overflow-hidden shadow-lg'>
							<div className='relative w-full sm:w-1/3 aspect-[3/4]'>
								<Image
									src='/images/landing_testimonial.webp'
									alt='Student testimonial'
									fill
									className='object-cover'
									sizes='(max-width: 768px) 100vw, 33vw'
								/>
							</div>
							<div className='flex-1 p-8 flex flex-col justify-between'>
								<div>
									<svg xmlns='http://www.w3.org/2000/svg' width='45' height='36' className='text-primary/20 mb-6'>
										<path
											fill='currentColor'
											d='M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z'
										></path>
									</svg>
									<p className='brand-quote mb-6'>{t('quote')}</p>
									<div>
										<p className='font-bold'>Jiwon</p>
										<p className='text-sm text-gray-600'>Tello101 Student</p>
									</div>
								</div>
								<div className='mt-8'>
									<BrandButton size='lg' variant='default' className='text-white' asChild>
										<Link href={`/${locale}/contact`} className='flex items-center'>
											{t('cta')}
										</Link>
									</BrandButton>
								</div>
							</div>
						</div>
					</div>
				</FadeIn>
			</div>
		</section>
	);
};
