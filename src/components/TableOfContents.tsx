import React, { useState, useEffect } from 'react';
import {
  Compass,
  ChevronDown,
  ChevronUp,
  Link2,
  ShieldCheck,
  Scale,
  BrainCircuit,
  Sparkles,
  HeartHandshake
} from 'lucide-react';

export interface TocHeading {
  id: string;
  text: string;
  level: 2 | 3;
}

interface TableOfContentsProps {
  contentRef: React.RefObject<HTMLDivElement | null>;
  articleTrigger?: unknown;
  className?: string;
  onNavigateInternal?: (path: string) => void;
  defaultOpenOnMobile?: boolean;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  contentRef,
  articleTrigger,
  className = '',
  onNavigateInternal,
  defaultOpenOnMobile = false,
}) => {
  const [headings, setHeadings] = useState<TocHeading[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [progressPercent, setProgressPercent] = useState<number>(0);

  // تنظیم وضعیت اولیه باز/بسته بودن بر اساس اندازه صفحه
  useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    setIsOpen(isMobile ? defaultOpenOnMobile : true);
  }, [defaultOpenOnMobile]);

  // ۱. پویش و استخراج تمام عناوین h2 و h3 با استفاده از ref
  useEffect(() => {
    const container = contentRef.current;
    if (!container) return;

    const headingElements = container.querySelectorAll<HTMLHeadingElement>('h2, h3');
    const items: TocHeading[] = [];

    headingElements.forEach((el, index) => {
      let id = el.id;
      if (!id) {
        const rawText = el.textContent?.trim() || `section-${index + 1}`;
        const slug = rawText
          .replace(/[^\u0600-\u06FFa-zA-Z0-9\s-]/g, '')
          .trim()
          .replace(/\s+/g, '-');
        id = `heading-${slug || 'sec'}-${index + 1}`;
        el.id = id;
      }

      const level = el.tagName.toLowerCase() === 'h2' ? 2 : 3;
      items.push({
        id,
        text: el.textContent?.trim() || '',
        level,
      });
    });

    setHeadings(items);
  }, [contentRef, articleTrigger]);

  // ۲. ردیابی اسکرول (ScrollSpy) جهت مشخص کردن عنوان فعال
  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const pct = Math.min(100, Math.max(0, Math.round((window.scrollY / docHeight) * 100)));
        setProgressPercent(pct);
      }

      if (headings.length === 0) return;
      const scrollThreshold = window.scrollY + 130;

      for (let i = headings.length - 1; i >= 0; i--) {
        const el = document.getElementById(headings[i].id);
        if (el && el.offsetTop <= scrollThreshold) {
          setActiveId(headings[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  // اسکرول نرم به بخش مورد نظر با در نظر گرفتن ارتفاع نوار چسبان
  const handleScrollTo = (id: string) => {
    const targetEl = document.getElementById(id);
    if (targetEl) {
      const offsetTop = targetEl.getBoundingClientRect().top + window.scrollY - 85;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
      setActiveId(id);
    }
  };

  const vitalInternalLinks = [
    { label: 'مشاوره خیانت زناشویی', path: '/services/infidelity-counseling', icon: ShieldCheck, badge: 'اورژانسی' },
    { label: 'مشاوره طلاق آگاهانه', path: '/services/divorce-counseling', icon: Scale, badge: 'تخصصی' },
    { label: 'تست‌های آنلاین رایگان', path: '/tools', icon: BrainCircuit, badge: 'خودارزیابی' },
    { label: 'تعرفه‌ها و هزینه جلسات', path: '/fees', icon: Sparkles, badge: 'تعرفه مصوب' },
    { label: 'رزرو وقت مشاوره و تماس', path: '/contact', icon: HeartHandshake, badge: 'نوبت‌دهی' },
  ];

  const handleLinkClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateInternal) {
      onNavigateInternal(path);
    } else {
      window.history.pushState({}, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <div
      className={`bg-white/95 backdrop-blur-md border border-[#E8E2D8] hover:border-[#C5A059]/40 rounded-3xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all overflow-hidden ${className}`}
    >
      {/* سربرگ جدول محتوا */}
      <div className="flex items-center justify-between pb-3.5 border-b border-[#E8E2D8]">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#FAF5EB] border border-[#C5A059]/40 flex items-center justify-center text-[#9E7D36] shrink-0">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-black text-[#241A35] m-0 leading-tight">
              جدول محتوای مقاله
            </h3>
            <span className="text-[11px] text-[#8A8494] block mt-0.5">
              {headings.length} بخش تخصصی بر اساس H2 و H3
            </span>
          </div>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'بستن فهرست' : 'نمایش فهرست'}
          className="inline-flex items-center gap-1 text-xs font-bold text-[#3E2F5B] bg-[#FAF8F5] hover:bg-[#F2EEF8] border border-[#E8E2D8] px-2.5 py-1.5 rounded-xl cursor-pointer transition-colors"
        >
          <span className="text-[11px]">{isOpen ? 'بستن' : 'نمایش'}</span>
          {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* نوار کوچک پیشرفت مطالعه داخل کامپوننت */}
      <div className="w-full bg-[#FAF5EB] h-1.5 rounded-full mt-3 overflow-hidden">
        <div
          className="bg-gradient-to-r from-[#C5A059] to-[#3E2F5B] h-full rounded-full transition-all duration-150"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
      <div className="flex items-center justify-between text-[10px] text-[#8A8494] mt-1 mb-2">
        <span>پیشرفت مطالعه:</span>
        <span className="font-bold text-[#3E2F5B]">{progressPercent}%</span>
      </div>

      {/* فهرست عناوین با اسکرول بار اختصاصی */}
      {isOpen && (
        <div className="mt-3 animate-fadeIn">
          <nav
            aria-label="سرفصل‌های مقاله"
            className="max-h-[300px] lg:max-h-[440px] overflow-y-auto pl-1.5 pr-0.5 space-y-1 custom-scrollbar text-right"
          >
            {headings.map((item, idx) => {
              const isActive = activeId === item.id;
              const isH3 = item.level === 3;

              return (
                <button
                  key={idx}
                  onClick={() => handleScrollTo(item.id)}
                  title={item.text}
                  className={`w-full text-right transition-all flex items-start gap-2 py-1 px-2.5 rounded-xl cursor-pointer ${
                    isH3
                      ? 'mr-4 text-[11px] text-[#5E5868]'
                      : 'text-xs font-bold text-[#231F2D]'
                  } ${
                    isActive
                      ? 'bg-gradient-to-l from-[#F2EEF8] to-white text-[#3E2F5B] font-black border-r-3 border-[#C5A059] shadow-2xs'
                      : 'hover:bg-[#FAF8F5] hover:text-[#3E2F5B]'
                  }`}
                >
                  <span
                    className={`shrink-0 mt-1.5 ${
                      isH3
                        ? 'w-1 h-1 rounded-full bg-[#B5AFC0]'
                        : 'w-1.5 h-1.5 rounded-full bg-[#C5A059]'
                    }`}
                  />
                  <span className="leading-relaxed line-clamp-1 break-words">{item.text}</span>
                </button>
              );
            })}
          </nav>

          {/* پیوندهای داخلی کلیدی پیشنهادی مرتبط با سئو */}
          <div className="mt-4 pt-3.5 border-t border-[#E8E2D8] bg-[#FAF8F5]/80 -mx-4 sm:-mx-5 -mb-4 sm:-mb-5 p-3.5 sm:p-4 rounded-b-3xl">
            <div className="flex items-center gap-1.5 mb-2.5">
              <Link2 className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="text-[11px] font-black text-[#241A35]">
                صفحات پیشنهادی مرتبط (سئو داخلی):
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              {vitalInternalLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <a
                    key={idx}
                    href={link.path}
                    onClick={(e) => handleLinkClick(link.path, e)}
                    className="flex items-center justify-between text-[11px] font-bold text-[#3E2F5B] bg-white border border-[#E8E2D8] hover:border-[#C5A059] hover:bg-[#FAF5EB] px-2.5 py-1.5 rounded-xl shadow-2xs transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-1.5">
                      <Icon className="w-3.5 h-3.5 text-[#9E7D36] shrink-0" />
                      <span className="truncate">{link.label}</span>
                    </div>
                    <span className="text-[9px] bg-[#EEF5F1] text-[#375949] font-black px-1.5 py-0.5 rounded-md shrink-0 mr-1">
                      {link.badge}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
