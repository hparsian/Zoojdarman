import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Clock, Mail, Send, CheckCircle, ShieldCheck, Sparkles, Building2 } from 'lucide-react';

export const ConsultationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    serviceType: '',
    format: 'حضوری (کلینیک تهران)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [lastWaLink, setLastWaLink] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.serviceType) {
      setErrorMessage('لطفاً نوع مشاوره را انتخاب فرمایید.');
      return;
    }
    setErrorMessage(null);

    let text = 'سلام، درخواست رزرو نوبت مشاوره دارم.\n';
    text += `نام و نام خانوادگی: ${formData.fullname}\n`;
    text += `شماره تماس: ${formData.phone}\n`;
    text += `نوع مشاوره: ${formData.serviceType}\n`;
    text += `فرمت جلسه: ${formData.format}\n`;
    if (formData.message) {
      text += `توضیحات: ${formData.message}\n`;
    }

    const waLink = `https://wa.me/989199087264?text=${encodeURIComponent(text)}`;
    setLastWaLink(waLink);
    try {
      window.open(waLink, '_blank');
    } catch {
      // Ignored if popups blocked in iframe
    }
    setSubmitted(true);
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#FAF8F5] via-[#F4EFEA] to-[#FAF8F5] overflow-hidden" id="contact">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#A67C2E] uppercase mb-3">
            <span className="w-6 h-px bg-[#C5A059]" />
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>نوبت‌دهی و پذیرش اختصاصی</span>
            <span className="w-6 h-px bg-[#C5A059]" />
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#2A1E35] mb-4 leading-tight">
            درخواست وقت مشاوره با زوج درمانگر
          </h2>

          <p className="text-sm sm:text-base text-[#6F6B78] leading-relaxed">
            اطلاعات خود را ثبت کنید تا در سریع‌ترین زمان ممکن برای هماهنگی جلسه در واتساپ پذیرش کلینیک راهنمایی شوید.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Form Column */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-2xl border border-[#E8DFD5] shadow-xl">
            <div className="flex items-center justify-between pb-5 mb-6 border-b border-[#F0EAE1]">
              <div>
                <h3 className="text-base sm:text-lg font-black text-[#2A1E35]">
                  فرم رزرو جلسه ارزیابی و درمان
                </h3>
                <span className="text-xs text-[#7A7382]">جلسات حضوری در تهران و آنلاین در سراسر دنیا</span>
              </div>
              <span className="text-[11px] font-mono text-[#A67C2E] bg-[#FAF8F5] border border-[#E8DFD5] px-2.5 py-1 rounded-md">
                SECURE
              </span>
            </div>

            {submitted ? (
              <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-[#E8DFD5] text-center my-4">
                <div className="w-12 h-12 rounded-xl bg-[#3E6B56]/10 text-[#3E6B56] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="text-base font-black text-[#2A1E35] mb-2">درخواست شما با موفقیت آماده شد</h4>
                <p className="text-xs sm:text-sm text-[#6F6B78] leading-relaxed mb-6">
                  اطلاعات جلسه آماده ارسال به کارشناس پذیرش در واتساپ است. نوبت شما ظرف چند ساعت بررسی و تأیید می‌گردد.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  {lastWaLink && (
                    <a
                      href={lastWaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#2A1E35] hover:bg-[#1E1527] text-white rounded-xl text-xs font-bold border border-[#C5A059]/40 shadow-md transition-all"
                    >
                      <MessageSquare className="w-4 h-4 text-[#C5A059]" />
                      <span>اتصال مستقیم به واتساپ نوبت‌دهی</span>
                    </a>
                  )}
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setErrorMessage(null);
                    }}
                    className="text-xs font-bold text-[#A67C2E] hover:underline cursor-pointer px-4 py-3"
                  >
                    ویرایش اطلاعات
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {errorMessage && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs font-bold text-red-600">
                    {errorMessage}
                  </div>
                )}
                <div>
                  <label className="block text-xs font-black text-[#2A1E35] mb-1.5">
                    نام و نام خانوادگی مراجع *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullname}
                    onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                    placeholder="مثال: مریم کریمی"
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E8DFD5] rounded-xl text-xs sm:text-sm font-medium text-[#2A1E35] focus:bg-white focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/30 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-[#2A1E35] mb-1.5">
                    شماره تماس همراه (جهت هماهنگی پیامکی/واتساپ) *
                  </label>
                  <input
                    type="tel"
                    required
                    dir="ltr"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E8DFD5] rounded-xl text-xs sm:text-sm font-medium text-[#2A1E35] focus:bg-white focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/30 focus:outline-none text-right transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black text-[#2A1E35] mb-1.5">
                      نوع مشاوره درخواستی *
                    </label>
                    <select
                      required
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E8DFD5] rounded-xl text-xs sm:text-sm font-medium text-[#2A1E35] focus:bg-white focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/30 focus:outline-none cursor-pointer transition-all"
                    >
                      <option value="">-- انتخاب فرمایید --</option>
                      <option value="زوج‌درمانی و حل تعارض">زوج‌درمانی و حل تعارضات زناشویی</option>
                      <option value="مشاوره تخصصی خیانت و بازسازی اعتماد">مشاوره درمان خیانت و بازسازی اعتماد</option>
                      <option value="مشاوره طلاق و تصمیم‌گیری آگاهانه">مشاوره طلاق و تصمیم‌گیری آگاهانه</option>
                      <option value="مشاوره آنلاین خارج از کشور">مشاوره آنلاین (ایرانیان خارج از کشور)</option>
                      <option value="مشاوره پیش از ازدواج">مشاوره پیش از ازدواج و ارزیابی تشخیصی</option>
                      <option value="طرحواره‌درمانی روابط عاطفی">طرحواره‌درمانی فردی و روابط عاطفی</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-black text-[#2A1E35] mb-1.5">
                      فرمت برگزاری جلسه
                    </label>
                    <select
                      value={formData.format}
                      onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E8DFD5] rounded-xl text-xs sm:text-sm font-medium text-[#2A1E35] focus:bg-white focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/30 focus:outline-none cursor-pointer transition-all"
                    >
                      <option value="حضوری (کلینیک تهران)">حضوری (کلینیک پیوند امن تهران)</option>
                      <option value="آنلاین (گوگل میت / واتساپ)">آنلاین (گوگل میت / واتساپ با کیفیت HD)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black text-[#2A1E35] mb-1.5">
                    توضیحات کوتاه درباره دغدغه اصلی (اختیاری)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="به صورت خلاصه بفرمایید مهم‌ترین چالش فعلی رابطه‌تان چیست..."
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E8DFD5] rounded-xl text-xs sm:text-sm font-medium text-[#2A1E35] focus:bg-white focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/30 focus:outline-none resize-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 mt-2 bg-[#2A1E35] hover:bg-[#1E1527] text-white rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-2.5 border border-[#C5A059]/40 shadow-xl hover:shadow-2xl transition-all cursor-pointer group"
                >
                  <Send className="w-4 h-4 text-[#C5A059] group-hover:-translate-x-0.5 transition-transform" />
                  <span>ثبت اطلاعات و هماهنگی جلسه در واتساپ</span>
                </button>

                <p className="text-[11px] text-[#7A7382] text-center mt-2 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#3E6B56]" />
                  <span>تمام اطلاعات شما تحت رعایت کامل منشور اخلاقی و محرمانگی سازمان نظام روان‌شناسی حفظ می‌شود.</span>
                </p>
              </form>
            )}
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-white p-7 sm:p-8 rounded-2xl border border-[#E8DFD5] shadow-lg">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#F0EAE1]">
                <Building2 className="w-5 h-5 text-[#C5A059]" />
                <h3 className="text-base font-black text-[#2A1E35]">
                  اطلاعات تماس مستقیم و کلینیک
                </h3>
              </div>

              <div className="flex flex-col gap-3.5 text-xs sm:text-sm">
                <a
                  href="tel:09199087264"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#FAF8F5] hover:bg-[#F4EFEA] text-[#2A1E35] border border-[#E8DFD5] transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-white text-[#2A1E35] border border-[#E8DFD5] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#C5A059]" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-[#7A7382] font-bold">همراه نوبت‌دهی (تماس / پیامک)</span>
                    <span className="font-black text-sm tracking-wide text-[#2A1E35]" dir="ltr">
                      ۰۹۱۹ ۹۰۸ ۷۲۶۴
                    </span>
                  </div>
                </a>

                <a
                  href="tel:02144600980"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#FAF8F5] hover:bg-[#F4EFEA] text-[#2A1E35] border border-[#E8DFD5] transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-white text-[#2A1E35] border border-[#E8DFD5] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#3E6B56]" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-[#7A7382] font-bold">تلفن ثابت کلینیک پیوند امن</span>
                    <span className="font-black text-sm tracking-wide text-[#2A1E35]" dir="ltr">
                      ۰۲۱ ۴۴۶۰۰۹۸۰
                    </span>
                  </div>
                </a>

                <a
                  href="https://wa.me/989199087264"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#3E6B56]/5 hover:bg-[#3E6B56]/10 text-[#2A1E35] border border-[#3E6B56]/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-white text-[#3E6B56] border border-[#3E6B56]/30 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-[#3E6B56] font-bold">واتساپ مستقیم کلینیک</span>
                    <span className="font-black text-xs text-[#2A1E35]">پاسخگویی سریع به سوالات مراجعین</span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8DFD5] text-[#2A1E35]">
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#E8DFD5] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#C5A059]" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-[#7A7382] font-bold">نشانی مراجعات حضوری</span>
                    <span className="font-bold text-xs text-[#2A1E35]">تهران، منطقه ۲ (کلینیک تخصصی پیوند امن)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8DFD5] text-[#2A1E35]">
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#E8DFD5] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-[#7A7382]" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-[#7A7382] font-bold">ساعات فعالیت کلینیک</span>
                    <span className="font-bold text-xs text-[#2A1E35]">شنبه تا پنج‌شنبه از ساعت ۹:۰۰ الی ۲۱:۰۰</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8DFD5] text-[#2A1E35]">
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#E8DFD5] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#7A7382]" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-[#7A7382] font-bold">مکاتبات علمی و پژوهشی</span>
                    <span className="font-bold text-xs font-mono" dir="ltr">Khoini.1988@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
