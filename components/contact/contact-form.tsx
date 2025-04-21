import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BrandButton } from '@/components/ui/brand-button';
import { CustomRadioGroup, RadioOption } from '@/components/contact/custom-radio-group';
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
		englishLevel: 'beginner',
		learningGoal: 'native',
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

	const levelOptions: RadioOption[] = [
		{ value: 'beginner', label: t('level_options.beginner') },
		{ value: 'lower_intermediate', label: t('level_options.lower_intermediate') },
		{ value: 'upper_intermediate', label: t('level_options.upper_intermediate') },
		{ value: 'advanced', label: t('level_options.advanced') },
	];

	const goalOptions: RadioOption[] = [
		{ value: 'native', label: t('goals_options.native') },
		{ value: 'business', label: t('goals_options.business') },
		{ value: 'conversation', label: t('goals_options.conversation') },
		{ value: 'other', label: t('goals_options.other') },
	];

	return (
		<form onSubmit={handleSubmit} className='space-y-8'>
			{/* 이름, 이메일 한 줄에 */}
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
				{/* 이름 필드 */}
				<div>
					<Label htmlFor='name' className='text-gray-700 font-semibold'>
						{t('name')}*
					</Label>
					<Input
						id='name'
						type='text'
						value={formState.name}
						onChange={(e) => handleChange('name', e.target.value)}
						required
						className='mt-2'
						placeholder={t('name_placeholder')}
					/>
				</div>

				{/* 이메일 필드 */}
				<div>
					<Label htmlFor='email' className='text-gray-700 font-semibold'>
						{t('email')}*
					</Label>
					<Input
						id='email'
						type='email'
						value={formState.email}
						onChange={(e) => handleChange('email', e.target.value)}
						placeholder='your-email@example.com'
						required
						className='mt-2'
					/>
				</div>
			</div>

			{/* 카카오 ID, 선호하는 튜터 한 줄에 */}
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
				{/* 카카오 ID 필드 */}
				<div>
					<Label htmlFor='kakaoId' className='text-gray-700 font-semibold'>
						{t('kakao_id')}
					</Label>
					<Input
						id='kakaoId'
						type='text'
						value={formState.kakaoId}
						onChange={(e) => handleChange('kakaoId', e.target.value)}
						className='mt-2'
						placeholder={t('kakao_id_placeholder')}
					/>
				</div>

				{/* 선호하는 튜터 필드 */}
				<div>
					<Label htmlFor='preferredTutor' className='text-gray-700 font-semibold'>
						{t('preferred_tutor')}
					</Label>
					<Select value={formState.preferredTutor} onValueChange={(value) => handleChange('preferredTutor', value)}>
						<SelectTrigger className='mt-2'>
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

			{/* 영어 레벨 필드 */}
			<div>
				<Label className='text-gray-700 font-semibold block mb-3'>{t('level')}</Label>
				<CustomRadioGroup
					name='englishLevel'
					options={levelOptions}
					value={formState.englishLevel}
					onChange={(value) => handleChange('englishLevel', value)}
				/>
			</div>

			{/* 학습 목표 필드 */}
			<div>
				<Label className='text-gray-700 font-semibold block mb-3'>{t('goals')}</Label>
				<CustomRadioGroup
					name='learningGoal'
					options={goalOptions}
					value={formState.learningGoal}
					onChange={(value) => handleChange('learningGoal', value)}
				/>
			</div>

			{/* 가능한 시간대 필드 */}
			<div>
				<Label className='text-gray-700 font-semibold block mb-3'>{t('availability')}</Label>
				<div className='mt-2'>
					<AvailabilityGrid
						selectedTimeSlots={formState.availability}
						setSelectedTimeSlots={(value) => handleChange('availability', value)}
						value={formState.availability}
						onChange={(value) => handleChange('availability', value)}
					/>
				</div>
			</div>

			{/* 제출 버튼 */}
			<div className='pt-4 flex justify-end'>
				<BrandButton type='submit' className='w-full md:w-auto font-medium text-base' disabled={isSubmitting}>
					{isSubmitting ? t('submitting') : t('submit')}
				</BrandButton>
			</div>
		</form>
	);
};
