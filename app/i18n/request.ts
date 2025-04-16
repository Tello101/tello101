import { getRequestConfig } from 'next-intl/server';
import { locales } from './config';

export default getRequestConfig(async ({ locale }) => {
	// 유효한 로케일인지 확인
	let actualLocale: string = typeof locale === 'string' ? locale : 'ko';
	if (!locales.includes(actualLocale as any)) {
		actualLocale = 'ko';
	}

	// 번역 파일 불러오기
	let messages;
	try {
		messages = (await import(`./locales/${actualLocale}.json`)).default;
	} catch (error) {
		console.error(`Could not load messages for locale: ${actualLocale}`, error);
		messages = {};
	}

	return {
		locale: actualLocale,
		messages,
		// 시간대 설정 (한국)
		timeZone: 'Asia/Seoul',
		// 지원하는 모든 다국어 형식 설정
		formats: {
			dateTime: {
				short: {
					day: 'numeric',
					month: 'short',
					year: 'numeric',
				},
			},
		},
	};
});
