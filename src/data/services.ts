import rawServices from './services.json';
import { ServiceItem } from '../types';

export const services: ServiceItem[] = rawServices as ServiceItem[];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return services.find(s => s.slug === slug);
}
