import React, { useState } from 'react';
import { ArrowDown, ArrowLeft, Compass, Eye, HeartHandshake } from 'lucide-react';

interface RelationshipGalaxySectionProps {
  onSelectService?: (slug: string) => void;
  onSelectArticle?: (slug: string) => void;
  onSelectTest?: (slug: string) => void;
  onNavigateContact?: () => void;
}

type ScenarioId = 'conflict' | 'silence' | 'trust';
type LensMode = 'underneath' | 'repair';

interface PartnerPerspective {
  roleLabel: string;
  reactionTag: string;
  surfaceQuote: string;
  underneathFear: string;
  attachmentNeed: string;
  safeReframe: string;
}

interface RelationshipScenario {
  id: ScenarioId;
  tabLabel: string;
  sceneTitle: string;
  sceneContext: string;
  cycleSummary: string;
  partnerA: PartnerPerspective;
  partnerB: PartnerPerspective;
  articleSlug: string;
  articleTitle: string;
  serviceSlug: string;
}

const SCENARIOS: RelationshipScenario[] = [
  {
    id: 'conflict',
    tabLabel: 'تنش و بحث تکراری',
    sceneTitle: 'وقتی یک گلایه ساده به مشاجره همیشگی تبدیل می‌شود',
    sceneContext: 'الگوی تعقیب و دفاع: هر دو نفر به دنبال امنیت هستند، اما روش بیان آن‌ها دیگری را تهدید می‌کند.',
    cycleSummary:
      'شدتِ لحنِ نفر اول برای شنیده‌شدن، در نفر دوم حس ناتوانی و دفاع می‌سازد؛ عقب‌نشینی نفر دوم، ترسِ رهاشدگی نفر اول را بیشتر می‌کند و چرخه دوباره تکرار می‌شود.',
    partnerA: {
      roleLabel: 'نفر اول · پیگیری و اعتراض',
      reactionTag: 'واکنش بیرونی: گلایه یا بالا بردن صدا',
      surfaceQuote: '«تو اصلاً منو نمی‌بینی؛ انگار بود و نبود من هیچ فرقی برات نداره!»',
      underneathFear:
        '«وقتی در دسترس نیستی احساس تنهایی و بی‌اهمیتی می‌کنم و می‌ترسم پیوند بینمان کم‌رنگ شده باشد.»',
      attachmentNeed: 'نیاز به دیده‌شدن و اطمینان از اولویت داشتن در رابطه',
      safeReframe:
        '«امروز خیلی احساس دوری و تنهایی کردم؛ دلم می‌خواهد چند دقیقه کنار هم باشیم تا آرام‌تر شوم.»',
    },
    partnerB: {
      roleLabel: 'نفر دوم · دفاع یا خاموشی',
      reactionTag: 'واکنش بیرونی: توجیه، دفاع یا ترک گفت‌وگو',
      surfaceQuote: '«هر کاری می‌کنم باز هم ناراضی هستی؛ اصلاً نمی‌شه با تو منطقی حرف زد.»',
      underneathFear:
        '«زیر بار انتقاد احساس می‌کنم باز هم شکست خوردم و کافی نیستم؛ عقب می‌کشم تا تنش بدتر نشود.»',
      attachmentNeed: 'نیاز به پذیرش، احترام و احساس کفایت نزد شریک عاطفی',
      safeReframe:
        '«وقتی لحن تند می‌شود نگران می‌شوم که نتوانم رضایتت را جلب کنم؛ کمی فرصت بده با آرامش به حرفت گوش دهم.»',
    },
    articleSlug: 'emotionally-focused-therapy-eft',
    articleTitle: 'زوج‌درمانی هیجان‌مدار (EFT) چگونه چرخه را متوقف می‌کند؟',
    serviceSlug: 'couples-therapy',
  },
  {
    id: 'silence',
    tabLabel: 'فاصله و سکوت طولانی',
    sceneTitle: 'وقتی دعوا نیست، اما سرمای سنگینی میان دو نفر نشسته است',
    sceneContext: 'الگوی انزوای محافظتی: سکوت نه نشانه بی‌تفاوتی، بلکه پناهگاهی برای آسیب ندیدن دوباره است.',
    cycleSummary:
      'هر دو نفر از ترس تکرار دلخوری‌های گذشته، گفت‌وگو را به امور روزمره محدود می‌کنند؛ اما نیازهای نگفته به‌مرور فاصله عاطفی را عمیق‌تر می‌سازد.',
    partnerA: {
      roleLabel: 'نفر اول · دل‌سردی و کناره‌گیری',
      reactionTag: 'واکنش بیرونی: اکتفا به حرف‌های روزمره',
      surfaceQuote: '«گفتن یا نگفتن چه فرقی می‌کند؟ آخرش یا بحث می‌شود یا تغییری نمی‌کند.»',
      underneathFear:
        '«بارها تلاش کردم و شنیده نشدم؛ می‌ترسم اگر دوباره جلو بیایم باز هم ناامید و خسته شوم.»',
      attachmentNeed: 'نیاز به امیدواری و امنیت برای آغاز یک گفت‌وگوی تازه',
      safeReframe:
        '«مدتی است از ترس دلخوری حرفی نزدم، اما دوری این روزها برایم سخت است و دلم می‌خواهد کم‌کم نزدیک‌تر شویم.»',
    },
    partnerB: {
      roleLabel: 'نفر دوم · انتظار و پناه در کار یا خلوت',
      reactionTag: 'واکنش بیرونی: مشغولیت مداوم و فاصله‌گیری',
      surfaceQuote: '«فعلاً آرامش برقرار است؛ بهتر است سرِ مسائل قدیمی را دوباره باز نکنیم.»',
      underneathFear:
        '«نمی‌دانم چطور بدون شروع یک بحران جدید نزدیک شوم؛ ترجیح می‌دهم در سکوت بمانم تا خطایی نکنم.»',
      attachmentNeed: 'نیاز به نقشه راهی امن که گفت‌وگو را به دعوا نرساند',
      safeReframe:
        '«سکوتم از بی‌اهمیتی نیست؛ فقط نمی‌دانم از کجا شروع کنم که دوباره از هم نرنجیم. حاضرم همراهت بشنوم.»',
    },
    articleSlug: 'emotional-divorce',
    articleTitle: 'راهنمای شناخت و درمان طلاق عاطفی',
    serviceSlug: 'couples-therapy',
  },
  {
    id: 'trust',
    tabLabel: 'تردید و آسیب اعتماد',
    sceneTitle: 'وقتی سایه بی‌اعتمادی امنیت هر گفت‌وگو را به هم می‌ریزد',
    sceneContext: 'آسیب دلبستگی: یک نفر در حالت گوش‌به‌زنگی مداوم است و دیگری در شرم و درماندگی گیر افتاده.',
    cycleSummary:
      'پرسش‌های مکرر برای آرام‌شدن ذهن آسیب‌دیده، حس محاکمه‌شدن در طرف مقابل ایجاد می‌کند؛ پنهان‌کاری یا سکوت دفاعی نیز شک را تشدید می‌نماید.',
    partnerA: {
      roleLabel: 'شریک آسیب‌دیده · گوش‌به‌زنگی و پرسش‌گری',
      reactionTag: 'واکنش بیرونی: کنترل، تردید یا مرور مداوم جزئیات',
      surfaceQuote: '«از کجا معلوم باز هم حقیقت را پنهان نکنی؟ من دیگر نمی‌توانم هیچ چیز را باور کنم.»',
      underneathFear:
        '«پایه‌های امنیت ذهنی‌ام فرو ریخته و ذهنم مدام برای پیشگیری از ضربه بعدی دنبال نشانه خطر می‌گردد.»',
      attachmentNeed: 'نیاز به شفافیت مداوم، دیده‌شدن درد و زمان بدون فشار',
      safeReframe:
        '«وقتی ذهنم درگیر تردید می‌شود تمام بدنم مضطرب است؛ الان فقط به شفافیت و صبوری تو برای آرام‌شدن نیاز دارم.»',
    },
    partnerB: {
      roleLabel: 'شریک مقابل · احساس گناه یا خستگی دفاعی',
      reactionTag: 'واکنش بیرونی: کلافگی، انکار یا سکوت هنگام بازجویی',
      surfaceQuote: '«تا کی باید بابت گذشته توضیح بدهم؟ این‌جوری هیچ‌وقت به آرامش نمی‌رسیم.»',
      underneathFear:
        '«از روبه‌رو شدن با رنجی که ساخته‌ام شرمنده‌ام و می‌ترسم هرچه بگویم باز هم کافی و باورپذیر نباشد.»',
      attachmentNeed: 'نیاز به مسیر ساختارمند برای ترمیم عملی اعتماد بدون بن‌بست',
      safeReframe:
        '«می‌فهمم این اضطراب چقدر برایت سنگین است؛ فرار نمی‌کنم و کنار می‌مانم تا قدم‌به‌قدم پاسخ و اطمینان بسازم.»',
    },
    articleSlug: 'rebuilding-trust-after-infidelity',
    articleTitle: 'مراحل علمی بازسازی اعتماد پس از آسیب رابطه',
    serviceSlug: 'infidelity-counseling',
  },
];

