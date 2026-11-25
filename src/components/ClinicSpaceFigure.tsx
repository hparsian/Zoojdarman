import React, { useState } from 'react';
import { ShieldCheck } from 'lucide-react';

export type ClinicSpaceKey =
  | 'tehran-sunlit-mustard-room'
  | 'sunlit-blue-couples-room'
  | 'navy-eft-counseling-room'
  | 'acoustic-leather-private-room'
  | 'controlled-light-online-room'
  | 'workshop-group-hall'
  | 'waiting-lounge-doors'
  | 'reception-desk-lounge'
  | 'reception-hall-corridor'
  | 'consultation-room'
  | 'online-studio'
  | 'quiet-lounge';

interface ClinicSpaceMeta {
  src: string;
  title: string;
  alt: string;
  caption: string;
}

const REAL_CLINIC_SPACES: Record<
  Exclude<ClinicSpaceKey, 'consultation-room' | 'online-studio' | 'quiet-lounge'>,
  ClinicSpaceMeta
> = {
  'tehran-sunlit-mustard-room': {
    src: '/assets/aistudio/IMG_20261125_203509_80e10943.jpg',
    title: 'اتاق زوج‌درمانی',
    alt: 'اتاق مشاوره زوج‌درمانی کلینیک پیوند امن تهران با صندلی‌های خردلی، میز کار درمانگر، پنجره رو به شهر و وایت‌برد آموزشی',
    caption: 'اتاق اصلی مشاوره زوجین در کلینیک پیوند امن (منطقه ۲ تهران)',
  },
  'sunlit-blue-couples-room': {
    src: '/assets/aistudio/IMG_20261125_203503_b40eb5fe.jpg',
    title: 'اتاق مشاوره زوجین و خانواده',
    alt: 'اتاق مشاوره کلینیک پیوند امن با دو مبل آبی و کاناپه تیره در کنار پنجره نورگیر',
    caption: 'فضای برگزاری جلسات زوج‌درمانی و مشاوره پیش از ازدواج با نور طبیعی روز',
  },
  'navy-eft-counseling-room': {
    src: '/assets/aistudio/IMG_20261125_203457_0fa9bccd.jpg',
    title: 'اتاق جلسات زوج‌درمانی و فردی',
    alt: 'اتاق مشاوره کلینیک پیوند امن با مبلمان سرمه‌ای، میز کار، وایت‌برد پایه کوتاه و دیوار عایق صدا',
    caption: 'مجهز به وایت‌برد آموزشی برای توضیح الگوهای ارتباطی در طول جلسه',
  },
  'acoustic-leather-private-room': {
    src: '/assets/aistudio/IMG_20261125_203454_0f933901.jpg',
    title: 'اتاق مشاوره اختصاصی',
    alt: 'اتاق مشاوره آرام کلینیک پیوند امن با دیوارهای عایق صوت و مبلمان چرمی مشکی',
    caption: 'اتاق ساکت و عایق صدا برای جلسات خصوصی و فردی',
  },
  'controlled-light-online-room': {
    src: '/assets/aistudio/IMG_20261125_203506_869da7f4.jpg',
    title: 'اتاق جلسات آنلاین و مشاوره',
    alt: 'اتاق مشاوره کلینیک پیوند امن با پرده زبرا بسته، میز کار درمانگر و نور ملایم برای جلسات تصویری',
    caption: 'فضای آرام برای برگزاری جلسات آنلاین تصویری با مراجعان خارج از تهران',
  },
  'workshop-group-hall': {
    src: '/assets/aistudio/IMG_20261125_203500_46496996.jpg',
    title: 'سالن کارگاه و گروه‌درمانی',
    alt: 'سالن کارگاه‌های آموزشی کلینیک پیوند امن با صندلی‌های دسته‌دار، نمایشگر دیواری و تریبون',
    caption: 'فضای برگزاری کارگاه‌های آموزشی، دوره‌های زوجین و جلسات گروهی کلینیک پیوند امن',
  },
  'waiting-lounge-doors': {
    src: '/assets/aistudio/IMG_20261125_203442_c2c4a84f.jpg',
    title: 'سالن انتظار مراجعان',
    alt: 'سالن انتظار کلینیک پیوند امن با صندلی‌های تیره و درِ اتاق مشاوره شماره ۴',
    caption: 'فضای انتظار پیش از شروع جلسه در مجاورت اتاق‌های مشاوره',
  },
  'reception-desk-lounge': {
    src: '/assets/aistudio/IMG_20261125_203448_8cbccb86.jpg',
    title: 'بخش پذیرش کلینیک',
    alt: 'میز پذیرش کلینیک پیوند امن در کنار قفسه کتاب و صندلی‌های انتظار',
    caption: 'میز پذیرش، هماهنگی نوبت و کتابخانه کوچک کلینیک پیوند امن',
  },
  'reception-hall-corridor': {
    src: '/assets/aistudio/IMG_20261125_203451_73374f72.jpg',
    title: 'فضای انتظار و ورودی اتاق‌ها',
    alt: 'نمای سالن انتظار، میز پذیرش و درهای عایق صدا برای اتاق‌های شماره ۴، ۵ و ۶ کلینیک پیوند امن',
    caption: 'نمای سالن انتظار و درهای عایق‌بندی‌شده اتاق‌های ۴، ۵ و ۶',
  },
};

