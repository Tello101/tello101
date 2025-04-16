import { ReactNode } from 'react';
import { getTranslations } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { locales } from '@/app/i18n';
import Header from '@/components/header';
import Footer from '@/components/footer';

type Props = {
	children: ReactNode;
	params: Promise<{ locale: string }> | { locale: string };
};

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(props: Props) {
	// params를 await로 처리
	const params = await props.params;
	const locale = params.locale;

	try {
		const t = await getTranslations({ locale, namespace: 'Common.metadata' });

		return {
			title: t('title'),
			description: t('description'),
		};
	} catch (error) {
		console.error(`Could not load metadata for locale: ${locale}`, error);
		return {
			title: 'Tello101',
			description: 'English tutoring platform',
		};
	}
}

export default async function LocaleLayout(props: Props) {
	// params를 await로 처리
	const params = await props.params;
	const locale = params.locale;

	// 유효하지 않은 로케일 처리
	if (!locales.includes(locale as any)) {
		notFound();
	}

	// 메시지 로드
	let messages;
	try {
		messages = (await import(`@/app/i18n/locales/${locale}.json`)).default;
	} catch (error) {
		console.error(`Could not load messages for locale: ${locale}`, error);
		messages = {};
	}

	return (
		<NextIntlClientProvider locale={locale} messages={messages}>
			<Header />
			<main className='flex-1'>{props.children}</main>
			<Footer />
		</NextIntlClientProvider>
	);
}
