import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { BrandMark, ZoojdarmanWordmark } from './BrandMark';

interface HeaderProps {
  onNavigateHome: (section?: string) => void;
  onNavigatePrivacy?: () => void;
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
  onNavigateFees,
  onNavigateVideos,
  onNavigateCities,
  onNavigateCountries,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    closeButtonRef.current?.focus();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleAction = (e: React.MouseEvent, callback?: () => void, fallbackSection?: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (callback) {
      callback();
    } else {
      onNavigateHome(fallbackSection);
    }
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        رفتن به محتوای اصلی
      </a>

      <header className="sticky top-0 z-50 bg-[#F4F1EC]/95 backdrop-blur-md border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Icon, Zoojdarman Wordmark, Therapist Name & License */}
          <a
            href="/"
            aria-label="صفحه اصلی Zoojdarman — مهناز خوینی، کد نظام روان‌شناسی ۱۴۱۴۰۸۳"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              onNavigateHome('top');
            }}
            className="flex items-center gap-2 shrink-0 group"
          >
            <BrandMark className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 transition-transform duration-300 group-hover:scale-105" />
            <div className="flex flex-col items-start text-right">
              <ZoojdarmanWordmark className="text-base sm:text-[17px]" />
              <span className="text-[10.5px] sm:text-[11px] font-medium text-[#555650] leading-tight mt-0.5 whitespace-nowrap">
                مهناز خوینی · نظام روان‌شناسی ۱۴۱۴۰۸۳
              </span>
            </div>
          </a>

          {/* Zone 2: Primary Desktop Navigation (5 concise items) */}
          <nav
            aria-label="ناوبری اصلی"
            className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#292D2A]"
          >
            <a
              href="/services"
              onClick={(e) => handleAction(e, onNavigateServices, 'services')}
              className="hover:text-[#344A42] transition-colors whitespace-nowrap shrink-0 py-2"
            >
              خدمات تخصصی
            </a>
            <a
              href="/tools"
              onClick={(e) => handleAction(e, onNavigateTools, 'tools')}
              className="hover:text-[#344A42] transition-colors whitespace-nowrap shrink-0 py-2"
            >
              خودسنجی رابطه
            </a>
            <a
              href="/articles"
              onClick={(e) => handleAction(e, onNavigateArticles, 'articles')}
              className="hover:text-[#344A42] transition-colors whitespace-nowrap shrink-0 py-2"
            >
              دانشنامه و مقالات
            </a>
            <a
              href="/about"
              onClick={(e) => handleAction(e, onNavigateAbout, 'bio')}
              className="hover:text-[#344A42] transition-colors whitespace-nowrap shrink-0 py-2"
            >
              درباره درمانگر
            </a>
            <a
              href="/fees"
              onClick={(e) => handleAction(e, onNavigateFees, 'faq')}
              className="hover:text-[#344A42] transition-colors whitespace-nowrap shrink-0 py-2"
            >
              تعرفه جلسات
            </a>
          </nav>

          {/* Zone 3: Single Calm Primary CTA + Mobile Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="/contact"
              onClick={(e) => handleAction(e, onNavigateContact, 'contact')}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#344A42] hover:bg-[#273932] text-[#FCFBF8] text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
            >
              رزرو جلسه مشاوره
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label="باز کردن منوی ناوبری"
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[#CFC7BA] bg-[#FCFBF8] text-[#344A42] cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="منوی ناوبری موبایل"
          className="fixed inset-0 z-50 lg:hidden bg-[#292D2A]/40 backdrop-blur-xs flex justify-end"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-full max-w-xs h-full bg-[#FCFBF8] border-r border-[#E5E0D8] p-6 overflow-y-auto flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-[#E5E0D8]">
                <div className="flex items-center gap-2">
                  <BrandMark className="w-8 h-8 shrink-0" />
                  <div className="flex flex-col items-start text-right">
                    <ZoojdarmanWordmark className="text-sm" />
                    <span className="text-[10px] font-medium text-[#555650] leading-tight mt-0.5">
                      مهناز خوینی · نظام روان‌شناسی ۱۴۱۴۰۸۳
                    </span>
                  </div>
                </div>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="بستن منو"
                  className="w-9 h-9 rounded-lg border border-[#E5E0D8] flex items-center justify-center text-[#555650] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <nav className="flex flex-col gap-1.5 text-sm font-medium text-[#292D2A]">
                <a
                  href="/services"
                  onClick={(e) => handleAction(e, onNavigateServices, 'services')}
                  className="px-3 py-2.5 rounded-lg hover:bg-[#F4F1EC] transition-colors"
                >
                  خدمات تخصصی زوج‌درمانی
                </a>
                <a
                  href="/tools"
                  onClick={(e) => handleAction(e, onNavigateTools, 'tools')}
                  className="px-3 py-2.5 rounded-lg hover:bg-[#F4F1EC] transition-colors"
                >
                  خودسنجی و تست آنلاین
                </a>
                <a
                  href="/articles"
                  onClick={(e) => handleAction(e, onNavigateArticles, 'articles')}
                  className="px-3 py-2.5 rounded-lg hover:bg-[#F4F1EC] transition-colors"
                >
                  دانشنامه و مقالات علمی
                </a>
                <a
                  href="/about"
                  onClick={(e) => handleAction(e, onNavigateAbout, 'bio')}
                  className="px-3 py-2.5 rounded-lg hover:bg-[#F4F1EC] transition-colors"
                >
                  درباره مهناز خوینی
                </a>
                <a
                  href="/process"
                  onClick={(e) => handleAction(e, onNavigateProcess, 'process')}
                  className="px-3 py-2.5 rounded-lg hover:bg-[#F4F1EC] transition-colors"
                >
                  مسیر جلسات CBCT
                </a>
                <a
                  href="/fees"
                  onClick={(e) => handleAction(e, onNavigateFees, 'faq')}
                  className="px-3 py-2.5 rounded-lg hover:bg-[#F4F1EC] transition-colors"
                >
                  تعرفه و بیمه تکمیلی
                </a>
                <a
                  href="/faq"
                  onClick={(e) => handleAction(e, onNavigateFaq, 'faq')}
                  className="px-3 py-2.5 rounded-lg hover:bg-[#F4F1EC] transition-colors"
                >
                  پرسش‌های متداول
                </a>
                <a
                  href="/videos"
                  onClick={(e) => handleAction(e, onNavigateVideos, 'videos')}
                  className="px-3 py-2.5 rounded-lg hover:bg-[#F4F1EC] transition-colors"
                >
                  ویدیوهای آموزشی
                </a>
                <a
                  href="/cities"
                  onClick={(e) => handleAction(e, onNavigateCities, 'regions')}
                  className="px-3 py-2.5 rounded-lg hover:bg-[#F4F1EC] transition-colors"
                >
                  مراکز شهرهای ایران
                </a>
                <a
                  href="/countries"
                  onClick={(e) => handleAction(e, onNavigateCountries, 'regions')}
                  className="px-3 py-2.5 rounded-lg hover:bg-[#F4F1EC] transition-colors"
                >
                  ایرانیان خارج از کشور
                </a>
              </nav>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E5E0D8] space-y-3">
              <a
                href="/contact"
                onClick={(e) => handleAction(e, onNavigateContact, 'contact')}
                className="w-full py-3 rounded-lg bg-[#344A42] text-[#FCFBF8] text-sm font-semibold flex items-center justify-center"
              >
                رزرو جلسه مشاوره
              </a>
              <a
                href="tel:02144600980"
                className="w-full py-2.5 rounded-lg border border-[#CFC7BA] text-[#344A42] text-xs font-semibold flex items-center justify-center"
                dir="ltr"
              >
                ۰۲۱-۴۴۶۰۰۹۸۰
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
