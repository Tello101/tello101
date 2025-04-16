'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { locales, type Locale } from '@/app/i18n';

export function LanguageSwitcher() {
	// 클라이언트 컴포넌트에서는 마운트 여부를 확인
	const [mounted, setMounted] = useState(false);
	const [currentLocale, setCurrentLocale] = useState<string>('ko');
	const router = useRouter();
	const pathname = usePathname();

	// 클라이언트 사이드에서만 실행되도록 마운트 상태 확인
	useEffect(() => {
		setMounted(true);
		try {
			// 현재 URL에서 로케일 감지
			const pathParts = pathname.split('/').filter(Boolean);
			const firstPart = pathParts[0];

			// 첫 부분이 로케일이면 사용, 아니면 기본값(ko)
			if (locales.includes(firstPart as any)) {
				setCurrentLocale(firstPart);
			} else {
				setCurrentLocale('ko');
			}
		} catch (error) {
			console.error('Failed to detect locale:', error);
		}
	}, [pathname]);

	const toggleLanguage = (newLocale: string) => {
		// 같은 언어면 아무것도 하지 않음
		if (newLocale === currentLocale) return;

		// 쿠키에 언어 설정 저장
		document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;

		// 현재 경로에서 로케일 부분 제거
		const pathParts = pathname.split('/').filter(Boolean);
		let newPath = '';

		// 첫 부분이 로케일인 경우 제거
		if (locales.includes(pathParts[0] as any)) {
			pathParts.shift(); // 첫 번째 요소(로케일) 제거
		}

		// 새 로케일로 경로 구성
		newPath = `/${newLocale}${pathParts.length > 0 ? '/' + pathParts.join('/') : ''}`;

		// 리디렉션
		router.push(newPath);
		router.refresh();
	};

	if (!mounted) {
		return (
			<div className='h-9 flex items-center'>
				<span className='px-3 text-gray-400'>KOR | ENG</span>
			</div>
		);
	}

	return (
		<div className='flex items-center text-sm font-normal'>
			<button
				className={`px-2 py-1 ${currentLocale === 'ko' ? 'text-primary' : 'text-gray-500'}`}
				onClick={() => toggleLanguage('ko')}
			>
				KOR
			</button>
			<span className='text-gray-400'>|</span>
			<button
				className={`px-2 py-1 ${currentLocale === 'en' ? 'text-primary' : 'text-gray-500'}`}
				onClick={() => toggleLanguage('en')}
			>
				ENG
			</button>
		</div>
	);
}
