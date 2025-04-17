import React from 'react';
import { Clock } from 'lucide-react';

export type TimeSlotProps = {
	time: string;
};

export const TimeSlot = ({ time }: TimeSlotProps) => (
	<div className='flex items-center p-3 rounded-md mb-2 transition-colors bg-[rgba(41,128,255,0.05)] hover:bg-[rgba(41,128,255,0.1)]'>
		<Clock className='h-5 w-5 text-primary mr-3' />
		<span className='font-medium'>{time}</span>
	</div>
);
