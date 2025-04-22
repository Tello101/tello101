'use client';

import React, { useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/animations/fade-in';
import { SectionHeading } from '@/components/section-header';

export const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSectionRef = useRef<HTMLElement>(null);
  const t = useTranslations('Home.Video');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            videoRef.current.play();
          } else if (videoRef.current) {
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.5 },
    );

    if (videoSectionRef.current) {
      observer.observe(videoSectionRef.current);
    }

    return () => {
      if (videoSectionRef.current) {
        observer.unobserve(videoSectionRef.current);
      }
    };
  }, []);

  return (
    <section className="brand-section bg-white" ref={videoSectionRef}>
      <div className="container">
        <FadeIn className="mb-16 text-center">
          <SectionHeading title={t('title')} />
        </FadeIn>

        <FadeIn>
          <div className="box-shadow mx-auto max-w-7xl overflow-hidden rounded-xl bg-white">
            <video ref={videoRef} controls playsInline loop muted className="w-full">
              <source src="/videos/lesson_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