interface GuideTopic {
  id: string;
  label: string;
  serviceSlug: string;
  serviceName: string;
  articleSlug: string;
  articleTitle: string;
  testSlug: string;
  testTitle: string;
  note: string;
}

const GUIDE_TOPICS: GuideTopic[] = [
  {
    id: 'conflict',
    label: 'بحث‌های تکراری، خشم یا قهر طولانی',
    serviceSlug: 'couples-therapy',
    serviceName: 'زوج‌درمانی تخصصی (EFT)',
    articleSlug: 'emotionally-focused-therapy-eft',
    articleTitle: 'چگونه چرخه دعوای تکراری متوقف می‌شود؟',
    testSlug: 'gottman-divorce-predictor',
    testTitle: 'مرور ۴ الگوی آسیب‌زا در مشاجره (گاتمن)',
    note: 'در این وضعیت معمولاً حضور هم‌زمان زوجین در جلسه ارزیابی کمک می‌کند چرخه گفتگو بدون قضاوت دیده شود.',
  },
  {
    id: 'infidelity',
    label: 'تردید، پنهان‌کاری یا شوک خیانت',
    serviceSlug: 'infidelity-counseling',
    serviceName: 'مشاوره بحران و ترمیم خیانت',
    articleSlug: 'dealing-with-infidelity-shock',
    articleTitle: 'اقدامات ضروری در روزهای اول شوک خیانت',
    testSlug: 'infidelity-trauma-assessment',
    testTitle: 'خودسنجی فشار هیجانی پس از خیانت',
    note: 'اولویت اول مهار فشار روانی و جلوگیری از تصمیم‌گیری‌های شتاب‌زده در محیطی محرمانه و ساختارمند است.',
  },
  {
    id: 'coldness',
    label: 'سردی عاطفی یا تردید بین ماندن و جدایی',
    serviceSlug: 'divorce-counseling',
    serviceName: 'مشاوره تصمیم‌گیری آگاهانه و طلاق',
    articleSlug: 'deciding-about-divorce',
    articleTitle: 'چگونه درباره ادامه یا جدایی تصمیم شفاف بگیریم؟',
    testSlug: 'enrich-marital-satisfaction',
    testTitle: 'پرسشنامه ۱۰ بُعدی رضایت زناشویی انریچ',
    note: 'ارزیابی بی‌طرف کمک می‌کند پیش از هر اقدام حقوقی، تصویر روشنی از ظرفیت ترمیم یا جدایی کم‌آسیب به دست آورید.',
  },
  {
    id: 'premarital',
    label: 'آشنایی، نامزدی یا ارزیابی پیش از ازدواج',
    serviceSlug: 'premarital-counseling',
    serviceName: 'مشاوره و ارزیابی پیش از ازدواج',
    articleSlug: 'premarital-counseling-questions',
    articleTitle: 'پرسش‌های حیاتی پیش از عقد و نامزدی',
    testSlug: 'premarital-readiness-assessment',
    testTitle: 'چک‌لیست آمادگی پیش از ازدواج',
    note: 'بررسی ارزش‌های مالی، مرزبندی با خانواده‌ها و سبک‌های دلبستگی قبل از عقد از تنش‌های بلندمدت پیشگیری می‌کند.',
  },
];

