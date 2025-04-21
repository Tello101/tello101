'use client';

import React from 'react';
import { HeroSection } from '@/components/services/hero-section';
import { ServicesSteps } from '@/components/services/services-steps';
import { ServicesCta } from '@/components/services/services-cta';

export default function ServicesPage() {
	return (
		<div className='w-full overflow-hidden'>
			<HeroSection />
			<ServicesSteps />
			<ServicesCta />
		</div>
	);
}
