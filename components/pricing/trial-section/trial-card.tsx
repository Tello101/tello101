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

	const bgColor = minutes === 'minutes25' ? 'bg-primary-200' : 'bg-purple-200';
	const textColor = minutes === 'minutes25' ? 'text-primary' : 'text-slate-700';
	const discountColor = minutes === 'minutes25' ? 'bg-primary' : 'bg-purple-500';

	return (
		<FadeIn delay={delay} direction={direction}>
			<Card className='rounded-3xl overflow-hidden border-none shadow-lg bg-white'>
				{/* 상단 색상 영역 */}
				<div className={`w-full py-3 ${minutes === 'minutes25' ? 'bg-blue-500' : 'bg-purple-500'}`}>
					<div className='text-white text-center font-medium'>{t(`common.${minutes}`)}</div>
				</div>

				<CardContent className='p-5 text-center'>
					{/* 가격 영역 - 훨씬 더 강조 */}
					<div className='flex justify-center items-center my-3'>
						<div className='relative mr-2'>
							<span className='text-gray-400 text-lg line-through font-light absolute -top-5 right-0'>
								${originalPrice}
							</span>
							<span
								className={`${minutes === 'minutes25' ? 'text-blue-500' : 'text-purple-500'} text-[42px] font-bold`}
							>
								{price}
							</span>
						</div>
						<span className='text-gray-500 text-base self-end mb-3'>USD</span>
					</div>

					{/* 수업 설명 */}
					<div className='text-gray-600 text-sm my-2'>{`${t('common.lesson1.count')} ${t('common.lesson1.desc')}`}</div>

					{/* 할인 정보 - 하단 배너로 변경 */}
					<div
						className={`mt-4 -mx-5 -mb-5 py-2 text-white text-base font-medium
			  ${minutes === 'minutes25' ? 'bg-blue-400' : 'bg-purple-400'}`}
					>
						{t(`common.${discountKey}`)}
					</div>
				</CardContent>
			</Card>
		</FadeIn>

		// <FadeIn delay={delay} direction={direction}>
		// 	<Card className='rounded-3xl overflow-hidden border-none shadow-lg bg-white hover:shadow-xl transition-shadow duration-300'>
		// 		<CardContent className='p-7 text-center flex flex-col items-center'>
		// 			{/* 시간 배지 - 명확한 최상위 요소로 표현 */}
		// 			<div
		// 				className={`text-white bg-gradient-to-r ${
		// 					minutes === 'minutes25' ? 'from-blue-400 to-blue-500' : 'from-purple-400 to-purple-500'
		// 				} rounded-full px-6 py-1.5 text-sm font-medium tracking-wide shadow-sm`}
		// 			>
		// 				{t(`common.${minutes}`)}
		// 			</div>

		// 			{/* 컨텐츠 영역 - 명확한 그룹화 */}
		// 			<div className='mt-3 mb-1 flex flex-col gap-2'>
		// 				{/* 수업 설명 */}
		// 				<div className='text-gray-500 text-sm font-medium'>{`${t('common.lesson1.count')} ${t(
		// 					'common.lesson1.desc'
		// 				)}`}</div>

		// 				{/* 가격 정보 - 중요 정보로 강조 */}
		// 				<div className='flex items-center justify-center gap-2 my-1'>
		// 					<span className='text-gray-400 text-2xl line-through font-light'>${originalPrice}</span>
		// 					<span
		// 						className={`${minutes === 'minutes25' ? 'text-blue-500' : 'text-purple-500'} text-[42px] font-bold`}
		// 					>
		// 						{price}
		// 					</span>
		// 					<span className='text-gray-400 text-base font-medium'>USD</span>
		// 				</div>
		// 			</div>

		// 			{/* 할인 정보 - 접근성 개선 */}
		// 			<div
		// 				className={`mt-3 px-5 py-1.5 rounded-full text-white text-sm font-medium tracking-wide
		// 	  bg-gradient-to-r ${
		// 			minutes === 'minutes25' ? 'from-blue-400/90 to-blue-500/90' : 'from-purple-400/90 to-purple-500/90'
		// 		} shadow-sm transform`}
		// 			>
		// 				{t(`common.${discountKey}`)}
		// 			</div>
		// 		</CardContent>
		// 	</Card>
		// </FadeIn>

		// <FadeIn delay={delay} direction={direction}>
		// 	<Card className='rounded-2xl overflow-hidden border-none shadow-md bg-white'>
		// 		<CardContent className='p-6 text-center flex flex-col items-center gap-3'>
		// 			{/* 시간 배지 */}
		// 			<div className={`text-black ${bgColor} rounded-full px-5 py-1 text-sm font-semibold`}>
		// 				{t(`common.${minutes}`)}
		// 			</div>

		// 			{/* 수업 설명 */}
		// 			<div className='text-gray-600 text-sm'>{`${t('common.lesson1.count')} ${t('common.lesson1.desc')}`}</div>

		// 			{/* 가격 정보 */}
		// 			<div className='flex items-center justify-center gap-2'>
		// 				<span className='text-gray-400 text-2xl line-through'>${originalPrice}</span>
		// 				<span className={`${textColor} text-[42px] font-extrabold`}>{price}</span>
		// 				<span className='text-gray-500 text-base pb-1'>USD</span>
		// 			</div>

		// 			{/* 할인 정보 (별도 배너 없이 깔끔하게) */}
		// 			<div
		// 				className={`mt-1 px-4 py-1 rounded-full text-white text-lg font-semibold
		// 					${discountColor}`}
		// 			>
		// 				{t(`common.${discountKey}`)}
		// 			</div>
		// 		</CardContent>
		// 	</Card>
		// </FadeIn>

		// <FadeIn delay={delay} direction={direction}>
		// 	<Card className='brand-card rounded-xl overflow-hidden relative h-full border-none'>
		// 		<CardContent className='p-8 text-center flex flex-col items-center'>
		// 			{/* 시간 정보 */}
		// 			<div className={`justify-center ${bgColor} text-white rounded-full px-6 py-2 mb-1 w-fit`}>
		// 				<span className='text-xl font-bold'>{t(`common.${minutes}`)}</span>
		// 			</div>

		// 			{/* 수업 횟수 */}
		// 			<div className='mb-6'>
		// 				<span className={`inline-block px-4 py-1 text-gray-500 text-sm`}>
		// 					{`${t('common.lesson1.count')} ${t('common.lesson1.desc')}`}
		// 				</span>
		// 			</div>

		// 			{/* 가격 정보 */}
		// 			<div className='flex items-center justify-center'>
		// 				<span className='text-gray-400 text-2xl line-through mr-2'>${originalPrice}</span>
		// 				<span className={`${textColor} text-[42px] font-bold`}>{price}</span>
		// 				<span className='text-gray-500 ml-2 text-lg'>USD</span>
		// 			</div>

		// 			{/* 할인 정보 */}
		// 		</CardContent>
		// 		<CardFooter className='bg-red-500 pt-6 flex justify-center items-center'>
		// 			<p className='text-3xl font-bold text-white'>{t(`common.${discountKey}`)}</p>
		// 		</CardFooter>
		// 	</Card>
		// </FadeIn>
	);
};
