// 지원하는 로케일 정의
export const locales = ['ko', 'en'] as const;

// 로케일 타입 정의
export type Locale = (typeof locales)[number];

// 기본 로케일 정의
export const defaultLocale: Locale = 'en';

// 로케일 이름 매핑
export const localeLabels: Record<Locale, string> = {
	ko: '한국어',
	en: 'English',
};
