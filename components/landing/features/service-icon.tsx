'use client';

import React from 'react';
import Image from 'next/image';

export interface ServiceIconProps {
	type: 'conversation' | 'education' | 'business';
	className?: string;
}

export function ServiceIcon({ type, className = 'w-auto h-28' }: ServiceIconProps) {
	const getSvgPath = () => {
		switch (type) {
			case 'conversation':
				return '/svgs/conversation.svg';
			case 'education':
				return '/svgs/resume.svg';
			case 'business':
				return '/svgs/business.svg';
			default:
				return '/svgs/conversation.svg';
		}
	};

	return <Image src={getSvgPath()} alt={`${type} icon`} width={40} height={60} className={className} />;
}
