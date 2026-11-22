import React, { useState } from 'react';
import { Lightbulb, BookOpen, Table2, ChevronDown } from 'lucide-react';
import type { ContentTable, FaqItem } from '../types';

interface SeoTakeawaysCardProps {
  title: string;
  items?: string[];
}

export const SeoTakeawaysCard: React.FC<SeoTakeawaysCardProps> = ({ title, items }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="bg-[#EDF2EE] border border-[#D3E0D7] rounded-2xl p-6 sm:p-8 mb-8">
      <h2 className="text-base sm:text-lg font-bold text-[#344A42] mb-3 flex items-center gap-2">
        <Lightbulb className="w-5 h-5 text-[#3D5E4E] shrink-0" />
        <span>{title}</span>
      </h2>
      <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-[#292D2A] leading-relaxed list-disc list-inside">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

interface StructuredTablesSectionProps {
  tables?: ContentTable[];
}

export const StructuredTablesSection: React.FC<StructuredTablesSectionProps> = ({ tables }) => {
  if (!tables || tables.length === 0) return null;

  return (
    <div className="mt-10 pt-8 border-t border-[#E5E0D8] space-y-10">
      {tables.map((table, tIdx) => (
        <section key={table.id || `structured-table-${tIdx}`}>
          <h2
            id={table.id || `clinical-table-${tIdx + 1}`}
            className="flex items-center gap-2 text-[#292D2A]"
          >
            <Table2 className="w-5 h-5 text-[#3D5E4E] shrink-0 inline-block" />
            <span>{table.title}</span>
          </h2>
          {table.subtitle && (
            <p className="text-sm text-[#555650] leading-relaxed mb-4">{table.subtitle}</p>
          )}
          <div className="article-table-wrap">
            <table>
              <thead>
                <tr>
                  {table.headers.map((header, hIdx) => (
                    <th key={hIdx} scope="col">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row, rIdx) => (
                  <tr key={rIdx}>
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className={cIdx === 0 ? 'font-bold text-[#292D2A]' : ''}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </div>
  );
};

interface InteractiveFaqSectionProps {
  faqs?: FaqItem[];
  title?: string;
}

export const InteractiveFaqSection: React.FC<InteractiveFaqSectionProps> = ({
  faqs,
  title = 'سوالات متداول مراجعان',
}) => {
  const [collapsedIndices, setCollapsedIndices] = useState<Record<number, boolean>>({});

  if (!faqs || faqs.length === 0) return null;

  const toggleIndex = (idx: number) => {
    setCollapsedIndices((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <section
      aria-label={title}
      className="bg-[#FCFBF8] rounded-2xl p-6 sm:p-9 border border-[#E5E0D8] mb-10"
    >
      <div className="flex items-center justify-between gap-3 mb-6 flex-wrap pb-4 border-b border-[#E5E0D8]">
        <h2
          id="faq-section"
          className="text-lg sm:text-xl font-extrabold text-[#292D2A] flex items-center gap-2 m-0"
        >
          <BookOpen className="w-5 h-5 text-[#344A42] shrink-0" />
          <span>{title}</span>
        </h2>
        <span className="text-xs font-medium text-[#6E6E68]">
          {faqs.length} پرسش تخصصی
        </span>
      </div>

      <div className="flex flex-col gap-3">
        {faqs.map((faq, idx) => {
          const isCollapsed = Boolean(collapsedIndices[idx]);
          return (
            <div
              key={idx}
              className="bg-[#F4F1EC] rounded-xl border border-[#E5E0D8] overflow-hidden transition-colors hover:border-[#8FAE9B]"
            >
              <button
                type="button"
                onClick={() => toggleIndex(idx)}
                aria-expanded={!isCollapsed}
                className="w-full text-right p-5 flex items-center justify-between gap-3 cursor-pointer"
              >
                <h3 className="text-sm sm:text-base font-bold text-[#292D2A] m-0 leading-snug">
                  {faq.q}
                </h3>
                <ChevronDown
                  className={`w-4 h-4 text-[#344A42] shrink-0 transition-transform duration-200 ${
                    isCollapsed ? '' : 'rotate-180'
                  }`}
                />
              </button>
              <div className={`px-5 pb-5 pt-0 ${isCollapsed ? 'hidden' : 'block'}`}>
                <p className="text-xs sm:text-sm text-[#555650] leading-[1.9] text-justify m-0">
                  {faq.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
