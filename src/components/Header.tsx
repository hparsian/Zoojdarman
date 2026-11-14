import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ChevronLeft } from 'lucide-react';

interface HeaderProps {
  onNavigateHome: (hashSection?: string) => void;
  onNavigatePrivacy: () => void;
  onNavigateAbout?: () => void;
  onNavigateProcess?: () => void;
  onNavigateFaq?: () => void;
  onNavigateContact?: () => void;
  onNavigateTools?: () => void;
  onNavigateArticles?: () => void;
  onNavigateServices?: () => void;
  onNavigateTopics?: () => void;
  onNavigateFees?: () => void;
  onNavigateVideos?: () => void;
  onNavigateCities?: () => void;
  onNavigateCountries?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigateHome,
  onNavigateAbout,
  onNavigateProcess,
  onNavigateFaq,
  onNavigateContact,
  onNavigateTools,
  onNavigateArticles,
  onNavigateServices,
  onNavigateTopics,
  onNavigateFees,
  onNavigateVideos,
  onNavigateCities,
  onNavigateCountries,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(height > 0 ? winScroll / height : 0);
      setScrolled(winScroll > 20);
    };

    const updatePath = () => {
      setCurrentPath(window.location.pathname);
    };

    updatePath();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('popstate', updatePath);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', updatePath);
    };
  }, []);

  const handleLinkClick = (key: string) => {
    setMobileMenuOpen(false);
    if (key === 'tools' && onNavigateTools) {
      onNavigateTools();
    } else if (key === 'fees' && onNavigateFees) {
      onNavigateFees();
    } else if (key === 'videos' && onNavigateVideos) {
      onNavigateVideos();
    } else if (key === 'seo-hub' && onNavigateTopics) {
      onNavigateTopics();
    } else if (key === 'services' && onNavigateServices) {
      onNavigateServices();
    } else if (key === 'process' && onNavigateProcess) {
      onNavigateProcess();
    } else if (key === 'bio' && onNavigateAbout) {
      onNavigateAbout();
    } else if (key === 'articles' && onNavigateArticles) {
      onNavigateArticles();
    } else if (key === 'faq' && onNavigateFaq) {
      onNavigateFaq();
    } else if (key === 'contact' && onNavigateContact) {
      onNavigateContact();
    } else if (key === 'cities' && onNavigateCities) {
      onNavigateCities();
    } else if (key === 'countries' && onNavigateCountries) {
      onNavigateCountries();
    } else {
      onNavigateHome(key);
    }
    setTimeout(() => setCurrentPath(window.location.pathname), 60);
  };

  // Top Bar Contract: clean single-line navigation links (no decorative pills or extra row clutter)
  const primaryNavItems = [
    { label: 'خدمات درمانی', path: '/services', key: 'services' },
    { label: 'آزمون‌های آنلاین', path: '/tools', key: 'tools' },
    { label: 'بانک مقالات', path: '/articles', key: 'articles' },
    { label: 'شهرها و آنلاین', path: '/cities', key: 'cities' },
    { label: 'درباره مهناز خوینی', path: '/about', key: 'bio' },
    { label: 'تعرفه و تماس', path: '/fees', key: 'fees' },
  ];

  // Full mobile drawer routes for convenient access to every clinical section
  const drawerItems = [
    { label: 'خدمات تخصصی زوج‌درمانی', path: '/services', key: 'services' },
    { label: 'آزمون‌های آنلاین سلامت رابطه', path: '/tools', key: 'tools' },
    { label: 'بانک مقالات و دانشنامه', path: '/articles', key: 'articles' },
    { label: 'مراکز شهرهای ایران', path: '/cities', key: 'cities' },
    { label: 'مشاوره ایرانیان خارج از کشور', path: '/countries', key: 'countries' },
    { label: 'درباره مهناز خوینی (پروانه ۱۴۱۴۰۸۳)', path: '/about', key: 'bio' },
    { label: 'مراحل درمان EFT', path: '/process', key: 'process' },
    { label: 'ویدیوهای آموزشی آپارات و یوتیوب', path: '/videos', key: 'videos' },
    { label: 'تعرفه جلسات و شرایط بیمه', path: '/fees', key: 'fees' },
    { label: 'سوالات متداول', path: '/faq', key: 'faq' },
    { label: 'تماس و رزرو نوبت', path: '/contact', key: 'contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-colors duration-200 border-b ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-[#E8E2D8] shadow-[0_8px_24px_-12px_rgba(36,26,53,0.1)]'
            : 'bg-[#FCFAF8]/95 backdrop-blur-sm border-[#E8E2D8]'
        }`}
      >
        {/* Minimal Scroll Progress Indicator */}
        <div
          className="h-[2px] bg-[#C5A059] transition-[width] duration-150 origin-right"
          style={{ width: `${scrollProgress * 100}%` }}
        />

        <div className="container-custom h-16 lg:h-[72px] flex items-center justify-between gap-6">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('top');
            }}
            className="flex items-center gap-2.5 text-right shrink-0 group cursor-pointer"
          >
            <span className="flex items-center text-lg sm:text-xl font-black text-[#241A35] tracking-tight" dir="ltr">
              <span>Z</span>
              <svg width="16" height="16" viewBox="0 0 32 29" className="inline-block mx-0.5 fill-[#4E7A66]" aria-hidden="true">
                <path d="M16 29 C16 29 0 18.5 0 8.8 C0 3.5 4 0 8.6 0 C11.8 0 14.4 1.8 16 4.6 C17.6 1.8 20.2 0 23.4 0 C28 0 32 3.5 32 8.8 C32 18.5 16 29 16 29 Z" />
              </svg>
              <svg width="16" height="16" viewBox="0 0 32 29" className="inline-block mx-0.5 fill-[#C5A059]" aria-hidden="true">
                <path d="M16 29 C16 29 0 18.5 0 8.8 C0 3.5 4 0 8.6 0 C11.8 0 14.4 1.8 16 4.6 C17.6 1.8 20.2 0 23.4 0 C28 0 32 3.5 32 8.8 C32 18.5 16 29 16 29 Z" />
              </svg>
              <span>jdarman.ir</span>
            </span>
            <span className="hidden xl:inline-block pr-2.5 border-r border-[#E8E2D8] text-xs font-extrabold text-[#5E5868]">
              مرکز تخصصی زوج‌درمان
            </span>
          </a>

          {/* Zone 2: Clean Single-Line Text Navigation */}
          <nav aria-label="منوی اصلی" className="hidden lg:flex items-center gap-7 text-[13px] font-bold">
            {primaryNavItems.map((item) => {
              const isActive =
                currentPath === item.path ||
                (item.path === '/cities' && (currentPath.startsWith('/cities') || currentPath.startsWith('/countries')));

              return (
                <a
                  key={item.key}
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.key);
                  }}
                  className={`relative py-2 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isActive ? 'text-[#241A35] font-black' : 'text-[#5E5868] hover:text-[#241A35]'
                  }`}
                >
                  <span>{item.label}</span>
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[2px] bg-[#C5A059] transition-opacity ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Single Primary Action CTA + Mobile Drawer Trigger */}
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="https://wa.me/989199087264?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D8%B1%D8%B2%D8%B1%D9%88%20%D9%88%D9%82%D8%AA%20%D8%AC%D9%84%D8%B3%D9%87%20%D8%B2%D9%88%D8%AC%20%D8%AF%D8%B1%D9%85%D8%A7%D9%86%20%D9%BE%DB%8C%D8%A7%D9%85%20%D9%85%DB%8C%E2%80%8C%D8%AF%D9%87%D9%85."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#241A35] hover:bg-[#3E2F5B] text-white text-xs font-black px-4 sm:px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap shrink-0 border border-[#C5A059]/35"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>رزرو نوبت مشاوره</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#241A35] hover:bg-[#F4EFE7] transition-colors cursor-pointer border border-[#E8E2D8]"
              aria-label="باز کردن منوی سایت"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Over Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-[#241A35]/55 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-[86%] max-w-[340px] bg-white p-6 shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-[#E8E2D8]">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E8E2D8] mb-5">
                <div className="flex flex-col text-right">
                  <span className="text-sm font-black text-[#241A35]">مرکز تخصصی زوج درمان</span>
                  <span className="text-[11px] text-[#9E7D36] font-bold">مهناز خوینی · پروانه نظام ۱۴۱۴۰۸۳</span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg bg-[#F8F5EE] text-[#241A35] hover:bg-[#E8E2D8] cursor-pointer"
                  aria-label="بستن منو"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex flex-col divide-y divide-[#F0EBE2]">
                {drawerItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.path}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.key);
                    }}
                    className="flex items-center justify-between py-3 px-1 text-right text-xs font-bold text-[#231F2D] hover:text-[#3E2F5B] transition-colors cursor-pointer"
                  >
                    <span>{item.label}</span>
                    <ChevronLeft className="w-4 h-4 text-[#8A8494]" />
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-5 border-t border-[#E8E2D8] flex flex-col gap-2.5 mt-6">
              <a
                href="https://wa.me/989199087264?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D9%86%D9%88%D8%A8%D8%AA%20%D8%B2%D9%88%D8%AC%20%D8%AF%D8%B1%D9%85%D8%A7%D9%86%20%D9%BE%DB%8C%D8%A7%D9%85%20%D9%85%DB%8C%E2%80%8C%D8%AF%D9%87%D9%85."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#241A35] text-white text-center rounded-lg font-black text-xs flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#C5A059]" />
                <span>پیام در واتساپ (۰۹۱۹۹۰۸۷۲۶۴)</span>
              </a>
              <a
                href="tel:02144600980"
                className="w-full py-3 bg-[#F8F5EE] text-[#241A35] border border-[#E8E2D8] text-center rounded-lg font-bold text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#9E7D36]" />
                <span>تماس کلینیک (۰۲۱۴۴۶۰۰۹۸۰)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
