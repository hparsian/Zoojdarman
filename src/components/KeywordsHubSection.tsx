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
  Video,
  HeartCrack,
  Brain,
  Phone,
  Compass,
  DollarSign
} from 'lucide-react';

export interface SeoKeywordTopic {
  id: string;
  query: string;
  cluster: 'couples' | 'infidelity' | 'psychology' | 'counseling';
  clusterLabel: string;
  badge: string;
  monthlySearches: string;
  answerSummary: string;
  keyPoints: string[];
  articleSlug?: string;
  serviceSlug?: string;
  isExactGoogleSuggestion?: boolean;
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
  const [activeCluster, setActiveCluster] = useState<string>('all');
  const [expandedTopicId, setExpandedTopicId] = useState<string | null>('coup-1');

  // Exact Google Search Suggestions grouped by the 4 query clusters from user screenshots
  const googlePillars = [
    {
      id: 'couples',
      title: '۱. جستجوهای «زوج درمان»',
      icon: Compass,
      color: '#3E2F5B',
      bgColor: '#F2EEF8',
      keywords: [
        'زوج درمان',
        'زوج درمانگر در تهران',
        'زوج درمان خوب در تهران',
        'تست زوج درمانی',
        'زوج درمان گر',
        'زوج درمانگر خوب در مشهد',
        'زوج درمان اصفهان',
        'زوج درمان خوب',
        'زوج درمان کرمان',
        'زوج درمان تهران',
        'زوج درمان خوب در کرج',
        'از کجا بدانیم باید طلاق بگیریم',
        'فرق نامزدی و عقد'
      ]
    },
    {
      id: 'infidelity',
      title: '۲. جستجوهای «مشاوره خیانت»',
      icon: HeartCrack,
      color: '#D9846A',
      bgColor: '#FBF1ED',
      keywords: [
        'مشاوره آنلاین خیانت',
        'مشاوره خیانت پرسش و پاسخ',
        'مشاوره خیانت',
        'مشاوره خیانت زن',
        'مشاوره خیانت همسر',
        'مشاوره خیانت مرد به زن',
        'مشاوره خیانت در مشهد',
        'مشاوره خیانت زن به شوهر',
        'مشاوره خیانت تلفنی رایگان'
      ]
    },
    {
      id: 'psychology',
      title: '۳. جستجوهای «روانشناس و بالینی»',
      icon: Brain,
      color: '#4E7A66',
      bgColor: '#EEF5F1',
      keywords: [
        'روانشناس آنلاین',
        'روانشناسی بالینی چیست',
        'روانشناس به انگلیسی',
        'روانشناسی به انگلیسی',
        'روانشناسی پول',
        'روانشناسی بالینی',
        'روانشناس'
      ]
    },
    {
      id: 'counseling',
      title: '۴. جستجوهای «مشاوره روانشناسی»',
      icon: Phone,
      color: '#C5A059',
      bgColor: '#FAF5EB',
      keywords: [
        'مشاوره روانشناسی آنلاین',
        'مشاوره آنلاین',
        'مشاوره به انگلیسی',
        'مشاوره رایگان',
        'مشاوره تلفنی رایگان',
        'مشاوره روانشناسی'
      ]
    }
  ];

