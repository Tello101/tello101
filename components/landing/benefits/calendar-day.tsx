import React from 'react';

export type CalendarDayProps = {
	day: number;
	isCurrentMonth?: boolean;
	isSelected?: boolean;
};

export const CalendarDay = ({ day, isCurrentMonth = true, isSelected = false }: CalendarDayProps) => {
	const baseClasses = 'inline-flex items-center justify-center w-8 h-8 rounded-full text-sm transition-colors';
	const currentMonthClasses = isCurrentMonth ? 'hover:bg-blue-50' : 'text-gray-400';
	const selectedClasses = isSelected ? 'bg-gradient-to-br from-primary to-secondary text-white' : '';

	return <div className={`${baseClasses} ${currentMonthClasses} ${selectedClasses}`}>{day}</div>;
};
