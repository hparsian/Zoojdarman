import React from 'react';
import { OFFICIAL_VIDEO_PLAYLISTS } from '../data/videosData';
import { Play, Tv, CheckCircle2, ExternalLink, ChevronLeft } from 'lucide-react';

const YoutubeIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

interface VideosSectionProps {
  onNavigateContact?: () => void;
  onNavigateVideos?: () => void;
  titleOverride?: string;
  subtitleOverride?: string;
  limit?: number;
}

export const VideosSection: React.FC<VideosSectionProps> = ({
  onNavigateVideos,
  titleOverride,
  subtitleOverride,
  limit,
}) => {
  const displayPlaylists = limit ? OFFICIAL_VIDEO_PLAYLISTS.slice(0, limit) : OFFICIAL_VIDEO_PLAYLISTS;

  return (
    <section
      id="videos-section"
      className="py-16 lg:py-24 bg-[#FCFAF8] border-b border-[#E8E2D8]"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-5">
          <div className="max-w-2xl">
            <span className="text-[11px] font-extrabold text-[#9E7D36] block mb-2">
              رسانه آموزشی و ویدیوهای بالینی مهناز خوینی
            </span>
            <h2 className="balance-text text-2xl sm:text-4xl font-black text-[#241A35] leading-tight">
              {titleOverride || 'ویدیوهای آموزشی زوج‌درمانی در آپارات و یوتیوب'}
            </h2>
            <p className="text-sm sm:text-base text-[#5E5868] mt-3 leading-relaxed">
              {subtitleOverride ||
                'تحلیل‌های تخصصی درباره مدیریت خشم، ترمیم خیانت و بازسازی پیوند عاطفی را در کانال‌های رسمی مشاهده نمایید.'}
            </p>
          </div>

          {limit && onNavigateVideos && (
            <a
              href="/videos"
              onClick={(e) => {
                e.preventDefault();
                onNavigateVideos();
              }}
              className="inline-flex items-center gap-2 text-xs font-black text-[#241A35] hover:text-[#3E2F5B] py-2.5 px-5 rounded-lg border border-[#E8E2D8] hover:border-[#C5A059] bg-white transition-colors cursor-pointer shrink-0 self-start md:self-end"
            >
              <Tv className="w-3.5 h-3.5 text-[#9E7D36]" />
              <span>آرشیو کامل ویدیوها</span>
              <ChevronLeft className="w-3.5 h-3.5 text-[#9E7D36]" />
            </a>
          )}
        </div>

        {/* Official Channel Split Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Aparat Official Channel */}
          <div className="bg-[#241A35] text-white rounded-2xl p-6 sm:p-8 border border-[#C5A059]/35 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-xs">
                <span className="font-extrabold text-[#C5A059]">پخش مستقیم داخلی (بدون نیاز به فیلترشکن)</span>
                <span className="text-white/70 font-mono" dir="ltr">Aparat</span>
              </div>

              <h3 className="text-lg sm:text-2xl font-black text-[#FAF5EB] mb-2">
                کانال رسمی آپارات مهناز خوینی
              </h3>

              <p className="text-xs sm:text-sm text-[#E8E2D8] leading-relaxed mb-6">
                مجموعه ویدیوهای کوتاه آموزشی، کارگاه‌های مدیریت تعارض و پاسخ به پرسش‌های پرتکرار زوجین با سرعت دسترسی داخلی.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <span className="text-xs text-[#C5A059] font-mono truncate" dir="ltr">
                aparat.com/Mahnaz.khoini_psychology
              </span>
              <a
                href="https://www.aparat.com/Mahnaz.khoini_psychology"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-[#C5A059] hover:bg-[#b58e44] text-[#241A35] text-xs font-black transition-colors flex items-center justify-center gap-2 shrink-0"
              >
                <span>مشاهده در آپارات</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* YouTube Official Channel */}
          <div className="bg-[#241A35] text-white rounded-2xl p-6 sm:p-8 border border-[#C5A059]/35 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-xs">
                <span className="font-extrabold text-[#C5A059]">آرشیو جامع کارگاه‌های تحلیل بالینی</span>
                <YoutubeIcon className="w-4 h-4 text-[#E8E2D8]" />
              </div>

              <h3 className="text-lg sm:text-2xl font-black text-[#FAF5EB] mb-2">
                کانال رسمی یوتیوب مهناز خوینی
              </h3>

              <p className="text-xs sm:text-sm text-[#E8E2D8] leading-relaxed mb-6">
                تحلیل‌های عمیق زوج‌درمانی هیجان‌مدار (EFT)، مهارت‌های گفت‌وگوی ایمن و مدیریت بحران ویژه مخاطبان داخل و خارج از کشور.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <span className="text-xs text-[#C5A059] font-mono truncate" dir="ltr">
                youtube.com/@mahnaz.khoini
              </span>
              <a
                href="https://youtube.com/@mahnaz.khoini"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-black transition-colors flex items-center justify-center gap-2 shrink-0"
              >
                <YoutubeIcon className="w-4 h-4 text-[#C5A059]" />
                <span>مشاهده در یوتیوب</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Playlists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayPlaylists.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-[#E8E2D8] hover:border-[#C5A059] transition-colors flex flex-col justify-between p-6"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-bold pb-3 mb-4 border-b border-[#F0EBE2]">
                  <span className="text-[#9E7D36] font-extrabold">{item.category}</span>
                  <span className="text-[#4E7A66]">مجموعه آموزشی</span>
                </div>

                <h3 className="text-base font-black text-[#241A35] leading-snug mb-2.5">
                  {item.title}
                </h3>

                <p className="text-xs text-[#5E5868] leading-relaxed mb-4">
                  {item.description}
                </p>

                <ul className="space-y-1.5 text-[11px] text-[#4E4858] mb-6 pt-3 border-t border-[#F0EBE2]">
                  {item.keyTopics.map((topic, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4E7A66] shrink-0" />
                      <span className="line-clamp-1">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#F0EBE2] flex items-center justify-between gap-2.5">
                <a
                  href={item.aparatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#241A35] hover:bg-[#3E2F5B] text-[#FAF5EB] py-2.5 px-3 rounded-xl text-xs font-black transition-colors flex items-center justify-center gap-1.5"
                >
                  <Play className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
                  <span>پخش در آپارات</span>
                </a>

                <a
                  href={item.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2.5 bg-[#FCFAF8] hover:bg-[#F4EFE7] text-[#241A35] rounded-xl border border-[#E8E2D8] transition-colors text-xs font-bold shrink-0 flex items-center gap-1.5"
                >
                  <YoutubeIcon className="w-3.5 h-3.5 text-[#9C381D]" />
                  <span>یوتیوب</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
