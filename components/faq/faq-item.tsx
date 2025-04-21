import React from 'react';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FadeIn } from '@/components/animations/fade-in';

export interface FAQItemProps {
	question: string;
	answers: string[];
}

export const FAQItem = ({ question, answers }: FAQItemProps) => {
	return (
		<FadeIn direction='up'>
			<AccordionItem
				value={question}
				className='overflow-hidden rounded-[6px] mb-4 data-[state=open]:shadow-md transition-all duration-300 border border-primary-100 bg-primary-100 hover:border hover:border-primary'
			>
				<AccordionTrigger className='text-lg md:text-xl font-medium text-left px-6 py-5 hover:no-underline transition-all group'>
					<h4 className='flex-1 text-xl'>{question}</h4>
				</AccordionTrigger>
				<AccordionContent className='px-6'>
					{answers.map((answer, index) => (
						<p className='text-lg pl-5 text-gray-500 leading-relaxed mb-0.5' key={index}>
							{answer}
						</p>
					))}
				</AccordionContent>
			</AccordionItem>
		</FadeIn>
	);
};
