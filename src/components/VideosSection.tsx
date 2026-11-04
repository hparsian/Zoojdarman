import React, { useState } from 'react';
import { OFFICIAL_VIDEO_PLAYLISTS, VideoCategoryItem } from '../data/videosData';
import { Play, Tv, Sparkles, CheckCircle2, ExternalLink, ChevronLeft, ShieldCheck } from 'lucide-react';

const YoutubeIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
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
  onNavigateContact,
  onNavigateVideos,
  titleOverride,
  subtitleOverride,
  limit
}) => {
  const displayPlaylists = limit ? OFFICIAL_VIDEO_PLAYLISTS.slice(0, limit) : OFFICIAL_VIDEO_PLAYLISTS;

  return (
    <section id="videos-section" className="py-20 bg-gradient-to-b from-[#FAF8F5] via-[#F4EFEA] to-[#FAF8F5] relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3E2F5B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#241A35] text-[#C5A059] text-xs font-black mb-4 shadow-sm border border-[#C5A059]/30">
            <Tv className="w-4 h-4 text-[#C5A059]" />
            <span>رسانه تصویری و کانال‌های رسمی مهناز خوینی</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#241A35] tracking-tight mb-4">
            {titleOverride || 'کانال‌های رسمی ویدیوهای آموزشی مهناز خوینی در آپارات و یوتیوب'}
          </h2>

          <p className="text-sm sm:text-base text-[#5E5868] leading-relaxed font-medium">
            {subtitleOverride ||
              'برای مشاهده تمامی ویدیوها، تحلیل‌های بالینی زوج‌درمانی، راهکارهای ترمیم خیانت و طلاق عاطفی، مستقیم به کانال‌های رسمی ایشان در آپارات و یوتیوب مراجعه فرمایید.'}
          </p>
        </div>

        {/* Highlighted Official Channel Cards Showcase (Brand Dark Purple & Gold Scheme) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Aparat Official Channel Box */}
          <div className="bg-gradient-to-br from-[#241A35] via-[#2A1E35] to-[#1E1527] text-white rounded-3xl p-6 sm:p-8 border border-[#C5A059]/40 shadow-xl relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-[#C5A059]/10 rounded-full blur-2xl group-hover:scale-125 transition-transform" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3.5 py-1 rounded-full bg-[#3E2F5B] text-[#C5A059] border border-[#C5A059]/30 text-xs font-black flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-ping" />
                  <span>پخش آنلاین آپارات (بدون VPN)</span>
                </span>
                <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                کانال رسمی آپارات مهناز خوینی
              </h3>

              <p className="text-xs sm:text-sm text-[#E8DFD5] leading-relaxed mb-6 font-medium">
                مجموعه ویدیوهای آموزشی، کارگاه‌ها و پاسخ به پرسش‌های مراجعین با پهنای باند داخلی و کیفیت بالا.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <span className="text-xs text-[#C5A059] font-mono" dir="ltr">aparat.com/Mahnaz.khoini_psychology</span>
              <a
                href="https://www.aparat.com/Mahnaz.khoini_psychology"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-2xl bg-[#C5A059] hover:bg-[#9E7D36] text-[#241A35] text-xs font-black transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer shrink-0"
              >
                <span>ورود به کانال آپارات</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* YouTube Official Channel Box */}
          <div className="bg-gradient-to-br from-[#1E1527] via-[#2A1E35] to-[#241A35] text-white rounded-3xl p-6 sm:p-8 border border-[#C5A059]/40 shadow-xl relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-[#C5A059]/10 rounded-full blur-2xl group-hover:scale-125 transition-transform" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3.5 py-1 rounded-full bg-[#3E2F5B] text-[#C5A059] border border-[#C5A059]/30 text-xs font-black flex items-center gap-1.5">
                  <YoutubeIcon className="w-3.5 h-3.5 text-rose-400" />
                  <span>آرشیو کامل Full HD</span>
                </span>
                <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                کانال رسمی یوتیوب مهناز خوینی
              </h3>

              <p className="text-xs sm:text-sm text-[#E8DFD5] leading-relaxed mb-6 font-medium">
                مجموعه تحلیل‌های بالینی زوج‌درمانی هیجان‌مدار (EFT)، تکنیک‌های حل تعارض و راهنمای روابط زناشویی.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <span className="text-xs text-[#C5A059] font-mono" dir="ltr">youtube.com/@mahnaz.khoini</span>
              <a
                href="https://youtube.com/@mahnaz.khoini"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-2xl bg-[#3E2F5B] hover:bg-[#2A1E35] text-[#C5A059] border border-[#C5A059]/50 text-xs font-black transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer shrink-0"
              >
                <YoutubeIcon className="w-4 h-4 text-rose-400" />
                <span>ورود به کانال یوتیوب</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Section Subtitle for Playlists */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-black text-[#241A35]">
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            <span>دسته‌بندی موضوعی ویدیوهای آموزشی منتشرشده در آپارات و یوتیوب:</span>
          </div>
        </div>

        {/* Playlists Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayPlaylists.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-[#E8DFD5] hover:border-[#C5A059]/60 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between p-6 sm:p-7 group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#C5A059] font-black mb-3">
                  <span className="bg-[#FAF5EB] text-[#241A35] px-3.5 py-1 rounded-full border border-[#C5A059]/30">
                    {item.category}
                  </span>
                  <span className="text-[#8FAF9B] font-bold text-[11px]">مجموعه رسمی</span>
                </div>

                <h3 className="text-base font-black text-[#241A35] group-hover:text-[#3E2F5B] leading-snug mb-3 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-[#5E5868] leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Key topics list */}
                <div className="bg-[#F8F5EE] p-3.5 rounded-2xl border border-[#E8DFD5] mb-6 space-y-1.5 text-[11px]">
                  <span className="font-black text-[#241A35] block mb-1">سرفصل‌های این مجموعه:</span>
                  {item.keyTopics.map((topic, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[#5E5868]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8FAF9B] shrink-0" />
                      <span className="line-clamp-1">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons styled with Brand Palette */}
              <div className="pt-4 border-t border-[#F0EBE2] flex items-center justify-between gap-2">
                <a
                  href={item.aparatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#241A35] hover:bg-[#3E2F5B] text-[#C5A059] py-2.5 rounded-2xl text-xs font-black transition-all flex items-center justify-center gap-1.5 shadow-xs cursor-pointer border border-[#C5A059]/30"
                >
                  <Play className="w-3.5 h-3.5 fill-[#C5A059]" />
                  <span>مشاهده در آپارات</span>
                </a>

                <a
                  href={item.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2.5 bg-[#FAF5EB] hover:bg-[#F4EFEA] text-[#241A35] rounded-2xl border border-[#E8DFD5] hover:border-[#C5A059]/40 transition-all text-xs font-bold shrink-0 cursor-pointer flex items-center gap-1"
                  title="مشاهده در یوتیوب"
                >
                  <YoutubeIcon className="w-4 h-4 text-rose-600" />
                  <span className="hidden sm:inline">یوتیوب</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Videos CTA */}
        {limit && OFFICIAL_VIDEO_PLAYLISTS.length > limit && onNavigateVideos && (
          <div className="mt-12 text-center">
            <button
              onClick={onNavigateVideos}
              className="inline-flex items-center gap-2 bg-[#241A35] hover:bg-[#3E2F5B] text-[#C5A059] border border-[#C5A059]/40 text-xs font-black px-8 py-3.5 rounded-full shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <Tv className="w-4 h-4 text-[#C5A059]" />
              <span>مشاهده تمام مجموعه‌های ویدئویی آپارات و یوتیوب</span>
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
