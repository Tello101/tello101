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

// 네비게이션 항목 정의
const NAVIGATION_ITEMS = [
  { path: '', translationKey: 'home' },
  { path: '/services', translationKey: 'services' },
  { path: '/tutors', translationKey: 'tutors' },
  { path: '/pricing', translationKey: 'pricing' },
  { path: '/faq', translationKey: 'faq' },
  { path: '/contact', translationKey: 'contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('Header');
  const menuRef = useRef<HTMLDivElement>(null);

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 페이지 이동 시 메뉴 닫기 및 스크롤 초기화
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  // 메뉴가 열렸을 때 스크롤 방지
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // 외부 클릭 시 메뉴 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // 메뉴 토글 버튼 클릭은 제외
      const toggleButton = document.getElementById('mobile-menu-toggle');
      if (toggleButton && toggleButton.contains(event.target as Node)) {
        return;
      }

      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // 활성 경로 확인
  const isActive = (path: string) => {
    const pathWithoutLocale = pathname.replace(/^\/(en|ko)/, '');

    // 루트 경로 특별 처리
    if (
      path === '' &&
      (pathname === '/' || pathname === '/en' || pathname === '/ko' || pathWithoutLocale === '')
    ) {
      return true;
    }

    // 다른 경로 처리
    return path !== '' && (pathname.includes(path) || pathWithoutLocale.startsWith(path));
  };

  return (
    <>
      {/* 모바일 메뉴 오버레이 */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-black/45 backdrop-blur-[1.5px]"
            onClick={() => setIsMenuOpen(false)}
            style={{ top: 'var(--header-height, 80px)' }}
          />
        )}
      </AnimatePresence>

      <header
        className={`fixed left-0 right-0 top-0 z-50 w-full bg-white/95 backdrop-blur transition-all duration-300 ${
          scrolled ? 'shadow-md' : 'shadow-none'
        }`}
      >
        <div className="container flex h-20 items-center justify-between">
          {/* 로고 */}
          <h1>
            <Link href={`/${locale}`} className="flex items-center space-x-2">
              <Image
                src="/images/tello101_logo.png"
                alt="Tello101 logo"
                width={120}
                height={30}
                className="h-auto w-[100px] md:w-[120px]"
              />
            </Link>
          </h1>

          {/* 데스크탑 메뉴 */}
          <nav className="hidden items-center space-x-8 lg:flex">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.translationKey}
                href={`/${locale}${item.path}`}
                className={`brand-menu-item ${isActive(item.path) ? 'active text-primary' : ''}`}
              >
                {t(item.translationKey)}
              </Link>
            ))}
            <LanguageSwitcher />
            <BrandButton size="sm" variant="default" className="text-sm" asChild>
              <Link href={`/${locale}/contact`}>{t('bookTrial')}</Link>
            </BrandButton>
          </nav>

          {/* 모바일 메뉴 토글 */}
          <div className="flex items-center space-x-2 lg:hidden">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
              id="mobile-menu-toggle"
            >
              {isMenuOpen ? <X className="h-10 w-10" /> : <Menu className="h-10 w-10" />}
            </Button>
          </div>
        </div>

        {/* 모바일 드롭다운 메뉴 */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed left-0 right-0 top-[var(--header-height,80px)] z-40 lg:hidden"
              ref={menuRef}
            >
              <div className="bg-white/98 border-t border-gray-100 bg-white shadow-lg backdrop-blur">
                <div className="container flex flex-col space-y-4 py-4">
                  {NAVIGATION_ITEMS.map((item) => (
                    <Link
                      key={item.translationKey}
                      href={`/${locale}${item.path}`}
                      className={`border-b border-gray-100 px-2 py-3 text-lg ${
                        isActive(item.path) ? 'font-medium text-primary' : 'text-gray-800'
                      }`}
                    >
                      {t(item.translationKey)}
                    </Link>
                  ))}
                  <div className="pb-2 pt-2">
                    <BrandButton size="default" variant="default" className="w-full" asChild>
                      <Link href={`/${locale}/contact`}>{t('bookTrial')}</Link>
                    </BrandButton>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
