import React from 'react';

interface SectionHeaderProps {
	title: string;
}

export const SectionHeader = ({ title }: SectionHeaderProps) => {
	return <h2 className='text-4xl md:text-5xl font-bold mb-6'>{title}</h2>;
};
