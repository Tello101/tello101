import React from 'react';
import './globals.css';

export const metadata = {
	title: 'Australian English 1:1 Tutoring Platform | Tello101',
	description:
		'From Australian pronunciation to real conversations! Learn with expert Australian English tutors through 1:1 lessons—fun and easy learning with Tello101.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className='min-h-screen bg-background flex flex-col'>{children}</body>
		</html>
	);
}
