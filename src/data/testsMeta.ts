export interface TestMeta {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  seoTitle: string;
  seoDescription: string;
  timeEstimate: string;
  questionsCount: number;
  clinicalFocus: string;
}

export const TESTS_META: TestMeta[] = [
  {
    id: 'enrich',
    slug: 'enrich-marital-satisfaction',
    title: 'تست رضایت زناشویی انریچ (ENRICH)',
    shortDesc: 'مرور ۱۰ بُعد ارتباط کلامی، صمیمیت، اعتماد، مرزبندی با خانواده و همسویی مالی.',
    seoTitle: 'تست زوج درمانی انریچ آنلاین رایگان با نمره و تحلیل | مهناز خوینی',
    seoDescription:
      'تست زوج درمانی انریچ (ENRICH) آنلاین رایگان؛ سنجش ۱۰ بعد صمیمیت، حل تعارض و امنیت عاطفی با کارنامه نمره‌دهی و تحلیل بالینی مهناز خوینی.',
    timeEstimate: '۳ دقیقه',
    questionsCount: 10,
    clinicalFocus: 'مناسب برای شناخت تصویر کلی رابطه',
  },
  {
    id: 'infidelity',
    slug: 'infidelity-trauma-assessment',
    title: 'خودسنجی آسیب خیانت و توان بازسازی (PISD)',
    shortDesc: 'بررسی شدت فشار هیجانی، افکار هجوم‌آور و آمادگی اولیه برای ورود به گفت‌وگوی ترمیمی.',
    seoTitle: 'تست آنلاین آسیب خیانت و بازسازی اعتماد (PISD) | مهناز خوینی',
    seoDescription:
      'تست آنلاین علمی سنجش تروما و آسیب ناشی از خیانت عاطفی یا جنسی همسر (PISD) با تحلیل بالینی مهناز خوینی، متخصص زوج‌درمانی شناختی-رفتاری (CBCT) و مسئول فنی کلینیک پیوند امن.',
    timeEstimate: '۳ دقیقه',
    questionsCount: 8,
    clinicalFocus: 'مناسب برای بحران پیمان‌شکنی',
  },
  {
    id: 'gottman',
    slug: 'gottman-divorce-predictor',
    title: 'سنجش ۴ الگوی آسیب‌زا در مشاجره (مدل گاتمن)',
    shortDesc: 'شناسایی سرزنش، کنایه و تحقیر، دفاعی‌شدن و دیوارکشی سکوت در بحث‌های دو نفره.',
    seoTitle: 'تست پایان زندگی مشترک و طلاق عاطفی گاتمن | مهناز خوینی',
    seoDescription:
      'تست آنلاین رایگان پایان زندگی مشترک و پیش‌بینی طلاق عاطفی بر پایه تحقیقات دکتر جان گاتمن. سنجش سرزنش، تحقیر، دفاعی‌شدن و دیوارکشی سکوت با تحلیل فوری.',
    timeEstimate: '۲ دقیقه',
    questionsCount: 8,
    clinicalFocus: 'مناسب برای دعواهای تکراری و سردی',
  },
  {
    id: 'attachment',
    slug: 'attachment-style-in-relationships',
    title: 'خودسنجی سبک‌های دلبستگی در رابطه',
    shortDesc: 'آشنایی با واکنش شما به دوری و نزدیکی عاطفی (چرخه تعقیب و گریز).',
    seoTitle: 'تست آنلاین سبک دلبستگی عاطفی در رابطه | مهناز خوینی',
    seoDescription:
      'تست آنلاین رایگان سبک دلبستگی در روابط عاطفی بر پایه تئوری دلبستگی بالبی و رویکرد شناختی-رفتاری (CBCT). سبک دلبستگی ایمن، اضطرابی یا اجتنابی خود را بسنجید.',
    timeEstimate: '۳ دقیقه',
    questionsCount: 9,
    clinicalFocus: 'مناسب برای فهم چرخه قهر و پیگیری',
  },
  {
    id: 'love-languages',
    slug: 'five-love-languages',
    title: 'آزمون ۵ زبان عشق (الگوی گری چاپمن)',
    shortDesc: 'کشف شیوه دریافت و بیان محبت بین دو شریک عاطفی برای کاهش سوءتفاهم.',
    seoTitle: 'تست آنلاین ۵ زبان عشق گری چاپمن در ازدواج و رابطه | مهناز خوینی',
    seoDescription:
      'تست آنلاین ۵ زبان عشق گری چاپمن. زبان عشق اصلی و دوم خود و همسرتان را کشف کنید تا از سوءتفاهم‌های عاطفی جلوگیری نمایید.',
    timeEstimate: '۲ دقیقه',
    questionsCount: 5,
    clinicalFocus: 'مناسب برای تقویت صمیمیت روزمره',
  },
  {
    id: 'premarital',
    slug: 'premarital-readiness-assessment',
    title: 'چک‌لیست آمادگی و تناسب پیش از ازدواج',
    shortDesc: 'بررسی ۸ محور استقلال عاطفی، مالی، حل تعارض و انتظارات زندگی مشترک پیش از عقد.',
    seoTitle: 'تست آنلاین رایگان آمادگی پیش از ازدواج و تناسب عقد | مهناز خوینی',
    seoDescription:
      'تست آنلاین رایگان آمادگی پیش از ازدواج و ارزیابی تناسب قبل از عقد و نامزدی با تحلیل بالینی مهناز خوینی، زوج‌درمانگر و مشاور پیش از ازدواج در کلینیک پیوند امن.',
    timeEstimate: '۳ دقیقه',
    questionsCount: 8,
    clinicalFocus: 'ویژه دوران آشنایی و نامزدی',
  },
];

export const getTestMetaBySlug = (slug: string): TestMeta | undefined =>
  TESTS_META.find((t) => t.slug === slug);
