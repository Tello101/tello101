'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { BrandButton } from '@/components/ui/brand-button';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/fade-in';
import { BadgeCheck } from 'lucide-react';
import { PersonalizedLessonUI } from '@/components/landing/benefits/personalized-lesson';
import { TimeSlot } from '@/components/landing/benefits/time-slot';
import { CalendarGrid } from '@/components/landing/benefits/calendar-grid';

export const BenefitsSection = () => {
	const t = useTranslations('Home.Benefits');
	const locale = useLocale();

	// 그라데이션 하이라이트 렌더링 함수
	const renderHighlight = (chunks: React.ReactNode) => (
		<span className='bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text font-bold'>
			{chunks}
		</span>
	);

	return (
		<section className='brand-section bg-white'>
			<div className='container'>
				<div className='space-y-32'>
					{/* Card 1 - Time Zone */}
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center '>
						<FadeIn direction='left' className='space-y-6'>
							<h2 className='text-4xl font-bold text-black'>
								{t.rich('timezone.title', {
									highlight: renderHighlight,
								})}
							</h2>
							<ul className='space-y-4 mt-6'>
								<li className='flex items-start'>
									<BadgeCheck className='h-6 w-6 text-primary mr-3 mt-[2px] flex-shrink-0' />
									<p className='text-lg text-gray-600'>{t('timezone.p1')}</p>
								</li>
								<li className='flex items-start'>
									<BadgeCheck className='h-6 w-6 text-primary mr-3 mt-[2px] flex-shrink-0' />
									<p className='text-lg text-gray-600'>{t('timezone.p2')}</p>
								</li>
							</ul>
							<BrandButton size='lg' variant='default' className='text-white mt-4' asChild>
								<Link href={`/${locale}/contact`} className='flex items-center'>
									{t('timezone.cta')}
								</Link>
							</BrandButton>
						</FadeIn>
						<FadeIn direction='right' delay={0.2}>
							<div className='brand-card p-8'>
								<div className='bg-white rounded-xl border border-gray-100 p-4 shadow-[0_10px_30px_rgba(41,128,255,0.08)]'>
									<div className='flex justify-between items-center mb-4'>
										<h3 className='font-medium'>April 2025</h3>
										<div className='flex space-x-2'>
											<Button variant='outline' size='icon' className='h-8 w-8 rounded-full'>
												<span className='sr-only'>Previous month</span>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													width='24'
													height='24'
													viewBox='0 0 24 24'
													fill='none'
													stroke='currentColor'
													strokeWidth='2'
													strokeLinecap='round'
													strokeLinejoin='round'
													className='h-4 w-4'
												>
													<path d='m15 18-6-6 6-6' />
												</svg>
											</Button>
											<Button variant='outline' size='icon' className='h-8 w-8 rounded-full'>
												<span className='sr-only'>Next month</span>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													width='24'
													height='24'
													viewBox='0 0 24 24'
													fill='none'
													stroke='currentColor'
													strokeWidth='2'
													strokeLinecap='round'
													strokeLinejoin='round'
													className='h-4 w-4'
												>
													<path d='m9 18 6-6-6-6' />
												</svg>
											</Button>
										</div>
									</div>
									<div className='grid grid-cols-7 gap-2 text-center text-sm mt-4'>
										<div className='text-gray-500 font-medium'>Su</div>
										<div className='text-gray-500 font-medium'>Mo</div>
										<div className='text-gray-500 font-medium'>Tu</div>
										<div className='text-gray-500 font-medium'>We</div>
										<div className='text-gray-500 font-medium'>Th</div>
										<div className='text-gray-500 font-medium'>Fr</div>
										<div className='text-gray-500 font-medium'>Sa</div>
										{/* Calendar days */}
										<CalendarGrid />
									</div>
									<div className='mt-6 space-y-3'>
										<TimeSlot time='9:00 AM - 9:25 AM' />
										<TimeSlot time='11:00 AM - 11:50 AM' />
										<TimeSlot time='6:00 PM - 6:50 PM' />
									</div>
								</div>
							</div>
						</FadeIn>
					</div>

					{/* Card 2 - Personalized */}
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
						<FadeIn direction='right' className='order-2 lg:order-1'>
							<h2 className='text-4xl font-bold'>
								{t.rich('australia.title', {
									highlight: renderHighlight,
								})}
							</h2>
							<p className='text-lg text-gray-600 leading-relaxed'>{t('australia.p1')}</p>
							<ul className='space-y-4 mt-6'>
								<li className='flex items-start'>
									<BadgeCheck className='h-6 w-6 text-primary mr-3 mt-[2px] flex-shrink-0' />
									<p className='text-lg text-gray-600'>{t('australia.professionals')}</p>
								</li>
								<li className='flex items-start'>
									<BadgeCheck className='h-6 w-6 text-primary mr-3 mt-[2px] flex-shrink-0' />
									<p className='text-lg text-gray-600'>{t('australia.students')}</p>
								</li>
								<li className='flex items-start'>
									<BadgeCheck className='h-6 w-6 text-primary mr-3 mt-[2px] flex-shrink-0' />
									<p className='text-lg text-gray-600'>{t('australia.holiday')}</p>
								</li>
							</ul>
							<BrandButton size='lg' variant='default' className='text-white mt-4' asChild>
								<Link href={`/${locale}/contact`} className='flex items-center'>
									{t('australia.cta')}
								</Link>
							</BrandButton>
						</FadeIn>
						<FadeIn direction='left' delay={0.2} className='space-y-6 order-1 lg:order-2'>
							<div className='brand-card p-0 overflow-hidden'>
								<div className='relative h-[350px]'>
									<Image
										src='/images/landing_confidence.webp'
										alt='Australia at your fingertips'
										fill
										className='object-cover'
									/>
								</div>
							</div>
						</FadeIn>
					</div>

					{/* Card 3 - Australia */}
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
						<FadeIn direction='left' className='space-y-6'>
							<div className='brand-card p-0 overflow-hidden'>
								<div className='bg-gray-50 rounded-xl p-6 shadow-md'>
									<PersonalizedLessonUI />
								</div>
							</div>
						</FadeIn>
						<FadeIn direction='right' delay={0.2}>
							<h2 className='text-4xl font-bold lg:whitespace-pre-line'>
								{t.rich('personalized.title', {
									highlight: renderHighlight,
								})}
							</h2>
							<ul className='space-y-4 mt-6'>
								<li className='flex items-start'>
									<BadgeCheck className='h-6 w-6 text-primary mr-3 mt-[2px] flex-shrink-0' />
									<p className='text-lg text-gray-600'>{t('personalized.p1')}</p>
								</li>
								<li className='flex items-start'>
									<BadgeCheck className='h-6 w-6 text-primary mr-3 mt-[2px] flex-shrink-0' />
									<p className='text-lg text-gray-600'>{t('personalized.p2')}</p>
								</li>
							</ul>
							<BrandButton size='lg' variant='default' className='text-white mt-4' asChild>
								<Link href={`/${locale}/contact`} className='flex items-center'>
									{t('personalized.cta')}
								</Link>
							</BrandButton>
						</FadeIn>
					</div>
				</div>
			</div>
		</section>
	);
};
