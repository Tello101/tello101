import React from 'react';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FadeIn } from '@/components/animations/fade-in';

export interface FAQItemProps {
  question: string;
  answers: string[];
}

export const FAQItem = ({ question, answers }: FAQItemProps) => {
  return (
    <FadeIn direction="up">
      <AccordionItem
        value={question}
        className="mb-4 overflow-hidden rounded-[6px] border-none bg-blue-100 transition-all duration-300 data-[state=open]:shadow-md"
      >
        <AccordionTrigger className="group px-4 py-3 text-left transition-all hover:no-underline md:px-6 md:py-5">
          <h3 className="flex-1 text-lg font-medium md:text-xl">{question}</h3>
        </AccordionTrigger>
        <AccordionContent className="px-6">
          {answers.map((answer, index) => (
            <p className="text-md mb-0.5 text-gray-500 md:pl-4 md:text-lg" key={index}>
              {answer}
            </p>
          ))}
        </AccordionContent>
      </AccordionItem>
    </FadeIn>
  );
};
