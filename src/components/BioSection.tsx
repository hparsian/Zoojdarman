import React from 'react';
import { ShieldCheck, GraduationCap, Award, BookOpen, MessageSquare, CheckCircle2 } from 'lucide-react';

export const BioSection: React.FC = () => {
  const credentials = [
    {
      icon: ShieldCheck,
      title: 'پروانه اشتغال تخصصی نظام روان‌شناسی',
      desc: 'شماره پروانه رسمی ۱۴۱۴۰۸۳ از سازمان نظام روان‌شناسی و مشاوره جمهوری اسلامی ایران.',
    },
    {
      icon: Award,
      title: 'مسئول فنی کلینیک تخصصی پیوند امن',
      desc: 'مدیریت فنی و نظارت بالینی بر پروتکل‌های زوج‌درمانی و خانواده در کلینیک پیوند امن تهران.',
    },
    {
      icon: GraduationCap,
      title: 'کارشناس ارشد روان‌شناسی بالینی',
      desc: 'آموزش‌های تخصصی و بالینی در رویکرد هیجان‌مدار (EFT) و طرحواره‌درمانی اختلالات شخصیت.',
    },
    {
      icon: BookOpen,
      title: 'بیش از ۱۲ سال سابقه بالینی و پژوهشی',
      desc: 'برگزاری بیش از ۱۵,۰۰۰ ساعت مشاوره تخصصی در زمینه خیانت‌های زناشویی، طلاق و مداخله در بحران.',
    },
  ];

  return (
    <section className="py-20 bg-[#FAF8F5]" id="bio">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image Box */}
          <div className="lg:col-span-5 relative max-w-md mx-auto w-full">
            <div className="bg-white p-4 rounded-3xl shadow-lg border border-[#E5E0EA] relative">
              <img
                src="/images/mahnaz-khoini.jpg"
                alt="مهناز خوینی کارشناس ارشد روانشناسی بالینی و زوج درمانگر"
                width={617}
                height={775}
                loading="lazy"
                decoding="async"
                className="w-full h-[450px] object-cover object-top rounded-2xl"
              />
              <div className="mt-4 p-3 bg-[#edf5f0] text-[#5e826b] rounded-xl text-center font-bold text-xs flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>عضو رسمی سازمان نظام روان‌شناسی و مشاوره ایران</span>
              </div>
            </div>
          </div>

          {/* Credentials and Bio Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="inline-flex items-center gap-1.5 text-xs font-black bg-[#f2eff8] text-[#6D5AA8] px-4 py-1.5 rounded-full border border-[#E5E0EA] mb-4">
              <span>رزومه و صلاحیت بالینی</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#44386B] mb-4 leading-snug">
              مهناز خوینی؛ زوج درمانگر بالینی و متخصص بازسازی روابط زناشویی
            </h2>
            <p className="text-sm sm:text-base text-[#6F6B78] leading-relaxed mb-6 text-justify">
              مهناز خوینی، کارشناس ارشد روان‌شناسی بالینی، زوج درمانگر و مسئول فنی کلینیک پیوند امن تهران، با بیش از ۱۲ سال تجربه تخصصی در مرکز زوج درمان به زوج‌ها کمک می‌کند تا از بن‌بست‌های ارتباطی، دعواهای فرسایشی، شوک خیانت و طلاق عاطفی عبور کنند. رویکرد درمانی ایشان مبتنی بر معتبرترین پروتکل‌های علمی بین‌المللی هیجان‌مدار (EFT) و طرحواره‌درمانی است که به جای توصیه‌های کلیشه‌ای یا داوری، امنیت و همدلی عمیق را در کانون رابطه احیا می‌کند.
            </p>

            {/* Credential Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              {credentials.map((cred, idx) => {
                const Icon = cred.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white p-4 rounded-2xl border border-[#E5E0EA] shadow-xs flex items-start gap-3"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#f2eff8] text-[#6D5AA8] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-black text-[#292733] mb-1">
                        {cred.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-[#6F6B78] leading-normal">
                        {cred.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Direct CTA */}
            <a
              href="https://wa.me/989199087264?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D9%87%D9%85%D8%A7%D9%87%D9%86%DA%AF%DB%8C%20%D8%AC%D9%84%D8%B3%D9%87%20%D9%85%D8%B4%D8%A7%D9%88%D8%B1%D9%87%20%D8%A8%D8%A7%20%D8%B3%D8%B1%DA%A9%D8%A7%D8%B1%20%D8%AE%D8%A7%D9%86%D9%85%20%D8%AE%D9%88%DB%8C%D9%86%DB%8C%20%D9%BE%DB%8C%D8%A7%D9%85%20%D9%85%DB%8C%E2%80%8C%D8%AF%D9%87%D9%85."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#6D5AA8] hover:bg-[#44386B] text-white text-xs sm:text-sm font-black px-6 py-3.5 rounded-full shadow-md transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>هماهنگی جلسه با زوج درمانگر مهناز خوینی در واتساپ</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
