import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
	return (
		<footer className='border-t bg-gray-50'>
			<div className='container py-16 md:py-20'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-12'>
					<div>
						<Link href='/'>
							<Image src='/images/tello101_text_logo.png' alt='Tello101' width={120} height={20} className='h-auto' />
						</Link>
						<p className='mt-4 text-gray-600'>Australia's #1 English Tutoring Platform</p>
					</div>
					<div>
						<FooterHeading>Pages</FooterHeading>
						<ul className='mt-4 space-y-3'>
							<li>
								<FooterLink href='/'>Home</FooterLink>
							</li>
							<li>
								<FooterLink href='/services'>Services</FooterLink>
							</li>
							<li>
								<FooterLink href='/tutors'>Tutors</FooterLink>
							</li>
							<li>
								<FooterLink href='/pricing'>Pricing</FooterLink>
							</li>
						</ul>
					</div>
					<div>
						<FooterHeading>Resources</FooterHeading>
						<ul className='mt-4 space-y-3'>
							<li>
								<FooterLink href='/faq'>FAQ</FooterLink>
							</li>
							<li>
								<FooterLink href='/contact'>Contact</FooterLink>
							</li>
						</ul>
					</div>
					<div>
						<FooterHeading>Contact</FooterHeading>
						<ul className='mt-4 space-y-3'>
							<li>
								<FooterLink href='mailto:tello101.official@gmail.com'>tello101.official@gmail.com</FooterLink>
							</li>
						</ul>
					</div>
				</div>
				<div className='mt-16 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center'>
					<p className='text-sm text-gray-500'>&copy; {new Date().getFullYear()} Tello101 All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}

const FooterHeading = ({ children }: { children: React.ReactNode }) => {
	return <h3 className='text-sm font-bold uppercase tracking-wider text-gray-500 mb-4'>{children}</h3>;
};

const FooterLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
	return (
		<Link href={href} className='text-gray-600 hover:text-primary transition-colors'>
			{children}
		</Link>
	);
};