export const CLINIC_SPACES: Record<ClinicSpaceKey, ClinicSpaceMeta> = {
  ...REAL_CLINIC_SPACES,
  'consultation-room': REAL_CLINIC_SPACES['tehran-sunlit-mustard-room'],
  'online-studio': REAL_CLINIC_SPACES['controlled-light-online-room'],
  'quiet-lounge': REAL_CLINIC_SPACES['waiting-lounge-doors'],
};

interface ClinicSpaceFigureProps {
  space: ClinicSpaceKey;
  title?: string;
  alt?: string;
  caption?: string;
  showTitle?: boolean;
  showCaption?: boolean;
  aspectRatio?: '3/4' | '4/5';
  priority?: boolean;
  className?: string;
}

export const ClinicSpaceFigure: React.FC<ClinicSpaceFigureProps> = ({
  space,
  title,
  alt,
  caption,
  showTitle = true,
  showCaption = true,
  aspectRatio = '3/4',
  priority = false,
  className = '',
}) => {
  const [hasError, setHasError] = useState(false);
  const meta = CLINIC_SPACES[space];
  const resolvedTitle = title ?? meta.title;
  const resolvedAlt = alt || meta.alt;
  const resolvedCaption = caption ?? meta.caption;
  const aspectClass = aspectRatio === '4/5' ? 'aspect-[4/5]' : 'aspect-[3/4]';

  return (
    <figure
      className={`flex flex-col overflow-hidden rounded-2xl border border-[#E5E0D8] bg-[#FCFBF8] ${className}`}
    >
      <div className={`relative ${aspectClass} w-full overflow-hidden bg-[#ECE7DF]`}>
        {hasError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#EDF2EE] via-[#F4F1EC] to-[#ECE7DF] p-6 text-center">
            <ShieldCheck className="h-7 w-7 text-[#3D5E4E]" />
            <p className="text-xs font-bold text-[#292D2A] max-w-md">{resolvedTitle}</p>
            <p className="text-xs text-[#555650] max-w-md leading-relaxed">
              {resolvedCaption}
            </p>
          </div>
        ) : (
          <img
            src={meta.src}
            alt={resolvedAlt}
            width={1125}
            height={1500}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={priority ? 'high' : 'auto'}
            referrerPolicy="no-referrer"
            onError={() => setHasError(true)}
            className="h-full w-full object-cover"
          />
        )}
      </div>

      {(showTitle || showCaption) && (resolvedTitle || resolvedCaption) && (
        <figcaption className="flex-1 border-t border-[#E5E0D8] bg-[#F4F1EC]/75 px-4 py-3.5 text-right space-y-1">
          {showTitle && resolvedTitle && (
            <span className="block text-xs sm:text-sm font-bold text-[#292D2A] leading-snug">
              {resolvedTitle}
            </span>
          )}
          {showCaption && resolvedCaption && (
            <p className="text-xs text-[#555650] leading-relaxed">
              {resolvedCaption}
            </p>
          )}
        </figcaption>
      )}
    </figure>
  );
};
