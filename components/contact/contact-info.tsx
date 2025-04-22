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
    <div className="flex h-full flex-col rounded-t-lg bg-primary p-8 text-white md:rounded-l-lg md:rounded-t-none lg:p-10">
      <h2 className="mb-12 text-3xl font-bold md:text-4xl">Contact Us</h2>

      <div className="flex-grow space-y-8">
        <div className="flex items-center">
          <div className="mr-4 flex-shrink-0 rounded-full bg-white/10 p-3">
            <MessageSquare className="h-5 w-5 text-white md:h-6 md:w-6" />
          </div>
          <Button
            className="flex items-center gap-2 rounded-full bg-yellow-400 text-black hover:bg-yellow-300"
            onClick={handleKakaoContact}
          >
            <Image src="/images/kakao-talk.svg" alt="Kakao-talk" width={20} height={20} />
            {t('kakao_contact')}
          </Button>
        </div>

        <div className="flex items-center">
          <div className="mr-4 flex-shrink-0 rounded-full bg-white/10 p-3">
            <Mail className="h-5 w-5 text-white md:h-6 md:w-6" />
          </div>
          <a href={`mailto:${EMAIL}`} className="text-white hover:underline">
            {EMAIL}
          </a>
        </div>

        <div className="flex items-center">
          <div className="mr-4 flex-shrink-0 rounded-full bg-white/10 p-3">
            <MapPin className="h-5 w-5 text-white md:h-6 md:w-6" />
          </div>
          <p className="text-white">{ADDRESS}</p>
        </div>
      </div>
    </div>
  );
};
