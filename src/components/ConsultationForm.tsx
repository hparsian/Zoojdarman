import React, { useState } from 'react';
import { Phone, MapPin, Clock, CheckCircle2, Copy, Check, MessageSquare, ExternalLink } from 'lucide-react';
import { PARENT_CLINIC_LINKS } from '../utils/parentClinicLinks';

export const ConsultationForm: React.FC = () => {
  const [nameOrAlias, setNameOrAlias] = useState('');
  const [contactWay, setContactWay] = useState('');
  const [topic, setTopic] = useState('زوج‌درمانی و بهبود گفت‌وگو');
  const [format, setFormat] = useState('آنلاین تصویری');
  const [timeSlot, setTimeSlot] = useState('عصر (۱۶ تا ۲۱)');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactWay.trim()) return;
    setSubmitted(true);
  };

  const summaryText = `درخواست نوبت مشاوره\nنام / نام مستعار: ${
    nameOrAlias.trim() || 'ترجیح می‌دهم در تماس تلفنی اعلام کنم'
  }\nموضوع کلی: ${topic}\nشیوه جلسه: ${format}\nبازه زمانی مناسب: ${timeSlot}`;

  const handleCopySummary = async () => {
    try {
      await navigator.clipboard.writeText(summaryText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // clipboard blocked fallback ignored
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FCFBF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Contact & Location Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-semibold text-[#3D5E4E] mb-2">
                هماهنگی امن و محترمانه
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#292D2A] leading-snug mb-3">
                درخواست نوبت یا گفت‌وگوی کوتاه پذیرش
              </h2>
              <p className="text-sm sm:text-base text-[#555650] leading-relaxed">
                نیازی به نوشتن جزئیات خصوصی زندگی خود در فرم سایت نیست. تنها با انتخاب موضوع کلی و
                شیوه جلسه، همکاران پذیرش برای هماهنگی ساعت مناسب با شما تماس می‌گیرند.
              </p>
            </div>

            <div className="bg-[#F4F1EC] border border-[#E5E0D8] rounded-2xl p-6 space-y-5 text-sm">
              <div className="flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-[#344A42] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold text-[#292D2A] block">تماس مستقیم کلینیک</span>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs sm:text-sm" dir="ltr">
                    <a href="tel:02144600980" className="text-[#344A42] font-semibold hover:underline">
                      021-44600980
                    </a>
                    <a href="tel:09199087264" className="text-[#344A42] font-semibold hover:underline">
                      0919-908-7264
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#344A42] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#292D2A] block">نشانی جلسات حضوری</span>
                  <p className="text-xs sm:text-sm text-[#555650] leading-relaxed mt-1">
                    تهران، منطقه ۲ (محدوده صادقیه – پونک، کلینیک پیوند امن)
                  </p>
                  <a
                    href="https://maps.app.goo.gl/b9dx9xeA69wJJPzd6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#344A42] hover:text-[#273932] underline underline-offset-4 mt-1.5 transition-colors"
                  >
                    <span>مسیریابی کلینیک روی نقشه گوگل</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-[#344A42] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#292D2A] block">ساعات پاسخگویی و جلسات</span>
                  <p className="text-xs sm:text-sm text-[#555650] leading-relaxed mt-1">
                    شنبه تا چهارشنبه ۹ تا ۲۱ · پنج‌شنبه‌ها تا ۱۹ (جمعه‌ها ویژه ایرانیان خارج از کشور با هماهنگی قبلی)
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5E0D8]">
                <a
                  href={PARENT_CLINIC_LINKS.portal}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#344A42] hover:text-[#273932] underline underline-offset-4 transition-colors"
                >
                  <span>ورود به پورتال مراجعان کلینیک پیوند امن</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Privacy-First Minimal Intake Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#F4F1EC] border border-[#E5E0D8] rounded-2xl p-6 sm:p-9">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="intake-name"
                      className="block text-xs sm:text-sm font-semibold text-[#292D2A] mb-2"
                    >
                      نام یا نام مستعار (اختیاری)
                    </label>
                    <input
                      id="intake-name"
                      type="text"
                      value={nameOrAlias}
                      onChange={(e) => setNameOrAlias(e.target.value)}
                      placeholder="مثلاً: سارا یا فقط حروف اول"
                      className="w-full px-4 py-3 rounded-lg bg-[#FCFBF8] border border-[#CFC7BA] focus:border-[#344A42] focus:outline-none text-sm text-[#292D2A] placeholder:text-[#6E6E68]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="intake-contact"
                      className="block text-xs sm:text-sm font-semibold text-[#292D2A] mb-2"
                    >
                      شماره تماس یا راه ارتباطی ترجیحی *
                    </label>
                    <input
                      id="intake-contact"
                      type="text"
                      required
                      dir="ltr"
                      value={contactWay}
                      onChange={(e) => setContactWay(e.target.value)}
                      placeholder="0912... یا ایمیل"
                      className="w-full px-4 py-3 rounded-lg bg-[#FCFBF8] border border-[#CFC7BA] focus:border-[#344A42] focus:outline-none text-sm text-[#292D2A] placeholder:text-[#6E6E68] text-left"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="intake-topic"
                    className="block text-xs sm:text-sm font-semibold text-[#292D2A] mb-2"
                  >
                    موضوع کلی جلسه (بدون نیاز به شرح جزئیات)
                  </label>
                  <select
                    id="intake-topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-[#FCFBF8] border border-[#CFC7BA] focus:border-[#344A42] focus:outline-none text-sm text-[#292D2A]"
                  >
                    <option value="زوج‌درمانی و بهبود گفت‌وگو">زوج‌درمانی و بهبود گفت‌وگو (EFT)</option>
                    <option value="مدیریت بحران و ترمیم خیانت">مدیریت بحران و ترمیم خیانت</option>
                    <option value="سردی عاطفی یا تصمیم‌گیری درباره طلاق">سردی عاطفی یا تصمیم‌گیری درباره طلاق</option>
                    <option value="مشاوره پیش از ازدواج">مشاوره و ارزیابی پیش از ازدواج</option>
                    <option value="الگوهای تکراری در روابط">تحلیل الگوهای تکراری در روابط</option>
                    <option value="مشاوره آنلاین بین‌المللی">مشاوره آنلاین ویژه ایرانیان خارج از کشور</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <span className="block text-xs sm:text-sm font-semibold text-[#292D2A] mb-2">
                      شیوه برگزاری جلسه
                    </span>
                    <div className="grid grid-cols-2 gap-2.5">
                      {['آنلاین تصویری', 'حضوری (تهران)'].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setFormat(opt)}
                          className={`py-2.5 px-3 rounded-lg text-xs font-semibold border transition-colors cursor-pointer ${
                            format === opt
                              ? 'bg-[#344A42] text-[#FCFBF8] border-[#344A42]'
                              : 'bg-[#FCFBF8] text-[#292D2A] border-[#CFC7BA]'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="intake-time"
                      className="block text-xs sm:text-sm font-semibold text-[#292D2A] mb-2"
                    >
                      بازه زمانی ترجیحی
                    </label>
                    <select
                      id="intake-time"
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#FCFBF8] border border-[#CFC7BA] focus:border-[#344A42] focus:outline-none text-sm text-[#292D2A]"
                    >
                      <option value="صبح (۹ تا ۱۳)">صبح (۹ تا ۱۳)</option>
                      <option value="عصر (۱۶ تا ۲۱)">عصر (۱۶ تا ۲۱)</option>
                      <option value="پنج‌شنبه‌ها یا آخر هفته">پنج‌شنبه‌ها یا آخر هفته</option>
                      <option value="متناسب با اختلاف ساعت خارج از کشور">متناسب با اختلاف ساعت خارج از کشور</option>
                    </select>
                  </div>
                </div>

                <p className="text-xs text-[#555650] leading-relaxed">
                  برای حفظ حریم خصوصی شما، هیچ اطلاعات حساس بالینی در این فرم ذخیره یا به پیام‌رسان‌ها منتقل نمی‌شود.
                </p>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-lg bg-[#344A42] hover:bg-[#273932] text-[#FCFBF8] text-sm font-semibold transition-colors cursor-pointer"
                >
                  آماده‌سازی درخواست نوبت
                </button>
              </form>
            ) : (
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#3D5E4E] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-bold text-[#292D2A] mb-1">
                      خلاصه درخواست شما آماده است
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555650] leading-relaxed">
                      برای حفظ محرمانگی، هیچ متنی به‌صورت خودکار ارسال نشد. می‌توانید از طریق تماس
                      مستقیم یا کپی‌کردن خلاصه زیر در پیام به پذیرش کلینیک اقدام کنید.
                    </p>
                  </div>
                </div>

                <div className="bg-[#FCFBF8] border border-[#E5E0D8] rounded-xl p-4 text-xs sm:text-sm text-[#292D2A] whitespace-pre-line leading-relaxed">
                  {summaryText}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#344A42] hover:bg-[#273932] text-[#FCFBF8] text-xs font-semibold transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'خلاصه کپی شد' : 'کپی متن درخواست'}</span>
                  </button>

                  <a
                    href="https://wa.me/989199087264"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#344A42] text-[#344A42] hover:bg-[#EDF2EE] text-xs font-semibold transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>گفت‌وگو با پذیرش در واتساپ</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-[#555650] hover:text-[#292D2A] mr-auto cursor-pointer"
                  >
                    ویرایش اطلاعات
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
