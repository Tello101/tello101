'use client';

import React, { useRef, useEffect } from 'react';
import { ReviewCard } from '@/components/tutors/reviews/review-card';
import { Review } from '@/lib/constants/reviews';

// 리뷰 슬라이더 컴포넌트
export const ReviewSlider = ({ reviews }: { reviews: Review[] }) => {
	const sliderRef1 = useRef<HTMLDivElement>(null);
	const sliderRef2 = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const slider1 = sliderRef1.current;
		const slider2 = sliderRef2.current;
		if (!slider1 || !slider2) return;

		// 슬라이더 애니메이션 구현
		let animationId1: number;
		let animationId2: number;
		let startTime1: number | null = null;
		let startTime2: number | null = null;
		const duration = 150000; // 150초(2분 30초) 동안 리뷰 전체 슬라이드

		const animate1 = (timestamp: number) => {
			if (!startTime1) startTime1 = timestamp;
			const elapsed = timestamp - startTime1;

			// 움직일 거리 계산
			const pixelsPerSecond = slider1.scrollWidth / (duration / 1000);
			const distance = (elapsed / 1000) * pixelsPerSecond;

			// 슬라이더가 끝에 도달하면 처음으로 되돌림
			if (distance >= slider1.scrollWidth / 2) {
				startTime1 = timestamp;
				slider1.scrollLeft = 0;
			} else {
				slider1.scrollLeft = distance;
			}

			animationId1 = requestAnimationFrame(animate1);
		};

		const animate2 = (timestamp: number) => {
			if (!startTime2) startTime2 = timestamp;
			const elapsed = timestamp - startTime2;

			// 움직일 거리 계산 - 두 번째 슬라이더는 반대 방향으로 움직임
			const pixelsPerSecond = slider2.scrollWidth / (duration / 1000);
			const distance = (elapsed / 1000) * pixelsPerSecond;

			// 슬라이더가 끝에 도달하면 처음으로 되돌림
			if (distance >= slider2.scrollWidth / 2) {
				startTime2 = timestamp;
				slider2.scrollLeft = 0;
			} else {
				slider2.scrollLeft = distance;
			}

			animationId2 = requestAnimationFrame(animate2);
		};

		animationId1 = requestAnimationFrame(animate1);
		animationId2 = requestAnimationFrame(animate2);

		return () => {
			cancelAnimationFrame(animationId1);
			cancelAnimationFrame(animationId2);
		};
	}, []);

	// 리뷰를 두 그룹으로 나누기
	const halfIndex = Math.ceil(reviews.length / 2);
	const firstRow = reviews.slice(0, halfIndex);
	const secondRow = reviews.slice(halfIndex);

	return (
		<div className='w-full overflow-hidden'>
			{/* 첫 번째 줄 */}
			<div
				ref={sliderRef1}
				className='flex gap-4 py-4 mb-4 overflow-x-auto scrollbar-hide'
				style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
			>
				{firstRow.map((review, index) => (
					<ReviewCard key={`first-${index}`} quote={review.quote} author={review.author} rating={review.rating} />
				))}

				{/* 무한 스크롤 효과를 위해 복제 */}
				{firstRow.map((review, index) => (
					<ReviewCard key={`first-dup-${index}`} quote={review.quote} author={review.author} rating={review.rating} />
				))}
			</div>

			{/* 두 번째 줄 */}
			<div
				ref={sliderRef2}
				className='flex gap-4 py-4 overflow-x-auto scrollbar-hide'
				style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
			>
				{secondRow.map((review, index) => (
					<ReviewCard key={`second-${index}`} quote={review.quote} author={review.author} rating={review.rating} />
				))}

				{/* 무한 스크롤 효과를 위해 복제 */}
				{secondRow.map((review, index) => (
					<ReviewCard key={`second-dup-${index}`} quote={review.quote} author={review.author} rating={review.rating} />
				))}
			</div>
		</div>
	);
};
