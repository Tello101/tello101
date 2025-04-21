import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BrandButton } from '@/components/ui/brand-button';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const LessonContentSelector = () => {
	const t = useTranslations('Services.lesson_content');
	const t2 = useTranslations('Services.common');
	const selected = 'business_english';

	const contents = [
		{
			id: 'australian_topics',
			title: t('australian_topics'),
			description: t('australian_topics_desc'),
			imageUrl: '/images/services/lesson_content_1.jpg',
		},
		{
			id: 'business_english',
			title: t('business_english'),
			description: t('business_english_desc'),
			imageUrl: '/images/services/lesson_content_2.jpg',
		},
		{
			id: 'interview_prep',
			title: t('interview_prep'),
			description: t('interview_prep_desc'),
			imageUrl: '/images/services/lesson_content_3.jpg',
		},
		{
			id: 'academic_english',
			title: t('academic_english'),
			description: t('academic_english_desc'),
			imageUrl: '/images/services/lesson_content_4.jpg',
		},
		{
			id: 'daily_conversation',
			title: t('daily_conversation'),
			description: t('daily_conversation_desc'),
			imageUrl: '/images/services/lesson_content_5.jpg',
		},
		{
			id: 'work_holiday',
			title: t('work_holiday'),
			description: t('work_holiday_desc'),
			imageUrl: '/images/services/lesson_content_6.jpg',
		},
	];

	return (
		<div className='w-full max-w-5xl mx-auto'>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-4'>
				{contents.map((content) => (
					<Card
						key={content.id}
						className={`border cursor-pointer transition-all h-full flex flex-col shadow-md ${
							selected === content.id ? 'border-primary bg-primary/5' : 'border-gray-100 '
						}`}
					>
						{/* 이미지 영역 */}
						<div className='relative w-full h-40 overflow-hidden rounded-t-lg'>
							<Image src={content.imageUrl} alt={content.title} fill className='object-cover' />
						</div>

						<CardHeader className='pb-2 relative'>
							<CardTitle className='text-xl font-bold'>{content.title}</CardTitle>
						</CardHeader>
						<CardContent className='pb-4 flex-grow'>
							<CardDescription className='text-gray-600'>{content.description}</CardDescription>
						</CardContent>
						<CardFooter className='mt-auto'>
							<Button
								variant={selected === content.id ? 'default' : 'outline'}
								size='sm'
								className={cn(
									'w-full text-md font-medium rounded-[6px] border-primary ',
									selected === content.id ? 'text-white' : 'text-primary hover:text-primary'
								)}
								onClick={(e) => {
									e.stopPropagation();
								}}
							>
								{selected === content.id ? t2('selected') : t2('select')}
							</Button>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	);
};
