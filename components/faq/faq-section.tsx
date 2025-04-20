'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Accordion } from '@/components/ui/accordion';
import { SectionHeader } from '@/components/section-header';
import { HelpCircle } from 'lucide-react';
import { FAQItem, FAQItemProps } from '@/components/faq/faq-item';

export const FAQSection = () => {
	const t = useTranslations('FAQ');

	const faqItems: Omit<FAQItemProps, 'index'>[] = [];

	for (let i = 1; i <= 13; i++) {
		const questionKey = `question_${i}`;
		try {
			const question = t(`${questionKey}.question`);
			const answers = t.raw(`${questionKey}.answer`) as string[];

			faqItems.push({
				question,
				answers,
			});
		} catch (error) {
			// 해당 질문이 없으면 무시
			console.error(`No translation for FAQ question ${i}`);
		}
	}

	return (
		<section className='py-12 md:py-20'>
			<div className='container mx-auto px-4'>
				<div className='flex items-center justify-center mb-20'>
					<SectionHeader title={t('title')} className='mb-0 text-center' />
				</div>

				<div className='relative'>
					{/* 데코레이션 원 요소들 - 더 또렷하고 다양하게 */}
					<div className='absolute -top-14 -right-5 w-32 h-32 bg-secondary/30 rounded-full blur-xl -z-10'></div>
					<div className='absolute top-20 -right-20 w-48 h-48 bg-primary/20 rounded-full blur-xl -z-10'></div>
					<div className='absolute -bottom-20 -left-10 w-56 h-56 bg-primary/25 rounded-full blur-xl -z-10'></div>
					<div className='absolute top-1/3 -left-24 w-40 h-40 bg-secondary/20 rounded-full blur-xl -z-10'></div>
					<div className='absolute bottom-1/4 right-5 w-24 h-24 bg-blue-300/20 rounded-full blur-lg -z-10'></div>
					<div className='absolute top-10 left-10 w-16 h-16 bg-blue-400/15 rounded-full blur-md -z-10'></div>
					<div className='absolute bottom-10 left-1/3 w-20 h-20 bg-secondary/15 rounded-full blur-lg -z-10'></div>

					<div className='backdrop-blur-sm rounded-x relative z-10'>
						<Accordion type='single' collapsible className='space-y-4'>
							{faqItems.map((item, index) => (
								<FAQItem key={item.question} question={item.question} answers={item.answers} />
							))}
						</Accordion>
					</div>
				</div>
			</div>
		</section>
	);
};
