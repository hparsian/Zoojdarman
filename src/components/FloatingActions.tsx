import React, { useState, useEffect } from 'react';
import { ChevronUp, Phone, MessageSquare } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 360);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Back to Top Floating Button */}
      <button
        type="button"
        onClick={scrollToTop}
        className={`fixed bottom-16 lg:bottom-8 right-5 z-40 w-10 h-10 rounded-lg bg-white text-[#241A35] border border-[#E8E2D8] shadow-md flex items-center justify-center transition-all duration-200 hover:bg-[#241A35] hover:text-[#C5A059] cursor-pointer ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none translate-y-3'
        }`}
        aria-label="رفتن به بالای صفحه"
      >
        <ChevronUp className="w-5 h-5" />
      </button>

      {/* Desktop Floating Contact Shortcut (Bottom Left) */}
      <div className="hidden lg:flex fixed bottom-8 left-8 z-40 flex-col gap-2">
        <a
          href="https://wa.me/989199087264?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D9%86%D9%88%D8%A8%D8%AA%20%D9%85%D8%B4%D8%A7%D9%88%D8%B1%D9%87%20%D8%B2%D9%88%D8%AC%E2%80%8C%D8%AF%D8%B1%D9%85%D8%A7%D9%86%DB%8C%20%D9%BE%DB%8C%D8%A7%D9%85%20%D9%85%DB%8C%E2%80%8C%D8%AF%D9%87%D9%85."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#241A35] hover:bg-[#3E2F5B] text-white text-xs font-black px-4 py-2.5 rounded-lg border border-[#C5A059]/35 shadow-lg transition-colors"
        >
          <MessageSquare className="w-4 h-4 text-[#C5A059]" />
          <span>پذیرش واتساپ کلینیک</span>
        </a>

        <a
          href="tel:09199087264"
          className="inline-flex items-center gap-2 bg-white hover:bg-[#FCFAF8] text-[#241A35] border border-[#E8E2D8] text-xs font-black px-4 py-2.5 rounded-lg shadow-md transition-colors tabular-nums"
        >
          <Phone className="w-4 h-4 text-[#4E7A66]" />
          <span dir="ltr">۰۹۱۹ ۹۰۸ ۷۲۶۴</span>
        </a>
      </div>

      {/* Compact Mobile Sticky Action Bar (< 8% height) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E8E2D8] px-3 py-2">
        <div className="flex items-center gap-2.5 max-w-md mx-auto">
          <a
            href="https://wa.me/989199087264?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D9%86%D9%88%D8%A8%D8%AA%20%D9%85%D8%B4%D8%A7%D9%88%D8%B1%D9%87%20%D8%B2%D9%88%D8%AC%E2%80%8C%D8%AF%D8%B1%D9%85%D8%A7%D9%86%DB%8C%20%D9%BE%DB%8C%D8%A7%D9%85%20%D9%85%DB%8C%E2%80%8C%D8%AF%D9%87%D9%85."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 bg-[#241A35] text-white text-xs font-black rounded-lg border border-[#C5A059]/35 flex items-center justify-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>نوبت‌دهی واتساپ</span>
          </a>

          <a
            href="tel:09199087264"
            className="flex-1 py-2.5 bg-[#FCFAF8] text-[#241A35] border border-[#E8E2D8] text-xs font-black rounded-lg flex items-center justify-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-[#4E7A66]" />
            <span>تماس کلینیک</span>
          </a>
        </div>
      </div>
    </>
  );
};
