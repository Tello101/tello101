import { redirect } from 'next/navigation';
import { defaultLocale } from '@/app/i18n';

export default function Home() {
	// 항상 기본 로케일 경로로 리다이렉트
	redirect(`/${defaultLocale}`);
}
