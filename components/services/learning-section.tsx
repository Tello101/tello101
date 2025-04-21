import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Video, Mic, Camera, Share, MessageSquare } from 'lucide-react';

export const LearningSection = () => {
	return (
		<div className='w-full max-w-4xl mx-auto bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden'>
			{/* 실시간 수업 UI 오버레이 */}
			<div className='relative'>
				{/* 화면 이미지 */}
				<div className='rounded-lg overflow-hidden border border-gray-200 shadow-sm relative aspect-video w-full'>
					<Image
						src='/images/services/lesson_screenshot.png'
						alt='레슨 화면'
						fill
						className='object-cover'
						style={{ objectFit: 'contain' }}
					/>

					{/* 실시간 표시기 - 좌측 상단 */}
					<div className='absolute top-4 left-4 flex items-center space-x-2 bg-black/70 text-white px-3 py-1 rounded-full'>
						<div className='h-2 w-2 rounded-full bg-red-500 animate-pulse'></div>
						<span className='text-xs font-medium'>LIVE</span>
						<span className='text-xs'>45:22</span>
					</div>

					{/* 화상 통화 컨트롤 - 하단 중앙 */}
					<div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-1 sm:space-x-2 bg-black/80 backdrop-blur-sm p-1 sm:p-2 rounded-full'>
						<button className='p-2 rounded-full hover:bg-gray-700 transition-colors'>
							<Mic className='h-4 w-4 md:h-5 md:w-5 text-white' />
						</button>
						<button className='p-2 rounded-full hover:bg-gray-700 transition-colors'>
							<Camera className='h-4 w-4 md:h-5 md:w-5 text-white' />
						</button>
						<button className='p-2 rounded-full bg-red-600 hover:bg-red-700 transition-colors'>
							<Video className='h-4 w-4 md:h-5 md:w-5 text-white' />
						</button>
						<button className='p-2 rounded-full hover:bg-gray-700 transition-colors hidden sm:block'>
							<Share className='h-4 w-4 md:h-5 md:w-5 text-white' />
						</button>
						<button className='p-2 rounded-full hover:bg-gray-700 transition-colors hidden sm:block'>
							<MessageSquare className='h-4 w-4 md:h-5 md:w-5 text-white' />
						</button>
					</div>

					{/* 품질 표시기 - 우측 하단 */}
					<div className='absolute bottom-4 right-4 flex items-center space-x-1 bg-black/70 px-2 py-1 rounded-lg'>
						<span className='text-xs text-white'>HD</span>
					</div>
				</div>
			</div>
		</div>
	);
};
