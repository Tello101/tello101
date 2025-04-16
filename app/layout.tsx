import type React from 'react';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata = {
	title: "Tello101 - Australia's #1 English Tutoring Platform",
	description: "1:1 online lessons with native speakers from Australia's top universities.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className='min-h-screen bg-background'>
				<Header />
				<main className='flex-1'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}

import './globals.css';
