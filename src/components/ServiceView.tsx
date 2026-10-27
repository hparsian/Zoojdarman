import React, { useEffect } from 'react';
import { ServiceItem } from '../types';
import { registerFaqSchema } from '../seo';
import { ArrowRight, MessageSquare, CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';

interface ServiceViewProps {
  service: ServiceItem;
  onBack: () => void;
}

export const ServiceView: React.FC<ServiceViewProps> = ({ service, onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [service]);

  // داده‌های ساختاریافته پرسش‌وپاسخ خدمت (JSON-LD)
  useEffect(() => registerFaqSchema(service.faqs), [service]);

  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-24">
      {/* Top Bar */}
      <div className="bg-white border-b border-[#E5E0EA] sticky top-0 z-40">
        <div className="container-custom h-16 flex items-center justify-between">
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); onBack(); }}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-[#6D5AA8] hover:text-[#44386B] cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
            <span>بازگشت به خدمات و صفحه اصلی</span>
          </a>

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
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-[#8e8a96] mb-6">
          <a href="/" onClick={(e) => { e.preventDefault(); onBack(); }} className="hover:text-[#6D5AA8] cursor-pointer">صفحه اصلی</a>
          <span>/</span>
          <a href="/services" onClick={(e) => { e.preventDefault(); onBack(); }} className="hover:text-[#6D5AA8] cursor-pointer">خدمات تخصصی</a>
          <span>/</span>
          <span className="text-[#6D5AA8] font-bold">{service.title}</span>
        </nav>

        {/* Top Tag */}
        <span className="inline-block bg-[#edf5f0] text-[#5e826b] text-xs font-black px-3.5 py-1.5 rounded-full mb-4 border border-[#8FAF9B]/30">
          پروتکل تخصصی بالینی
        </span>

        {/* H1 Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#44386B] leading-[1.35] mb-6">
          {service.h1 || service.title}
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base text-[#6F6B78] leading-relaxed mb-8 text-justify">
          {service.description}
        </p>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
          <div className="bg-white p-4 rounded-2xl border border-[#E5E0EA] flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#5e826b] shrink-0" />
            <span className="text-xs font-bold text-[#292733]">پروانه نظام روان‌شناسی ۱۴۱۴۰۸۳</span>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-[#E5E0EA] flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#6D5AA8] shrink-0" />
            <span className="text-xs font-bold text-[#292733]">جلسات حضوری تهران و آنلاین</span>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-[#E5E0EA] flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#E8A58D] shrink-0" />
            <span className="text-xs font-bold text-[#292733]">پروتکل استاندارد EFT و گاتمن</span>
          </div>
        </div>

        {/* Service Rendered Body */}
        <article className="bg-white rounded-3xl p-6 sm:p-12 border border-[#E5E0EA] shadow-xs mb-10">
          <div
            className="article-rendered-content"
            dangerouslySetInnerHTML={{ __html: service.bodyHtml }}
          />
        </article>

        {/* FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E5E0EA] shadow-xs mb-10">
            <h2 className="text-xl font-black text-[#44386B] mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#6D5AA8]" />
              <span>سوالات متداول مراجعان این حوزه</span>
            </h2>
            <div className="flex flex-col gap-4">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="bg-[#FAF8F5] rounded-2xl p-5 border border-[#E5E0EA]">
                  <h3 className="text-sm font-black text-[#292733] mb-2">{faq.q}</h3>
                  <p className="text-xs sm:text-sm text-[#6F6B78] leading-relaxed text-justify">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Service CTA */}
        <div className="bg-gradient-to-br from-[#FAF8F5] to-[#f2eff8] border border-[#6D5AA8]/30 rounded-3xl p-8 sm:p-10 mb-10 text-center">
          <h3 className="text-xl font-black text-[#44386B] mb-3">
            آماده شروع جلسات تخصصی {service.title} هستید؟
          </h3>
          <p className="text-xs sm:text-sm text-[#6F6B78] max-w-xl mx-auto mb-6 leading-relaxed">
            برای دریافت اولین وقت مشاوره حضوری یا آنلاین با مهناز خوینی، در پیام‌رسان واتساپ با ما در ارتباط باشید.
          </p>
          <a
            href={`https://wa.me/989199087264?text=${encodeURIComponent(
              `سلام، مایل به رزرو نوبت مشاوره برای خدمت «${service.title}» هستم.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#6D5AA8] hover:bg-[#44386B] text-white text-xs sm:text-sm font-black px-8 py-3.5 rounded-full shadow-md transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>رزرو وقت در واتساپ (۰۹۱۹۹۰۸۷۲۶۴)</span>
          </a>
        </div>

        {/* Author Bio Box */}
        <div className="bg-white rounded-2xl p-6 border border-[#E5E0EA] flex items-center gap-4 shadow-xs">
          <img
            src="/images/mahnaz-khoini-thumb.webp"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/images/mahnaz-khoini.jpg';
            }}
            alt="مهناز خوینی"
            width={617}
            height={775}
            loading="lazy"
            decoding="async"
            className="w-16 h-16 rounded-full object-cover shrink-0 border-2 border-[#6D5AA8]"
          />
          <div>
            <h4 className="text-sm font-black text-[#292733] mb-1">مهناز خوینی</h4>
            <p className="text-xs text-[#6F6B78] leading-relaxed">
              کارشناس ارشد روان‌شناسی بالینی و مسئول فنی کلینیک پیوند امن | پروانه ۱۴۱۴۰۸۳
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
