import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ShieldCheck, Sparkles, ArrowLeft, ChevronLeft } from 'lucide-react';

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
}

export const Header: React.FC<HeaderProps> = ({
  onNavigateHome,
  onNavigatePrivacy,
  onNavigateAbout,
  onNavigateProcess,
  onNavigateFaq,
  onNavigateContact,
  onNavigateTools,
  onNavigateArticles,
  onNavigateServices,
  onNavigateTopics,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledPercent = height > 0 ? winScroll / height : 0;
      setScrollProgress(scrolledPercent);
      setScrolled(winScroll > 25);
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
    } else {
      onNavigateHome(key);
    }
    setTimeout(() => setCurrentPath(window.location.pathname), 60);
  };

  const navItems = [
    { label: 'آزمون‌های رابطه', path: '/tools', key: 'tools', isHighlight: true },
    { label: 'خدمات تخصصی', path: '/services', key: 'services' },
    { label: 'مراحل درمان EFT', path: '/process', key: 'process' },
    { label: 'بانک مقالات', path: '/articles', key: 'articles' },
    { label: 'درباره درمانگر', path: '/about', key: 'bio' },
    { label: 'سوالات متداول', path: '/faq', key: 'faq' },
    { label: 'تماس و نوبت‌دهی', path: '/contact', key: 'contact' },
  ];

  return (
    <>
      {/* Top Institutional Privilege Bar */}
      <div className="bg-[#241A35] text-[#E8E2D8] text-[11px] py-2 border-b border-[#C5A059]/20 hidden sm:block">
        <div className="container-custom flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-medium text-[#C5A059]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>پروانه رسمی نظام روان‌شناسی: ۱۴۱۴۰۸۳</span>
            </span>
            <span className="text-white/40 hidden md:inline">|</span>
            <span className="text-white/80 hidden md:inline">
              پذیرش حضوری در کلینیک پیوند امن تهران و مشاوره آنلاین بین‌المللی
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-bold" dir="ltr">
            <a
              href="tel:02144600980"
              className="text-white/80 hover:text-[#C5A059] transition-colors flex items-center gap-1"
            >
              <span>021 4460 0980</span>
              <Phone className="w-3 h-3 text-[#C5A059]" />
            </a>
            <span className="text-white/30">•</span>
            <a
              href="https://wa.me/989199087264"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C5A059] hover:text-white transition-colors flex items-center gap-1"
            >
              <span>0919 908 7264</span>
              <MessageSquare className="w-3 h-3 text-[#C5A059]" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Luxury Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(36,26,53,0.08)] border-[#E8E2D8]'
            : 'bg-[#FCFAF8]/95 backdrop-blur-sm border-[#E8E2D8]'
        }`}
      >
        {/* Dynamic Reading/Scroll Progress */}
        <div
          className="h-[2.5px] bg-gradient-to-r from-[#C5A059] via-[#8FAF9B] to-[#3E2F5B] transition-all origin-right"
          style={{ width: `${scrollProgress * 100}%` }}
        />

        <div className="container-custom h-[76px] flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single text wordmark per top-bar contract) */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('top');
            }}
            className="flex items-center gap-3 text-right group cursor-pointer shrink-0"
            dir="ltr"
          >
            <div className="flex items-center text-xl sm:text-2xl font-black text-[#241A35] tracking-tight">
              <span>Z</span>
              <svg width="20" height="20" viewBox="0 0 32 29" className="inline-block mx-0.5 fill-[#8FAF9B]">
                <path d="M16 29 C16 29 0 18.5 0 8.8 C0 3.5 4 0 8.6 0 C11.8 0 14.4 1.8 16 4.6 C17.6 1.8 20.2 0 23.4 0 C28 0 32 3.5 32 8.8 C32 18.5 16 29 16 29 Z" />
              </svg>
              <svg width="20" height="20" viewBox="0 0 32 29" className="inline-block mx-0.5 fill-[#C5A059]">
                <path d="M16 29 C16 29 0 18.5 0 8.8 C0 3.5 4 0 8.6 0 C11.8 0 14.4 1.8 16 4.6 C17.6 1.8 20.2 0 23.4 0 C28 0 32 3.5 32 8.8 C32 18.5 16 29 16 29 Z" />
              </svg>
              <span>jdarman.ir</span>
            </div>
            <div className="hidden lg:flex flex-col text-right pr-3 border-r border-[#E8E2D8]" dir="rtl">
              <span className="text-xs font-black text-[#241A35] tracking-tight">مرکز تخصصی زوج درمان</span>
              <span className="text-[10px] text-[#5E5868] font-bold">مهناز خوینی | روانشناس بالینی</span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (single-line, whitespace-nowrap, hover underlines) */}
          <nav className="hidden xl:flex items-center gap-7 text-[13px] font-bold">
            {navItems.map((item) => {
              const isActive = currentPath === item.path || (item.path === '/' && currentPath === '');
              if (item.isHighlight) {
                return (
                  <a
                    key={item.key}
                    href={item.path}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.key);
                    }}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'bg-[#3E2F5B] text-white shadow-sm'
                        : 'bg-[#F2EEF8] text-[#3E2F5B] hover:bg-[#3E2F5B] hover:text-white border border-[#3E2F5B]/20'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>{item.label}</span>
                  </a>
                );
              }
              return (
                <a
                  key={item.key}
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.key);
                  }}
                  className={`transition-colors whitespace-nowrap shrink-0 relative py-1 hover:text-[#3E2F5B] cursor-pointer ${
                    isActive ? 'text-[#3E2F5B] font-black' : 'text-[#5E5868]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C5A059] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action CTA Button */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/989199087264?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D8%B1%D8%B2%D8%B1%D9%88%20%D9%88%D9%82%D8%AA%20%D8%AC%D9%84%D8%B3%D9%87%20%D8%B2%D9%88%D8%AC%20%D8%AF%D8%B1%D9%85%D8%A7%D9%86%20%D9%BE%DB%8C%D8%A7%D9%85%20%D9%85%DB%8C%E2%80%8C%D8%AF%D9%87%D9%85."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#241A35] hover:bg-[#3E2F5B] text-white text-xs font-black px-5 py-2.5 rounded-full shadow-[0_6px_20px_-4px_rgba(36,26,53,0.35)] hover:-translate-y-0.5 transition-all whitespace-nowrap shrink-0 border border-[#C5A059]/40"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>رزرو وقت مشاوره</span>
            </a>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-xl text-[#241A35] hover:bg-[#F2EEF8] transition-colors cursor-pointer border border-[#E8E2D8]"
              aria-label="باز کردن منوی سایت"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Luxury Slide-Over Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <div
            className="fixed inset-0 bg-[#241A35]/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-[84%] max-w-[340px] bg-white p-6 shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-[#E8E2D8]">
            <div>
              {/* Mobile Drawer Top */}
              <div className="flex items-center justify-between pb-5 border-b border-[#E8E2D8] mb-6">
                <div className="flex flex-col text-right">
                  <span className="text-base font-black text-[#241A35]">مرکز تخصصی زوج درمان</span>
                  <span className="text-xs text-[#C5A059] font-bold">مهناز خوینی (پروانه ۱۴۱۴۰۸۳)</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full bg-[#FAF5EB] text-[#241A35] hover:bg-[#E8E2D8]"
                  aria-label="بستن منو"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.path}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.key);
                    }}
                    className={`flex items-center justify-between py-3 px-3.5 rounded-xl text-right text-xs font-black transition-all cursor-pointer ${
                      item.isHighlight
                        ? 'bg-[#F2EEF8] text-[#3E2F5B] border border-[#3E2F5B]/20'
                        : 'text-[#231F2D] hover:bg-[#F8F5EE]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronLeft className="w-4 h-4 text-[#8A8494]" />
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="pt-6 border-t border-[#E8E2D8] flex flex-col gap-3">
              <a
                href="https://wa.me/989199087264?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D9%86%D9%88%D8%A8%D8%AA%20%D8%B2%D9%88%D8%AC%20%D8%AF%D8%B1%D9%85%D8%A7%D9%86%20%D9%BE%DB%8C%D8%A7%D9%85%20%D9%85%DB%8C%E2%80%8C%D8%AF%D9%87%D9%85."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#241A35] text-white text-center rounded-xl font-black text-xs flex items-center justify-center gap-2 shadow"
              >
                <MessageSquare className="w-4 h-4 text-[#C5A059]" />
                <span>پیام در واتساپ (۰۹۱۹۹۰۸۷۲۶۴)</span>
              </a>
              <a
                href="tel:02144600980"
                className="w-full py-3 bg-[#FAF5EB] text-[#241A35] border border-[#C5A059]/30 text-center rounded-xl font-bold text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>تماس کلینیک (۰۲۱۴۴۶۰۰۹۸۰)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
