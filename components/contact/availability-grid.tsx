import React, { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';

const DAYS = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
const TIME_SLOTS = ['morning', 'afternoon', 'early_evening', 'evening'];

export interface AvailabilityGridProps {
	selectedTimeSlots: { [key: string]: string[] };
	setSelectedTimeSlots: React.Dispatch<React.SetStateAction<{ [key: string]: string[] }>>;
	value?: { [key: string]: string[] };
	onChange?: (value: { [key: string]: string[] }) => void;
}

export const AvailabilityGrid: React.FC<AvailabilityGridProps> = ({
	selectedTimeSlots,
	setSelectedTimeSlots,
	value,
	onChange,
}) => {
	const t = useTranslations('Contact');
	const initializedRef = useRef(false);

	useEffect(() => {
		if (!initializedRef.current && onChange && (!value || Object.keys(value).length === 0)) {
			initializedRef.current = true;
			onChange({});
		}
	}, []);

	const toggleTimeSlot = (day: string, time: string) => {
		const newTimeSlots = { ...(value || selectedTimeSlots) };

		if (!newTimeSlots[day]) {
			newTimeSlots[day] = [];
		}

		if (newTimeSlots[day].includes(time)) {
			newTimeSlots[day] = newTimeSlots[day].filter((slot) => slot !== time);
			// 시간이 모두 없어지면 해당 요일 키도 제거
			if (newTimeSlots[day].length === 0) {
				delete newTimeSlots[day];
			}
		} else {
			newTimeSlots[day].push(time);
		}

		// 내부 상태와 외부 상태 모두 업데이트
		setSelectedTimeSlots(newTimeSlots);
		if (onChange) {
			onChange(newTimeSlots);
		}
	};

	const timeSlots = value || selectedTimeSlots;

	const isSelected = (day: string, time: string) => {
		return timeSlots[day]?.includes(time) || false;
	};

	const getReadableTimeSlot = (time: string) => {
		return t(`time_${time}`);
	};

	return (
		<div className='mt-4 overflow-hidden rounded-lg max-w-[700px] border border-gray-100'>
			<div className='bg-white p-4 shadow-sm overflow-x-auto'>
				<table className='w-full'>
					<thead>
						<tr className='border-b border-gray-100'>
							<th className='p-2 text-center font-medium text-gray-500 w-16 '></th>
							{TIME_SLOTS.map((time) => (
								<th key={time} className='p-2 text-center font-medium text-gray-500 text-sm '>
									{getReadableTimeSlot(time)}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{DAYS.map((day) => (
							<tr key={day} className='border-b border-gray-100'>
								<td className='py-2 font-medium text-center'>{t(`day_${day}`)}</td>
								{TIME_SLOTS.map((time) => (
									<td key={`${day}-${time}`} className='p-1 text-center '>
										<div className='flex justify-center'>
											<button
												type='button'
												onClick={() => toggleTimeSlot(day, time)}
												className={`w-6 h-6 rounded-full transition-colors flex items-center justify-center ${
													isSelected(day, time)
														? 'bg-primary hover:bg-primary/90 text-white'
														: 'bg-gray-100 hover:bg-gray-200'
												}`}
												aria-label={`${t(`day_${day}`)} ${getReadableTimeSlot(time)}`}
											>
												{isSelected(day, time) && <span className='text-xs'>✓</span>}
											</button>
										</div>
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
				<p className='text-sm text-gray-500 mt-4'>{t('select_available_times')}</p>
			</div>
		</div>
	);
};
