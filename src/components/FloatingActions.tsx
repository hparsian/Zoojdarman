import React, { useState, useEffect } from 'react';
import { ArrowUp, Calendar, Phone } from 'lucide-react';

interface FloatingActionsProps {
  onNavigateContact?: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onNavigateContact }) => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 500);
    const handleFocusIn = (e: FocusEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') {
        setIsInputFocused(true);
      }
    };
    const handleFocusOut = () => setIsInputFocused(false);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('focusin', handleFocusIn);
    window.addEventListener('focusout', handleFocusOut);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('focusin', handleFocusIn);
      window.removeEventListener('focusout', handleFocusOut);
    };
  }, []);

  const handleBookClick = () => {
    if (onNavigateContact) {
      onNavigateContact();
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Subtle Desktop Back-to-Top */}
      {showTopBtn && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="بازگشت به بالای صفحه"
          className="hidden sm:flex fixed bottom-6 left-6 z-40 w-10 h-10 rounded-full bg-[#FCFBF8] border border-[#CFC7BA] hover:border-[#344A42] text-[#344A42] items-center justify-center shadow-sm transition-colors cursor-pointer"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Compact Mobile Bottom Action Bar (< 56px high, hides when typing) */}
      {!isInputFocused && (
        <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-[#FCFBF8]/95 backdrop-blur-md border-t border-[#E5E0D8] px-4 py-2.5 flex items-center gap-2.5">
          <button
            type="button"
            onClick={handleBookClick}
            className="flex-1 h-10 rounded-lg bg-[#344A42] text-[#FCFBF8] text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>رزرو جلسه مشاوره</span>
          </button>
          <a
            href="tel:09199087264"
            className="h-10 px-4 rounded-lg border border-[#CFC7BA] bg-[#F4F1EC] text-[#344A42] text-xs font-semibold flex items-center justify-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>تماس</span>
          </a>
        </div>
      )}
    </>
  );
};
