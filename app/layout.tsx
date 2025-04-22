import React from 'react';
import './globals.css';

export const metadata = {
  title: '호주 영어 1:1 튜터 플랫폼 | 텔로101',
  description:
    '호주 영어 발음부터 회화까지! 호주 영어 전문 튜터와 1:1 과외, 지금 텔로101에서 쉽고 재미있게 시작해보세요.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body className="flex min-h-screen flex-col overflow-x-hidden bg-background">{children}</body>
    </html>
  );
}
