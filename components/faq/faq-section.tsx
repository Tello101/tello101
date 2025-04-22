'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Accordion } from '@/components/ui/accordion';
import { FAQItem, FAQItemProps } from '@/components/faq/faq-item';
import { SectionHeading } from '@/components/section-header';

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
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-center md:mb-14">
          <SectionHeading title={t('title')} />
        </div>

        <div className="relative">
          {/* 데코레이션 원 요소들 - 더 또렷하고 다양하게 */}
          <div className="absolute -right-5 -top-14 -z-10 h-32 w-32 rounded-full bg-secondary/30 blur-xl"></div>
          <div className="absolute -right-20 top-20 -z-10 h-48 w-48 rounded-full bg-red-400/20 blur-xl"></div>
          <div className="absolute -bottom-20 -left-10 -z-10 h-56 w-56 rounded-full bg-red-400/25 blur-xl"></div>
          <div className="absolute -left-24 top-1/3 -z-10 h-40 w-40 rounded-full bg-secondary/20 blur-xl"></div>
          <div className="absolute bottom-1/4 right-5 -z-10 h-24 w-24 rounded-full bg-blue-300/20 blur-lg"></div>
          <div className="absolute left-10 top-10 -z-10 h-16 w-16 rounded-full bg-blue-400/15 blur-md"></div>
          <div className="absolute bottom-10 left-1/3 -z-10 h-20 w-20 rounded-full bg-secondary/15 blur-lg"></div>

          <div className="rounded-x relative z-10 backdrop-blur-sm">
            <Accordion type="single" collapsible className="space-y-4">
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
