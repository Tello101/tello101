import React from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export const ReviewNoteDisplay = () => {
  const t = useTranslations('Services.review_note');

  // 새로운 예시 데이터
  const reviewData = {
    date: 'April 17, 2025',
    tutor: 'Nathan',
    focus: 'Talking about upcoming travel plans',
    improvements: [
      {
        studentSaid:
          "Actually, my sister is a flight attendant, so she has been there a lot times, but I haven't been there until now. So it will be the first time in my life.",
        betterWay:
          'Since my sister works as a flight attendant, going to Australia is just part of her job.\n\nBut for me, Australia is completely new and unfamiliar.',
      },
      {
        studentSaid: 'Traveling to Australia is one of my bucket list.',
        betterWay:
          "Traveling to Australia has been one of my bucket list items.\n\nOr: I can't wait to finally tick Australia off my bucket list.",
      },
    ],
  };

  return (
    <div className="mx-auto mt-7 w-full max-w-4xl">
      <Card className="overflow-hidden border border-gray-100 shadow-sm">
        {/* 헤더 영역: 제목, 날짜, 튜터 정보를 함께 표시 */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 bg-gradient-to-r from-primary/10 to-secondary/10 px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm text-white">
              📘
            </span>
            <h2 className="text-xl font-bold text-primary">{t('title')}</h2>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center">
              <span className="text-gray-500">{t('date')}:</span>
              <span className="ml-1 font-medium">{reviewData.date}</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-500">{t('tutor')}:</span>
              <span className="ml-1 font-medium">{reviewData.tutor}</span>
            </div>
          </div>
        </div>

        <CardContent className="p-4">
          {/* 주제 */}
          <div className="mb-4 flex items-center gap-2 rounded-lg bg-gray-50 p-3">
            <span className="text-sm font-medium text-gray-500">{t('todays_focus')}:</span>
            <span className="ml-1 font-medium">{reviewData.focus}</span>
          </div>

          {/* 개선된 표현들 */}
          <div>
            <h3 className="mb-3 flex items-center gap-2 text-lg font-bold">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-sm text-primary">
                ✨
              </span>
              {t('say_it_better')}
            </h3>

            <div className="space-y-4">
              {reviewData.improvements.map((item, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg border border-gray-100 bg-white"
                >
                  {/* 학생 표현 */}
                  <div className="border-b border-gray-100 bg-gray-50 p-3">
                    <div className="flex items-start">
                      <span className="mr-2 mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-200 text-sm text-gray-700">
                        🗣️
                      </span>
                      <div className="text-gray-700">{item.studentSaid}</div>
                    </div>
                  </div>

                  {/* 화살표 */}
                  <div className="relative z-10 -mb-2 -mt-2 flex justify-center">
                    <div className="rounded-full bg-primary p-1">
                      <ArrowRight className="h-4 w-4 text-white" />
                    </div>
                  </div>

                  {/* 개선된 표현 */}
                  <div className="bg-primary/5 p-3">
                    <div className="flex items-start">
                      <span className="mr-2 mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-sm text-primary">
                        💬
                      </span>
                      <div className="text-gray-800">
                        {item.betterWay.split('\n\n').map((paragraph, i) => (
                          <p
                            key={i}
                            className={i === 0 ? '' : 'mt-2 border-t border-primary/10 pt-2'}
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
