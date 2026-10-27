import React, { useState } from 'react';
import {
  Sparkles,
  Heart,
  Activity,
  AlertTriangle,
  RotateCcw,
  CheckCircle2,
  Share2,
  MessageSquare,
  ArrowLeft,
  ShieldCheck,
  TrendingUp,
  HelpCircle,
  Award,
  ChevronRight,
  Flame,
  Brain,
  Layers
} from 'lucide-react';

interface Question {
  id: number;
  text: string;
  category: string;
  options: { label: string; score: number }[];
}

interface TestConfig {
  id: string;
  title: string;
  shortDesc: string;
  badge: string;
  icon: 'enrich' | 'gottman' | 'attachment' | 'love-language';
  questionsCount: number;
  timeEstimate: string;
}

export const InteractiveToolsSuite: React.FC = () => {
  const [activeTestId, setActiveTestId] = useState<string>('enrich');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [testCompleted, setTestCompleted] = useState<boolean>(false);
  const [copiedResult, setCopiedResult] = useState<boolean>(false);

  // Tests list
  const tests: TestConfig[] = [
    {
      id: 'enrich',
      title: 'تست علمی سلامت و رضایت زناشویی (ENRICH)',
      shortDesc: 'سنجش ۱۰ فاکتور حیاتی صمیمیت، حل تعارض و پایداری رابطه بر پایه مقیاس استاندارد انریچ',
      badge: 'پرطرفدارترین تست',
      icon: 'enrich',
      questionsCount: 10,
      timeEstimate: '۳ دقیقه',
    },
    {
      id: 'gottman',
      title: 'شاخص پیش‌بینی طلاق عاطفی (۴ سوارکار گاتمن)',
      shortDesc: 'شناسایی و سنجش ۴ رفتار ویرانگر رابطه: سرزنش، تحقیر، جبهه‌گیری و دیوارکشی سکوت',
      badge: 'هشدار زودهنگام',
      icon: 'gottman',
      questionsCount: 8,
      timeEstimate: '۲ دقیقه',
    },
    {
      id: 'attachment',
      title: 'تست سبک دلبستگی در روابط عاطفی',
      shortDesc: 'تشخیص سبک دلبستگی شما و همسرتان (ایمن، اضطرابی، اجتنابی) برای شکستن چرخه دعوا',
      badge: 'رویکرد EFT',
      icon: 'attachment',
      questionsCount: 9,
      timeEstimate: '۳ دقیقه',
    },
    {
      id: 'love-language',
      title: 'آزمون ۵ زبان عشق در زندگی مشترک',
      shortDesc: 'کشف نحوه بیان و دریافت عشق (کلامی، زمان باکیفیت، هدیه، خدمات، لمس و نوازش)',
      badge: 'بهبود صمیمیت',
      icon: 'love-language',
      questionsCount: 5,
      timeEstimate: '۲ دقیقه',
    },
  ];

  // Questions Database
  const enrichQuestions: Question[] = [
    {
      id: 1,
      text: 'هنگامی که با همسرم اختلاف نظر دارم، می‌توانم بدون ترس از فریاد، قهر یا تحقیر احساساتم را بیان کنم.',
      category: 'مهارت گفتگو و امنیت',
      options: [
        { label: 'تقریباً همیشه (کاملاً موافقم)', score: 4 },
        { label: 'اغلب اوقات', score: 3 },
        { label: 'به ندرت', score: 2 },
        { label: 'هرگز (همیشه گفتگو به دعوا یا سکوت ختم می‌شود)', score: 1 },
      ],
    },
    {
      id: 2,
      text: 'از نظر صمیمیت عاطفی و حس درک متقابل، همسرم را امن‌ترین پناهگاه خود می‌دانم.',
      category: 'صمیمیت عاطفی',
      options: [
        { label: 'کاملاً همین‌طور است', score: 4 },
        { label: 'تا حد زیادی', score: 3 },
        { label: 'گاهی احساس تنهایی می‌کنم', score: 2 },
        { label: 'اصلاً، در کنار او احساس غربت و تنهایی دارم', score: 1 },
      ],
    },
    {
      id: 3,
      text: 'در رابطه با دخالت اطرافیان یا خانواده‌های پدری، مرزبندی محکم و حریم خصوصی مستقل داریم.',
      category: 'مرزبندی و استقلال',
      options: [
        { label: 'کاملاً مستقل هستیم و تصمیمات مشترک می‌گیریم', score: 4 },
        { label: 'معمولاً تعادل را حفظ می‌کنیم', score: 3 },
        { label: 'گاهی دخالت‌ها باعث تنش زناشویی می‌شود', score: 2 },
        { label: 'دخالت خانواده‌ها رابطه ما را شدیداً تخریب کرده است', score: 1 },
      ],
    },
    {
      id: 4,
      text: 'از کیفیت صمیمیت فیزیکی، نوازش و رابطه زناشویی خود رضایت داریم.',
      category: 'صمیمیت زناشویی',
      options: [
        { label: 'بسیار رضایت‌بخش و پرحرارت است', score: 4 },
        { label: 'خوب و قابل قبول است', score: 3 },
        { label: 'دچار سردی یا فاصله شده‌ایم', score: 2 },
        { label: 'رابطه ما تقریباً کاملاً سرد یا قطع شده است', score: 1 },
      ],
    },
    {
      id: 5,
      text: 'پس از دعوا یا دلخوری، می‌توانیم ظرف ۲۴ ساعت عذرخواهی کرده و پیوند را ترمیم کنیم.',
      category: 'ترمیم و بخشش',
      options: [
        { label: 'بله، سریعاً آشتی کرده و موضوع را حل می‌کنیم', score: 4 },
        { label: 'با کمی زمان معمولاً حل می‌شود', score: 3 },
        { label: 'قهرهای طولانی چندروزه یا چندهفته‌ای داریم', score: 2 },
        { label: 'کینه و خشم حل‌نشده در رابطه انباشته شده است', score: 1 },
      ],
    },
    {
      id: 6,
      text: 'در مسائل مالی، پس‌انداز و خرج‌کردها با یکدیگر شفاف و همدل هستیم.',
      category: 'شفافیت و اعتماد',
      options: [
        { label: 'کاملاً شفاف و متفق‌القول هستیم', score: 4 },
        { label: 'اکثراً هماهنگ عمل می‌کنیم', score: 3 },
        { label: 'پنهان‌کاری مالی یا اختلاف نظر مکرر داریم', score: 2 },
        { label: 'پول و مسائل مالی منبع دائمی نزاع ماست', score: 1 },
      ],
    },
    {
      id: 7,
      text: 'همسرم به ارزش‌ها، علایق فردی و رشد شخصی من احترام می‌گذارد.',
      category: 'احترام متقابل',
      options: [
        { label: 'همیشه مشوق و حامی من است', score: 4 },
        { label: 'معمولاً احترام می‌گذارد', score: 3 },
        { label: 'گاهی حس کنترل‌گری یا نادیده گرفته‌شدن دارم', score: 2 },
        { label: 'مدام تحقیر یا محدود می‌شوم', score: 1 },
      ],
    },
    {
      id: 8,
      text: 'در طول روز وقت باکیفیت دونفره (بدون موبایل و فرزندان) برای گپ زدن اختصاص می‌دهیم.',
      category: 'صمیمیت عاطفی',
      options: [
        { label: 'بله، حداقل نیم ساعت صحبت دوستانه داریم', score: 4 },
        { label: 'چند بار در هفته این فرصت پیش می‌آید', score: 3 },
        { label: 'خیلی کم، فقط در حد کارهای روزمره صحبت می‌کنیم', score: 2 },
        { label: 'مثل دو هم‌خانه غریبه زیر یک سقف زندگی می‌کنیم', score: 1 },
      ],
    },
    {
      id: 9,
      text: 'میزان اعتماد قلبی من به وفاداری و صداقت همسرم در بالاترین حد است.',
      category: 'شفافیت و اعتماد',
      options: [
        { label: '۱۰۰٪ به او اعتماد دارم و شک و تردیدی ندارم', score: 4 },
        { label: 'اعتماد نسبی بالایی دارم', score: 3 },
        { label: 'سوءظن یا عدم شفافیت‌های آزاردهنده‌ای وجود دارد', score: 2 },
        { label: 'تجربه خیانت یا از دست رفتن کامل اعتماد را داریم', score: 1 },
      ],
    },
    {
      id: 10,
      text: 'چشم‌انداز مشترکی برای آینده رابطه داریم و از بودن با هم احساس غرور و رضایت می‌کنم.',
      category: 'پایداری و تعهد',
      options: [
        { label: 'قطعاً، بهترین انتخاب زندگی‌ام بوده است', score: 4 },
        { label: 'امیدوارم و نگاهم به آینده مثبت است', score: 3 },
        { label: 'به تردید افتاده‌ام و نگران آینده رابطه‌ام هستم', score: 2 },
        { label: 'احساس بن‌بست کامل و ناامیدی از ادامه زندگی مشترک دارم', score: 1 },
      ],
    },
  ];

  const gottmanQuestions: Question[] = [
    {
      id: 1,
      text: 'در حین گفتگو، همسرم یا من از عبارات مطلق مثل «تو همیشه فلان کارو می‌کنی» یا «تو هیچ‌وقت نمی‌فهمی» استفاده می‌کنیم.',
      category: 'انتقاد و سرزنش (Criticism)',
      options: [
        { label: 'به ندرت، درباره رفتار مشخص صحبت می‌کنیم', score: 4 },
        { label: 'گاهی در خشم اتفاق می‌افتد', score: 3 },
        { label: 'اغلب دعواهای ما با این کلمات شروع می‌شود', score: 2 },
        { label: 'دائماً شخصیت همدیگر را هدف حمله قرار می‌دهیم', score: 1 },
      ],
    },
    {
      id: 2,
      text: 'آیا در گفتگوها تمسخر، کنایه، نیشخند یا چشم‌غره و احساس برتری دیده می‌شود؟',
      category: 'تحقیر (Contempt)',
      options: [
        { label: 'اصلاً، حریم احترام همیشه حفظ می‌شود', score: 4 },
        { label: 'خیلی به ندرت', score: 3 },
        { label: 'بله، متلک و طعنه در حرف‌هایمان زیاد است', score: 2 },
        { label: 'کاملاً، احساس بی‌ارزش شمرده شدن و تحقیر مزمن دارم', score: 1 },
      ],
    },
    {
      id: 3,
      text: 'وقتی یکی از ما انتقادی را مطرح می‌کند، دیگری فوراً تقصیر را گردن طرف مقابل می‌اندازد یا نقش قربانی می‌گیرد.',
      category: 'حالت تدافعی (Defensiveness)',
      options: [
        { label: 'مسئولیت سهم خود را می‌پذیریم و گوش می‌دهیم', score: 4 },
        { label: 'ابتدا موضع می‌گیریم اما بعد آرام می‌شویم', score: 3 },
        { label: 'همیشه جواب متقابل داده و گذشته را پیش می‌کشیم', score: 2 },
        { label: 'هیچ‌کس هیچ خطایی را قبول نمی‌کند', score: 1 },
      ],
    },
    {
      id: 4,
      text: 'در اوج عصبانیت، یکی از زوجین اتاق را ترک کرده، قهر می‌کند یا کاملاً سکوت مطلق و بی‌اعتنایی پیشه می‌کند.',
      category: 'دیوارکشی سکوت (Stonewalling)',
      options: [
        { label: 'گفتگو را ادامه داده و به بن‌بست سکوت نمی‌رسیم', score: 4 },
        { label: 'کمی وقفه می‌اندازیم و دوباره صحبت می‌کنیم', score: 3 },
        { label: 'ساعت‌ها یا روزها سکوت سرد و قهر حاکم می‌شود', score: 2 },
        { label: 'یکی از ما کاملاً گوش‌هایش را بسته و خاموش شده است', score: 1 },
      ],
    },
    {
      id: 5,
      text: 'آیا خاطرات خوش اوایل آشنایی و ازدواج هنوز برای شما گرمابخش است یا همه گذشته تلخ به نظر می‌رسد؟',
      category: 'بازنویسی منفی گذشته',
      options: [
        { label: 'خاطرات شیرین پررنگ هستند و ارزش رابطه را یادآوری می‌کنند', score: 4 },
        { label: 'هنوز لحظات قشنگی در خاطرمان هست', score: 3 },
        { label: 'بیشتر رنج‌ها و دلخوری‌ها یادم می‌آید', score: 2 },
        { label: 'احساس می‌کنم از اول اشتباه کردم و هیچ حس خوبی نمانده', score: 1 },
      ],
    },
    {
      id: 6,
      text: 'ضربان قلب یا احساس گرگرفتگی شدید و سرگیجه حین مکالمات مهم رابطه:',
      category: 'غرق‌شدگی فیزیولوژیک (Flooding)',
      options: [
        { label: 'آرامش جسمی دارم و تسلطم را از دست نمی‌دهم', score: 4 },
        { label: 'گاهی مضطرب می‌شوم', score: 3 },
        { label: 'سریعاً از شدت خشم یا گریه کنترلم را از دست می‌دهم', score: 2 },
        { label: 'هر صحبتی تبدیل به بحران پانیک، تپش قلب یا انفجار خشم می‌شود', score: 1 },
      ],
    },
    {
      id: 7,
      text: 'آیا تلاش‌های همسرتان برای تنش‌زدایی (مانند شوخی کوچک، لبخند یا پیشنهاد صلح) را می‌پذیرید؟',
      category: 'تلاش‌های ترمیم (Repair Attempts)',
      options: [
        { label: 'با آغوش باز استقبال می‌کنم و جو سبک می‌شود', score: 4 },
        { label: 'معمولاً بعد از چند دقیقه می‌پذیرم', score: 3 },
        { label: 'اغلب آن را نادیده گرفته یا رد می‌کنم', score: 2 },
        { label: 'تلاش‌های ترمیم را فریبکاری یا بی‌اهمیت تلقی می‌کنم', score: 1 },
      ],
    },
    {
      id: 8,
      text: 'آیا فکر به جدایی یا تنهایی برای شما تسکین‌دهنده به نظر می‌رسد یا اولویت‌تان حفظ رابطه است؟',
      category: 'تمایل به بقای پیوند',
      options: [
        { label: 'قطعاً اولویتم بازسازی و حل ریشه‌ای مشکلات است', score: 4 },
        { label: 'نگرانم ولی می‌خواهم با مشاوره اصلاح شود', score: 3 },
        { label: 'بارها به طلاق فکر کرده‌ام اما هنوز مرددم', score: 2 },
        { label: 'از نظر روانی طلاق گرفته‌ام و فقط جسمم در خانه است', score: 1 },
      ],
    },
  ];

  const attachmentQuestions: Question[] = [
    {
      id: 1,
      text: 'وقتی همسرم به تماس من پاسخ نمی‌دهد یا دیر پیام می‌دهد، اولین واکنشم چیست؟',
      category: 'اضطراب جدایی',
      options: [
        { label: 'نگران نمی‌شوم، فرض می‌کنم سرش شلوغ است (ایمن)', score: 4 },
        { label: 'کمی دلواپس می‌شوم ولی خودداری می‌کنم', score: 3 },
        { label: 'دچار اضطراب شدید شده و بارها تماس می‌گیرم (اضطرابی)', score: 2 },
        { label: 'خودم را بی‌تفاوت نشان می‌دهم تا نشان ندهم اهمیت دارد (اجتنابی)', score: 1 },
      ],
    },
    {
      id: 2,
      text: 'میزان راحتی شما در نشان دادن آسیب‌پذیری و گریه کردن جلوی همسر:',
      category: 'صمیمیت و آسیب‌پذیری',
      options: [
        { label: 'خیلی راحت احساسات عمیق و اشکم را در آغوش او رها می‌کنم', score: 4 },
        { label: 'معمولاً می‌توانم احساسم را بگویم', score: 3 },
        { label: 'نیاز به توجه مداوم دارم و مدام تایید می‌خواهم', score: 2 },
        { label: 'سخت است، ترجیح می‌دهم در تنهایی باشم تا ضعف نشان ندهم', score: 1 },
      ],
    },
    {
      id: 3,
      text: 'هنگام بروز مشکل در رابطه، بیشتر احساس می‌کنید که:',
      category: 'چرخه تعارض',
      options: [
        { label: 'می‌توانیم کنار هم بنشینیم و حلش کنیم (ایمن)', score: 4 },
        { label: 'ترس از این دارم که اگر پیگیری نکنم رابطه تمام شود', score: 3 },
        { label: 'مدام دنبالش می‌دوم و او از من فرار می‌کند (تعقیب‌کننده)', score: 2 },
        { label: 'احساس خفگی می‌کنم و می‌خواهم فاصله بگیرم (گریزنده)', score: 1 },
      ],
    },
    {
      id: 4,
      text: 'باور ذهنی شما درباره میزان اتکا به همسر:',
      category: 'باور به دلبستگی',
      options: [
        { label: 'انسان‌ها به وابستگی ایمن به یکدیگر نیاز دارند', score: 4 },
        { label: 'دوست دارم همیشه کنارم باشد و یک لحظه ترکم نکند', score: 3 },
        { label: 'فقط به خودم تکیه می‌کنم چون دیگران دیر یا زود ناامیدم می‌کنند', score: 1 },
        { label: 'وابستگی نشانه ضعف است و باید کاملاً خودکفا بود', score: 1 },
      ],
    },
    {
      id: 5,
      text: 'وقتی همسرم از من کمی فضای تنهایی می‌خواهد:',
      category: 'تاب‌آوری استقلال',
      options: [
        { label: 'با احترام فرصت می‌دهم و نگران محبتمان نیستم (ایمن)', score: 4 },
        { label: 'می‌پذیرم ولی کمی در دلم دلخور می‌شوم', score: 3 },
        { label: 'حس می‌کنم دیگر دوستم ندارد و به من خیانت روحی می‌کند (اضطرابی)', score: 2 },
        { label: 'من هم فوراً دیوار دفاعی می‌کشم و دورتر می‌شوم (اجتنابی)', score: 1 },
      ],
    },
    {
      id: 6,
      text: 'در رابطه عاطفی، ترس بزرگ‌تر شما کدام است؟',
      category: 'هسته تله‌های دلبستگی',
      options: [
        { label: 'ترس غیرمنطقی خاصی ندارم و گفتگو می‌کنم', score: 4 },
        { label: 'ترس از رها شدن و تنها ماندن (طرحواره رهاشدگی)', score: 2 },
        { label: 'ترس از کنترل شدن، از دست دادن آزادی و خفگی عاطفی', score: 1 },
        { label: 'ترس از فاش شدن نقص‌هایم و پس زده شدن', score: 2 },
      ],
    },
    {
      id: 7,
      text: 'درخواست نوازش و در آغوش کشیده شدن از همسر برای شما:',
      category: 'بیان نیاز دلبستگی',
      options: [
        { label: 'بسیار طبیعی و لذت‌بخش است', score: 4 },
        { label: 'با خواهش یا قهر مطرح می‌کنم تا خودش بفهمد', score: 2 },
        { label: 'هیچ‌وقت درخواست نمی‌کنم، اگر خودش ندهد غرورم اجازه نمی‌دهد', score: 1 },
        { label: 'تماس جسمی زیاد برایم راحت نیست', score: 1 },
      ],
    },
    {
      id: 8,
      text: 'اگر همسرتان در شرایط استرس‌زایی باشد، چگونه واکنش نشان می‌دهید؟',
      category: 'همدلی بالینی',
      options: [
        { label: 'گوش شنوای صبور بدون نصیحت می‌شوم و کنارش می‌مانم', score: 4 },
        { label: 'سریعاً نگران می‌شوم که نکند من اشتباهی کرده‌ام', score: 2 },
        { label: 'راهکارهای منطقی سریع می‌دهم و از شنیدن احساسات فرار می‌کنم', score: 1 },
        { label: 'عصبی می‌شوم و می‌خواهم ماجرا زودتر تمام شود', score: 1 },
      ],
    },
    {
      id: 9,
      text: 'دیدگاه کلی شما درباره میزان دوست‌داشتنی بودن خودتان در نگاه همسر:',
      category: 'عزت نفس رابطه‌ای',
      options: [
        { label: 'باور دارم بدون قید و شرط مورد علاقه و پذیرش او هستم', score: 4 },
        { label: 'مدام نیاز به شنیدن جمله دوستت دارم و اطمینان‌بخشی دارم', score: 2 },
        { label: 'فکر می‌کنم اگر خودم را صددرصد نشان دهم ترکم می‌کند', score: 1 },
        { label: 'برایم مهم نیست، به هیچ‌کس وابسته نمی‌شوم', score: 1 },
      ],
    },
  ];

  const loveLanguageQuestions: Question[] = [
    {
      id: 1,
      text: 'کدام یک از این رفتارها بیشترین احساس ارزشمندی را به شما منتقل می‌کند؟',
      category: 'زبان عشق',
      options: [
        { label: 'شنیدن تحسین، کلمات محبت‌آمیز و قدردانی زبانی (کلام تأیید)', score: 4 },
        { label: 'پیاده‌روی دونفره و گفتگوی عمیق بدون نگاه به گوشی (زمان باکیفیت)', score: 4 },
        { label: 'آوردن یک هدیه یا یادگاری کوچک بی‌بهانه (دریافت هدایا)', score: 4 },
        { label: 'وقتی خسته‌ام بدون اینکه بگویم ظرف‌ها یا کاری را انجام دهد (خدمت‌رسانی)', score: 4 },
      ],
    },
    {
      id: 2,
      text: 'بزرگترین کمبود عاطفی که در رابطه حس می‌کنید معمولاً مربوط به چیست؟',
      category: 'نیاز سرکوب‌شده',
      options: [
        { label: 'نشنیدن ابراز علاقه و جملات محبت‌آمیز روزانه', score: 3 },
        { label: 'نداشتن خلوت و تفریح دونفره مشترک', score: 3 },
        { label: 'بی‌توجهی به مناسبت‌ها و بی‌ذوقی در هدیه دادن', score: 3 },
        { label: 'کمبود لمس، نوازش، بغل گرفتن و صمیمیت فیزیکی', score: 3 },
      ],
    },
    {
      id: 3,
      text: 'هنگام عذرخواهی، کدام رفتار همسر بیشترین اثر ترمیمی را روی شما دارد؟',
      category: 'ترمیم صمیمیت',
      options: [
        { label: 'گفتن صادقانه «معذرت می‌خواهم، تو برام مهمی و دوستت دارم»', score: 4 },
        { label: 'در آغوش گرفتن صمیمانه و نگاه آرام‌بخش', score: 4 },
        { label: 'انجام دادن کاری عملی برای جبران ناراحتی', score: 4 },
        { label: 'گذاشتن چند ساعت وقت اختصاصی برای صحبت و دلجویی', score: 4 },
      ],
    },
    {
      id: 4,
      text: 'شما عشق خود را معمولاً چگونه به همسرتان ابراز می‌کنید؟',
      category: 'ابراز عشق',
      options: [
        { label: 'با زبان و پیام‌های عاشقانه مداوم', score: 4 },
        { label: 'با ماساژ، بغل کردن و لمس‌های محبت‌آمیز', score: 4 },
        { label: 'با رسیدگی به کارهای خانه، خرید و آسایش مادی او', score: 4 },
        { label: 'با غافلگیر کردن با هدایای خاص و یادداشت عاشقانه', score: 4 },
      ],
    },
    {
      id: 5,
      text: 'کدام رفتار همسرتان شما را عمیقاً سرد و دلزده می‌کند؟',
      category: 'تله‌های ناهماهنگی',
      options: [
        { label: 'تحقیر کلامی و بددهنی هنگام ناراحتی', score: 2 },
        { label: 'رد کردن تماس بدنی و پس زدن نوازش', score: 2 },
        { label: 'بی‌توجهی کامل به وقت‌گذرانی مشترک و فرار از خانه', score: 2 },
        { label: 'طلبکار بودن و نادیده گرفتن زحمات شبانه‌روزی من', score: 2 },
      ],
    },
  ];

  const getActiveQuestions = (): Question[] => {
    switch (activeTestId) {
      case 'gottman':
        return gottmanQuestions;
      case 'attachment':
        return attachmentQuestions;
      case 'love-language':
        return loveLanguageQuestions;
      default:
        return enrichQuestions;
    }
  };

  const currentQuestions = getActiveQuestions();
  const currentQuestion = currentQuestions[currentQuestionIndex];

  const handleSelectOption = (score: number) => {
    const updatedAnswers = {
      ...selectedAnswers,
      [currentQuestion.id]: score,
    };
    setSelectedAnswers(updatedAnswers);

    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setTestCompleted(true);
    }
  };

  const handleResetTest = (newTestId?: string) => {
    if (newTestId) {
      setActiveTestId(newTestId);
    }
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setTestCompleted(false);
    setCopiedResult(false);
  };

  // Score Calculation
  const totalScore = Object.values(selectedAnswers).reduce((a, b) => a + b, 0);
  const maxPossibleScore = currentQuestions.length * 4;
  const scorePercentage = Math.round((totalScore / maxPossibleScore) * 100);

  // Interpretation based on test
  const getEnrichDiagnosis = (scorePct: number) => {
    if (scorePct >= 80) {
      return {
        level: 'سلامت عالی و پیوند عاطفی مستحکم',
        color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
        badge: 'رابطه پایدار و شکوفا',
        summary:
          'پیوند شما دارای ذخیره امنیت عاطفی بالایی است. شما مهارت‌های گفتگو، ترمیم تعارض و احترام متقابل را به خوبی به کار می‌گیرید. جهت ارتقای صمیمیت، جلسات غنی‌سازی سالانه پیشنهاد می‌شود.',
        advice: [
          'زمان‌های باکیفیت دونفره هفتگی را حتی در شلوغی‌های کاری حفظ کنید.',
          'تمرین گفتگوی عمیق هیجانی (Check-in) هفتگی را در برنامه قرار دهید.',
          'روی پروژه‌ها و اهداف مشترک معنادار سرمایه‌گذاری کنید.',
        ],
      };
    } else if (scorePct >= 60) {
      return {
        level: 'پایدار اما نیازمند مراقبت و ترمیم مهارت‌ها',
        color: 'text-amber-800 bg-amber-50 border-amber-200',
        badge: 'زنگ هشدار فاصله عاطفی',
        summary:
          'پایه عاطفی رابطه هنوز زنده است، اما در بخش‌هایی مانند نحوه حل تعارض، دخالت اطرافیان یا صمیمیت جنسی دلخوری‌های پنهان وجود دارد. اگر این گره‌ها با زوج‌درمانی باز نشوند، احتمال ورود به طلاق عاطفی در ۲ سال آینده بالاست.',
        advice: [
          'توقف سرزنش‌های کلی در هنگام دعوا و تبدیل انتقاد به بیان نیاز عاطفی.',
          'تمرین گوش دادن بازتابی بدون دفاع و گارد گرفتن.',
          'گذراندن ۴ الی ۶ جلسه زوج‌درمانی متمرکز بر حل تعارض (EFT).',
        ],
      };
    } else if (scorePct >= 40) {
      return {
        level: 'وضعیت پرخطر: چرخه فرسایشی تعارض یا سردی مزمن',
        color: 'text-orange-800 bg-orange-50 border-orange-200',
        badge: 'نیازمند مداخله تخصصی فوری',
        summary:
          'رابطه شما در چرخه منفی «انتقاد - دفاع - کناره‌گیری» به دام افتاده است. امنیت رابطه به شدت آسیب دیده و مکالمات روزمره به سرعت به میدان جنگ یا سکوت سنگین تبدیل می‌شود.',
        advice: [
          'از تصمیم‌گیری‌های شتاب‌زده درباره جدایی یا بارداری در این برهه خودداری کنید.',
          'سریعاً یک دوره ارزیابی زوج‌درمانی تخصصی با مهناز خوینی رزرو نمایید.',
          'پروتکل توقف مشاجره و قانون تایم‌اوت ۲۰ دقیقه‌ای هنگام خشم را فوراً اجرا کنید.',
        ],
      };
    } else {
      return {
        level: 'بحران حاد رابطه و طلاق عاطفی پیشرفته',
        color: 'text-rose-800 bg-rose-50 border-rose-200',
        badge: 'وضعیت اضطراری پیوند زناشویی',
        summary:
          'میزان ناامیدی، انباشت کینه و دیوارکشی سکوت در رابطه به حد نهایی رسیده است. این وضعیت بدون حضور متخصص بی‌طرف و مسلط بر ترومای رابطه و طرحواره‌درمانی، خودبه‌خود بهبود نخواهد یافت.',
        advice: [
          'قبل از اقدام حقوقی، حداقل ۶ جلسه مشاوره بالینی برای بررسی امکان بازسازی یا جدایی کم‌خسارت انجام دهید.',
          'هرگونه تهدید، تحقیر یا صحبت از رفتن را فوراً متوقف کنید.',
          'جهت تثبیت بحران فوراً نوبت ارزیابی اورژانسی هماهنگ کنید.',
        ],
      };
    }
  };

  const getGottmanDiagnosis = (scorePct: number) => {
    if (scorePct >= 75) {
      return {
        level: 'ایمن: مکالمات سازنده بدون ۴ ویرانگر گاتمن',
        color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
        badge: 'احترام متقابل فعال',
        summary:
          'خوشبختانه سموم چهارگانه رابطه (تحقیر، سرزنش، جبهه‌گیری و دیوارکشی) در رابطه شما بسیار اندک است و تلاش‌های ترمیم به ثمر می‌نشیند.',
        advice: [
          'قدردان لحن نرم شروع مکالمه خود باشید.',
          'تلاش‌های آشتی کوچک همسر را همواره با آغوش باز پاسخ دهید.',
        ],
      };
    } else if (scorePct >= 50) {
      return {
        level: 'هشدار جدی: نفوذ تحقیر و حالت تدافعی در مشاجرات',
        color: 'text-amber-800 bg-amber-50 border-amber-200',
        badge: 'شاخص ریسک طلاق عاطفی ۶۰٪',
        summary:
          'تحقیقات بالینی دکتر گاتمن نشان می‌دهد وجود تحقیر و کنایه قوی‌ترین پیش‌بینی‌کننده شکست رابطه است. رابطه شما در مرحله لغزش به سوی انزوا و قطع ارتباط کلامی قرار دارد.',
        advice: [
          'تحقیر و نیشخند را فوراً به عنوان خط قرمز قطعی مکالمات اعلام کنید.',
          'جایگزین کردن حالت تدافعی با عبارت: «حق با توئه، در این قسمت اشتباه کردم».',
        ],
      };
    } else {
      return {
        level: 'خطر فوری طلاق عاطفی و از بین رفتن حریم احترام',
        color: 'text-rose-800 bg-rose-50 border-rose-200',
        badge: 'شاخص ریسک طلاق ۸۵٪',
        summary:
          'دیوارکشی سکوت و انزجار عاطفی فعال است. در این مرحله، فیزیولوژی بدن شما در حضور همسر مدام در حالت جنگ یا گریز (Fight or Flight) قرار دارد.',
        advice: [
          'بررسی علائم افسردگی یا فرسودگی عاطفی توسط زوج‌درمانگر متخصص.',
          'توقف جلسات محاکمه‌گونه خانگی و ورود به چارچوب بالینی کنترل‌شده.',
        ],
      };
    }
  };

  const getAttachmentDiagnosis = (scorePct: number) => {
    if (scorePct >= 70) {
      return {
        level: 'سبک دلبستگی غالب: ایمن و تاب‌آور (Secure)',
        color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
        badge: 'دلبستگی ایمن',
        summary:
          'شما توانایی بالایی در ایجاد صمیمیت بدون ترس از دست دادن هویت شخصی دارید. در برابر قهر یا فاصله عاطفی، واکنش آرام و سازنده‌ای نشان می‌دهید.',
        advice: [
          'پناهگاه امن همسرتان در لحظات بحرانی باشید.',
          'به شریک عاطفی‌تان کمک کنید تا ترس‌های اضطرابی یا اجتنابی‌اش را آرام کند.',
        ],
      };
    } else if (scorePct >= 45) {
      return {
        level: 'سبک دلبستگی غالب: اضطرابی - نگران (Anxious/Preoccupied)',
        color: 'text-amber-800 bg-amber-50 border-amber-200',
        badge: 'ترس از رهاشدگی و تله تعقیب',
        summary:
          'شما شدیداً نگران میزان علاقه و وفاداری همسر هستید و در غیاب توجه مداوم، احساس طردشدگی و وحشت می‌کنید. این رفتار باعث می‌شود ناخودآگاه با پیام‌های رگباری یا شکایت، همسر را بیشتر به سمت فرار و اجتناب سوق دهید.',
        advice: [
          'تمرین خودآرام‌بخشی قبل از واکنش هیجانی به دیر پاسخ دادن همسر.',
          'کار بر روی طرحواره رهاشدگی و طرحواره نقص/شرم با روانشناس بالینی.',
        ],
      };
    } else {
      return {
        level: 'سبک دلبستگی غالب: اجتنابی - دوری‌گزین (Avoidant/Dismissive)',
        color: 'text-purple-800 bg-purple-50 border-purple-200',
        badge: 'ترس از خفگی و استقلال افراطی',
        summary:
          'شما صمیمیت زیاد را تهدیدی برای استقلال خود حس می‌کنید و هنگام بروز تعارض یا گریه همسر، سریعاً خاموش شده و دیوار می‌کشید. این رفتار از زخم‌های گذشته برای محافظت از خود نشأت می‌گیرد.',
        advice: [
          'فاصله گرفتن را با توضیح همراه کنید: «الان عصبی‌ام، ۲۰ دقیقه می‌رم تو اتاق بعد با هم حرف می‌زنیم».',
          'یادگیری نام‌گذاری هیجانات در جلسات طرحواره‌درمانی.',
        ],
      };
    }
  };

  const diagnosis =
    activeTestId === 'gottman'
      ? getGottmanDiagnosis(scorePercentage)
      : activeTestId === 'attachment'
      ? getAttachmentDiagnosis(scorePercentage)
      : getEnrichDiagnosis(scorePercentage);

  // Generate shareable WhatsApp text
  const shareText = `سلام، من در آزمون آنلاین سلامت رابطه «زوج‌درمان» شرکت کردم.\nنتیجه شاخص رابطه من: ${scorePercentage}٪ (${diagnosis.level})\nتحلیل بالینی: ${diagnosis.summary}\nلینک شرکت رایگان در تست: https://zoojdarman.ir/#tools`;

  const copyToClipboard = () => {
    navigator.clipboard?.writeText(shareText);
    setCopiedResult(true);
    setTimeout(() => setCopiedResult(false), 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#FAF8F5] via-[#F2EFF8]/50 to-[#FAF8F5]" id="tools">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FAF8F5] text-[#6D5AA8] px-4 py-1.5 rounded-full border border-[#6D5AA8]/30 text-xs font-black mb-4 shadow-xs">
            <Sparkles className="w-4 h-4 text-[#E8A58D]" />
            <span>سامانه هوشمند ارزیابی روانشناسی رابطه</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#8FAF9B]" />
            <span className="text-[11px] text-[#5e826b]">بیش از ۱۴,۵۰۰ شرکت‌کننده</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#44386B] mb-4 tracking-tight">
            تست‌های آنلاین و ابزارهای تشخیصی{' '}
            <span className="text-[#6D5AA8] block sm:inline">زوج‌درمانی و سنجش رابطه</span>
          </h2>

          <p className="text-sm sm:text-base text-[#6F6B78] leading-relaxed">
            با پاسخ به پرسش‌های بالینی استاندارد زیر، کارنامه تفکیکی وضعیت عاطفی، درصد خطر طلاق و ریشه مشاجرات رابطه‌تان را در کمتر از ۳ دقیقه دریافت کنید.
          </p>
        </div>

        {/* Test Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {tests.map((test) => {
            const isSelected = activeTestId === test.id;
            return (
              <button
                key={test.id}
                onClick={() => handleResetTest(test.id)}
                className={`p-5 rounded-2xl text-right transition-all duration-200 border flex flex-col justify-between cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? 'bg-white border-[#6D5AA8] shadow-lg ring-2 ring-[#6D5AA8]/20 -translate-y-1'
                    : 'bg-white/80 border-[#E5E0EA] hover:bg-white hover:border-[#6D5AA8]/40 shadow-xs'
                }`}
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-[10px] font-black px-2.5 py-1 rounded-full ${
                      isSelected
                        ? 'bg-[#6D5AA8] text-white'
                        : 'bg-[#f2eff8] text-[#6D5AA8]'
                    }`}
                  >
                    {test.badge}
                  </span>
                  <span className="text-[11px] text-[#8e8a96] font-medium">{test.timeEstimate}</span>
                </div>

                <h3 className="text-sm sm:text-base font-black text-[#292733] mb-2 leading-snug">
                  {test.title}
                </h3>

                <p className="text-xs text-[#6F6B78] leading-relaxed line-clamp-2 mb-4">
                  {test.shortDesc}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-[#E5E0EA] text-xs font-bold text-[#6D5AA8]">
                  <span>{isSelected ? 'در حال اجرا' : 'شروع تست رایگان'}</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'rotate-90' : ''}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Test Execution or Result Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E5E0EA] shadow-md max-w-4xl mx-auto">
          {!testCompleted ? (
            /* Active Question State */
            <div>
              {/* Progress & Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E5E0EA]">
                <div>
                  <span className="text-xs font-black text-[#6D5AA8] block mb-1">
                    سوال {currentQuestionIndex + 1} از {currentQuestions.length}
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-[#44386B]">
                    {tests.find((t) => t.id === activeTestId)?.title}
                  </h3>
                </div>

                <div className="text-left">
                  <span className="text-xs font-bold text-[#6F6B78] block">پیشرفت تست</span>
                  <span className="text-sm font-black text-[#44386B]" dir="ltr">
                    {Math.round(((currentQuestionIndex + 1) / currentQuestions.length) * 100)}%
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-[#f2eff8] h-2.5 rounded-full mb-8 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-[#8FAF9B] to-[#6D5AA8] h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%`,
                  }}
                />
              </div>

              {/* Question Box */}
              <div className="mb-8">
                <span className="inline-block text-[11px] font-bold text-[#5e826b] bg-[#edf5f0] px-3 py-1 rounded-full mb-3">
                  موضوع: {currentQuestion.category}
                </span>
                <p className="text-base sm:text-xl font-black text-[#292733] leading-relaxed">
                  {currentQuestion.text}
                </p>
              </div>

              {/* Options */}
              <div className="flex flex-col gap-3 mb-8">
                {currentQuestion.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt.score)}
                    className="w-full p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] hover:bg-[#f2eff8] text-right text-xs sm:text-sm font-extrabold text-[#292733] border border-[#E5E0EA] hover:border-[#6D5AA8] hover:text-[#44386B] transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <span className="flex-1">{opt.label}</span>
                    <span className="w-6 h-6 rounded-full border-2 border-[#E5E0EA] group-hover:border-[#6D5AA8] flex items-center justify-center shrink-0 mr-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-transparent group-hover:bg-[#6D5AA8] transition-colors" />
                    </span>
                  </button>
                ))}
              </div>

              {/* Back / Navigation button if needed */}
              <div className="flex items-center justify-between text-xs text-[#8e8a96] pt-4 border-t border-[#E5E0EA]">
                <span>پاسخ‌های شما کاملاً ناشناس و محرمانه پردازش می‌شوند.</span>
                {currentQuestionIndex > 0 && (
                  <button
                    onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
                    className="font-bold text-[#6D5AA8] hover:underline cursor-pointer"
                  >
                    بازگشت به سوال قبل
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Results & Diagnostic Report */
            <div>
              {/* Top Result Banner */}
              <div className="text-center mb-8 pb-8 border-b border-[#E5E0EA]">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#f2eff8] text-[#6D5AA8] mb-4 shadow-inner">
                  <Award className="w-8 h-8" />
                </div>

                <span className="block text-xs font-bold text-[#6F6B78] mb-1">
                  کارنامه بالینی ارزیابی رابطه
                </span>

                <h3 className="text-2xl sm:text-3xl font-black text-[#44386B] mb-4">
                  {tests.find((t) => t.id === activeTestId)?.title}
                </h3>

                {/* Score Dial */}
                <div className="inline-flex flex-col items-center justify-center p-6 rounded-3xl bg-[#FAF8F5] border border-[#E5E0EA] shadow-inner mb-4">
                  <span className="text-xs text-[#6F6B78] font-bold mb-1">شاخص سلامت و امنیت رابطه</span>
                  <div className="text-4xl sm:text-5xl font-black text-[#6D5AA8]" dir="ltr">
                    {scorePercentage} <span className="text-2xl font-bold text-[#8FAF9B]">/ ۱۰۰</span>
                  </div>
                  <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-black mt-3 border ${diagnosis.color}`}>
                    {diagnosis.badge}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-black text-[#292733] max-w-xl mx-auto">
                  {diagnosis.level}
                </h4>
              </div>

              {/* Clinical Analysis by Mahnaz Khoini */}
              <div className="bg-[#FAF8F5] p-6 sm:p-8 rounded-2xl border border-[#E5E0EA] mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="/images/mahnaz-khoini-thumb.webp"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/mahnaz-khoini.jpg';
                    }}
                    alt="مهناز خوینی"
                    width={617}
                    height={775}
                    loading="lazy"
                    decoding="async"
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#6D5AA8]"
                  />
                  <div>
                    <h5 className="text-sm font-black text-[#44386B]">
                      تحلیل تخصصی مهناز خوینی (زوج‌درمانگر هیجان‌مدار)
                    </h5>
                    <span className="text-[11px] text-[#6F6B78] font-bold">
                      پروانه نظام روان‌شناسی: ۱۴۱۴۰۸۳
                    </span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#292733] leading-relaxed mb-6 text-justify">
                  {diagnosis.summary}
                </p>

                <h6 className="text-xs font-black text-[#44386B] mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5e826b]" />
                  <span>راهکارهای بالینی پیشنهادی برای شروع درمان:</span>
                </h6>

                <ul className="space-y-2 mb-2">
                  {diagnosis.advice.map((item, aIdx) => (
                    <li
                      key={aIdx}
                      className="text-xs sm:text-sm text-[#6F6B78] flex items-start gap-2 leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6D5AA8] mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons: Viral Share & Consultation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {/* Book Session with Results */}
                <a
                  href={`https://wa.me/989199087264?text=${encodeURIComponent(
                    `سلام خانم خوینی، در آزمون ${tests.find((t) => t.id === activeTestId)?.title} سایت شرکت کردم. نمره رابطه من ${scorePercentage} از ۱۰۰ شد (${diagnosis.level}). برای جلسه تحلیل کارنامه و مشاوره زوج‌درمانی درخواست نوبت دارم.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 px-6 bg-[#6D5AA8] hover:bg-[#44386B] text-white rounded-2xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>رزرو نوبت تحلیل کارنامه در واتساپ</span>
                </a>

                {/* Share with Partner / WhatsApp */}
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(shareText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 px-6 bg-[#edf5f0] hover:bg-[#d8e8dd] text-[#5e826b] rounded-2xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 border border-[#8FAF9B]/40 transition-all"
                >
                  <Share2 className="w-4 h-4" />
                  <span>ارسال کارنامه به همسر در واتساپ</span>
                </a>
              </div>

              {/* Utility actions */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#E5E0EA] text-xs">
                <button
                  onClick={copyToClipboard}
                  className="font-bold text-[#6F6B78] hover:text-[#6D5AA8] flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{copiedResult ? 'متن کارنامه کپی شد!' : 'کپی متن خلاصه نتایج'}</span>
                </button>

                <button
                  onClick={() => handleResetTest()}
                  className="font-black text-[#6D5AA8] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>تکرار مجدد آزمون</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Viral Traffic Features Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          <div className="bg-white p-5 rounded-2xl border border-[#E5E0EA] flex items-start gap-3 shadow-xs">
            <div className="w-9 h-9 rounded-xl bg-[#edf5f0] text-[#5e826b] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-black text-[#292733] mb-1">کاملاً رایگان و محرمانه</h4>
              <p className="text-[11px] text-[#6F6B78] leading-relaxed">
                بدون نیاز به ثبت‌نام یا اطلاعات هویتی؛ پاسخ‌ها فقط در مرورگر شما پردازش می‌شوند.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#E5E0EA] flex items-start gap-3 shadow-xs">
            <div className="w-9 h-9 rounded-xl bg-[#f2eff8] text-[#6D5AA8] flex items-center justify-center shrink-0">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-black text-[#292733] mb-1">منطبق بر مقیاس‌های EFT و Gottman</h4>
              <p className="text-[11px] text-[#6F6B78] leading-relaxed">
                طراحی شده بر اساس پرسشنامه‌های معتبر انریچ و پروتکل‌های هیجان‌مدار بین‌المللی.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#E5E0EA] flex items-start gap-3 shadow-xs">
            <div className="w-9 h-9 rounded-xl bg-[#fcf1ec] text-[#8e482f] flex items-center justify-center shrink-0">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-black text-[#292733] mb-1">قابلیت مقایسه با همسر</h4>
              <p className="text-[11px] text-[#6F6B78] leading-relaxed">
                ارسال لینک به پارتنر جهت مقایسه دیدگاه‌ها و پیدا کردن ریشه پنهان سوءتفاهم‌ها.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
