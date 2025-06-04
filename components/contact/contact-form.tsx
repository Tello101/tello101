import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { BrandButton } from '@/components/ui/brand-button';
import { AvailabilityGrid } from '@/components/contact/availability-grid';
import { TUTORS } from '@/lib/constants/brand';
import { toast } from 'sonner';

export const ContactForm = () => {
  const t = useTranslations('Contact');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 폼 상태 관리
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    kakaoId: '',
    preferredTutor: '',
    englishLevel: '',
    learningGoal: '',
    availability: {} as Record<string, string[]>,
  });

  const handleChange = (field: string, value: any) => {
    setFormState((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const formatAvailability = (availability: Record<string, string[]>) => {
    if (!availability || Object.keys(availability).length === 0) {
      return '';
    }

    const readableTimeSlots = [];

    for (const day in availability) {
      if (availability[day].length > 0) {
        const dayName = t(`day_${day}`);
        const times = availability[day].map((time) => t(`time_${time}`)).join(', ');
        readableTimeSlots.push(`${dayName}: ${times}`);
      }
    }

    return readableTimeSlots.join(' | ');
  };

  // 폼 제출 핸들러
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    try {
      setIsSubmitting(true);

      const formData = {
        name: formState.name,
        email: formState.email,
        kakaoId: formState.kakaoId,
        preferredTutor: formState.preferredTutor,
        englishLevel: t(`level_options.${formState.englishLevel}`),
        learningGoal: t(`goals_options.${formState.learningGoal}`),
        availability: formatAvailability(formState.availability),
      };

      // API 호출
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(t('submit_success'));

        // 폼 초기화
        setFormState({
          name: '',
          email: '',
          kakaoId: '',
          preferredTutor: '',
          englishLevel: 'beginner',
          learningGoal: 'native',
          availability: {},
        });
      } else {
        toast.error(t('submit_error'));
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error(t('submit_error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const levelOptions = [
    { value: 'beginner', label: t('level_options.beginner') },
    { value: 'lower_intermediate', label: t('level_options.lower_intermediate') },
    { value: 'upper_intermediate', label: t('level_options.upper_intermediate') },
    { value: 'advanced', label: t('level_options.advanced') },
  ];

  const goalOptions = [
    { value: 'native', label: t('goals_options.native') },
    { value: 'business', label: t('goals_options.business') },
    { value: 'conversation', label: t('goals_options.conversation') },
    { value: 'other', label: t('goals_options.other') },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* 이름, 이메일 한 줄에 */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {/* 이름 필드 */}
        <div>
          <Label htmlFor="name" className="font-semibold text-gray-700">
            {t('name')}*
          </Label>
          <Input
            id="name"
            type="text"
            value={formState.name}
            onChange={(e) => handleChange('name', e.target.value)}
            required
            className="mt-2"
            placeholder={t('name_placeholder')}
          />
        </div>

        {/* 이메일 필드 */}
        <div>
          <Label htmlFor="email" className="font-semibold text-gray-700">
            {t('email')}*
          </Label>
          <Input
            id="email"
            type="email"
            value={formState.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="your-email@example.com"
            required
            className="mt-2"
          />
        </div>
      </div>

      {/* 카카오 ID, 선호하는 튜터 한 줄에 */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {/* 카카오 ID 필드 */}
        <div>
          <Label htmlFor="kakaoId" className="font-semibold text-gray-700">
            {t('kakao_id')}
          </Label>
          <Input
            id="kakaoId"
            type="text"
            value={formState.kakaoId}
            onChange={(e) => handleChange('kakaoId', e.target.value)}
            className="mt-2"
            placeholder={t('kakao_id_placeholder')}
          />
        </div>

        {/* 선호하는 튜터 필드 */}
        <div>
          <Label htmlFor="preferredTutor" className="font-semibold text-gray-700">
            {t('preferred_tutor')}
          </Label>
          <Select
            value={formState.preferredTutor}
            onValueChange={(value) => handleChange('preferredTutor', value)}
          >
            <SelectTrigger className={`mt-2 ${!formState.preferredTutor ? 'text-gray-500' : ''}`}>
              <SelectValue placeholder={t('preferred_tutor_placeholder')} />
            </SelectTrigger>
            <SelectContent>
              {TUTORS.map((tutor) => (
                <SelectItem key={tutor} value={tutor}>
                  {tutor}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {/* 영어 레벨 필드 */}
        <div>
          <Label htmlFor="englishLevel" className="font-semibold text-gray-700">
            {t('level')}
          </Label>
          <Select
            value={formState.englishLevel}
            onValueChange={(value) => handleChange('englishLevel', value)}
          >
            <SelectTrigger className={`mt-2 ${!formState.englishLevel ? 'text-gray-500' : ''}`}>
              <SelectValue placeholder={t('level_placeholder')} />
            </SelectTrigger>
            <SelectContent>
              {levelOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* 학습 목표 필드 */}
        <div>
          <Label htmlFor="learningGoal" className="font-semibold text-gray-700">
            {t('goals')}
          </Label>
          <Select
            value={formState.learningGoal}
            onValueChange={(value) => handleChange('learningGoal', value)}
          >
            <SelectTrigger className={`mt-2 ${!formState.learningGoal ? 'text-gray-500' : ''}`}>
              <SelectValue placeholder={t('goals_placeholder')} />
            </SelectTrigger>
            <SelectContent>
              {goalOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* 가능한 시간대 필드 */}
      <div>
        <Label className="mb-3 block font-semibold text-gray-700">{t('availability')}</Label>
        <div className="mt-2">
          <AvailabilityGrid
            selectedTimeSlots={formState.availability}
            setSelectedTimeSlots={(value) => handleChange('availability', value)}
            value={formState.availability}
            onChange={(value) => handleChange('availability', value)}
          />
        </div>
      </div>

      {/* 제출 버튼 */}
      <div className="flex justify-center pt-4">
        <BrandButton
          type="submit"
          className="w-full px-6 py-2 text-base font-medium md:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? t('submitting') : t('submit')}
        </BrandButton>
      </div>
    </form>
  );
};
