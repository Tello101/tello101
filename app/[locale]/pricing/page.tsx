'use client';

import React from 'react';
import { PricingSection } from '@/components/pricing/pricing-section';
import { TrialSection } from '@/components/pricing/trial-section';

export default function PricingPage() {
	return (
		<main className='overflow-hidden'>
			<PricingSection />
			<TrialSection />
		</main>
	);
}
