import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Clock, Mail, Send, CheckCircle, ShieldCheck } from 'lucide-react';

export const ConsultationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    serviceType: '',
    format: 'حضوری (تهران)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.serviceType) {
      alert('لطفاً نوع مشاوره را انتخاب فرمایید.');
      return;
    }

    let text = 'سلام، درخواست رزرو نوبت مشاوره دارم.\n';
    text += `نام و نام خانوادگی: ${formData.fullname}\n`;
    text += `شماره تماس: ${formData.phone}\n`;
    text += `نوع مشاوره: ${formData.serviceType}\n`;
    text += `فرمت جلسه: ${formData.format}\n`;
    if (formData.message) {
      text += `توضیحات: ${formData.message}\n`;
    }

    const waLink = `https://wa.me/989199087264?text=${encodeURIComponent(text)}`;
    window.open(waLink, '_blank');
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-[#F2EFF8]" id="contact">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs font-black bg-[#edf5f0] text-[#5e826b] px-4 py-1.5 rounded-full border border-[#8FAF9B]/30 mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>نوبت‌دهی و پذیرش مراجعان</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#44386B] mb-3">
            درخواست وقت مشاوره و ارزیابی اولیه
          </h2>
          <p className="text-sm sm:text-base text-[#6F6B78] leading-relaxed">
            فرم زیر را تکمیل نمایید تا مستقیماً برای هماهنگی جلسه در پیام‌رسان واتساپ هدایت شوید.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-[#E5E0EA] shadow-xs">
            <h3 className="text-lg font-black text-[#44386B] mb-6">
              مشخصات و زمان پیشنهادی
            </h3>

            {submitted ? (
              <div className="bg-[#edf5f0] p-6 rounded-2xl border border-[#d8e8dd] text-center my-4">
                <CheckCircle className="w-10 h-10 text-[#5e826b] mx-auto mb-3" />
                <h4 className="text-base font-black text-[#292733] mb-2">درخواست شما آماده ارسال است</h4>
                <p className="text-xs sm:text-sm text-[#6F6B78] leading-relaxed mb-4">
                  پیام در واتساپ کلینیک باز شد. همکاران پذیرش در اسرع وقت نوبت شما را هماهنگ خواهند کرد.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-[#6D5AA8] underline cursor-pointer"
                >
                  تکمیل مجدد فرم
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs font-extrabold text-[#292733] mb-1.5">
                    نام و نام خانوادگی *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullname}
                    onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                    placeholder="مثال: مریم کریمی"
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E5E0EA] rounded-xl text-xs sm:text-sm font-medium text-[#292733] focus:bg-white focus:border-[#6D5AA8] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-[#292733] mb-1.5">
                    شماره تماس همراه *
                  </label>
                  <input
                    type="tel"
                    required
                    dir="ltr"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E5E0EA] rounded-xl text-xs sm:text-sm font-medium text-[#292733] focus:bg-white focus:border-[#6D5AA8] focus:outline-none text-right"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold text-[#292733] mb-1.5">
                      نوع مشاوره درخواستی *
                    </label>
                    <select
                      required
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E5E0EA] rounded-xl text-xs sm:text-sm font-medium text-[#292733] focus:bg-white focus:border-[#6D5AA8] focus:outline-none cursor-pointer"
                    >
                      <option value="">-- انتخاب کنید --</option>
                      <option value="زوج‌درمانی و حل تعارض">زوج‌درمانی و حل تعارض</option>
                      <option value="مشاوره تخصصی خیانت و بازسازی اعتماد">مشاوره درمان خیانت</option>
                      <option value="مشاوره طلاق و تصمیم‌گیری آگاهانه">مشاوره طلاق و جدایی</option>
                      <option value="مشاوره آنلاین (خارج از کشور/شهرستان)">مشاوره آنلاین بین‌المللی</option>
                      <option value="مشاوره پیش از ازدواج">مشاوره پیش از ازدواج</option>
                      <option value="طرحواره‌درمانی فردی و روابط">طرحواره‌درمانی روابط</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-[#292733] mb-1.5">
                      فرمت برگزاری جلسه
                    </label>
                    <select
                      value={formData.format}
                      onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E5E0EA] rounded-xl text-xs sm:text-sm font-medium text-[#292733] focus:bg-white focus:border-[#6D5AA8] focus:outline-none cursor-pointer"
                    >
                      <option value="حضوری (کلینیک تهران)">حضوری (کلینیک تهران)</option>
                      <option value="آنلاین (گوگل میت / واتساپ)">آنلاین (گوگل میت / واتساپ)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-[#292733] mb-1.5">
                    توضیحات کوتاه درباره موضوع (اختیاری)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="در چند جمله بفرمایید چالش اصلی رابطه‌تان چیست..."
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E5E0EA] rounded-xl text-xs sm:text-sm font-medium text-[#292733] focus:bg-white focus:border-[#6D5AA8] focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 mt-2 bg-[#6D5AA8] hover:bg-[#44386B] text-white rounded-full font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>ارسال مستقیم اطلاعات در واتساپ نوبت‌دهی</span>
                </button>

                <p className="text-[11px] text-[#8e8a96] text-center mt-2 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#5e826b]" />
                  <span>اطلاعات شما با حفظ ۱۰۰٪ محرمانگی درمانی منتقل می‌شود.</span>
                </p>
              </form>
            )}
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E5E0EA] shadow-xs">
              <h3 className="text-base font-black text-[#44386B] mb-5">
                ارتباط مستقیم با کلینیک
              </h3>

              <div className="flex flex-col gap-4 text-xs sm:text-sm">
                <a
                  href="tel:09199087264"
                  className="flex items-center gap-3 p-3 rounded-2xl bg-[#FAF8F5] hover:bg-[#f2eff8] text-[#292733] transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-white text-[#6D5AA8] flex items-center justify-center shadow-xs shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-[#6F6B78] font-bold">تماس تلفنی مستقیم</span>
                    <span className="font-black text-sm tracking-wide text-[#44386B]" dir="ltr">
                      ۰۹۱۹ ۹۰۸ ۷۲۶۴
                    </span>
                  </div>
                </a>

                <a
                  href="https://wa.me/989199087264"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-2xl bg-[#edf5f0] hover:bg-[#d8e8dd] text-[#292733] transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-white text-[#5e826b] flex items-center justify-center shadow-xs shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-[#5e826b] font-bold">پشتیبانی واتساپ</span>
                    <span className="font-black text-xs">ارسال پیام و استعلام نوبت</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#FAF8F5] text-[#292733]">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#E8A58D] flex items-center justify-center shadow-xs shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-[#6F6B78] font-bold">محل جلسات حضوری</span>
                    <span className="font-bold text-xs">تهران، منطقه ۲ (کلینیک تخصصی پیوند امن)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#FAF8F5] text-[#292733]">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#6D5AA8] flex items-center justify-center shadow-xs shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-[#6F6B78] font-bold">ساعات پاسخگویی</span>
                    <span className="font-bold text-xs">شنبه تا پنج‌شنبه: ۹:۰۰ الی ۲۱:۰۰</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#FAF8F5] text-[#292733]">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#6F6B78] flex items-center justify-center shadow-xs shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-[#6F6B78] font-bold">ایمیل مکاتبات</span>
                    <span className="font-bold text-xs" dir="ltr">Khoini.1988@gmail.com</span>
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
