import React, { useState } from 'react';
import { ShieldCheck } from 'lucide-react';

export type ClinicSpaceKey = 'consultation-room' | 'online-studio' | 'quiet-lounge';

interface ClinicSpaceMeta {
  jpg: string;
  webp: string;
  alt: string;
  caption: string;
}

const CLINIC_SPACES: Record<ClinicSpaceKey, ClinicSpaceMeta> = {
  'consultation-room': {
    jpg: '/images/clinic/consultation-room.jpg',
    webp: '/images/clinic/consultation-room.webp',
    alt: 'اتاق مشاوره خصوصی و آرام زوج‌درمانی کلینیک پیوند امن تهران؛ دو مبل راحتی سبز یشمی و کتان روشن روبه‌روی هم در نور طبیعی روز با میز چوبی و درختچه زیتون برای گفت‌وگوی ایمن زوجین',
    caption: 'فضای آرام و بی‌طرف اتاق مشاوره حضوری کلینیک پیوند امن — تهران، منطقه ۲',
  },
  'online-studio': {
    jpg: '/images/clinic/online-studio.jpg',
    webp: '/images/clinic/online-studio.webp',
    alt: 'دفتر تخصصی و فضای کار بالینی مهناز خوینی برای برگزاری جلسات زوج‌درمانی آنلاین؛ میز چوب بلوط، کتابخانه منابع علمی روان‌شناسی و پنل‌های آکوستیک سبز یشمی برای حفظ محرمانگی کامل',
    caption: 'فضای خصوصی و آکوستیک درمانگر برای جلسات آنلاین تصویری و ارزیابی بالینی',
  },
  'quiet-lounge': {
    jpg: '/images/clinic/quiet-lounge.jpg',
    webp: '/images/clinic/quiet-lounge.webp',
    alt: 'ورودی و فضای انتظار آرام و محترمانه کلینیک تخصصی زوج‌درمانی پیوند امن؛ نشیمن سبز مریم‌گلی، نور ملایم دیواری و درِ چوبی قوسی در فضایی بدون تنش پیش از شروع جلسه',
    caption: 'محیط انتظار خصوصی و آرام پیش از ورود به جلسه درمان — رعایت کامل حریم شخصی مراجعان',
  },
};

interface ClinicSpaceFigureProps {
  space: ClinicSpaceKey;
  alt?: string;
  caption?: string;
  showCaption?: boolean;
  priority?: boolean;
  className?: string;
}

export const ClinicSpaceFigure: React.FC<ClinicSpaceFigureProps> = ({
  space,
  alt,
  caption,
  showCaption = true,
  priority = false,
  className = '',
}) => {
  const [hasError, setHasError] = useState(false);
  const meta = CLINIC_SPACES[space];
  const resolvedAlt = alt || meta.alt;
  const resolvedCaption = caption ?? meta.caption;

  return (
    <figure
      className={`overflow-hidden rounded-2xl border border-[#E5E0D8] bg-[#FCFBF8] ${className}`}
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#ECE7DF]">
        {hasError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#EDF2EE] via-[#F4F1EC] to-[#ECE7DF] p-6 text-center">
            <ShieldCheck className="h-7 w-7 text-[#3D5E4E]" />
            <p className="text-xs font-semibold text-[#344A42] max-w-md leading-relaxed">
              {resolvedCaption}
            </p>
          </div>
        ) : (
          <picture>
            <source srcSet={meta.webp} type="image/webp" />
            <img
              src={meta.jpg}
              alt={resolvedAlt}
              width={1200}
              height={675}
              loading={priority ? 'eager' : 'lazy'}
              decoding="async"
              fetchPriority={priority ? 'high' : 'auto'}
              referrerPolicy="no-referrer"
              onError={() => setHasError(true)}
              className="h-full w-full object-cover"
            />
          </picture>
        )}
      </div>

      {showCaption && resolvedCaption && (
        <figcaption className="border-t border-[#E5E0D8] bg-[#F4F1EC]/75 px-4 py-2.5 text-xs text-[#555650] leading-relaxed">
          {resolvedCaption}
        </figcaption>
      )}
    </figure>
  );
};
