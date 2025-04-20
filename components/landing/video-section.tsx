'use client';

import React, { useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/animations/fade-in';
import { SectionHeader } from '@/components/section-header';

export const VideoSection = () => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const videoSectionRef = useRef<HTMLElement>(null);
	const t = useTranslations('Home.Video');

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && videoRef.current) {
						videoRef.current.play();
					} else if (videoRef.current) {
						videoRef.current.pause();
					}
				});
			},
			{ threshold: 0.5 }
		);

		if (videoSectionRef.current) {
			observer.observe(videoSectionRef.current);
		}

		return () => {
			if (videoSectionRef.current) {
				observer.unobserve(videoSectionRef.current);
			}
		};
	}, []);

	return (
		<section className='brand-section bg-white' ref={videoSectionRef}>
			<div className='container'>
				<FadeIn className='text-center mb-16'>
					<SectionHeader title={t('title')} />
				</FadeIn>

				<FadeIn>
					<div className='box-shadow bg-white rounded-xl overflow-hidden max-w-7xl mx-auto'>
						<video ref={videoRef} controls playsInline loop muted className='w-full'>
							<source src='/videos/lesson_video.mp4' type='video/mp4' />
							Your browser does not support the video tag.
						</video>
					</div>
				</FadeIn>
			</div>
		</section>
	);
};
