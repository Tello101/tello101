'use client';

import React from 'react';
import { ReviewsSection } from '@/components/tutors/reviews/reviews-section';
import { HeroSection } from '@/components/tutors/hero-section';
import { PointsSection } from '@/components/tutors/points/points-section';
import { TutorListSection } from '@/components/tutors/tutor-list/tutor-list-section';

export default function TutorsPage() {
	return (
		<div className='w-full overflow-hidden'>
			<HeroSection />
			<PointsSection />
			<TutorListSection />
			<ReviewsSection />
		</div>
	);
}
