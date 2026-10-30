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
  Globe2,
  MapPin,
  ShieldCheck,
  Award,
  Video
} from 'lucide-react';

interface SeoKeywordTopic {
  id: string;
  query: string;
  category: 'google-trends' | 'infidelity' | 'conflict' | 'intimacy' | 'divorce' | 'premarital' | 'methods';
  categoryLabel: string;
  monthlySearches: string;
  answerSummary: string;
  keyPoints: string[];
  articleSlug?: string;
  serviceSlug?: string;
  isGoogleTrending?: boolean;
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
  const [expandedTopicId, setExpandedTopicId] = useState<string | null>('q-g1');

  // Exact Google Search Suggestions from user screenshot
  const googleTopKeywords = [
    { label: 'زوج درمانگر', query: 'زوج درمانگر' },
    { label: 'زوج درمانگر خوب در تهران', query: 'زوج درمانگر خوب در تهران' },
    { label: 'زوج درمانی', query: 'زوج درمانی' },
    { label: 'زوج درمانگر آنلاین', query: 'زوج درمانگر آنلاین' },
    { label: 'زوج درمانگر خوب', query: 'زوج درمانگر خوب' },
    { label: 'زوج درمانگر شیراز', query: 'زوج درمانگر شیراز' },
    { label: 'زوج درمانی چیست', query: 'زوج درمانی چیست' },
    { label: 'زوج درمانگر مشهد', query: 'زوج درمانگر مشهد' },
  ];

