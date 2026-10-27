import React, { useEffect } from 'react';
import { ArrowRight, ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';

interface PrivacyPolicyViewProps {
  onBack: () => void;
}

export const PrivacyPolicyView: React.FC<PrivacyPolicyViewProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-24">
      {/* Top Bar */}
      <div className="bg-white border-b border-[#E5E0EA] sticky top-0 z-40">
        <div className="container-custom h-16 flex items-center justify-between">
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); onBack(); }}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-[#6D5AA8] hover:text-[#44386B] cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
            <span>بازگشت به صفحه اصلی</span>
          </a>

          <div className="flex items-center text-lg font-black text-[#44386B]" dir="ltr">
            <span>Z</span>
            <svg width="14" height="14" viewBox="0 0 32 29" className="inline-block mx-0.5 fill-[#8FAF9B]">
              <path d="M16 29 C16 29 0 18.5 0 8.8 C0 3.5 4 0 8.6 0 C11.8 0 14.4 1.8 16 4.6 C17.6 1.8 20.2 0 23.4 0 C28 0 32 3.5 32 8.8 C32 18.5 16 29 16 29 Z" />
            </svg>
            <svg width="14" height="14" viewBox="0 0 32 29" className="inline-block mx-0.5 fill-[#E8A58D]">
              <path d="M16 29 C16 29 0 18.5 0 8.8 C0 3.5 4 0 8.6 0 C11.8 0 14.4 1.8 16 4.6 C17.6 1.8 20.2 0 23.4 0 C28 0 32 3.5 32 8.8 C32 18.5 16 29 16 29 Z" />
            </svg>
            <span>jdarman.ir</span>
          </div>
        </div>
      </div>

      <div className="container-custom max-w-3xl pt-8 sm:pt-12">
        <span className="inline-block bg-[#edf5f0] text-[#5e826b] text-xs font-black px-3.5 py-1.5 rounded-full mb-4 border border-[#8FAF9B]/30">
          خط‌مشی حقوقی و امنیت اطلاعات
        </span>

        <h1 className="text-2xl sm:text-3xl font-black text-[#44386B] mb-2">
          حریم خصوصی و محرمانگی بالینی
        </h1>
        <p className="text-xs text-[#8e8a96] mb-8 pb-4 border-b border-[#E5E0EA]">
          آخرین به‌روزرسانی: سال ۱۴۰۵ • zoojdarman.ir
        </p>

        <article className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E5E0EA] shadow-xs text-xs sm:text-sm text-[#292733] leading-[2.1] flex flex-col gap-6 text-justify">
          <p>
            در وب‌سایت رسمی مرکز زوج‌درمانی مهناز خوینی (zoojdarman.ir)، به حریم خصوصی شما احترام کامل می‌گذاریم. این صفحه توضیح می‌دهد چه اطلاعاتی از طریق وب‌سایت تبادل می‌شود، چگونه مدیریت می‌گردد و چگونه محرمانگی جلسات درمانی با بالاترین استانداردهای نظام روان‌شناسی حفاظت می‌شود.
          </p>

          <div className="bg-[#f2eff8] p-5 rounded-2xl border border-[#6D5AA8]/20 flex items-start gap-3">
            <Lock className="w-5 h-5 text-[#6D5AA8] shrink-0 mt-0.5" />
            <p className="text-xs font-bold text-[#44386B] leading-relaxed">
              ارسال پیام از طریق فرم یا پیام‌رسان واتساپ صرفاً به عنوان هماهنگی وقت ارزیابی اولیه تلقی می‌شود و قبل از تشکیل پرونده رسمی در کلینیک، رابطه‌ی درمانی رسمی آغاز نشده است.
            </p>
          </div>

          <h2 className="text-base sm:text-lg font-black text-[#44386B]">چه اطلاعاتی جمع‌آوری می‌شود؟</h2>
          <p>
            وقتی از فرم «درخواست مشاوره و نوبت‌دهی» در وب‌سایت استفاده می‌کنید، اطلاعاتی که خودتان وارد می‌کنید (شامل نام و نام خانوادگی، شماره تماس، نوع مشاوره انتخابی و توضیحات اختیاری) مستقیماً برای ارسال در قالب پیام واتساپ فرمت می‌شود. هیچ‌یک از این مشخصات هویتی بر روی سرورهای متفرقه یا پایگاه داده‌های عمومی ذخیره نمی‌شود.
          </p>

          <h2 className="text-base sm:text-lg font-black text-[#44386B]">محرمانگی مطلق جلسات مشاوره</h2>
          <p>
            محتوای کلیه جلسات مشاوره و زوج‌درمانی (اعم از حضوری در کلینیک تهران یا جلسات آنلاین تصویری)، تحت منشور اخلاق حرفه‌ای سازمان نظام روان‌شناسی و مشاوره ایران کاملاً محرمانه است. درمانگر تحت هیچ شرایطی اطلاعات فردی یا خانوادگی مراجعان را بدون رضایت کتبی صریح آن‌ها در اختیار شخص ثالث یا اعضای خانواده قرار نخواهد داد.
          </p>

          <h2 className="text-base sm:text-lg font-black text-[#44386B]">کوکی‌ها و داده‌های آماری وب‌سایت</h2>
          <p>
            این وب‌سایت صرفاً از ابزارهای آماری متعارف جهت سنجش میزان بازدید صفحات و بهینه‌سازی سرعت بارگذاری استفاده می‌کند. این آمار به صورت ناشناس و تجمعی ثبت شده و هیچ ارتباطی با هویت شخصی مراجعان ندارد.
          </p>

          <h2 className="text-base sm:text-lg font-black text-[#44386B]">عدم اشتراک‌گذاری با اشخاص ثالث</h2>
          <p>
            شماره تماس و مشخصات ارتباطی شما تحت هیچ شرایطی به شرکت‌های تبلیغاتی، بازاریابی تلفنی یا هر نهاد ثالثی فروخته، اجاره یا منتقل نمی‌شود.
          </p>

          <h2 className="text-base sm:text-lg font-black text-[#44386B]">حقوق مراجعان</h2>
          <ul className="flex flex-col gap-2 list-disc list-inside">
            <li>حق درخواست حذف سوابق پیام‌های ارسالی پس از لغو هماهنگی نوبت</li>
            <li>حق انصراف از فرآیند هماهنگی در هر لحظه بدون نیاز به ارائه توضیح</li>
            <li>حق پرسش مستقیم درباره نحوه مدیریت اطلاعات بالینی در جلسه اول</li>
          </ul>

          <div className="pt-6 border-t border-[#E5E0EA]">
            <h3 className="text-sm font-black text-[#44386B] mb-2">اطلاعات تماس مدیریت کلینیک:</h3>
            <p className="text-xs text-[#6F6B78]">
              تلفن هماهنگی: ۰۹۱۹۹۰۸۷۲۶۴ • ایمیل: Khoini.1988@gmail.com • تهران، منطقه ۲
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};
