'use client';

import React from 'react';
import { HeroSection } from '@/components/landing/hero/hero-section';
import { StatSection } from '@/components/landing/stats/stat-section';
import { FeaturesSection } from '@/components/landing/features/features-section';
import { ComparisonSection } from '@/components/landing/comparison/comparison-section';
import { BenefitsSection } from '@/components/landing/benefits/benefits-section';
import { TeamSection } from '@/components/landing/tutors/team-section';
import { VideoSection } from '@/components/landing/video-section';
import { TestimonialSection } from '@/components/landing/testimonial-section';
import { CtaSection } from '@/components/landing/cta-section';

export default function Home() {
	return (
		<div className='flex flex-col'>
			<HeroSection />
			<StatSection />
			<FeaturesSection />
			<ComparisonSection />
			<BenefitsSection />
			<TeamSection />
			<VideoSection />
			<TestimonialSection />
			<CtaSection />
		</div>
	);
}
