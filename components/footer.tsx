'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

export default function Footer() {
	const t = useTranslations('Footer');
	const locale = useLocale();
	const currentYear = new Date().getFullYear();

	return (
		<footer className='border-t bg-gray-50'>
			<div className='container py-16 md:py-20'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-12'>
					<div>
						<Link href={`/${locale}`}>
							<Image src='/images/tello101_text_logo.png' alt='Tello101' width={120} height={20} className='h-auto' />
						</Link>
						<p className='mt-4 text-gray-600'>{t('tagline')}</p>
					</div>
					<div>
						<FooterHeading>{t('pages')}</FooterHeading>
						<ul className='mt-4 space-y-3'>
							<li>
								<FooterLink href={`/${locale}`}>{t('home', { defaultMessage: 'Home' })}</FooterLink>
							</li>
							<li>
								<FooterLink href={`/${locale}/services`}>{t('services', { defaultMessage: 'Services' })}</FooterLink>
							</li>
							<li>
								<FooterLink href={`/${locale}/tutors`}>{t('tutors', { defaultMessage: 'Tutors' })}</FooterLink>
							</li>
							<li>
								<FooterLink href={`/${locale}/pricing`}>{t('pricing', { defaultMessage: 'Pricing' })}</FooterLink>
							</li>
						</ul>
					</div>
					<div>
						<FooterHeading>{t('resources')}</FooterHeading>
						<ul className='mt-4 space-y-3'>
							<li>
								<FooterLink href={`/${locale}/faq`}>{t('faq', { defaultMessage: 'FAQ' })}</FooterLink>
							</li>
							<li>
								<FooterLink href={`/${locale}/contact`}>{t('contact')}</FooterLink>
							</li>
						</ul>
					</div>
					<div>
						<FooterHeading>{t('contact')}</FooterHeading>
						<ul className='mt-4 space-y-3'>
							<li>
								<FooterLink href='mailto:tello101.official@gmail.com'>tello101.official@gmail.com</FooterLink>
							</li>
						</ul>
					</div>
				</div>
				<div className='mt-16 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center'>
					<p className='text-sm text-gray-500'>{t('copyright', { year: currentYear })}</p>
				</div>
			</div>
		</footer>
	);
}

const FooterHeading = ({ children }: { children: React.ReactNode }) => {
	return <h3 className='text-sm font-bold uppercase tracking-wider text-gray-500 mb-4'>{children}</h3>;
};

const FooterLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
	return (
		<Link href={href} className='text-gray-600 hover:text-primary transition-colors'>
			{children}
		</Link>
	);
};
