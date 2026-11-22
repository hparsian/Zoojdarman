export const PARENT_CLINIC_BASE_URL = 'https://peyvandamn.ir';
export const PARENT_CLINIC_ORG_ID = 'https://peyvandamn.ir/#organization';
export const PARENT_THERAPIST_ID = 'https://peyvandamn.ir/author/mkhoini/';

export function withParentUtm(path = '/', campaign = 'brand_bridge'): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${PARENT_CLINIC_BASE_URL}${cleanPath}?utm_source=zoojdarman&utm_medium=referral&utm_campaign=${encodeURIComponent(
    campaign
  )}`;
}

export const PARENT_CLINIC_LINKS = {
  home: withParentUtm('/', 'footer_brand'),
  portal: withParentUtm('/panel/', 'client_portal'),
  aboutClinic: withParentUtm('/about-safe-link-clinic/', 'about_clinic'),
  contact: withParentUtm('/contact-us/', 'contact_booking'),
  familyCounseling: withParentUtm('/family-counseling/', 'family_referral'),
  groupCounseling: withParentUtm('/group-counseling/', 'group_referral'),
  onlineStore: withParentUtm('/online-store/', 'courses_referral'),
} as const;

interface ParentServiceMapping {
  url: string;
  label: string;
}

const SERVICE_PARENT_MAP: Record<string, ParentServiceMapping> = {
  'couples-therapy': {
    url: withParentUtm('/couples-therapy/', 'service_couples'),
    label: 'صفحه زوج‌درمانی در وب‌سایت کلینیک پیوند امن',
  },
  'infidelity-counseling': {
    url: withParentUtm('/cheating-advice/', 'service_infidelity'),
    label: 'بخش مشاوره خیانت در کلینیک پیوند امن',
  },
  'divorce-counseling': {
    url: withParentUtm('/counseling-divorce/', 'service_divorce'),
    label: 'بخش مشاوره طلاق در کلینیک پیوند امن',
  },
  'premarital-counseling': {
    url: withParentUtm('/premarital-counseling/', 'service_premarital'),
    label: 'بخش مشاوره پیش از ازدواج در کلینیک پیوند امن',
  },
  'online-counseling': {
    url: withParentUtm('/online-clinic-services/', 'service_online'),
    label: 'خدمات کلینیک آنلاین پیوند امن',
  },
  'relationship-patterns-therapy': {
    url: withParentUtm('/group-counseling/', 'service_group'),
    label: 'بخش گروه‌درمانی و کارگاه‌ها در پیوند امن',
  },
};

export function getParentServiceLink(serviceSlug: string): ParentServiceMapping {
  return (
    SERVICE_PARENT_MAP[serviceSlug] || {
      url: PARENT_CLINIC_LINKS.home,
      label: 'مشاهده کلینیک تخصصی پیوند امن (peyvandamn.ir)',
    }
  );
}
