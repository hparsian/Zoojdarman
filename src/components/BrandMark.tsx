import React, { useId } from 'react';

interface BrandMarkProps {
  className?: string;
}

interface ZoojdarmanWordmarkProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const HEART_PATH =
  'M16 29 C16 29 0 18.5 0 8.8 C0 3.5 4 0 8.6 0 C11.8 0 14.4 1.8 16 4.6 C17.6 1.8 20.2 0 23.4 0 C28 0 32 3.5 32 8.8 C32 18.5 16 29 16 29 Z';

/**
 * آیکون دو قلب زوج‌درمان (هماهنگ با فاوآیکن سایت)
 */
export const BrandMark: React.FC<BrandMarkProps> = ({ className = 'w-9 h-9' }) => {
  const gradientId = useId();
  return (
    <svg
      viewBox="0 0 360 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
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
      <rect width="360" height="360" rx="76" fill={`url(#${gradientId})`} />
      <g transform="translate(73.2,110.4) scale(4.8)">
        <path d={HEART_PATH} fill="#2f5c57" />
      </g>
      <g transform="translate(133.2,110.4) scale(4.8)">
        <path d={HEART_PATH} fill="#c77b58" />
      </g>
    </svg>
  );
};

/**
 * لوگوتایپ Zoojdarman با دو قلب هم‌پوشان به‌جای دو حرف oo
 */
export const ZoojdarmanWordmark: React.FC<ZoojdarmanWordmarkProps> = ({
  className = 'text-base sm:text-lg',
  variant = 'light',
}) => {
  const textColor = variant === 'dark' ? 'text-[#FCFBF8]' : 'text-[#344A42]';
  const leftHeartColor = variant === 'dark' ? '#8FAE9B' : '#2f5c57';
  const rightHeartColor = variant === 'dark' ? '#DF9270' : '#c77b58';

  return (
    <span
      dir="ltr"
      aria-label="Zoojdarman"
      className={`inline-flex w-fit items-baseline font-extrabold tracking-tight leading-none select-none ${textColor} ${className}`}
    >
      <span aria-hidden="true">Z</span>
      <svg
        viewBox="0 0 54 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="inline-block h-[0.82em] w-auto self-center mx-[0.05em] translate-y-[0.03em]"
        aria-hidden="true"
      >
        <path d={HEART_PATH} fill={leftHeartColor} />
        <g transform="translate(22, 0)">
          <path d={HEART_PATH} fill={rightHeartColor} />
        </g>
      </svg>
      <span aria-hidden="true">jdarman</span>
    </span>
  );
};
