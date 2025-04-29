'use client';

import { SectionHeading } from '@/components/section-header';
import { Tutor, TutorCard } from '@/components/tutors/tutor-list/tutor-card';
import { useTranslations } from 'next-intl';

export const TutorListSection = () => {
  const t = useTranslations('Tutors');

  const renderHighlight = (chunks: React.ReactNode) => (
    <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text font-bold text-transparent">
      {chunks}
    </span>
  );

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container px-4 md:px-6 lg:px-8">
        <div className="mb-16">
          <SectionHeading
            title={t.rich('find_tutors.title', {
              highlight: renderHighlight,
            })}
            className="text-center"
          />
        </div>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-6">
          {t.raw('find_tutors.tutors_list.tutors').map((tutor: Tutor, index: number) => (
            <div key={index} className="flex justify-center">
              <div className="w-full max-w-sm">
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
