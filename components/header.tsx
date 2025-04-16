'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { BrandButton } from '@/components/ui/brand-button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const pathname = usePathname();

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

	const isActive = (path: string) => {
		if (path === '/' && pathname === '/') return true;
		if (path !== '/' && pathname.startsWith(path)) return true;
		return false;
	};

	return (
		<header
			className={`sticky top-0 z-50 w-full transition-all duration-300 bg-white/95 backdrop-blur ${
				scrolled ? 'shadow-md' : 'shadow-none'
			}`}
		>
			<div className='container flex h-20 items-center justify-between'>
				<Link href='/' className='flex items-center space-x-2'>
					<Image src='/images/tello101_logo.png' alt='Tello101' width={100} height={20} className='h-auto' />
				</Link>

				<nav className='hidden lg:flex items-center space-x-8'>
					<Link href='/' className={`brand-menu-item ${isActive('/') ? 'active text-primary' : ''}`}>
						Home
					</Link>
					<Link href='/services' className={`brand-menu-item ${isActive('/services') ? 'active text-primary' : ''}`}>
						Services
					</Link>
					<Link href='/tutors' className={`brand-menu-item ${isActive('/tutors') ? 'active text-primary' : ''}`}>
						Tutors
					</Link>
					<Link href='/pricing' className={`brand-menu-item ${isActive('/pricing') ? 'active text-primary' : ''}`}>
						Pricing
					</Link>
					<Link href='/faq' className={`brand-menu-item ${isActive('/faq') ? 'active text-primary' : ''}`}>
						FAQ
					</Link>
					<Link href='/contact' className={`brand-menu-item ${isActive('/contact') ? 'active text-primary' : ''}`}>
						Contact
					</Link>
					<BrandButton size='sm' variant='default' className='text-sm'>
						Book Trial
					</BrandButton>
				</nav>

				<div className='lg:hidden flex items-center space-x-2'>
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
					>
						<div className='bg-white/98 backdrop-blur shadow-lg border-t border-gray-100 bg-white'>
							<div className='container py-4 flex flex-col space-y-4 max-h-[80vh] overflow-y-auto'>
								<Link
									href='/'
									className={`py-3 px-2 border-b border-gray-100 text-lg ${
										isActive('/') ? 'text-primary font-medium' : 'text-gray-800'
									}`}
								>
									Home
								</Link>
								<Link
									href='/services'
									className={`py-3 px-2 border-b border-gray-100 text-lg ${
										isActive('/services') ? 'text-primary font-medium' : 'text-gray-800'
									}`}
								>
									Services
								</Link>
								<Link
									href='/tutors'
									className={`py-3 px-2 border-b border-gray-100 text-lg ${
										isActive('/tutors') ? 'text-primary font-medium' : 'text-gray-800'
									}`}
								>
									Tutors
								</Link>
								<Link
									href='/pricing'
									className={`py-3 px-2 border-b border-gray-100 text-lg ${
										isActive('/pricing') ? 'text-primary font-medium' : 'text-gray-800'
									}`}
								>
									Pricing
								</Link>
								<Link
									href='/faq'
									className={`py-3 px-2 border-b border-gray-100 text-lg ${
										isActive('/faq') ? 'text-primary font-medium' : 'text-gray-800'
									}`}
								>
									FAQ
								</Link>
								<Link
									href='/contact'
									className={`py-3 px-2 border-b border-gray-100 text-lg ${
										isActive('/contact') ? 'text-primary font-medium' : 'text-gray-800'
									}`}
								>
									Contact
								</Link>
								<div className='pt-2 pb-2'>
									<BrandButton size='default' variant='default' className='w-full'>
										Book Trial
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
