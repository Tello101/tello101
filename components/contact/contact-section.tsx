'use client';

import React from 'react';
import { ContactInfo } from '@/components/contact/contact-info';
import { ContactForm } from '@/components/contact/contact-form';

export const ContactSection = () => {
  return (
    <section className="lg:p-5">
      <div className="flex flex-col lg:flex-row lg:overflow-hidden lg:rounded-xl">
        <div className="w-full bg-primary lg:w-1/3">
          <ContactInfo />
        </div>

        <div className="w-full p-6 lg:w-2/3 lg:p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
