import React, { useEffect, useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface BrandPreloaderProps {
  onFinish?: () => void;
  minDuration?: number; // milliseconds
}

export const BrandPreloader: React.FC<BrandPreloaderProps> = ({
  onFinish,
  minDuration = 1100,
}) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') {
      setIsMounted(false);
      return;
    }

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
    if (prefersReducedMotion) {
      setIsMounted(false);
      onFinish?.();
      return;
    }

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / minDuration) * 100));
      setProgress(pct);

      if (elapsed >= minDuration) {
        clearInterval(interval);
        setIsExiting(true);
        setTimeout(() => {
          setIsMounted(false);
          onFinish?.();
        }, 500); // Wait for fade-out transition
      }
    }, 20);

    return () => clearInterval(interval);
  }, [minDuration, onFinish]);

  if (!isMounted) return null;

  const handleDismiss = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsMounted(false);
      onFinish?.();
    }, 300);
  };

  return (
    <div
      onClick={handleDismiss}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#241A35] transition-opacity duration-500 select-none cursor-pointer overflow-hidden ${
        isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="بارگذاری مرکز زوج درمان"
      role="status"
      aria-live="polite"
    >
      {/* Ambient Radial Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-[#C5A059]/12 rounded-full blur-[100px] pointer-events-none animate-pulse-rings" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-[#3E2F5B]/35 rounded-full blur-[80px] pointer-events-none" />

      {/* Decorative Golden Geometric Rings (Connection Motif) */}
      <div className="relative mb-6 sm:mb-8 flex items-center justify-center animate-float-gentle">
        <svg
          className="w-24 h-24 sm:w-28 sm:h-28"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Ring 1 - Self */}
          <circle
            cx="48"
            cy="60"
            r="32"
            stroke="url(#goldGradient1)"
            strokeWidth="2.5"
            strokeDasharray="4 2"
            className="animate-spin"
            style={{ animationDuration: '18s' }}
          />
          {/* Ring 2 - Partner */}
          <circle
            cx="72"
            cy="60"
            r="32"
            stroke="url(#goldGradient2)"
            strokeWidth="2.5"
            strokeDasharray="4 2"
            className="animate-spin"
            style={{ animationDuration: '22s', animationDirection: 'reverse' }}
          />
          {/* Intersection Heart Accent */}
          <circle cx="60" cy="60" r="14" fill="#3E2F5B" fillOpacity="0.8" />
          <defs>
            <linearGradient id="goldGradient1" x1="16" y1="28" x2="80" y2="92" gradientUnits="userSpaceOnUse">
              <stop stopColor="#C5A059" />
              <stop offset="0.5" stopColor="#FFF4D9" />
              <stop offset="1" stopColor="#9E7D36" />
            </linearGradient>
            <linearGradient id="goldGradient2" x1="40" y1="28" x2="104" y2="92" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9E7D36" />
              <stop offset="0.5" stopColor="#FFF4D9" />
              <stop offset="1" stopColor="#C5A059" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center Connection Heart Icon */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Heart className="w-5 h-5 text-[#C5A059] fill-[#C5A059]/40 animate-pulse" />
        </div>
      </div>

      {/* Main Keyword Showcase — «زوج درمان» with Gleam Animation */}
      <div className="text-center px-4 max-w-lg relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-[#C5A059]/30 text-[#C5A059] text-[11px] sm:text-xs font-semibold mb-3 tracking-wide">
          <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} />
          <span>تخصصی‌ترین مرجع بازسازی روابط عاطفی</span>
        </div>

        <div className="text-3xl sm:text-5xl font-black tracking-tight mb-2 sm:mb-3">
          <span className="animate-shimmer-brand text-4xl sm:text-6xl inline-block drop-shadow-[0_4px_16px_rgba(197,160,89,0.35)]">
            زوج درمان
          </span>
        </div>

        <p className="text-xs sm:text-sm text-[#E5DEF0] font-medium leading-relaxed mb-6 sm:mb-8 max-w-sm mx-auto opacity-90">
          ترمیم پیوند عاطفی، بازسازی اعتماد و دلبستگی امن در رابطه
          <span className="block text-[11px] sm:text-xs text-[#C5A059]/90 mt-1 font-light">
            کلینیک پیوند امن · مهناز خوینی
          </span>
        </p>

        {/* Minimalist Champagne Progress Bar */}
        <div className="w-48 sm:w-64 mx-auto">
          <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/5">
            <div
              className="h-full bg-gradient-to-r from-[#9E7D36] via-[#C5A059] to-[#FFF4D9] rounded-full transition-all duration-75 ease-out shadow-[0_0_8px_rgba(197,160,89,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between items-center mt-2 text-[10px] text-[#A69FB3] px-1 font-mono">
            <span>در حال اتصال امن...</span>
            <span dir="ltr">{progress}%</span>
          </div>
        </div>
      </div>

      {/* Discreet Tap to Skip Hint */}
      <div className="absolute bottom-6 text-[11px] text-[#8A8494] hover:text-[#C5A059] transition-colors">
        برای ورود سریع‌تر کلیک کنید
      </div>
    </div>
  );
};
