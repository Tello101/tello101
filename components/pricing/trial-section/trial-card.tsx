'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Card } from '@/components/ui/card';
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
	const badgeBgColor = minutes === 'minutes25' ? 'bg-blue-100' : 'bg-blue-50';
	const badgeTextColor = minutes === 'minutes25' ? 'text-primary/80' : 'text-slate-700/80';

	return (
		<FadeIn delay={delay} direction={direction}>
			<Card className='brand-card rounded-xl overflow-hidden relative h-full p-8'>
				{/* 할인 뱃지 */}
				<div className='absolute right-0 top-0'>
					<div className='bg-rose-500 text-white text-sm font-bold px-4 py-1 rounded-bl-lg'>
						{t(`common.${discountKey}`)}
					</div>
				</div>

				<div className='text-center'>
					{/* 시간 정보 */}
					<div className={`inline-flex items-center justify-center ${bgColor} text-white rounded-full px-6 py-2 mb-3`}>
						<span className='text-xl font-bold'>{t(`common.${minutes}`)}</span>
					</div>

					{/* 수업 횟수 */}
					<div className='mb-6'>
						<span className={`inline-block px-4 py-1 rounded-full ${badgeBgColor} ${badgeTextColor} text-sm`}>
							{`${t('common.lesson1.count')} ${t('common.lesson1.desc')}`}
						</span>
					</div>

					{/* 가격 정보 */}
					<div className='mb-2'>
						<div className='flex items-center justify-center'>
							<span className='text-gray-400 line-through mr-2'>${originalPrice}</span>
							<span className={`${textColor} text-5xl font-bold`}>{price}</span>
							<span className='text-gray-500 ml-2 text-lg'>USD</span>
						</div>
					</div>
				</div>
			</Card>
		</FadeIn>
	);
};
