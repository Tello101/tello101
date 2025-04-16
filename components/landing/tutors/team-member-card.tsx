'use client';

import React from 'react';
import Image from 'next/image';
import { StaggerItem } from '@/components/animations/stagger-item';

interface TeamMemberCardProps {
	name: string;
	university: string;
	field: string;
	imagePath: string;
}

export const TeamMemberCard = ({ name, university, field, imagePath }: TeamMemberCardProps) => {
	return (
		<StaggerItem>
			<div
				className='bg-white rounded-xl overflow-hidden transition-all duration-300'
				style={{
					boxShadow: '0 10px 30px rgba(41, 128, 255, 0.08)',
				}}
				onMouseOver={(e) => {
					e.currentTarget.style.boxShadow = '0 15px 40px rgba(41, 128, 255, 0.12)';
					e.currentTarget.style.transform = 'translateY(-4px)';
				}}
				onMouseOut={(e) => {
					e.currentTarget.style.boxShadow = '0 10px 30px rgba(41, 128, 255, 0.08)';
					e.currentTarget.style.transform = '';
				}}
			>
				<div className='relative h-72'>
					<Image src={imagePath} alt={name} fill className='object-cover' />
				</div>
				<div className='p-4 text-center'>
					<h3 className='font-bold text-lg mt-2'>{name}</h3>
					<p className='text-[#2980ff] font-medium'>{university}</p>
					<p className='text-sm text-gray-600'>{field}</p>
				</div>
			</div>
		</StaggerItem>
	);
};
