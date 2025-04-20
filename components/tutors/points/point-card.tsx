import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface PointCardProps {
	titleKey: string;
	description: string;
	image: string;
	index: number;
	renderHighlight: (chunks: React.ReactNode) => React.ReactNode;
}

export const PointCard = ({ titleKey, description, image, index, renderHighlight }: PointCardProps) => {
	const t = useTranslations('Tutors');

	// 인덱스에 맞는 간단한 대체 텍스트 생성
	const altTexts = [
		'1:1 feedback',
		'Top Credentials, Proven Results',
		`We've got you covered.`,
		'Korean-speaking tutors',
	];

	return (
		<div className='rounded-xl group shadow-md bg-white p-5 md:p-8 h-full flex flex-col border border-gray-100'>
			<div className='space-y-3 flex-1 text-center'>
				<h3 className='text-2xl md:text-3xl md:whitespace-pre-line font-bold text-black'>
					{t.rich(titleKey, {
						highlight: renderHighlight,
					})}
				</h3>
				<p className='text-base md:text-lg text-gray-500 whitespace-pre-line'>{description}</p>
			</div>

			<div className='w-full h-48 aspect-video rounded-lg overflow-hidden relative'>
				<Image
					src={image}
					alt={altTexts[index]}
					fill
					style={{ objectFit: 'contain' }}
					className='transition-transform group-hover:scale-110 duration-700'
				/>
			</div>
		</div>
	);
};
