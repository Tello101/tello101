import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from '@/app/i18n';

export default createMiddleware({
	// 지원하는 로케일 목록
	locales,

	// 기본 로케일 (영어)
	defaultLocale,

	// 필요할 때만 로케일 접두사 사용
	localePrefix: 'always',

	// 로케일 감지 순서: 1. URL 경로, 2. 쿠키, 3. Accept-Language 헤더, 4. 기본 로케일
	localeDetection: true,
});

export const config = {
	// /api, /_next, /images 등을 제외한 모든 경로에 미들웨어 적용
	matcher: ['/((?!api|_next|.*\\..*).*)'],
};
