export interface VideoCategoryItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  aparatUrl: string;
  youtubeUrl: string;
  thumbnail: string;
  tags: string[];
  keyTopics: string[];
}

export const OFFICIAL_VIDEO_PLAYLISTS: VideoCategoryItem[] = [
  {
    id: 'infidelity-counseling',
    slug: 'infidelity-counseling',
    title: 'مجموعه ویدیوهای مشاوره خیانت و بازسازی اعتماد',
    description:
      'تحلیل بالینی مراحل آسیب پس از پیمان‌شکنی، راهکارهای خروج از شوک اولیه و پروتکل‌های بازسازی شفافیت با رویکرد هیجان‌مدار (EFT) توسط مهناز خوینی.',
    category: 'مشاوره خیانت',
    aparatUrl: 'https://www.aparat.com/Mahnaz.khoini_psychology',
    youtubeUrl: 'https://youtube.com/@mahnaz.khoini',
    thumbnail: '/images/mahnaz-khoini.jpg',
    tags: ['مشاوره خیانت', 'بازسازی اعتماد', 'زوج درمانی', 'مهناز خوینی'],
    keyTopics: [
      'واکنش‌های طبیعی اولیه پس از پیمان‌شکنی',
      'پروتکل ۳ مرحله‌ای ترمیم اعتماد زناشویی',
      'نقش زوج‌درمانگر هیجان‌مدار در عبور از تروما'
    ]
  },
  {
    id: 'emotional-divorce',
    slug: 'emotional-divorce',
    title: 'مجموعه ویدیوهای طلاق عاطفی و تئوری گاتمن',
    description:
      'شناسایی علائم طلاق عاطفی زیر یک سقف، بررسی چهار سوارکار آسیب‌زننده رابطه (انتقاد، تحقیر، جبهه‌گیری و دیوارکشی) و پادزهر علمی آن‌ها.',
    category: 'طلاق عاطفی',
    aparatUrl: 'https://www.aparat.com/Mahnaz.khoini_psychology',
    youtubeUrl: 'https://youtube.com/@mahnaz.khoini',
    thumbnail: '/images/mahnaz-khoini-thumb.webp',
    tags: ['طلاق عاطفی', 'تئوری گاتمن', 'صمیمیت زناشویی', 'مهناز خوینی'],
    keyTopics: [
      'تفاوت همزیستی ظاهری با طلاق عاطفی واقعی',
      'پادزهر فوری دیوارکشی و لجبازی خاموش',
      'تمرین‌های بازگرداندن صمیمیت عاطفی'
    ]
  },
  {
    id: 'effective-communication',
    slug: 'effective-communication',
    title: 'مجموعه آموزشی تکنیک‌های گفتگوی زناشویی و حل تعارض',
    description:
      'فرمول‌های عملی شروع نرم (Soft Startup)، ابراز انتظارات بدون دعوا و جنجال، و راهکارهای کنترل خشم در مشاجرات خانوادگی.',
    category: 'ارتباط و گفتگو',
    aparatUrl: 'https://www.aparat.com/Mahnaz.khoini_psychology',
    youtubeUrl: 'https://youtube.com/@mahnaz.khoini',
    thumbnail: '/images/mahnaz-khoini.jpg',
    tags: ['گفتگوی موثر', 'حل تعارض', 'کنترل خشم', 'مهناز خوینی'],
    keyTopics: [
      'فرمول گفتگو درباره موضوعات حساس مالی و تربیتی',
      'تکنیک زمان استراحت (Timeout) در مشاجرات',
      'احیا و ترمیم صمیمیت کلامی در زندگی مشترک'
    ]
  },
  {
    id: 'attachment-styles-eft',
    slug: 'attachment-styles-eft',
    title: 'مجموعه ویدیوهای سبک‌های دلبستگی و زوج‌درمانی EFT',
    description:
      'ریشه‌یابی چرخه تعقیب-گریز زوجین، شناخت سبک‌های دلبستگی (اضطرابی، اجتنابی و ایمن) و نحوه تبدیل تعارضات تکراری به پیوند امن.',
    category: 'رویکرد EFT',
    aparatUrl: 'https://www.aparat.com/Mahnaz.khoini_psychology',
    youtubeUrl: 'https://youtube.com/@mahnaz.khoini',
    thumbnail: '/images/mahnaz-khoini-thumb.webp',
    tags: ['سبک دلبستگی', 'رویکرد EFT', 'انتخاب همسر', 'مهناز خوینی'],
    keyTopics: [
      'شناسایی الگوهای دلبستگی ریشه‌دار از کودکی',
      'شکستن چرخه معیوب دعواهای تکراری زناشویی',
      'ایجاد احساس امنیت و تکیه‌گاه عاطفی'
    ]
  },
  {
    id: 'faq-couples-therapy',
    slug: 'faq-couples-therapy',
    title: 'پاسخ به سوالات متداول مراجعین زوج‌درمانی',
    description:
      'زمان طلایی مراجعه به مشاوره، نحوه همراه کردن همسر مقاوم، روند جلسات حضوری و آنلاین و شرایط محرمانگی مراجعین.',
    category: 'سوالات متداول',
    aparatUrl: 'https://www.aparat.com/Mahnaz.khoini_psychology',
    youtubeUrl: 'https://youtube.com/@mahnaz.khoini',
    thumbnail: '/images/mahnaz-khoini.jpg',
    tags: ['سوالات متداول', 'مشاوره حضوری و آنلاین', 'مهناز خوینی'],
    keyTopics: [
      '۵ زنگ خطر نیاز به مداخله فوری زوج‌درمانگر',
      'چگونه همسر را برای شرکت در مشاوره تشویق کنیم؟',
      'فرایند و ساختار جلسات مشاوره بالینی'
    ]
  }
];

// Backward compatibility export
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

export const VIDEOS_DATA: VideoItem[] = OFFICIAL_VIDEO_PLAYLISTS.map((item) => ({
  id: item.id,
  title: item.title,
  slug: item.slug,
  description: item.description,
  category: item.category as any,
  duration: 'ویدیو رسمی',
  publishDate: 'کانال رسمی',
  viewsCount: 'آپارات و یوتیوب',
  aparatId: 'Mahnaz.khoini_psychology',
  aparatEmbedUrl: 'https://www.aparat.com/Mahnaz.khoini_psychology',
  aparatUrl: item.aparatUrl,
  youtubeId: 'mahnaz.khoini',
  youtubeEmbedUrl: 'https://youtube.com/@mahnaz.khoini',
  youtubeUrl: item.youtubeUrl,
  thumbnail: item.thumbnail,
  tags: item.tags,
  keyTakeaways: item.keyTopics,
  transcriptSnippet: item.description
}));

export function getVideoBySlug(slug: string): VideoItem | undefined {
  return VIDEOS_DATA.find((v) => v.slug === slug || v.id === slug);
}
