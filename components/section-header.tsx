import React from 'react';

interface SectionHeaderProps {
	title: string;
	className?: string;
}

export const SectionHeader = ({ title, className }: SectionHeaderProps) => {
	return <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-gray-900 ${className || ''}`}>{title}</h2>;
};
