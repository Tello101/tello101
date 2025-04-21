import React from 'react';

interface SectionHeaderProps {
	title: string;
	className?: string;
}

export const SectionHeader = ({ title, className }: SectionHeaderProps) => {
	return (
		<h2
			className={`text-[32px] leading-[38px] md:text-[50px] md:leading-tight font-bold text-gray-900 ${
				className || ''
			}`}
		>
			{title}
		</h2>
	);
};
