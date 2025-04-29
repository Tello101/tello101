import React from 'react';
import Image from 'next/image';

interface StatCardProps {
  value: string;
  label: string;
  iconSrc: string;
}

export const StatCard = ({ value, label, iconSrc }: StatCardProps) => {
  return (
    <div
      className={`flex h-full flex-col items-center justify-between whitespace-pre-line rounded-xl border border-gray-100 bg-white px-6 py-8 text-center shadow-md hover:shadow-lg`}
    >
      <div className="flex flex-col items-center justify-center">
        <h3 className="mb-2 text-3xl font-bold text-black lg:text-4xl">{value}</h3>
        <p className="text-xl text-gray-700 md:text-2xl">{label}</p>
      </div>

      <div className="flex w-full min-w-20 items-end justify-center">
        <Image src={iconSrc} alt={label} width={140} height={140} className="object-contain" />
      </div>
    </div>
  );
};
