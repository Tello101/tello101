import React, { useState, useEffect, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from '@/components/ui/carousel';
import { Tutor, TutorCard } from '@/components/tutors/tutor-list/tutor-card';
import { cn } from '@/lib/utils';

export const TutorCarousel = () => {
  const t = useTranslations('Tutors');
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const tutors = t.raw('find_tutors.tutors_list.tutors') as Tutor[];

  useEffect(() => {
    if (!api || !autoplay) return;

    const autoplayInterval = setInterval(() => {
      api.scrollNext();
    }, 2000);

    return () => {
      clearInterval(autoplayInterval);
    };
  }, [api, autoplay]);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on('select', onSelect);
    api.on('reInit', onSelect);

    return () => {
      api.off('select', onSelect);
      api.off('reInit', onSelect);
    };
  }, [api]);

  const goToSlide = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api],
  );

  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  return (
    <div className="mx-auto w-full max-w-5xl">
      <Carousel
        className="w-full"
        opts={{
          align: 'center',
          loop: true,
          containScroll: 'trimSnaps',
          dragFree: false,
          inViewThreshold: 0,
        }}
        setApi={setApi}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CarouselContent className="ml-0 select-none py-10">
          {tutors.map((tutor: Tutor, index: number) => (
            <div key={`${tutor.name}-${index}`} className="mx-3 min-w-[300px]">
              <TutorCard
                tutor={tutor}
                interests={t('find_tutors.tutors_list.interests')}
                current={t('find_tutors.tutors_list.current')}
              />
            </div>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-1 hidden md:flex" />
        <CarouselNext className="right-1 hidden md:flex" />
      </Carousel>

      {/* 캐러셀 인디케이터 */}
      <div className="mt-4 flex justify-center gap-2 md:hidden">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              'h-2 w-2 rounded-full transition-all',
              current === index ? 'w-4 bg-primary' : 'bg-gray-300',
            )}
            aria-label={`슬라이드 ${index + 1}로 이동`}
          />
        ))}
      </div>
    </div>
  );
};
