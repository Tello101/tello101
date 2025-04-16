'use client';

import React from 'react';
import { FadeIn } from '@/components/animations/fade-in';
import { SectionHeader } from '@/components/landing/section-header';
import { ComparisonItem } from './comparison-item';

export const ComparisonSection = () => {
	const comparisonData = [
		{
			telloTitle: 'Handpicked Australian team',
			telloDescription: 'High-quality Australian tutors trained by TESOL-qualified experts.',
			otherTitle: 'Outsourced tutors with minimal qualifications',
			otherDescription: 'Results in inconsistent teaching standards and lower quality.',
		},
		{
			telloTitle: 'Australian cultural immersion',
			telloDescription: 'Australian-focused lessons designed for learners integrating into Australian society.',
			otherTitle: 'Lack of cultural relevance',
			otherDescription: 'Generic English learning from non-native tutors.',
		},
		{
			telloTitle: 'Professional networking opportunities',
			telloDescription: 'Strengthen your network with tutors from different fields to boost your study or career path.',
			otherTitle: 'Focus only on academic or conversational english',
			otherDescription:
				'Limited opportunities to connect with tutors who share professional interests or career expertise.',
		},
	];

	return (
		<section className='brand-section px-4 bg-gray-50'>
			<div className='container'>
				<FadeIn className='text-center mb-16'>
					<SectionHeader title='The Tello101 Difference' />
				</FadeIn>

				<div className='grid gap-8'>
					{comparisonData.map((item, index) => (
						<ComparisonItem
							key={index}
							index={index}
							telloTitle={item.telloTitle}
							telloDescription={item.telloDescription}
							otherTitle={item.otherTitle}
							otherDescription={item.otherDescription}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
