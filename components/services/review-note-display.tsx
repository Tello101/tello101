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
		<div className='w-full max-w-4xl mx-auto'>
			<Card className='border border-gray-100 shadow-sm overflow-hidden'>
				{/* 헤더 영역: 제목, 날짜, 튜터 정보를 함께 표시 */}
				<div className='bg-gradient-to-r from-primary/10 to-secondary/10 py-4 px-5 border-b border-gray-100 flex flex-wrap justify-between items-center gap-3'>
					<div className='flex items-center gap-2'>
						<span className='inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm'>
							📘
						</span>
						<h2 className='text-xl font-bold text-primary'>{t('title')}</h2>
					</div>
					<div className='flex flex-wrap items-center gap-4 text-sm'>
						<div className='flex items-center'>
							<span className='text-gray-500'>{t('date')}:</span>
							<span className='font-medium ml-1'>{reviewData.date}</span>
						</div>
						<div className='flex items-center'>
							<span className='text-gray-500'>{t('tutor')}:</span>
							<span className='font-medium ml-1'>{reviewData.tutor}</span>
						</div>
					</div>
				</div>

				<CardContent className='p-4'>
					{/* 주제 */}
					<div className='mb-4 flex items-center gap-2 bg-gray-50 p-3 rounded-lg'>
						<span className='text-sm font-medium text-gray-500'>{t('todays_focus')}:</span>
						<span className='font-medium ml-1'>{reviewData.focus}</span>
					</div>

					{/* 개선된 표현들 */}
					<div>
						<h3 className='text-lg font-bold flex items-center gap-2 mb-3'>
							<span className='inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-sm'>
								✨
							</span>
							{t('say_it_better')}
						</h3>

						<div className='space-y-4'>
							{reviewData.improvements.map((item, index) => (
								<div key={index} className='bg-white border border-gray-100 rounded-lg overflow-hidden'>
									{/* 학생 표현 */}
									<div className='p-3 bg-gray-50 border-b border-gray-100'>
										<div className='flex items-start'>
											<span className='inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 text-gray-700 text-sm shrink-0 mt-0.5 mr-2'>
												🗣️
											</span>
											<div className='text-gray-700'>{item.studentSaid}</div>
										</div>
									</div>

									{/* 화살표 */}
									<div className='flex justify-center -mt-2 -mb-2 relative z-10'>
										<div className='bg-primary rounded-full p-1'>
											<ArrowRight className='h-4 w-4 text-white' />
										</div>
									</div>

									{/* 개선된 표현 */}
									<div className='p-3 bg-primary/5'>
										<div className='flex items-start'>
											<span className='inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-sm shrink-0 mt-0.5 mr-2'>
												💬
											</span>
											<div className='text-gray-800'>
												{item.betterWay.split('\n\n').map((paragraph, i) => (
													<p key={i} className={i === 0 ? '' : 'mt-2 pt-2 border-t border-primary/10'}>
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
