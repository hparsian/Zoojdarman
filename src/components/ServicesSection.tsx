import React from 'react';
import {
  CheckCircle2,
  ArrowLeft,
  HeartCrack,
  Scale,
  Globe,
  Users,
  Brain,
  ShieldCheck,
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (slug: string) => void;
  onNavigateServices?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onNavigateServices,
}) => {
  const secondaryServices = [
    {
      slug: 'divorce-counseling',
      kicker: 'تصمیم‌گیری آگاهانه',
      title: 'مشاوره طلاق و کاهش آسیب',
      desc: 'ارزیابی دقیق آخرین شانس‌های بقای رابطه، جدایی محترمانه و صیانت از سلامت روان فرزندان.',
      bullets: ['کاهش آسیب عاطفی بر کودکان', 'تصمیم منطقی بدون شتاب‌زدگی'],
      icon: Scale,
    },
    {
      slug: 'online-counseling',
      kicker: 'سراسر ایران و خارج کشور',
      title: 'مشاوره آنلاین زوج‌درمانی',
      desc: 'جلسات ویدئویی رمزنگاری‌شده با همان کیفیت بالینی کلینیک تهران و منطبق با اختلاف ساعت کشورها.',
      bullets: ['گوگل میت و واتساپ تصویری امن', 'مناسب ایرانیان اروپا، کانادا و آمریکا'],
      icon: Globe,
    },
    {
      slug: 'premarital-counseling',
      kicker: 'پیشگیری پیش از عقد',
      title: 'مشاوره پیش از ازدواج',
      desc: 'سنجش تناسب شخصیتی، خط قرمزهای مالی و خانوادگی و تحلیل تست‌های استاندارد پیش از تعهد دائم.',
      bullets: ['ارزیابی طرحواره‌ها و سازگاری', 'مرزبندی با خانواده‌های پدری'],
      icon: Users,
    },
    {
      slug: 'relationship-patterns-therapy',
      kicker: 'طرحواره‌درمانی رابطه',
      title: 'درمان تله‌های عاطفی تکراری',
      desc: 'شناخت و درمان ریشه‌ای الگوهای دلبستگی ناایمن، ترس از طردشدگی و انتخاب‌های آسیب‌زا در روابط.',
      bullets: ['خروج از چرخه روابط فرساینده', 'بازسازی عزت‌نفس و امنیت درونی'],
      icon: Brain,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#E8E2D8]" id="services">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-5">
          <div className="max-w-2xl">
            <span className="text-[11px] font-extrabold text-[#9E7D36] block mb-2">
              خدمات تخصصی بالینی کلینیک پیوند امن
            </span>
            <h2 className="balance-text text-2xl sm:text-4xl font-black text-[#241A35] leading-tight">
              حوزه‌های مداخله و پروتکل‌های درمان زوجین
            </h2>
            <p className="text-sm sm:text-base text-[#5E5868] mt-3 leading-relaxed">
              تمامی خدمات با تکیه بر رویکردهای اثبات‌شده دانشگاهی (EFT، گاتمن و طرحواره‌درمانی) برای مراجعان حضوری تهران و آنلاین جهانی ارائه می‌شود.
            </p>
          </div>

          <a
            href="/services"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigateServices) {
                onNavigateServices();
              } else {
                onSelectService('couples-therapy');
              }
            }}
            className="inline-flex items-center gap-2 text-xs font-black text-[#241A35] hover:text-[#3E2F5B] py-2.5 px-5 rounded-lg border border-[#E8E2D8] hover:border-[#C5A059] bg-[#FCFAF8] transition-colors cursor-pointer shrink-0 self-start md:self-end"
          >
            <span>آرشیو کامل خدمات درمانی</span>
            <ArrowLeft className="w-3.5 h-3.5 text-[#9E7D36]" />
          </a>
        </div>

        {/* Row 1: Asymmetric Bento (2-col Flagship + 1-col Infidelity) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Flagship Marquee Card */}
          <a
            href="/services/couples-therapy"
            onClick={(e) => {
              e.preventDefault();
              onSelectService('couples-therapy');
            }}
            className="lg:col-span-2 bg-[#241A35] hover:bg-[#2B1F3F] text-white rounded-2xl p-7 sm:p-9 border border-[#C5A059]/35 transition-colors flex flex-col justify-between group cursor-pointer"
          >
            <div className="mb-8">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-white/10 text-xs">
                <span className="font-extrabold text-[#C5A059]">
                  پروتکل محوری · رویکرد هیجان‌مدار (EFT)
                </span>
                <span className="inline-flex items-center gap-1.5 text-white/85 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>نظارت بالینی مهناز خوینی</span>
                </span>
              </div>

              <h3 className="text-xl sm:text-3xl font-black text-[#FAF5EB] mb-3.5 leading-snug">
                زوج درمان و زوج‌درمانی هیجان‌مدار (EFT)
              </h3>

              <p className="text-xs sm:text-sm text-[#E8E2D8] leading-[1.9] max-w-2xl text-justify mb-6">
                شکستن چرخه‌های فرسایشی دعوا و سکوت، توقف خشم‌های سطحی و رمزگشایی از نیازهای دلبستگی ناگفته. در این پروتکل ۸ تا ۱۲ جلسه‌ای، الگوی تعقیب‌کننده و گریزنده متوقف شده و امنیت عاطفی رابطه از پایه ترمیم می‌شود.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-white/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>حل تعارض‌های مالی، خانوادگی و زناشویی</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>ترمیم سردی عاطفی و طلاق خاموش</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-black text-[#C5A059]">
              <span>مشاهده پروتکل درمان، جلسات و رزرو نوبت</span>
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </div>
          </a>

          {/* High-Priority Clinical Card: Infidelity Counseling */}
          <a
            href="/services/infidelity-counseling"
            onClick={(e) => {
              e.preventDefault();
              onSelectService('infidelity-counseling');
            }}
            className="bg-[#FCFAF8] hover:bg-[#FAF5EB]/55 rounded-2xl p-7 border border-[#E8E2D8] hover:border-[#C5A059] transition-colors flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-[#E8E2D8]">
                <span className="text-[11px] font-extrabold text-[#9C381D]">
                  پروتکل ترومای رابطه
                </span>
                <HeartCrack className="w-5 h-5 text-[#D9846A]" />
              </div>

              <h3 className="text-lg sm:text-xl font-black text-[#241A35] mb-3 leading-snug group-hover:text-[#3E2F5B] transition-colors">
                مشاوره تخصصی درمان خیانت و بازسازی اعتماد
              </h3>

              <p className="text-xs text-[#5E5868] leading-[1.9] mb-5">
                مدیریت شوک اولیه کشف خیانت، پایان دادن به نشخوار ذهنی و اجرای پروتکل ۳ مرحله‌ای برای ترمیم تدریجی اعتماد آسیب‌دیده.
              </p>

              <ul className="space-y-2 text-xs text-[#231F2D] font-bold mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4E7A66] shrink-0" />
                  <span>تثبیت بحران بدون تصمیم شتاب‌زده</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4E7A66] shrink-0" />
                  <span>شفافیت اصولی و التیام زخم عاطفی</span>
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#E8E2D8] text-xs font-black text-[#3E2F5B]">
              <span>مطالعه پروتکل ۳ مرحله‌ای</span>
              <ArrowLeft className="w-4 h-4 text-[#9E7D36] group-hover:-translate-x-1 transition-transform" />
            </div>
          </a>
        </div>

        {/* Row 2: All 4 Remaining Services in Balanced Architectural Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {secondaryServices.map((srv) => {
            const Icon = srv.icon;
            return (
              <a
                key={srv.slug}
                href={`/services/${srv.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectService(srv.slug);
                }}
                className="bg-[#FCFAF8] hover:bg-white rounded-2xl p-6 border border-[#E8E2D8] hover:border-[#3E2F5B]/45 transition-colors flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-[#EFEAE0]">
                    <span className="text-[11px] font-extrabold text-[#9E7D36]">
                      {srv.kicker}
                    </span>
                    <Icon className="w-4 h-4 text-[#3E2F5B]" />
                  </div>

                  <h3 className="text-base font-black text-[#241A35] mb-2 leading-snug group-hover:text-[#3E2F5B] transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-xs text-[#5E5868] leading-relaxed mb-4">
                    {srv.desc}
                  </p>

                  <ul className="space-y-1.5 text-[11px] text-[#231F2D] font-bold mb-5">
                    {srv.bullets.map((b, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#4E7A66] shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[#EFEAE0] text-xs font-black text-[#3E2F5B]">
                  <span>جزئیات خدمت</span>
                  <ArrowLeft className="w-3.5 h-3.5 text-[#9E7D36] group-hover:-translate-x-1 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
