import React, { useEffect, useState } from 'react';
import { BadgeCheck, ShieldCheck, Award } from 'lucide-react';

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

/**
 * Reads the already-published Schema.org JSON-LD instead of maintaining a
 * second, potentially conflicting source of professional credentials.
 */
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
          // Prefer the full route-specific SEO graph, which contains hasCredential.
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
          // Ignore invalid JSON-LD blocks and continue with the next block.
        }
      }
    };

    readStructuredData();
    // Route SEO data is applied by the parent after child effects; observe the
    // head so the card refreshes when the route-specific JSON-LD is injected.
    const observer = new MutationObserver(readStructuredData);
    observer.observe(document.head, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, []);

  if (!summary) return null;

  return (
    <aside
      className="my-8 overflow-hidden rounded-3xl border border-[#DCD5E8] bg-white shadow-[0_8px_28px_rgba(36,26,53,0.06)]"
      dir="rtl"
      aria-label="خلاصه صلاحیت‌ها و مجوزهای حرفه‌ای درمانگر"
    >
      <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="min-w-0 flex-1">
          <div className="mb-3 flex items-center gap-2 text-xs font-black text-[#4E7A66]">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            <span>اطلاعات حرفه‌ای تأییدشده در داده‌های ساختاریافته سایت</span>
          </div>
          <h2 className="text-lg font-black text-[#241A35] sm:text-xl">
            {summary.name}
          </h2>
          <p className="mt-1 text-sm font-semibold text-[#625B6E]">{summary.role}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {summary.licenseNumber && (
              <span className="inline-flex items-center gap-2 rounded-full bg-[#EEF5F1] px-3 py-1.5 text-xs font-extrabold text-[#375949]">
                <BadgeCheck className="h-4 w-4" aria-hidden="true" />
                پروانه نظام روان‌شناسی: {summary.licenseNumber}
              </span>
            )}
            {summary.credentialTitle && (
              <span className="inline-flex items-center gap-2 rounded-full bg-[#F2EEF8] px-3 py-1.5 text-xs font-bold text-[#4B3A70]">
                <Award className="h-4 w-4" aria-hidden="true" />
                {summary.credentialTitle}
              </span>
            )}
          </div>
          {(summary.issuer || summary.education) && (
            <p className="mt-3 text-xs leading-7 text-[#777080]">
              {[summary.issuer, summary.education].filter(Boolean).join(' • ')}
            </p>
          )}
        </div>
        <a
          href={summary.profileUrl}
          className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#3E2F5B] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#514071] focus:outline-none focus:ring-2 focus:ring-[#8FAF9B] focus:ring-offset-2"
        >
          مشاهده سوابق حرفه‌ای
        </a>
      </div>
    </aside>
  );
};
