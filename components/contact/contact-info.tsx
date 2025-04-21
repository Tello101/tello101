import React from 'react';
import { useTranslations } from 'next-intl';
import { Mail, MapPin, MessageSquare } from 'lucide-react';
import { EMAIL, ADDRESS, KAKAO_CHANNEL_URL } from '@/lib/constants/brand';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const ContactInfo = () => {
	const t = useTranslations('Contact');

	const handleKakaoContact = () => {
		window.open(KAKAO_CHANNEL_URL, '_blank');
	};

	return (
		<div className='bg-primary text-white p-8 lg:p-10 rounded-t-lg md:rounded-t-none md:rounded-l-lg flex flex-col h-full'>
			<h2 className='text-3xl font-bold mb-12'>Contact Us</h2>

			<div className='space-y-8 flex-grow'>
				<div className='flex items-center'>
					<div className='bg-white/10 p-3 rounded-full mr-4 flex-shrink-0'>
						<MessageSquare className='w-6 h-6 text-white' />
					</div>
					<Button
						className='bg-yellow-400 hover:bg-yellow-300 rounded-[6px] text-black flex items-center gap-2'
						onClick={handleKakaoContact}
					>
						<Image src='/images/kakao-talk.svg' alt='Kakao-talk' width={20} height={20} />
						{t('kakao_contact')}
					</Button>
				</div>

				<div className='flex items-center'>
					<div className='bg-white/10 p-3 rounded-full mr-4 flex-shrink-0'>
						<Mail className='w-6 h-6 text-white' />
					</div>
					<a href={`mailto:${EMAIL}`} className='text-white hover:underline'>
						{EMAIL}
					</a>
				</div>

				<div className='flex items-center'>
					<div className='bg-white/10 p-3 rounded-full mr-4 flex-shrink-0'>
						<MapPin className='w-6 h-6 text-white' />
					</div>
					<p className='text-white'>{ADDRESS}</p>
				</div>
			</div>
		</div>
	);
};
