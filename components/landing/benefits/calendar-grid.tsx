import React from 'react';
import { CalendarDay } from './calendar-day';

// 날짜 데이터 타입 정의
export type CalendarDayType = {
	day: number;
	isCurrentMonth: boolean;
	isSelected?: boolean;
};

export const CalendarGrid = () => {
	const days: CalendarDayType[] = [
		{ day: 30, isCurrentMonth: false },
		{ day: 31, isCurrentMonth: false },
		...Array.from({ length: 30 }, (_, i) => ({
			day: i + 1,
			isCurrentMonth: true,
			isSelected: i + 1 === 9,
		})),
		{ day: 1, isCurrentMonth: false },
		{ day: 2, isCurrentMonth: false },
		{ day: 3, isCurrentMonth: false },
	];

	return (
		<>
			{days.map((day, index) => (
				<CalendarDay
					key={`${day.day}-${index}`}
					day={day.day}
					isCurrentMonth={day.isCurrentMonth}
					isSelected={day.isSelected}
				/>
			))}
		</>
	);
};
