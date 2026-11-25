import React, { useState } from 'react';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import { CLINIC_PROFILE } from '../data/clinicProfile';
import { PARENT_CLINIC_LINKS } from '../utils/parentClinicLinks';

const ENAMAD_VERIFY_URL =
  'https://trustseal.enamad.ir/?id=643054&Code=nx981iXskBJv092Gl1DLZ7th8oSh1hI2';

const PcoiranOfficialEmblem: React.FC = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10"
    aria-hidden="true"
  >
    <circle cx="32" cy="32" r="28" fill="#EDF2EE" stroke="#344A42" strokeWidth="1.75" />
    <circle cx="32" cy="32" r="23" stroke="#9E563E" strokeOpacity="0.45" strokeWidth="1" strokeDasharray="3 2" />
    {/* Classic Psychology Psi (Ψ) stem & arms */}
    <path
      d="M32 15V48M21 21C21 28.5 25.5 33 32 33C38.5 33 43 28.5 43 21"
      stroke="#344A42"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M27.5 48H36.5" stroke="#344A42" strokeWidth="2.4" strokeLinecap="round" />
    <path d="M28.5 16.5L32 13.5L35.5 16.5" stroke="#9E563E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const FooterCredentials: React.FC = () => {
  const [enamadError, setEnamadError] = useState(false);
  const [clinicLogoError, setClinicLogoError] = useState(false);

  return (
    <section
      aria-labelledby="footer-credentials-heading"
      className="py-8 border-b border-[#FCFBF8]/15"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-5">
        <div>
          <h3
            id="footer-credentials-heading"
            className="text-sm font-bold text-[#FCFBF8] tracking-normal"
          >
            اعتبار و مجوزهای رسمی
          </h3>
          <p className="text-xs text-[#D8CBB9] mt-1 leading-relaxed">
            فعالیت تحت نظارت سازمان نظام روان‌شناسی و زیرمجموعه رسمی کلینیک پیوند امن
          </p>
        </div>
        <span className="text-xs text-[#D8CBB9] tabular-nums shrink-0">
          شماره پروانه اشتغال: {CLINIC_PROFILE.licenseNumberFa}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* 1. PCOIran Official License Badge (No external my.pcoiran.ir link in visible UI) */}
        <div className="flex items-center gap-3.5 rounded-xl bg-[#273932]/75 border border-[#FCFBF8]/15 p-3.5">
          <div className="w-14 h-14 rounded-lg bg-[#FCFBF8] flex items-center justify-center shrink-0 shadow-xs">
            <PcoiranOfficialEmblem />
          </div>
          <div className="min-w-0 text-right">
            <p className="text-xs sm:text-sm font-bold text-[#FCFBF8] leading-snug">
              سازمان نظام روان‌شناسی
            </p>
            <p className="text-[11px] sm:text-xs text-[#D8CBB9] mt-1 leading-relaxed tabular-nums">
              پروانه اشتغال تخصصی {CLINIC_PROFILE.licenseNumberFa}
            </p>
          </div>
        </div>

        {/* 2. Enamad Official Trust Seal (Verified on peyvandamn.ir) */}
        <a
          href={ENAMAD_VERIFY_URL}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="group flex items-center gap-3.5 rounded-xl bg-[#273932]/75 hover:bg-[#273932] border border-[#FCFBF8]/15 hover:border-[#8FAE9B]/50 p-3.5 transition-colors"
        >
          <div className="w-14 h-14 rounded-lg bg-[#FCFBF8] p-1.5 flex items-center justify-center shrink-0 shadow-xs">
            {!enamadError ? (
              <img
                src="/images/trust/enamad-seal.png"
                alt="نماد اعتماد الکترونیکی (اینماد) کلینیک پیوند امن"
                width={44}
                height={48}
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={() => setEnamadError(true)}
                className="w-full h-full object-contain"
              />
            ) : (
              <ShieldCheck className="w-8 h-8 text-[#344A42]" aria-hidden="true" />
            )}
          </div>
          <div className="min-w-0 flex-1 text-right">
            <div className="flex items-center gap-1.5">
              <p className="text-xs sm:text-sm font-bold text-[#FCFBF8] group-hover:text-white leading-snug">
                نماد اعتماد الکترونیکی
              </p>
              <ExternalLink className="w-3 h-3 text-[#8FAE9B] shrink-0" aria-hidden="true" />
            </div>
            <p className="text-[11px] sm:text-xs text-[#D8CBB9] mt-1 leading-relaxed">
              تاییدیه رسمی اینماد کلینیک پیوند امن
            </p>
          </div>
        </a>

        {/* 3. Peyvand Amn Parent Clinic Logo (from peyvandamn.ir) */}
        <a
          href={PARENT_CLINIC_LINKS.home}
          target="_blank"
          rel="noopener"
          className="group flex items-center gap-3.5 rounded-xl bg-[#273932]/75 hover:bg-[#273932] border border-[#FCFBF8]/15 hover:border-[#8FAE9B]/50 p-3.5 transition-colors"
        >
          <div className="w-14 h-14 rounded-lg bg-[#FCFBF8] p-1.5 flex items-center justify-center shrink-0 shadow-xs">
            {!clinicLogoError ? (
              <img
                src="/images/trust/peyvandamn-logo.webp"
                alt="لوگوی رسمی کلینیک روان‌شناسی پیوند امن (peyvandamn.ir)"
                width={44}
                height={44}
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={() => setClinicLogoError(true)}
                className="w-full h-full object-contain"
              />
            ) : (
              <ShieldCheck className="w-8 h-8 text-[#344A42]" aria-hidden="true" />
            )}
          </div>
          <div className="min-w-0 flex-1 text-right">
            <div className="flex items-center gap-1.5">
              <p className="text-xs sm:text-sm font-bold text-[#FCFBF8] group-hover:text-white leading-snug">
                کلینیک روان‌شناسی پیوند امن
              </p>
              <ExternalLink className="w-3 h-3 text-[#8FAE9B] shrink-0" aria-hidden="true" />
            </div>
            <p className="text-[11px] sm:text-xs text-[#D8CBB9] mt-1 leading-relaxed" dir="ltr">
              peyvandamn.ir
            </p>
          </div>
        </a>
      </div>
    </section>
  );
};
