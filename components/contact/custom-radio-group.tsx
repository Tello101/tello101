import React from 'react';

export interface RadioOption {
	value: string;
	label: string;
}

interface CustomRadioGroupProps {
	options: RadioOption[];
	value: string;
	onChange: (value: string) => void;
	name: string;
}

export const CustomRadioGroup = ({ options, value, onChange, name }: CustomRadioGroupProps) => {
	const handleOptionClick = (optionValue: string) => {
		onChange(optionValue);
	};

	return (
		<div className='flex flex-wrap gap-y-4 gap-x-6'>
			{options.map((option) => (
				<div key={option.value} className='flex items-center'>
					<div
						className={`
              flex items-center justify-center w-5 h-5 rounded-full border transition-colors
              ${value === option.value ? 'border-primary bg-primary border-2' : 'border-gray-300 bg-white'}
            `}
						onClick={() => handleOptionClick(option.value)}
					>
						{value === option.value && <div className='w-2 h-2 rounded-full bg-white'></div>}
					</div>
					<input
						type='radio'
						id={`${name}-${option.value}`}
						name={name}
						value={option.value}
						checked={value === option.value}
						onChange={() => handleOptionClick(option.value)}
						className='hidden'
					/>
					<label htmlFor={`${name}-${option.value}`} className='ml-2 text-gray-700 cursor-pointer'>
						{option.label}
					</label>
				</div>
			))}
		</div>
	);
};
