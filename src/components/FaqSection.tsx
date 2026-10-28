import React, { useState, useEffect } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FaqItem } from '../types';
import { registerFaqSchema } from '../seo';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      q: 'زوج درمان چیست و چه زمانی باید به مرکز زوج درمان مراجعه کنیم؟',
      a: 'زوج درمان رویکردی تخصصی و علمی در روانشناسی بالینی برای شناسایی الگوهای مخرب ارتباطی، توقف تعارضات تکراری، التیام ترومای خیانت و بازگرداندن صمیمیت عاطفی و جنسی است. هر زمان احساس کردید گفتگوها به بن‌بست می‌رسند، قهرها طولانی شده یا طلاق عاطفی رخ داده، زمان طلایی مراجعه به زوج درمانگر است.',
    },
    {
      q: 'اگر همسرم حاضر به مراجعه به زوج درمان نشود، آیا مشاوره فردی موثر است؟',
      a: 'بله، کاملاً. در دیدگاه سیستمیک زوج درمان، الگوهای رابطه دایره‌ای هستند؛ وقتی یکی از طرفین واکنش و رفتار خود را نسبت به محرک‌ها تغییر می‌دهد، کل پویایی رابطه دستخوش دگرگونی می‌شود و معمولاً همسر نیز تمایل به همراهی پیدا می‌کند.',
    },
    {
      q: 'کیفیت و اثربخشی جلسات زوج درمان آنلاین در مقایسه با جلسات حضوری چگونه است؟',
      a: 'جلسات آنلاین زوج درمان با همان پروتکل‌های استاندارد و دقیق جلسات حضوری (گوگل میت یا واتساپ تصویری) برگزار می‌شوند. تحقیقات بالینی نشان داده‌اند که اثربخشی زوج درمان آنلاین با جلسات حضوری برابری می‌کند و برای مراجعان خارج از کشور یا سایر شهرستان‌ها کاملاً ایده‌آل است.',
    },
    {
      q: 'یک زوج درمانگر خوب چه ویژگی‌هایی دارد و از کجا مطمئن شویم؟',
      a: 'زوج درمانگر بالینی باید دارای پروانه رسمی از سازمان نظام روان‌شناسی و مشاوره (پروانه ۱۴۱۴۰۸۳ مهناز خوینی)، تجربه تخصصی در متدهای EFT و گاتمن، بی‌طرفی کامل و تعهد صد در صد به محرمانگی مراجعان باشد.',
    },
    {
      q: 'مدت هر جلسه و تعداد جلسات زوج درمان معمولاً چقدر است؟',
      a: 'مدت هر جلسه زوج درمان بین ۶۰ تا ۷۵ دقیقه است. بسته به عمق تعارض و نوع مشکل (خیانت، طلاق عاطفی یا دعوای مکرر)، دوره درمان معمولاً بین ۸ تا ۲۰ جلسه هفتگی زمان می‌برد.',
    },
    {
      q: 'آیا اسرار مطرح شده در جلسات زوج درمان کاملاً محرمانه باقی می‌ماند؟',
      a: 'بله، بدون هیچ استثنایی. بر اساس سوگندنامه اخلاقی نظام روان‌شناسی، تمامی مکالمات و پرونده‌های بالینی در مرکز تخصصی زوج درمان در بالاترین سطح استانداردهای رازداری پزشکی نگهداری می‌شوند.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  // داده‌های ساختاریافته پرسش‌وپاسخ صفحه اصلی (JSON-LD)
  useEffect(() => registerFaqSchema(faqs), []);

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
            سوالات متداول درباره فرآیند و جلسات زوج درمان
          </h2>
          <p className="text-sm sm:text-base text-[#6F6B78] leading-relaxed">
            پاسخ به پرتکرارترین پرسش‌های مراجعان مرکز زوج درمان درباره نحوه برگزاری جلسات حضوری و آنلاین، اثربخشی و شرایط نوبت‌دهی.
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
