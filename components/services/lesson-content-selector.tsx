import React from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export const LessonContentSelector = () => {
  const t = useTranslations('Services.lesson_content');

  const contents = [
    {
      id: 'business_english',
      title: t('business_english'),
      description: t('business_english_desc'),
      imageUrl: '/images/services/lesson_content_2.jpg',
    },
    {
      id: 'interview_prep',
      title: t('interview_prep'),
      description: t('interview_prep_desc'),
      imageUrl: '/images/services/lesson_content_3.jpg',
    },
    {
      id: 'daily_conversation',
      title: t('daily_conversation'),
      description: t('daily_conversation_desc'),
      imageUrl: '/images/services/lesson_content_5.jpg',
    },
  ];

  return (
    <div className="mx-auto mt-7 w-full max-w-5xl">
      <div className="grid grid-cols-1 gap-6 rounded-lg border border-gray-100 bg-gray-100 p-4 sm:grid-cols-2 md:p-8 lg:grid-cols-3">
        {contents.map((content) => (
          <Card
            key={content.id}
            className={`flex h-full cursor-pointer flex-col border border-gray-100 shadow-md transition-all`}
          >
            {/* 이미지 영역 */}
            <div className="relative h-40 w-full overflow-hidden rounded-t-lg">
              <Image src={content.imageUrl} alt={content.title} fill className="object-cover" />
            </div>

            <CardHeader className="relative pb-2">
              <CardTitle className="text-xl font-bold">{content.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow pb-4">
              <CardDescription className="text-gray-600">{content.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
