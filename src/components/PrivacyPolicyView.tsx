import React, { useEffect } from 'react';
import { Lock } from 'lucide-react';
import { InnerPageTopBar } from './InnerPageTopBar';
import { StandaloneSeoGuide } from './StandaloneSeoGuide';

interface PrivacyPolicyViewProps {
  onBack: () => void;
  onNavigateContact?: () => void;
}

export const PrivacyPolicyView: React.FC<PrivacyPolicyViewProps> = ({
  onBack,
  onNavigateContact,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-[#F4F1EC] min-h-screen pb-24 text-[#292D2A]">
      <InnerPageTopBar
        onBack={onBack}
        backLabel="صفحه اصلی"
        onNavigateContact={onNavigateContact}
        maxWidthClass="max-w-3xl"
      />

      <div className="container-custom max-w-3xl pt-8 sm:pt-12">
        <p className="text-xs font-semibold text-[#3D5E4E] mb-2">
          خط‌مشی اخلاقی و حفاظت از داده‌ها
        </p>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#292D2A] mb-2">
          حریم خصوصی و محرمانگی بالینی
        </h1>
        <p className="text-xs text-[#6B6D67] mb-8 pb-4 border-b border-[#E5E0D8]">
          مرکز تخصصی زوج‌درمانی مهناز خوینی · zoojdarman.ir
        </p>

        <article className="bg-[#FCFBF8] rounded-2xl p-6 sm:p-10 border border-[#E5E0D8] text-xs sm:text-sm text-[#292D2A] leading-[2] flex flex-col gap-6 text-justify">
          <p>
            در وب‌سایت رسمی مرکز زوج‌درمانی مهناز خوینی (zoojdarman.ir)، حفظ حریم خصوصی مراجعان یکی از اصول بنیادین است.
            در این صفحه توضیح داده می‌شود داده‌های ورودی چگونه مدیریت می‌شوند و محرمانگی جلسات مطابق منشور اخلاقی
            سازمان نظام روان‌شناسی و مشاوره ایران چگونه حفظ می‌گردد.
          </p>

          <div className="bg-[#EDF2EE] p-5 rounded-xl border border-[#D3E0D7] flex items-start gap-3">
            <Lock className="w-5 h-5 text-[#344A42] shrink-0 mt-0.5" />
            <p className="text-xs font-semibold text-[#292D2A] leading-relaxed">
              تماس، ارسال پیام یا استفاده از فرم هماهنگی نوبت صرفاً برای تعیین وقت ارزیابی اولیه است و تا پیش از تشکیل پرونده بالینی در کلینیک، رابطه‌ی درمانی رسمی شکل نگرفته است.
            </p>
          </div>

          <h2 className="text-base sm:text-lg font-extrabold text-[#292D2A]">چه اطلاعاتی در سایت دریافت می‌شود؟</h2>
          <p className="text-[#555650]">
            فرم هماهنگی نوبت به‌گونه‌ای طراحی شده که هیچ اطلاعات حساس عاطفی، شرح مشکل زناشویی یا پاسخ پرسشنامه‌های خودسنجی
            را روی سرورهای وب‌سایت ذخیره نکند. نام اختیاری، نوع جلسه و شماره تماس صرفاً در مرورگر شما به شکل یک خلاصه
            کپی‌شدنی برای هماهنگی پذیرش آماده می‌شود و پاسخ‌های خودسنجی‌ها فقط به‌صورت محلی در مرورگر شما پردازش می‌گردند.
          </p>

          <h2 className="text-base sm:text-lg font-extrabold text-[#292D2A]">محرمانگی حرفه‌ای جلسات مشاوره</h2>
          <p className="text-[#555650]">
            محتوای جلسات مشاوره و زوج‌درمانی (اعم از حضوری در کلینیک تهران یا جلسات آنلاین تصویری)، تحت منشور اخلاق حرفه‌ای
            سازمان نظام روان‌شناسی و مشاوره ایران محرمانه می‌ماند و جلسات آنلاین ضبط نمی‌شوند. درمانگر اطلاعات فردی یا خانوادگی
            مراجعان را بدون رضایت صریح آن‌ها در اختیار اشخاص ثالث قرار نمی‌دهد (به استثنای موارد الزامی قانونی مربوط به خطر جانی فوری).
          </p>

          <h2 className="text-base sm:text-lg font-extrabold text-[#292D2A]">داده‌های آماری و کوکی‌ها</h2>
          <p className="text-[#555650]">
            وب‌سایت برای بهبود سرعت بارگذاری و تجربه کاربری از داده‌های فنی استاندارد و تجمعی استفاده می‌کند که هیچ پیوندی با هویت شخصی مراجعان ندارد.
          </p>

          <h2 className="text-base sm:text-lg font-extrabold text-[#292D2A]">عدم اشتراک‌گذاری با اشخاص ثالث</h2>
          <p className="text-[#555650]">
            شماره تماس و مشخصات ارتباطی شما تحت هیچ شرایطی به نهادهای تبلیغاتی، بازاریابی یا اشخاص ثالث منتقل نمی‌شود.
          </p>

          <h2 className="text-base sm:text-lg font-extrabold text-[#292D2A]">حقوق مراجعان</h2>
          <ul className="flex flex-col gap-2 list-disc list-inside text-[#555650]">
            <li>حق درخواست حذف سوابق پیام‌های هماهنگی پس از انصراف از نوبت</li>
            <li>حق توقف یا تغییر برنامه جلسات در هر مرحله</li>
            <li>حق پرسش مستقیم درباره اصول رازداری بالینی در همان جلسه اول</li>
          </ul>

          <div className="pt-6 border-t border-[#E5E0D8]">
            <h3 className="text-sm font-bold text-[#292D2A] mb-2">اطلاعات تماس کلینیک:</h3>
            <p className="text-xs text-[#555650]">
              تلفن هماهنگی: ۰۹۱۹۹۰۸۷۲۶۴ · تلفن ثابت: ۰۲۱۴۴۶۰۰۹۸۰ · ایمیل: Khoini.1988@gmail.com · تهران، پونک (منطقه ۲)
            </p>
          </div>
        </article>

        <StandaloneSeoGuide routeKey="privacy" maxWidthClass="max-w-full" />
      </div>
    </div>
  );
};
