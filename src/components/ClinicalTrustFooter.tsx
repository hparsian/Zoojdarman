import React from 'react';
import { ShieldCheck, BookOpen, AlertCircle } from 'lucide-react';
import { CLINIC_PROFILE } from '../data/clinicProfile';

export interface ClinicalReference {
  authors: string;
  title: string;
  source: string;
}

const DEFAULT_REFERENCES: Record<'article' | 'service' | 'test', ClinicalReference[]> = {
  article: [
    {
      authors: 'Epstein, N. B., & Baucom, D. H. (2002)',
      title: 'Enhanced Cognitive-Behavioral Therapy for Couples: A Contextual Approach',
      source: 'American Psychological Association (APA)',
    },
    {
      authors: 'Dattilio, F. M. (2010)',
      title: 'Cognitive-Behavioral Therapy with Couples and Families: A Comprehensive Guide for Clinicians',
      source: 'Guilford Press',
    },
    {
      authors: 'Young, J. E., Klosko, J. S., & Weishaar, M. E. (2003)',
      title: 'Schema Therapy: A Practitioner’s Guide',
      source: 'Guilford Press',
    },
    {
      authors: 'سازمان نظام روان‌شناسی و مشاوره ایران',
      title: 'آیین‌نامه و منشور اخلاق حرفه‌ای روان‌شناسان و مشاوران',
      source: 'pcoiran.ir',
    },
  ],
  service: [
    {
      authors: 'Epstein, N. B., & Baucom, D. H. (2002)',
      title: 'Enhanced Cognitive-Behavioral Therapy for Couples (CBCT)',
      source: 'American Psychological Association (APA)',
    },
    {
      authors: 'Beck, A. T. (1988)',
      title: 'Love Is Never Enough: Resolving Relationship Problems Through Cognitive Therapy',
      source: 'Harper & Row',
    },
    {
      authors: 'Baucom, D. H., Snyder, D. K., & Gordon, K. C. (2009)',
      title: 'Helping Couples Get Past the Affair: A Clinician’s Guide',
      source: 'Guilford Press',
    },
  ],
  test: [
    {
      authors: 'Olson, D. H., Fournier, D. G., & Druckman, J. M.',
      title: 'ENRICH Marital Satisfaction Scale (EMS) — Research Adaptation',
      source: 'Journal of Family Psychology',
    },
    {
      authors: 'Hazan, C., & Shaver, P. / Brennan, Clark & Shaver',
      title: 'Adult Attachment Theory & Experiences in Close Relationships (ECR)',
      source: 'American Psychological Association (APA)',
    },
    {
      authors: 'Gottman, J. M.',
      title: 'The Four Horsemen of the Apocalypse: Predictive Communication Markers',
      source: 'The Gottman Institute',
    },
  ],
};

interface ClinicalTrustFooterProps {
  context: 'article' | 'service' | 'test';
  updatedAt?: string;
  onNavigateAbout?: () => void;
}

export const ClinicalTrustFooter: React.FC<ClinicalTrustFooterProps> = ({
  context,
  updatedAt,
  onNavigateAbout,
}) => {
  const references = DEFAULT_REFERENCES[context];

  const handleAboutClick = (e: React.MouseEvent) => {
    if (onNavigateAbout) {
      e.preventDefault();
      onNavigateAbout();
    } else {
      e.preventDefault();
      window.history.pushState({}, '', '/about');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <section
      aria-label="اعتبار علمی، منابع و اخلاق حرفه‌ای"
      className="my-10 space-y-5"
      dir="rtl"
    >
      {/* Clinical Author & Verification Attribution */}
      <div className="bg-[#FCFBF8] border border-[#E5E0D8] rounded-2xl p-6 sm:p-7">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-[#E5E0D8]">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#3D5E4E] shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm sm:text-base font-bold text-[#292D2A]">
                تدوین و بررسی علمی: {CLINIC_PROFILE.therapistName}
              </h3>
              <p className="text-xs text-[#555650] mt-1 leading-relaxed tabular-nums">
                {CLINIC_PROFILE.academicDegree} · پروانه اشتغال تخصصی سازمان نظام روان‌شناسی:{' '}
                {CLINIC_PROFILE.licenseNumberFa}
                {updatedAt ? ` · آخرین بازبینی: ${updatedAt}` : ''}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <a
              href="/about"
              onClick={handleAboutClick}
              className="px-3.5 py-2 rounded-lg bg-[#F4F1EC] hover:bg-[#ECE7DF] border border-[#E5E0D8] text-xs font-semibold text-[#344A42] transition-colors whitespace-nowrap"
            >
              سوابق و مدارک درمانگر
            </a>
          </div>
        </div>

        {/* Scientific References */}
        <div>
          <h4 className="text-xs sm:text-sm font-bold text-[#292D2A] mb-3 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#3D5E4E]" />
            <span>منابع علمی و چهارچوب‌های مرجع (References)</span>
          </h4>
          <ul className="space-y-2 text-xs text-[#555650] leading-relaxed">
            {references.map((refItem) => (
              <li
                key={refItem.title}
                className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2"
              >
                <span className="font-semibold text-[#292D2A]" dir="ltr">
                  {refItem.authors}
                </span>
                <span className="hidden sm:inline text-[#8FAE9B]">·</span>
                <span dir="auto" className="text-[#3E413D]">
                  {refItem.title}
                </span>
                <span className="text-[#6E6E68]" dir="ltr">
                  ({refItem.source})
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* YMYL Medical & Crisis Disclaimer */}
      <div className="bg-[#F4F1EC] border border-[#E5E0D8] rounded-2xl p-5 sm:p-6 flex items-start gap-3.5">
        <AlertCircle className="w-5 h-5 text-[#9E563E] shrink-0 mt-0.5" />
        <div className="text-xs text-[#555650] leading-[1.85] space-y-1.5">
          <p className="font-bold text-[#292D2A]">
            توضیح اخلاق حرفه‌ای و راهنمای شرایط بحران
          </p>
          <p>
            محتوای علمی و ابزارهای خودسنجی این وب‌سایت صرفاً با هدف آموزش و افزایش آگاهی درباره
            پویایی روابط تدوین شده‌اند و جایگزین ارزیابی حضوری، تشخیص بالینی یا روان‌درمانی
            تخصصی نیستند.
          </p>
          <p className="tabular-nums">
            در صورت تجربه خشونت خانگی، تهدید امنیتی یا بحران شدید روانی که نیازمند مداخله فوری
            است، لطفاً بلافاصله با{' '}
            <strong className="text-[#292D2A]">اورژانس اجتماعی (۱۲۳)</strong>،{' '}
            <strong className="text-[#292D2A]">خط صدای مشاور بهزیستی (۱۴۸۰)</strong> یا{' '}
            <strong className="text-[#292D2A]">اورژانس پزشکی (۱۱۵)</strong> تماس بگیرید.
          </p>
        </div>
      </div>
    </section>
  );
};
