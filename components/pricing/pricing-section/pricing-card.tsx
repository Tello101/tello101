'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import { FadeIn } from '@/components/animations/fade-in';
import { cn } from '@/lib/utils';

// 가격 카드 컴포넌트
interface PricingCardProps {
	card: {
		bg: string;
		border: string;
		text: string;
		price: string;
		label: string;
		lessonKey: string;
	};
	index: number;
	minutesType: 'minutes25' | 'minutes50';
	delay?: number;
}

export const PricingCard = ({ card, index, minutesType, delay = 0 }: PricingCardProps) => {
	const t = useTranslations('Pricing');

	return (
		<FadeIn delay={delay} direction='up'>
			<Card
				className={`overflow-hidden hover:shadow-xl transition-all border-2 ${card.border} rounded-xl h-full flex flex-col`}
			>
				<CardHeader className={`p-6 ${card.bg} text-center flex flex-col items-center border-b ${card.border}`}>
					<div className={`${card.label} bg-opacity-40 rounded-[6px] w-fit mx-auto px-4 py-1`}>
						<span className={`text-sm font-bold ${card.text} tracking-wider`}>{`${t(
							`common.${card.lessonKey}.count`
						)} ${t(`common.${card.lessonKey}.desc`)}`}</span>
					</div>
					<div className='mt-2 flex items-center justify-center'>
						<span className={cn(`text-[42px] font-extrabold`, card.price)}>
							{t(`pricing_info.${minutesType}.${index}.price`)}
						</span>
						<span className='text-gray-500 ml-1'>USD</span>
					</div>
				</CardHeader>

				<CardContent className='p-6 flex-1'>
					<div className='space-y-3'>
						<div className='flex items-center gap-2 text-gray-500'>
							<CheckCircle2 className={`w-5 h-5 ${card.text}`} />
							<p>{t(`pricing_info.${minutesType}.${index}.per_lesson`)}</p>
						</div>
						<div className='flex items-center gap-2 text-gray-500'>
							<CheckCircle2 className={`w-5 h-5 ${card.text}`} />
							<p>{t(`pricing_info.${minutesType}.${index}.valid`)}</p>
						</div>
					</div>
				</CardContent>
			</Card>
		</FadeIn>
	);
};
