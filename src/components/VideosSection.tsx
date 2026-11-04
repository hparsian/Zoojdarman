import React, { useState } from 'react';
import { VIDEOS_DATA, VideoItem } from '../data/videosData';
import { Play, Tv, Search, Clock, Eye, Sparkles, CheckCircle2, Share2, ExternalLink, MessageSquare, ChevronLeft, Filter } from 'lucide-react';

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
  const [selectedPlatform, setSelectedPlatform] = useState<'all' | 'aparat' | 'youtube'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [activePlayerPlatform, setActivePlayerPlatform] = useState<'aparat' | 'youtube'>('aparat');
  const [copied, setCopied] = useState<boolean>(false);

  const categories = [
    { key: 'all', label: 'همه موضوعات' },
    { key: 'مشاوره خیانت', label: 'مشاوره خیانت' },
    { key: 'طلاق عاطفی', label: 'طلاق عاطفی' },
    { key: 'ارتباط و گفتگو', label: 'ارتباط و گفتگو' },
    { key: 'رویکرد EFT', label: 'رویکرد EFT' },
    { key: 'سوالات متداول', label: 'سوالات متداول' }
  ];

  const filteredVideos = VIDEOS_DATA.filter((video) => {
    const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory;
    const matchesPlatform =
      selectedPlatform === 'all' ||
      (selectedPlatform === 'aparat' && video.aparatId) ||
      (selectedPlatform === 'youtube' && video.youtubeId);
    const matchesSearch =
      searchQuery.trim() === '' ||
      video.title.includes(searchQuery) ||
      video.description.includes(searchQuery) ||
      video.tags.some((tag) => tag.includes(searchQuery));

    return matchesCategory && matchesPlatform && matchesSearch;
  });

  const displayVideos = limit ? filteredVideos.slice(0, limit) : filteredVideos;

  const handleOpenVideo = (video: VideoItem, initialPlatform: 'aparat' | 'youtube' = 'aparat') => {
    setActiveVideo(video);
    setActivePlayerPlatform(initialPlatform);
    setCopied(false);
  };

  const handleCopyLink = () => {
    if (!activeVideo) return;
    const url = `${window.location.origin}/videos?v=${activeVideo.slug}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="videos-section" className="py-20 bg-gradient-to-b from-[#FCFAF8] via-[#F8F5EE] to-[#FCFAF8] relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3E2F5B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF5EB] border border-[#C5A059]/30 text-[#241A35] text-xs font-black mb-4 shadow-sm">
            <Tv className="w-4 h-4 text-[#C5A059]" />
            <span>رسانه و ویدیوهای آموزشی مهناز خوینی</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#241A35] tracking-tight mb-4">
            {titleOverride || 'کارگاه‌ها و ویدیوهای تخصصی زوج درمانی در آپارات و یوتیوب'}
          </h2>

          <p className="text-sm sm:text-base text-[#5E5868] leading-relaxed font-medium">
            {subtitleOverride ||
              'مشاهده آنلاین تحلیل‌های بالینی درباره ترمیم خیانت، درمان طلاق عاطفی، تکنیک‌های گفتگوی زناشویی و روانشناسی هیجان‌مدار با تدریس مهناز خوینی.'}
          </p>

          {/* Quick Platform Badges & Direct Links */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <a
              href="https://www.aparat.com/Mahnaz.khoini_psychology"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200 text-xs font-bold transition-all shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-rose-600 animate-ping" />
              <span>کانال رسمی آپارات مهناز خوینی</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>

            <a
              href="https://youtube.com/@mahnaz.khoini"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-50 text-red-700 hover:bg-red-100 border border-red-200 text-xs font-bold transition-all shadow-xs"
            >
              <YoutubeIcon className="w-4 h-4 text-red-600" />
              <span>کانال رسمی یوتیوب مهناز خوینی</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-[#E8E2D8] shadow-sm mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="جستجو در موضوعات و عناوین ویدیوها..."
                className="w-full bg-[#F8F5EE] border border-[#E8E2D8] focus:border-[#3E2F5B] text-xs font-medium rounded-xl py-2.5 pr-10 pl-4 outline-none text-[#231F2D] transition-all"
              />
              <Search className="w-4 h-4 text-[#8A8494] absolute right-3 top-3" />
            </div>

            {/* Platform Selector */}
            <div className="flex items-center gap-1.5 bg-[#F8F5EE] p-1.5 rounded-xl border border-[#E8E2D8] w-full md:w-auto justify-center">
              <button
                onClick={() => setSelectedPlatform('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedPlatform === 'all'
                    ? 'bg-[#3E2F5B] text-white shadow-xs'
                    : 'text-[#5E5868] hover:text-[#241A35]'
                }`}
              >
                همه پلتفرم‌ها
              </button>
              <button
                onClick={() => setSelectedPlatform('aparat')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  selectedPlatform === 'aparat'
                    ? 'bg-rose-700 text-white shadow-xs'
                    : 'text-rose-700 hover:bg-rose-50'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span>آپارات (بدون VPN)</span>
              </button>
              <button
                onClick={() => setSelectedPlatform('youtube')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  selectedPlatform === 'youtube'
                    ? 'bg-red-600 text-white shadow-xs'
                    : 'text-red-600 hover:bg-red-50'
                }`}
              >
                <YoutubeIcon className="w-3.5 h-3.5" />
                <span>یوتیوب</span>
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2 border-t border-[#F0EBE2]">
            <Filter className="w-4 h-4 text-[#C5A059] shrink-0 ml-1" />
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all shrink-0 ${
                  selectedCategory === cat.key
                    ? 'bg-[#241A35] text-[#C5A059] shadow-xs'
                    : 'bg-[#FCFAF8] text-[#5E5868] hover:bg-[#FAF5EB] border border-[#E8E2D8]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Video Cards Grid */}
        {displayVideos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {displayVideos.map((video) => (
              <div
                key={video.id}
                className="group bg-white rounded-2xl border border-[#E8E2D8] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Thumbnail Container */}
                <div className="relative aspect-video bg-[#241A35] overflow-hidden cursor-pointer" onClick={() => handleOpenVideo(video, 'aparat')}>
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#241A35]/90 via-[#241A35]/30 to-transparent" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#C5A059] text-[#241A35] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border-2 border-white">
                      <Play className="w-6 h-6 fill-[#241A35] mr-0.5" />
                    </div>
                  </div>

                  {/* Badges: Duration & Views */}
                  <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between text-[11px] text-white font-bold">
                    <span className="flex items-center gap-1 bg-[#241A35]/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                      <Clock className="w-3 h-3 text-[#C5A059]" />
                      <span>{video.duration}</span>
                    </span>

                    <span className="flex items-center gap-1 bg-[#241A35]/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                      <Eye className="w-3 h-3 text-[#8FAF9B]" />
                      <span>{video.viewsCount}</span>
                    </span>
                  </div>

                  {/* Platform Badges Top Right */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5">
                    <span className="bg-rose-700/90 text-white text-[10px] font-black px-2 py-0.5 rounded-md shadow-xs backdrop-blur-xs flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      <span>آپارات</span>
                    </span>
                    <span className="bg-red-600/90 text-white text-[10px] font-black px-2 py-0.5 rounded-md shadow-xs backdrop-blur-xs flex items-center gap-1">
                      <YoutubeIcon className="w-3 h-3" />
                      <span>یوتیوب</span>
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#C5A059] font-black mb-2">
                      <span>{video.category}</span>
                      <span className="text-[11px] text-[#8A8494] font-medium">{video.publishDate}</span>
                    </div>

                    <h3
                      onClick={() => handleOpenVideo(video, 'aparat')}
                      className="text-base font-black text-[#241A35] hover:text-[#3E2F5B] line-clamp-2 leading-snug cursor-pointer transition-colors"
                    >
                      {video.title}
                    </h3>

                    <p className="text-xs text-[#5E5868] line-clamp-2 mt-2 leading-relaxed">
                      {video.description}
                    </p>
                  </div>

                  {/* Key Takeaways Mini List */}
                  <div className="bg-[#FAF5EB] p-3 rounded-xl border border-[#C5A059]/20 text-[11px] text-[#241A35] space-y-1">
                    <div className="font-black text-[#9E7D36] flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>نکات کلیدی این ویدیو:</span>
                    </div>
                    <p className="line-clamp-1 font-medium text-[#5E5868]">
                      • {video.keyTakeaways[0]}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 border-t border-[#F0EBE2] flex items-center justify-between gap-2">
                    <button
                      onClick={() => handleOpenVideo(video, 'aparat')}
                      className="flex-1 bg-[#3E2F5B] hover:bg-[#241A35] text-white py-2 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 text-[#C5A059] fill-[#C5A059]" />
                      <span>پخش آنلاین در آپارات</span>
                    </button>

                    <button
                      onClick={() => handleOpenVideo(video, 'youtube')}
                      className="p-2 bg-red-50 hover:bg-red-100 text-red-700 rounded-xl border border-red-200 transition-all text-xs font-bold shrink-0 cursor-pointer"
                      title="پخش در یوتیوب"
                    >
                      <YoutubeIcon className="w-4 h-4 text-red-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-12 text-center rounded-2xl border border-[#E8E2D8]">
            <p className="text-sm font-bold text-[#5E5868]">ویدیویی متناسب با فیلتر جستجوی شما یافت نشد.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedPlatform('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-[#3E2F5B] text-white text-xs font-black rounded-xl"
            >
              نمایش همه ویدیوها
            </button>
          </div>
        )}

        {/* View All Videos Button (if limited) */}
        {limit && VIDEOS_DATA.length > limit && onNavigateVideos && (
          <div className="mt-12 text-center">
            <button
              onClick={onNavigateVideos}
              className="inline-flex items-center gap-2 bg-[#241A35] hover:bg-[#3E2F5B] text-[#C5A059] border border-[#C5A059]/40 text-xs font-black px-8 py-3.5 rounded-full shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <Tv className="w-4 h-4 text-[#C5A059]" />
              <span>مشاهده آرشیو کامل ویدیوهای آموزشی مهناز خوینی ({VIDEOS_DATA.length} ویدیو)</span>
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Video Player Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#241A35]/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-white rounded-3xl border border-[#C5A059]/40 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl overflow-hidden flex flex-col dir-rtl">
            {/* Modal Header */}
            <div className="p-4 sm:p-6 bg-[#241A35] text-white flex items-center justify-between border-b border-[#C5A059]/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#3E2F5B] flex items-center justify-center border border-[#C5A059]/40">
                  <Tv className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div>
                  <span className="text-[11px] text-[#C5A059] font-bold block">{activeVideo.category}</span>
                  <h3 className="text-sm sm:text-base font-black text-white line-clamp-1">{activeVideo.title}</h3>
                </div>
              </div>

              <button
                onClick={() => setActiveVideo(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="بستن"
              >
                ✕
              </button>
            </div>

            {/* Platform Switcher Bar in Modal */}
            <div className="bg-[#1A1227] px-4 py-2.5 flex items-center justify-between text-xs border-b border-white/10">
              <span className="text-white/70 font-medium hidden sm:inline">انتخاب پلتفرم پخش ویدیو:</span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActivePlayerPlatform('aparat')}
                  className={`px-3 py-1.5 rounded-lg font-black text-xs transition-all flex items-center gap-1.5 cursor-pointer ${
                    activePlayerPlatform === 'aparat'
                      ? 'bg-rose-700 text-white shadow-md'
                      : 'bg-white/10 text-white/80 hover:bg-white/20'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-rose-400" />
                  <span>پخش در آپارات (بدون نیاز به VPN)</span>
                </button>

                <button
                  onClick={() => setActivePlayerPlatform('youtube')}
                  className={`px-3 py-1.5 rounded-lg font-black text-xs transition-all flex items-center gap-1.5 cursor-pointer ${
                    activePlayerPlatform === 'youtube'
                      ? 'bg-red-600 text-white shadow-md'
                      : 'bg-white/10 text-white/80 hover:bg-white/20'
                  }`}
                >
                  <YoutubeIcon className="w-3.5 h-3.5" />
                  <span>پخش در یوتیوب</span>
                </button>
              </div>
            </div>

            {/* Video Player Display Container */}
            <div className="relative aspect-video bg-[#181124] w-full overflow-hidden flex flex-col items-center justify-center p-6 text-center group">
              <img
                src={activeVideo.thumbnail}
                alt={activeVideo.title}
                className="absolute inset-0 w-full h-full object-cover object-top opacity-30 filter blur-xs scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181124] via-[#181124]/80 to-transparent" />

              <div className="relative z-10 max-w-lg mx-auto space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#C5A059] text-[#241A35] flex items-center justify-center mx-auto shadow-2xl border-2 border-white">
                  <Play className="w-8 h-8 fill-[#241A35] mr-0.5" />
                </div>

                <h4 className="text-base sm:text-xl font-black text-white leading-snug">
                  {activeVideo.title}
                </h4>

                <p className="text-xs text-white/80 line-clamp-2 leading-relaxed max-w-md mx-auto">
                  برنامه‌ها و جلسات آموزشی مهناز خوینی به صورت اختصاصی در کانال‌های رسمی آپارات و یوتیوب قابل مشاهده است.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <a
                    href="https://www.aparat.com/Mahnaz.khoini_psychology"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs transition-all shadow-xl flex items-center gap-2 cursor-pointer border border-rose-400/40"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                    <span>تماشای ویدیو در کانال رسمی آپارات</span>
                    <ExternalLink className="w-4 h-4 opacity-80" />
                  </a>

                  <a
                    href="https://youtube.com/@mahnaz.khoini"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-black text-xs transition-all shadow-xl flex items-center gap-2 cursor-pointer border border-red-400/40"
                  >
                    <YoutubeIcon className="w-4 h-4 text-white" />
                    <span>مشاهده در کانال یوتیوب</span>
                    <ExternalLink className="w-4 h-4 opacity-80" />
                  </a>
                </div>
              </div>
            </div>

            {/* Modal Body Info */}
            <div className="p-6 space-y-6">
              {/* Direct Link Options */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-[#FAF5EB] rounded-2xl border border-[#C5A059]/30 text-xs">
                <div className="flex items-center gap-2 font-bold text-[#241A35]">
                  <Sparkles className="w-4 h-4 text-[#C5A059]" />
                  <span>اگر ویدیو به صورت خودکار بارگذاری نشد:</span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={activeVideo.aparatUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-rose-700 text-white rounded-xl font-bold flex items-center gap-1 hover:bg-rose-800 transition-colors"
                  >
                    <span>باز کردن در آپارات</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <a
                    href={activeVideo.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-red-600 text-white rounded-xl font-bold flex items-center gap-1 hover:bg-red-700 transition-colors"
                  >
                    <span>باز کردن در یوتیوب</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <button
                    onClick={handleCopyLink}
                    className="px-3 py-1.5 bg-white border border-[#E8E2D8] text-[#241A35] rounded-xl font-bold flex items-center gap-1 hover:bg-[#F8F5EE] transition-colors cursor-pointer"
                  >
                    <Share2 className="w-3 h-3 text-[#C5A059]" />
                    <span>{copied ? 'لینک کپی شد!' : 'کپی اشتراک‌گذاری'}</span>
                  </button>
                </div>
              </div>

              {/* Video Summary & Key Takeaways */}
              <div>
                <h4 className="text-base font-black text-[#241A35] mb-2">{activeVideo.title}</h4>
                <p className="text-xs sm:text-sm text-[#5E5868] leading-relaxed mb-4">{activeVideo.description}</p>

                <div className="bg-[#F8F5EE] p-4 rounded-2xl border border-[#E8E2D8] space-y-2">
                  <span className="text-xs font-black text-[#241A35] block mb-2">📌 مباحث اصلی مطروحه در این جلسه:</span>
                  <ul className="space-y-1.5 text-xs text-[#231F2D]">
                    {activeVideo.keyTakeaways.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8FAF9B] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Consultation Call to Action */}
              <div className="bg-gradient-to-r from-[#241A35] to-[#3E2F5B] p-6 rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#C5A059]/40">
                <div>
                  <h5 className="text-sm sm:text-base font-black text-[#C5A059] mb-1">
                    نیاز به راهنمایی تخصصی درباره موضوع این ویدیو دارید؟
                  </h5>
                  <p className="text-xs text-white/80">
                    برای بررسی اختصاصی چالش رابطه زناشویی خود می‌توانید وقت مشاوره حضوری یا آنلاین رزرو کنید.
                  </p>
                </div>

                <a
                  href="https://wa.me/989199087264?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D9%85%D8%B4%D8%A7%D overlap%D9%88%D8%B1%D9%87%20%D8%AF%D8%B1%D8%A8%D8%A7%D8%B1%D9%87%20%D9%88%DB%8C%D8%AF%DB%8C%D9%88%20%D9%BE%DB%8C%D8%A7%D9%85%20%D9%85%DB%8C%E2%80%8C%D8%AF%D9%87%D9%85."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    if (onNavigateContact) onNavigateContact();
                  }}
                  className="px-5 py-2.5 bg-[#C5A059] hover:bg-[#9E7D36] text-[#241A35] rounded-xl font-black text-xs flex items-center gap-2 whitespace-nowrap shadow-md cursor-pointer transition-all shrink-0"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>رزرو مشاوره با مهناز خوینی</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
