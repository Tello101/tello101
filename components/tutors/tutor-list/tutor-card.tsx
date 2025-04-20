import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export interface Tutor {
	name: string;
	university: string;
	major: string;
	interests: string;
	current: string;
}

interface TutorCardProps {
	tutor: Tutor;
	interests: string;
	current: string;
}

// 튜터 카드 컴포넌트
export const TutorCard = ({ tutor, interests, current }: TutorCardProps) => {
	// 이름 소문자로 변환 (이미지 파일명용)
	const nameLower = tutor.name.toLowerCase();

	return (
		<Card className='border-0 brand-card hover:-translate-y-1 w-full min-h-[560px] overflow-hidden rounded-xl'>
			<CardContent className='p-0 h-full flex flex-col'>
				<div className='relative h-80 min-h-80 bg-gray-100 flex items-center justify-center overflow-hidden'>
					<div className='relative w-full h-full'>
						<Image src={`/images/tutors/tutor_${nameLower}.webp`} alt={tutor.name} fill className='object-cover' />
					</div>
				</div>

				<div className='p-5 flex-1 flex flex-col'>
					<div className='flex-1'>
						<h3 className='text-3xl font-bold mb-2 text-black'>{tutor.name}</h3>
						<p className='text-md text-primary'>{tutor.university}</p>
						<p className='text-sm text-gray-700 font-medium'>{tutor.major}</p>
					</div>

					{/* 구분선 */}
					<div className='h-px bg-gray-200 w-full my-4'></div>

					<div className='space-y-2 text-gray-500'>
						<p className='text-sm'>
							<span className='font-bold text-gray-700'>{interests}</span> {tutor.interests}
						</p>
						<p className='text-sm'>
							<span className='font-bold text-gray-700'>{current}</span> {tutor.current}
						</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};
