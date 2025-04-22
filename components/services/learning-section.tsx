import React from 'react';
import Image from 'next/image';
import { Video, Mic, Camera, Share, MessageSquare } from 'lucide-react';

export const LearningSection = () => {
  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-lg shadow-sm md:bg-gray-200 md:p-4">
      {/* 실시간 수업 UI 오버레이 */}
      <div className="relative">
        {/* 화면 이미지 */}
        <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-gray-200 shadow-sm">
          <Image
            src="/images/services/lesson_screenshot.png"
            alt="레슨 화면"
            fill
            className="object-cover"
            style={{ objectFit: 'contain' }}
          />

          {/* 실시간 표시기 - 좌측 상단 */}
          <div className="absolute left-4 top-4 flex items-center space-x-2 rounded-full bg-black/70 px-3 py-1 text-white">
            <div className="h-2 w-2 animate-pulse rounded-full bg-red-500"></div>
            <span className="text-xs font-medium">LIVE</span>
            <span className="text-xs">45:22</span>
          </div>

          {/* 화상 통화 컨트롤 - 하단 중앙 */}
          <div className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 transform items-center space-x-1 rounded-full bg-black/80 p-1 backdrop-blur-sm sm:space-x-2 sm:p-2 md:flex">
            <button className="rounded-full p-2 transition-colors hover:bg-gray-700">
              <Mic className="h-4 w-4 text-white md:h-5 md:w-5" />
            </button>
            <button className="rounded-full p-2 transition-colors hover:bg-gray-700">
              <Camera className="h-4 w-4 text-white md:h-5 md:w-5" />
            </button>
            <button className="rounded-full bg-red-600 p-2 transition-colors hover:bg-red-700">
              <Video className="h-4 w-4 text-white md:h-5 md:w-5" />
            </button>
            <button className="hidden rounded-full p-2 transition-colors hover:bg-gray-700 sm:block">
              <Share className="h-4 w-4 text-white md:h-5 md:w-5" />
            </button>
            <button className="hidden rounded-full p-2 transition-colors hover:bg-gray-700 sm:block">
              <MessageSquare className="h-4 w-4 text-white md:h-5 md:w-5" />
            </button>
          </div>

          {/* 품질 표시기 - 우측 하단 */}
          <div className="absolute bottom-4 right-4 flex items-center space-x-1 rounded-lg bg-black/70 px-2 py-1">
            <span className="text-xs text-white">HD</span>
          </div>
        </div>
      </div>
    </div>
  );
};
