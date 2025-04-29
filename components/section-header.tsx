import Image from 'next/image';
import React from 'react';

interface SectionHeadingProps {
  title: string | React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  image?: string;
}

export const SectionHeading = ({ title, size = 'md', className, image }: SectionHeadingProps) => {
  const headingClass = {
    h2: {
      sm: 'text-3xl md:text-4xl',
      md: 'text-[32px] md:text-5xl mb-[22px] leading-tight',
      lg: 'text-4xl md:text-6xl mb-[26px]',
      xl: 'text-5xl md:text-7xl mb-[32px]', // 랜딩페이지 hero section에서 사용
    },
  };

  return (
    <h2 className={`${headingClass.h2[size]} mb-10 font-bold text-black ${className}`}>{title}</h2>
  );
};

export const SubTitle = ({
  title,
  size = 'md',
  className,
}: {
  title: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) => {
  const subTitleClass = {
    p: {
      sm: 'text-md md:text-lg',
      md: 'text-lg md:text-xl',
      lg: 'text-xl md:text-2xl',
    },
  };
  return <p className={`${subTitleClass.p[size]} font-normal text-black ${className}`}>{title}</p>;
};
