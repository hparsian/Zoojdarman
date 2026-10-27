import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FaqItem } from '../types';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      q: 'زوج‌درمانی چیست و چه زمانی باید به زوج‌درمانگر مراجعه کنیم؟',
      a: 'زوج‌درمانی رویکردی تخصصی و علمی برای شناسایی الگوهای مخرب ارتباطی، توقف تعارضات تکراری، التیام آسیب‌های دلبستگی (مانند خیانت) و بازگرداندن صمیمیت عاطفی و جنسی است. هر زمان احساس کردید گفتگوها به بن‌بست می‌رسند، فاصله عاطفی یا سکوت جای گفتگو را گرفته، یا بعد از یک بحران اعتماد از دست رفته، زمان مناسبی برای مراجعه است.',
    },
    {
      q: 'اگر همسرم حاضر به همکاری نباشد یا در جلسه شرکت نکند، آیا مشاوره فردی موثر است؟',
      a: 'بله، کاملاً. الگوهای رابطه معمولاً دایره‌ای هستند؛ وقتی یکی از طرفین واکنش و رفتار خود را نسبت به محرک‌ها تغییر می‌دهد، کل پویایی رابطه دستخوش دگرگونی می‌شود. در جلسات فردی، شما یاد می‌گیرید چگونه مرزهای سالم بگذارید، طغیان هیجانی را مهار کنید و فضای رابطه را برای پیوستن همسر امن‌تر نمایید.',
    },
    {
      q: 'کیفیت و اثربخشی جلسات آنلاین زوج‌درمانی در مقایسه با جلسات حضوری چگونه است؟',
      a: 'جلسات آنلاین با همان ساختار و پروتکل‌های دقیق جلسات حضوری (پلتفرم‌های گوگل میت یا واتساپ تصویری) برگزار می‌شوند. تحقیقات بالینی نشان داده‌اند که اثربخشی درمان آنلاین در حوزه زوج‌درمانی با جلسات حضوری برابری می‌کند و برای مراجعانی که در سایر استان‌ها یا خارج از کشور حضور دارند بسیار ایده‌آل است.',
    },
    {
      q: 'چطور بفهمیم مشکل ما یک دوره سخت عادی است یا واقعاً نیاز به مداخله تخصصی داریم؟',
      a: 'اگر یک تعارض خاص (مثل دخالت خانواده‌ها، مسائل مالی، روابط جنسی یا بی‌اعتمادی) ماه‌هاست تکرار می‌شود و تلاش‌های خانگی به نتیجه نرسیده، یا حس می‌کنید در خانه تبدیل به دو همخانه غریبه شده‌اید، این وضعیت یک دوره موقت نیست بلکه نشانه‌ای از قفل شدن رابطه در چرخه منفی است که به مداخله تخصصی نیاز دارد.',
    },
    {
      q: 'مدت هر جلسه و فاصله بین جلسات معمولاً به چه صورت است؟',
      a: 'مدت هر جلسه زوج‌درمانی ۶۰ تا ۷۵ دقیقه است. در ابتدای دوره درمان معمولاً جلسات به صورت هفته‌ای یک بار تنظیم می‌شوند و پس از تثبیت دستاوردها و کاهش تنش‌ها، فاصله جلسات به دو هفته یک‌بار یا ماهانه برای پیگیری تغییر می‌یابد.',
    },
    {
      q: 'آیا مسائل مطرح شده در جلسات کاملاً محرمانه باقی می‌ماند؟',
      a: 'بله، بدون هیچ استثنایی. بر اساس سوگندنامه حرفه‌ای و موازین اخلاقی سازمان نظام روان‌شناسی و مشاوره ایران، تمامی اطلاعات و مکالمات در بالاترین سطح استاندارد محرمانگی پزشکی و درمانی نگهداری می‌شوند.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-[#FAF8F5]" id="faq">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs font-black bg-[#f2eff8] text-[#6D5AA8] px-4 py-1.5 rounded-full border border-[#E5E0EA] mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>پاسخ به ابهامات مراجعان</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#44386B] mb-3">
            سوالات متداول درباره فرآیند زوج‌درمانی
          </h2>
          <p className="text-sm sm:text-base text-[#6F6B78] leading-relaxed">
            پاسخ به پرتکرارترین پرسش‌های مراجعان درباره نحوه برگزاری جلسات، اثربخشی و شرایط نوبت‌دهی.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E5E0EA] shadow-xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-right p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-extrabold text-[#292733] leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'bg-[#6D5AA8] text-white rotate-180' : 'bg-[#FAF8F5] text-[#6F6B78]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#6F6B78] leading-[1.9] border-t border-[#FAF8F5] text-justify">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
