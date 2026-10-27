import React from 'react';
import { MessageSquare, HeartCrack, Scale, Globe, Users, Brain, CheckCircle, ArrowLeft } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (slug: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const serviceList = [
    {
      slug: 'couples-therapy',
      title: 'زوج‌درمانی و دلبستگی (EFT)',
      icon: MessageSquare,
      desc: 'شکستن چرخه‌های تکراری دعوا، توقف خشم و سرزنش، و ایجاد گفتگوی امن و سازنده بین همسران.',
      points: ['حل مشاجرات مالی و خانوادگی', 'رهایی از تله‌های ارتباطی'],
    },
    {
      slug: 'infidelity-counseling',
      title: 'مشاوره تخصصی درمان خیانت',
      icon: HeartCrack,
      desc: 'مدیریت ترومای کشف خیانت، شفافیت رادیکال و بازسازی گام‌به‌گام اعتماد آسیب‌دیده با اصول علمی.',
      points: ['گذر از شوک اولیه و تصمیم‌گیری', 'التیام زخم‌های عمیق عاطفی'],
    },
    {
      slug: 'divorce-counseling',
      title: 'مشاوره طلاق آگاهانه و کاهش آسیب',
      icon: Scale,
      desc: 'ارزیابی قطعی بودن تصمیم جدایی، کاهش آسیب‌های روانی بر فرزندان و مدیریت بحران عاطفی طلاق.',
      points: ['صیانت از روان فرزندان در طلاق', 'خروج محترمانه بدون کینه'],
    },
    {
      slug: 'online-counseling',
      title: 'مشاوره آنلاین برای خارج از کشور',
      icon: Globe,
      desc: 'جلسات تخصصی زوج‌درمانی آنلاین با استانداردهای بالینی برای هموطنان خارج از کشور و سایر شهرها.',
      points: ['هماهنگی با مناطق زمانی مختلف', 'همان اثربخشی جلسات حضوری'],
    },
    {
      slug: 'premarital-counseling',
      title: 'مشاوره پیش از ازدواج و تست‌ها',
      icon: Users,
      desc: 'سنجش تناسب شخصیت و طرحواره‌ها، بررسی خط قرمزها و پیشگیری از تعارضات با تست‌های معتبر روان‌سنجی.',
      points: ['تست‌های معتبر روان‌سنجی', 'بررسی مرزهای خانواده مبدأ'],
    },
    {
      slug: 'relationship-patterns-therapy',
      title: 'طرحواره‌درمانی روابط عاطفی',
      icon: Brain,
      desc: 'شناسایی تله‌های زندگی (رهاشدگی، اطاعت، بی‌اعتمادی) و نقش آن‌ها در انتخاب پارتنر و شکست‌های مکرر.',
      points: ['شناسایی ریشه رفتارهای ناخودآگاه', 'تعدیل واکنش‌های انفجاری'],
    },
  ];

  return (
    <section className="py-20 bg-[#FAF8F5]" id="services">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs font-black bg-[#f2eff8] text-[#6D5AA8] px-4 py-1.5 rounded-full border border-[#E5E0EA] mb-4">
            <span>خدمات تخصصی بالینی</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#44386B] mb-3">
            حوزه‌های درمان و مشاوره رابطه
          </h2>
          <p className="text-sm sm:text-base text-[#6F6B78] leading-relaxed">
            پروتکل‌های درمانی مبتنی بر شواهد علمی برای بازگشت امنیت و صمیمیت به کانون خانواده.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {serviceList.map((service) => {
            const IconComponent = service.icon;
            return (
              <article
                key={service.slug}
                className="bg-white rounded-3xl p-7 border border-[#E5E0EA] hover:border-[#8b79c4] shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#f2eff8] group-hover:bg-[#6D5AA8] text-[#6D5AA8] group-hover:text-white flex items-center justify-center text-xl mb-5 transition-colors shadow-xs">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-[#44386B] mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6F6B78] leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <ul className="flex flex-col gap-2 mb-6">
                    {service.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2 text-xs font-bold text-[#292733]">
                        <CheckCircle className="w-3.5 h-3.5 text-[#5e826b] shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onSelectService(service.slug)}
                  className="inline-flex items-center gap-1.5 text-xs font-black text-[#6D5AA8] group-hover:text-[#44386B] pt-4 border-t border-[#E5E0EA] hover:gap-2.5 transition-all text-right cursor-pointer"
                >
                  <span>مطالعه پروتکل درمان و رزرو نوبت</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
