import React, { useEffect, useState } from 'react';
import {
  VIDEOS_DATA,
  YOUTUBE_CHANNEL_META,
  type VideoCategory,
  type VideoItem,
} from '../data/videosData';
import { Play, ArrowLeft, ExternalLink, X } from 'lucide-react';

interface VideosSectionProps {
  onNavigateContact?: () => void;
  onNavigateVideos?: () => void;
  limit?: number;
}

type FilterKey = 'all' | 'infidelity' | 'conflict' | 'attachment';

const FILTER_OPTIONS: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'همه ویدیوها' },
  { key: 'infidelity', label: 'خیانت و اعتماد' },
  { key: 'conflict', label: 'تعارض و طلاق عاطفی' },
  { key: 'attachment', label: 'مرزبندی و انتخاب' },
];

function matchesFilter(category: VideoCategory, filter: FilterKey): boolean {
  if (filter === 'all') return true;
  if (filter === 'infidelity') return category === 'مشاوره خیانت';
  if (filter === 'conflict') {
    return category === 'ارتباط و گفتگو' || category === 'طلاق عاطفی';
  }
  return category === 'رویکرد EFT' || category === 'سوالات متداول';
}

const ThumbnailWithFallback: React.FC<{
  src: string;
  alt: string;
  className?: string;
  fallbackTitle: string;
}> = ({ src, alt, className = '', fallbackTitle }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="w-full h-full bg-[#ECE7DF] flex flex-col items-center justify-center p-4 text-center">
        <Play className="w-7 h-7 text-[#344A42] mb-2" />
        <span className="text-xs font-semibold text-[#292D2A] leading-relaxed">
          {fallbackTitle}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};

