import React from 'react';
import { ShieldCheck, Lock, Scale, HeartHandshake } from 'lucide-react';

interface TrustSafetySectionProps {
  onNavigatePrivacy?: () => void;
}

const SAFETY_PILLARS = [
  {
    icon: <Lock className="w-5 h-5 text-[#344A42]" />,
    title: 'محرمانگی حرفه‌ای مطابق منشور نظام روان‌شناسی',
    desc: 'تمامی گفت‌وگوها و سوابق مراجعان تحت اصول اخلاقی سازمان نظام روان‌شناسی (پروانه ۱۴۱۴۰۸۳) محفوظ می‌ماند و بدون رضایت صریح هیچ اطلاعاتی افشا نمی‌شود (جز در موارد استثنای قانونی و خطر جانی فوری).',
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-[#344A42]" />,
    title: 'عدم ضبط صدا و تصویر در جلسات آنلاین',
    desc: 'جلسات تصویری در بسترهای رمزنگاری‌شده برگزار می‌شوند و هیچ‌گونه ضبط صوتی یا تصویری از فضای امن درمان انجام نمی‌گیرد.',
  },
  {
    icon: <Scale className="w-5 h-5 text-[#344A42]" />,
    title: 'بی‌طرفی حرفه‌ای و نبود جانب‌داری',
    desc: 'درمانگر قاضی نیست و طرف هیچ‌یک از زوجین را نمی‌گیرد؛ هم‌ترازی حرفه‌ای به گونه‌ای است که هر دو نفر احساس امنیت و انصاف داشته باشند.',
  },
  {
    icon: <HeartHandshake className="w-5 h-5 text-[#344A42]" />,
    title: 'شروع بدون فشار و تصمیم‌گیری آگاهانه',
    desc: 'هدف تحمیل یک نسخه از پیش آماده برای ماندن یا جدا شدن نیست؛ بلکه کمک به شما برای دیدن واقعیت رابطه و انتخاب مسیری با کمترین آسیب است.',
  },
];

export const TrustSafetySection: React.FC<TrustSafetySectionProps> = ({
  onNavigatePrivacy,
}) => {
  return (
    <section id="trust-safety" className="py-16 sm:py-20 bg-[#EDF2EE] border-b border-[#D3E0D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-[#3D5E4E] mb-2">
              امنیت روانی و اخلاق حرفه‌ای
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#292D2A] leading-snug mb-2">
              چرا می‌توانید با آرامش خاطر گفت‌وگو را آغاز کنید؟
            </h2>
            <p className="text-sm text-[#555650] leading-relaxed">
              حفاظت از حریم خصوصی، شأن انسانی و مرزهای اخلاقی، شرط اول هر مداخله مؤثر در زوج‌درمانی است.
            </p>
          </div>

          {onNavigatePrivacy && (
            <button
              type="button"
              onClick={onNavigatePrivacy}
              className="text-xs sm:text-sm font-semibold text-[#344A42] hover:underline self-start md:self-auto cursor-pointer whitespace-nowrap"
            >
              مطالعه منشور حریم خصوصی سایت
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SAFETY_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-[#FCFBF8] border border-[#D3E0D7] rounded-xl p-6"
            >
              <div className="w-10 h-10 rounded-lg bg-[#EDF2EE] flex items-center justify-center mb-4">
                {pillar.icon}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-[#292D2A] mb-2 leading-snug">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#555650] leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
