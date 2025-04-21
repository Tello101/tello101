import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { FadeIn } from '@/components/animations/fade-in';
import { PricingCard } from '@/components/pricing/pricing-section/pricing-card';

export const LessonPackageSelector = () => {
	const t = useTranslations('Pricing');
	const [selectedTab, setSelectedTab] = useState('minutes25');

	const lessonTypes = ['lessons4', 'lessons8', 'lessons20', 'lessons40'];

	const cardStyles = [
		{
			bg: 'bg-gradient-to-br from-amber-50 to-amber-100',
			border: 'border-amber-200',
			text: 'text-amber-700',
			price: 'text-amber-800',
			label: 'bg-amber-500',
		},
		{
			bg: 'bg-gradient-to-br from-emerald-50 to-emerald-100',
			border: 'border-emerald-200',
			text: 'text-emerald-700',
			price: 'text-emerald-800',
			label: 'bg-emerald-500',
		},
		{
			bg: 'bg-gradient-to-br from-indigo-50 to-indigo-100',
			border: 'border-indigo-200',
			text: 'text-indigo-700',
			price: 'text-indigo-800',
			label: 'bg-indigo-500',
		},
		{
			bg: 'bg-gradient-to-br from-slate-50 to-slate-100',
			border: 'border-slate-200',
			text: 'text-slate-700',
			price: 'text-slate-800',
			label: 'bg-slate-700',
		},
	];

	// 각 탭별 카드 데이터
	const cardsData = {
		minutes25: cardStyles.map((style, index) => ({
			...style,
			lessonKey: lessonTypes[index],
		})),
		minutes50: cardStyles.map((style, index) => ({
			...style,
			lessonKey: lessonTypes[index],
		})),
	};

	return (
		<div className='max-w-5xl mx-auto py-4'>
			<Tabs defaultValue='minutes25' className='w-full' value={selectedTab} onValueChange={setSelectedTab}>
				<div className='flex justify-center mb-12'>
					<FadeIn delay={0.1} direction='up'>
						<TabsList className='bg-gray-white border border-gray-200 h-fit'>
							<TabsTrigger
								value='minutes25'
								className='px-8 py-3 text-black data-[state=active]:bg-primary/10 data-[state=active]:text-primary'
							>
								{t('common.minutes25')}
							</TabsTrigger>
							<TabsTrigger
								value='minutes50'
								className='px-8 py-3 text-black data-[state=active]:bg-primary/10 data-[state=active]:text-primary'
							>
								{t('common.minutes50')}
							</TabsTrigger>
						</TabsList>
					</FadeIn>
				</div>

				{/* 25분 탭 콘텐츠 */}
				<TabsContent value='minutes25'>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
						{cardsData.minutes25.map((card, index) => (
							<PricingCard key={index} card={card} index={index} minutesType='minutes25' delay={index * 0.1} />
						))}
					</div>
				</TabsContent>

				{/* 50분 탭 콘텐츠 */}
				<TabsContent value='minutes50'>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
						{cardsData.minutes50.map((card, index) => (
							<PricingCard key={index} card={card} index={index} minutesType='minutes50' delay={index * 0.1} />
						))}
					</div>
				</TabsContent>
			</Tabs>
		</div>
	);
};