  const topics: SeoKeywordTopic[] = [
    /* ===================================================================== */
    /* ۱. زوج درمان (Screenshot 1)                                          */
    /* ===================================================================== */
    {
      id: 'coup-1',
      query: 'زوج درمان چیست؟ معرفی خدمات مرکز تخصصی زوج درمان مهناز خوینی',
      cluster: 'couples',
      clusterLabel: 'زوج درمان',
      badge: 'کلمه کلیدی محوری سایت',
      monthlySearches: '۱۱۰,۰۰۰+ جستجو در ماه',
      isExactGoogleSuggestion: true,
      answerSummary:
        '«زوج درمان» شاخه‌ای تخصصی از روان‌شناسی بالینی و محور اصلی خدمات سایت zoojdarman.ir است. در جلسات زوج‌درمانی با مهناز خوینی (پروانه رسمی نظام روان‌شناسی ۱۴۱۴۰۸۳)، به جای نصایح کلی یا سرزنش، چرخه‌های منفی دلبستگی، قهر و تعارضات حل‌نشده با رویکرد شواهدنگر EFT شناسایی و ترمیم می‌شوند تا امنیت و صمیمیت دوباره جریان یابد.',
      keyPoints: [
        'رویکرد علمی هیجان‌مدار (EFT) از معتبرترین پروتکل‌های پژوهشی برای احیای پیوند امن عاطفی است.',
        'تفاوت با پادرمیانی فامیلی: بی‌طرفی بالینی، محرمانگی حرفه‌ای و نبود جانب‌داری جنسیتی.',
        'طول دوره استاندارد معمولاً بین ۸ تا ۱۶ جلسه ۶۰ تا ۹۰ دقیقه‌ای است.'
      ],
      articleSlug: 'what-is-couples-therapy',
      serviceSlug: 'couples-therapy'
    },
    {
      id: 'coup-2',
      query: 'زوج درمان خوب در تهران کیست و چه ویژگی‌هایی دارد؟',
      cluster: 'couples',
      clusterLabel: 'زوج درمان خوب در تهران',
      badge: 'پراستعلام‌ترین در پایتخت',
      monthlySearches: 'تهران و البرز',
      isExactGoogleSuggestion: true,
      answerSummary:
        'یک زوج‌درمانگر خوب در تهران باید دارای مدرک کارشناسی ارشد یا دکتری روان‌شناسی بالینی، پروانه معتبر اشتغال تخصصی از سازمان نظام روان‌شناسی (پروانه ۱۴۱۴۰۸۳ مهناز خوینی) و تسلط به متد EFT باشد. کلینیک تخصصی پیوند امن در منطقه ۲ تهران (محدوده صادقیه – پونک) محیطی آرام، محرمانه و بدون قضاوت را فراهم کرده است.',
      keyPoints: [
        'امکان استعلام مستقیم پروانه اشتغال تخصصی در سامانه سازمان نظام روان‌شناسی و مشاوره.',
        'دسترسی مناسب از غرب، شمال و مرکز تهران و نزدیکی به مترو و بزرگراه‌های اصلی.',
        'امکان برگزاری جلسات حضوری در تهران یا جلسات آنلاین تصویری با پروتکل یکسان.'
      ],
      articleSlug: 'good-couples-therapist-in-tehran',
      serviceSlug: 'couples-therapy'
    },
    {
      id: 'coup-3',
      query: 'زوج درمان گر کیست و چه تفاوتی با مشاور خانواده یا روانشناس عمومی دارد؟',
      cluster: 'couples',
      clusterLabel: 'زوج درمان گر',
      badge: 'تخصص بالینی رابطه',
      monthlySearches: 'آگاهی بالینی',
      isExactGoogleSuggestion: true,
      answerSummary:
        'اصطلاح «زوج‌درمانگر» به متخصص بالینی اطلاق می‌شود که مهارت مداخله هم‌زمان روی تعامل دو نفر را دارد. بر خلاف روان‌شناس عمومی که تعارضات فردی یک شخص را بررسی می‌کند، زوج‌درمانگر چرخه تعامل دوطرفه، خشم‌های زیرین و نیازهای دلبستگی میان همسران را ریشه‌یابی و بازسازی می‌کند.',
      keyPoints: [
        'تسلط بر مداخله در بحران‌های حاد خیانت و شوک عاطفی.',
        'پرهیز کامل از قضاوت، نصیحت، داوری یا مقصر دانستن زن یا شوهر.',
        'هدایت مکالمات از دفاع و سرزنش به سمت بیان آسیب‌پذیر نیازهای واقعی.'
      ],
      articleSlug: 'good-couples-therapist-in-tehran',
      serviceSlug: 'couples-therapy'
    },
    {
      id: 'coup-4',
      query: 'زوج درمان اصفهان؛ مشاوره تخصصی و جلسات آنلاین برای زوج‌های اصفهان',
      cluster: 'couples',
      clusterLabel: 'زوج درمان اصفهان',
      badge: 'استان اصفهان',
      monthlySearches: 'مشاوره آنلاین',
      isExactGoogleSuggestion: true,
      answerSummary:
        'زوج‌های ساکن اصفهان، شاهین‌شهر، نجف‌آباد، کاشان و خمینی‌شهر می‌توانند بدون نیاز به سفر به تهران، از طریق جلسات تصویری محرمانه با مهناز خوینی ارتباط برقرار کنند. این شیوه علاوه بر دسترسی به رویکرد EFT، دغدغه برخورد با آشنایان در مراکز محلی را از میان برمی‌دارد و محرمانگی حرفه‌ای را حفظ می‌کند.',
      keyPoints: [
        'حفظ محرمانگی حرفه‌ای بدون ثبت پرونده در مراکز محلی.',
        'درک بالینی ظرافت‌های فرهنگی، تعارض سنت و مدرنیته و مرزبندی با خانواده‌ها.',
        'هماهنگی منظم نوبت جلسات تصویری در روزهای هفته و ساعات عصر.'
      ],
      articleSlug: 'couples-therapy-esfahan',
      serviceSlug: 'online-counseling'
    },
    {
      id: 'coup-5',
      query: 'ویژگی‌های یک زوج درمان خوب؛ چطور درمانگر مناسب را انتخاب کنیم؟',
      cluster: 'couples',
      clusterLabel: 'زوج درمان خوب',
      badge: 'راهنمای بالینی انتخاب',
      monthlySearches: 'راهنمای انتخاب',
      isExactGoogleSuggestion: true,
      answerSummary:
        'یک زوج‌درمانگر خوب هرگز در جایگاه قاضی یا داور نمی‌نشیند، از نصیحت‌های سطحی پرهیز می‌کند و مجهز به پروتکل‌های درمانی استاندارد است. او با ایجاد فضایی که هر دو طرف احساس شنیده‌شدن کنند، چرخه باطل مشاجرات را متوقف می‌سازد.',
      keyPoints: [
        'بی‌طرفی حرفه‌ای و هدایت جلسه به سمت مکالمات آسیب‌پذیر و امن.',
        'مهارت در تثبیت بحران پس از کشف خیانت یا تردید در طلاق.',
        'تعیین گام‌های عملی بین جلسات برای بازسازی تدریجی اعتماد و صمیمیت.'
      ],
      articleSlug: 'what-is-couples-therapy',
      serviceSlug: 'couples-therapy'
    },
    {
      id: 'coup-6',
      query: 'زوج درمان کرمان؛ مشاوره خانواده و زوج درمانی در استان کرمان و جنوب شرق',
      cluster: 'couples',
      clusterLabel: 'زوج درمان کرمان',
      badge: 'کرمان و جنوب شرق کشور',
      monthlySearches: 'مشاوره آنلاین',
      isExactGoogleSuggestion: true,
      answerSummary:
        'جلسات آنلاین تصویری مرکز مهناز خوینی انتخابی امن و در دسترس برای خانواده‌های کرمان، رفسنجان، سیرجان و بم است تا بدون نیاز به سفر طولانی، از خدمات تخصصی زوج‌درمانی بهره‌مند شوند.',
      keyPoints: [
        'فضایی بدون سوگیری‌های سنتی و کاملاً متمرکز بر علم روان‌شناسی رابطه.',
        'بررسی دقیق چالش‌های رابطه زناشویی، خیانت و سکس‌تراپی با رعایت اصول حرفه‌ای.',
        'صرفه‌جویی در زمان و هزینه‌های سفر با حفظ کیفیت درمانی.'
      ],
      articleSlug: 'couples-therapy-kerman',
      serviceSlug: 'online-counseling'
    },
    {
      id: 'coup-7',
      query: 'زوج درمان تهران؛ دسترسی مستقیم به کلینیک غرب تهران و جلسات حضوری',
      cluster: 'couples',
      clusterLabel: 'زوج درمان تهران',
      badge: 'دسترسی سریع پایتخت',
      monthlySearches: 'حضوری تهران',
      isExactGoogleSuggestion: true,
      answerSummary:
        'مرکز زوج‌درمان تهران واقع در منطقه ۲ پایتخت (محدوده صادقیه – پونک) دسترسی سرراستی برای ساکنان غرب، شمال و مرکز تهران فراهم کرده است. مراجعان می‌توانند از طریق بزرگراه‌های یادگار امام، اشرفی اصفهانی، حکیم یا ایستگاه مترو صادقیه به کلینیک مراجعه نمایند.',
      keyPoints: [
        'موقعیت مناسب خارج از محدوده طرح ترافیک اصلی.',
        'اتاق‌های اختصاصی مشاوره زوجین در محیطی آرام و محرمانه.',
        'امکان رزرو نوبت‌های عصر ویژه زوجین شاغل.'
      ],
      articleSlug: 'good-couples-therapist-in-tehran',
      serviceSlug: 'couples-therapy'
    },
    {
      id: 'coup-8',
      query: 'زوج درمان خوب در کرج؛ خدمات حضوری و آنلاین برای استان البرز',
      cluster: 'couples',
      clusterLabel: 'زوج درمان خوب در کرج',
      badge: 'کرج و استان البرز',
      monthlySearches: 'البرز و غرب تهران',
      isExactGoogleSuggestion: true,
      answerSummary:
        'ساکنان کرج، عظیمیه، جهانشهر، گوهردشت و مهرشهر به دلیل نزدیکی به منطقه ۲ تهران گزینه‌ای سرراست برای مراجعه حضوری یا انتخاب جلسات آنلاین تصویری بدون ترافیک با مهناز خوینی دارند.',
      keyPoints: [
        'دسترسی سریع از اتوبان تهران-کرج و مترو صادقیه تا کلینیک منطقه ۲ تهران.',
        'امکان تلفیق جلسه ارزیابی حضوری با جلسات آنلاین هفتگی در منزل.',
        'حل ریشه‌ای فرسودگی رابطه و چرخه‌های تکرارشونده تعارض.'
      ],
      articleSlug: 'couples-therapy-karaj',
      serviceSlug: 'couples-therapy'
    },
    {
      id: 'coup-mashhad',
      query: 'راهنمای انتخاب زوج درمانگر خوب در مشهد و مشاوره آنلاین تخصصی',
      cluster: 'couples',
      clusterLabel: 'زوج درمانگر خوب در مشهد',
      badge: 'مشهد و خراسان رضوی',
      monthlySearches: 'مشاوره آنلاین',
      isExactGoogleSuggestion: true,
      answerSummary:
        'مراجعان مشهد و خراسان رضوی می‌توانند بدون نگرانی از برخورد با آشنایان در کلینیک‌های محلی، جلسات آنلاین تصویری را با مهناز خوینی (پروانه رسمی نظام روان‌شناسی ۱۴۱۴۰۸۳) با رعایت محرمانگی حرفه‌ای برگزار کنند.',
      keyPoints: [
        'ارائه رویکرد شواهدنگر EFT برای حل تعارضات زناشویی، دخالت خانواده‌ها و بازسازی اعتماد.',
        'امنیت روانی و محرمانگی حرفه‌ای بدون ثبت پرونده کاغذی محلی.',
        'نوبت‌دهی منظم تصویری برای مشهد و شهرستان‌های استان خراسان.'
      ],
      articleSlug: 'couples-therapy-mashhad',
      serviceSlug: 'online-counseling'
    },
    {
      id: 'coup-divorce-test',
      query: 'از کجا بدانیم باید طلاق بگیریم یا هنوز امیدی به نجات زندگی مشترک هست؟',
      cluster: 'couples',
      clusterLabel: 'از کجا بدانیم باید طلاق بگیریم',
      badge: 'تصمیم‌گیری بحران جدایی',
      monthlySearches: 'مشاوره تصمیم‌گیری',
      isExactGoogleSuggestion: true,
      answerSummary:
        'پاسخ به سوال «از کجا بدانیم باید طلاق بگیریم» نیازمند تفکیک علمی بن‌بست واقعی از خستگی ناشی از مشاجرات مکرر است. جلسات مشاوره تصمیم‌گیری طلاق (Discernment Counseling) کمک می‌کند پیش از هر تصمیم حقوقی غیرقابل بازگشت، شفافیت پیدا کنید.',
      keyPoints: [
        'بهره بردن از ابزارهای خودسنجی سایت جهت آگاهی اولیه و طرح پرسش در جلسه.',
        'تفکیک دلخوری‌های قابل درمان از آسیب‌های سیستماتیک و تداوم بی‌تفاوتی.',
        'برگزاری جلسات تخصصی بی‌طرفانه پیش از تصمیم نهایی.'
      ],
      articleSlug: 'signs-marriage-is-over-test',
      serviceSlug: 'couples-therapy'
    },
    {
      id: 'coup-engagement-diff',
      query: 'فرق نامزدی و عقد چیست؟ مقایسه جامع تفاوت‌های روانی، عاطفی، حقوقی و زناشویی',
      cluster: 'couples',
      clusterLabel: 'فرق نامزدی و عقد',
      badge: 'پراستعلام پیش از ازدواج',
      monthlySearches: 'پیش از ازدواج',
      isExactGoogleSuggestion: true,
      answerSummary:
        'مهم‌ترین فرق نامزدی و عقد در تعهد رسمی و مرزهای مرحله است؛ دوران نامزدی مرحله شناخت سنجشی بدون تعهد رسمی است؛ در حالی که دوران عقد تعهد قانونی و خانوادگی ایجاد می‌کند. درک استقلال از خانواده همسر و حل تعارض پیش از خانه مشترک مانع از دلخوری‌های دوران عقد می‌شود.',
      keyPoints: [
        'جدول مقایسه تفاوت‌های عاطفی، مرزبندی خانوادگی و زناشویی نامزدی در برابر عقد.',
        'شناسایی نشانه‌های هشداردهنده (Red Flags) پیش از قطعی شدن تصمیم.',
        'استفاده از جلسات مشاوره و ارزیابی پیش از ازدواج برای شناخت واقع‌بینانه.'
      ],
      articleSlug: 'engagement-period-conflicts',
      serviceSlug: 'premarital-counseling'
    },

    /* ===================================================================== */
    /* ۲. مشاوره خیانت                                                      */
    /* ===================================================================== */
    {
      id: 'inf-online',
      query: 'مشاوره آنلاین خیانت زناشویی؛ راهنمای مدیریت شوک و ترمیم اعتماد',
      cluster: 'infidelity',
      clusterLabel: 'مشاوره آنلاین خیانت',
      badge: 'بحران خیانت',
      monthlySearches: 'مشاوره آنلاین',
      isExactGoogleSuggestion: true,
      answerSummary:
        'مشاوره آنلاین خیانت زناشویی مسیری سریع و محرمانه برای افراد و زوج‌هایی است که به تازگی با حقیقت پیمان‌شکنی مواجه شده‌اند. این جلسات کمک می‌کند قبل از تصمیم‌های شتاب‌زده، شوک اولیه تثبیت شده و مسیر واقع‌بینانه بررسی شود.',
      keyPoints: [
        'پروتکل مهار بحران ۴۸ ساعت اول پس از کشف خیانت.',
        'امکان شروع جلسه فردی و محرمانه در صورت عدم همراهی همسر.',
        'برگزاری جلسات تصویری امن در بستر رمزنگاری‌شده با مهناز خوینی.'
      ],
      articleSlug: 'phone-online-infidelity-counseling',
      serviceSlug: 'infidelity-counseling'
    },
    {
      id: 'inf-1',
      query: 'مشاوره خیانت پرسش و پاسخ؛ جامع‌ترین راهنمای پاسخ به سوالات بحران خیانت',
      cluster: 'infidelity',
      clusterLabel: 'مشاوره خیانت پرسش و پاسخ',
      badge: 'پرسش‌های متداول خیانت',
      monthlySearches: 'راهنمای بالینی',
      isExactGoogleSuggestion: true,
      answerSummary:
        'در مواجهه با کشف خیانت، ذهن پر از سوالات دردناک است: آیا همسرم را ببخشم؟ آیا پیام‌ها را بخوانم؟ آیا اعتماد دوباره ساخته می‌شود؟ در مشاوره تخصصی، درمانگر کمک می‌کند از ترومای حاد هفته‌های اول عبور کنید و فرآیند شفاف‌سازی و بازسازی را اصولی طی نمایید.',
      keyPoints: [
        'مدیریت سوالات درباره جزئیات تا فلاش‌بک‌های آزاردهنده تشدید نشود.',
        'ضرورت توقف کامل ارتباط پنهان به‌عنوان پیش‌شرط بازسازی اعتماد.',
        'فرآیند ۳ مرحله‌ای: مهار شوک، شفاف‌سازی واقعیت و ترمیم تدریجی پیوند.'
      ],
      articleSlug: 'infidelity-counseling-qa',
      serviceSlug: 'infidelity-counseling'
    },
    {
      id: 'inf-2',
      query: 'مشاوره خیانت مرد به زن؛ چرا رخ می‌دهد و مراحل ترمیم رابطه چیست؟',
      cluster: 'infidelity',
      clusterLabel: 'مشاوره خیانت مرد به زن',
      badge: 'تحلیل بالینی',
      monthlySearches: 'راهنمای تخصصی',
      isExactGoogleSuggestion: true,
      answerSummary:
        'پس از خیانت مرد، همسر آسیب‌دیده دچار شوک شدید اعتماد و آسیب به عزت‌نفس می‌شود. پروتکل درمانی شامل پذیرش مسئولیت توسط فرد پیمان‌شکن، شفافیت داوطلبانه و التیام گام‌به‌گام آسیب دلبستگی زن است.',
      keyPoints: [
        'توقف سرزنش همسر آسیب‌دیده یا توجیه پیمان‌شکنی.',
        'شفافیت داوطلبانه و صادقانه برای آرام‌کردن فضای شک و اضطراب.',
        'طول دوره بازسازی اعتماد بسته به همکاری طرفین نیازمند زمان و پیگیری پیوسته است.'
      ],
      articleSlug: 'husband-infidelity-to-wife',
      serviceSlug: 'infidelity-counseling'
    },
    {
      id: 'inf-3',
      query: 'مشاوره خیانت زن به شوهر؛ ریشه‌های عاطفی و مسیر پیش‌رو',
      cluster: 'infidelity',
      clusterLabel: 'مشاوره خیانت زن به شوهر',
      badge: 'تحلیل روان‌شناختی',
      monthlySearches: 'راهنمای تخصصی',
      isExactGoogleSuggestion: true,
      answerSummary:
        'در بسیاری از پرونده‌های بالینی خیانت زنان، زمینه‌هایی از طلاق عاطفی طولانی‌مدت، نادیده گرفته شدن و تنهایی مزمن دیده می‌شود. درمان این وضعیت نیازمند بررسی دقیق سال‌های سردی رابطه، رسیدگی به شوک شدید شوهر و ارزیابی واقع‌بینانه امکان بازسازی تعهد است.',
      keyPoints: [
        'بررسی زمینه تنهایی عاطفی پیش از وقوع بحران بدون توجیه خطا.',
        'برخورد اصولی با خشم و آسیب هویتی شوهر در فضای امن جلسه.',
        'ارزیابی بی‌طرفانه امکان احیای رابطه یا حرکت به سمت جدایی کم‌آسیب.'
      ],
      articleSlug: 'wife-infidelity-to-husband',
      serviceSlug: 'infidelity-counseling'
    },
    {
      id: 'inf-4',
      query: 'مشاوره خیانت در مشهد؛ جلسات آنلاین و محرمانه با زوج‌درمانگر بالینی',
      cluster: 'infidelity',
      clusterLabel: 'مشاوره خیانت در مشهد',
      badge: 'مشهد و خراسان',
      monthlySearches: 'مشاوره آنلاین',
      isExactGoogleSuggestion: true,
      answerSummary:
        'مراجعان محترم مشهد که با بحران خیانت مواجه شده‌اند، می‌توانند بدون دغدغه افشای راز در میان آشنایان، در جلسات آنلاین تصویری با مهناز خوینی با رعایت کامل محرمانگی حرفه‌ای شرکت کنند.',
      keyPoints: [
        'محرمانگی حرفه‌ای بدون ثبت پرونده‌های کاغذی در مراکز محلی.',
        'درک ظرافت‌های فرهنگی و خانوادگی مراجعان استان خراسان.',
        'امکان هماهنگی نوبت در روزهای هفته و ساعات عصر.'
      ],
      articleSlug: 'infidelity-counseling-mashhad',
      serviceSlug: 'infidelity-counseling'
    },
    {
      id: 'inf-5',
      query: 'مشاوره خیانت تلفنی رایگان؛ راهنمای خطوط بحران و تفاوت با درمان بالینی',
      cluster: 'infidelity',
      clusterLabel: 'مشاوره خیانت تلفنی رایگان',
      badge: 'خطوط بحران',
      monthlySearches: 'اورژانس روانی',
      isExactGoogleSuggestion: true,
      answerSummary:
        'خطوط تلفنی رایگان نظیر ۱۴۸۰ (صدای مشاور بهزیستی) و ۱۲۳ برای آرام‌سازی شوک اولیه و پیشگیری از آسیب فوری بسیار مفید هستند؛ اما ترمیم عمیق اعتماد و کار بر روی ریشه‌های دلبستگی نیازمند جلسات ساختاریافته زوج‌درمانی است.',
      keyPoints: [
        'استفاده از خطوط ۱۴۸۰ و ۱۲۳ در شرایط بحرانی حاد و اضطرار.',
        'بهره بردن از ابزارهای خودسنجی رایگان سایت جهت شناخت وضعیت اولیه.',
        'ورود به جلسات تخصصی پس از عبور از فاز شوک لحظه‌ای.'
      ],
      articleSlug: 'free-infidelity-phone-counseling',
      serviceSlug: 'infidelity-counseling'
    },

    /* ===================================================================== */
    /* ۳. روانشناس و روانشناسی بالینی                                       */
    /* ===================================================================== */
    {
      id: 'psy-1',
      query: 'روانشناسی بالینی چیست و یک روانشناس بالینی چه مشکلاتی را درمان می‌کند؟',
      cluster: 'psychology',
      clusterLabel: 'روانشناسی بالینی چیست',
      badge: 'مبانی سلامت روان',
      monthlySearches: 'دانشنامه بالینی',
      isExactGoogleSuggestion: true,
      answerSummary:
        'روان‌شناسی بالینی (Clinical Psychology) شاخه‌ای تخصصی از علم روان‌شناسی است که به ارزیابی، تشخیص و روان‌درمانی مشکلات عاطفی، اضطراب، تروما و تعارضات زوجین می‌پردازد. روان‌شناس بالینی بر خلاف روان‌پزشک، از روش‌های روان‌درمانی مبتنی بر گفت‌وگو و شواهد پژوهشی استفاده می‌کند.',
      keyPoints: [
        'تفاوت روان‌شناس بالینی با روان‌پزشک: روان‌درمانی تخصصی در برابر دارودرمانی.',
        'ضرورت داشتن پروانه رسمی اشتغال تخصصی از سازمان نظام روان‌شناسی (شماره ۱۴۱۴۰۸۳).',
        'کاربست رویکردهای EFT، طرحواره‌درمانی و درمان شناختی-رفتاری.'
      ],
      articleSlug: 'what-is-clinical-psychology',
      serviceSlug: 'couples-therapy'
    },
    {
      id: 'psy-2',
      query: 'روانشناس آنلاین؛ چگونه متخصص معتبر و دارای پروانه را انتخاب کنیم؟',
      cluster: 'psychology',
      clusterLabel: 'روانشناس آنلاین',
      badge: 'انتخاب متخصص معتبر',
      monthlySearches: 'راهنمای انتخاب',
      isExactGoogleSuggestion: true,
      answerSummary:
        'روان‌شناس آنلاین معتبر باید عضو رسمی سازمان نظام روان‌شناسی باشد، پروانه معتبر بالینی داشته باشد و جلسات را در بستری امن و بدون ضبط صدا و تصویر برگزار کند.',
      keyPoints: [
        'استعلام آنلاین شماره نظام در سامانه pcoiran.ir پیش از رزرو نوبت.',
        'تجربه بالینی اثبات‌شده در زمینه تخصصی مورد نیاز (زوج‌درمانی یا فردی).',
        'برگزاری جلسات تصویری منظم با پیگیری ساختاریافته.'
      ],
      articleSlug: 'online-psychologist-selection-guide',
      serviceSlug: 'online-counseling'
    },
    {
      id: 'psy-3',
      query: 'روانشناسی پول در زندگی مشترک؛ حل تعارضات مالی همسران',
      cluster: 'psychology',
      clusterLabel: 'روانشناسی پول',
      badge: 'مدیریت تعارض مالی',
      monthlySearches: 'روابط و اقتصاد',
      isExactGoogleSuggestion: true,
      answerSummary:
        'کتاب «روان‌شناسی پول» (The Psychology of Money) نشان می‌دهد رفتار ما با پول ریشه در احساس امنیت و تجربه‌های رشد دارد. در زندگی مشترک نیز بسیاری از دعواهای مالی بر سر معنای امنیت و آزادی است که با گفت‌وگوی شفاف قابل مدیریت است.',
      keyPoints: [
        'شناخت طرحواره‌های مالی همسر (اضطراب کمبود یا خرج‌کرد جبرانی).',
        'تنظیم شفافیت مالی متناسب با شرایط هر خانواده.',
        'پیشگیری از پنهان‌کاری و بی‌اعتمادی مالی در زندگی مشترک.'
      ],
      articleSlug: 'psychology-of-money-in-marriage',
      serviceSlug: 'couples-therapy'
    },
    {
      id: 'psy-4',
      query: 'روانشناس و روانشناسی به انگلیسی؛ واژگان تخصصی و جلسات دوزبانه',
      cluster: 'psychology',
      clusterLabel: 'روانشناس به انگلیسی',
      badge: 'English Counseling',
      monthlySearches: 'خدمات دوزبانه',
      isExactGoogleSuggestion: true,
      answerSummary:
        'معادل روان‌شناس به انگلیسی «Psychologist» و روان‌شناسی بالینی «Clinical Psychology» است. مرکز مهناز خوینی خدمات مشاوره را برای زوج‌های دوزبانه و ایرانیان مقیم خارج از کشور نیز ارائه می‌دهد.',
      keyPoints: [
        'جلسات مشاوره دوزبانه برای زوج‌های بین‌فرهنگی و مهاجران.',
        'آشنایی با واژگان استاندارد بین‌المللی حوزه زوج‌درمانی.',
        'هماهنگی وقت متناسب با منطقه زمانی کشورهای مختلف.'
      ],
      articleSlug: 'psychology-and-counseling-in-english',
      serviceSlug: 'online-counseling'
    },

    /* ===================================================================== */
    /* ۴. مشاوره روانشناسی                                                  */
    /* ===================================================================== */
    {
      id: 'coun-1',
      query: 'مشاوره روانشناسی آنلاین؛ استانداردهای جلسه امن و تصویری',
      cluster: 'counseling',
      clusterLabel: 'مشاوره روانشناسی آنلاین',
      badge: 'جلسات آنلاین تصویری',
      monthlySearches: 'سراسر کشور و جهان',
      isExactGoogleSuggestion: true,
      answerSummary:
        'مشاوره روان‌شناسی آنلاین به زوجین و افراد امکان می‌دهد بدون محدودیت جغرافیایی و ترافیک، در بستر تصویری امن و محرمانه (Google Meet یا WhatsApp) مطابق اصول نظام روان‌شناسی خدمات دریافت کنند.',
      keyPoints: [
        'امکان شرکت هم‌زمان زوجین حتی در دو مکان متفاوت.',
        'دسترسی ایرانیان سراسر کشور و خارج از کشور به متخصص بالینی.',
        'رعایت کامل اصول عدم ضبط صدا و تصویر در طول جلسه.'
      ],
      articleSlug: 'online-psychological-counseling',
      serviceSlug: 'online-counseling'
    },
    {
      id: 'coun-2',
      query: 'مشاوره رایگان و مشاوره تلفنی رایگان؛ راهنمای کمک فوری و ابزارهای سایت',
      cluster: 'counseling',
      clusterLabel: 'مشاوره رایگان و تلفنی',
      badge: 'خطوط فوریتی و خودسنجی رایگان',
      monthlySearches: 'دسترسی رایگان',
      isExactGoogleSuggestion: true,
      answerSummary:
        'برای مشاوره تلفنی فوری و رایگان، خطوط ۱۴۸۰ (صدای مشاور بهزیستی) و ۱۲۳ (اورژانس اجتماعی) در دسترس هموطنان است. همچنین ابزارهای خودسنجی رابطه در این سایت به‌صورت رایگان برای افزایش آگاهی اولیه در دسترس قرار دارند.',
      keyPoints: [
        'معرفی خطوط رایگان ملی ۱۴۸۰ و ۱۲۳ برای شرایط اضطراری و فوری.',
        'تفاوت راهنمایی تلفنی فوری با فرآیند درمانی منظم زوج‌درمانی.',
        'دسترسی رایگان به ۶ پرسشنامه خودسنجی رابطه در سایت.'
      ],
      articleSlug: 'free-psychological-counseling-tests',
      serviceSlug: 'couples-therapy'
    },
    {
      id: 'coun-3',
      query: 'مشاوره به انگلیسی (Psychological Counseling in English) برای ایرانیان خارج از کشور',
      cluster: 'counseling',
      clusterLabel: 'مشاوره به انگلیسی',
      badge: 'Bilingual Therapy',
      monthlySearches: 'مهاجران و دوزبانه‌ها',
      isExactGoogleSuggestion: true,
      answerSummary:
        'مشاوره به زبان انگلیسی یا دوزبانه برای زوج‌هایی که یکی از طرفین غیرایرانی است یا بیان احساسات به انگلیسی برایشان راحت‌تر است، با توجه به بافت بین‌فرهنگی رابطه ارائه می‌گردد.',
      keyPoints: [
        'درک تفاوت‌های فرهنگی در زوج‌های بین‌فرهنگی و مهاجر.',
        'هماهنگی ساعت جلسات با مناطق زمانی اروپا، آمریکا و استرالیا.',
        'امکان هماهنگی روش پرداخت بین‌المللی با بخش پذیرش.'
      ],
      articleSlug: 'psychology-and-counseling-in-english',
      serviceSlug: 'online-counseling'
    }
  ];

