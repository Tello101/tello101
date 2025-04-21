import React from 'react';
import { ContactInfo } from '@/components/contact/contact-info';
import { ContactForm } from '@/components/contact/contact-form';

export const ContactSection = () => {
	return (
		<section className='lg:p-5'>
			<div className='flex flex-col lg:flex-row lg:rounded-xl lg:overflow-hidden bg-gray-100'>
				<div className='w-full lg:w-1/3 bg-primary'>
					<ContactInfo />
				</div>

				<div className='w-full lg:w-2/3 p-6 lg:p-10'>
					<ContactForm />
				</div>
			</div>
		</section>
	);
};
