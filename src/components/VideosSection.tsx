import React from 'react';
import { VIDEOS_DATA } from '../data/videosData';
import { Play, ArrowLeft, ExternalLink } from 'lucide-react';

interface VideosSectionProps {
  onNavigateContact?: () => void;
  onNavigateVideos?: () => void;
  limit?: number;
}

export const VideosSection: React.FC<VideosSectionProps> = ({
  onNavigateVideos,
  limit = 3,
}) => {
  const displayVideos = VIDEOS_DATA.slice(0, limit);

  return (
    <section id="videos" className="py-16 sm:py-24 bg-[#FCFBF8] border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-[#3D5E4E] mb-2">
              آرشیو رسانه‌ای و کارگاه‌های آموزشی
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#292D2A] leading-snug mb-3">
              ویدیوهای آموزشی مهناز خوینی
            </h2>
            <p className="text-sm sm:text-base text-[#555650] leading-relaxed">
              توضیحات کاربردی درباره مدیریت بحران‌های رابطه، بازسازی اعتماد و مهارت‌های گفت‌وگو.
            </p>
          </div>

          {onNavigateVideos && (
            <button
              type="button"
              onClick={onNavigateVideos}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#344A42] hover:text-[#273932] border-b border-[#344A42]/30 pb-1 self-start md:self-auto cursor-pointer whitespace-nowrap"
            >
              <span>مشاهده همه ویدیوها</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayVideos.map((video) => (
            <article
              key={video.id}
              className="bg-[#F4F1EC] border border-[#E5E0D8] rounded-xl overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-video bg-[#ECE7DF] overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                  />
                  <a
                    href={video.youtubeUrl || video.aparatUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`تماشای ${video.title}`}
                    className="absolute inset-0 bg-[#292D2A]/25 hover:bg-[#292D2A]/35 transition-colors flex items-center justify-center"
                  >
                    <span className="w-12 h-12 rounded-full bg-[#FCFBF8]/95 text-[#344A42] flex items-center justify-center shadow-sm">
                      <Play className="w-5 h-5 fill-current mr-0.5" />
                    </span>
                  </a>
                </div>

                <div className="p-6">
                  <p className="text-xs font-medium text-[#6E6E68] mb-2">
                    {video.category} · {video.duration}
                  </p>
                  <h3 className="text-base font-bold text-[#292D2A] leading-snug mb-2.5">
                    {video.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555650] leading-relaxed line-clamp-3">
                    {video.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-5 pt-3 border-t border-[#E5E0D8] flex items-center justify-between text-xs font-semibold">
                <a
                  href={video.aparatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#344A42] hover:underline"
                >
                  <span>تماشا در آپارات</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={video.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#555650] hover:text-[#292D2A]"
                >
                  <span>یوتیوب</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
