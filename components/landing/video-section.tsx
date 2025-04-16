'use client';

import React, { useRef, useEffect } from 'react';
import { FadeIn } from '@/components/animations/fade-in';
import { SectionHeader } from '@/components/landing/section-header';

export const VideoSection = () => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const videoSectionRef = useRef<HTMLElement>(null);

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
					<SectionHeader title="Here's a recording of a real Tello101 lesson:" />
				</FadeIn>

				<FadeIn>
					<div className='brand-video-container max-w-7xl mx-auto'>
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
