import React, { useId } from 'react';
import { ZoojdarmanWordmark } from './BrandMark';

interface PageLoaderProps {
  visible?: boolean;
  label?: string;
}

const HEART_PATH =
  'M16 29 C16 29 0 18.5 0 8.8 C0 3.5 4 0 8.6 0 C11.8 0 14.4 1.8 16 4.6 C17.6 1.8 20.2 0 23.4 0 C28 0 32 3.5 32 8.8 C32 18.5 16 29 16 29 Z';

/**
 * لودر آرام و اختصاصی جابه‌جایی بین صفحات با لوگوی دو قلب Zoojdarman
 */
export const PageLoader: React.FC<PageLoaderProps> = ({
  visible = true,
  label = 'در حال آماده‌سازی صفحه...',
}) => {
  const gradientId = useId();

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="در حال بارگذاری صفحه"
      className="fixed inset-0 z-[90] bg-[#F4F1EC]/96 backdrop-blur-sm flex flex-col items-center justify-center px-6 transition-opacity duration-200"
    >
      <div className="flex flex-col items-center gap-5 text-center">
        {/* Animated Two-Hearts Brand Icon */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          <svg
            viewBox="0 0 360 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 drop-shadow-xs"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id={gradientId}
                x1="0"
                y1="0"
                x2="360"
                y2="360"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#e4eeec" />
                <stop offset="1" stopColor="#f5e3d8" />
              </linearGradient>
            </defs>
            <rect width="360" height="360" rx="84" fill={`url(#${gradientId})`} />
            <g className="zd-heart-left">
              <g transform="translate(73.2,110.4) scale(4.8)">
                <path d={HEART_PATH} fill="#2f5c57" />
              </g>
            </g>
            <g className="zd-heart-right">
              <g transform="translate(133.2,110.4) scale(4.8)">
                <path d={HEART_PATH} fill="#c77b58" />
              </g>
            </g>
          </svg>
        </div>

        {/* Zoojdarman Two-Hearts Wordmark */}
        <div className="flex flex-col items-center gap-1.5">
          <ZoojdarmanWordmark className="text-2xl sm:text-[26px]" />
          <p className="text-xs font-medium text-[#555650]">
            مهناز خوینی · مرکز تخصصی زوج‌درمان
          </p>
        </div>

        {/* Subtle Compositor Progress Bar */}
        <div
          aria-hidden="true"
          className="w-40 h-[3px] rounded-full bg-[#E5E0D8] overflow-hidden"
        >
          <div className="h-full w-1/2 rounded-full bg-[#344A42] zd-loader-sweep" />
        </div>

        <span className="text-xs font-medium text-[#3D5E4E]">{label}</span>
      </div>
    </div>
  );
};
