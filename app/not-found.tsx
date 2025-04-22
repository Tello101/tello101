'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { BrandButton } from '@/components/ui/brand-button';
import { defaultLocale, locales, type Locale } from './i18n';
import { NextIntlClientProvider } from 'next-intl';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function NotFound() {
	const [mounted, setMounted] = useState(false);
	const [locale, setLocale] = useState<Locale>(defaultLocale);
	const [messages, setMessages] = useState({});
	const router = useRouter();

	// 클라이언트 사이드에서만 실행
	useEffect(() => {
		setMounted(true);

		// 현재 쿠키에서 로케일 확인
		const getCookieLocale = () => {
			const cookies = document.cookie.split(';');
			for (let cookie of cookies) {
				const [name, value] = cookie.trim().split('=');
				if (name === 'NEXT_LOCALE' && locales.includes(value as Locale)) {
					return value as Locale;
				}
			}
			return defaultLocale;
		};

		const cookieLocale = getCookieLocale();
		setLocale(cookieLocale);

		// 메시지 로드
		const loadMessages = async () => {
			try {
				const loadedMessages = (await import(`@/app/i18n/locales/${cookieLocale}.json`)).default;
				setMessages(loadedMessages);
			} catch (error) {
				console.error(`Could not load messages for locale: ${cookieLocale}`, error);
				setMessages({});
			}
		};

		loadMessages();
	}, []);

	// 서버 사이드 렌더링 또는 로딩 중일 때 기본 상태 표시
	if (!mounted) {
		return (
			<div className='min-h-screen flex items-center justify-center'>
				<p>Loading...</p>
			</div>
		);
	}

	// 언어 변경 핸들러
	const handleLanguageChange = (newLocale: Locale) => {
		router.push(`/${newLocale}`);
	};

	return (
		<NextIntlClientProvider locale={locale} messages={messages}>
			<div className='min-h-screen flex flex-col'>
				<Header />
				<main className='flex-1 pt-20'>
					<div className='container flex flex-col gap-5 items-center justify-center min-h-[70vh] py-12 text-center'>
						<div className='max-w-md mx-auto'>
							<Image src='/images/404.png' alt='404' width={120} height={100} className='h-auto' priority />
						</div>
						<h2 className='text-3xl font-bold mb-5 text-primary'>Page Not Found</h2>
						<BrandButton variant='default' asChild>
							<Link href={`/${locale}`}>Back to Home</Link>
						</BrandButton>
					</div>
				</main>
				<Footer />
			</div>
		</NextIntlClientProvider>
	);
}