  const topics: SeoKeywordTopic[] = [
    {
      id: 'q-g1',
      query: 'زوج درمانی چیست و چه زمانی به زوج درمانگر مراجعه کنیم؟',
      category: 'google-trends',
      categoryLabel: 'ترند گوگل: زوج درمانی چیست',
      monthlySearches: '۹۵,۰۰۰+ جستجو در ماه',
      isGoogleTrending: true,
      answerSummary:
        'زوج درمانی (Couples Therapy) شاخه‌ای تخصصی از روانشناسی بالینی است که در آن درمانگر به جای مقصر دانستن زن یا شوهر، چرخه تعاملی و آسیب‌های دلبستگی بین دو طرف را هدف قرار می‌دهد. اگر دعواهای شما بیش از ۲۴ ساعت به قهر می‌انجامد، صمیمیت جنسی از بین رفته یا دچار طلاق عاطفی شده‌اید، مداخله بهنگام زوج درمانگر از فروپاشی رابطه جلوگیری می‌کند.',
      keyPoints: [
        'رویکرد علمی هیجان‌مدار (EFT) با اثربخشی ۷۵٪ پیوند امن را احیا می‌کند.',
        'تفاوت بنیادین با پادرمیانی اطرافیان: بی‌طرفی ۱۰۰٪ بالینی و رویکرد شواهدنگر.',
        'طول دوره استاندارد معمولاً بین ۸ تا ۱۶ جلسه هفتگی است.',
      ],
      articleSlug: 'what-is-couples-therapy',
      serviceSlug: 'couples-therapy',
    },
    {
      id: 'q-g2',
      query: 'زوج درمانگر خوب در تهران کیست و چه ویژگی‌هایی دارد؟',
      category: 'google-trends',
      categoryLabel: 'ترند گوگل: زوج درمانگر تهران',
      monthlySearches: '۸۸,۰۰۰+ جستجو در ماه',
      isGoogleTrending: true,
      answerSummary:
        'یک زوج درمانگر خوب در تهران باید دارای مدرک کارشناسی ارشد یا دکتری روانشناسی بالینی، پروانه معتبر اشتغال تخصصی از سازمان نظام روانشناسی (مانند پروانه ۱۴۱۴۰۸۳ مهناز خوینی) و گواهینامه‌های رسمی دوره‌های بین‌المللی EFT و گاتمن باشد. مرکز تخصصی زوج درمان پیوند امن در منطقه ۲ غرب تهران محیطی کاملاً آرام، محرمانه و بدون قضاوت را برای زوجین فراهم نموده است.',
      keyPoints: [
        'استعلام مستقیم پروانه اشتغال تخصصی در سامانه سازمان نظام روانشناسی.',
        'دسترسی عالی از غرب، شمال و مرکز تهران (صادقیه، اشرفی، پونک، سعادت‌آباد).',
        'امکان رزرو جلسات حضوری یا آنلاین با پروتکل‌های یکپارچه بالینی.',
      ],
      articleSlug: 'good-couples-therapist-in-tehran',
      serviceSlug: 'couples-therapy',
    },
    {
      id: 'q-g3',
      query: 'زوج درمانگر آنلاین؛ مشاوره تصویری غیرحضوری در سراسر ایران و جهان',
      category: 'google-trends',
      categoryLabel: 'ترند گوگل: زوج درمانگر آنلاین',
      monthlySearches: '۷۲,۰۰۰+ جستجو در ماه',
      isGoogleTrending: true,
      answerSummary:
        'پژوهش‌های بالینی انجمن روانشناسی آمریکا (APA) ثابت کرده‌اند جلسات آنلاین زوج درمانی تصویری با رویکرد EFT اثربخشی کاملاً برابری با جلسات حضوری دارند. این خدمت برای زوج‌های پرمشغله، هم‌وطنان در شهرهای مختلف ایران و ایرانیان مقیم خارج از کشور با تطبیق دقیق منطقه زمانی و در بستر امن رمزنگاری‌شده برگزار می‌شود.',
      keyPoints: [
        'حذف اتلاف وقت در ترافیک و امکان حضور از محیط راحت و طبیعی منزل.',
        'امکان برگزاری تماس تصویری سه‌طرفه در صورت حضور یکی از زوجین در شهر دیگر.',
        'پوشش کامل ایرانیان خارج از کشور در کانادا، اروپا، آمریکا و استرالیا.',
      ],
      articleSlug: 'online-couples-therapist',
      serviceSlug: 'online-counseling',
    },
    {
      id: 'q-g4',
      query: 'ویژگی‌های یک زوج درمانگر خوب؛ چطور درمانگر مناسب را انتخاب کنیم؟',
      category: 'google-trends',
      categoryLabel: 'ترند گوگل: زوج درمانگر خوب',
      monthlySearches: '۶۸,۰۰۰+ جستجو در ماه',
      isGoogleTrending: true,
      answerSummary:
        'یک زوج درمانگر خوب هرگز در جایگاه قاضی یا داور نمی‌نشیند، از نصیحت‌های سطحی پرهیز می‌کند، تعصبات جنسیتی ندارد و مجهز به پروتکل‌های درمانی استاندارد است. او با ایجاد فضایی که هر دو طرف احساس شنیده شدن کنند، به زوجین کمک می‌کند چرخه منفی مشاجرات را متوقف سازند.',
      keyPoints: [
        'بی‌طرفی مطلق و هدایت جلسه به سمت گفتگوهای عمیق به جای جنگ قدرت.',
        'مهارت در بحران‌زدایی فوری پس از کشف خیانت یا تصمیم‌های شتاب‌زده طلاق.',
        'تعیین تکالیف خانگی هدفمند برای بازسازی گام‌به‌گام صمیمیت.',
      ],
      articleSlug: 'good-couples-therapist-in-tehran',
      serviceSlug: 'couples-therapy',
    },
    {
      id: 'q-g5',
      query: 'زوج درمانگر شیراز؛ راهنمای انتخاب متخصص و مشاوره آنلاین برای شیراز',
      category: 'google-trends',
      categoryLabel: 'ترند گوگل: زوج درمانگر شیراز',
      monthlySearches: '۴۵,۰۰۰+ جستجو در ماه',
      isGoogleTrending: true,
      answerSummary:
        'زوج‌های ساکن شیراز و استان فارس می‌توانند به سادگی و بدون نیاز به سفر به پایتخت، از طریق جلسات آنلاین تصویری با مهناز خوینی (زوج درمانگر باسابقه تهران) ارتباط برقرار کنند. این شیوه علاوه بر دسترسی به بالاترین سطح استانداردهای EFT، نگرانی از برخورد تصادفی با آشنایان در کلینیک‌های محلی را برطرف ساخته و حریم خصوصی ۱۰۰٪ را تضمین می‌کند.',
      keyPoints: [
        'حفظ کامل حریم خصوصی و عدم افشای اسرار در محافل خانوادگی.',
        'درک بالینی ظرافت‌های فرهنگی و بافت خانواده‌های اصیل شیرازی.',
        'هماهنگی سریع نوبت جلسات در روزهای زوج و فرد متناسب با زمان مراجعان.',
      ],
      articleSlug: 'couples-therapy-shiraz',
      serviceSlug: 'online-counseling',
    },
    {
      id: 'q-g6',
      query: 'زوج درمانگر مشهد؛ مشاوره تخصصی زوج درمانی و خانواده در مشهد',
      category: 'google-trends',
      categoryLabel: 'ترند گوگل: زوج درمانگر مشهد',
      monthlySearches: '۴۸,۰۰۰+ جستجو در ماه',
      isGoogleTrending: true,
      answerSummary:
        'در کلان‌شهر مشهد، تعارض میان ارزش‌های سنتی و سبک زندگی مدرن و دغدغه‌های استقلال خانواده جوانان از شایع‌ترین عوامل اختلاف است. مراجعان مشهد می‌توانند از خدمات زوج درمانی آنلاین مرکز مهناز خوینی برای حل تعارضات زناشویی، مشاوره خیانت، درمان طلاق عاطفی و سکس‌تراپی بدون پیش‌داوری بهره‌مند شوند.',
      keyPoints: [
        'فضایی بدون سوگیری‌های تعصب‌آمیز و کاملاً متمرکز بر علم روانشناسی رابطه.',
        'بررسی دقیق چالش‌های رابطه زناشویی و سکس‌تراپی با رعایت کامل موازین اخلاقی.',
        'امکان بهره‌مندی زوجین در سراسر استان خراسان رضوی و شمالی.',
      ],
      articleSlug: 'couples-therapy-mashhad',
      serviceSlug: 'online-counseling',
    },
    {
      id: 'q-g7',
      query: 'زوج درمانی چیست و چند جلسه طول می‌کشد؟',
      category: 'methods',
      categoryLabel: 'اصول زوج درمانی',
      monthlySearches: '۵۶,۰۰۰+ جستجو در ماه',
      isGoogleTrending: true,
      answerSummary:
        'جلسات استاندارد زوج درمانی معمولاً بین ۸ تا ۱۶ جلسه هفتگی ۶۰ تا ۹۰ دقیقه‌ای زمان می‌برد. مراحل شامل ارزیابی اولیه، مصاحبه‌های فردی با هر یک از همسران، توافق بر سر اهداف درمانی، مداخله هیجانی EFT و در نهایت تثبیت مهارت‌های حل تعارض برای تضمین پایداری زندگی مشترک است.',
      keyPoints: [
        'جلسات اول به سنجش بالینی و کشف زیربنای تعارضات اختصاص دارد.',
        'آموزش خنثی‌سازی ۴ سوارکار طلاق جان گاتمن در دعواها.',
        'جلسات تثبیت نهایی مانع از بازگشت به رفتارهای فرساینده کهنه می‌شود.',
      ],
      articleSlug: 'what-is-couples-therapy',
      serviceSlug: 'couples-therapy',
    },
    {
      id: 'q-g8',
      query: 'نقش زوج درمانگر در نجات رابطه در آستانه جدایی و بازسازی عشق',
      category: 'divorce',
      categoryLabel: 'طلاق عاطفی و پیشگیری',
      monthlySearches: '۵۲,۰۰۰+ جستجو در ماه',
      isGoogleTrending: true,
      answerSummary:
        'یک زوج درمانگر متخصص با ایجاد حریم امن مکالمه، به زوج‌ها کمک می‌کند فراتر از خشم و داد و بیداد، ریشه‌های دلبستگی آسیب‌دیده و نیاز به دیده شدن را به زبان بیاورند. تجربه نشان می‌دهد در بیش از ۷۰٪ مواردی که هر دو نفر تمایل حداقلی برای کار روی رابطه دارند، شعله صمیمیت مجدداً روشن می‌شود.',
      keyPoints: [
        'تشخیص افتراقی بین بحران‌های قابل ترمیم و آسیب‌های روابط سمی نامتقارن.',
        'تمرین مکالمات آسیب‌پذیر و کاهش کورتیزول و ضربان قلب در تعارضات.',
        'در صورت لزوم، هدایت به سمت طلاق آگاهانه و کاهش تروما برای زوج و فرزندان.',
      ],
      articleSlug: 'deciding-about-divorce',
      serviceSlug: 'divorce-counseling',
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
  ];

  const categories = [
    { id: 'all', label: 'همه موضوعات' },
    { id: 'google-trends', label: '⭐ ترندهای برتر گوگل (پرجستجو)' },
    { id: 'infidelity', label: 'خیانت و بازسازی اعتماد' },
    { id: 'conflict', label: 'دعوا، قهر و حل اختلاف' },
    { id: 'intimacy', label: 'سردی عاطفی و سکس‌تراپی' },
    { id: 'divorce', label: 'طلاق عاطفی و جدایی' },
    { id: 'premarital', label: 'مشاوره پیش از ازدواج' },
    { id: 'methods', label: 'رویکردها و اصول بالینی' },
  ];

  const handleChipClick = (keyword: string) => {
    setSearchTerm(keyword);
    setActiveCategory('all');
    // find matched topic
    const matched = topics.find(
      (t) =>
        t.query.includes(keyword) ||
        t.categoryLabel.includes(keyword) ||
        (t.articleSlug && t.articleSlug.includes(keyword))
    );
    if (matched) {
      setExpandedTopicId(matched.id);
    }
  };

  const filteredTopics = topics.filter((t) => {
    const matchesCategory = activeCategory === 'all' || t.category === activeCategory;
    const matchesSearch =
      searchTerm === '' ||
      t.query.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.answerSummary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 bg-white border-t border-[#E5E0EA]" id="seo-hub">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-[#A67C2E] uppercase mb-3 bg-[#FAF5EB] px-3.5 py-1.5 rounded-full border border-[#C5A059]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>پاسخ بالینی به پرجستجوترین کلمات گوگل</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#2A1E35] mb-4 leading-tight">
            دانشنامه کلمات کلیدی و جستجوهای پرطرفدار{' '}
            <span className="text-[#6D5AA8] block sm:inline">مرکز تخصصی زوج درمان و زوج‌درمانی</span>
          </h2>

          <p className="text-sm sm:text-base text-[#6F6B78] leading-relaxed max-w-2xl mx-auto">
            پاسخ‌های تحلیلی و مستند مهناز خوینی (زوج درمانگر باسابقه بالینی، پروانه نظام روانشناسی ۱۴۱۴۰۸۳) به کلیدی‌ترین دغدغه‌های مراجعان در تهران، شهرستان‌ها و آنلاین سراسر جهان.
          </p>
        </div>

        {/* Google Autocomplete Suggestions Bar */}
        <div className="max-w-4xl mx-auto mb-8 bg-[#FAF8F5] p-5 sm:p-6 rounded-3xl border border-[#E8DFD5] shadow-xs">
          <div className="flex items-center gap-2 mb-3.5 text-xs font-black text-[#2A1E35]">
            <TrendingUp className="w-4 h-4 text-[#C5A059]" />
            <span>پیشنهادات برتر سرچ گوگل برای عبارت «زوج درمان»:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {googleTopKeywords.map((item, idx) => {
              const isSelected = searchTerm === item.query;
              return (
                <button
                  key={idx}
                  onClick={() => handleChipClick(item.query)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#6D5AA8] text-white shadow-sm ring-2 ring-[#6D5AA8]/30'
                      : 'bg-white hover:bg-[#F2EEF8] text-[#3E2F5B] border border-[#E8DFD5] hover:border-[#6D5AA8]/40'
                  }`}
                >
                  <Search className="w-3 h-3 text-[#A67C2E]" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="relative mb-5">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="جستجوی مستقیم سوال یا کلمه کلیدی (مثال: زوج درمانگر خوب در تهران، زوج درمانی چیست، آنلاین، شیراز، مشهد...)"
              className="w-full px-5 py-4 pr-12 bg-white border border-[#E8DFD5] rounded-xl text-xs sm:text-sm font-medium text-[#2A1E35] focus:bg-white focus:border-[#6D5AA8] focus:ring-2 focus:ring-[#6D5AA8]/20 focus:outline-none shadow-xs transition-all"
            />
            <Search className="w-5 h-5 text-[#6D5AA8] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-bold text-[#8A8494] hover:text-[#2A1E35] cursor-pointer"
              >
                پاک کردن
              </button>
            )}
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#2A1E35] text-white shadow-md border border-[#C5A059]/40'
                    : 'bg-white text-[#6F6B78] hover:text-[#2A1E35] hover:border-[#6D5AA8]/40 border border-[#E8DFD5]'
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
                می‌توانید کلمه دیگری را جستجو کنید یا از ابزارهای آنلاین ارزیابی ما استفاده نمایید.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
                className="text-xs font-bold text-[#6D5AA8] underline cursor-pointer"
              >
                مشاهده همه کلمات و پرسش‌ها
              </button>
            </div>
          ) : (
            filteredTopics.map((topic) => {
              const isOpen = expandedTopicId === topic.id;
              return (
                <div
                  key={topic.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-[#6D5AA8]/50 shadow-md ring-1 ring-[#6D5AA8]/15'
                      : 'bg-white border-[#E8DFD5] hover:border-[#6D5AA8]/30 shadow-xs'
                  }`}
                >
                  {/* Accordion Trigger */}
                  <button
                    onClick={() => setExpandedTopicId(isOpen ? null : topic.id)}
                    className="w-full p-5 sm:p-6 text-right flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5 flex-1">
                      <span
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isOpen
                            ? 'bg-[#2A1E35] text-[#C5A059]'
                            : 'bg-[#FAF8F5] text-[#2A1E35] border border-[#E8DFD5]'
                        }`}
                      >
                        <BookOpen className="w-4 h-4" />
                      </span>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <h3 className="text-sm sm:text-base font-black text-[#2A1E35] leading-snug">
                            {topic.query}
                          </h3>
                          {topic.isGoogleTrending && (
                            <span className="text-[10px] font-black bg-[#FAF5EB] text-[#A67C2E] border border-[#C5A059]/40 px-2 py-0.5 rounded-md">
                              ترند گوگل
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[10px] font-mono font-bold text-[#6D5AA8] bg-[#F2EEF8] border border-[#6D5AA8]/20 px-2.5 py-0.5 rounded-md">
                            {topic.categoryLabel}
                          </span>
                          <span className="text-[10px] text-[#7A7382] font-medium hidden sm:inline">
                            {topic.monthlySearches}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#E8DFD5] flex items-center justify-center text-[#2A1E35] shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 bg-[#2A1E35] text-[#C5A059] border-transparent' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Accordion Content */}
                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-2 border-t border-[#F0EAE1] bg-white">
                      <p className="text-xs sm:text-sm text-[#5A5265] leading-relaxed mb-4 text-justify">
                        {topic.answerSummary}
                      </p>

                      <div className="bg-[#FAF8F5] p-5 rounded-xl border border-[#E8DFD5] mb-5">
                        <span className="block text-[11px] font-black text-[#2A1E35] mb-2">
                          نکات کلیدی و راهنمای بالینی:
                        </span>
                        <ul className="space-y-2">
                          {topic.keyPoints.map((point, pIdx) => (
                            <li
                              key={pIdx}
                              className="text-xs text-[#6F6B78] flex items-start gap-2.5 leading-relaxed"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#3E6B56] mt-0.5 shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Links */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs">
                        <div className="flex items-center gap-3">
                          {topic.articleSlug && (
                            <a
                              href={`/articles/${topic.articleSlug}`}
                              onClick={(e) => {
                                e.preventDefault();
                                onSelectArticle(topic.articleSlug!);
                              }}
                              className="inline-flex items-center gap-1.5 text-[#6D5AA8] hover:text-[#44386B] font-black hover:underline cursor-pointer"
                            >
                              <span>مطالعه مقاله کامل تخصصی</span>
                              <ArrowRight className="w-3.5 h-3.5 rotate-180 text-[#6D5AA8]" />
                            </a>
                          )}
                          {topic.serviceSlug && (
                            <a
                              href={`/services/${topic.serviceSlug}`}
                              onClick={(e) => {
                                e.preventDefault();
                                onSelectService(topic.serviceSlug!);
                              }}
                              className="inline-flex items-center gap-1.5 text-[#3E6B56] hover:text-[#2A1E35] font-bold hover:underline cursor-pointer"
                            >
                              <span>مشاهده پروتکل خدمت</span>
                            </a>
                          )}
                        </div>

                        <a
                          href={`https://wa.me/989199087264?text=${encodeURIComponent(
                            `سلام، درباره موضوع «${topic.query}» در سایت مطالعه کردم و برای نوبت مشاوره با خانم خوینی درخواست دارم.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[#2A1E35] bg-[#FAF8F5] border border-[#E8DFD5] hover:border-[#6D5AA8] px-3.5 py-1.5 rounded-xl font-bold transition-all"
                        >
                          <MessageSquare className="w-3.5 h-3.5 text-[#6D5AA8]" />
                          <span>رزرو نوبت مشاوره (حضوری / آنلاین)</span>
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
        <div className="bg-gradient-to-r from-[#3E2F5B] to-[#5E4B82] rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-right">
            <span className="inline-block bg-white/20 text-white text-[11px] font-black px-3 py-1 rounded-full mb-3 backdrop-blur-xs">
              سنجش علمی رابطه آنلاین
            </span>
            <h3 className="text-xl sm:text-2xl font-black mb-2">
              آیا رابطه شما نیازمند مداخله زوج درمانگر است؟
            </h3>
            <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
              با شرکت در تست آنلاین رایگان سلامت رابطه انریچ (ENRICH) و شاخص طلاق گاتمن، کارنامه بالینی تفکیکی خود را در کمتر از ۳ دقیقه دریافت نمایید.
            </p>
          </div>

          <button
            onClick={onScrollToTools}
            className="w-full md:w-auto px-7 py-4 bg-white hover:bg-[#FAF8F5] text-[#3E2F5B] rounded-full font-black text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            <span>شروع تست آنلاین سلامت رابطه (رایگان)</span>
          </button>
        </div>
      </div>
    </section>
  );
};
