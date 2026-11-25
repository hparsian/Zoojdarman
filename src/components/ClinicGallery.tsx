import React, { useState, useEffect, useCallback } from 'react';
import {
  Maximize2,
  X,
  ChevronRight,
  ChevronLeft,
  ShieldCheck,
} from 'lucide-react';
import { CLINIC_SPACES, ClinicSpaceKey } from './ClinicSpaceFigure';

type GalleryCategory = 'all' | 'rooms' | 'lounge' | 'workshop';

interface GalleryItem {
  key: Exclude<ClinicSpaceKey, 'consultation-room' | 'online-studio' | 'quiet-lounge'>;
  category: Exclude<GalleryCategory, 'all'>;
}

const GALLERY_ITEMS: GalleryItem[] = [
  { key: 'tehran-sunlit-mustard-room', category: 'rooms' },
  { key: 'sunlit-blue-couples-room', category: 'rooms' },
  { key: 'navy-eft-counseling-room', category: 'rooms' },
  { key: 'acoustic-leather-private-room', category: 'rooms' },
  { key: 'controlled-light-online-room', category: 'rooms' },
  { key: 'workshop-group-hall', category: 'workshop' },
  { key: 'reception-desk-lounge', category: 'lounge' },
  { key: 'waiting-lounge-doors', category: 'lounge' },
  { key: 'reception-hall-corridor', category: 'lounge' },
];

const CATEGORY_TABS: { id: GalleryCategory; label: string }[] = [
  { id: 'all', label: 'همه فضاها' },
  { id: 'rooms', label: 'اتاق‌های مشاوره' },
  { id: 'lounge', label: 'پذیرش و سالن انتظار' },
  { id: 'workshop', label: 'سالن کارگاه و گروه' },
];

const toPersianDigits = (n: number): string =>
  new Intl.NumberFormat('fa-IR').format(n);

