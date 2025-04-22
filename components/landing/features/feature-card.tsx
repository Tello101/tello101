import React from 'react';
import { BadgeCheck } from 'lucide-react';

interface FeatureItem {
  text: string;
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  features: FeatureItem[];
  className?: string;
}

export function FeatureCard({ icon, title, features, className = '' }: FeatureCardProps) {
  return (
    <div
      className={`brand-card flex h-full w-72 max-w-72 flex-col justify-between gap-8 p-6 ${className}`}
    >
      <div className="mb-auto">
        <div className="mb-4 flex items-center justify-center">{icon}</div>
        <h3 className="text-center text-xl font-bold">{title}</h3>
      </div>
      <ul className="min-h-20 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <BadgeCheck className="mr-2 mt-[2px] h-5 w-5 flex-shrink-0 text-primary" />
            <span className="text-gray-700">{feature.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
