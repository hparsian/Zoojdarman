export interface YoutubeChannelMeta {
  name: string;
  handle: string;
  description: string;
  avatar: string;
  url: string;
  subscribeUrl: string;
  aparatUrl: string;
}

export const YOUTUBE_CHANNEL_META: YoutubeChannelMeta = {
  name: 'مهناز خوینی | زوج‌درمانگر',
  handle: '@mahnaz.khoini',
  description:
    'تحلیل‌های کوتاه و ویدیوهای آموزشی درباره مهارت‌های حفظ رابطه، مدیریت تعارضات تکراری، نشانه‌های هشداردهنده گاتمن و تصمیم‌گیری آگاهانه پس از آسیب اعتماد.',
  avatar: '/images/youtube/channel-avatar.jpg',
  url: 'https://www.youtube.com/@mahnaz.khoini',
  subscribeUrl: 'https://www.youtube.com/@mahnaz.khoini?sub_confirmation=1',
  aparatUrl: 'https://www.aparat.com/Mahnaz.khoini_psychology',
};

export type VideoCategory =
  | 'مشاوره خیانت'
  | 'طلاق عاطفی'
  | 'ارتباط و گفتگو'
  | 'رویکرد CBCT'
  | 'سوالات متداول';

export interface VideoCategoryItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: VideoCategory;
  aparatUrl: string;
  youtubeUrl: string;
  thumbnail: string;
  tags: string[];
  keyTopics: string[];
}

