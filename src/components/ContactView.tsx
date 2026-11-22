import React, { useEffect } from 'react';
import { Phone, MessageSquare, MapPin, Clock, Video } from 'lucide-react';
import { InnerPageTopBar } from './InnerPageTopBar';
import { ConsultationForm } from './ConsultationForm';
import { StandaloneSeoGuide } from './StandaloneSeoGuide';

interface ContactViewProps {
  onBack: () => void;
  onNavigateTools: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onBack, onNavigateTools }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-[#F4F1EC] min-h-screen pb-24 text-[#292D2A]">
      <InnerPageTopBar
        onBack={onBack}
        backLabel="صفحه اصلی"
        onNavigateTools={onNavigateTools}
        maxWidthClass="max-w-4xl"
      />

      <div className="container-custom max-w-4xl pt-8 sm:pt-12">
        <nav aria-label="مسیر صفحه" className="flex items-center gap-2 text-xs text-[#6B6D67] mb-6">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onBack();
            }}
            className="hover:text-[#344A42] cursor-pointer"
          >
            صفحه اصلی
          </a>
          <span>/</span>
          <span className="text-[#344A42] font-semibold">تماس و نوبت‌دهی</span>
        </nav>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-semibold text-[#3D5E4E] mb-2">
            پذیرش مراجعان جدید · حضوری تهران و آنلاین
          </p>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#292D2A] mb-3">
            هماهنگی جلسه مشاوره با مهناز خوینی
          </h1>
          <p className="text-xs sm:text-base text-[#555650] leading-relaxed">
            جلسات حضوری در کلینیک پیوند امن (منطقه ۲ تهران) و جلسات آنلاین برای مراجعان سراسر ایران و خارج از کشور با هماهنگی قبلی برگزار می‌شود.
          </p>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <a
            href="https://wa.me/989199087264?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D9%87%D9%85%D8%A7%D9%87%D9%86%DA%AF%DB%8C%20%D9%86%D9%88%D8%A8%D8%AA%20%D9%85%D8%B4%D8%A7%D9%88%D8%B1%D9%87%20%D9%BE%DB%8C%D8%A7%D9%85%20%D9%85%DB%8C%E2%80%8C%D8%AF%D9%87%D9%85."
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl bg-[#FCFBF8] border border-[#E5E0D8] hover:border-[#344A42] flex flex-col items-center text-center transition-colors"
          >
            <div className="w-11 h-11 rounded-xl bg-[#EDF2EE] text-[#344A42] flex items-center justify-center mb-3">
              <MessageSquare className="w-5 h-5" />
            </div>
            <span className="text-xs text-[#6B6D67] font-medium mb-1">ارتباط در پیام‌رسان</span>
            <span className="text-sm font-bold text-[#292D2A]">واتساپ پذیرش</span>
            <span className="text-[11px] text-[#3D5E4E] mt-1 font-semibold">هماهنگی غیرحضوری و آنلاین</span>
          </a>

          <a
            href="tel:09199087264"
            className="p-5 rounded-xl bg-[#FCFBF8] border border-[#E5E0D8] hover:border-[#344A42] flex flex-col items-center text-center transition-colors"
          >
            <div className="w-11 h-11 rounded-xl bg-[#EDF2EE] text-[#344A42] flex items-center justify-center mb-3">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-xs text-[#6B6D67] font-medium mb-1">تماس تلفنی مستقیم</span>
            <span className="text-sm font-bold text-[#292D2A]" dir="ltr">۰۹۱۹ ۹۰۸ ۷۲۶۴</span>
            <span className="text-[11px] text-[#6B6D67] mt-1">شنبه تا پنج‌شنبه ۹ تا ۲۱</span>
          </a>

          <a
            href="tel:02144600980"
            className="p-5 rounded-xl bg-[#FCFBF8] border border-[#E5E0D8] hover:border-[#344A42] flex flex-col items-center text-center transition-colors"
          >
            <div className="w-11 h-11 rounded-xl bg-[#F4F1EC] text-[#344A42] flex items-center justify-center mb-3">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-xs text-[#6B6D67] font-medium mb-1">تلفن ثابت کلینیک</span>
            <span className="text-sm font-bold text-[#292D2A]" dir="ltr">۰۲۱ ۴۴۶۰۰۹۸۰</span>
            <span className="text-[11px] text-[#6B6D67] mt-1">پذیرش و هماهنگی وقت</span>
          </a>

          <div className="p-5 rounded-xl bg-[#FCFBF8] border border-[#E5E0D8] flex flex-col items-center text-center">
            <div className="w-11 h-11 rounded-xl bg-[#F4F1EC] text-[#9E563E] flex items-center justify-center mb-3">
              <Video className="w-5 h-5" />
            </div>
            <span className="text-xs text-[#6B6D67] font-medium mb-1">مشاوره خارج از کشور</span>
            <span className="text-sm font-bold text-[#292D2A]">آنلاین تصویری</span>
            <span className="text-[11px] text-[#6B6D67] mt-1">Google Meet / WhatsApp</span>
          </div>
        </div>

        {/* Location & Clinic Info */}
        <div className="bg-[#FCFBF8] p-6 sm:p-8 rounded-2xl border border-[#E5E0D8] mb-10">
          <h2 className="text-base sm:text-lg font-extrabold text-[#292D2A] mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#344A42]" />
            <span>نشانی کلینیک تخصصی و ساعات کاری</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-[#555650]">
            <div className="space-y-3 leading-relaxed">
              <p>
                <strong className="text-[#292D2A]">آدرس جلسات حضوری:</strong> تهران، منطقه ۲، محدوده صادقیه – پونک (کلینیک تخصصی روان‌شناسی و مشاوره خانواده{' '}
                <a
                  href="https://peyvandamn.ir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#344A42] font-semibold underline"
                >
                  پیوند امن
                </a>
                )
              </p>
              <p>
                <strong className="text-[#292D2A]">تلفن کلینیک:</strong>{' '}
                <a href="tel:02144600980" className="text-[#344A42] font-semibold underline" dir="ltr">
                  ۰۲۱ ۴۴۶۰۰۹۸۰
                </a>{' '}
                (شنبه تا پنج‌شنبه ۹ تا ۲۱)
              </p>
              <p>
                <strong className="text-[#292D2A]">دسترسی حمل‌ونقل:</strong> دسترسی آسان از طریق بزرگراه‌های یادگار امام، اشرفی اصفهانی، چمران و ایستگاه‌های مترو منطقه ۲.
              </p>
              <p>
                <strong className="text-[#292D2A]">پروانه رسمی نظام:</strong> ۱۴۱۴۰۸۳ (مهناز خوینی، مسئول فنی)
              </p>

              <div className="pt-2">
                <a
                  href="https://maps.app.goo.gl/P8KDPPDp9mQ6nEbWA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#344A42] hover:bg-[#273932] text-[#FCFBF8] text-xs font-semibold rounded-lg transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  <span>مسیریابی روی نقشه گوگل (Google Maps)</span>
                </a>
              </div>
            </div>

            <div className="space-y-3 bg-[#F4F1EC] p-5 rounded-xl border border-[#E5E0D8]">
              <p className="flex items-center gap-2 text-[#292D2A] font-bold">
                <Clock className="w-4 h-4 text-[#344A42]" />
                <span>ساعات کاری پذیرش کلینیک:</span>
              </p>
              <ul className="space-y-1.5 text-xs">
                <li>شنبه تا چهارشنبه: ۹:۰۰ صبح الی ۲۱:۰۰ شب</li>
                <li>پنج‌شنبه‌ها: ۹:۰۰ صبح الی ۱۸:۰۰ عصر</li>
                <li>جمعه‌ها و ایام تعطیل رسمی: پذیرش آنلاین با هماهنگی قبلی</li>
              </ul>
              <div className="pt-3 border-t border-[#E5E0D8] text-[11px] text-[#6B6D67]">
                آدرس دقیق و دستورالعمل ورود پس از هماهنگی نوبت در اختیار مراجع قرار می‌گیرد.
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Privacy-First Consultation Form */}
        <ConsultationForm />

        <StandaloneSeoGuide routeKey="contact" />
      </div>
    </div>
  );
};
