import React from 'react';
import { servicesMeta } from '../data/servicesMeta';
import { ArrowLeft, Compass, ShieldAlert, Scale, HeartHandshake, Globe, Layers } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (slug: string) => void;
  onNavigateServices?: () => void;
}

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  'couples-therapy': <HeartHandshake className="w-5 h-5 text-[#344A42]" />,
  'infidelity-counseling': <ShieldAlert className="w-5 h-5 text-[#9E563E]" />,
  'divorce-counseling': <Scale className="w-5 h-5 text-[#344A42]" />,
  'premarital-counseling': <Compass className="w-5 h-5 text-[#3D5E4E]" />,
  'online-counseling': <Globe className="w-5 h-5 text-[#344A42]" />,
  'relationship-patterns-therapy': <Layers className="w-5 h-5 text-[#3D5E4E]" />,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onNavigateServices,
}) => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-[#F4F1EC] border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-[#3D5E4E] mb-2">
              حوزه‌های مداخله بالینی
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#292D2A] leading-snug mb-3">
              خدمات تخصصی کلینیک زوج‌درمان
            </h2>
            <p className="text-sm sm:text-base text-[#555650] leading-relaxed">
              هر خدمت بر پایه پروتکل‌های معتبر علمی (CBCT، طرحواره‌درمانی و گاتمن) و متناسب با وضعیت واقعی شما طراحی می‌شود.
            </p>
          </div>

          {onNavigateServices && (
            <button
              type="button"
              onClick={onNavigateServices}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#344A42] hover:text-[#273932] border-b border-[#344A42]/30 pb-1 self-start md:self-auto cursor-pointer whitespace-nowrap"
            >
              <span>مشاهده همه خدمات</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Asymmetric 6-card editorial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesMeta.map((srv, idx) => {
            const isPrimaryFocus = idx < 2;
            return (
              <a
                key={srv.slug}
                href={`/services/${srv.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectService(srv.slug);
                }}
                className={`group rounded-2xl p-6 sm:p-7 border transition-all duration-200 flex flex-col justify-between ${
                  isPrimaryFocus
                    ? 'bg-[#FCFBF8] border-[#CFC7BA] hover:border-[#344A42]'
                    : 'bg-[#FCFBF8]/80 border-[#E5E0D8] hover:border-[#8FAE9B]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#EDF2EE] flex items-center justify-center shrink-0">
                      {SERVICE_ICONS[srv.slug] || <HeartHandshake className="w-5 h-5 text-[#344A42]" />}
                    </div>
                    <span className="text-xs font-medium text-[#6E6E68]">
                      {srv.category}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#292D2A] group-hover:text-[#344A42] transition-colors leading-snug mb-3">
                    {srv.h1}
                  </h3>

                  <p className="text-sm text-[#555650] leading-relaxed mb-6">
                    {srv.shortSummary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5E0D8] flex items-center justify-between text-xs sm:text-sm font-semibold text-[#344A42]">
                  <span>بررسی جزئیات و روش اجرا</span>
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
