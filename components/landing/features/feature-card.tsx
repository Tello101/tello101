import React from 'react';
import { BadgeCheck } from 'lucide-react';

interface FeatureItem {
	text: string;
}

interface FeatureCardProps {
	icon: React.ReactNode;
	title: string;
	features: FeatureItem[];
	className?: string;
}

export function FeatureCard({ icon, title, features, className = '' }: FeatureCardProps) {
	return (
		<div className={`brand-card p-6 max-w-72 w-full h-full gap-8 justify-between flex flex-col ${className}`}>
			<div>
				<div className='flex items-center mb-8 justify-center'>{icon}</div>
				<h3 className='text-xl font-bold text-center'>{title}</h3>
			</div>
			<ul className='space-y-4 min-h-28'>
				{features.map((feature, index) => (
					<li key={index} className='flex items-start'>
						<BadgeCheck className='h-5 w-5 text-primary mr-2 mt-[2px] flex-shrink-0' />
						<span className='text-gray-700'>{feature.text}</span>
					</li>
				))}
			</ul>
		</div>
	);
}
