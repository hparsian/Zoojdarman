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
  HeartHandshake,
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
  headingTitle?: string;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  contentRef,
  articleTrigger,
  className = '',
  onNavigateInternal,
  defaultOpenOnMobile = false,
  headingTitle = 'فهرست مطالب مقاله',
}) => {
  const [headings, setHeadings] = useState<TocHeading[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [progressPercent, setProgressPercent] = useState<number>(0);

  useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    setIsOpen(isMobile ? defaultOpenOnMobile : true);
  }, [defaultOpenOnMobile]);

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
    { label: 'مشاوره خیانت زناشویی', path: '/services/infidelity-counseling', icon: ShieldCheck },
    { label: 'مشاوره طلاق آگاهانه', path: '/services/divorce-counseling', icon: Scale },
    { label: 'خودسنجی‌های آنلاین رابطه', path: '/tools', icon: BrainCircuit },
    { label: 'تعرفه و هزینه جلسات', path: '/fees', icon: Sparkles },
    { label: 'رزرو وقت مشاوره', path: '/contact', icon: HeartHandshake },
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
      className={`bg-[#FCFBF8] border border-[#E5E0D8] rounded-2xl p-4 sm:p-5 overflow-hidden ${className}`}
    >
      <div className="flex items-center justify-between pb-3.5 border-b border-[#E5E0D8]">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#EDF2EE] flex items-center justify-center text-[#344A42] shrink-0">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-[#292D2A] m-0 leading-tight">
              {headingTitle}
            </h3>
            <span className="text-[11px] text-[#6E6E68] block mt-0.5">
              {headings.length} سرفصل
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'بستن فهرست' : 'نمایش فهرست'}
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#344A42] bg-[#F4F1EC] hover:bg-[#ECE7DF] border border-[#E5E0D8] px-2.5 py-1.5 rounded-lg cursor-pointer transition-colors"
        >
          <span className="text-[11px]">{isOpen ? 'بستن' : 'نمایش'}</span>
          {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Reading progress bar */}
      <div className="w-full bg-[#ECE7DF] h-1.5 rounded-full mt-3 overflow-hidden">
        <div
          className="bg-[#344A42] h-full rounded-full transition-all duration-150"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
      <div className="flex items-center justify-between text-[11px] text-[#6E6E68] mt-1 mb-2">
        <span>پیشرفت مطالعه</span>
        <span className="font-semibold text-[#344A42]">{progressPercent}%</span>
      </div>

      {isOpen && (
        <div className="mt-3">
          <nav
            aria-label="سرفصل‌های مقاله"
            className="max-h-[300px] lg:max-h-[420px] overflow-y-auto pl-1.5 pr-0.5 space-y-1 text-right"
          >
            {headings.map((item, idx) => {
              const isActive = activeId === item.id;
              const isH3 = item.level === 3;

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleScrollTo(item.id)}
                  title={item.text}
                  className={`w-full text-right transition-colors flex items-start gap-2 py-1.5 px-2.5 rounded-lg cursor-pointer ${
                    isH3
                      ? 'mr-3 text-[11px] text-[#555650]'
                      : 'text-xs font-semibold text-[#292D2A]'
                  } ${
                    isActive
                      ? 'bg-[#EDF2EE] text-[#344A42] font-bold'
                      : 'hover:bg-[#F4F1EC] hover:text-[#344A42]'
                  }`}
                >
                  <span
                    className={`shrink-0 mt-1.5 ${
                      isH3
                        ? 'w-1 h-1 rounded-full bg-[#CFC7BA]'
                        : 'w-1.5 h-1.5 rounded-full bg-[#8FAE9B]'
                    }`}
                  />
                  <span className="leading-relaxed line-clamp-1 break-words">{item.text}</span>
                </button>
              );
            })}
          </nav>

          <div className="mt-4 pt-3.5 border-t border-[#E5E0D8]">
            <div className="flex items-center gap-1.5 mb-2.5">
              <Link2 className="w-3.5 h-3.5 text-[#3D5E4E]" />
              <span className="text-xs font-bold text-[#292D2A]">
                مسیرهای مرتبط
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
                    className="flex items-center gap-2 text-xs font-medium text-[#344A42] bg-[#F4F1EC] hover:bg-[#EDF2EE] border border-[#E5E0D8] px-3 py-2 rounded-lg transition-colors cursor-pointer"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#3D5E4E] shrink-0" />
                    <span className="truncate">{link.label}</span>
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
