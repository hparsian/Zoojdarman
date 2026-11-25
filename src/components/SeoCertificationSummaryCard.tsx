import React from 'react';
import { ShieldCheck, Building2, UserCheck, MapPin } from 'lucide-react';

export interface SeoCertificationSummaryCardProps {
  className?: string;
  compact?: boolean;
}

export const SeoCertificationSummaryCard: React.FC<SeoCertificationSummaryCardProps> = ({
  className = '',
}) => {
  return (
    <div
      className={`rounded-2xl bg-[#FCFBF8] border border-[#E5E0D8] p-6 sm:p-8 ${className}`}
    >
      <div className="flex items-center gap-3 pb-5 mb-6 border-b border-[#E5E0D8]">
        <div className="w-10 h-10 rounded-xl bg-[#EDF2EE] flex items-center justify-center shrink-0">
          <ShieldCheck className="w-5 h-5 text-[#344A42]" />
        </div>
        <div>
          <span className="text-xs font-semibold text-[#3D5E4E] block">
            اطلاعات رسمی قابل استعلام · سازمان نظام روان‌شناسی
          </span>
          <h3 className="text-lg font-extrabold text-[#292D2A]">
            اعتبار و مجوزهای رسمی فعالیت بالینی
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="p-5 rounded-xl bg-[#F4F1EC] border border-[#E5E0D8] space-y-2">
          <UserCheck className="w-5 h-5 text-[#344A42]" />
          <div className="text-xs font-semibold text-[#3D5E4E]">سازمان نظام روان‌شناسی</div>
          <div className="text-base font-bold text-[#292D2A]">پروانه اشتغال ۱۴۱۴۰۸۳</div>
          <p className="text-xs text-[#555650] leading-relaxed">
            پروانه رسمی اشتغال تخصصی روان‌شناسی بالینی به نام مهناز خوینی، قابل استعلام از pcoiran.ir
          </p>
        </div>

        <div className="p-5 rounded-xl bg-[#F4F1EC] border border-[#E5E0D8] space-y-2">
          <Building2 className="w-5 h-5 text-[#344A42]" />
          <div className="text-xs font-semibold text-[#3D5E4E]">مرکز درمانی مجاز</div>
          <div className="text-base font-bold text-[#292D2A]">مسئول فنی کلینیک پیوند امن</div>
          <p className="text-xs text-[#555650] leading-relaxed">
            پایش بالینی جلسات با رویکرد هیجان‌مدار (EFT) و صدور فاکتور رسمی جهت ارائه به بیمه تکمیلی
          </p>
        </div>

        <div className="p-5 rounded-xl bg-[#F4F1EC] border border-[#E5E0D8] space-y-2">
          <MapPin className="w-5 h-5 text-[#344A42]" />
          <div className="text-xs font-semibold text-[#3D5E4E]">نحوه دسترسی</div>
          <div className="text-base font-bold text-[#292D2A]">حضوری تهران و آنلاین</div>
          <p className="text-xs text-[#555650] leading-relaxed">
            تهران، پونک (منطقه ۲)، کلینیک پیوند امن و جلسات آنلاین سراسر جهان
          </p>
        </div>
      </div>
    </div>
  );
};
