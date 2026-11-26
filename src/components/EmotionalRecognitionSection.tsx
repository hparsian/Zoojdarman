import React, { useState } from 'react';
import { ArrowLeft, Eye } from 'lucide-react';

interface EmotionalRecognitionSectionProps {
  onSelectService?: (slug: string) => void;
  onSelectArticle?: (slug: string) => void;
}

interface ConflictCardItem {
  id: string;
  num: string;
  category: string;
  quote: string;
  surfaceNote: string;
  eftExplanation: string;
  actionLabel: string;
  targetType: 'service' | 'article';
  slug: string;
}

const CONFLICT_CARDS: ConflictCardItem[] = [
  {
    id: 'loops',
    num: '۰۱',
    category: 'چرخه افکار و دفاع رفتاری',
    quote: 'هر بحث کوچکی به مشاجره تکراری یا سکوت چندروزه ختم می‌شود.',
    surfaceNote:
      'موضوع دعوا هر بار عوض می‌شود، اما احساس خستگی و شنیده‌نشدن در پایان بحث ثابت است.',
    eftExplanation:
      'در رویکرد CBCT، مشاجره‌های مکرر از «اسنادهای منفی» و افکار خودکار (مانند ذهن‌خوانی نیت بد طرف مقابل) تغذیه می‌شود؛ حمله انتقادی و کناره‌گیری متقابل یک چرخه رفتاری تقابلی را بازتولید می‌کنند.',
    actionLabel: 'زوج‌درمانی شناختی-رفتاری (CBCT)',
    targetType: 'service',
    slug: 'couples-therapy',
  },
  {
    id: 'distance',
    num: '۰۲',
    category: 'فاصله و اجتناب رفتاری',
    quote: 'زیر یک سقف زندگی می‌کنیم، اما احساس تنهایی و غریبگی عمیقی داریم.',
    surfaceNote:
      'گفت‌وگوها فقط به کارهای روزمره محدود شده و دیگر از نیازها و احساسات حرفی زده نمی‌شود.',
    eftExplanation:
      'در تحلیل شناختی-رفتاری، سردی و طلاق عاطفی محصول باورِ ناکارآمد «گفت‌وگو بی‌فایده است» و اجتناب از تعارض است؛ کاهش تعامل‌های مثبتِ روزمره به‌تدریج پیوند را فرسوده می‌کند.',
    actionLabel: 'راهنمای درمان طلاق عاطفی',
    targetType: 'article',
    slug: 'emotional-divorce',
  },
  {
    id: 'trust',
    num: '۰۳',
    category: 'آسیب اعتماد و افکار مزاحم',
    quote: 'پس از شکستن اعتماد یا خیانت، ذهنم مدام درگیر شک و اضطراب است.',
    surfaceNote:
      'پرسش‌های مکرر و تنش ناگهانی آرامش خانه را بر هم می‌زند و گفت‌وگو را دشوار می‌کند.',
    eftExplanation:
      'در پروتکل CBCT پس از آسیب اعتماد، افکار فاجعه‌ساز و گوش‌به‌زنگی شناختی برای پیشگیری از ضربه دوباره فعال می‌شوند؛ بازسازی نیازمند قرارداد شفافیت رفتاری، بازسازی شناختی و پاسخ‌گویی منسجم است.',
    actionLabel: 'مسیر تخصصی ترمیم اعتماد',
    targetType: 'service',
    slug: 'infidelity-counseling',
  },
  {
    id: 'unheard',
    num: '۰۴',
    category: 'خطاهای شناختی و ارتباطی',
    quote: 'حس می‌کنم هرچه تلاش می‌کنم، همسرم منظور و نیاز واقعی من را نمی‌فهمد.',
    surfaceNote:
      'نیت هر دو طرف خیر است، اما پیام‌های محبت‌آمیز یا انتقادها به‌اشتباه دریافت می‌شوند.',
    eftExplanation:
      'بسیاری از سوءتفاهم‌ها از تحریف‌های شناختی مانند «تعمیم مفرط» و انتظار ذهن‌خوانی بدون بیان صریح خواسته ناشی می‌شود؛ آموزش مهارت‌های شنود فعال و بیان روشن نیازها پیام‌ها را دقیق منتقل می‌کند.',
    actionLabel: 'آموزش مهارت‌های گفت‌وگو',
    targetType: 'article',
    slug: 'attachment-style-in-marriage',
  },
  {
    id: 'crossroads',
    num: '۰۵',
    category: 'بن‌بست و تردید در ادامه',
    quote: 'بین ماندن و جدا شدن مردد هستیم و از پشیمانی یا آسیب به فرزندان می‌ترسیم.',
    surfaceNote:
      'فشار هیجانی تصمیم‌گیری، قضاوت درباره ظرفیت واقعی رابطه را دشوار کرده است.',
    eftExplanation:
      'در رویکرد CBCT پیش از تصمیم نهایی به جدایی، بررسی می‌شود که آیا فرسودگیِ فعلی ناشی از باورهای ناکارآمد و نقص مهارت‌های قابل آموزش است یا ناهمسویی بنیادین؛ این تفکیک جلوی تصمیم عجولانه را می‌گیرد.',
    actionLabel: 'مشاوره تصمیم‌گیری آگاهانه',
    targetType: 'service',
    slug: 'divorce-counseling',
  },
  {
    id: 'migration',
    num: '۰۶',
    category: 'فشارهای بیرونی و مهاجرت',
    quote: 'دوری از خانواده یا فشارهای زندگی خارج از کشور ما را فرسوده کرده است.',
    surfaceNote:
      'تنش‌های شغلی، اقتصادی یا تنهایی مهاجرت صبر و حوصله گفت‌وگو در خانه را کم کرده است.',
    eftExplanation:
      'وقتی منابع حمایتی و تقویت‌کننده‌های مثبت بیرونی کم می‌شوند، آستانه تحمل شناختی کاهش می‌یابد؛ CBCT کمک می‌کند به‌جای اسناد خطا به شخصیت همسر، مهارت‌های حل مسئله مشترک و حمایت متقابل فعال شوند.',
    actionLabel: 'جلسات آنلاین بین‌المللی',
    targetType: 'service',
    slug: 'online-counseling',
  },
  {
    id: 'premarital',
    num: '۰۷',
    category: 'باورها و ارزش‌ها پیش از عقد',
    quote: 'قصد ازدواج داریم اما نگران تفاوت‌های جدی و دخالت خانواده‌ها هستیم.',
    surfaceNote:
      'برخی اختلاف‌های مالی، فرهنگی یا مرزبندی با خانواده هنوز شفاف حل‌وفصل نشده‌اند.',
    eftExplanation:
      'ارزیابی شناختی-رفتاری پیش از ازدواج باورهای زیربنایی درباره نقش‌ها، مدیریت مالی و مرزبندی با خانواده و نیز شیوه واقعی حل مسئله دو نفر را پیش از تعهد رسمی می‌سنجد.',
    actionLabel: 'ارزیابی تخصصی پیش از ازدواج',
    targetType: 'service',
    slug: 'premarital-counseling',
  },
  {
    id: 'patterns',
    num: '۰۸',
    category: 'الگوهای تکرارشونده رابطه',
    quote: 'احساس می‌کنم در روابط عاطفی همیشه یک الگوی آسیب‌زای مشابه تکرار می‌شود.',
    surfaceNote:
      'با وجود تغییر شرایط یا افراد، نقطه شروع دلخوری‌ها و واکنش‌های دفاعی شبیه گذشته است.',
    eftExplanation:
      'طرحواره‌ها و قواعد شرطیِ آموخته‌شده تعیین می‌کنند هنگام تنش چه افکار خودکار و رفتارهای دفاعی یا اجتنابی فعال شوند؛ بازسازی شناختی این نقشه ذهنی امکان انتخاب واکنش سازنده را فراهم می‌سازد.',
    actionLabel: 'کار روی الگوهای تکراری',
    targetType: 'service',
    slug: 'relationship-patterns-therapy',
  },
];

