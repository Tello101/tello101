'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BrandButton } from '@/components/ui/brand-button';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/fade-in';
import { Clock, BadgeCheck, Globe } from 'lucide-react';
import { PersonalizedLessonUI } from '@/components/landing/benefits/personalized-lesson';

export const BenefitsSection = () => {
	return (
		<section className='brand-section bg-white'>
			<div className='container'>
				<div className='space-y-32'>
					{/* Card 1 - Time Zone */}
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
						<FadeIn direction='left' className='space-y-6'>
							<h2 className='text-4xl font-bold'>Built for Your Time Zone</h2>
							<p className='text-lg text-gray-600 leading-relaxed'>
								Tello101's Australia-based tutors operate in a time zone ideal for learners in East Asia, with just a
								1–3 hour time difference.
							</p>
							<p className='text-lg text-gray-600 leading-relaxed'>
								This means lessons easily fit into your busy day, with flexible 25- or 50-minute options that work
								around your schedule.
							</p>
							<BrandButton size='lg' variant='default' className='text-white mt-4' asChild>
								<Link href='/contact' className='flex items-center'>
									BOOK TRIAL NOW
								</Link>
							</BrandButton>
						</FadeIn>
						<FadeIn direction='right' delay={0.2}>
							<div className='brand-card p-8'>
								<div className='brand-calendar'>
									<div className='brand-calendar-header'>
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
										<div className='brand-time-slot'>
											<Clock className='h-5 w-5 text-primary mr-3' />
											<span className='font-medium'>9:00 AM - 9:25 AM</span>
										</div>
										<div className='brand-time-slot'>
											<Clock className='h-5 w-5 text-primary mr-3' />
											<span className='font-medium'>11:00 AM - 11:50 AM</span>
										</div>
										<div className='brand-time-slot'>
											<Clock className='h-5 w-5 text-primary mr-3' />
											<span className='font-medium'>6:00 PM - 6:50 PM</span>
										</div>
									</div>
								</div>
							</div>
						</FadeIn>
					</div>

					{/* Card 2 - Personalized */}
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
						<FadeIn direction='right' className='order-2 lg:order-1'>
							<div className='brand-card p-0 overflow-hidden'>
								<div className='bg-gray-50 rounded-xl p-6 shadow-md'>
									<PersonalizedLessonUI />
								</div>
							</div>
						</FadeIn>
						<FadeIn direction='left' delay={0.2} className='space-y-6 order-1 lg:order-2'>
							<h2 className='text-4xl font-bold'>1:1 Personalised lessons to speak like a native</h2>
							<p className='text-lg text-gray-600 leading-relaxed'>
								From professional communication to casual conversations, master English for every context.
							</p>
							<p className='text-lg text-gray-600 leading-relaxed'>
								Tailor your lessons to your career, interests, and learning goals for a fully customised experience.
							</p>
							<BrandButton size='lg' variant='default' className='text-white mt-4' asChild>
								<Link href='/contact' className='flex items-center'>
									BOOK TRIAL NOW
								</Link>
							</BrandButton>
						</FadeIn>
					</div>

					{/* Card 3 - Australia */}
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
						<FadeIn direction='left' className='space-y-6'>
							<h2 className='text-4xl font-bold'>Australia at your fingertips - boost your confidence</h2>
							<p className='text-lg text-gray-600 leading-relaxed'>
								With Tello101's authentic Australian content, master the accent, culture and slang while honing your
								spoken English skills.
							</p>
							<ul className='space-y-4 mt-6'>
								<li className='flex items-start'>
									<BadgeCheck className='h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0' />
									<p className='text-lg text-gray-600'>
										For professionals, connect with young Australians in your field of work.
									</p>
								</li>
								<li className='flex items-start'>
									<BadgeCheck className='h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0' />
									<p className='text-lg text-gray-600'>
										For students, gain first-hand insights from Australian university students.
									</p>
								</li>
								<li className='flex items-start'>
									<BadgeCheck className='h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0' />
									<p className='text-lg text-gray-600'>
										For working holiday makers, unlock tips to maximise your Australian experience.
									</p>
								</li>
							</ul>
							<BrandButton size='lg' variant='default' className='text-white mt-4' asChild>
								<Link href='/contact' className='flex items-center'>
									BOOK TRIAL NOW
								</Link>
							</BrandButton>
						</FadeIn>
						<FadeIn direction='right' delay={0.2}>
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
				</div>
			</div>
		</section>
	);
};

// Calendar Grid component
const CalendarGrid = () => {
	return (
		<>
			<div className='text-gray-400 brand-calendar-day'>30</div>
			<div className='text-gray-400 brand-calendar-day'>31</div>
			<div className='brand-calendar-day'>1</div>
			<div className='brand-calendar-day'>2</div>
			<div className='brand-calendar-day'>3</div>
			<div className='brand-calendar-day'>4</div>
			<div className='brand-calendar-day'>5</div>
			<div className='brand-calendar-day'>6</div>
			<div className='brand-calendar-day'>7</div>
			<div className='brand-calendar-day'>8</div>
			<div className='brand-calendar-day selected'>9</div>
			<div className='brand-calendar-day'>10</div>
			<div className='brand-calendar-day'>11</div>
			<div className='brand-calendar-day'>12</div>
			<div className='brand-calendar-day'>13</div>
			<div className='brand-calendar-day'>14</div>
			<div className='brand-calendar-day'>15</div>
			<div className='brand-calendar-day'>16</div>
			<div className='brand-calendar-day'>17</div>
			<div className='brand-calendar-day'>18</div>
			<div className='brand-calendar-day'>19</div>
			<div className='brand-calendar-day'>20</div>
			<div className='brand-calendar-day'>21</div>
			<div className='brand-calendar-day'>22</div>
			<div className='brand-calendar-day'>23</div>
			<div className='brand-calendar-day'>24</div>
			<div className='brand-calendar-day'>25</div>
			<div className='brand-calendar-day'>26</div>
			<div className='brand-calendar-day'>27</div>
			<div className='brand-calendar-day'>28</div>
			<div className='brand-calendar-day'>29</div>
			<div className='brand-calendar-day'>30</div>
			<div className='text-gray-400 brand-calendar-day'>1</div>
			<div className='text-gray-400 brand-calendar-day'>2</div>
			<div className='text-gray-400 brand-calendar-day'>3</div>
		</>
	);
};
