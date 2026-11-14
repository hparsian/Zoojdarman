import React, { useState } from 'react';
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Mail,
  Send,
  CheckCircle,
  ShieldCheck,
  Building2,
} from 'lucide-react';

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
    if (!formData.fullname.trim()) {
      setErrorMessage('لطفاً نام و نام خانوادگی خود را وارد نمایید.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 8) {
      setErrorMessage('لطفاً یک شماره تماس معتبر وارد نمایید.');
      return;
    }
    if (!formData.serviceType) {
      setErrorMessage('لطفاً نوع مشاوره درخواستی را انتخاب فرمایید.');
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
      // Ignored if popups blocked
    }
    setSubmitted(true);
  };

  return (
    <section
      className="py-16 lg:py-24 bg-[#FCFAF8] border-b border-[#E8E2D8]"
      id="contact"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-[11px] font-extrabold text-[#9E7D36] block mb-2">
            نوبت‌دهی مستقیم و پذیرش محرمانه
          </span>
          <h2 className="balance-text text-2xl sm:text-4xl font-black text-[#241A35] mb-3 leading-tight">
            درخواست وقت مشاوره با مهناز خوینی
          </h2>
          <p className="text-sm sm:text-base text-[#5E5868] leading-relaxed">
            فرم زیر را تکمیل کنید تا جزئیات درخواست شما مستقیماً برای پذیرش کلینیک در واتساپ ارسال و نزدیک‌ترین زمان آزاد هماهنگ شود.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Form Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-9 rounded-2xl border border-[#E8E2D8]">
            <div className="pb-4 mb-6 border-b border-[#F0EBE2]">
              <h3 className="text-base sm:text-lg font-black text-[#241A35] mb-1">
                فرم هماهنگی جلسه ارزیابی و درمان
              </h3>
              <span className="text-xs text-[#5E5868]">
                برگزاری حضوری در کلینیک پیوند امن تهران و آنلاین برای سراسر دنیا
              </span>
            </div>

            {submitted ? (
              <div className="bg-[#F8F5EE] p-7 rounded-xl border border-[#E8E2D8] text-center my-2">
                <div className="w-11 h-11 rounded-xl bg-[#4E7A66]/15 text-[#4E7A66] flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="text-base font-black text-[#241A35] mb-2">
                  درخواست شما با موفقیت آماده شد
                </h4>
                <p className="text-xs sm:text-sm text-[#5E5868] leading-relaxed mb-5">
                  اطلاعات جلسه جهت تایید نهایی زمان آماده ارسال به واتساپ پذیرش کلینیک است.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  {lastWaLink && (
                    <a
                      href={lastWaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#241A35] hover:bg-[#3E2F5B] text-white rounded-xl text-xs font-black transition-colors"
                    >
                      <MessageSquare className="w-4 h-4 text-[#C5A059]" />
                      <span>ارسال درخواست در واتساپ</span>
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setErrorMessage(null);
                    }}
                    className="text-xs font-bold text-[#9E7D36] hover:underline cursor-pointer px-4 py-3"
                  >
                    ویرایش اطلاعات
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                {errorMessage && (
                  <div role="alert" className="p-3 bg-[#FBF1ED] border border-[#D9846A] rounded-xl text-xs font-bold text-[#9C381D]">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="cf-fullname" className="block text-xs font-black text-[#241A35] mb-1.5">
                      نام و نام خانوادگی *
                    </label>
                    <input
                      id="cf-fullname"
                      type="text"
                      required
                      value={formData.fullname}
                      onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                      placeholder="مثال: مریم کریمی"
                      className="w-full px-4 py-3 bg-[#FCFAF8] border border-[#E8E2D8] rounded-xl text-xs sm:text-sm font-medium text-[#241A35] focus:bg-white focus:border-[#C5A059] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="cf-phone" className="block text-xs font-black text-[#241A35] mb-1.5">
                      شماره تماس (واتساپ/همراه) *
                    </label>
                    <input
                      id="cf-phone"
                      type="tel"
                      required
                      dir="ltr"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                      className="w-full px-4 py-3 bg-[#FCFAF8] border border-[#E8E2D8] rounded-xl text-xs sm:text-sm font-medium text-[#241A35] focus:bg-white focus:border-[#C5A059] focus:outline-none text-right transition-colors tabular-nums"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="cf-service" className="block text-xs font-black text-[#241A35] mb-1.5">
                      موضوع مشاوره درخواستی *
                    </label>
                    <select
                      id="cf-service"
                      required
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FCFAF8] border border-[#E8E2D8] rounded-xl text-xs sm:text-sm font-medium text-[#241A35] focus:bg-white focus:border-[#C5A059] focus:outline-none cursor-pointer transition-colors"
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
                    <label htmlFor="cf-format" className="block text-xs font-black text-[#241A35] mb-1.5">
                      فرمت برگزاری جلسه
                    </label>
                    <select
                      id="cf-format"
                      value={formData.format}
                      onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FCFAF8] border border-[#E8E2D8] rounded-xl text-xs sm:text-sm font-medium text-[#241A35] focus:bg-white focus:border-[#C5A059] focus:outline-none cursor-pointer transition-colors"
                    >
                      <option value="حضوری (کلینیک تهران)">حضوری (کلینیک پیوند امن تهران)</option>
                      <option value="آنلاین (گوگل میت / واتساپ)">آنلاین (گوگل میت / واتساپ تصویری)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="cf-message" className="block text-xs font-black text-[#241A35] mb-1.5">
                    شرح کوتاه چالش فعلی (اختیاری)
                  </label>
                  <textarea
                    id="cf-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="به‌صورت خلاصه بفرمایید مهم‌ترین دغدغه شما در رابطه چیست..."
                    className="w-full px-4 py-3 bg-[#FCFAF8] border border-[#E8E2D8] rounded-xl text-xs sm:text-sm font-medium text-[#241A35] focus:bg-white focus:border-[#C5A059] focus:outline-none resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 mt-1 bg-[#241A35] hover:bg-[#3E2F5B] text-white rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-2.5 border border-[#C5A059]/35 transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#C5A059]" />
                  <span>ثبت اطلاعات و هماهنگی نوبت در واتساپ</span>
                </button>

                <p className="text-[11px] text-[#5E5868] text-center mt-1 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#4E7A66] shrink-0" />
                  <span>تمامی اطلاعات شما تحت منشور محرمانگی سازمان نظام روان‌شناسی حفظ می‌شود.</span>
                </p>
              </form>
            )}
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-[#E8E2D8]">
            <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-[#F0EBE2]">
              <Building2 className="w-5 h-5 text-[#9E7D36]" />
              <h3 className="text-base font-black text-[#241A35]">
                اطلاعات تماس مستقیم کلینیک
              </h3>
            </div>

            <div className="flex flex-col divide-y divide-[#F0EBE2] text-xs sm:text-sm">
              <a
                href="tel:09199087264"
                className="flex items-center gap-3.5 py-3.5 hover:text-[#3E2F5B] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#9E7D36] shrink-0" />
                <div>
                  <span className="block text-[11px] text-[#5E5868] font-bold">همراه نوبت‌دهی و واتساپ</span>
                  <span className="font-black text-sm text-[#241A35] tabular-nums" dir="ltr">
                    ۰۹۱۹ ۹۰۸ ۷۲۶۴
                  </span>
                </div>
              </a>

              <a
                href="tel:02144600980"
                className="flex items-center gap-3.5 py-3.5 hover:text-[#3E2F5B] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#4E7A66] shrink-0" />
                <div>
                  <span className="block text-[11px] text-[#5E5868] font-bold">تلفن ثابت کلینیک پیوند امن</span>
                  <span className="font-black text-sm text-[#241A35] tabular-nums" dir="ltr">
                    ۰۲۱ ۴۴۶۰۰۹۸۰
                  </span>
                </div>
              </a>

              <a
                href="https://wa.me/989199087264"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 py-3.5 hover:text-[#3E2F5B] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#4E7A66] shrink-0" />
                <div>
                  <span className="block text-[11px] text-[#4E7A66] font-bold">ارتباط مستقیم در واتساپ</span>
                  <span className="font-black text-xs text-[#241A35]">پاسخگویی سریع پذیرش در ساعات کاری</span>
                </div>
              </a>

              <div className="flex items-center gap-3.5 py-3.5">
                <MapPin className="w-4 h-4 text-[#9E7D36] shrink-0" />
                <div>
                  <span className="block text-[11px] text-[#5E5868] font-bold">نشانی کلینیک حضوری</span>
                  <span className="font-bold text-xs text-[#241A35]">تهران، پونک (منطقه ۲)</span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 py-3.5">
                <Clock className="w-4 h-4 text-[#5E5868] shrink-0" />
                <div>
                  <span className="block text-[11px] text-[#5E5868] font-bold">ساعات پاسخگویی</span>
                  <span className="font-bold text-xs text-[#241A35] tabular-nums">شنبه تا پنج‌شنبه · ۹:۰۰ الی ۲۱:۰۰</span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 pt-3.5">
                <Mail className="w-4 h-4 text-[#5E5868] shrink-0" />
                <div>
                  <span className="block text-[11px] text-[#5E5868] font-bold">مکاتبات علمی و پژوهشی</span>
                  <span className="font-bold text-xs font-mono text-[#241A35]" dir="ltr">Khoini.1988@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
