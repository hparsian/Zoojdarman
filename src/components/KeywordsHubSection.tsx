import React, { useState } from 'react';
import {
  Search,
  BookOpen,
  ArrowRight,
  TrendingUp,
  Sparkles,
  HelpCircle,
  CheckCircle2,
  ChevronDown,
  MessageSquare,
  Compass,
  HeartCrack,
  Flame,
  ShieldAlert,
  Users
} from 'lucide-react';

interface SeoKeywordTopic {
  id: string;
  query: string;
  category: 'infidelity' | 'conflict' | 'intimacy' | 'divorce' | 'premarital' | 'methods';
  categoryLabel: string;
  monthlySearches: string;
  answerSummary: string;
  keyPoints: string[];
  articleSlug?: string;
  serviceSlug?: string;
}

interface KeywordsHubSectionProps {
  onSelectArticle: (slug: string) => void;
  onSelectService: (slug: string) => void;
  onScrollToTools: () => void;
}

export const KeywordsHubSection: React.FC<KeywordsHubSectionProps> = ({
  onSelectArticle,
  onSelectService,
  onScrollToTools,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedTopicId, setExpandedTopicId] = useState<string | null>('q-1');

  const topics: SeoKeywordTopic[] = [
    {
      id: 'q-1',
      query: 'زوج‌درمانی چیست و چه زمانی باید مراجعه کرد؟',
      category: 'methods',
      categoryLabel: 'اصول زوج‌درمانی',
      monthlySearches: '۴۵,۰۰۰+ جستجو در ماه',
      answerSummary:
        'زوج‌درمانی فرآیندی بالینی است که بر چرخه تعاملی بین همسران تمرکز دارد نه مقصر شناختن یک نفر. اگر مشاجرات شما مکرر شده، قهرها بیش از ۲۴ ساعت طول می‌کشد، صمیمیت جنسی کاهش یافته یا احساس می‌کنید در یک خانه مثل دو هم‌اتاقی غریبه زندگی می‌کنید، زمان طلایی مراجعه به زوج‌درمانگر است.',
      keyPoints: [
        'رویکرد هیجان‌مدار (EFT) با ۸ الی ۱۲ جلسه امنیت عاطفی را بازمی‌گرداند.',
        'مراجعه به هنگام مانع از تبدیل نارضایتی ساده به طلاق عاطفی عمیق می‌شود.',
        'جلسات هم به صورت دونفره و هم در صورت لزوم فردی برگزار می‌شود.',
      ],
      articleSlug: 'couples-therapy-approaches-comparison',
      serviceSlug: 'couples-therapy',
    },
    {
      id: 'q-2',
      query: 'راهکارهای بازسازی اعتماد بعد از خیانت همسر',
      category: 'infidelity',
      categoryLabel: 'درمان خیانت و اعتماد',
      monthlySearches: '۷۸,۰۰۰+ جستجو در ماه',
      answerSummary:
        'ترمیم رابطه پس از خیانت عاطفی یا جنسی نیازمند یک پروتکل علمی ۳ مرحله‌ای است: ۱. تثبیت شوک اولیه و توقف تماس کامل با نفر سوم ۲. کالبدشکافی علل بدون سرزنش و پاسخ به سوالات اساسی ۳. بازسازی شفافیت با رضایت دوطرفه. بازگشت اعتماد بین ۶ تا ۱۸ ماه زمان می‌برد.',
      keyPoints: [
        'پرهیز از کنکاش در جزئیات بصری و زناشویی که تروما را تشدید می‌کند.',
        'شفافیت داوطلبانه تلفن همراه و رفت‌وآمدها توسط فرد پیمان‌شکن.',
        'بازسازی دلبستگی آسیب‌دیده با نظارت متخصص بالینی.',
      ],
      articleSlug: 'rebuilding-trust-after-infidelity',
      serviceSlug: 'infidelity-counseling',
    },
    {
      id: 'q-3',
      query: 'علائم قطعی طلاق عاطفی و راه های نجات زندگی',
      category: 'divorce',
      categoryLabel: 'طلاق عاطفی و تصمیم‌گیری',
      monthlySearches: '۶۲,۰۰۰+ جستجو در ماه',
      answerSummary:
        'طلاق عاطفی زمانی رخ می‌دهد که خشم و دعوا متوقف شده و جای خود را به «بی‌تفاوتی و سکوت سرد» داده است. علائم شامل عدم تمایل به صحبت، زندگی در اتاق‌های جداگانه، فراموشی مناسبت‌ها و احساس آرامش هنگام دور بودن همسر از منزل است.',
      keyPoints: [
        'خطرناک‌ترین مرحله پیش از طلاق رسمی، طلاق عاطفی بی‌صداست.',
        'هنوز تا زمانی که تعهد حداقلی وجود دارد با تکنیک‌های احیای دلبستگی قابل بازگشت است.',
        'ارزیابی شانس بقای رابطه در جلسات مشاوره طلاق بررسی می‌شود.',
      ],
      articleSlug: 'emotional-divorce',
      serviceSlug: 'divorce-counseling',
    },
    {
      id: 'q-4',
      query: 'چرا شوهرم یا همسرم با من صحبت نمی‌کند و قفل می‌کند؟',
      category: 'conflict',
      categoryLabel: 'حل دعوا و گفتگو',
      monthlySearches: '۵۳,۰۰۰+ جستجو در ماه',
      answerSummary:
        'در روانشناسی بالینی به این وضعیت «دیوارکشی سکوت (Stonewalling)» در چرخه تعقیب‌کننده-گریزنده می‌گویند. معمولاً یکی از زوجین برای رفع اضطراب انتقاد می‌کند و دیگری از ترس غرق‌شدگی فیزیولوژیک و ضربان قلب بالا سکوت می‌کند و دور می‌شود.',
      keyPoints: [
        'قانون وقفه ۲۰ دقیقه‌ای برای کاهش کورتیزول و تپش قلب.',
        'تغییر لحن انتقادی «تو همیشه...» به بیان آسیب‌پذیری «من حس تنهایی می‌کنم».',
        'ایجاد فضای بدون قضاوت تا پارتنر احساس امنیت برای صحبت پیدا کند.',
      ],
      articleSlug: 'safe-communication-in-relationships',
      serviceSlug: 'couples-therapy',
    },
    {
      id: 'q-5',
      query: 'درمان سردی عاطفی و بی‌میلی جنسی در زندگی مشترک',
      category: 'intimacy',
      categoryLabel: 'سکس‌تراپی و صمیمیت',
      monthlySearches: '۶۸,۰۰۰+ جستجو در ماه',
      answerSummary:
        'میل جنسی در زوجین ریشه عمیقی در صمیمیت عاطفی روزمره دارد. رنجش‌های ناگفته، کارهای سنگین، تغییرات هورمونی یا طرحواره‌های فردی می‌توانند منجر به دوری فیزیکی شوند. با رویکرد تلفیقی سکس‌تراپی و EFT، اشتیاق جسمی و روحی مجدداً بیدار می‌شود.',
      keyPoints: [
        'تمرین‌های حسی خانگی مرحله‌به‌مرحله بدون فشار برای رابطه کامل.',
        'تفکیک اختلالات جسمی از موانع روانی و اضطراب عملکرد.',
        'احیای لمس و نوازش غیرجنسی برای بازسازی مدار صمیمیت مغز.',
      ],
      articleSlug: 'sex-therapy-marital-intimacy',
      serviceSlug: 'couples-therapy',
    },
    {
      id: 'q-6',
      query: 'مشاوره پیش از ازدواج شامل چه تست‌هایی است و چرا حیاتی است؟',
      category: 'premarital',
      categoryLabel: 'پیش از ازدواج',
      monthlySearches: '۳۹,۰۰۰+ جستجو در ماه',
      answerSummary:
        'مشاوره پیش از ازدواج فراتر از صحبت‌های معمول، با اجرای تست‌های بالینی نئو (NEO)، طرحواره یانگ و پرسشنامه انریچ، تناسب شخصیتی، ریسک اختلالات شخصیت، شیوه مدیریت پول و مرزبندی با خانواده‌ها را پیش از عقد شفاف می‌سازد.',
      keyPoints: [
        'شناسایی تله‌های ناسازگار اولیه (مانند طرحواره رهاشدگی و ایثارگری).',
        'توافق شفاف بر سر محل سکونت، روابط مالی و فرزندآوری.',
        'کاهش احتمال طلاق در سال‌های اول زندگی مشترک تا ۷۰٪.',
      ],
      articleSlug: 'premarital-psychological-tests',
      serviceSlug: 'premarital-counseling',
    },
    {
      id: 'q-7',
      query: 'چگونه با دخالت خانواده همسر برخورد کنیم بدون اینکه دعوا شود؟',
      category: 'conflict',
      categoryLabel: 'حل دعوا و گفتگو',
      monthlySearches: '۴۱,۰۰۰+ جستجو در ماه',
      answerSummary:
        'قانون طلایی در روابط زناشویی این است: هر فرد باید مرز خانواده پدری خود را با احترام مدیریت کند. وقتی زن یا شوهر به عنوان سپر دفاعی عمل نکند، طرف مقابل احساس بی‌پناهی کرده و تنش‌ها به اتاق خواب و زندگی مشترک کشیده می‌شود.',
      keyPoints: [
        'اولین وفاداری عاطفی پس از عقد متعلق به همسر است نه خانواده پدری.',
        'حفظ حریم خصوصی: مسائل مالی، مشاجرات و اسرار نباید به بیرون درز کند.',
        'مرزبندی با محبت و ادب بدون بی‌احترامی به بزرگترها.',
      ],
      articleSlug: 'family-interference-boundaries',
      serviceSlug: 'relationship-patterns-therapy',
    },
    {
      id: 'q-8',
      query: 'تست‌های آنلاین روانشناسی رابطه چقدر دقت علمی دارند؟',
      category: 'methods',
      categoryLabel: 'اصول زوج‌درمانی',
      monthlySearches: '۳۴,۰۰۰+ جستجو در ماه',
      answerSummary:
        'تست‌های استاندارد مانند انریچ (ENRICH) و شاخص ۴ سوارکار گاتمن دارای روایی بالینی بالای ۸۵٪ هستند و وضعیت فعلی رضایت و خطر رابطه را به وضوح نشان می‌دهند. این تست‌ها نقطه شروع فوق‌العاده‌ای برای خودآگاهی و شروع گفتگوی ترمیمی هستند.',
      keyPoints: [
        'آزمون‌های آنلاین سامانه زوج‌درمان بر پایه مقیاس‌های استاندارد طراحی شده‌اند.',
        'امکان مقایسه نمره خود با همسر برای پیدا کردن نقاط اختلاف.',
        'نتیجه به عنوان پیش‌ارزیابی به روانشناس در جلسه مشاوره کمک می‌کند.',
      ],
      articleSlug: 'signs-marriage-is-over-test',
      serviceSlug: 'couples-therapy',
    },
  ];

  const categories = [
    { id: 'all', label: 'همه موضوعات پرجستجو' },
    { id: 'infidelity', label: 'خیانت و بازسازی اعتماد' },
    { id: 'conflict', label: 'دعوا، قهر و حل اختلاف' },
    { id: 'intimacy', label: 'سردی عاطفی و سکس‌تراپی' },
    { id: 'divorce', label: 'طلاق عاطفی و جدایی' },
    { id: 'premarital', label: 'مشاوره پیش از ازدواج' },
    { id: 'methods', label: 'رویکردها و تست‌های بالینی' },
  ];

  const filteredTopics = topics.filter((t) => {
    const matchesCategory = activeCategory === 'all' || t.category === activeCategory;
    const matchesSearch =
      t.query.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.answerSummary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 bg-white border-t border-[#E5E0EA]" id="seo-hub">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#edf5f0] text-[#5e826b] px-4 py-1.5 rounded-full border border-[#8FAF9B]/30 text-xs font-black mb-4">
            <TrendingUp className="w-4 h-4" />
            <span>پاسخ به سوالات پرتکرار و بیشترین جستجوهای گوگل</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#44386B] mb-4">
            دانشنامه کلمات کلیدی و راهکارهای بالینی{' '}
            <span className="text-[#6D5AA8] block sm:inline">زوج‌درمانی و زندگی مشترک</span>
          </h2>

          <p className="text-sm sm:text-base text-[#6F6B78] leading-relaxed">
            پاسخ‌های دقیق، بالینی و کاربردی خانم مهناز خوینی به چالش‌برانگیزترین دغدغه‌های مراجعان در حوزه روابط عاطفی، ازدواج و خیانت.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="relative mb-5">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="جستجو میان موضوعات پرطرفدار (مثال: خیانت، قهر، سردی، طلاق، دلبستگی، تست...)"
              className="w-full px-5 py-4 pr-12 bg-[#FAF8F5] border border-[#E5E0EA] rounded-2xl text-xs sm:text-sm font-medium text-[#292733] focus:bg-white focus:border-[#6D5AA8] focus:outline-none shadow-xs"
            />
            <Search className="w-5 h-5 text-[#8e8a96] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#6D5AA8] text-white shadow-sm'
                    : 'bg-[#FAF8F5] text-[#6F6B78] hover:bg-[#f2eff8] border border-[#E5E0EA]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4 mb-14">
          {filteredTopics.length === 0 ? (
            <div className="text-center py-12 bg-[#FAF8F5] rounded-3xl border border-[#E5E0EA]">
              <HelpCircle className="w-12 h-12 text-[#8e8a96] mx-auto mb-3" />
              <h3 className="text-base font-black text-[#292733] mb-1">موضوعی با این عبارت یافت نشد</h3>
              <p className="text-xs text-[#6F6B78] mb-4">
                می‌توانید کلمه دیگری را جستجو کنید یا از ابزارهای آنلاین ارزیابی ما استفاده کنید.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
                className="text-xs font-bold text-[#6D5AA8] underline cursor-pointer"
              >
                مشاهده همه موضوعات
              </button>
            </div>
          ) : (
            filteredTopics.map((topic) => {
              const isOpen = expandedTopicId === topic.id;
              return (
                <div
                  key={topic.id}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isOpen
                      ? 'bg-white border-[#6D5AA8] shadow-md ring-1 ring-[#6D5AA8]/20'
                      : 'bg-[#FAF8F5] border-[#E5E0EA] hover:border-[#6D5AA8]/40'
                  }`}
                >
                  {/* Accordion Trigger */}
                  <button
                    onClick={() => setExpandedTopicId(isOpen ? null : topic.id)}
                    className="w-full p-5 sm:p-6 text-right flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <span className="w-8 h-8 rounded-xl bg-[#f2eff8] text-[#6D5AA8] flex items-center justify-center shrink-0">
                        <BookOpen className="w-4 h-4" />
                      </span>
                      <div>
                        <h3 className="text-sm sm:text-base font-black text-[#292733] leading-snug">
                          {topic.query}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[10px] font-bold text-[#5e826b] bg-[#edf5f0] px-2.5 py-0.5 rounded-full">
                            {topic.categoryLabel}
                          </span>
                          <span className="text-[10px] text-[#8e8a96] font-medium hidden sm:inline">
                            {topic.monthlySearches}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full bg-white border border-[#E5E0EA] flex items-center justify-center text-[#6D5AA8] shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 bg-[#6D5AA8] text-white border-transparent' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Accordion Content */}
                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-2 border-t border-[#E5E0EA]/60 bg-white">
                      <p className="text-xs sm:text-sm text-[#292733] leading-relaxed mb-4 text-justify">
                        {topic.answerSummary}
                      </p>

                      <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#E5E0EA] mb-5">
                        <span className="block text-[11px] font-black text-[#44386B] mb-2">
                          نکات کلیدی بالینی:
                        </span>
                        <ul className="space-y-1.5">
                          {topic.keyPoints.map((point, pIdx) => (
                            <li
                              key={pIdx}
                              className="text-xs text-[#6F6B78] flex items-start gap-2 leading-relaxed"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#5e826b] mt-0.5 shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Links */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs">
                        <div className="flex items-center gap-2">
                          {topic.articleSlug && (
                            <a
                              href={`/articles/${topic.articleSlug}`}
                              onClick={(e) => { e.preventDefault(); onSelectArticle(topic.articleSlug!); }}
                              className="inline-flex items-center gap-1.5 text-[#6D5AA8] hover:text-[#44386B] font-black hover:underline cursor-pointer"
                            >
                              <span>مطالعه مقاله کامل تخصصی</span>
                              <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                            </a>
                          )}
                          {topic.serviceSlug && (
                            <a
                              href={`/services/${topic.serviceSlug}`}
                              onClick={(e) => { e.preventDefault(); onSelectService(topic.serviceSlug!); }}
                              className="inline-flex items-center gap-1.5 text-[#5e826b] hover:text-[#4d6d58] font-bold hover:underline cursor-pointer mr-3"
                            >
                              <span>مشاهده پروتکل خدمت</span>
                            </a>
                          )}
                        </div>

                        <a
                          href={`https://wa.me/989199087264?text=${encodeURIComponent(
                            `سلام، درباره موضوع «${topic.query}» در سایت مطالعه کردم و برای مشاوره با خانم خوینی درخواست نوبت دارم.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[#6D5AA8] bg-[#f2eff8] hover:bg-[#6D5AA8] hover:text-white px-3.5 py-1.5 rounded-full font-bold transition-all"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>مشاوره اختصاصی این موضوع</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Banner linking to tools */}
        <div className="bg-gradient-to-r from-[#44386B] to-[#6D5AA8] rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-right">
            <span className="inline-block bg-white/20 text-white text-[11px] font-black px-3 py-1 rounded-full mb-3 backdrop-blur-xs">
              ابزار خودسنجی هوشمند
            </span>
            <h3 className="text-xl sm:text-2xl font-black mb-2">
              هنوز مطمئن نیستید رابطه شما در چه سطحی از ریسک قرار دارد؟
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              با شرکت در تست آنلاین رایگان سلامت رابطه انریچ، کارنامه بالینی تفکیکی خود را دریافت نموده و ریشه تعارضات را شناسایی کنید.
            </p>
          </div>

          <button
            onClick={onScrollToTools}
            className="w-full md:w-auto px-7 py-4 bg-white hover:bg-[#FAF8F5] text-[#44386B] rounded-full font-black text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#E8A58D]" />
            <span>شروع تست رایگان رابطه (۳ دقیقه)</span>
          </button>
        </div>
      </div>
    </section>
  );
};
