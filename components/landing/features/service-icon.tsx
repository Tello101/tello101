'use client';

import React from 'react';
import Image from 'next/image';

export interface ServiceIconProps {
  type: 'conversation' | 'education' | 'business';
  className?: string;
}

export function ServiceIcon({ type, className = 'w-auto h-32' }: ServiceIconProps) {
  const getPath = () => {
    switch (type) {
      case 'conversation':
        return '/images/conversation.png';
      case 'education':
        return '/images/resume.png';
      case 'business':
        return '/images/business.png';
      default:
        return '/images/conversation.png';
    }
  };

  return <Image src={getPath()} alt={`${type}`} width={40} height={60} className={className} />;
}
