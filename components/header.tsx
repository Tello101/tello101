'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { BrandButton } from '@/components/ui/brand-button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from '@/components/language-switcher';
import { useLocale } from 'next-intl';

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const pathname = usePathname();
	const locale = useLocale();
	const t = useTranslations('Header');
	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 10);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Close mobile menu when changing pages
	useEffect(() => {
		setIsMenuOpen(false);
	}, [pathname]);

	// 메뉴가 열렸을 때 스크롤 방지
	useEffect(() => {
		if (isMenuOpen) {
			// 스크롤 위치 저장
			const scrollY = window.scrollY;
			document.body.style.position = 'fixed';
			document.body.style.top = `-${scrollY}px`;
			document.body.style.width = '100%';
		} else {
			// 스크롤 위치 복원
			const scrollY = document.body.style.top;
			document.body.style.position = '';
			document.body.style.top = '';
			document.body.style.width = '';
			if (scrollY) {
				window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
			}
		}
	}, [isMenuOpen]);

	// 외부 클릭 시 메뉴 닫기
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setIsMenuOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isMenuOpen]);

	const isActive = (path: string) => {
		// 언어 접두사(예: /en, /ko)를 제거한 경로
		const pathWithoutLocale = pathname.replace(/^\/(en|ko)/, '');

		// 루트 경로 ('/')인 경우 특별 처리
		if (path === '/' && (pathname === '/' || pathname === '/en' || pathname === '/ko' || pathWithoutLocale === '')) {
			return true;
		}

		// 다른 경로들 처리
		if (path !== '/' && (pathname.includes(path) || pathWithoutLocale.startsWith(path))) {
			return true;
		}

		return false;
	};

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 bg-white/95 backdrop-blur ${
				scrolled ? 'shadow-md' : 'shadow-none'
			}`}
		>
			<div className='container flex h-20 items-center justify-between'>
				<Link href='/' className='flex items-center space-x-2'>
					<Image src='/images/tello101_logo.png' alt='Tello101' width={100} height={20} className='h-auto' />
				</Link>

				<nav className='hidden lg:flex items-center space-x-8'>
					<Link href={`/${locale}`} className={`brand-menu-item ${isActive('/') ? 'active text-primary' : ''}`}>
						{t('home')}
					</Link>
					<Link
						href={`/${locale}/services`}
						className={`brand-menu-item ${isActive('/services') ? 'active text-primary' : ''}`}
					>
						{t('services')}
					</Link>
					<Link
						href={`/${locale}/tutors`}
						className={`brand-menu-item ${isActive('/tutors') ? 'active text-primary' : ''}`}
					>
						{t('tutors')}
					</Link>
					<Link
						href={`/${locale}/pricing`}
						className={`brand-menu-item ${isActive('/pricing') ? 'active text-primary' : ''}`}
					>
						{t('pricing')}
					</Link>
					<Link href={`/${locale}/faq`} className={`brand-menu-item ${isActive('/faq') ? 'active text-primary' : ''}`}>
						{t('faq')}
					</Link>
					<Link
						href={`/${locale}/contact`}
						className={`brand-menu-item ${isActive('/contact') ? 'active text-primary' : ''}`}
					>
						{t('contact')}
					</Link>
					<LanguageSwitcher />
					<BrandButton size='sm' variant='default' className='text-sm' asChild>
						<Link href={`/${locale}/contact`}>{t('bookTrial')}</Link>
					</BrandButton>
				</nav>

				<div className='lg:hidden flex items-center space-x-2'>
					<LanguageSwitcher />
					<Button variant='ghost' size='icon' onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-gray-700'>
						{isMenuOpen ? <X className='h-10 w-10' /> : <Menu className='h-10 w-10' />}
					</Button>
				</div>
			</div>

			{/* Floating Mobile dropdown menu with absolute positioning */}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3 }}
						className='absolute left-0 right-0 top-20 z-40 lg:hidden'
						ref={menuRef}
					>
						<div className='bg-white/98 backdrop-blur shadow-lg border-t border-gray-100 bg-white'>
							<div className='container py-4 flex flex-col space-y-4'>
								<Link
									href={`/${locale}`}
									className={`py-3 px-2 border-b border-gray-100 text-lg ${
										isActive('/') ? 'text-primary font-medium' : 'text-gray-800'
									}`}
								>
									{t('home')}
								</Link>
								<Link
									href={`/${locale}/services`}
									className={`py-3 px-2 border-b border-gray-100 text-lg ${
										isActive('/services') ? 'text-primary font-medium' : 'text-gray-800'
									}`}
								>
									{t('services')}
								</Link>
								<Link
									href={`/${locale}/tutors`}
									className={`py-3 px-2 border-b border-gray-100 text-lg ${
										isActive('/tutors') ? 'text-primary font-medium' : 'text-gray-800'
									}`}
								>
									{t('tutors')}
								</Link>
								<Link
									href={`/${locale}/pricing`}
									className={`py-3 px-2 border-b border-gray-100 text-lg ${
										isActive('/pricing') ? 'text-primary font-medium' : 'text-gray-800'
									}`}
								>
									{t('pricing')}
								</Link>
								<Link
									href={`/${locale}/faq`}
									className={`py-3 px-2 border-b border-gray-100 text-lg ${
										isActive('/faq') ? 'text-primary font-medium' : 'text-gray-800'
									}`}
								>
									{t('faq')}
								</Link>
								<Link
									href={`/${locale}/contact`}
									className={`py-3 px-2 border-b border-gray-100 text-lg ${
										isActive('/contact') ? 'text-primary font-medium' : 'text-gray-800'
									}`}
								>
									{t('contact')}
								</Link>
								<div className='pt-2 pb-2'>
									<BrandButton size='default' variant='default' className='w-full' asChild>
										<Link href={`/${locale}/contact`}>{t('bookTrial')}</Link>
									</BrandButton>
								</div>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
