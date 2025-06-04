'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { MailIcon, MapPinIcon } from 'lucide-react';
import { ADDRESS, EMAIL, INSTAGRAM_CHANNEL_URL, KAKAO_CHANNEL_URL } from '@/lib/constants/brand';

export default function Footer() {
  const t = useTranslations('Footer');
  const tContact = useTranslations('Contact');
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-gray-50">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <Link href={`/${locale}`}>
              <Image
                src="/images/tello101_logo.png"
                alt="Tello101"
                width={120}
                height={20}
                className="h-auto"
              />
            </Link>
            <p className="mt-4 text-gray-600">{t('tagline')}</p>
          </div>
          <div>
            <FooterHeading>{t('pages')}</FooterHeading>
            <ul className="mt-4 space-y-3">
              <li>
                <FooterLink href={`/${locale}`}>{t('home', { defaultMessage: 'Home' })}</FooterLink>
              </li>
              <li>
                <FooterLink href={`/${locale}/services`}>
                  {t('services', { defaultMessage: 'Services' })}
                </FooterLink>
              </li>
              <li>
                <FooterLink href={`/${locale}/tutors`}>
                  {t('tutors', { defaultMessage: 'Tutors' })}
                </FooterLink>
              </li>
              <li>
                <FooterLink href={`/${locale}/pricing`}>
                  {t('pricing', { defaultMessage: 'Pricing' })}
                </FooterLink>
              </li>
            </ul>
          </div>
          <div>
            <FooterHeading>{t('resources')}</FooterHeading>
            <ul className="mt-4 space-y-3">
              <li>
                <FooterLink href={`/${locale}/faq`}>
                  {t('faq', { defaultMessage: 'FAQ' })}
                </FooterLink>
              </li>
              <li>
                <FooterLink href={`/${locale}/contact`}>{t('contact')}</FooterLink>
              </li>
            </ul>
          </div>
          <div>
            <FooterHeading>{t('contact')}</FooterHeading>
            <ul className="mt-4 space-y-3">
              <li className="flex cursor-pointer items-center gap-1 text-gray-600 transition-colors hover:text-primary">
                <button
                  onClick={() => window.open(KAKAO_CHANNEL_URL, '_blank')}
                  className="flex items-center gap-1"
                >
                  <Image
                    src="/images/kakao-talk.svg"
                    alt="Kakao-talk"
                    width={20}
                    height={20}
                    className="aspect-square"
                  />
                  <p>{tContact('kakao_contact')}</p>
                </button>
              </li>
              <li className="flex cursor-pointer items-center gap-1 text-gray-600 transition-colors hover:text-primary">
                <button
                  onClick={() => window.open(INSTAGRAM_CHANNEL_URL, '_blank')}
                  className="flex items-center gap-1"
                >
                  <Image
                    src="/images/instagram_logo.svg"
                    alt="Kakao-talk"
                    width={20}
                    height={20}
                    className="aspect-square"
                  />
                  <p>@tello_aus</p>
                </button>
              </li>
              <li className="flex cursor-pointer items-center gap-1 text-gray-600 transition-colors hover:text-primary">
                <MailIcon className="h-4 w-4" />
                <Link href={`mailto:${EMAIL}`}>{EMAIL}</Link>
              </li>
              <li className="flex items-center gap-1 text-gray-600">
                <MapPinIcon className="h-4 w-4" />
                <p>{ADDRESS}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between border-t border-gray-200 pt-8 md:flex-row">
          <p className="text-sm text-gray-500">{t('copyright', { year: currentYear })}</p>
        </div>
      </div>
    </footer>
  );
}

const FooterHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-500">{children}</h3>
  );
};

const FooterLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
  return (
    <Link href={href} className="text-gray-600 transition-colors hover:text-primary">
      {children}
    </Link>
  );
};
