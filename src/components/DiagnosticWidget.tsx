import React, { useState } from 'react';
import { Flame, HeartCrack, Snowflake, Users, Check, MessageSquare, Compass, Lightbulb } from 'lucide-react';
import { DiagnosisScenario } from '../types';

export const DiagnosticWidget: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const scenarios: DiagnosisScenario[] = [
    {
      id: 0,
      tabTitle: 'دعواهای مکرر و قفل شدن گفتگو',
      tabSub: 'پروتکل هیجان‌مدار (EFT)',
      iconClass: 'flame',
      title: 'چرخه منفی تعارض و دفاع (پروتکل EFT)',
      desc: 'در این وضعیت، طرفین در چرخه معیوب «انتقاد - دفاع - کناره‌گیری» گرفتار شده‌اند. زوج‌درمانی هیجان‌مدار با توقف سرزنش‌های سطحی و بیان نیازهای دلبستگی ناگفته، امنیت رابطه را در ۸ الی ۱۲ جلسه بازمی‌گرداند.',
      pills: ['مدت معمول: ۸ تا ۱۲ جلسه', 'فرمت: حضوری و آنلاین', 'تمرین‌های اختصاصی هفتگی'],
      msg: 'سلام، بر اساس تست وضعیت رابطه سایت، برای درمان مشاجرات مکرر و قفل شدن گفتگو درخواست نوبت دارم.',
    },
    {
      id: 1,
      tabTitle: 'شوک خیانت و بحران اعتماد',
      tabSub: 'پروتکل ۳ مرحله‌ای ترمیم',
      iconClass: 'heart-crack',
      title: 'ترومای دلبستگی و بحران اعتماد (پروتکل ۳ مرحله‌ای خیانت)',
      desc: 'کشف خیانت یا شک مزمن ضربه شدیدی به احساس امنیت وارد می‌کند. پروتکل تخصصی با تثبیت هیجان، شفاف‌سازی بدون تخریب و بازسازی گام‌به‌گام پیوند عاطفی، شما را به آرامش و تصمیم عقلانی می‌رساند.',
      pills: ['مدت معمول: ۱۲ تا ۲۰ جلسه', 'پروتکل ۳ مرحله‌ای', 'تثبیت بحران و شفاف‌سازی'],
      msg: 'سلام، بر اساس تست وضعیت رابطه سایت، برای مشاوره تخصصی خیانت و بازسازی اعتماد درخواست نوبت دارم.',
    },
    {
      id: 2,
      tabTitle: 'سردی عاطفی و فاصله زناشویی',
      tabSub: 'احیای دلبستگی و سکس‌تراپی',
      iconClass: 'snowflake',
      title: 'طلاق عاطفی و چرخه اجتناب جنسی (سکس‌تراپی و صمیمیت)',
      desc: 'کاهش ارتباط کلامی و صمیمیت جنسی نشانه ناامیدی خاموش در رابطه است. با تمرین‌های اختصاصی بازگشت به تماس حسی و گفتگوی بدون سرزنش، اشتیاق و انرژی عاطفی دوباره زنده می‌شود.',
      pills: ['مدت معمول: ۸ تا ۱۴ جلسه', 'تمرینات حسی خانگی', 'احیای اشتیاق زناشویی'],
      msg: 'سلام، بر اساس تست وضعیت رابطه سایت، برای درمان سردی عاطفی و صمیمیت زناشویی درخواست نوبت دارم.',
    },
    {
      id: 3,
      tabTitle: 'اختلافات نامزدی و مرز خانواده‌ها',
      tabSub: 'مشاوره پیش از ازدواج و طرحواره',
      iconClass: 'users',
      title: 'طرحواره‌های ناسازگار و مرزبندی خانواده (مشاوره پیش از ازدواج)',
      desc: 'اختلاف بر سر دخالت والدین یا تفاوت‌های عمیق ارزشی نیازمند ارزیابی بالینی طرحواره‌ها و توافق بر سر مرزهای مشترک مستقل است تا از تبدیل شدن اختلافات به بحران بعد از عقد جلوگیری شود.',
      pills: ['مدت معمول: ۴ تا ۶ جلسه', 'تست‌های روان‌سنجی معتبر', 'تعیین مرزهای سالم'],
      msg: 'سلام، بر اساس تست وضعیت رابطه سایت، برای ارزیابی مرزبندی خانواده و مشاوره پیش از ازدواج درخواست نوبت دارم.',
    },
  ];

  const current = scenarios[activeTab];

  const renderIcon = (type: string, className = 'w-5 h-5') => {
    switch (type) {
      case 'flame':
        return <Flame className={className} />;
      case 'heart-crack':
        return <HeartCrack className={className} />;
      case 'snowflake':
        return <Snowflake className={className} />;
      default:
        return <Users className={className} />;
    }
  };

  return (
    <section className="py-20 bg-[#F2EFF8]" id="assessment">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-black bg-[#fcf1ec] text-[#8e482f] px-4 py-1.5 rounded-full border border-[#E8A58D]/30 mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>راهنمای تشخیصی مراجعان</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#44386B] mb-3">
            وضعیت رابطه شما در کدام مرحله قرار دارد؟
          </h2>
          <p className="text-sm sm:text-base text-[#6F6B78] leading-relaxed">
            با انتخاب چالش اصلی رابطه‌تان، رویکرد علمی، طول درمان مورد انتظار و مسیر پیشنهادی را مشاهده کنید.
          </p>
        </div>

        {/* Assessment Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-[#E5E0EA]">
          {/* Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {scenarios.map((s, idx) => {
              const active = idx === activeTab;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveTab(idx)}
                  className={`p-4 rounded-2xl text-right transition-all flex flex-col gap-1 cursor-pointer border ${
                    active
                      ? 'bg-white border-[#6D5AA8] shadow-md ring-2 ring-[#6D5AA8]/20'
                      : 'bg-[#FAF8F5] border-transparent hover:bg-[#f2eff8]'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center mb-1.5 ${
                      active ? 'bg-[#6D5AA8] text-white' : 'bg-white text-[#6D5AA8] border border-[#E5E0EA]'
                    }`}
                  >
                    {renderIcon(s.iconClass, 'w-4 h-4')}
                  </div>
                  <span className="text-sm font-black text-[#292733] leading-snug">{s.tabTitle}</span>
                  <span className="text-xs text-[#6F6B78] font-medium">{s.tabSub}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Box */}
          <div className="bg-[#FAF8F5] rounded-2xl p-6 sm:p-8 border border-[#E5E0EA] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <h3 className="text-lg sm:text-xl font-black text-[#44386B] mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-[#E8A58D]" />
                <span>{current.title}</span>
              </h3>
              <p className="text-sm sm:text-base text-[#6F6B78] leading-[1.9] mb-6 text-justify">
                {current.desc}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {current.pills.map((pill, pIdx) => (
                  <span
                    key={pIdx}
                    className="inline-flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full text-xs font-bold text-[#44386B] border border-[#E5E0EA]"
                  >
                    <Check className="w-3.5 h-3.5 text-[#5e826b]" />
                    <span>{pill}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Action Callout */}
            <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-[#E5E0EA] text-center shadow-xs flex flex-col justify-center">
              <h4 className="text-sm font-black text-[#44386B] mb-2">شروع فرآیند درمان</h4>
              <p className="text-xs text-[#6F6B78] mb-5 leading-relaxed">
                پیام مستقیم آماده برای رزرو نوبت متناسب با وضعیت انتخاب‌شده
              </p>
              <a
                href={`https://wa.me/989199087264?text=${encodeURIComponent(current.msg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#6D5AA8] hover:bg-[#44386B] text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-full shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>ارسال پیام در واتساپ</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
