import React, { useState, useEffect } from 'react';
import { ChevronUp, Phone, MessageSquare } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Back to Top Floating Button (Bottom Right) */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-24 sm:bottom-8 right-6 z-40 w-11 h-11 rounded-full bg-white text-[#6D5AA8] border border-[#E5E0EA] shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-[#6D5AA8] hover:text-white hover:-translate-y-1 cursor-pointer ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none translate-y-4'
        }`}
        aria-label="رفتن به بالای صفحه"
      >
        <ChevronUp className="w-5 h-5" />
      </button>

      {/* Desktop Floating Contacts (Bottom Left) */}
      <div className="hidden lg:flex fixed bottom-8 left-8 z-40 flex-col gap-2.5">
        <a
          href="https://wa.me/989199087264?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D9%86%D9%88%D8%A8%D8%AA%20%D9%85%D8%B4%D8%A7%D9%88%D8%B1%D9%87%20%D8%B2%D9%88%D8%AC%E2%80%8C%D8%AF%D8%B1%D9%85%D8%A7%D9%86%DB%8C%20%D9%BE%DB%8C%D8%A7%D9%85%20%D9%85%DB%8C%E2%80%8C%D8%AF%D9%87%D9%85."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-[#6D5AA8] hover:bg-[#44386B] text-white text-xs font-black px-4 py-3 rounded-full shadow-lg hover:-translate-y-1 transition-all"
        >
          <MessageSquare className="w-4 h-4" />
          <span>پیام در واتساپ</span>
        </a>

        <a
          href="tel:09199087264"
          className="inline-flex items-center gap-2.5 bg-white hover:bg-[#f2eff8] text-[#44386B] border border-[#E5E0EA] text-xs font-black px-4 py-3 rounded-full shadow-lg hover:-translate-y-1 transition-all"
        >
          <Phone className="w-4 h-4 text-[#5e826b]" />
          <span dir="ltr">۰۹۱۹ ۹۰۸ ۷۲۶۴</span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E5E0EA] p-3 shadow-2xl">
        <div className="flex items-center gap-3 max-w-md mx-auto">
          <a
            href="https://wa.me/989199087264?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D9%86%D9%88%D8%A8%D8%AA%20%D9%85%D8%B4%D8%A7%D9%88%D8%B1%D9%87%20%D8%B2%D9%88%D8%AC%E2%80%8C%D8%AF%D8%B1%D9%85%D8%A7%D9%86%DB%8C%20%D9%BE%DB%8C%D8%A7%D9%85%20%D9%85%DB%8C%E2%80%8C%D8%AF%D9%87%D9%85."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 bg-[#6D5AA8] hover:bg-[#44386B] text-white text-xs font-black rounded-full flex items-center justify-center gap-2 shadow"
          >
            <MessageSquare className="w-4 h-4" />
            <span>پیام در واتساپ</span>
          </a>

          <a
            href="tel:09199087264"
            className="flex-1 py-3 bg-white hover:bg-[#f2eff8] text-[#44386B] border border-[#E5E0EA] text-xs font-black rounded-full flex items-center justify-center gap-2 shadow"
          >
            <Phone className="w-4 h-4 text-[#5e826b]" />
            <span>تماس مستقیم</span>
          </a>
        </div>
      </div>
    </>
  );
};
