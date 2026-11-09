import React, { useState } from 'react';
import {
  ShieldCheck,
  Award,
  Star,
  CheckCircle2,
  Code2,
  Search,
  Building2,
  UserCheck,
  Globe,
  Sparkles,
  ExternalLink,
  ChevronLeft,
  Copy,
  Check
} from 'lucide-react';

export interface SeoCertificationSummaryCardProps {
  className?: string;
  compact?: boolean;
}

export const SeoCertificationSummaryCard: React.FC<SeoCertificationSummaryCardProps> = ({
  className = '',
  compact = false,
}) => {
  const [activeTab, setActiveTab] = useState<'badge' | 'serp' | 'schema'>('badge');
  const [copied, setCopied] = useState(false);

  const jsonLdSnippet = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Psychologist",
        "@id": "https://zoojdarman.ir/#therapist",
        "name": "مهناز خوینی",
        "jobTitle": "زوج درمانگر بالینی و مسئول فنی کلینیک پیوند امن",
        "identifier": "1414083",
        "description": "کارشناس ارشد روانشناسی بالینی، متخصص زوج درمان با رویکرد هیجان‌مدار (EFT)، پروانه ۱۴۱۴۰۸۳ نظام روانشناسی",
        "memberOf": {
          "@type": "Organization",
          "name": "سازمان نظام روان‌شناسی و مشاوره جمهوری اسلامی ایران",
          "url": "https://pcoiran.ir"
        },
        "award": "بیش از ۱۵,۰۰0 ساعت مشاوره بالینی تخصصی زوجین",
        "telephone": "+989199087264",
        "hasMap": "https://maps.app.goo.gl/P8KDPPDp9mQ6nEbWA",
        "sameAs": [
          "https://maps.app.goo.gl/P8KDPPDp9mQ6nEbWA",
          "https://peyvandamn.ir"
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "فلکه دوم صادقیه، بزرگراه اشرفی اصفهانی",
          "addressLocality": "تهران",
          "addressRegion": "منطقه ۲",
          "addressCountry": "IR"
        }
      },
      {
        "@type": "MedicalBusiness",
        "@id": "https://zoojdarman.ir/#clinic",
        "name": "مرکز تخصصی زوج درمان مهناز خوینی (کلینیک پیوند امن)",
        "url": "https://zoojdarman.ir",
        "hasMap": "https://maps.app.goo.gl/P8KDPPDp9mQ6nEbWA",
        "medicalSpecialty": "Psychological",
        "priceRange": "$$",
        "currenciesAccepted": "IRR, USD, EUR, CAD, GBP, AED",
        "paymentAccepted": "کارت‌خوان (POS)، وجه نقد، کارت به کارت شتابی، واریز بانکی آنلاین، پی‌پال (PayPal)، وایز (Wise)، کردیت‌کارت بین‌المللی، ارز دیجیتال تتر (USDT)، پذیرش فاکتور بیمه تکمیلی",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "کاتالوگ خدمات و تعرفه‌های مرکز زوج درمان مهناز خوینی",
          "itemListElement": [
            {
              "@type": "Offer",
              "name": "زوج‌درمانی تخصصی حضوری و آنلاین (EFT)",
              "priceCurrency": "IRR",
              "availability": "https://schema.org/InStock"
            },
            {
              "@type": "Offer",
              "name": "مشاوره آنلاین خیانت زناشویی",
              "priceCurrency": "IRR",
              "availability": "https://schema.org/InStock"
            },
            {
              "@type": "Offer",
              "name": "مشاوره آنلاین بین‌المللی خارج از کشور",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          ]
        },
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "پروانه اشتغال تخصصی روانشناسی بالینی و زوج‌درمانی ۱۴۱۴۰۸۳",
            "recognizedBy": {
              "@type": "Organization",
              "name": "سازمان نظام روان‌شناسی و مشاوره"
            }
          }
        ],
        "amenityFeature": [
          {
            "@type": "LocationFeatureSpecification",
            "name": "اتاق‌های مشاوره عایق صدا و آکوستیک جهت رازداری ۱۰۰٪",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "دسترسی آسان با آسانسور و رمپ توان‌یاب (Wheelchair Accessible)",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "وای‌فای رایگان و سالن انتظار مجهز با پذیرایی",
            "value": true
          }
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"],
            "opens": "09:00",
            "closes": "21:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Thursday"],
            "opens": "09:00",
            "closes": "19:00"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "348",
          "bestRating": "5",
          "worstRating": "1"
        }
      }
    ]
  };

  const copyJsonLd = () => {
    navigator.clipboard.writeText(JSON.stringify(jsonLdSnippet, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`rounded-3xl bg-gradient-to-br from-[#2A1E35] via-[#22182B] to-[#1A1222] text-white p-6 sm:p-8 border border-[#C5A059]/30 shadow-2xl relative overflow-hidden ${className}`}
    >
      {/* Background glow effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#6D5AA8]/15 rounded-full blur-3xl pointer-events-none translate-x-1/2 translate-y-1/2" />

      {/* Header bar */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-5">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-[#C5A059]/15 border border-[#C5A059]/40 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6 text-[#C5A059]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 bg-[#3E6B56]/40 border border-[#3E6B56] text-emerald-300 text-[10px] font-mono px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Schema.org Verified
              </span>
              <span className="text-xs text-[#C5A059] font-mono font-bold">پروانه ۱۴۱۴۰۸۳</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white mt-1">
              کارت اعتبار سنجی رسمی و نشان نتایج غنی (Rich Snippet)
            </h3>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center bg-white/5 border border-white/10 rounded-2xl p-1 gap-1">
          <button
            onClick={() => setActiveTab('badge')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'badge'
                ? 'bg-[#C5A059] text-[#2A1E35] shadow-lg'
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>پروانه و صلاحیت</span>
          </button>
          <button
            onClick={() => setActiveTab('serp')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'serp'
                ? 'bg-[#C5A059] text-[#2A1E35] shadow-lg'
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>نمایش در گوگل</span>
          </button>
          <button
            onClick={() => setActiveTab('schema')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'schema'
                ? 'bg-[#C5A059] text-[#2A1E35] shadow-lg'
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>کد JSON-LD</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Official Credentials Badge View */}
      {activeTab === 'badge' && (
        <div className="relative z-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* PCOIRAN License Card */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C5A059]/50 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#C5A059]/20 flex items-center justify-center text-[#C5A059]">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-md">
                    اعتبارسنجی شده
                  </span>
                </div>
                <div className="text-xs text-[#C5A059] font-bold mb-1">سازمان نظام روانشناسی ایران</div>
                <div className="text-base font-black text-white mb-2">پروانه اشتغال ۱۴۱۴۰۸۳</div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  دارای مجوز رسمی مشاوره تخصصی زوجین و مسئول فنی کلینیک پیوند امن در تهران
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
                <span>مرجع صادرکننده:</span>
                <span className="text-white font-medium">pcoiran.ir</span>
              </div>
            </div>

            {/* Structured Schema Rating & Hours Card */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C5A059]/50 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#C5A059]/20 flex items-center justify-center text-[#C5A059]">
                    <Star className="w-5 h-5 fill-[#C5A059]" />
                  </div>
                  <span className="text-[10px] font-mono text-amber-300 bg-amber-950/60 border border-amber-500/30 px-2 py-0.5 rounded-md">
                    AggregateRating 4.9/5
                  </span>
                </div>
                <div className="text-xs text-[#C5A059] font-bold mb-1">رضایت مراجعان (Schema Aggregate)</div>
                <div className="text-base font-black text-white mb-2">۴.۹ از ۵ (۳۴۸ ثبت دیدگاه)</div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  بر اساس ارزیابی‌های ثبت‌شده بالینی و انجام بیش از ۱۵,۰۰۰ ساعت مشاوره تخصصی زوجین
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
                <span>ساعات مشاوره بالینی:</span>
                <span className="text-amber-300 font-bold font-mono">15,000+ Hours</span>
              </div>
            </div>

            {/* Clinic & Location Schema Card */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C5A059]/50 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#C5A059]/20 flex items-center justify-center text-[#C5A059]">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-purple-300 bg-purple-950/60 border border-purple-500/30 px-2 py-0.5 rounded-md">
                    MedicalBusiness
                  </span>
                </div>
                <div className="text-xs text-[#C5A059] font-bold mb-1">موقعیت و شیوه برگزاری</div>
                <div className="text-base font-black text-white mb-2">تهران، کرج و آنلاین سراسری</div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  حضوری: تهران (فلکه دوم صادقیه، اشرفی اصفهانی) | آنلاین: اصفهان، کرمان، شیراز، مشهد و خارج کشور
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
                <span>رویکرد تخصصی:</span>
                <span className="text-emerald-300 font-bold">EFT هیجان‌مدار</span>
              </div>
            </div>
          </div>

          {/* Core Credentials Summary Pill List */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
              <span className="font-bold text-white">کلیدواژه‌های تاییدشده بالینی:</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-lg bg-white/10 text-gray-200 border border-white/10">
                زوج درمان خوب در تهران
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/10 text-gray-200 border border-white/10">
                زوج درمانگر آنلاین
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/10 text-gray-200 border border-white/10">
                مشاوره خیانت
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/10 text-gray-200 border border-white/10">
                تست زوج درمانی
              </span>
              <span className="px-3 py-1 rounded-lg bg-[#C5A059]/20 text-[#C5A059] border border-[#C5A059]/40 font-bold">
                پروانه رسمی ۱۴۱۴۰۸۳
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Interactive SERP Enriched Snippet Simulator */}
      {activeTab === 'serp' && (
        <div className="relative z-10 space-y-4">
          <div className="text-xs text-gray-400 mb-2 flex items-center justify-between">
            <span>پیش‌نمایش زنده نحوه نمایش کلینیک در صفحه نتایج موتور جستجوی گوگل (Google SERP):</span>
            <span className="text-[#C5A059] font-mono">Google Rich Result Preview</span>
          </div>

          {/* Google SERP Card Container */}
          <div className="p-5 rounded-2xl bg-white text-[#202124] shadow-xl border border-gray-200 text-right dir-rtl">
            {/* Website URL & Favicon */}
            <div className="flex items-center gap-2 mb-1.5 text-xs text-[#202124]">
              <div className="w-5 h-5 rounded-full bg-[#6D5AA8] text-white flex items-center justify-center font-bold text-[10px]">
                Z
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[#202124] text-xs">مرکز تخصصی زوج درمان مهناز خوینی</span>
                <span className="text-[11px] text-[#5f6368] dir-ltr text-right">https://zoojdarman.ir</span>
              </div>
            </div>

            {/* Clickable Title */}
            <h4 className="text-base sm:text-lg text-[#1a0dab] font-medium hover:underline cursor-pointer mb-1 leading-snug">
              مرکز تخصصی زوج درمان | مهناز خوینی زوج درمان گر (پروانه ۱۴۱۴۰۸۳)
            </h4>

            {/* Star Rating Badge (Rich Snippet) */}
            <div className="flex items-center gap-2 text-xs text-[#70757a] mb-2">
              <div className="flex items-center text-[#fbbc04]">
                {'★'.repeat(5)}
              </div>
              <span className="font-bold text-[#202124]">4.9</span>
              <span>(۳۴۸ رای)</span>
              <span>•</span>
              <span className="text-[#1a73e8]">روانشناس بالینی و زوج‌درمانگر</span>
            </div>

            {/* Description Snippet */}
            <p className="text-xs sm:text-sm text-[#4d5156] leading-relaxed mb-3">
              مرکز تخصصی زوج درمان و زوج درمانی، زوج درمان خوب در تهران و کرج، زوج درمان گر آنلاین برای اصفهان، کرمان، شیراز و مشهد با مهناز خوینی (پروانه ۱۴۱۴۰۸۳). حل تعارضات زناشویی، درمان خیانت، طلاق عاطفی و تست آنلاین سلامت رابطه.
            </p>

            {/* Sitelinks Grid (Navigation Elements) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3 border-t border-gray-100">
              <div className="p-2 rounded-lg hover:bg-gray-50 border border-gray-100">
                <div className="text-xs text-[#1a0dab] font-bold hover:underline cursor-pointer">
                  زوج درمانگر در تهران (جلسات حضوری)
                </div>
                <div className="text-[11px] text-[#5f6368] line-clamp-1">
                  جلسات تخصصی زوج درمانی حضوری در کلینیک غرب تهران با مهناز خوینی
                </div>
              </div>

              <div className="p-2 rounded-lg hover:bg-gray-50 border border-gray-100">
                <div className="text-xs text-[#1a0dab] font-bold hover:underline cursor-pointer">
                  مشاوره آنلاین خیانت زناشویی
                </div>
                <div className="text-[11px] text-[#5f6368] line-clamp-1">
                  مدیریت شوک خیانت، ترمیم اعتماد و تصمیم‌گیری آگاهانه آنلاین
                </div>
              </div>

              <div className="p-2 rounded-lg hover:bg-gray-50 border border-gray-100">
                <div className="text-xs text-[#1a0dab] font-bold hover:underline cursor-pointer">
                  تست زوج درمانی آنلاین (رایگان)
                </div>
                <div className="text-[11px] text-[#5f6368] line-clamp-1">
                  خودسنجی آنلاین انریچ، ترومای خیانت، سبک دلبستگی و ۵ زبان عشق
                </div>
              </div>

              <div className="p-2 rounded-lg hover:bg-gray-50 border border-gray-100">
                <div className="text-xs text-[#1a0dab] font-bold hover:underline cursor-pointer">
                  تعرفه و هزینه جلسات ۱۴۰۴
                </div>
                <div className="text-[11px] text-[#5f6368] line-clamp-1">
                  تعرفه مصوب نظام روانشناسی، بیمه تکمیلی و ماشین‌حساب تخمین
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Schema JSON-LD Code Viewer */}
      {activeTab === 'schema' && (
        <div className="relative z-10 space-y-3">
          <div className="flex items-center justify-between text-xs text-gray-300">
            <span>داده‌های ساختاریافته تزریق‌شده در هدر صفحات (JSON-LD Microdata):</span>
            <button
              onClick={copyJsonLd}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-[11px] transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">کپی شد</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>کپی JSON-LD</span>
                </>
              )}
            </button>
          </div>

          <pre className="p-4 rounded-2xl bg-[#120B18] border border-white/10 text-emerald-300 text-[11px] font-mono overflow-x-auto max-h-72 text-left dir-ltr leading-relaxed">
            {JSON.stringify(jsonLdSnippet, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};
