'use client';

import { SectionHeader } from '@/components/section-header';
import { Tutor, TutorCard } from '@/components/tutors/tutor-list/tutor-card';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export const TutorListSection = () => {
	const t = useTranslations('Tutors');

	return (
		<section className='py-16 md:py-24 bg-gray-50'>
			<div className='container px-4 md:px-6 lg:px-8'>
				<div className='mb-16'>
					<SectionHeader title={t('find_tutors.title')} className='text-black text-center' />
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 lg:gap-6 max-w-4xl mx-auto'>
					{t.raw('find_tutors.tutors_list.tutors').map((tutor: Tutor, index: number) => (
						<div key={index} className='flex justify-center'>
							<div className='w-full max-w-sm'>
								<TutorCard
									tutor={tutor}
									interests={t('find_tutors.tutors_list.interests')}
									current={t('find_tutors.tutors_list.current')}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
