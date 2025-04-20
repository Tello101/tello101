'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { FadeIn } from '@/components/animations/fade-in';

interface TrialCardProps {
	minutes: 'minutes25' | 'minutes50';
	originalPrice: string;
	discountKey: 'discount67' | 'discount65';
	price: string;
	direction: 'left' | 'right';
	delay?: number;
}

export const TrialCard = ({ minutes, originalPrice, discountKey, price, direction, delay = 0 }: TrialCardProps) => {
	const t = useTranslations('Pricing');

	const bgColor = minutes === 'minutes25' ? 'bg-primary' : 'bg-slate-700';
	const textColor = minutes === 'minutes25' ? 'text-primary' : 'text-slate-700';

	return (
		<FadeIn delay={delay} direction={direction}>
			<Card className='brand-card rounded-xl overflow-hidden relative h-full border-none'>
				<CardContent className='p-8 text-center flex flex-col items-center'>
					{/* 시간 정보 */}
					<div className={`justify-center ${bgColor} text-white rounded-full px-6 py-2 mb-1 w-fit`}>
						<span className='text-xl font-bold'>{t(`common.${minutes}`)}</span>
					</div>

					{/* 수업 횟수 */}
					<div className='mb-6'>
						<span className={`inline-block px-4 py-1 text-sm`}>
							{`${t('common.lesson1.count')} ${t('common.lesson1.desc')}`}
						</span>
					</div>

					{/* 가격 정보 */}
					<div className='flex items-center justify-center'>
						<span className='text-gray-400 text-2xl line-through mr-2'>${originalPrice}</span>
						<span className={`${textColor} text-5xl font-bold`}>{price}</span>
						<span className='text-gray-500 ml-2 text-lg'>USD</span>
					</div>

					{/* 할인 정보 */}
				</CardContent>
				<CardFooter className='bg-rose-500 pt-6 flex justify-center items-center'>
					<p className='text-3xl font-bold text-white'>{t(`common.${discountKey}`)}</p>
				</CardFooter>
			</Card>
		</FadeIn>
	);
};
