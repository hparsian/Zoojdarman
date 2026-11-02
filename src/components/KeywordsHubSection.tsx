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
        'زوج درمانگر',
        'زوج درمانگر خوب در تهران',
        'زوج درمانی',
        'زوج درمانگر آنلاین',
        'زوج درمانگر خوب',
        'زوج درمانگر شیراز',
        'زوج درمانی چیست',
        'زوج درمانگر مشهد'
      ]
    },
    {
      id: 'infidelity',
      title: '۲. جستجوهای «مشاوره خیانت»',
      icon: HeartCrack,
      color: '#D9846A',
      bgColor: '#FBF1ED',
      keywords: [
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
      query: 'زوج درمانی چیست و چه زمانی به زوج درمانگر مراجعه کنیم؟',
      cluster: 'couples',
      clusterLabel: 'زوج درمانی چیست',
      badge: 'ترند برتر گوگل',
      monthlySearches: '۹۵,۰۰۰+ جستجو در ماه',
      isExactGoogleSuggestion: true,
      answerSummary:
        'زوج درمانی (Couples Therapy) شاخه‌ای تخصصی از روانشناسی بالینی است که در آن درمانگر به جای مقصر دانستن زن یا شوهر، چرخه تعاملی منفی و آسیب‌های دلبستگی بین دو طرف را هدف قرار می‌دهد. اگر دعواهای شما بیش از ۲۴ ساعت به قهر می‌انجامد، صمیمیت جنسی کاهش یافته یا دچار طلاق عاطفی شده‌اید، مداخله بهنگام زوج‌درمانگر از فروپاشی رابطه جلوگیری می‌کند.',
      keyPoints: [
        'رویکرد علمی هیجان‌مدار (EFT) با اثربخشی ۷۵٪ پیوند امن و صمیمیت عاطفی را احیا می‌کند.',
        'تفاوت با پادرمیانی فامیلی: بی‌طرفی ۱۰۰٪ بالینی، رازداری مطلق و عدم جانبداری جنسیتی.',
        'طول دوره استاندارد معمولاً بین ۸ تا ۱۶ جلسه ۶۰ تا ۹۰ دقیقه‌ای است.'
      ],
      articleSlug: 'what-is-couples-therapy',
      serviceSlug: 'couples-therapy'
    },
    {
      id: 'coup-2',
      query: 'زوج درمانگر خوب در تهران کیست و چه ویژگی‌هایی دارد؟',
      cluster: 'couples',
      clusterLabel: 'زوج درمانگر خوب در تهران',
      badge: 'پراستعلام‌ترین کلمه',
      monthlySearches: '۸۸,۰۰۰+ جستجو در ماه',
      isExactGoogleSuggestion: true,
      answerSummary:
        'یک زوج درمانگر خوب در تهران باید دارای مدرک کارشناسی ارشد یا دکتری روانشناسی بالینی، پروانه معتبر اشتغال تخصصی از سازمان نظام روانشناسی (پروانه ۱۴۱۴۰۸۳ مهناز خوینی) و گواهینامه‌های رسمی دوره‌های بین‌المللی EFT و گاتمن باشد. مرکز تخصصی زوج درمان پیوند امن در غرب تهران (منطقه ۲، صادقیه و اشرفی اصفهانی) محیطی کاملاً آرام و بدون قضاوت را برای زوجین فراهم کرده است.',
      keyPoints: [
        'استعلام مستقیم پروانه اشتغال تخصصی در سامانه سازمان نظام روانشناسی و مشاوره.',
        'دسترسی عالی از غرب، شمال و مرکز تهران به همراه پارکینگ اختصاصی کلینیک.',
        'امکان برگزاری جلسات حضوری در تهران یا جلسات آنلاین تصویری با پروتکل یکسان.'
      ],
      articleSlug: 'good-couples-therapist-in-tehran',
      serviceSlug: 'couples-therapy'
    },
    {
      id: 'coup-3',
      query: 'زوج درمانگر آنلاین؛ مشاوره تصویری غیرحضوری در سراسر ایران و جهان',
      cluster: 'couples',
      clusterLabel: 'زوج درمانگر آنلاین',
      badge: 'پوشش سراسری و بین‌المللی',
      monthlySearches: '۷۲,۰۰۰+ جستجو در ماه',
      isExactGoogleSuggestion: true,
      answerSummary:
        'پژوهش‌های انجمن روانشناسی آمریکا (APA) ثابت کرده‌اند جلسات آنلاین زوج درمانی تصویری با رویکرد هیجان‌مدار EFT اثربخشی کاملاً برابری با جلسات حضوری دارند. این خدمت برای زوج‌های پرمشغله، هم‌وطنان در شهرهای مختلف ایران و ایرانیان مقیم خارج از کشور (اروپا، کانادا، آمریکا، استرالیا) در بستر امن و رمزنگاری‌شده برگزار می‌شود.',
      keyPoints: [
        'حذف ترافیک و امکان حضور از محیط راحت و طبیعی منزل.',
        'امکان برقراری تماس تصویری سه‌طرفه حتی اگر زن و شوهر در دو نقطه مجزا باشند.',
        'تطبیق زمان جلسات با منطقه زمانی مراجعان مقیم خارج از کشور.'
      ],
      articleSlug: 'online-couples-therapist',
      serviceSlug: 'online-counseling'
    },
    {
      id: 'coup-4',
      query: 'ویژگی‌های یک زوج درمانگر خوب؛ چطور درمانگر مناسب را انتخاب کنیم؟',
      cluster: 'couples',
      clusterLabel: 'زوج درمانگر خوب',
      badge: 'راهنمای بالینی انتخاب',
      monthlySearches: '۶۸,۰۰۰+ جستجو در ماه',
      isExactGoogleSuggestion: true,
      answerSummary:
        'یک زوج درمانگر خوب هرگز در جایگاه قاضی یا داور نمی‌نشیند، از نصیحت‌های سطحی پرهیز می‌کند، تعصبات جنسیتی ندارد و مجهز به پروتکل‌های درمانی استاندارد است. او با ایجاد فضایی که هر دو طرف احساس شنیده شدن کنند، چرخه باطل مشاجرات را متوقف می‌سازد.',
      keyPoints: [
        'بی‌طرفی مطلق و هدایت جلسه به سمت مکالمات آسیب‌پذیر عمیق.',
        'مهارت در مدیریت فوری بحران پس از کشف خیانت یا تصمیم شتاب‌زده طلاق.',
        'تعیین تکالیف خانگی هدفمند برای بازسازی پله‌به‌پله اعتماد و صمیمیت.'
      ],
      articleSlug: 'good-couples-therapist-in-tehran',
      serviceSlug: 'couples-therapy'
    },
    {
      id: 'coup-5',
      query: 'زوج درمانگر شیراز؛ راهنمای انتخاب متخصص و مشاوره آنلاین برای شیراز',
      cluster: 'couples',
      clusterLabel: 'زوج درمانگر شیراز',
      badge: 'استان فارس و جنوب کشور',
      monthlySearches: '۴۵,۰۰۰+ جستجو در ماه',
      isExactGoogleSuggestion: true,
      answerSummary:
        'زوج‌های ساکن شیراز و استان فارس می‌توانند بدون نیاز به سفر به پایتخت، از طریق جلسات آنلاین تصویری با مهناز خوینی (زوج‌درمانگر بالینی باسابقه تهران) ارتباط برقرار کنند. این شیوه علاوه بر دسترسی به بالاترین سطح استانداردهای EFT، نگرانی از برخورد با آشنایان در کلینیک‌های محلی را برطرف ساخته و حریم خصوصی ۱۰۰٪ را تضمین می‌کند.',
      keyPoints: [
        'حفظ کامل رازداری و عدم افشای اسرار در محافل خانوادگی.',
        'درک بالینی ظرافت‌های فرهنگی و بافت خانواده‌های اصیل شیرازی.',
        'هماهنگی سریع نوبت جلسات در روزهای زوج و فرد متناسب با زمان مراجعان.'
      ],
      articleSlug: 'couples-therapy-shiraz',
      serviceSlug: 'online-counseling'
    },
    {
      id: 'coup-6',
      query: 'زوج درمانگر مشهد؛ مشاوره تخصصی زوج درمانی و خانواده در مشهد',
      cluster: 'couples',
      clusterLabel: 'زوج درمانگر مشهد',
      badge: 'خراسان و شرق کشور',
      monthlySearches: '۴۸,۰۰۰+ جستجو در ماه',
      isExactGoogleSuggestion: true,
      answerSummary:
        'در کلان‌شهر مشهد، تعارض میان ارزش‌های سنتی و سبک زندگی مدرن و دغدغه‌های دخالت خانواده‌ها از شایع‌ترین عوامل اختلاف است. مراجعان مشهد و خراسان می‌توانند از خدمات آنلاین مرکز مهناز خوینی برای حل تعارضات زناشویی، مشاوره خیانت، درمان طلاق عاطفی و سکس‌تراپی بدون پیش‌داوری بهره‌مند شوند.',
      keyPoints: [
        'فضایی بدون سوگیری‌های تعصب‌آمیز و کاملاً متمرکز بر علم روانشناسی رابطه.',
        'بررسی دقیق چالش‌های رابطه زناشویی و سکس‌تراپی با رعایت موازین اخلاقی.',
        'امکان بهره‌مندی زوجین در سراسر استان خراسان رضوی، شمالی و جنوبی.'
      ],
      articleSlug: 'couples-therapy-mashhad',
      serviceSlug: 'online-counseling'
    },

    /* ===================================================================== */
    /* ۲. مشاوره خیانت (Screenshot 3)                                       */
    /* ===================================================================== */
    {
      id: 'inf-1',
      query: 'مشاوره خیانت پرسش و پاسخ؛ جامع‌ترین راهنمای پاسخ به سوالات بحران خیانت',
      cluster: 'infidelity',
      clusterLabel: 'مشاوره خیانت پرسش و پاسخ',
      badge: 'پرتکرارترین سوالات مراجعان',
      monthlySearches: '۸۵,۰۰۰+ جستجو در ماه',
      isExactGoogleSuggestion: true,
      answerSummary:
        'در مواجهه با کشف خیانت، ذهن پر از سوالات دردناک است: آیا همسرم را ببخشم؟ آیا باید پیام‌هایش را بخوانم؟ آیا این زندگی دوباره درست می‌شود؟ در مشاوره خیانت، درمانگر کمک می‌کند از ترومای حاد هفته‌های اول عبور کنید، از تصمیم‌های شتاب‌زده طلاق بپرهیزید و فرآیند علمی شفافیت و بازسازی را طی نمایید.',
      keyPoints: [
        'پرهیز از پرسیدن جزئیات بصری رابطه که فلاش‌بک‌های PTSD را تشدید می‌کند.',
        'ضرورت قطع کامل و بدون بازگشت هرگونه تماس فرد پیمان‌شکن با نفر سوم.',
        'فرآیند ۳ مرحله‌ای: مهار شوک، شفاف‌سازی واقعیت، و احیای دلبستگی آسیب‌دیده.'
      ],
      articleSlug: 'infidelity-counseling-qa',
      serviceSlug: 'infidelity-counseling'
    },
    {
      id: 'inf-2',
      query: 'مشاوره خیانت مرد به زن؛ چرا رخ می‌دهد و مراحل ترمیم رابطه چیست؟',
      cluster: 'infidelity',
      clusterLabel: 'مشاوره خیانت مرد به زن',
      badge: 'تحلیل بالینی پیمان‌شکنی مردان',
      monthlySearches: '۷۸,۰۰۰+ جستجو در ماه',
      isExactGoogleSuggestion: true,
      answerSummary:
        'خیانت مردان اغلب با توجیهاتی نظیر تنوع‌طلبی، فرار از فشارهای روزمره یا خلاء عاطفی همراه است. همسر آسیب‌دیده دچار احساس خرد شدن عزت‌نفس و بی‌اعتمادی فراگیر می‌شود. پروتکل درمانی شامل پذیرش بی قید و شرط مسئولیت توسط مرد، شفافیت داوطلبانه رمزها و برنامه‌ها، و التیام تدریجی زخم دلبستگی زن است.',
      keyPoints: [
        'توقف سرزنش زن یا انداختن تقصیر به گردن کم‌کاری‌های منزل.',
        'شفافیت داوطلبانه رفت‌وآمد و عدم ایجاد حس بازجویی و پنهان‌کاری مجدد.',
        'طول دوره بازسازی اعتماد واقعی معمولاً بین ۶ تا ۱۸ ماه کار درمانی است.'
      ],
      articleSlug: 'husband-infidelity-to-wife',
      serviceSlug: 'infidelity-counseling'
    },
    {
      id: 'inf-3',
      query: 'مشاوره خیانت زن به شوهر؛ ریشه‌های عاطفی و مسیر پیش‌رو',
      cluster: 'infidelity',
      clusterLabel: 'مشاوره خیانت زن به شوهر',
      badge: 'تحلیل روانشناختی طلاق عاطفی زنان',
      monthlySearches: '۶۵,۰۰۰+ جستجو در ماه',
      isExactGoogleSuggestion: true,
      answerSummary:
        'پژوهش‌های روانشناسی نشان می‌دهند در بیش از ۸۰٪ موارد خیانت زنان، پای طلاق عاطفی طولانی‌مدت، نادیده گرفته شدن، احساس نامرئی بودن و تنهایی عمیق در میان است. درمان این نوع خیانت نیازمند کالبدشکافی دقیق سال‌های سردی رابطه، ریشه‌یابی کمبودهای شدید دلبستگی و سنجش میزان امکان بازگشت تعهد است.',
      keyPoints: [
        'بررسی احساس تنهایی مزمن و تحقیر شدن پیش از وقوع خیانت.',
        'برخورد اصولی با شوک شدید و آسیب به هویت مردانه شوهر.',
        'بررسی امکان احیای پیوند یا حرکت به سمت جدایی متمدنانه و کم‌آسیب.'
      ],
      articleSlug: 'wife-infidelity-to-husband',
      serviceSlug: 'infidelity-counseling'
    },
    {
      id: 'inf-4',
      query: 'مشاوره خیانت در مشهد؛ جلسات آنلاین و محرمانه با زوج‌درمانگر بالینی',
      cluster: 'infidelity',
      clusterLabel: 'مشاوره خیانت در مشهد',
      badge: 'ویژه مراجعان مشهد و خراسان',
      monthlySearches: '۴۲,۰۰۰+ جستجو در ماه',
      isExactGoogleSuggestion: true,
      answerSummary:
        'مراجعان محترم مشهد که با بحران خیانت همسر مواجه شده‌اند، می‌توانند بدون دغدغه افشای راز در بین فامیل و همکاران، در جلسات آنلاین تصویری با مهناز خوینی شرکت کنند. این شیوه محرمانگی ۱۰۰٪ و محیطی آزاد و تخصصی را برای بازسازی اعتماد یا تصمیم‌گیری شفاف فراهم می‌سازد.',
      keyPoints: [
        'رازداری مطلق بالینی بدون ثبت پرونده‌های کاغذی محلی.',
        'درک چالش‌های فرهنگی، مهریه و قوانین خانواده در کلان‌شهر مشهد.',
        'امکان هماهنگی نوبت در ایام هفته و ساعات بعدازظهر.'
      ],
      articleSlug: 'infidelity-counseling-mashhad',
      serviceSlug: 'infidelity-counseling'
    },
    {
      id: 'inf-5',
      query: 'مشاوره خیانت تلفنی رایگان؛ راهنمای واقعی خطوط بحران و تفاوت با درمان بالینی',
      cluster: 'infidelity',
      clusterLabel: 'مشاوره خیانت تلفنی رایگان',
      badge: 'خطوط بحران و راهنمای مراجع',
      monthlySearches: '۵۶,۰۰۰+ جستجو در ماه',
      isExactGoogleSuggestion: true,
      answerSummary:
        'خطوط تلفنی رایگان نظیر ۱۴۸۰ (صدای مشاور بهزیستی) برای آرام‌سازی شوک اولیه، جلوگیری از پرخاشگری یا اقدامات فیزیکی خطرناک بسیار مفید هستند. اما ترمیم ریشه‌ای ترومای خیانت نیازمند جلسات منظم زوج‌درمانی، مواجهه چهره‌به‌چهره و تمرین‌های ترمیم دلبستگی است.',
      keyPoints: [
        'استفاده از خطوط ۱۴۸۰ و ۱۲۳ به عنوان اورژانس اولیه مهار استرس شدید.',
        'انجام تست آنلاین رایگان سنجش تروما و آسیب خیانت (PISD) در سامانه.',
        'ورود به فرآیند درمان تخصصی پس از خروج از فاز شوک حاد اولیه.'
      ],
      articleSlug: 'free-infidelity-phone-counseling',
      serviceSlug: 'infidelity-counseling'
    },

    /* ===================================================================== */
    /* ۳. روانشناس و روانشناسی بالینی (Screenshot 4)                        */
    /* ===================================================================== */
    {
      id: 'psy-1',
      query: 'روانشناسی بالینی چیست و یک روانشناس بالینی چه مشکلاتی را درمان می‌کند؟',
      cluster: 'psychology',
      clusterLabel: 'روانشناسی بالینی چیست',
      badge: 'مفهوم بنیادین سلامت روان',
      monthlySearches: '۹۰,۰۰۰+ جستجو در ماه',
      isExactGoogleSuggestion: true,
      answerSummary:
        'روانشناسی بالینی (Clinical Psychology) شاخه‌ای تخصصی از علم روانشناسی است که به ارزیابی، تشخیص و درمان اختلالات روانی، اضطراب، افسردگی، تروما و تعارضات شدید زوجین می‌پردازد. روانشناس بالینی بر خلاف روانپزشک که از دارو استفاده می‌کند، با روش‌های گفتگومحور شواهدنگر ساختار روانی و روابط را بازسازی می‌نماید.',
      keyPoints: [
        'تفاوت روانشناس بالینی با روانپزشک: درمان روانشناختی در برابر دارودرمانی.',
        'داشتن پروانه رسمی اشتغال تخصصی از سازمان نظام روانشناسی (پروانه ۱۴۱۴۰۸۳).',
        'به‌کارگیری رویکردهای EFT هیجان‌مدار، طرحواره‌درمانی و CBT.'
      ],
      articleSlug: 'what-is-clinical-psychology',
      serviceSlug: 'couples-therapy'
    },
    {
      id: 'psy-2',
      query: 'روانشناس آنلاین؛ چگونه بهترین روانشناس معتبر را انتخاب کنیم؟',
      cluster: 'psychology',
      clusterLabel: 'روانشناس آنلاین',
      badge: 'انتخاب روانشناس معتبر',
      monthlySearches: '۸۱,۰۰۰+ جستجو در ماه',
      isExactGoogleSuggestion: true,
      answerSummary:
        'با افزایش مراجعات اینترنتی، تشخیص روانشناس آنلاین اصل از فعالان فاقد صلاحیت اهمیت حیاتی یافته است. روانشناس آنلاین معتبر باید عضو رسمی سازمان نظام روانشناسی باشد، پروانه معتبر بالینی داشته باشد، و جلسات را در بستری امن و بدون ضبط صدا و تصویر هدایت کند.',
      keyPoints: [
        'استعلام آنلاین شماره نظام در سایت pcoiran.ir پیش از رزرو نوبت.',
        'تجربه بالینی اثبات‌شده در زمینه تخصصی مورد نیاز (فردی، زوجی یا خانواده).',
        'برگزاری جلسات تصویری منظم با تکالیف و پیگیری مستمر روند بهبود.'
      ],
      articleSlug: 'online-psychologist-selection-guide',
      serviceSlug: 'online-counseling'
    },
    {
      id: 'psy-3',
      query: 'روانشناسی پول در زندگی مشترک؛ حل تعارضات مالی همسران با الهام از کتاب مورگان هاوسل',
      cluster: 'psychology',
      clusterLabel: 'روانشناسی پول',
      badge: 'کتاب روانشناسی پول در ازدواج',
      monthlySearches: '۷۴,۰۰۰+ جستجو در ماه',
      isExactGoogleSuggestion: true,
      answerSummary:
        'کتاب مشهور «روانشناسی پول» (The Psychology of Money) اثر مورگان هاوسل نشان می‌دهد رفتار ما با پول وابسته به خاطرات کودکی، ترس‌ها و نیاز به امنیت است نه ریاضیات. در زندگی مشترک نیز دعواهای مالی ریشه در تفاوت مفهوم پول (امنیت در برابر آزادی) دارد و شناخت روانشناسی پول مانع از خیانت مالی و پنهان‌کاری می‌شود.',
      keyPoints: [
        'شناخت تله‌های ذهنی و طرحواره‌های مالی همسر (خسیسی ناشی از ترس کودکی).',
        'تنظیم قرارداد شفاف دخل و خرج و مدل سه حسابی در زندگی مشترک.',
        'پیشگیری از خیانت مالی (پنهان کردن حساب، وام مخفی و قرض‌های نگفته).'
      ],
      articleSlug: 'psychology-of-money-in-marriage',
      serviceSlug: 'couples-therapy'
    },
    {
      id: 'psy-4',
      query: 'روانشناس و روانشناسی به انگلیسی؛ واژگان تخصصی و جلسات دوزبانه',
      cluster: 'psychology',
      clusterLabel: 'روانشناس به انگلیسی',
      badge: 'English Psychology & Counseling',
      monthlySearches: '۶۲,۰۰۰+ جستجو در ماه',
      isExactGoogleSuggestion: true,
      answerSummary:
        'معادل روانشناس به انگلیسی «Psychologist» و روانشناسی بالینی «Clinical Psychology» است. مرکز مهناز خوینی خدمات مشاوره روانشناسی و زوج‌درمانی را برای زوج‌های دورگه، دیپلمات‌ها، مهاجران و مراجعانی که مایل به برگزاری جلسات به زبان انگلیسی هستند ارائه می‌دهد.',
      keyPoints: [
        'جلسات روانشناسی دوزبانه روان انگلیسی-فارسی برای ازدواج‌های بین‌فرهنگی.',
        'آشنایی با واژگان بین‌المللی APA جهت مکاتبات یا ادامه درمان در خارج از ایران.',
        'هماهنگی وقت با تقویم بین‌المللی برای ایرانیان مقیم اروپا، آمریکا و کانادا.'
      ],
      articleSlug: 'psychology-and-counseling-in-english',
      serviceSlug: 'online-counseling'
    },

    /* ===================================================================== */
    /* ۴. مشاوره روانشناسی (Screenshot 2)                                   */
    /* ===================================================================== */
    {
      id: 'coun-1',
      query: 'مشاوره روانشناسی آنلاین و مشاوره آنلاین؛ استانداردهای جلسه امن و تصویری',
      cluster: 'counseling',
      clusterLabel: 'مشاوره روانشناسی آنلاین',
      badge: 'جلسات آنلاین تصویری',
      monthlySearches: '۸۸,۰۰۰+ جستجو در ماه',
      isExactGoogleSuggestion: true,
      answerSummary:
        'مشاوره روانشناسی آنلاین به مراجعان امکان می‌دهد بدون اتلاف زمان در ترافیک یا محدودیت مسافت، از بهترین خدمات بالینی بهره‌مند شوند. این جلسات در بستر تصویری امن (گوگل‌میت یا واتساپ) برگزار شده و تمامی پروتکل‌های رازداری و موازین رسمی سازمان نظام روانشناسی در آن رعایت می‌گردد.',
      keyPoints: [
        'امکان حضور مشترک زن و شوهر حتی اگر در دو مکان یا دو شهر مجزا باشند.',
        'دسترسی مستقیم ایرانیان سراسر کشور و خارج از کشور به متخصص باسابقه تهران.',
        'انعطاف‌پذیری در انتخاب ساعت جلسات متناسب با شیفت‌های کاری.'
      ],
      articleSlug: 'online-psychological-counseling',
      serviceSlug: 'online-counseling'
    },
    {
      id: 'coun-2',
      query: 'مشاوره رایگان و مشاوره تلفنی رایگان؛ راهنمای دریافت کمک فوری و تست‌های آنلاین',
      cluster: 'counseling',
      clusterLabel: 'مشاوره رایگان و تلفنی',
      badge: 'خطوط فوریتی و ابزارهای رایگان',
      monthlySearches: '۹۲,۰۰۰+ جستجو در ماه',
      isExactGoogleSuggestion: true,
      answerSummary:
        'برای دسترسی به مشاوره رایگان فوری، خط تلفنی ۱۴۸۰ (صدای مشاور بهزیستی) و اورژانس اجتماعی ۱۲۳ در دسترس تمام هم‌وطنان است. همچنین در این سامانه، ۶ آزمون آنلاین و علمی رایگان شامل تست رضایت زناشویی انریچ، دلبستگی و گاتمن به همراه کارنامه بالینی فوری و رایگان در اختیار شماست.',
      keyPoints: [
        'معرفی خطوط رایگان دولتی جهت پیشگیری از آسیب‌های آنی و خشونت خانگی.',
        'تفاوت مشاوره حقوقی با مشاوره روانشناسی خانواده و زوج‌درمانی.',
        'دسترسی رایگان به تست‌های تشخیصی استاندارد بین‌المللی در سایت.'
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
      monthlySearches: '۵۰,۰۰۰+ جستجو در ماه',
      isExactGoogleSuggestion: true,
      answerSummary:
        'مشاوره به زبان انگلیسی برای همسرانی که یکی از طرفین غیرایرانی است، یا زوج‌هایی که به دلیل سال‌ها زندگی در خارج ترجیح می‌دهند مفاهیم احساسی را به انگلیسی بیان کنند، در مرکز ما با تسلط کامل زبانی و پروتکل‌های بین‌المللی ارائه می‌گردد.',
      keyPoints: [
        'درک دوگانه فرهنگی و تسهیل ارتباط بین‌فرهنگی همسران.',
        'ارائه گواهی بالینی و گزارش پیشرفت درمان به زبان انگلیسی برای دادگاه یا مراجع خارج از کشور.',
        'پرداخت ارزی یا ریالی منعطف برای ایرانیان خارج از کشور.'
      ],
      articleSlug: 'psychology-and-counseling-in-english',
      serviceSlug: 'online-counseling'
    }
  ];

  const handlePillClick = (keyword: string) => {
    setSearchTerm(keyword);
    setActiveCluster('all');
    // find matched topic
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
    <section className="py-16 sm:py-24 bg-[#FCFAF8] border-t border-[#E8E2D8]" id="seo-hub">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-[#9E7D36] uppercase mb-3 bg-[#FAF5EB] px-4 py-1.5 rounded-full border border-[#C5A059]/40">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>دانشنامه جامع سئو و رتبه ۱ گوگل</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#241A35] mb-4 leading-tight">
            پاسخ بالینی به پرجستجوترین کلمات گوگل در{' '}
            <span className="text-[#3E2F5B] block sm:inline">سامانه تخصصی زوج‌درمان</span>
          </h2>

          <p className="text-sm sm:text-base text-[#5E5868] leading-relaxed max-w-2xl mx-auto">
            تحلیل مستند مهناز خوینی (کارشناس ارشد روانشناسی بالینی، پروانه اشتغال تخصصی ۱۴۱۴۰۸۳) برای عبارات پرتکرار مراجعان در تهران، مشهد، شیراز و جلسات آنلاین سراسر جهان.
          </p>
        </div>

        {/* 4 Pillars Google Autocomplete Box (Exact match with user screenshots) */}
        <div className="max-w-4xl mx-auto mb-10 space-y-4">
          <div className="bg-white p-5 sm:p-7 rounded-3xl border border-[#E8DFD5] shadow-xs">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-4 pb-3 border-b border-[#F0EAE1]">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-black text-[#241A35]">
                <TrendingUp className="w-4 h-4 text-[#C5A059]" />
                <span>کلمات کلیدی پرتکرار سرچ گوگل (موجود در عکس‌ها):</span>
              </div>
              <span className="text-[11px] text-[#8A8494] font-medium">برای مشاهده پاسخ بالینی روی هر کلمه کلیک کنید</span>
            </div>

            {/* Pillar Grid Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
              {googlePillars.map((pillar) => {
                const IconComponent = pillar.icon;
                const isClusterActive = activeCluster === pillar.id;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => {
                      setActiveCluster(isClusterActive ? 'all' : pillar.id);
                      setSearchTerm('');
                    }}
                    className={`p-3.5 rounded-2xl text-right transition-all cursor-pointer border ${
                      isClusterActive
                        ? 'bg-[#241A35] text-white border-[#C5A059] shadow-sm'
                        : 'bg-[#FAF8F5] text-[#241A35] border-[#E8DFD5] hover:border-[#3E2F5B]/30'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: isClusterActive ? '#C5A059' : pillar.bgColor,
                          color: isClusterActive ? '#241A35' : pillar.color
                        }}
                      >
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-black truncate">{pillar.title}</span>
                    </div>
                    <span className="text-[10px] block opacity-80 font-medium">
                      {pillar.keywords.length} کلمه کلیدی پرجستجو
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
                    onClick={() => handlePillClick(keyword)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#3E2F5B] text-white shadow-xs ring-2 ring-[#C5A059]/40'
                        : 'bg-white hover:bg-[#FAF8F5] text-[#3E2F5B] border border-[#E8DFD5] hover:border-[#3E2F5B]/40'
                    }`}
                  >
                    <Search className="w-3 h-3 text-[#C5A059]" />
                    <span>{keyword}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Search Bar & Reset */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="جستجوی مستقیم سوال یا کلمه کلیدی (مثال: مشاوره خیانت، زوج درمانگر مشهد، روانشناسی بالینی چیست، آنلاین...)"
              className="w-full px-5 py-4 pr-12 bg-white border border-[#E8DFD5] rounded-2xl text-xs sm:text-sm font-medium text-[#241A35] focus:bg-white focus:border-[#3E2F5B] focus:ring-2 focus:ring-[#3E2F5B]/20 focus:outline-none shadow-xs transition-all"
            />
            <Search className="w-5 h-5 text-[#3E2F5B] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-bold text-[#8A8494] hover:text-[#241A35] cursor-pointer"
              >
                پاک کردن
              </button>
            )}
          </div>
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4 mb-14">
          {filteredTopics.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-3xl border border-[#E8DFD5]">
              <HelpCircle className="w-12 h-12 text-[#8A8494] mx-auto mb-3" />
              <h3 className="text-base font-black text-[#241A35] mb-1">موضوعی با این عبارت یافت نشد</h3>
              <p className="text-xs text-[#5E5868] mb-4">
                می‌توانید کلمه دیگری را جستجو کنید یا همه کلمات را مشاهده فرمایید.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCluster('all');
                }}
                className="text-xs font-bold text-[#3E2F5B] underline cursor-pointer"
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
                      ? 'bg-white border-[#3E2F5B]/50 shadow-md ring-1 ring-[#3E2F5B]/15'
                      : 'bg-white border-[#E8DFD5] hover:border-[#3E2F5B]/30 shadow-xs'
                  }`}
                >
                  {/* Trigger */}
                  <button
                    onClick={() => setExpandedTopicId(isOpen ? null : topic.id)}
                    className="w-full p-5 sm:p-6 text-right flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5 flex-1">
                      <span
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isOpen
                            ? 'bg-[#241A35] text-[#C5A059]'
                            : 'bg-[#FAF8F5] text-[#241A35] border border-[#E8DFD5]'
                        }`}
                      >
                        <BookOpen className="w-4 h-4" />
                      </span>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <h3 className="text-sm sm:text-base font-black text-[#241A35] leading-snug">
                            {topic.query}
                          </h3>
                          {topic.badge && (
                            <span className="text-[10px] font-black bg-[#FAF5EB] text-[#9E7D36] border border-[#C5A059]/40 px-2 py-0.5 rounded-md">
                              {topic.badge}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[10px] font-mono font-bold text-[#3E2F5B] bg-[#F2EEF8] border border-[#3E2F5B]/20 px-2.5 py-0.5 rounded-md">
                            {topic.clusterLabel}
                          </span>
                          <span className="text-[10px] text-[#8A8494] font-medium hidden sm:inline">
                            {topic.monthlySearches}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#E8DFD5] flex items-center justify-center text-[#241A35] shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 bg-[#241A35] text-[#C5A059] border-transparent' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Body Content */}
                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-2 border-t border-[#F0EAE1] bg-white">
                      <p className="text-xs sm:text-sm text-[#5E5868] leading-relaxed mb-4 text-justify">
                        {topic.answerSummary}
                      </p>

                      <div className="bg-[#FAF8F5] p-5 rounded-xl border border-[#E8DFD5] mb-5">
                        <span className="block text-[11px] font-black text-[#241A35] mb-2">
                          نکات کلیدی و راهنمای بالینی مهناز خوینی:
                        </span>
                        <ul className="space-y-2">
                          {topic.keyPoints.map((point, pIdx) => (
                            <li
                              key={pIdx}
                              className="text-xs text-[#5E5868] flex items-start gap-2.5 leading-relaxed"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#4E7A66] mt-0.5 shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Links */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs">
                        <div className="flex items-center gap-3">
                          {topic.articleSlug && (
                            <a
                              href={`/articles/${topic.articleSlug}`}
                              onClick={(e) => {
                                e.preventDefault();
                                onSelectArticle(topic.articleSlug!);
                              }}
                              className="inline-flex items-center gap-1.5 text-[#3E2F5B] hover:text-[#241A35] font-black hover:underline cursor-pointer"
                            >
                              <span>مطالعه مقاله کامل تخصصی</span>
                              <ArrowRight className="w-3.5 h-3.5 rotate-180 text-[#3E2F5B]" />
                            </a>
                          )}
                          {topic.serviceSlug && (
                            <a
                              href={`/services/${topic.serviceSlug}`}
                              onClick={(e) => {
                                e.preventDefault();
                                onSelectService(topic.serviceSlug!);
                              }}
                              className="inline-flex items-center gap-1.5 text-[#4E7A66] hover:text-[#241A35] font-bold hover:underline cursor-pointer"
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
                          className="inline-flex items-center gap-1.5 text-[#241A35] bg-[#FAF8F5] border border-[#E8DFD5] hover:border-[#3E2F5B] px-3.5 py-1.5 rounded-xl font-bold transition-all"
                        >
                          <MessageSquare className="w-3.5 h-3.5 text-[#3E2F5B]" />
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

        {/* Free Assessment Banner */}
        <div className="bg-gradient-to-r from-[#241A35] via-[#3E2F5B] to-[#5E4B82] rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-right">
            <span className="inline-block bg-[#C5A059]/30 text-[#FAF5EB] border border-[#C5A059]/40 text-[11px] font-black px-3.5 py-1 rounded-full mb-3 backdrop-blur-xs">
              غربالگری علمی رایگان آنلاین
            </span>
            <h3 className="text-xl sm:text-2xl font-black mb-2">
              آیا رابطه شما نیازمند مداخله زوج‌درمانگر بالینی است؟
            </h3>
            <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
              با شرکت در ۶ تست آنلاین رایگان سامانه (انریچ، شاخص طلاق گاتمن، سبک دلبستگی، سنجش تروما خیانت و ۵ زبان عشق) وضعیت رابطه خود را در کمتر از ۳ دقیقه ارزیابی نمایید.
            </p>
          </div>

          <button
            onClick={onScrollToTools}
            className="w-full md:w-auto px-7 py-4 bg-white hover:bg-[#FAF8F5] text-[#241A35] rounded-full font-black text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            <span>شروع آزمون آنلاین سلامت رابطه (۱۰۰٪ رایگان)</span>
          </button>
        </div>
      </div>
    </section>
  );
};