export const VideosSection: React.FC<VideosSectionProps> = ({
  onNavigateVideos,
  limit = 3,
}) => {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [avatarError, setAvatarError] = useState(false);

  const isHomeShowcase = limit <= 4;
  const featuredVideo = VIDEOS_DATA.find((v) => !v.isShort) ?? VIDEOS_DATA[0];
  const allShorts = VIDEOS_DATA.filter((v) => v.isShort);

  const visibleShorts = isHomeShowcase
    ? allShorts.slice(0, 4)
    : allShorts.filter((v) => matchesFilter(v.category, activeFilter));

  const showFeatured =
    isHomeShowcase || matchesFilter(featuredVideo.category, activeFilter);

  useEffect(() => {
    if (!activeVideo) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveVideo(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeVideo]);

  return (
    <section id="videos" className="py-16 sm:py-24 bg-[#FCFBF8] border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-[#3D5E4E] mb-2">
              آرشیو رسانه‌ای و آموزش تصویری
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#292D2A] leading-snug mb-3">
              ویدیوهای آموزشی مهناز خوینی در یوتیوب
            </h2>
            <p className="text-sm sm:text-base text-[#555650] leading-relaxed">
              منتخب ویدیوها و تحلیل‌های کوتاه از کانال رسمی یوتیوب درباره ریشه‌های تعارض تکراری، نشانه‌های گاتمن و مدیریت بحران اعتماد.
            </p>
          </div>

          {onNavigateVideos && (
            <button
              type="button"
              onClick={onNavigateVideos}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#344A42] hover:text-[#273932] border-b border-[#344A42]/30 pb-1 self-start md:self-auto cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>مشاهده همه ویدیوها ({VIDEOS_DATA.length})</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Real Channel Profile Strip */}
        <div className="bg-[#F4F1EC] border border-[#E5E0D8] rounded-xl p-5 sm:p-6 mb-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border border-[#E5E0D8] bg-[#ECE7DF] shrink-0">
              {avatarError ? (
                <div className="w-full h-full flex items-center justify-center text-sm font-bold text-[#344A42]">
                  م خ
                </div>
              ) : (
                <img
                  src={YOUTUBE_CHANNEL_META.avatar}
                  alt={YOUTUBE_CHANNEL_META.name}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={() => setAvatarError(true)}
                  className="w-full h-full object-cover object-top"
                />
              )}
            </div>

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                <h3 className="text-base sm:text-lg font-bold text-[#292D2A]">
                  {YOUTUBE_CHANNEL_META.name}
                </h3>
                <span className="text-xs text-[#6E6E68] font-medium" dir="ltr">
                  {YOUTUBE_CHANNEL_META.handle}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#555650] leading-relaxed max-w-2xl">
                {YOUTUBE_CHANNEL_META.description}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={YOUTUBE_CHANNEL_META.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-[#344A42] hover:bg-[#273932] text-[#FCFBF8] text-xs font-semibold rounded-lg transition-colors inline-flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>مشاهده کانال یوتیوب</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
            <a
              href={YOUTUBE_CHANNEL_META.aparatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-[#FCFBF8] hover:bg-[#ECE7DF] text-[#292D2A] border border-[#E5E0D8] text-xs font-semibold rounded-lg transition-colors inline-flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <span>کانال آپارات</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#555650]" />
            </a>
          </div>
        </div>

        {/* Archive Topic Filter (shown on dedicated /videos archive page) */}
        {!isHomeShowcase && (
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {FILTER_OPTIONS.map((tab) => {
              const active = activeFilter === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveFilter(tab.key)}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-[#344A42] text-[#FCFBF8] border-[#344A42]'
                      : 'bg-[#F4F1EC] text-[#555650] border-[#E5E0D8] hover:text-[#292D2A]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Featured 16:9 YouTube Video */}
        {showFeatured && (
          <article className="bg-[#F4F1EC] border border-[#E5E0D8] rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch mb-8">
            <div className="lg:col-span-7 relative aspect-video lg:aspect-auto lg:min-h-[340px] bg-[#ECE7DF] overflow-hidden group">
              <ThumbnailWithFallback
                src={featuredVideo.thumbnail}
                alt={featuredVideo.title}
                fallbackTitle={featuredVideo.title}
                className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <button
                type="button"
                onClick={() => setActiveVideo(featuredVideo)}
                aria-label={`پخش ویدیو ${featuredVideo.title}`}
                className="absolute inset-0 bg-[#292D2A]/15 group-hover:bg-[#292D2A]/30 transition-colors flex items-center justify-center cursor-pointer"
              >
                <span className="w-14 h-14 rounded-full bg-[#FCFBF8]/95 text-[#344A42] flex items-center justify-center shadow-sm transition-transform duration-200 group-hover:scale-105">
                  <Play className="w-6 h-6 fill-current mr-0.5" />
                </span>
              </button>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between gap-6">
              <div>
                <p className="text-xs font-medium text-[#6E6E68] mb-2">
                  {featuredVideo.format} · {featuredVideo.category}
                </p>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#292D2A] leading-snug mb-3">
                  {featuredVideo.title}
                </h3>
                <p className="text-sm text-[#555650] leading-relaxed mb-5">
                  {featuredVideo.description}
                </p>

                <ul className="space-y-2 border-t border-[#E5E0D8] pt-4 text-xs sm:text-sm text-[#3E413D]">
                  {featuredVideo.keyTakeaways.map((point) => (
                    <li key={point} className="leading-relaxed">
                      — {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={featuredVideo.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-[#344A42] hover:bg-[#273932] text-[#FCFBF8] text-xs font-semibold rounded-lg transition-colors inline-flex items-center gap-2 whitespace-nowrap shrink-0"
                >
                  <span>تماشا در یوتیوب</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => setActiveVideo(featuredVideo)}
                  className="px-4 py-2.5 bg-[#FCFBF8] hover:bg-[#ECE7DF] text-[#292D2A] border border-[#E5E0D8] text-xs font-semibold rounded-lg transition-colors inline-flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
                >
                  <Play className="w-3.5 h-3.5 text-[#344A42]" />
                  <span>پخش در صفحه</span>
                </button>
              </div>
            </div>
          </article>
        )}

        {/* Real Shorts Grid (cropped neatly to 9:16 center artwork) */}
        {visibleShorts.length > 0 && (
          <div>
            <div className="flex items-center justify-between gap-4 mb-4">
              <p className="text-xs sm:text-sm font-semibold text-[#555650]">
                ویدیوهای کوتاه آموزشی (YouTube Shorts)
              </p>
              <span className="text-xs text-[#6E6E68] tabular-nums">
                {visibleShorts.length} ویدیو
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
              {visibleShorts.map((video) => (
                <article
                  key={video.id}
                  className="bg-[#F4F1EC] border border-[#E5E0D8] rounded-xl overflow-hidden flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative aspect-[9/16] bg-[#292D2A] overflow-hidden">
                      <ThumbnailWithFallback
                        src={video.thumbnail}
                        alt={video.title}
                        fallbackTitle={video.title}
                        className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                      <button
                        type="button"
                        onClick={() => setActiveVideo(video)}
                        aria-label={`پخش ویدیو ${video.title}`}
                        className="absolute inset-0 bg-[#292D2A]/10 group-hover:bg-[#292D2A]/25 transition-colors flex items-end justify-end p-3 cursor-pointer"
                      >
                        <span className="w-10 h-10 rounded-full bg-[#FCFBF8]/95 text-[#344A42] flex items-center justify-center shadow-sm transition-transform duration-200 group-hover:scale-105">
                          <Play className="w-4 h-4 fill-current mr-0.5" />
                        </span>
                      </button>
                    </div>

                    <div className="p-4">
                      <p className="text-[11px] font-medium text-[#6E6E68] mb-1.5">
                        {video.category} · {video.duration}
                      </p>
                      <h3 className="text-sm font-bold text-[#292D2A] leading-snug mb-2">
                        {video.title}
                      </h3>
                      <p className="text-xs text-[#555650] leading-relaxed line-clamp-2">
                        {video.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-4 pb-4 pt-2.5 border-t border-[#E5E0D8] flex items-center justify-between text-xs font-semibold">
                    <a
                      href={video.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#344A42] hover:underline whitespace-nowrap"
                    >
                      <span>تماشا در یوتیوب</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <button
                      type="button"
                      onClick={() => setActiveVideo(video)}
                      className="text-[#555650] hover:text-[#292D2A] cursor-pointer whitespace-nowrap"
                    >
                      پخش
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Video Player Modal with direct external fallback */}
      {activeVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.title}
          className="fixed inset-0 z-50 bg-[#1B1E1C]/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className={`bg-[#FCFBF8] border border-[#E5E0D8] rounded-xl overflow-hidden w-full shadow-xl ${
              activeVideo.isShort ? 'max-w-md' : 'max-w-3xl'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-[#E5E0D8]">
              <div className="min-w-0">
                <p className="text-xs text-[#6E6E68] mb-0.5">
                  {activeVideo.category} · {activeVideo.format}
                </p>
                <h3 className="text-sm sm:text-base font-bold text-[#292D2A] truncate">
                  {activeVideo.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                aria-label="بستن پنجره ویدیو"
                className="w-9 h-9 rounded-lg border border-[#E5E0D8] text-[#555650] hover:text-[#292D2A] hover:bg-[#F4F1EC] flex items-center justify-center cursor-pointer shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div
              className={`bg-[#1B1E1C] mx-auto ${
                activeVideo.isShort ? 'aspect-[9/16] max-h-[68vh]' : 'aspect-video w-full'
              }`}
            >
              <iframe
                src={`${activeVideo.youtubeEmbedUrl}?rel=0`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            <div className="px-5 py-4 bg-[#F4F1EC] border-t border-[#E5E0D8] flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs text-[#555650]">
                اگر پخش‌کننده یوتیوب در مرورگر شما بارگذاری نشد، از لینک مستقیم استفاده کنید:
              </p>
              <div className="flex items-center gap-2.5 shrink-0">
                <a
                  href={activeVideo.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 bg-[#344A42] hover:bg-[#273932] text-[#FCFBF8] text-xs font-semibold rounded-lg transition-colors inline-flex items-center gap-1.5 whitespace-nowrap"
                >
                  <span>باز کردن در یوتیوب</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={activeVideo.aparatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 bg-[#FCFBF8] hover:bg-[#ECE7DF] text-[#292D2A] border border-[#E5E0D8] text-xs font-semibold rounded-lg transition-colors inline-flex items-center gap-1.5 whitespace-nowrap"
                >
                  <span>آپارات</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