  const handlePillClick = (keyword: string) => {
    setSearchTerm(keyword);
    setActiveCluster('all');
    const matched = topics.find(
      (t) =>
        t.query.includes(keyword) ||
        t.clusterLabel.includes(keyword) ||
        (t.articleSlug && t.articleSlug.includes(keyword))
    );
    if (matched) {
      setExpandedTopicId(matched.id);
    }
  };

  const filteredTopics = topics.filter((t) => {
    const matchesCluster = activeCluster === 'all' || t.cluster === activeCluster;
    const matchesSearch =
      searchTerm === '' ||
      t.query.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.answerSummary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.clusterLabel.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCluster && matchesSearch;
  });

  return (
    <section className="py-12 sm:py-16 bg-[#F4F1EC]" id="seo-hub">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs font-semibold text-[#3D5E4E] mb-2">
            دانشنامه موضوعی و راهنمای بالینی مراجعان
          </p>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#292D2A] mb-4 leading-tight">
            پاسخ بالینی به پرتکرارترین پرسش‌ها و موضوعات{' '}
            <span className="text-[#344A42]">زوج‌درمانی و روان‌شناسی رابطه</span>
          </h1>

          <p className="text-sm sm:text-base text-[#555650] leading-relaxed max-w-2xl mx-auto">
            توضیحات تخصصی مهناز خوینی (کارشناس ارشد روان‌شناسی بالینی، پروانه اشتغال ۱۴۱۴۰۸۳) پیرامون موضوعات پرتکرار مراجعان در تهران، شهرستان‌ها و جلسات آنلاین.
          </p>
        </div>

        {/* 4 Pillars Topics Box */}
        <div className="max-w-4xl mx-auto mb-8 space-y-4">
          <div className="bg-[#FCFBF8] p-5 sm:p-7 rounded-2xl border border-[#E5E0D8]">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-4 pb-3 border-b border-[#E5E0D8]">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#292D2A]">
                <TrendingUp className="w-4 h-4 text-[#3D5E4E]" />
                <span>دسته‌بندی موضوعات و پرسش‌های پرمراجعه:</span>
              </div>
              <span className="text-[11px] text-[#6B6D67]">برای مشاهده پاسخ روی هر عبارت کلیک کنید</span>
            </div>

            {/* Pillar Grid Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
              {googlePillars.map((pillar) => {
                const IconComponent = pillar.icon;
                const isClusterActive = activeCluster === pillar.id;
                return (
                  <button
                    key={pillar.id}
                    type="button"
                    onClick={() => {
                      setActiveCluster(isClusterActive ? 'all' : pillar.id);
                      setSearchTerm('');
                    }}
                    className={`p-3.5 rounded-xl text-right transition-colors cursor-pointer border ${
                      isClusterActive
                        ? 'bg-[#344A42] text-[#FCFBF8] border-[#344A42]'
                        : 'bg-[#F4F1EC] text-[#292D2A] border-[#E5E0D8] hover:border-[#8FAE9B]'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                          isClusterActive ? 'bg-[#273932] text-[#DCE4DE]' : 'bg-[#EDF2EE] text-[#344A42]'
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold truncate">{pillar.title}</span>
                    </div>
                    <span className={`text-[11px] block ${isClusterActive ? 'text-[#DCE4DE]' : 'text-[#555650]'}`}>
                      {pillar.keywords.length} موضوع پرتکرار
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Chips of Active Pillar */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {(activeCluster === 'all'
                ? googlePillars.flatMap((p) => p.keywords)
                : googlePillars.find((p) => p.id === activeCluster)?.keywords || []
              ).map((keyword, kIdx) => {
                const isSelected = searchTerm === keyword;
                return (
                  <button
                    key={kIdx}
                    type="button"
                    onClick={() => handlePillClick(keyword)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer border ${
                      isSelected
                        ? 'bg-[#344A42] text-[#FCFBF8] border-[#344A42]'
                        : 'bg-[#F4F1EC] hover:bg-[#ECE7DF] text-[#292D2A] border-[#E5E0D8]'
                    }`}
                  >
                    <Search className="w-3 h-3 text-[#3D5E4E]" />
                    <span>{keyword}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="جستجوی مستقیم موضوع یا پرسش (مثال: مشاوره خیانت، زوج درمانگر مشهد، روان‌شناسی بالینی...)"
              aria-label="جستجوی موضوعات و پرسش‌ها"
              className="w-full px-5 py-4 pr-12 bg-[#FCFBF8] border border-[#E5E0D8] rounded-xl text-xs sm:text-sm font-medium text-[#292D2A] focus:border-[#344A42] focus:outline-none"
            />
            <Search className="w-5 h-5 text-[#6B6D67] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#555650] hover:text-[#292D2A] cursor-pointer"
              >
                پاک کردن
              </button>
            )}
          </div>
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl mx-auto space-y-3 mb-12">
          {filteredTopics.length === 0 ? (
            <div className="text-center py-12 bg-[#FCFBF8] rounded-2xl border border-[#E5E0D8]">
              <HelpCircle className="w-10 h-10 text-[#6B6D67] mx-auto mb-3" />
              <h2 className="text-base font-bold text-[#292D2A] mb-1">موضوعی با این عبارت یافت نشد</h2>
              <p className="text-xs text-[#555650] mb-4">
                می‌توانید عبارت دیگری را جستجو کنید یا همه موضوعات را مشاهده فرمایید.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchTerm('');
                  setActiveCluster('all');
                }}
                className="text-xs font-semibold text-[#344A42] underline cursor-pointer"
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
                  className={`rounded-xl border transition-colors overflow-hidden bg-[#FCFBF8] ${
                    isOpen ? 'border-[#344A42]' : 'border-[#E5E0D8] hover:border-[#8FAE9B]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setExpandedTopicId(isOpen ? null : topic.id)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 text-right flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5 flex-1">
                      <span
                        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                          isOpen
                            ? 'bg-[#344A42] text-[#FCFBF8]'
                            : 'bg-[#EDF2EE] text-[#344A42]'
                        }`}
                      >
                        <BookOpen className="w-4 h-4" />
                      </span>
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-[#292D2A] leading-snug mb-1">
                          {topic.query}
                        </h3>
                        <span className="text-[11px] font-semibold text-[#3D5E4E]">
                          {topic.clusterLabel} · {topic.badge}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 bg-[#344A42] text-[#FCFBF8]' : 'bg-[#F4F1EC] text-[#344A42]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-3 border-t border-[#E5E0D8] bg-[#FCFBF8]">
                      <p className="text-xs sm:text-sm text-[#555650] leading-[1.9] mb-4 text-justify">
                        {topic.answerSummary}
                      </p>

                      <div className="bg-[#F4F1EC] p-5 rounded-xl border border-[#E5E0D8] mb-5">
                        <span className="block text-xs font-bold text-[#292D2A] mb-2">
                          نکات کلیدی مهناز خوینی:
                        </span>
                        <ul className="space-y-2">
                          {topic.keyPoints.map((point, pIdx) => (
                            <li
                              key={pIdx}
                              className="text-xs text-[#555650] flex items-start gap-2.5 leading-relaxed"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#3D5E4E] mt-0.5 shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs">
                        <div className="flex items-center gap-4">
                          {topic.articleSlug && (
                            <a
                              href={`/articles/${topic.articleSlug}`}
                              onClick={(e) => {
                                e.preventDefault();
                                onSelectArticle(topic.articleSlug!);
                              }}
                              className="inline-flex items-center gap-1.5 text-[#344A42] font-bold hover:underline cursor-pointer"
                            >
                              <span>مطالعه مقاله کامل تخصصی</span>
                              <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                            </a>
                          )}
                          {topic.serviceSlug && (
                            <a
                              href={`/services/${topic.serviceSlug}`}
                              onClick={(e) => {
                                e.preventDefault();
                                onSelectService(topic.serviceSlug!);
                              }}
                              className="inline-flex items-center gap-1.5 text-[#3D5E4E] font-semibold hover:underline cursor-pointer"
                            >
                              <span>مشاهده پروتکل خدمت</span>
                            </a>
                          )}
                        </div>

                        <a
                          href="https://wa.me/989199087264?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D9%87%D9%85%D8%A7%D9%87%D9%86%DA%AF%DB%8C%20%D9%86%D9%88%D8%A8%D8%AA%20%D9%85%D8%B4%D8%A7%D9%88%D8%B1%D9%87%20%D8%A8%D8%A7%20%D8%AE%D8%A7%D9%86%D9%85%20%D8%AE%D9%88%DB%8C%D9%86%DB%8C%20%D9%BE%DB%8C%D8%A7%D9%85%20%D9%85%DB%8C%E2%80%8C%D8%AF%D9%87%D9%85."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[#292D2A] bg-[#F4F1EC] border border-[#E5E0D8] hover:border-[#344A42] px-3.5 py-2 rounded-lg font-semibold transition-colors"
                        >
                          <MessageSquare className="w-3.5 h-3.5 text-[#344A42]" />
                          <span>هماهنگی نوبت (حضوری / آنلاین)</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Topical Authority Index */}
        <div className="bg-[#FCFBF8] rounded-2xl p-6 sm:p-8 border border-[#E5E0D8] mb-10">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-4 pb-3 border-b border-[#E5E0D8]">
            <h2 className="text-sm sm:text-base font-extrabold text-[#292D2A]">
              فهرست موضوعی دغدغه‌های مراجعان
            </h2>
            <span className="text-[11px] text-[#6B6D67]">برای فیلتر پاسخ‌ها روی هر عبارت کلیک کنید</span>
          </div>

          <div className="space-y-4 text-xs">
            <div className="bg-[#F4F1EC] p-4 rounded-xl border border-[#E5E0D8]">
              <div className="flex items-center gap-2 mb-2.5">
                <Compass className="w-4 h-4 text-[#344A42]" />
                <span className="font-bold text-[#292D2A]">مرکز زوج‌درمان و کلینیک‌ها:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'زوج درمان',
                  'زوج درمان خوب در تهران',
                  'زوج درمان گر',
                  'زوج درمان خوب',
                  'زوج درمان تهران',
                  'زوج درمان خوب در کرج',
                  'زوج درمان اصفهان',
                  'زوج درمان کرمان',
                  'زوج درمانگر مشهد',
                  'زوج درمانی چیست',
                ].map((kw, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handlePillClick(kw)}
                    className="bg-[#FCFBF8] hover:bg-[#EDF2EE] text-[#344A42] border border-[#E5E0D8] px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors cursor-pointer"
                  >
                    {kw}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-[#F4F1EC] p-4 rounded-xl border border-[#E5E0D8]">
              <div className="flex items-center gap-2 mb-2.5">
                <HeartCrack className="w-4 h-4 text-[#9E563E]" />
                <span className="font-bold text-[#292D2A]">بحران خیانت و ترمیم اعتماد:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'مشاوره خیانت پرسش و پاسخ',
                  'مشاوره خیانت',
                  'مشاوره خیانت مرد به زن',
                  'مشاوره خیانت زن به شوهر',
                  'مشاوره خیانت در مشهد',
                  'مشاوره خیانت تلفنی رایگان',
                ].map((kw, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handlePillClick(kw)}
                    className="bg-[#FCFBF8] hover:bg-[#F5EBE7] text-[#9E563E] border border-[#E5E0D8] px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors cursor-pointer"
                  >
                    {kw}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-[#F4F1EC] p-4 rounded-xl border border-[#E5E0D8]">
              <div className="flex items-center gap-2 mb-2.5">
                <Brain className="w-4 h-4 text-[#3D5E4E]" />
                <span className="font-bold text-[#292D2A]">روان‌شناسی بالینی و جلسات آنلاین:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'روانشناس آنلاین',
                  'روانشناسی بالینی چیست',
                  'روانشناس به انگلیسی',
                  'روانشناسی پول',
                  'مشاوره روانشناسی آنلاین',
                  'مشاوره به انگلیسی',
                ].map((kw, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handlePillClick(kw)}
                    className="bg-[#FCFBF8] hover:bg-[#EDF2EE] text-[#3D5E4E] border border-[#E5E0D8] px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors cursor-pointer"
                  >
                    {kw}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Assessment Banner */}
        <div className="bg-[#344A42] rounded-2xl p-6 sm:p-10 text-[#FCFBF8] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-right">
            <p className="text-xs font-semibold text-[#DCE4DE] mb-2">
              خودسنجی رایگان و محرمانه در مرورگر
            </p>
            <h3 className="text-xl sm:text-2xl font-extrabold mb-2">
              می‌خواهید وضعیت فعلی رابطه را آرام‌تر بررسی کنید؟
            </h3>
            <p className="text-xs sm:text-sm text-[#DCE4DE] leading-relaxed">
              پرسشنامه‌های خودسنجی رابطه (رضایت زناشویی، الگوهای گفت‌وگو، سبک دلبستگی و زبان عشق) برای شناخت اولیه طراحی شده‌اند.
            </p>
          </div>

          <button
            type="button"
            onClick={onScrollToTools}
            className="w-full md:w-auto px-6 py-3.5 bg-[#FCFBF8] hover:bg-[#F4F1EC] text-[#344A42] rounded-lg font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shrink-0 cursor-pointer"
          >
            <Compass className="w-4 h-4" />
            <span>مشاهده ابزارهای خودسنجی رایگان</span>
          </button>
        </div>
      </div>
    </section>
  );
};

