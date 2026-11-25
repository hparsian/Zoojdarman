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
    title: 'اتاق اصلی زوج‌درمانی با نور طبیعی و چشم‌انداز شهر',
    alt: 'اتاق اصلی زوج‌درمانی کلینیک تخصصی پیوند امن در منطقه ۲ تهران؛ پنجره بزرگ رو به چشم‌انداز شهر، صندلی‌های راحتی مخمل خردلی و مبل زیتونی، میز درمانگر، وایت‌برد آموزشی و دیوارهای لمسه‌دوزی‌شده عایق صدا',
    caption:
      'اتاق مشاوره زوجین در کلینیک پیوند امن تهران با پنجره بزرگ نورگیر، صندلی‌های راحتی مخمل خردلی، وایت‌برد آموزشی برای توضیح مدل EFT و دیوارپوش لمسه‌دوزی‌شده آکوستیک.',
  },
  'sunlit-blue-couples-room': {
    src: '/assets/aistudio/IMG_20261125_203503_b40eb5fe.jpg',
    title: 'اتاق گفت‌وگوی زوجین با چیدمان روبه‌روی هم',
    alt: 'اتاق زوج‌درمانی نورگیر کلینیک پیوند امن؛ دو صندلی راحتی آبی کوبالت در مقابل کاناپه مخملی تیره با کوسن‌های خردلی، پنجره با پرده زبرا، گلدان طبیعی و دیوارهای لمسه‌دوزی آکوستیک',
    caption:
      'فضایی متعادل با دو مبل آبی کوبالت و کاناپه راحتی در کنار نور ملایم پنجره؛ طراحی‌شده برای نشست‌های دونفره، گفت‌وگوی بی‌طرف و بازسازی پیوند عاطفی.',
  },
  'navy-eft-counseling-room': {
    src: '/assets/aistudio/IMG_20261125_203457_0fa9bccd.jpg',
    title: 'اتاق جلسات تحلیلی و ترسیم چرخه ارتباطی (EFT)',
    alt: 'اتاق بزرگ زوج‌درمانی و طرحواره‌درمانی کلینیک پیوند امن با مبلمان مخملی سرمه‌ای، میز کار درمانگر، وایت‌برد پایه کوتاه و دیوارهای سرتاسری لمسه‌دوزی‌شده عایق صوت',
    caption:
      'اتاق مشاوره مجهز به مبلمان مخمل سرمه‌ای، دیوارهای تمام‌آکوستیک و وایت‌برد پایه کوتاه برای ترسیم نقشه چرخه تعارض، سبک‌های دلبستگی و تله‌های ارتباطی.',
  },
  'acoustic-leather-private-room': {
    src: '/assets/aistudio/IMG_20261125_203454_0f933901.jpg',
    title: 'اتاق مشاوره ایزوله و تمام‌آکوستیک',
    alt: 'اتاق مشاوره کاملاً ساکت و عایق صوت کلینیک پیوند امن با دیوارهای لمسه‌دوزی‌شده سرتاسری، کاناپه و دو مبل چرمی مشکی راحت و میز کوچک با ساعت و گلدان',
    caption:
      'محیط کاملاً ایزوله و آرام با عایق صوتی سرتاسری و مبلمان چرمی راحت؛ ایده‌آل برای جلسات حساس بحران خیانت، ارزیابی‌های فردی و حفظ حداکثری محرمانگی.',
  },
  'controlled-light-online-room': {
    src: '/assets/aistudio/IMG_20261125_203506_869da7f4.jpg',
    title: 'اتاق نور کنترل‌شده و جلسات آنلاین تصویری',
    alt: 'دفتر بالینی مهناز خوینی با پرده زبرا بسته برای نور ملایم بدون بازتاب، میز کار درمانگر رو به پنجره، صندلی‌های خردلی، وایت‌برد و دیوار آکوستیک کرم',
    caption:
      'اتاق آرام با نور کنترل‌شده و دیوار آکوستیک؛ محل برگزاری جلسات زوج‌درمانی آنلاین تصویری برای مراجعان سایر شهرهای ایران و ایرانیان مقیم خارج از کشور.',
  },
  'workshop-group-hall': {
    src: '/assets/aistudio/IMG_20261125_203500_46496996.jpg',
    title: 'سالن کارگاه‌های تخصصی و گروه‌درمانی پیوند امن',
    alt: 'سالن کارگاه‌ها و گروه‌درمانی کلینیک پیوند امن تهران؛ صندلی‌های دسته‌دار ردیفی، نمایشگر بزرگ دیواری، تریبون مدرس، نورپردازی مدرن و درهای اتاق‌های ۴، ۵ و ۶',
    caption:
      'فضای اختصاصی برگزاری کارگاه‌های مهارت ارتباطی، دوره‌های پیش از ازدواج و نشست‌های گروه‌درمانی؛ مجهز به نمایشگر دیواری، تریبون و صندلی‌های دسته‌دار استاندارد.',
  },
  'waiting-lounge-doors': {
    src: '/assets/aistudio/IMG_20261125_203442_c2c4a84f.jpg',
    title: 'سالن انتظار آرام و ورودی اتاق‌های مشاوره',
    alt: 'سالن انتظار کلینیک روان‌شناسی پیوند امن با صندلی‌های چرمی تیره، درِ سفید لمسه‌دوزی‌شده اتاق شماره ۴، تابلوی رعایت سکوت و دید به اتاق‌های نورگیر مشاوره',
    caption:
      'فضای انتظار منظم و کم‌تنش با تابلوی دعوت به سکوت و دسترسی مستقیم به اتاق‌های مشاوره شماره‌گذاری‌شده با درهای عایق صدا پیش از شروع جلسه.',
  },
  'reception-desk-lounge': {
    src: '/assets/aistudio/IMG_20261125_203448_8cbccb86.jpg',
    title: 'بخش پذیرش و کتابخانه تخصصی کلینیک',
    alt: 'میز پذیرش سفید و مشکی کلینیک تخصصی پیوند امن در کنار قفسه کتاب‌های روان‌شناسی، ساعت دیواری بزرگ، صندلی‌های انتظار و ورودی اتاق‌های مشاوره',
    caption:
      'بخش پذیرش کلینیک پیوند امن در کنار کتابخانه تخصصی و فضای انتظار؛ محل استقبال محترمانه، ثبت نوبت و راهنمایی مراجعان با حفظ آرامش و حریم خصوصی.',
  },
  'reception-hall-corridor': {
    src: '/assets/aistudio/IMG_20261125_203451_73374f72.jpg',
    title: 'نمای سالن پذیرش و درهای عایق صوت اتاق‌ها',
    alt: 'نمای سراسری سالن انتظار و میز پذیرش کلینیک پیوند امن همراه با درهای سفید لمسه‌دوزی‌شده عایق صوت اتاق‌های شماره ۴، ۵ و ۶',
    caption:
      'نمای کلی سالن پذیرش و راهروی اتاق‌های مشاوره ۴، ۵ و ۶؛ تمامی درها دارای پوشش لمسه‌دوزی آکوستیک هستند تا هیچ صدایی میان فضای انتظار و اتاق جلسه منتقل نشود.',
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
