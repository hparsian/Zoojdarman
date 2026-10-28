import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ShieldCheck, Heart, Sparkles } from 'lucide-react';

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

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledPercent = height > 0 ? (winScroll / height) : 0;
      setScrollProgress(scrolledPercent);
      setScrolled(winScroll > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 border-b ${
          scrolled ? 'bg-white/95 shadow-sm border-[#E5E0EA]' : 'bg-[#FAF8F5]/90 backdrop-blur-md border-[#E5E0EA]'
        }`}
      >
        {/* Scroll Progress Bar */}
        <div
          className="h-[3px] bg-gradient-to-r from-[#E8A58D] to-[#6D5AA8] transition-all origin-right"
          style={{ width: `${scrollProgress * 100}%` }}
        />

        <div className="container-custom h-[78px] flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); handleLinkClick('top'); }}
            className="flex items-center gap-3 text-right group cursor-pointer"
            dir="ltr"
          >
            <div className="flex items-center text-xl font-black text-[#44386B] tracking-tight">
              <span>Z</span>
              <svg width="18" height="18" viewBox="0 0 32 29" className="inline-block mx-0.5 fill-[#8FAF9B]">
                <path d="M16 29 C16 29 0 18.5 0 8.8 C0 3.5 4 0 8.6 0 C11.8 0 14.4 1.8 16 4.6 C17.6 1.8 20.2 0 23.4 0 C28 0 32 3.5 32 8.8 C32 18.5 16 29 16 29 Z" />
              </svg>
              <svg width="18" height="18" viewBox="0 0 32 29" className="inline-block mx-0.5 fill-[#E8A58D]">
                <path d="M16 29 C16 29 0 18.5 0 8.8 C0 3.5 4 0 8.6 0 C11.8 0 14.4 1.8 16 4.6 C17.6 1.8 20.2 0 23.4 0 C28 0 32 3.5 32 8.8 C32 18.5 16 29 16 29 Z" />
              </svg>
              <span>jdarman.ir</span>
            </div>
            <div className="hidden sm:flex flex-col text-right pr-2 border-r border-[#E5E0EA]" dir="rtl">
              <span className="text-xs font-black text-[#44386B]">مرکز تخصصی زوج درمان</span>
              <span className="text-[10px] text-[#6F6B78]">مهناز خوینی | زوج درمانگر بالینی</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            <a
              href="/tools"
              onClick={(e) => { e.preventDefault(); handleLinkClick('tools'); }}
              className="text-xs font-black text-[#6D5AA8] bg-[#f2eff8] hover:bg-[#6D5AA8] hover:text-white px-3.5 py-1.5 rounded-full border border-[#6D5AA8]/30 flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E8A58D]" />
              <span>تست آنلاین رابطه</span>
            </a>
            <a
              href="/topics"
              onClick={(e) => { e.preventDefault(); handleLinkClick('seo-hub'); }}
              className="text-sm font-bold text-[#6F6B78] hover:text-[#6D5AA8] transition-colors cursor-pointer"
            >
              موضوعات پرجستجو
            </a>
            <a
              href="/#assessment"
              onClick={(e) => { e.preventDefault(); handleLinkClick('assessment'); }}
              className="text-sm font-bold text-[#6F6B78] hover:text-[#6D5AA8] transition-colors cursor-pointer"
            >
              راهنمای مراجعان
            </a>
            <a
              href="/services"
              onClick={(e) => { e.preventDefault(); handleLinkClick('services'); }}
              className="text-sm font-bold text-[#6F6B78] hover:text-[#6D5AA8] transition-colors cursor-pointer"
            >
              خدمات تخصصی
            </a>
            <a
              href="/process"
              onClick={(e) => { e.preventDefault(); handleLinkClick('process'); }}
              className="text-sm font-bold text-[#6F6B78] hover:text-[#6D5AA8] transition-colors cursor-pointer"
            >
              مراحل درمان
            </a>
            <a
              href="/about"
              onClick={(e) => { e.preventDefault(); handleLinkClick('bio'); }}
              className="text-sm font-bold text-[#6F6B78] hover:text-[#6D5AA8] transition-colors cursor-pointer"
            >
              درباره مهناز خوینی
            </a>
            <a
              href="/articles"
              onClick={(e) => { e.preventDefault(); handleLinkClick('articles'); }}
              className="text-sm font-bold text-[#6F6B78] hover:text-[#6D5AA8] transition-colors cursor-pointer"
            >
              راهنمای رابطه و مقالات
            </a>
            <a
              href="/faq"
              onClick={(e) => { e.preventDefault(); handleLinkClick('faq'); }}
              className="text-sm font-bold text-[#6F6B78] hover:text-[#6D5AA8] transition-colors cursor-pointer"
            >
              سوالات متداول
            </a>
            <a
              href="/contact"
              onClick={(e) => { e.preventDefault(); handleLinkClick('contact'); }}
              className="text-sm font-bold text-[#6F6B78] hover:text-[#6D5AA8] transition-colors cursor-pointer"
            >
              تماس و نوبت‌دهی
            </a>
          </nav>

          {/* Header Actions */}
          <div className="flex items-center gap-3">
            {/* License chip */}
            <div className="hidden md:flex items-center gap-1.5 text-xs font-extrabold bg-[#edf5f0] text-[#5e826b] px-3 py-1.5 rounded-full border border-[#d8e8dd]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>پروانه نظام روان‌شناسی: ۱۴۱۴۰۸۳</span>
            </div>

            {/* CTA Button */}
            <a
              href="https://wa.me/989199087264?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D8%AF%D8%B1%DB%8C%D8%A7%D9%81%D8%AA%20%D9%86%D9%88%D8%A8%D8%AA%20%D9%85%D8%B4%D8%A7%D9%88%D8%B1%D9%87%20%D8%B2%D9%88%D8%AC%E2%80%8C%D8%AF%D8%B1%D9%85%D8%A7%D9%86%DB%8C%20%D9%BE%DB%8C%D8%A7%D9%85%20%D9%85%DB%8C%E2%80%8C%D8%AF%D9%87%D9%85."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-[#6D5AA8] hover:bg-[#44386B] text-white text-xs font-black px-4 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>رزرو نوبت</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#44386B] hover:bg-[#f2eff8] transition-colors cursor-pointer"
              aria-label="باز کردن منو"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-[#44386B]/50 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-[82%] max-w-[320px] bg-white p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E0EA] mb-6">
                <div className="flex flex-col text-right">
                  <span className="text-base font-black text-[#44386B]">مهناز خوینی</span>
                  <span className="text-xs text-[#6F6B78]">مرکز تخصصی زوج‌درمانی</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full bg-[#FAF8F5] text-[#292733]"
                  aria-label="بستن منو"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="/tools"
                  onClick={(e) => { e.preventDefault(); handleLinkClick('tools'); }}
                  className="flex items-center gap-2.5 py-2 px-3 rounded-xl bg-[#f2eff8] text-right font-black text-[#6D5AA8] hover:bg-[#6D5AA8] hover:text-white transition-all"
                >
                  <Sparkles className="w-4 h-4 text-[#E8A58D]" />
                  <span>تست آنلاین سلامت رابطه (رایگان)</span>
                </a>
                <a
                  href="/topics"
                  onClick={(e) => { e.preventDefault(); handleLinkClick('seo-hub'); }}
                  className="flex items-center gap-3 py-2 text-right font-extrabold text-[#292733] hover:text-[#6D5AA8]"
                >
                  <span>موضوعات پرجستجوی گوگل</span>
                </a>
                <a
                  href="/#assessment"
                  onClick={(e) => { e.preventDefault(); handleLinkClick('assessment'); }}
                  className="flex items-center gap-3 py-2 text-right font-extrabold text-[#292733] hover:text-[#6D5AA8]"
                >
                  <span>راهنمای تشخیصی مراجعان</span>
                </a>
                <a
                  href="/services"
                  onClick={(e) => { e.preventDefault(); handleLinkClick('services'); }}
                  className="flex items-center gap-3 py-2 text-right font-extrabold text-[#292733] hover:text-[#6D5AA8]"
                >
                  <span>خدمات تخصصی</span>
                </a>
                <a
                  href="/process"
                  onClick={(e) => { e.preventDefault(); handleLinkClick('process'); }}
                  className="flex items-center gap-3 py-2 text-right font-extrabold text-[#292733] hover:text-[#6D5AA8]"
                >
                  <span>مراحل ۴ گانه درمان</span>
                </a>
                <a
                  href="/about"
                  onClick={(e) => { e.preventDefault(); handleLinkClick('bio'); }}
                  className="flex items-center gap-3 py-2 text-right font-extrabold text-[#292733] hover:text-[#6D5AA8]"
                >
                  <span>سوابق مهناز خوینی</span>
                </a>
                <a
                  href="/articles"
                  onClick={(e) => { e.preventDefault(); handleLinkClick('articles'); }}
                  className="flex items-center gap-3 py-2 text-right font-extrabold text-[#292733] hover:text-[#6D5AA8]"
                >
                  <span>بانک مقالات و راهنما</span>
                </a>
                <a
                  href="/faq"
                  onClick={(e) => { e.preventDefault(); handleLinkClick('faq'); }}
                  className="flex items-center gap-3 py-2 text-right font-extrabold text-[#292733] hover:text-[#6D5AA8]"
                >
                  <span>سوالات متداول</span>
                </a>
                <a
                  href="/contact"
                  onClick={(e) => { e.preventDefault(); handleLinkClick('contact'); }}
                  className="flex items-center gap-3 py-2 text-right font-extrabold text-[#292733] hover:text-[#6D5AA8]"
                >
                  <span>تماس و نوبت‌دهی</span>
                </a>
                <a
                  href="/privacy-policy"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    onNavigatePrivacy();
                  }}
                  className="flex items-center gap-3 py-2 text-right font-medium text-xs text-[#6F6B78] hover:text-[#6D5AA8]"
                >
                  <span>حریم خصوصی و محرمانگی</span>
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E5E0EA] flex flex-col gap-3">
              <a
                href="https://wa.me/989199087264?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D8%AF%D8%B1%D8%AE%D9%88%D8%A7%D8%B3%D8%AA%20%D9%86%D9%88%D8%A8%D8%AA%20%D9%85%D8%B4%D8%A7%D9%88%D8%B1%D9%87%20%D8%B2%D9%88%D8%AC%E2%80%8C%D8%AF%D8%B1%D9%85%D8%A7%D9%86%DB%8C%20%D8%AF%D8%A7%D8%B1%D9%85."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#6D5AA8] text-white text-center rounded-xl font-bold flex items-center justify-center gap-2 shadow"
              >
                <MessageSquare className="w-4 h-4" />
                <span>پیام در واتساپ (۰۹۱۹۹۰۸۷۲۶۴)</span>
              </a>
              <a
                href="tel:09199087264"
                className="w-full py-3 bg-[#edf5f0] text-[#5e826b] text-center rounded-xl font-bold flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>تماس مستقیم تلفنی</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
