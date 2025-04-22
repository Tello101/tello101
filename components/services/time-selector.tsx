import React from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { CalendarGrid } from '@/components/landing/benefits/calendar-grid';

// 예약 가능한 시간대
const timeSlots = [
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
  '17:30',
  '18:00',
  '19:00',
];

export const TimeSelector = () => {
  const t = useTranslations('Services');

  const selectedDateStr = new Date('2025-04-09').toISOString().split('T')[0];
  const selectedTimeSlot = '19:00';

  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
      <div className="grid gap-6 p-6 md:grid-cols-2">
        <div className="flex flex-col space-y-4">
          {/* 튜터 정보 */}
          <div className="rounded-lg bg-gray-100 p-4">
            <div className="flex items-center">
              <div className="relative h-20 w-20 overflow-hidden rounded-full">
                <Image
                  src="/images/tutors/tutor_kelly.webp"
                  alt="Kelly 튜터"
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold">{t('tutor_info.name')}</h4>
                <p className="text-sm text-gray-600">{t('tutor_info.university')}</p>
                <p className="text-sm text-gray-600">{t('tutor_info.major')}</p>
              </div>
            </div>
          </div>
          {/* 날짜 선택 */}
          <Card className="h-full border-gray-100">
            <CardContent className="p-4">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-medium">April 2025</h3>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                    <span className="sr-only">Previous month</span>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                    <span className="sr-only">Next month</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-7 gap-2 text-center text-sm">
                <div className="font-medium text-gray-500">Su</div>
                <div className="font-medium text-gray-500">Mo</div>
                <div className="font-medium text-gray-500">Tu</div>
                <div className="font-medium text-gray-500">We</div>
                <div className="font-medium text-gray-500">Th</div>
                <div className="font-medium text-gray-500">Fr</div>
                <div className="font-medium text-gray-500">Sa</div>
                <CalendarGrid />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 시간대 선택 */}
        <Card className="h-full border-0 shadow-none md:border md:border-gray-100 md:shadow-sm">
          <CardContent className="p-0 md:p-4">
            <div className="mb-4 grid grid-cols-2 gap-2">
              {timeSlots.map((time) => (
                <Button
                  key={time}
                  variant={selectedTimeSlot === time ? 'default' : 'outline'}
                  className={cn(
                    'relative h-12 rounded-lg',
                    selectedTimeSlot === time ? 'bg-primary text-white' : 'hover:border-primary',
                  )}
                >
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <span>{time}</span>
                  </div>
                  {selectedTimeSlot === time && (
                    <div className="absolute right-2">
                      <Check className="h-4 w-4" />
                    </div>
                  )}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 하단: 선택 정보 */}
      <div className="flex flex-col items-center justify-between bg-gray-50 p-6 sm:flex-row">
        <div className="text-lg">
          <p>
            {selectedDateStr} {selectedTimeSlot}{' '}
            <span className="font-medium text-primary">Kelly</span> {t('common.tutor')}
          </p>
        </div>
      </div>
    </div>
  );
};
