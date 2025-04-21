import React, { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { LessonPackageSelector } from '@/components/services/lesson-package-selector';
import { TutorCarousel } from '@/components/services/tutor-carousel';
import { TimeSelector } from '@/components/services/time-selector';
import { LessonContentSelector } from '@/components/services/lesson-content-selector';
import { LearningSection } from '@/components/services/learning-section';
import { ReviewNoteDisplay } from '@/components/services/review-note-display';
import { motion, useAnimation } from 'framer-motion';

// 애니메이션이 적용될 스텝 컴포넌트
const AnimatedStep = ({ step, children }: { step: number; children: React.ReactNode }) => {
	const controls = useAnimation();
	const ref = useRef<HTMLDivElement>(null);
	const [hasAnimated, setHasAnimated] = useState(false);

	// 홀수 스텝은 왼쪽에서, 짝수 스텝은 오른쪽에서 슬라이드
	const isOddStep = step % 2 === 1;
	const initialX = isOddStep ? -100 : 100;

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						controls.start('visible');
						setHasAnimated(true);

						// 한번 보여진 후에는 감시 중단
						if (ref.current) {
							observer.unobserve(ref.current);
						}
					} else if (!hasAnimated) {
						controls.start('hidden');
					}
				});
			},
			{ threshold: 0.2 } // 20% 이상 보이면 애니메이션 시작
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, [controls, hasAnimated]);

	const variants = {
		hidden: {
			opacity: 0,
			x: initialX,
			transition: { duration: 0.5, ease: 'easeOut' },
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.7, ease: 'easeOut' },
		},
	};

	return (
		<motion.div
			ref={ref}
			variants={variants}
			initial='hidden'
			animate={controls}
			className='mb-16 md:mb-24 overflow-hidden'
		>
			{children}
		</motion.div>
	);
};

export const ServicesSteps = () => {
	const t = useTranslations('Services.steps');

	return (
		<section className='py-16 bg-white'>
			<div className='container'>
				<div className='max-w-4xl mx-auto mb-16 text-center'>
					<h2 className='text-3xl md:text-4xl font-bold mb-6'>{t('title')}</h2>
				</div>

				{/* Step 1: Select a lesson package */}
				<AnimatedStep step={1}>
					<StepHeader title={t('step1_title')} desc={t('step1_desc')} />
					<LessonPackageSelector />
				</AnimatedStep>

				{/* Step 2: Choose a tutor */}
				<AnimatedStep step={2}>
					<StepHeader title={t('step2_title')} desc={t('step2_desc')} />
					<TutorCarousel />
				</AnimatedStep>

				{/* Step 3: Choose a Time */}
				<AnimatedStep step={3}>
					<StepHeader title={t('step3_title')} desc={t('step3_desc')} />
					<TimeSelector />
				</AnimatedStep>

				{/* Step 4: Select your lesson content */}
				<AnimatedStep step={4}>
					<StepHeader title={t('step4_title')} desc={t('step4_desc')} />
					<LessonContentSelector />
				</AnimatedStep>

				{/* Step 5: Learn! */}
				<AnimatedStep step={5}>
					<StepHeader title={t('step5_title')} desc={t('step5_desc1')} />
					<LearningSection />
				</AnimatedStep>

				{/* Step 6: Review feedback */}
				<AnimatedStep step={6}>
					<StepHeader title={t('step6_title')} desc={t('step6_desc')} />
					<ReviewNoteDisplay />
				</AnimatedStep>
			</div>
		</section>
	);
};

const StepHeader = ({ title, desc }: { title: string; desc: string }) => {
	return (
		<div className='mb-10 text-center md:text-left'>
			<h3 className='text-2xl md:text-3xl font-bold text-primary mb-2'>{title}</h3>
			<p className='text-lg text-gray-600'>{desc}</p>
		</div>
	);
};
