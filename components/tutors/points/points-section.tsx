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
import { SectionHeading } from '@/components/section-header';

export const PointsSection = () => {
  const t = useTranslations('Tutors');
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // 하이라이트 렌더 함수
  const renderHighlight = (chunks: React.ReactNode) => (
    <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text font-bold text-transparent">
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
    <section className="brand-gradient-light py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <SectionHeading title={t('points.title')} />
        </div>

        <div className="relative mx-auto" style={{ maxWidth: '1000px' }}>
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
            className="w-full px-0 md:px-14"
          >
            <CarouselContent className="-ml-2 select-none md:-ml-4">
              {cardData.map((card, index) => (
                <CarouselItem
                  key={index}
                  className="flex justify-center pl-2 transition-all duration-500 md:basis-4/5 md:pl-4 lg:basis-2/3"
                  style={getSlideStyle(index)}
                >
                  <div className="w-full px-1 py-4 md:px-4">
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
            <div className="hidden md:block">
              <CarouselPrevious className="absolute left-0 top-1/2 z-20 h-10 w-10 -translate-x-2 -translate-y-1/2 rounded-full border-0 bg-white p-1 transition-colors hover:bg-gray-100 focus:outline-none md:-translate-x-3">
                <ChevronLeft className="h-7 w-7 text-primary" />
              </CarouselPrevious>
              <CarouselNext className="absolute right-0 top-1/2 z-20 h-10 w-10 -translate-y-1/2 translate-x-2 rounded-full border-0 bg-white p-1 transition-colors hover:bg-gray-100 focus:outline-none md:translate-x-3">
                <ChevronRight className="h-7 w-7 text-primary" />
              </CarouselNext>
            </div>
          </Carousel>

          {/* 인디케이터 */}
          <div className="mt-8 flex justify-center space-x-3">
            {cardData.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index, true)}
                className={`h-4 w-4 rounded-full transition-all ${
                  index === current ? 'scale-125 bg-primary' : 'bg-gray-300 hover:bg-gray-400'
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
