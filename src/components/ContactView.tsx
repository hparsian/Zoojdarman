import React, { useEffect } from 'react';
import {
  ArrowRight,
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Mail,
  ShieldCheck,
  Calendar,
  CheckCircle2,
  Video
} from 'lucide-react';
import { ConsultationForm } from './ConsultationForm';

interface ContactViewProps {
  onBack: () => void;
  onNavigateTools: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onBack, onNavigateTools }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'رزرو وقت و تماس با کلینیک زوج‌درمانی مهناز خوینی | تهران و آنلاین';
  }, []);

  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-24">
      {/* Top Bar */}
      <div className="bg-white border-b border-[#E5E0EA] sticky top-0 z-40">
        <div className="container-custom h-16 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-[#6D5AA8] hover:text-[#44386B] cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
            <span>بازگشت به صفحه اصلی</span>
          </button>

          <div className="flex items-center text-lg font-black text-[#44386B]" dir="ltr">
            <span>Z</span>
            <svg width="14" height="14" viewBox="0 0 32 29" className="inline-block mx-0.5 fill-[#8FAF9B]">
              <path d="M16 29 C16 29 0 18.5 0 8.8 C0 3.5 4 0 8.6 0 C11.8 0 14.4 1.8 16 4.6 C17.6 1.8 20.2 0 23.4 0 C28 0 32 3.5 32 8.8 C32 18.5 16 29 16 29 Z" />
            </svg>
            <svg width="14" height="14" viewBox="0 0 32 29" className="inline-block mx-0.5 fill-[#E8A58D]">
              <path d="M16 29 C16 29 0 18.5 0 8.8 C0 3.5 4 0 8.6 0 C11.8 0 14.4 1.8 16 4.6 C17.6 1.8 20.2 0 23.4 0 C28 0 32 3.5 32 8.8 C32 18.5 16 29 16 29 Z" />
            </svg>
            <span>jdarman.ir</span>
          </div>
        </div>
      </div>

      <div className="container-custom max-w-4xl pt-8 sm:pt-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#8e8a96] mb-6">
          <button onClick={onBack} className="hover:text-[#6D5AA8] cursor-pointer">
            صفحه اصلی
          </button>
          <span>/</span>
          <span className="text-[#6D5AA8] font-bold">تماس و نوبت‌دهی</span>
        </nav>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block bg-[#edf5f0] text-[#5e826b] text-xs font-black px-4 py-1.5 rounded-full mb-3 border border-[#8FAF9B]/30">
            پذیرش مراجعان جدید (حضوری و آنلاین)
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-[#44386B] mb-3">
            هماهنگی جلسه مشاوره با مهناز خوینی
          </h1>
          <p className="text-xs sm:text-base text-[#6F6B78] leading-relaxed">
            جلسات حضوری در کلینیک پیوند امن (تهران) و جلسات آنلاین برای مراجعان سراسر ایران و هموطنان خارج از کشور با هماهنگی قبلی برگزار می‌شود.
          </p>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <a
            href="https://wa.me/989199087264?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D9%86%D9%88%D8%A8%D8%AA%20%D9%85%D8%B4%D8%A7%D9%88%D8%B1%D9%87%20%D8%B2%D9%88%D8%AC%E2%80%8C%D8%AF%D8%B1%D9%85%D8%A7%D9%86%DB%8C%20%D9%BE%DB%8C%D8%A7%D9%85%20%D9%85%DB%8C%E2%80%8C%D8%AF%D9%87%D9%85."
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-white border border-[#E5E0EA] hover:border-[#6D5AA8] shadow-xs flex flex-col items-center text-center group transition-all"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#edf5f0] text-[#5e826b] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <MessageSquare className="w-6 h-6" />
            </div>
            <span className="text-xs text-[#6F6B78] font-bold mb-1">ارتباط در پیام‌رسان</span>
            <span className="text-sm font-black text-[#44386B]">واتساپ پذیرش</span>
            <span className="text-[11px] text-[#5e826b] mt-1 font-bold">پاسخگویی سریع</span>
          </a>

          <a
            href="tel:09199087264"
            className="p-5 rounded-2xl bg-white border border-[#E5E0EA] hover:border-[#6D5AA8] shadow-xs flex flex-col items-center text-center group transition-all"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#f2eff8] text-[#6D5AA8] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <span className="text-xs text-[#6F6B78] font-bold mb-1">تماس تلفنی مستقیم</span>
            <span className="text-sm font-black text-[#44386B]" dir="ltr">۰۹۱۹ ۹۰۸ ۷۲۶۴</span>
            <span className="text-[11px] text-[#6F6B78] mt-1">شنبه تا پنج‌شنبه ۹ تا ۲۱</span>
          </a>

          <div className="p-5 rounded-2xl bg-white border border-[#E5E0EA] shadow-xs flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] text-[#E8A58D] flex items-center justify-center mb-3">
              <Video className="w-6 h-6" />
            </div>
            <span className="text-xs text-[#6F6B78] font-bold mb-1">مشاوره خارج از کشور</span>
            <span className="text-sm font-black text-[#44386B]">آنلاین تصویری</span>
            <span className="text-[11px] text-[#6F6B78] mt-1">Google Meet / WhatsApp</span>
          </div>
        </div>

        {/* Location & Clinic Info */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E5E0EA] shadow-xs mb-10">
          <h2 className="text-base sm:text-lg font-black text-[#44386B] mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#E8A58D]" />
            <span>نشانی کلینیک تخصصی و ساعات کاری</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-[#6F6B78]">
            <div className="space-y-3">
              <p className="leading-relaxed">
                <strong>آدرس جلسات حضوری:</strong> تهران، منطقه ۲ (کلینیک تخصصی روان‌شناسی و مشاوره خانواده پیوند امن)
              </p>
              <p>
                <strong>دسترسی حمل‌ونقل:</strong> دسترسی آسان از طریق بزرگراه‌های یادگار امام، چمران و ایستگاه‌های مترو و بی‌آرتی منطقه ۲.
              </p>
              <p>
                <strong>پروانه رسمی نظام:</strong> ۱۴۱۴۰۸۳ (خانم مهناز خوینی، مسئول فنی)
              </p>
            </div>

            <div className="space-y-3 bg-[#FAF8F5] p-4 rounded-2xl border border-[#E5E0EA]">
              <p className="flex items-center gap-2 text-[#44386B] font-bold">
                <Clock className="w-4 h-4 text-[#6D5AA8]" />
                <span>ساعات کاری پذیرش کلینیک:</span>
              </p>
              <ul className="space-y-1 text-xs">
                <li>شنبه تا چهارشنبه: ۹:۰۰ صبح الی ۲۱:۰۰ شب</li>
                <li>پنج‌شنبه‌ها: ۹:۰۰ صبح الی ۱۸:۰۰ عصر</li>
                <li>جمعه‌ها و ایام تعطیل رسمی: پذیرش آنلاین با هماهنگی قبلی</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Embedded Consultation Form */}
        <ConsultationForm />
      </div>
    </div>
  );
};
