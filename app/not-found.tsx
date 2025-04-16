'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BrandButton } from '@/components/ui/brand-button';

export default function NotFound() {
	return (
		<div className='container flex flex-col gap-5 items-center justify-center min-h-[70vh] py-12 text-center'>
			<div className='max-w-md mx-auto'>
				<Image src='/images/404.png' alt='404' width={120} height={100} className='h-auto' priority />
			</div>
			<h1 className='text-3xl font-bold mb-5 text-primary'>Page Not Found</h1>
			<Link href='/' passHref>
				<BrandButton variant='default'>Back to Home</BrandButton>
			</Link>
		</div>
	);
}
