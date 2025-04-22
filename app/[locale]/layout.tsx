import { ReactNode } from 'react';
import { getTranslations } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { locales } from '@/app/i18n';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Toaster } from 'sonner';

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }> | { locale: string };
};

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const locale = params.locale;

  try {
    const t = await getTranslations({ locale, namespace: 'Common.metadata.default' });

    return {
      title: t('title'),
      description: t('description'),
    };
  } catch (error) {
    console.error(`Could not load metadata for locale: ${locale}`, error);
    return {
      title: '호주 영어 1:1 튜터 플랫폼 | 텔로101',
      description:
        '호주 영어 발음부터 회화까지! 호주 영어 전문 튜터와 1:1 과외, 지금 텔로101에서 쉽고 재미있게 시작해보세요.',
    };
  }
}

export default async function LocaleLayout(props: Props) {
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
      <main className="flex-1 pt-20">{props.children}</main>
      <Footer />
      <Toaster position="bottom-right" />
    </NextIntlClientProvider>
  );
}
