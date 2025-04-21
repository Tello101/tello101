'use client';

import { useState, useEffect, useCallback } from 'react';
import { PointCard } from './point-card';
import { useTranslations } from 'next-intl';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	type CarouselApi,
} from '@/components/ui/carousel';
import { SectionHeader } from '@/components/section-header';

export const PointsSection = () => {
	const t = useTranslations('Tutors');
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);

	// 하이라이트 렌더 함수
	const renderHighlight = (chunks: React.ReactNode) => (
		<span className='bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text font-bold'>
			{chunks}
		</span>
	);

	// 카드 데이터 정의 - 타이틀은 컴포넌트에서 rich 처리
	const cardData = [
		{
			titleKey: 'points.box1.title',
			description: t('points.box1.desc'),
			image: '/images/tutors/tutors_point_1.png',
			index: 0,
		},
		{
			titleKey: 'points.box2.title',
			description: t('points.box2.desc'),
			image: '/images/tutors/tutors_point_2.png',
			index: 1,
		},
		{
			titleKey: 'points.box3.title',
			description: t('points.box3.desc'),
			image: '/images/tutors/tutors_point_3.png',
			index: 2,
		},
		{
			titleKey: 'points.box4.title',
			description: t('points.box4.desc'),
			image: '/images/tutors/tutors_point_4.png',
			index: 3,
		},
	];

	const handleSelect = useCallback(() => {
		if (!api) return;
		setCurrent(api.selectedScrollSnap());
	}, [api]);

	const handleScroll = useCallback(() => {
		if (!api) return;
		setCurrent(api.selectedScrollSnap());
	}, [api]);

	useEffect(() => {
		if (!api) return;

		api.on('select', handleSelect);
		api.on('scroll', handleScroll);
		api.on('reInit', handleSelect);

		setCurrent(api.selectedScrollSnap());

		return () => {
			api.off('select', handleSelect);
			api.off('scroll', handleScroll);
			api.off('reInit', handleSelect);
		};
	}, [api, handleSelect, handleScroll]);

	const getSlideStyle = (index: number) => {
		const isCurrent = index === current;

		return {
			opacity: isCurrent ? 1 : 0.4,
			filter: isCurrent ? 'none' : 'blur(1px)',
			transform: `scale(${isCurrent ? 1 : 0.85})`,
			transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
			pointerEvents: isCurrent ? 'auto' : 'none',
		} as React.CSSProperties;
	};

	return (
		<section className='py-16 md:py-24 brand-gradient-light'>
			<div className='container'>
				<div className='text-center mb-12'>
					<SectionHeader title={t('points.title')} />
				</div>

				<div className='relative mx-auto' style={{ maxWidth: '1000px' }}>
					<Carousel
						opts={{
							align: 'center',
							loop: false,
							skipSnaps: false,
							containScroll: 'trimSnaps',
							duration: 35,
							// 항상 현재 슬라이드가 중앙에 위치하도록 설정
							dragFree: false,
							// 첫 번째와 마지막 슬라이드도 중앙에 위치하도록 여백 설정
							inViewThreshold: 0,
						}}
						setApi={setApi}
						className='w-full px-0 md:px-14'
					>
						<CarouselContent className='-ml-2 md:-ml-4 select-none'>
							{cardData.map((card, index) => (
								<CarouselItem
									key={index}
									className='pl-2 md:pl-4 md:basis-4/5 lg:basis-2/3 transition-all duration-500 flex justify-center'
									style={getSlideStyle(index)}
								>
									<div className='px-1 py-4 md:px-4 w-full'>
										<PointCard
											index={card.index}
											titleKey={card.titleKey}
											renderHighlight={renderHighlight}
											description={card.description}
											image={card.image}
										/>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>

						{/* 커스텀 버튼 - 모바일에서는 숨김 */}
						<div className='hidden md:block'>
							<CarouselPrevious className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-3 z-20 bg-white rounded-full p-1 focus:outline-none hover:bg-gray-100 transition-colors border-0 h-10 w-10'>
								<ChevronLeft className='h-7 w-7 text-primary' />
							</CarouselPrevious>
							<CarouselNext className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-3 z-20 bg-white rounded-full p-1 focus:outline-none hover:bg-gray-100 transition-colors border-0 h-10 w-10'>
								<ChevronRight className='h-7 w-7 text-primary' />
							</CarouselNext>
						</div>
					</Carousel>

					{/* 인디케이터 */}
					<div className='flex justify-center space-x-3 mt-8'>
						{cardData.map((_, index) => (
							<button
								key={index}
								onClick={() => api?.scrollTo(index, true)}
								className={`w-4 h-4 rounded-full transition-all ${
									index === current ? 'bg-primary scale-125' : 'bg-gray-300 hover:bg-gray-400'
								}`}
								aria-label={`카드 ${index + 1}로 이동`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