export interface VideoItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: VideoCategory;
  format: 'ویدیو کامل' | 'ویدیو کوتاه (Shorts)';
  isShort: boolean;
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
    id: '_pu7xDfNt-s',
    slug: 'bitter-truth-about-infidelity',
    title: 'حقیقت تلخ خیانت؛ وقتی عشق کافی نیست',
    description:
      'بررسی این نکته که چرا وجود علاقه به تنهایی از رابطه محافظت نمی‌کند و نبود مهارت‌های ارتباطی، تنظیم هیجان و گفت‌وگوی امن چگونه زمینه آسیب اعتماد را فراهم می‌آورد.',
    category: 'مشاوره خیانت',
    format: 'ویدیو کامل',
    isShort: false,
    duration: 'ویدیوی آموزشی',
    publishDate: 'کانال یوتیوب @mahnaz.khoini',
    viewsCount: 'یوتیوب رسمی',
    aparatId: 'Mahnaz.khoini_psychology',
    aparatEmbedUrl: 'https://www.aparat.com/Mahnaz.khoini_psychology',
    aparatUrl: 'https://www.aparat.com/Mahnaz.khoini_psychology',
    youtubeId: '_pu7xDfNt-s',
    youtubeEmbedUrl: 'https://www.youtube-nocookie.com/embed/_pu7xDfNt-s',
    youtubeUrl: 'https://www.youtube.com/watch?v=_pu7xDfNt-s',
    thumbnail: '/images/youtube/_pu7xDfNt-s.jpg',
    tags: ['خیانت', 'مهارت حفظ عشق', 'زوج‌درمانی', 'مهناز خوینی'],
    keyTakeaways: [
      'چرا علاقه عاطفی بدون مهارت‌های گفت‌وگو و مرزبندی کافی نیست',
      'نقش نیازهای شنیده‌نشده در شکل‌گیری فاصله عاطفی',
      'نگاه بالینی به پیشگیری و مواجهه واقع‌بینانه با آسیب اعتماد',
    ],
    transcriptSnippet:
      'گاهی مشکل کمبود عشق نیست؛ کمبود مهارت حفظ عشق و گفت‌وگوی امن در رابطه است.',
  },
  {
    id: 'JhnQCx9albs',
    slug: 'conflict-resolution-repeated-arguments',
    title: 'مهارت حل تعارض و ریشه دعواهای تکراری',
    description:
      'چرا بحث‌های زوجین بارها با موضوعات متفاوت تکرار می‌شود و به نتیجه نمی‌رسد؟ مروری بر الگوی پنهان تعارض و تغییر شیوه طرح مسئله.',
    category: 'ارتباط و گفتگو',
    format: 'ویدیو کوتاه (Shorts)',
    isShort: true,
    duration: 'Shorts',
    publishDate: 'کانال یوتیوب @mahnaz.khoini',
    viewsCount: 'یوتیوب رسمی',
    aparatId: 'Mahnaz.khoini_psychology',
    aparatEmbedUrl: 'https://www.aparat.com/Mahnaz.khoini_psychology',
    aparatUrl: 'https://www.aparat.com/Mahnaz.khoini_psychology',
    youtubeId: 'JhnQCx9albs',
    youtubeEmbedUrl: 'https://www.youtube-nocookie.com/embed/JhnQCx9albs',
    youtubeUrl: 'https://www.youtube.com/shorts/JhnQCx9albs',
    thumbnail: '/images/youtube/JhnQCx9albs.jpg',
    tags: ['حل تعارض', 'دعواهای تکراری', 'مهارت زندگی و رابطه'],
    keyTakeaways: [
      'شناخت چرخه تکراری بحث‌ها به جای تمرکز صرف بر موضوع دعوا',
      'اصلاح شیوه شروع گفت‌وگو برای کاهش موضع‌گیری دفاعی',
    ],
    transcriptSnippet:
      'چرا هیچ‌وقت دعوای تکراری‌تون حل نمی‌شه؟ آموزش مهارت زندگی و رابطه.',
  },
  {
    id: 'Ks0muY69hdg',
    slug: 'what-to-do-after-infidelity',
    title: 'بعد از خیانت چه کاری درست‌تر است؟',
    description:
      'توضیح رفتارهای سنجیده و اشتباهات رایج در هفته‌های اول پس از آشکار شدن پیمان‌شکنی، برای جلوگیری از تصمیم‌های عجولانه یا تشدید آسیب.',
    category: 'مشاوره خیانت',
    format: 'ویدیو کوتاه (Shorts)',
    isShort: true,
    duration: 'Shorts',
    publishDate: 'کانال یوتیوب @mahnaz.khoini',
    viewsCount: 'یوتیوب رسمی',
    aparatId: 'Mahnaz.khoini_psychology',
    aparatEmbedUrl: 'https://www.aparat.com/Mahnaz.khoini_psychology',
    aparatUrl: 'https://www.aparat.com/Mahnaz.khoini_psychology',
    youtubeId: 'Ks0muY69hdg',
    youtubeEmbedUrl: 'https://www.youtube-nocookie.com/embed/Ks0muY69hdg',
    youtubeUrl: 'https://www.youtube.com/shorts/Ks0muY69hdg',
    thumbnail: '/images/youtube/Ks0muY69hdg.jpg',
    tags: ['بعد از خیانت', 'ترمیم رابطه', 'زوج‌درمانگر'],
    keyTakeaways: [
      'رفتارهایی که به بازگشت امنیت و بررسی منطقی رابطه کمک می‌کند',
      'مدیریت واکنش‌های هیجانی در روزهای بحران اعتماد',
    ],
    transcriptSnippet:
      'بعد از خیانت چه کاری درسته؟ رفتارهایی که به برگشت رابطه کمک می‌کنه یا مناسب‌تره.',
  },
  {
    id: 'UWCegGTr0qs',
    slug: 'gottman-warning-signs-in-relationships',
    title: '۶ نشانه هشداردهنده در رابطه از نگاه گاتمن',
    description:
      'بررسی الگوهای کوچک اما فرساینده در گفت‌وگوهای روزمره که در صورت تداوم، فاصله عاطفی و احتمال جدایی را افزایش می‌دهند.',
    category: 'طلاق عاطفی',
    format: 'ویدیو کوتاه (Shorts)',
    isShort: true,
    duration: 'Shorts',
    publishDate: 'کانال یوتیوب @mahnaz.khoini',
    viewsCount: 'یوتیوب رسمی',
    aparatId: 'Mahnaz.khoini_psychology',
    aparatEmbedUrl: 'https://www.aparat.com/Mahnaz.khoini_psychology',
    aparatUrl: 'https://www.aparat.com/Mahnaz.khoini_psychology',
    youtubeId: 'UWCegGTr0qs',
    youtubeEmbedUrl: 'https://www.youtube-nocookie.com/embed/UWCegGTr0qs',
    youtubeUrl: 'https://www.youtube.com/shorts/UWCegGTr0qs',
    thumbnail: '/images/youtube/UWCegGTr0qs.jpg',
    tags: ['تئوری گاتمن', 'طلاق عاطفی', 'زنگ خطر رابطه'],
    keyTakeaways: [
      'تشخیص نشانه‌های هشدار پیش از مزمن شدن سردی و دیوارکشی',
      'اهمیت توجه به تعاملات کوچک روزانه در پیش‌بینی ثبات رابطه',
    ],
    transcriptSnippet:
      'الگوهای هشداردهنده‌ای که می‌تونن رابطه رو به سمت طلاق ببرن؛ ۶ نشانه مهم از نگاه گاتمن.',
  },
  {
    id: '0PjUwmB3Iik',
    slug: 'why-staying-after-infidelity',
    title: 'چرا بعد از خیانت رابطه را ترک نمی‌کند؟',
    description:
      'تحلیل روان‌شناختی عوامل وابستگی، تعارض درونی، ترس از تغییر و محاسبات هیجانی که باعث تداوم حضور پس از پیمان‌شکنی می‌شود.',
    category: 'مشاوره خیانت',
    format: 'ویدیو کوتاه (Shorts)',
    isShort: true,
    duration: 'Shorts',
    publishDate: 'کانال یوتیوب @mahnaz.khoini',
    viewsCount: 'یوتیوب رسمی',
    aparatId: 'Mahnaz.khoini_psychology',
    aparatEmbedUrl: 'https://www.aparat.com/Mahnaz.khoini_psychology',
    aparatUrl: 'https://www.aparat.com/Mahnaz.khoini_psychology',
    youtubeId: '0PjUwmB3Iik',
    youtubeEmbedUrl: 'https://www.youtube-nocookie.com/embed/0PjUwmB3Iik',
    youtubeUrl: 'https://www.youtube.com/shorts/0PjUwmB3Iik',
    thumbnail: '/images/youtube/0PjUwmB3Iik.jpg',
    tags: ['خیانت', 'تصمیم‌گیری رابطه', 'روان‌شناسی بالینی'],
    keyTakeaways: [
      'تفکیک میان ماندن ناشی از عشق و ماندن ناشی از تردید یا ترس',
      'ارزیابی نشانه‌های مسئولیت‌پذیری واقعی در برابر توجیه',
    ],
    transcriptSnippet: 'خیانت می‌کنه، ولی نمی‌ره... چرا؟',
  },
  {
    id: 'd6g69gkTUTk',
    slug: 'repeated-infidelity-choice-not-mistake',
    title: 'خیانت تکراری چه نشانه‌ای دارد؟',
    description:
      'تفاوت میان یک خطای مقطعی و الگوی تکراری پیمان‌شکنی؛ چه زمانی باید واقع‌بینانه مرزها و آینده رابطه را بازنگری کرد.',
    category: 'مشاوره خیانت',
    format: 'ویدیو کوتاه (Shorts)',
    isShort: true,
    duration: 'Shorts',
    publishDate: 'کانال یوتیوب @mahnaz.khoini',
    viewsCount: 'یوتیوب رسمی',
    aparatId: 'Mahnaz.khoini_psychology',
    aparatEmbedUrl: 'https://www.aparat.com/Mahnaz.khoini_psychology',
    aparatUrl: 'https://www.aparat.com/Mahnaz.khoini_psychology',
    youtubeId: 'd6g69gkTUTk',
    youtubeEmbedUrl: 'https://www.youtube-nocookie.com/embed/d6g69gkTUTk',
    youtubeUrl: 'https://www.youtube.com/shorts/d6g69gkTUTk',
    thumbnail: '/images/youtube/d6g69gkTUTk.jpg',
    tags: ['خیانت تکراری', 'مرزبندی', 'تصمیم آگاهانه'],
    keyTakeaways: [
      'نشانه‌های تکرارپذیری در مقابل تغییر رفتار پایدار',
      'اهمیت مرزبندی روشن برای حفاظت از سلامت روان',
    ],
    transcriptSnippet: 'خیانت تکراری اشتباه نیست؛ انتخاب.',
  },
  {
    id: 'nyni_tKmwvM',
    slug: 'over-compliance-is-not-love',
    title: 'تابع یا مطیع بودن بیش از حد در رابطه',
    description:
      'چرا کوتاه آمدن مداوم، سرکوب خواسته‌ها و ترس از ناراحت کردن شریک عاطفی به جای صمیمیت، به خستگی پنهان و فاصله منجر می‌شود.',
    category: 'رویکرد CBCT',
    format: 'ویدیو کوتاه (Shorts)',
    isShort: true,
    duration: 'Shorts',
    publishDate: 'کانال یوتیوب @mahnaz.khoini',
    viewsCount: 'یوتیوب رسمی',
    aparatId: 'Mahnaz.khoini_psychology',
    aparatEmbedUrl: 'https://www.aparat.com/Mahnaz.khoini_psychology',
    aparatUrl: 'https://www.aparat.com/Mahnaz.khoini_psychology',
    youtubeId: 'nyni_tKmwvM',
    youtubeEmbedUrl: 'https://www.youtube-nocookie.com/embed/nyni_tKmwvM',
    youtubeUrl: 'https://www.youtube.com/shorts/nyni_tKmwvM',
    thumbnail: '/images/youtube/nyni_tKmwvM.jpg',
    tags: ['شناختی رفتاری', 'مرزبندی سالم', 'رویکرد CBCT'],
    keyTakeaways: [
      'تفاوت همدلی سالم با نادیده گرفتن مداوم نیازهای خود',
      'بازسازی گفت‌وگوی برابر در رابطه عاطفی',
    ],
    transcriptSnippet: 'زیادی مطیع بودن، عشق نیست.',
  },
  {
    id: 'CKcv0s1rKb8',
    slug: 'real-or-temporary-relationship',
    title: 'تشخیص رابطه واقعی یا موقت',
    description:
      'نشانه‌های رفتاری ثبات و تعهد واقعی در مقایسه با روابط مبهم و کوتاه‌مدت، برای تصمیم‌گیری روشن‌تر پیش از سرمایه‌گذاری عاطفی بلندمدت.',
    category: 'سوالات متداول',
    format: 'ویدیو کوتاه (Shorts)',
    isShort: true,
    duration: 'Shorts',
    publishDate: 'کانال یوتیوب @mahnaz.khoini',
    viewsCount: 'یوتیوب رسمی',
    aparatId: 'Mahnaz.khoini_psychology',
    aparatEmbedUrl: 'https://www.aparat.com/Mahnaz.khoini_psychology',
    aparatUrl: 'https://www.aparat.com/Mahnaz.khoini_psychology',
    youtubeId: 'CKcv0s1rKb8',
    youtubeEmbedUrl: 'https://www.youtube-nocookie.com/embed/CKcv0s1rKb8',
    youtubeUrl: 'https://www.youtube.com/shorts/CKcv0s1rKb8',
    thumbnail: '/images/youtube/CKcv0s1rKb8.jpg',
    tags: ['مشاوره پیش از ازدواج', 'تعهد رابطه', 'شناخت شریک عاطفی'],
    keyTakeaways: [
      'ارزیابی هم‌خوانی گفتار و رفتار در زمان تصمیم‌ها و مسئولیت‌ها',
      'پرهیز از ابهام عاطفی در روابط جدی',
    ],
    transcriptSnippet: 'رابطه‌ات واقعی یا فقط وقت‌گذرونیه؟',
  },
];

export const OFFICIAL_VIDEO_PLAYLISTS: VideoCategoryItem[] = VIDEOS_DATA.map((item) => ({
  id: item.id,
  slug: item.slug,
  title: item.title,
  description: item.description,
  category: item.category,
  aparatUrl: item.aparatUrl,
  youtubeUrl: item.youtubeUrl,
  thumbnail: item.thumbnail,
  tags: item.tags,
  keyTopics: item.keyTakeaways,
}));

export function getVideoBySlug(slug: string): VideoItem | undefined {
  return VIDEOS_DATA.find((v) => v.slug === slug || v.id === slug);
}