export const RelationshipGalaxySection: React.FC<RelationshipGalaxySectionProps> = ({
  onSelectService,
  onSelectArticle,
  onSelectTest,
  onNavigateContact,
}) => {
  const [activeScenarioId, setActiveScenarioId] = useState<ScenarioId>('conflict');
  const [lensMode, setLensMode] = useState<LensMode>('underneath');
  const [selectedTopicId, setSelectedTopicId] = useState<string>('conflict');

  const scenario = SCENARIOS.find((s) => s.id === activeScenarioId) || SCENARIOS[0];
  const currentTopic = GUIDE_TOPICS.find((t) => t.id === selectedTopicId) || GUIDE_TOPICS[0];

  const renderPerspectiveCard = (
    partner: PartnerPerspective,
    accent: 'forest' | 'terracotta'
  ) => {
    const borderClass =
      accent === 'forest' ? 'border-[#D3E0D7]' : 'border-[#E6D6CE]';
    const roleColor =
      accent === 'forest' ? 'text-[#344A42]' : 'text-[#9E563E]';
    const revealBg =
      lensMode === 'underneath'
        ? accent === 'forest'
          ? 'bg-[#EDF2EE]'
          : 'bg-[#F8EFEA]'
        : 'bg-[#FCFBF8]';

    return (
      <div
        className={`bg-[#F4F1EC] border ${borderClass} rounded-2xl p-5 sm:p-6 flex flex-col justify-between gap-5`}
      >
        {/* Top Layer: Surface Words Heard at Home */}
        <div className="space-y-2.5">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className={`font-extrabold ${roleColor}`}>{partner.roleLabel}</span>
            <span className="text-[#6E6E68]">{partner.reactionTag}</span>
          </div>

          <blockquote className="bg-[#FCFBF8] border border-[#E5E0D8] rounded-xl p-4 text-sm sm:text-[15px] font-semibold text-[#292D2A] leading-relaxed">
            {partner.surfaceQuote}
          </blockquote>
        </div>

        {/* Visual Transition Divider: Surface -> Clinical Depth */}
        <div className="flex items-center gap-3 text-[11px] font-semibold text-[#555650]">
          <span className="h-px flex-1 bg-[#E5E0D8]" />
          <span className="inline-flex items-center gap-1.5 text-[#3D5E4E] whitespace-nowrap">
            <ArrowDown className="w-3.5 h-3.5" />
            {lensMode === 'underneath'
              ? 'آن‌چه زیرِ سطح حس می‌شود'
              : 'بیانِ امن و ترمیم‌کننده در جلسه'}
          </span>
          <span className="h-px flex-1 bg-[#E5E0D8]" />
        </div>

        {/* Bottom Layer: Clinical Decoder Output */}
        <div className={`${revealBg} border border-[#E5E0D8] rounded-xl p-4 sm:p-5 space-y-3`}>
          {lensMode === 'underneath' ? (
            <>
              <p className="text-sm text-[#292D2A] leading-relaxed font-medium">
                {partner.underneathFear}
              </p>
              <p className="text-xs text-[#555650] pt-2 border-t border-[#E5E0D8]">
                <span className="font-bold text-[#344A42]">نیاز دلبستگی پنهان: </span>
                {partner.attachmentNeed}
              </p>
            </>
          ) : (
            <>
              <p className="text-sm text-[#344A42] leading-relaxed font-semibold">
                {partner.safeReframe}
              </p>
              <p className="text-xs text-[#555650] pt-2 border-t border-[#E5E0D8]">
                جمله‌ای بدون سرزنش یا دفاع که امکان شنیده‌شدن توسط شریک زندگی را فراهم می‌کند.
              </p>
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <section id="galaxy" className="py-16 sm:py-24 bg-[#FCFBF8] border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Part 1: Interactive Clinical Subtext Decoder ("What is Said vs. What is Felt") */}
        <div className="space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs sm:text-sm font-semibold text-[#3D5E4E] mb-2">
                مترجم بالینی گفت‌وگو · برگرفته از زوج‌درمانی هیجان‌مدار (EFT)
              </p>
              <h2 className="balance-text text-2xl sm:text-3xl font-extrabold text-[#292D2A] leading-snug mb-3">
                پشتِ جمله‌های تند یا سکوت‌های طولانی، واقعاً چه می‌گذرد؟
              </h2>
              <p className="text-sm sm:text-base text-[#555650] leading-relaxed">
                بسیاری از بحث‌های فرسایشی نه به خاطر نبودن علاقه، بلکه به این دلیل است که ترس‌های
                دلبستگی پشت واکنش‌های دفاعی پنهان می‌مانند. یک موقعیت را انتخاب کنید و لایه زیرین
                آن را ببینید.
              </p>
            </div>

            {/* Interactive Lens Switcher */}
            <div
              className="inline-flex items-center p-1 bg-[#F4F1EC] border border-[#E5E0D8] rounded-xl self-start lg:self-end shrink-0"
              role="group"
              aria-label="تغییر عمق نگاه بالینی"
            >
              <button
                type="button"
                onClick={() => setLensMode('underneath')}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  lensMode === 'underneath'
                    ? 'bg-[#344A42] text-[#FCFBF8]'
                    : 'text-[#555650] hover:text-[#292D2A]'
                }`}
              >
                <Eye className="w-4 h-4 shrink-0" />
                <span>احساسِ زیرِ سطح</span>
              </button>
              <button
                type="button"
                onClick={() => setLensMode('repair')}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  lensMode === 'repair'
                    ? 'bg-[#344A42] text-[#FCFBF8]'
                    : 'text-[#555650] hover:text-[#292D2A]'
                }`}
              >
                <HeartHandshake className="w-4 h-4 shrink-0" />
                <span>گفت‌وگوی امن و ترمیم</span>
              </button>
            </div>
          </div>

          {/* 3 Scenario Tabs */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-3"
            role="tablist"
            aria-label="انتخاب موقعیت رابطه"
          >
            {SCENARIOS.map((item) => {
              const selected = item.id === activeScenarioId;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveScenarioId(item.id)}
                  className={`text-right px-5 py-4 rounded-xl border transition-colors cursor-pointer ${
                    selected
                      ? 'bg-[#344A42] text-[#FCFBF8] border-[#344A42]'
                      : 'bg-[#F4F1EC] text-[#292D2A] border-[#E5E0D8] hover:border-[#8FAE9B]'
                  }`}
                >
                  <span className="block text-sm font-bold">{item.tabLabel}</span>
                  <span
                    className={`block text-xs mt-1 leading-relaxed ${
                      selected ? 'text-[#E5E0D8]' : 'text-[#555650]'
                    }`}
                  >
                    {item.sceneTitle}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Two-Perspective Clinical Comparison */}
          <div className="space-y-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              {renderPerspectiveCard(scenario.partnerA, 'terracotta')}
              {renderPerspectiveCard(scenario.partnerB, 'forest')}
            </div>

            {/* Clinical Synthesis Bar */}
            <div className="bg-[#F4F1EC] border border-[#E5E0D8] rounded-2xl p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
              <div className="space-y-1 max-w-3xl">
                <p className="text-xs font-bold text-[#3D5E4E]">{scenario.sceneContext}</p>
                <p className="text-xs sm:text-sm text-[#292D2A] leading-relaxed">
                  {scenario.cycleSummary}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                {onSelectArticle && (
                  <button
                    type="button"
                    onClick={() => onSelectArticle(scenario.articleSlug)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#CFC7BA] bg-[#FCFBF8] hover:bg-[#ECE7DF] text-xs font-semibold text-[#344A42] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <span>مطالعه راهنمای علمی مرتبط</span>
                    <ArrowLeft className="w-3.5 h-3.5 shrink-0" />
                  </button>
                )}
                {onNavigateContact && (
                  <button
                    type="button"
                    onClick={onNavigateContact}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#344A42] hover:bg-[#273932] text-[#FCFBF8] text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <span>رزرو جلسه بررسی این الگو</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Part 2: Non-Diagnostic Gentle Care Finder («مسیریاب آرام خدمات») */}
        <div className="bg-[#EDF2EE] border border-[#D3E0D7] rounded-2xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#3D5E4E]">
                <Compass className="w-4 h-4" />
                <span>مسیریاب آرام خدمات</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#292D2A] leading-snug">
                موضوع اصلی شما در حال حاضر چیست؟
              </h3>
              <p className="text-xs sm:text-sm text-[#555650] leading-relaxed">
                این راهنما صرفاً برای آشنایی اولیه با خدمات مناسب و مقالات مرتبط است و جایگزین
                ارزیابی بالینی درمانگر نیست.
              </p>

              <div className="pt-2 space-y-2">
                {GUIDE_TOPICS.map((topic) => {
                  const active = topic.id === selectedTopicId;
                  return (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => setSelectedTopicId(topic.id)}
                      className={`w-full text-right px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold border transition-colors cursor-pointer ${
                        active
                          ? 'bg-[#344A42] text-[#FCFBF8] border-[#344A42]'
                          : 'bg-[#FCFBF8] text-[#292D2A] border-[#E5E0D8] hover:border-[#8FAE9B]'
                      }`}
                    >
                      {topic.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#FCFBF8] border border-[#E5E0D8] rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-semibold text-[#3D5E4E] block mb-1.5">
                  پیشنهاد شروع متناسب با انتخاب شما
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-[#292D2A] mb-3">
                  {currentTopic.serviceName}
                </h4>
                <p className="text-sm text-[#555650] leading-relaxed">
                  {currentTopic.note}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#E5E0D8]">
                {onSelectService && (
                  <button
                    type="button"
                    onClick={() => onSelectService(currentTopic.serviceSlug)}
                    className="px-4 py-3 rounded-lg bg-[#344A42] hover:bg-[#273932] text-[#FCFBF8] text-xs sm:text-sm font-semibold flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <span>مشاهده صفحه این خدمت</span>
                    <ArrowLeft className="w-4 h-4 shrink-0" />
                  </button>
                )}

                {onSelectTest && (
                  <button
                    type="button"
                    onClick={() => onSelectTest(currentTopic.testSlug)}
                    className="px-4 py-3 rounded-lg border border-[#CFC7BA] bg-[#F4F1EC] hover:bg-[#ECE7DF] text-[#292D2A] text-xs sm:text-sm font-semibold flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <span>{currentTopic.testTitle}</span>
                    <ArrowLeft className="w-4 h-4 shrink-0" />
                  </button>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-[#555650]">
                {onSelectArticle && (
                  <button
                    type="button"
                    onClick={() => onSelectArticle(currentTopic.articleSlug)}
                    className="font-semibold text-[#344A42] hover:underline cursor-pointer"
                  >
                    مطالعه مقاله مرتبط: {currentTopic.articleTitle}
                  </button>
                )}

                {onNavigateContact && (
                  <button
                    type="button"
                    onClick={onNavigateContact}
                    className="font-semibold text-[#3D5E4E] hover:underline cursor-pointer"
                  >
                    یا رزرو مستقیم وقت مشاوره
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