export const ClinicGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const activeItem =
    lightboxIndex !== null && filteredItems[lightboxIndex]
      ? filteredItems[lightboxIndex]
      : null;

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const goToNext = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null || filteredItems.length === 0) return null;
      return (prev + 1) % filteredItems.length;
    });
  }, [filteredItems.length]);

  const goToPrev = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null || filteredItems.length === 0) return null;
      return (prev - 1 + filteredItems.length) % filteredItems.length;
    });
  }, [filteredItems.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        goToNext();
      } else if (e.key === 'ArrowRight') {
        goToPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex, closeLightbox, goToNext, goToPrev]);

  const markFailed = (key: string) => {
    setFailedImages((prev) => ({ ...prev, [key]: true }));
  };

  return (
    <section aria-labelledby="clinic-gallery-heading" className="mb-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <p className="text-xs font-semibold text-[#3D5E4E] mb-1.5">
            آشنایی با فضای کلینیک پیوند امن
          </p>
          <h2
            id="clinic-gallery-heading"
            className="text-lg sm:text-xl font-extrabold text-[#292D2A]"
          >
            گالری اتاق‌های مشاوره، سالن انتظار و سالن کارگاه
          </h2>
        </div>

        {/* Functional category filter tabs */}
        <div
          role="tablist"
          aria-label="فیلتر فضاهای کلینیک"
          className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#ECE7DF] rounded-xl border border-[#E5E0D8] self-start md:self-auto"
        >
          {CATEGORY_TABS.map((tab) => {
            const count =
              tab.id === 'all'
                ? GALLERY_ITEMS.length
                : GALLERY_ITEMS.filter((i) => i.category === tab.id).length;
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setActiveCategory(tab.id);
                  setLightboxIndex(null);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-[#FCFBF8] text-[#344A42] shadow-xs'
                    : 'text-[#555650] hover:text-[#292D2A]'
                }`}
              >
                {tab.label} ({toPersianDigits(count)})
              </button>
            );
          })}
        </div>
      </div>

      {/* Responsive gallery grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredItems.map((item, idx) => {
          const meta = CLINIC_SPACES[item.key];
          const isFailed = Boolean(failedImages[item.key]);

          return (
            <button
              key={item.key}
              type="button"
              onClick={() => setLightboxIndex(idx)}
              aria-label={`مشاهده تمام‌صفحه: ${meta.title}`}
              className="group text-right flex flex-col overflow-hidden rounded-2xl border border-[#E5E0D8] bg-[#FCFBF8] hover:border-[#8FAE9B] transition-colors duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#344A42]"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#ECE7DF]">
                {isFailed ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#EDF2EE] via-[#F4F1EC] to-[#ECE7DF] p-6 text-center">
                    <ShieldCheck className="h-7 w-7 text-[#3D5E4E]" />
                    <span className="text-xs font-bold text-[#292D2A]">{meta.title}</span>
                  </div>
                ) : (
                  <>
                    <img
                      src={meta.src}
                      alt={meta.alt}
                      width={1125}
                      height={1500}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      onError={() => markFailed(item.key)}
                      className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                    />

                    {/* Subtle dark scrim & zoom affordance on hover */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1D2B26]/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-lg bg-[#FCFBF8]/92 px-2.5 py-1.5 text-[11px] font-semibold text-[#292D2A] opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-[#344A42]" />
                      <span>بزرگ‌نمایی</span>
                    </span>
                  </>
                )}
              </div>

              <div className="flex-1 w-full border-t border-[#E5E0D8] bg-[#FCFBF8] px-4 py-3.5 space-y-1">
                <span className="block text-xs sm:text-sm font-bold text-[#292D2A] group-hover:text-[#344A42] transition-colors leading-snug">
                  {meta.title}
                </span>
                <p className="text-xs text-[#6E6E68] leading-relaxed">
                  {meta.caption}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Fullscreen LightBox Modal */}
      {activeItem && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={CLINIC_SPACES[activeItem.key].title}
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#151B18]/95 backdrop-blur-sm text-[#FCFBF8] p-4 sm:p-6"
        >
          {/* Top Bar */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-between gap-4 max-w-6xl w-full mx-auto pb-3 border-b border-[#FCFBF8]/10"
          >
            <div className="min-w-0">
              <p className="text-sm sm:text-base font-bold text-[#FCFBF8] truncate">
                {CLINIC_SPACES[activeItem.key].title}
              </p>
              <p className="text-xs text-[#DCE4DE]/80 truncate mt-0.5">
                {CLINIC_SPACES[activeItem.key].caption}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="text-xs font-medium text-[#DCE4DE] tabular-nums">
                {toPersianDigits(lightboxIndex + 1)} / {toPersianDigits(filteredItems.length)}
              </span>
              <button
                type="button"
                onClick={closeLightbox}
                aria-label="بستن نمای تمام‌صفحه"
                className="w-10 h-10 rounded-xl bg-[#FCFBF8]/10 hover:bg-[#FCFBF8]/20 text-[#FCFBF8] flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Image Stage */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex-1 flex items-center justify-center max-w-5xl w-full mx-auto my-3 min-h-0"
          >
            {filteredItems.length > 1 && (
              <button
                type="button"
                onClick={goToPrev}
                aria-label="تصویر قبلی"
                className="absolute right-1 sm:right-3 z-10 w-11 h-11 rounded-full bg-[#1D2B26]/80 hover:bg-[#344A42] border border-[#FCFBF8]/15 text-[#FCFBF8] flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}

            <div className="relative max-h-full max-w-full flex items-center justify-center px-12 sm:px-16">
              {failedImages[activeItem.key] ? (
                <div className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-[#273932] p-10 text-center">
                  <ShieldCheck className="w-8 h-8 text-[#8FAE9B]" />
                  <p className="text-sm font-bold">{CLINIC_SPACES[activeItem.key].title}</p>
                </div>
              ) : (
                <img
                  key={activeItem.key}
                  src={CLINIC_SPACES[activeItem.key].src}
                  alt={CLINIC_SPACES[activeItem.key].alt}
                  referrerPolicy="no-referrer"
                  onError={() => markFailed(activeItem.key)}
                  className="max-h-[68vh] sm:max-h-[72vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
                />
              )}
            </div>

            {filteredItems.length > 1 && (
              <button
                type="button"
                onClick={goToNext}
                aria-label="تصویر بعدی"
                className="absolute left-1 sm:left-3 z-10 w-11 h-11 rounded-full bg-[#1D2B26]/80 hover:bg-[#344A42] border border-[#FCFBF8]/15 text-[#FCFBF8] flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Thumbnail Strip */}
          {filteredItems.length > 1 && (
            <div
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full mx-auto pt-3 border-t border-[#FCFBF8]/10 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-1"
            >
              {filteredItems.map((thumb, idx) => {
                const thumbMeta = CLINIC_SPACES[thumb.key];
                const isSelected = idx === lightboxIndex;
                return (
                  <button
                    key={thumb.key}
                    type="button"
                    onClick={() => setLightboxIndex(idx)}
                    aria-label={thumbMeta.title}
                    aria-current={isSelected ? 'true' : undefined}
                    className={`relative w-12 h-16 sm:w-14 sm:h-[74px] rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#8FAE9B] opacity-100 scale-105'
                        : 'border-transparent opacity-55 hover:opacity-90'
                    }`}
                  >
                    <img
                      src={thumbMeta.src}
                      alt={thumbMeta.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}
    </section>
  );
};
