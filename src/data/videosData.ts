export interface VideoItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: 'مشاوره خیانت' | 'طلاق عاطفی' | 'ارتباط و گفتگو' | 'رویکرد EFT' | 'سوالات متداول';
  duration: string;
  publishDate: string;
  viewsCount: string;
  aparatId: string;
  aparatEmbedUrl: string;
  aparatUrl: string;
  youtubeId: string;
  youtubeEmbedUrl: string;
  youtubeUrl: string;
  thumbnail: string;
  tags: string[];
  keyTakeaways: string[];
  transcriptSnippet: string;
}

export const VIDEOS_DATA: VideoItem[] = [
  {
    id: 'infidelity-recovery-guide',
    slug: 'infidelity-recovery-guide',
    title: 'تحلیل بالینی خیانت زناشویی و راه‌های علمی بازسازی اعتماد با مهناز خوینی',
    description:
      'در این ویدیوی آموزشی جامع، مهناز خوینی (کارشناس ارشد روانشناسی بالینی و زوج‌درمانگر) به تحلیل مراحل صدمه دیدن رابطه پس از خیانت، نحوه توقف رفتار مقابله‌ای تخریب‌گر و پروتکل سه مرحله‌ای بازسازی اعتماد با رویکرد هیجان‌مدار (EFT) می‌پردازد.',
    category: 'مشاوره خیانت',
    duration: '۱۸:۲۴',
    publishDate: '۱۴۰۳/۰۸/۱۲',
    viewsCount: '۱۲,۴۵۰ بازدید',
    aparatId: 'Mahnaz.khoini_psychology',
    aparatEmbedUrl: 'https://www.aparat.com/Mahnaz.khoini_psychology',
    aparatUrl: 'https://www.aparat.com/Mahnaz.khoini_psychology',
    youtubeId: 'mahnaz.khoini',
    youtubeEmbedUrl: 'https://www.youtube.com/embed?listType=user_uploads&list=mahnaz.khoini',
    youtubeUrl: 'https://youtube.com/@mahnaz.khoini',
    thumbnail: '/images/mahnaz-khoini.jpg',
    tags: ['خیانت همسر', 'زوج درمان', 'ترمیم اعتماد', 'مهناز خوینی', 'مشاوره آنلاین خیانت', 'روانشناسی بالینی'],
    keyTakeaways: [
      'شناخت ۵ واکنش روانی طبیعی اولیه فرد آسیب‌دیده از پیمان‌شکنی',
      'چرا بازجویی‌های مدام حالم را بهتر نمی‌کند و جایگزین بالینی آن چیست؟',
      'شرایط سه‌گانه ضروری برای این که آیا رابطه قابل بازسازی است یا خیر',
      'نقش زوج‌درمانگر هیجان‌مدار (EFT) در خروج از چرخه خشم و شوک اولیه'
    ],
    transcriptSnippet:
      'وقتی پیمان‌شکنی و خیانت اتفاق می‌افتد، مغز فرد آسیب‌دیده در حالت تروما و آلارم خطر دائم قرار می‌گیرد. در این ویدیو مهناز خوینی توضیح می‌دهد چگونه می‌توان از افتادن در تله بازجویی‌های آسیب‌زا جلوگیری کرد و فرآیند گام‌به‌گام ترمیم شفافیت را آغاز نمود.'
  },
  {
    id: 'emotional-divorce-gottman',
    slug: 'emotional-divorce-gottman',
    title: 'طلاق عاطفی چیست؟ ۴ سوارکار نابودکننده رابطه زناشویی (تئوری گاتمن)',
    description:
      'تحلیل بالینی علائم طلاق عاطفی در زوجین توسط مهناز خوینی. بررسی چهار الگوی رفتاری سمی گاتمن (انتقاد، تحقیر، جبهه‌گیری و دیوارکشی) و فرمول‌های پادزهر علمی برای تزریق مجدد صمیمیت.',
    category: 'طلاق عاطفی',
    duration: '۱۴:۵۰',
    publishDate: '۱۴۰۳/۰۷/۲۵',
    viewsCount: '۹,۸۲۰ بازدید',
    aparatId: 'Mahnaz.khoini_psychology',
    aparatEmbedUrl: 'https://www.aparat.com/Mahnaz.khoini_psychology',
    aparatUrl: 'https://www.aparat.com/Mahnaz.khoini_psychology',
    youtubeId: 'mahnaz.khoini',
    youtubeEmbedUrl: 'https://www.youtube.com/embed?listType=user_uploads&list=mahnaz.khoini',
    youtubeUrl: 'https://youtube.com/@mahnaz.khoini',
    thumbnail: '/images/mahnaz-khoini-thumb.webp',
    tags: ['طلاق عاطفی', 'تئوری گاتمن', 'زوج درمانی', 'مهناز خوینی', 'حل تعارض زناشویی'],
    keyTakeaways: [
      'تفاوت همزیستی مسالمت‌آمیز ظاهری با طلاق عاطفی واقعی',
      'چگونه تحقیر و سارکاسم به سلامت جسمی و روانی زوجین ضربه می‌زند',
      'پادزهر فوری دیوارکشی (Stonewalling) و لجبازی خاموش',
      'تمارین روزانه ۵ دقیقه‌ای برای بازگرداندن حس دیده شدن در همسر'
    ],
    transcriptSnippet:
      'طلاق عاطفی بدون دادگاه و صیغه طلاق رخ می‌دهد؛ زمانی که دو نفر زیر یک سقف مانند دو هم‌اتاقی بیگانه زندگی می‌کنند. در این بخش از ویدیو، تکنیک‌های پادزهر ۴ سوارکار طلاق به صورت کاربردی شرح داده می‌شود.'
  },
  {
    id: 'communication-without-conflict',
    slug: 'communication-without-conflict',
    title: 'تکنیک‌های گفتگوی موثر و حل تعارض بدون دعوا و جروبحث زناشویی',
    description:
      'چگونه درباره گله‌ها، انتظارات مالی یا تربیتی با همسر صحبت کنیم بدون اینکه بحث به جنجال و قهر ختم شود؟ راهنمای مهناز خوینی برای فرمول شروع نرم (Soft Startup) و کنترل هیجانات منفی.',
    category: 'ارتباط و گفتگو',
    duration: '۱۱:۱۵',
    publishDate: '۱۴۰۳/۰۶/۳۰',
    viewsCount: '۱۵,۱۰۰ بازدید',
    aparatId: 'Mahnaz.khoini_psychology',
    aparatEmbedUrl: 'https://www.aparat.com/Mahnaz.khoini_psychology',
    aparatUrl: 'https://www.aparat.com/Mahnaz.khoini_psychology',
    youtubeId: 'mahnaz.khoini',
    youtubeEmbedUrl: 'https://www.youtube.com/embed?listType=user_uploads&list=mahnaz.khoini',
    youtubeUrl: 'https://youtube.com/@mahnaz.khoini',
    thumbnail: '/images/mahnaz-khoini.jpg',
    tags: ['گفتگوی موثر', 'مهارت ارتباطی', 'زوج درمانگر', 'مهناز خوینی', 'کنترل خشم'],
    keyTakeaways: [
      'استفاده از فرمول «من احساس می‌کنم... وقتی که... چون نیازمندِ... هستم»',
      'زمان‌بندی طلایی برای شروع گفتگوهای حساس و عدم انباشت گله‌ها',
      'تکنیک زمان استراحت (Timeout) هنگام بالا رفتن ضربان قلب بالای ۱۰۰',
      'بازسازی صمیمیت کلامی در کمتر از ۱۰ روز با تمارین روزانه'
    ],
    transcriptSnippet:
      'بسیاری از زوج‌ها فکر می‌کنند اختلاف نظر نشانه خرابی رابطه است، در حالی که نحوه بیان آن تعیین‌کننده است. شروع تند و متهم‌کننده در ۳ دقیقه اول، نتیجه کل گفتگو را خراب می‌کند.'
  },
  {
    id: 'attachment-styles-eft-coupling',
    slug: 'attachment-styles-eft-coupling',
    title: 'نقش سبک‌های دلبستگی در انتخاب همسر و تعارضات زناشویی (رویکرد EFT)',
    description:
      'چرا فرد اضطرابی جذب فرد اجتنابی می‌شود؟ مهناز خوینی در این ویدیوی تحلیلی ریشه‌های کودکی الگوهای دلبستگی و نحوه تبدیل چرخه معیوب تعقیب-گریز به دلبستگی ایمن را تشریح می‌کند.',
    category: 'رویکرد EFT',
    duration: '۱۶:۴۰',
    publishDate: '۱۴۰۳/۰۵/۱۸',
    viewsCount: '۸,۶۰۰ بازدید',
    aparatId: 'Mahnaz.khoini_psychology',
    aparatEmbedUrl: 'https://www.aparat.com/Mahnaz.khoini_psychology',
    aparatUrl: 'https://www.aparat.com/Mahnaz.khoini_psychology',
    youtubeId: 'mahnaz.khoini',
    youtubeEmbedUrl: 'https://www.youtube.com/embed?listType=user_uploads&list=mahnaz.khoini',
    youtubeUrl: 'https://youtube.com/@mahnaz.khoini',
    thumbnail: '/images/mahnaz-khoini-thumb.webp',
    tags: ['سبک دلبستگی', 'EFT هیجان مدار', 'مهناز خوینی', 'انتخاب همسر', 'زوج درمانی آنلاین'],
    keyTakeaways: [
      'چگونه تراماهای دلبستگی گذشته به شکل دعواهای تکراری زناشویی بروز می‌کنند',
      'شناسایی الگوی «تعقیب‌کننده هیجانی» و «فرارکننده اجتنابی»',
      'روش ابراز نیازهای اولیه عاطفی بدون ایجاد جبهه‌گیری در همسر',
      'مراحل ایجاد پیوند امن ناگسستنی بر اساس روانشناسی هیجان‌مدار'
    ],
    transcriptSnippet:
      'وقتی همسر شما سکوت می‌کند یا از اتاق خارج می‌شود، برای او راهکار بقا در برابر فروماندگی هیجانی است. در طرف مقابل، تماس‌های مداوم فرد اضطرابی تلاش برای احساس امنیت است.'
  },
  {
    id: 'when-to-see-couples-therapist',
    slug: 'when-to-see-couples-therapist',
    title: 'چه زمانی باید به زوج درمانگر مراجعه کنیم؟ (پاسخ به سوالات مراجعان)',
    description:
      'آیا زوج‌درمانی واقعاً جواب می‌دهد؟ در این ویدیو مهناز خوینی به زمان طلایی مراجعه، باورهای غلط درباره زوج‌درمانی و نحوه آماده‌سازی همسر مقاوم برای شرکت در جلسات می‌پردازد.',
    category: 'سوالات متداول',
    duration: '۰۹:۳۵',
    publishDate: '۱۴۰۳/۰۴/۰۵',
    viewsCount: '۱۱,۳۰۰ بازدید',
    aparatId: 'Mahnaz.khoini_psychology',
    aparatEmbedUrl: 'https://www.aparat.com/Mahnaz.khoini_psychology',
    aparatUrl: 'https://www.aparat.com/Mahnaz.khoini_psychology',
    youtubeId: 'mahnaz.khoini',
    youtubeEmbedUrl: 'https://www.youtube.com/embed?listType=user_uploads&list=mahnaz.khoini',
    youtubeUrl: 'https://youtube.com/@mahnaz.khoini',
    thumbnail: '/images/mahnaz-khoini.jpg',
    tags: ['زمان مراجعه به زوج درمانگر', 'مهناز خوینی', 'مشاوره آنلاین', 'پروانه نظام روانشناسی'],
    keyTakeaways: [
      '۵ زنگ خطری که نشان می‌دهد مراجعه فوری به زوج درمانگر ضروری است',
      'چگونه همسری که مخالف مشاوره است را بدون اجبار به جلسه بیاوریم',
      'فرآیند جلسه اول زوج درمانی حضوری و آنلاین به چه شکل است',
      'تضمین محرمانگی و بی‌طرفی درمانگر در پروتکل نظام روانشناسی'
    ],
    transcriptSnippet:
      'میانگین زمانی که زوجین پس از بروز مشکلات عمیق به مشاوره مراجعه می‌کنند ۶ سال است! مداخله زودهنگام می‌تواند مانع از فرسایش صمیمیت و هزینه‌های روانی سنگین بعدی شود.'
  },
  {
    id: 'family-boundaries-in-marriage',
    slug: 'family-boundaries-in-marriage',
    title: 'پیشگیری از دخالت خانواده‌ها در زندگی مشترک و مرزبندی سالم زناشویی',
    description:
      'تنظیم مرزهای شفاف و محترمانه با خانواده اصلی زوجین. تحلیل بالینی مهناز خوینی برای جلوگیری از انتقال مشکلات زناشویی به والدین و حفظ استقلال زندگی مشترک.',
    category: 'ارتباط و گفتگو',
    duration: '۱۳:۱۰',
    publishDate: '۱۴۰۳/۰۲/۱۴',
    viewsCount: '۱۰,۷۵۰ بازدید',
    aparatId: 'Mahnaz.khoini_psychology',
    aparatEmbedUrl: 'https://www.aparat.com/Mahnaz.khoini_psychology',
    aparatUrl: 'https://www.aparat.com/Mahnaz.khoini_psychology',
    youtubeId: 'mahnaz.khoini',
    youtubeEmbedUrl: 'https://www.youtube.com/embed?listType=user_uploads&list=mahnaz.khoini',
    youtubeUrl: 'https://youtube.com/@mahnaz.khoini',
    thumbnail: '/images/mahnaz-khoini-thumb.webp',
    tags: ['دخالت خانواده ها', 'مرزبندی زناشویی', 'مهناز خوینی', 'استقلال همسران'],
    keyTakeaways: [
      'تفاوت احترام به والدین با اجازه دادن برای مداخله در تصمیمات زوجین',
      'چگونه همسر خود را در برابر خانواده‌اش حمایت کنیم بدون ایجاد تضاد',
      'قانون عدم بیان رازهای زوجین به والدین حتی در اوج اختلاف',
      'تکنیک‌های مدیریت سفرهای خانوادگی و انتظارات تعطیلات'
    ],
    transcriptSnippet:
      'اولین قدم برای استقلال عاطفی زندگی جدید، حمایت زوجین از یکدیگر در برابر انتقادات بیرونی است. مرزهای شفاف نه تنها احترام به والدین را کم نمی‌کند بلکه به پایداری رابطه کمک می‌کند.'
  }
];

export function getVideoBySlug(slug: string): VideoItem | undefined {
  return VIDEOS_DATA.find((v) => v.slug === slug || v.id === slug);
}
