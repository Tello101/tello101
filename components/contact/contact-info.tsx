import React from 'react';
import { useTranslations } from 'next-intl';
import { Mail, MapPin } from 'lucide-react';
import { EMAIL, ADDRESS, KAKAO_CHANNEL_URL, INSTAGRAM_CHANNEL_URL } from '@/lib/constants/brand';
import Image from 'next/image';

export const ContactInfo = () => {
  const t = useTranslations('Contact');

  const handleKakaoContact = () => {
    window.open(KAKAO_CHANNEL_URL, '_blank');
  };

  const handleInstagramContact = () => {
    window.open(INSTAGRAM_CHANNEL_URL, '_blank');
  };

  return (
    <section className="flex h-full flex-col rounded-t-lg bg-primary p-8 text-white md:rounded-l-lg md:rounded-t-none lg:p-10">
      <h2 className="mb-8 text-3xl font-bold md:mb-12 md:text-4xl">Contact Us</h2>

      <div className="space-y-4 md:space-y-8">
        {/* 카카오톡 */}
        <div className="group transition-all duration-300">
          <div className="mb-1 flex items-center md:mb-3">
            <div className="mr-3 rounded-lg bg-white/10 p-2">
              <Image src="/images/kakao-talk.svg" alt="Kakao-talk" width={20} height={20} />
            </div>
            <h3 className="text-xl font-semibold">Kakao</h3>
          </div>
          <button
            onClick={handleKakaoContact}
            className="ml-12 text-lg text-white/80 transition-colors hover:text-yellow-300"
          >
            {t('kakao_contact')}
          </button>
        </div>

        {/* 인스타그램 */}
        <div className="group transition-all duration-300">
          <div className="mb-1 flex items-center md:mb-3">
            <div className="mr-3 rounded-lg bg-white/10 p-2">
              <Image src="/images/instagram_logo.svg" alt="Instagram" width={20} height={20} />
            </div>
            <h3 className="text-xl font-semibold">Instagram</h3>
          </div>
          <button
            onClick={handleInstagramContact}
            className="ml-12 text-lg text-white/80 transition-colors hover:text-yellow-300"
          >
            @tello_aus
          </button>
        </div>

        {/* 이메일 */}
        <div className="group">
          <div className="mb-1 flex items-center md:mb-3">
            <div className="mr-3 rounded-lg bg-white/10 p-2">
              <Mail className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-xl font-semibold">Email</h3>
          </div>
          <a
            href={`mailto:${EMAIL}`}
            className="ml-12 text-lg text-white/80 transition-colors hover:text-yellow-300"
          >
            {EMAIL}
          </a>
        </div>

        {/* 주소 */}
        <div className="group">
          <div className="mb-1 flex items-center md:mb-3">
            <div className="mr-3 rounded-lg bg-white/10 p-2">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-xl font-semibold">Office</h3>
          </div>
          <p className="ml-12 text-lg text-white/80">{ADDRESS}</p>
        </div>
      </div>
    </section>
  );
};
