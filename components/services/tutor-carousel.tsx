import React from 'react';
import { useTranslations } from 'next-intl';
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Tutor, TutorCard } from '@/components/tutors/tutor-list/tutor-card';

export const TutorCarousel = () => {
	const t = useTranslations('Tutors');

	return (
		<div className='w-full max-w-5xl mx-auto'>
			<Carousel
				className='w-full'
				opts={{
					align: 'center',
					loop: true,
					containScroll: 'trimSnaps',
					dragFree: false,
					inViewThreshold: 0,
				}}
			>
				<CarouselContent className='select-none py-10 ml-0'>
					{t.raw('find_tutors.tutors_list.tutors').map((tutor: Tutor, index: number) => (
						<div key={`${tutor.name}-${index}`} className='min-w-[300px] mx-3'>
							<TutorCard
								tutor={tutor}
								interests={t('find_tutors.tutors_list.interests')}
								current={t('find_tutors.tutors_list.current')}
							/>
						</div>
					))}
				</CarouselContent>
				<CarouselPrevious className='hidden md:flex left-1' />
				<CarouselNext className='hidden md:flex right-1' />
			</Carousel>
		</div>
	);
};
