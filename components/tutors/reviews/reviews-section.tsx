'use client';

import React from 'react';
import { ReviewSlider } from '@/components/tutors/reviews/reviews-slider';
import { reviews } from '@/lib/constants/reviews';
import { useTranslations } from 'next-intl';
import { SectionHeading } from '@/components/section-header';

export const ReviewsSection = () => {
  const t = useTranslations('Tutors');

  const renderHighlight = (chunks: React.ReactNode) => (
    <span className="inline-block bg-primary bg-clip-text font-bold text-transparent">
      {chunks}
    </span>
  );

  return (
    <section className="brand-gradient-light border-t border-gray-100 py-16 md:py-20">
      <div className="relative">
        <SectionHeading
          title={t.rich('reviews.title', {
            highlight: renderHighlight,
          })}
          className="mb-[50px] text-center"
        />
        <ReviewSlider reviews={reviews} />
      </div>
    </section>
  );
};
