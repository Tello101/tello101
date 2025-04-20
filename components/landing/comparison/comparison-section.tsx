'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/animations/fade-in';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { SectionHeader } from '@/components/section-header';
import Image from 'next/image';

// 비교 포인트 아이템 컴포넌트
const ComparisonPoint = ({
	point,
	isPositive,
	className = '',
	iconClassName = '',
	textClassName = '',
}: {
	point: string;
	isPositive: boolean;
	className?: string;
	iconClassName?: string;
	textClassName?: string;
}) => {
	const Icon = isPositive ? Check : X;
	const iconColor = isPositive ? 'text-secondary' : 'text-red-400';

	return (
		<li className={`flex items-start ${isPositive ? 'bg-white/10 rounded-lg' : ''} ${className}`}>
			<Icon className={`${iconColor} flex-shrink-0 mt-0.5 ${iconClassName}`} />
			<span className={textClassName}>{point}</span>
		</li>
	);
};

// 개별 비교 아이템 컴포넌트
const ComparisonItem = ({
	item,
	index,
	isLast,
	isTello,
}: {
	item: any;
	index: number;
	isLast: boolean;
	isTello: boolean;
}) => {
	const itemData = isTello ? item.tello : item.other;
	const borderColor = isTello ? 'border-white/20' : 'border-gray-300';
	const titleColor = isTello ? 'text-secondary' : 'text-gray-500';
	const descriptionColor = isTello ? 'text-white/90' : 'text-gray-500';
	const textColor = isTello ? '' : 'text-gray-600';
	const numberBgColor = isTello ? 'bg-white/20' : 'bg-gray-300';
	const numberTextColor = isTello ? 'text-white' : 'text-gray-600';

	const containerClass = `relative md:min-h-[180px] xl:min-h-[150px] 2xl:min-h-0 ${
		!isLast ? `border-b ${borderColor}` : ''
	}`;
	const headingClass = `text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-4 ${titleColor} flex items-center`;
	const circleClass = `${numberBgColor} rounded-full w-6 h-6 md:w-8 md:h-8 inline-flex items-center justify-center mr-2 md:mr-3 ${numberTextColor} text-sm md:text-base flex-shrink-0`;
	const descriptionClass = `mb-2 ${descriptionColor} leading-tight md:leading-relaxed text-md md:text-lg`;
	const pointsClass = 'space-y-2 md:space-y-3';
	const pointClass = 'p-2 md:p-3';
	const iconClass = 'w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3';
	const pointTextClass = `leading-tight md:leading-relaxed text-sm md:text-base ${isTello ? '' : textColor}`;

	return (
		<div key={`${isTello ? 'tello' : 'other'}-item-${index}`} className={containerClass}>
			<div className='py-6'>
				<h4 className={headingClass}>
					<span className={circleClass}>{isTello ? <Check className='w-4 h-4' /> : <X className='w-4 h-4' />}</span>
					<span className='leading-tight text-xl md:text-2xl'>{itemData.title}</span>
				</h4>
				<p className={descriptionClass}>{itemData.description}</p>
				{itemData.points && itemData.points.length > 0 && (
					<ul className={pointsClass}>
						{itemData.points.map((point: string, idx: number) => (
							<ComparisonPoint
								key={`${isTello ? 'tello' : 'other'}-point-${idx}`}
								point={point}
								isPositive={isTello}
								className={pointClass}
								iconClassName={iconClass}
								textClassName={pointTextClass}
							/>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

// 비교 리스트 컴포넌트
const ComparisonList = ({ items, isTello }: { items: any[]; isTello: boolean }) => {
	const t = useTranslations('Home.Comparison');
	const headingText = isTello ? t('tello') : t('others');
	// 헤더 텍스트 색상
	const headingTextColor = isTello ? 'text-white' : 'text-gray-600';
	const bgColor = isTello ? 'bg-primary' : 'bg-gray-100';

	return (
		<div className={`${bgColor} w-full h-full`}>
			<div className='p-10 lg:p-12'>
				<div className='flex items-center mb-6'>
					<h3 className={`text-3xl md:text-4xl font-bold ${headingTextColor}`}>{headingText}</h3>
				</div>
				<div className='flex flex-col'>
					{items.map((item, index) => (
						<ComparisonItem
							key={`${isTello ? 'tello' : 'other'}-item-${index}`}
							item={item}
							index={index}
							isLast={index === items.length - 1}
							isTello={isTello}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export const ComparisonSection = () => {
	const t = useTranslations('Home.Comparison');
	const items = t.raw('items');

	return (
		<>
			{/* 공통 타이틀 영역 (흰색 배경, 프라이머리 텍스트) */}
			<section className='bg-white w-full'>
				<div className='container max-w-[1200px] mx-auto py-16 flex items-center justify-center'>
					<h2 className={`text-4xl md:text-5xl font-bold text-primary`}>{t('title')}</h2>
				</div>
			</section>

			{/* 콘텐츠 영역 - 비교 섹션 */}
			<section className='w-full'>
				{/* 모바일 레이아웃 */}
				<div className='md:hidden'>
					<div>
						{/* 모바일에서는 Others가 먼저 나옴 */}
						<ComparisonList items={items} isTello={false} />
						<ComparisonList items={items} isTello={true} />
					</div>
				</div>

				{/* 데스크탑 레이아웃 */}
				<div className='hidden md:block'>
					<div className='grid grid-cols-2'>
						<div className='bg-primary'>
							<div className='max-w-[600px] ml-auto'>
								<div className='px-10 lg:px-12 py-10 lg:py-16'>
									<div className='flex items-center mb-6'>
										<h3 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white'>{t('tello')}</h3>
									</div>
									<div className='flex flex-col'>
										{items.map((item: any, index: number) => (
											<ComparisonItem
												key={`tello-item-${index}`}
												item={item}
												index={index}
												isLast={index === items.length - 1}
												isTello={true}
											/>
										))}
									</div>
								</div>
							</div>
						</div>
						<div className='bg-gray-100'>
							<div className='max-w-[600px]'>
								<div className='px-10 lg:px-12 py-10 lg:py-16'>
									<div className='flex items-center mb-6'>
										<h3 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-600'>{t('others')}</h3>
									</div>
									<div className='flex flex-col'>
										{items.map((item: any, index: number) => (
											<ComparisonItem
												key={`other-item-${index}`}
												item={item}
												index={index}
												isLast={index === items.length - 1}
												isTello={false}
											/>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