export const EmotionalRecognitionSection: React.FC<EmotionalRecognitionSectionProps> = ({
  onSelectService,
  onSelectArticle,
}) => {
  const [activeTapId, setActiveTapId] = useState<string | null>(null);

  const navigateToItem = (item: ConflictCardItem) => {
    if (item.targetType === 'service' && onSelectService) {
      onSelectService(item.slug);
    } else if (item.targetType === 'article' && onSelectArticle) {
      onSelectArticle(item.slug);
    }
  };

  return (
    <section
      id="recognition"
      className="py-16 sm:py-24 bg-[#FCFBF8] border-b border-[#E5E0D8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold text-[#3D5E4E] mb-2">
              مدیریت تعارض و بازشناسی الگوهای رابطه · رویکرد CBCT
            </p>
            <h2 className="balance-text text-2xl sm:text-3xl font-extrabold text-[#292D2A] leading-snug mb-3">
              مدیریت تعارض؛ از خطای شناختی تا گفت‌وگوی سازنده
            </h2>
            <p className="text-sm sm:text-base text-[#555650] leading-relaxed">
              در زوج‌درمانی شناختی-رفتاری (CBCT)، تعارض نشانه بن‌بست نیست؛ بلکه حاصل
              باورهای ناکارآمد، سوءتعبیرهای ذهنی و عادت‌های رفتاری قابل اصلاح در تعامل روزمره است.
            </p>
          </div>

          <p className="text-xs font-medium text-[#3D5E4E] flex items-center gap-2 shrink-0">
            <Eye className="w-4 h-4 shrink-0" />
            <span>روی هر کارت مکث (هاور) کنید تا تبیین شناختی-رفتاری (CBCT) نمایش داده شود</span>
          </p>
        </div>

        {/* Interactive Hover-Reveal Conflict Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {CONFLICT_CARDS.map((item) => {
            const isExpanded = activeTapId === item.id;

            return (
              <div
                key={item.id}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.target === e.currentTarget && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    setActiveTapId((prev) => (prev === item.id ? null : item.id));
                  }
                }}
                className={`group relative text-right rounded-2xl p-5 sm:p-6 border flex flex-col justify-between transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#344A42] ${
                  isExpanded
                    ? 'bg-[#FCFBF8] border-[#344A42]'
                    : 'bg-[#F4F1EC]/65 hover:bg-[#FCFBF8] border-[#E5E0D8] hover:border-[#344A42]'
                }`}
              >
                <div>
                  {/* Quiet Unboxed Header Metadata */}
                  <div className="flex items-center justify-between gap-2 mb-3 text-[11px]">
                    <span className="font-semibold text-[#3D5E4E] tabular-nums">
                      {item.num} · {item.category}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveTapId((prev) => (prev === item.id ? null : item.id))
                      }
                      aria-pressed={isExpanded}
                      className={`font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                        isExpanded
                          ? 'text-[#344A42]'
                          : 'text-[#6E6E68] group-hover:text-[#344A42]'
                      }`}
                    >
                      {isExpanded ? 'بستن دیدگاه' : 'دیدگاه CBCT'}
                    </button>
                  </div>

                  {/* Always-visible Couple Situation Quote */}
                  <h3 className="text-sm sm:text-[15px] font-bold text-[#292D2A] leading-relaxed group-hover:text-[#344A42] transition-colors">
                    «{item.quote}»
                  </h3>

                  {/* Grid Single-Cell Overlap: Zero layout shift between resting & hover CBCT insight */}
                  <div className="grid my-4">
                    {/* Resting Surface Description */}
                    <div
                      className={`col-start-1 row-start-1 transition-all duration-200 ${
                        isExpanded
                          ? 'opacity-0 -translate-y-1 pointer-events-none'
                          : 'opacity-100 translate-y-0 group-hover:opacity-0 group-hover:-translate-y-1 group-focus-within:opacity-0'
                      }`}
                    >
                      <p className="text-xs sm:text-sm text-[#555650] leading-relaxed">
                        {item.surfaceNote}
                      </p>
                    </div>

                    {/* Hover / Focus / Tap CBCT Psychological Explanation */}
                    <div
                      className={`col-start-1 row-start-1 transition-all duration-200 ${
                        isExpanded
                          ? 'opacity-100 translate-y-0 pointer-events-auto'
                          : 'opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0'
                      }`}
                    >
                      <div className="bg-[#EDF2EE] border border-[#D3E0D7] rounded-xl p-3.5">
                        <span className="block text-[11px] font-bold text-[#344A42] mb-1">
                          تبیین شناختی-رفتاری (CBCT):
                        </span>
                        <p className="text-xs text-[#292D2A] leading-relaxed">
                          {item.eftExplanation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Persistent Action Link */}
                <button
                  type="button"
                  onClick={() => navigateToItem(item)}
                  className="pt-3 border-t border-[#E5E0D8] flex items-center justify-between gap-2 text-xs font-semibold text-[#344A42] hover:text-[#273932] transition-colors cursor-pointer w-full"
                >
                  <span className="truncate">{item.actionLabel}</span>
                  <ArrowLeft className="w-3.5 h-3.5 shrink-0 transition-transform group-hover:-translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
