export interface ServiceMeta {
  slug: string;
  title: string;
  h1: string;
  description: string;
  category: string;
  shortSummary: string;
  relatedArticleSlugs: string[];
}

export const servicesMeta: ServiceMeta[] = [
  {
    slug: 'couples-therapy',
    title: 'زوج درمانگر در تهران و آنلاین (EFT) | مهناز خوینی',
    h1: 'مرکز تخصصی زوج درمان در تهران و مشاوره آنلاین؛ حل دعواهای مکرر و بازگشت صمیمیت',
    description:
      'زوج درمانی تخصصی حضوری در غرب تهران و آنلاین سراسر جهان با مهناز خوینی (پروانه ۱۴۱۴۰۸۳). حل تعارضات زناشویی، درمان طلاق عاطفی و بازسازی دلبستگی امن.',
    category: 'زوج‌درمانی تخصصی (EFT و گاتمن)',
    shortSummary: 'توقف چرخه‌های تکرارشونده بحث، کاهش قهر و سردی، و بازگرداندن امنیت گفت‌وگو به خانه.',
    relatedArticleSlugs: ['emotionally-focused-therapy-eft', 'how-many-sessions-couples-therapy', 'gottman-couples-therapy'],
  },
  {
    slug: 'infidelity-counseling',
    title: 'مشاوره خیانت زناشویی و ترمیم اعتماد | مهناز خوینی',
    h1: 'مشاوره آنلاین خیانت زناشویی؛ مدیریت شوک، بازسازی اعتماد و تصمیم‌گیری آگاهانه',
    description:
      'مشاوره تخصصی خیانت زناشویی (حضوری و آنلاین) با محرمانگی حرفه‌ای؛ مهناز خوینی (پروانه ۱۴۱۴۰۸۳). مدیریت ترومای خیانت، بازسازی اعتماد و تصمیم‌گیری شفاف.',
    category: 'مدیریت بحران و درمان ترومای خیانت',
    shortSummary: 'مدیریت شوک اولیه، جلوگیری از تصمیم‌های شتاب‌زده و بررسی دقیق امکان ترمیم یا جدایی.',
    relatedArticleSlugs: ['marital-infidelity-causes-signs-recovery', 'rebuilding-trust-after-infidelity', 'dealing-with-infidelity-shock'],
  },
  {
    slug: 'divorce-counseling',
    title: 'مشاوره طلاق آگاهانه و جدایی کم‌آسیب | مهناز خوینی',
    h1: 'مشاوره طلاق آگاهانه و کم‌آسیب',
    description:
      'مشاوره تصمیم‌گیری طلاق و جدایی کم‌آسیب (حضوری تهران و آنلاین) با مهناز خوینی، پروانه ۱۴۱۴۰۸۳. کاهش آسیب روانی فرزندان و عبور امن از بحران جدایی.',
    category: 'مشاوره تصمیم‌گیری و طلاق آگاهانه',
    shortSummary: 'رسیدن به قطعیت بدون پشیمانی؛ تفکیک ماندنِ آگاهانه از جداییِ محترمانه و مراقبت از فرزندان.',
    relatedArticleSlugs: ['deciding-about-divorce', 'consensual-divorce-counseling', 'emotional-divorce'],
  },
  {
    slug: 'premarital-counseling',
    title: 'مشاوره پیش از ازدواج و تست شخصیت | مهناز خوینی',
    h1: 'مشاوره پیش از ازدواج و ارزیابی تناسب',
    description:
      'ارزیابی تخصصی پیش از ازدواج با تست‌های روان‌سنجی، تحلیل سبک دلبستگی، مسائل مالی و تفاوت‌های فرهنگی (حضوری تهران و آنلاین) با مهناز خوینی، پروانه ۱۴۱۴۰۸۳.',
    category: 'مشاوره پیش از ازدواج و ارزیابی علمی',
    shortSummary: 'شناخت دقیق نقاط اشتراک، خطوط قرمز و سبک تعارض پیش از عقد؛ دور از هیجان‌زدگی اولیه.',
    relatedArticleSlugs: ['premarital-counseling-questions', 'premarital-psychological-tests', 'engagement-period-conflicts'],
  },
  {
    slug: 'online-counseling',
    title: 'مشاوره آنلاین زوج‌درمانی ایرانیان خارج از کشور | مهناز خوینی',
    h1: 'مشاوره آنلاین زوج‌درمانی و خانواده ویژه ایرانیان خارج از کشور',
    description:
      'جلسات آنلاین تصویری زوج‌درمانی با تطبیق تایم‌زون (اروپا، کانادا، آمریکا، استرالیا) و پرداخت ارزی (پی‌پال، وایز، تتر) با مهناز خوینی، پروانه ۱۴۱۴۰۸۳.',
    category: 'مشاوره آنلاین سراسری و بین‌المللی',
    shortSummary: 'گفت‌وگو با درمانگر هم‌زبان و آشنا به فرهنگ ایرانی، منطبق با منطقه زمانی و نیازهای مهاجرت.',
    relatedArticleSlugs: ['online-couples-therapist', 'online-psychological-counseling', 'online-psychologist-selection-guide'],
  },
  {
    slug: 'relationship-patterns-therapy',
    title: 'گروه‌درمانی و درمان الگوهای تکراری روابط | مهناز خوینی',
    h1: 'گروه‌درمانی الگوهای تکراری در روابط',
    description:
      'جلسات تخصصی تحلیل الگوهای تکراری در انتخاب شریک عاطفی، رهایی از روابط سمی و یادگیری مرزبندی سالم (حضوری و آنلاین) با مهناز خوینی، پروانه ۱۴۱۴۰۸۳.',
    category: 'طرحواره‌درمانی و اصلاح الگوهای تکراری',
    shortSummary: 'کشف چرایی تکرار انتخاب‌های آسیب‌زا و تمرین مرزبندی سالم در روابط عاطفی.',
    relatedArticleSlugs: ['schema-therapy-couples', 'toxic-relationship-signs', 'attachment-style-in-marriage'],
  },
];

export const getServiceMetaBySlug = (slug: string): ServiceMeta | undefined =>
  servicesMeta.find((s) => s.slug === slug);
