import React, { useEffect, useState } from 'react';
import { ShieldCheck } from 'lucide-react';

type JsonLdNode = Record<string, unknown>;

interface CredentialSummary {
  name: string;
  role: string;
  licenseNumber: string;
  credentialTitle: string;
  issuer: string;
  education: string;
  profileUrl: string;
}

const asText = (value: unknown): string => {
  if (typeof value === 'string' || typeof value === 'number') return String(value);
  if (value && typeof value === 'object' && 'name' in value) {
    return asText((value as { name?: unknown }).name);
  }
  return '';
};

const flattenNodes = (value: unknown): JsonLdNode[] => {
  if (Array.isArray(value)) return value.flatMap(flattenNodes);
  if (!value || typeof value !== 'object') return [];
  const node = value as JsonLdNode;
  const graph = Array.isArray(node['@graph']) ? flattenNodes(node['@graph']) : [];
  return [node, ...graph];
};

export const ProfessionalCredentialsSummaryCard: React.FC = () => {
  const [summary, setSummary] = useState<CredentialSummary | null>(null);

  useEffect(() => {
    const readStructuredData = () => {
      const scripts = Array.from(
        document.querySelectorAll<HTMLScriptElement>('script[type="application/ld+json"]')
      );

      for (const script of scripts) {
        try {
          const nodes = flattenNodes(JSON.parse(script.textContent || ''));
          const people = nodes.filter((node) => {
            const types = Array.isArray(node['@type']) ? node['@type'] : [node['@type']];
            return types.some((type) => type === 'Psychologist' || type === 'Person');
          });
          const person = people.find((node) => Boolean(node.hasCredential)) || people[0];
          if (!person) continue;

          const credentialValue = person.hasCredential;
          const credential = Array.isArray(credentialValue) ? credentialValue[0] : credentialValue;
          const credentialNode =
            credential && typeof credential === 'object' ? (credential as JsonLdNode) : {};

          const licenseNumber = asText(person.identifier);
          const credentialTitle = asText(credentialNode.credentialCategory);
          const issuer = asText(credentialNode.recognizedBy);
          const description = asText(person.description);
          const educationMatch = description.match(/کارشناس ارشد[^،؛.]*/);

          if (!licenseNumber && !credentialTitle && !educationMatch) continue;

          setSummary({
            name: asText(person.name) || 'مهناز خوینی',
            role: asText(person.jobTitle) || 'زوج‌درمانگر بالینی و مشاور خانواده',
            licenseNumber,
            credentialTitle,
            issuer,
            education: educationMatch?.[0] || '',
            profileUrl: asText(person.url) || '/about',
          });
          return;
        } catch {
          // ignore parse errors
        }
      }
    };

    readStructuredData();
    const observer = new MutationObserver(readStructuredData);
    observer.observe(document.head, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, []);

  if (!summary) return null;

  return (
    <aside
      className="my-8 overflow-hidden rounded-2xl border border-[#E5E0D8] bg-[#FCFBF8]"
      dir="rtl"
      aria-label="مشخصات و مجوز حرفه‌ای درمانگر"
    >
      <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-[#3D5E4E]">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            <span>مشخصات و مجوز حرفه‌ای درمانگر</span>
          </div>
          <h2 className="text-lg font-extrabold text-[#292D2A] sm:text-xl">
            {summary.name}
          </h2>
          <p className="mt-1 text-sm font-medium text-[#555650]">
            {[
              summary.role,
              summary.licenseNumber ? `پروانه نظام روان‌شناسی: ${summary.licenseNumber}` : '',
            ]
              .filter(Boolean)
              .join(' · ')}
          </p>
          {(summary.issuer || summary.education) && (
            <p className="mt-2 text-xs text-[#6E6E68]">
              {[summary.issuer, summary.education].filter(Boolean).join(' · ')}
            </p>
          )}
        </div>
        <a
          href="/about"
          className="inline-flex shrink-0 items-center justify-center rounded-lg bg-[#344A42] hover:bg-[#273932] px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#FCFBF8] transition-colors"
        >
          مشاهده سوابق حرفه‌ای
        </a>
      </div>
    </aside>
  );
};
