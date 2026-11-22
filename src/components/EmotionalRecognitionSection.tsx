import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface EmotionalRecognitionSectionProps {
  onSelectService?: (slug: string) => void;
  onSelectArticle?: (slug: string) => void;
}

const RECOGNITION_SITUATIONS = [
  {
    id: 'loops',
    quote: 'هر بحث کوچکی به مشاجره تکراری یا سکوت چندروزه ختم می‌شود.',
    reflection: 'چرخه‌های تکراری تعارض معمولاً نشانه بی‌علاقگی نیستند؛ بلکه تلاش نافرجام دو طرف برای دیده‌شدن زیر فشار ترس و خستگی است.',
    actionLabel: 'آشنایی با زوج‌درمانی EFT',
    targetType: 'service' as const,
    slug: 'couples-therapy',
  },
  {
    id: 'distance',
    quote: 'زیر یک سقف زندگی می‌کنیم، اما احساس تنهایی و غریبگی عمیقی داریم.',
    reflection: 'وقتی گفت‌وگو فقط به کارهای روزمره محدود می‌شود، پیوند عاطفی به‌آرامی خاموش می‌شود و جای خود را به «طلاق عاطفی» می‌دهد.',
    actionLabel: 'مطالعه درباره طلاق عاطفی',
    targetType: 'article' as const,
    slug: 'emotional-divorce',
  },
  {
    id: 'trust',
    quote: 'پس از شکستن اعتماد یا خیانت، ذهنم مدام درگیر شک و اضطراب است.',
    reflection: 'در شوک اولیه، عجله برای تصمیم‌گیری می‌تواند زخم را عمیق‌تر کند. ابتدا باید طوفان هیجانی مهار شود و مرزهای شفاف شکل بگیرد.',
    actionLabel: 'مسیر تخصصی ترمیم پس از خیانت',
    targetType: 'service' as const,
    slug: 'infidelity-counseling',
  },
  {
    id: 'crossroads',
    quote: 'بین ماندن و جدا شدن مردد هستیم و از پشیمانی یا آسیب به فرزندان می‌ترسیم.',
    reflection: 'تصمیم‌های بزرگ نیازمند فضای بی‌طرف برای تفکیک خشم مقطعی از ناهمسویی بنیادین است، نه فشار اطرافیان.',
    actionLabel: 'مشاوره تصمیم‌گیری آگاهانه',
    targetType: 'service' as const,
    slug: 'divorce-counseling',
  },
  {
    id: 'unheard',
    quote: 'حس می‌کنم هرچه تلاش می‌کنم، همسرم منظور و نیاز واقعی من را نمی‌فهمد.',
    reflection: 'بیشتر زوج‌ها زبان شنیدن یکدیگر را نه از سر لجبازی، بلکه به دلیل تفاوت سبک‌های دلبستگی و شیوه‌های ابراز محبت گم کرده‌اند.',
    actionLabel: 'شناخت سبک‌های دلبستگی',
    targetType: 'article' as const,
    slug: 'attachment-style-in-marriage',
  },
  {
    id: 'migration',
    quote: 'دوری از خانواده یا فشارهای زندگی خارج از کشور ما را فرسوده کرده است.',
    reflection: 'تغییر محیط و فشار مضاعف مهاجرت می‌تواند تکیه‌گاه رابطه را دچار لرزش کند؛ گفت‌وگو با درمانگر هم‌زبان این بار را سبک‌تر می‌سازد.',
    actionLabel: 'جلسات آنلاین بین‌المللی',
    targetType: 'service' as const,
    slug: 'online-counseling',
  },
  {
    id: 'premarital',
    quote: 'قصد ازدواج داریم اما نگران تفاوت‌های جدی قبل از عقد هستیم.',
    reflection: 'پرسش‌های بی‌پاسخِ پیش از عقد پس از ازدواج ناپدید نمی‌شوند. ارزیابی دقیق به جای هیجان‌زدگی، جلوی هزینه‌های سنگین بعدی را می‌گیرد.',
    actionLabel: 'ارزیابی تخصصی پیش از ازدواج',
    targetType: 'service' as const,
    slug: 'premarital-counseling',
  },
  {
    id: 'patterns',
    quote: 'احساس می‌کنم در روابط عاطفی همیشه یک الگوی آسیب‌زای مشابه تکرار می‌شود.',
    reflection: 'شناخت طرحواره‌های پنهان و تمرین مرزبندی سالم کمک می‌کند از چرخه انتخاب‌های تکراری و روابط فرساینده خارج شوید.',
    actionLabel: 'کار روی الگوهای تکراری',
    targetType: 'service' as const,
    slug: 'relationship-patterns-therapy',
  },
];

export const EmotionalRecognitionSection: React.FC<EmotionalRecognitionSectionProps> = ({
  onSelectService,
  onSelectArticle,
}) => {
  const handleItemClick = (item: typeof RECOGNITION_SITUATIONS[number]) => {
    if (item.targetType === 'service' && onSelectService) {
      onSelectService(item.slug);
    } else if (item.targetType === 'article' && onSelectArticle) {
      onSelectArticle(item.slug);
    }
  };

  return (
    <section id="recognition" className="py-16 sm:py-24 bg-[#FCFBF8] border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold text-[#3D5E4E] mb-2">
            نقطه شروع مشترک بسیاری از مراجعان
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#292D2A] leading-snug mb-3">
            آیا شما هم یکی از این تجربه‌ها را دارید؟
          </h2>
          <p className="text-sm sm:text-base text-[#555650] leading-relaxed">
            آنچه در تنهایی رابطه‌تان سنگین به نظر می‌رسد، یک وضعیت شناخته‌شده و قابل بررسی است.
            هر مورد شما را به مسیر مرتبط هدایت می‌کند.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {RECOGNITION_SITUATIONS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleItemClick(item)}
              className="group text-right bg-[#F4F1EC]/60 hover:bg-[#FCFBF8] border border-[#E5E0D8] hover:border-[#8FAE9B] rounded-xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 cursor-pointer"
            >
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#292D2A] leading-relaxed mb-3 group-hover:text-[#344A42] transition-colors">
                  «{item.quote}»
                </h3>
                <p className="text-xs sm:text-sm text-[#555650] leading-relaxed mb-5">
                  {item.reflection}
                </p>
              </div>
              <div className="pt-3 border-t border-[#E5E0D8] flex items-center justify-between text-xs font-semibold text-[#344A42]">
                <span>{item.actionLabel}</span>
                <ArrowLeft className="w-3.5 h-3.5 shrink-0 transition-transform group-hover:-translate-x-1" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
