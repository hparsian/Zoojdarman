import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { DiagnosticWidget } from './components/DiagnosticWidget';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { BioSection } from './components/BioSection';
import { ArticlesSection } from './components/ArticlesSection';
import { FaqSection } from './components/FaqSection';
import { ConsultationForm } from './components/ConsultationForm';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { ArticleView } from './components/ArticleView';
import { ServiceView } from './components/ServiceView';
import { PrivacyPolicyView } from './components/PrivacyPolicyView';
import { getArticleBySlug } from './data/articles';
import { getServiceBySlug } from './data/services';
import { AlertCircle } from 'lucide-react';

type RouteState =
  | { type: 'home'; section?: string }
  | { type: 'article'; slug: string }
  | { type: 'service'; slug: string }
  | { type: 'privacy' }
  | { type: '404' };

export const App: React.FC = () => {
  const [route, setRoute] = useState<RouteState>({ type: 'home' });

  // Parse path on initial load & popstate
  const parsePath = () => {
    const path = window.location.pathname.replace(/\/$/, '');
    const hash = window.location.hash.replace(/^#/, '');

    if (path.startsWith('/articles/')) {
      const slug = path.replace('/articles/', '');
      setRoute({ type: 'article', slug });
    } else if (path.startsWith('/services/')) {
      const slug = path.replace('/services/', '');
      setRoute({ type: 'service', slug });
    } else if (path === '/privacy-policy') {
      setRoute({ type: 'privacy' });
    } else {
      setRoute({ type: 'home', section: hash || undefined });
    }
  };

  useEffect(() => {
    parsePath();

    const handlePopState = () => {
      parsePath();
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle in-page smooth scroll
  const scrollToSection = (sectionId?: string) => {
    if (!sectionId || sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToHome = (sectionId?: string) => {
    window.history.pushState({}, '', sectionId ? `/#${sectionId}` : '/');
    setRoute({ type: 'home', section: sectionId });
    setTimeout(() => scrollToSection(sectionId), 50);
  };

  const navigateToService = (slug: string) => {
    window.history.pushState({}, '', `/services/${slug}`);
    setRoute({ type: 'service', slug });
  };

  const navigateToArticle = (slug: string) => {
    window.history.pushState({}, '', `/articles/${slug}`);
    setRoute({ type: 'article', slug });
  };

  const navigateToPrivacy = () => {
    window.history.pushState({}, '', '/privacy-policy');
    setRoute({ type: 'privacy' });
  };

  // Render view depending on route
  if (route.type === 'article') {
    const article = getArticleBySlug(route.slug);
    if (!article) {
      return (
        <div className="min-h-screen bg-[#FAF8F5] flex flex-col items-center justify-center p-6 text-center">
          <AlertCircle className="w-16 h-16 text-[#6D5AA8] mb-4" />
          <h1 className="text-2xl font-black text-[#44386B] mb-2">مقاله مورد نظر یافت نشد</h1>
          <p className="text-sm text-[#6F6B78] mb-6">احتمالاً آدرس مقاله تغییر کرده یا به صفحه دیگری منتقل شده است.</p>
          <button
            onClick={() => navigateToHome('articles')}
            className="px-6 py-3 bg-[#6D5AA8] text-white rounded-full font-bold text-xs"
          >
            مشاهده سایر مقالات
          </button>
        </div>
      );
    }
    return (
      <ArticleView
        article={article}
        onBack={() => navigateToHome('articles')}
        onSelectArticle={navigateToArticle}
      />
    );
  }

  if (route.type === 'service') {
    const service = getServiceBySlug(route.slug);
    if (!service) {
      return (
        <div className="min-h-screen bg-[#FAF8F5] flex flex-col items-center justify-center p-6 text-center">
          <AlertCircle className="w-16 h-16 text-[#6D5AA8] mb-4" />
          <h1 className="text-2xl font-black text-[#44386B] mb-2">خدمت مورد نظر یافت نشد</h1>
          <p className="text-sm text-[#6F6B78] mb-6">صفحه مورد نظر در حال حاضر در دسترس نیست.</p>
          <button
            onClick={() => navigateToHome('services')}
            className="px-6 py-3 bg-[#6D5AA8] text-white rounded-full font-bold text-xs"
          >
            مشاهده خدمات تخصصی
          </button>
        </div>
      );
    }
    return (
      <ServiceView
        service={service}
        onBack={() => navigateToHome('services')}
      />
    );
  }

  if (route.type === 'privacy') {
    return <PrivacyPolicyView onBack={() => navigateToHome()} />;
  }

  // Home Page
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#292733] flex flex-col">
      <Header
        onNavigateHome={navigateToHome}
        onNavigatePrivacy={navigateToPrivacy}
      />

      <main className="flex-1">
        <Hero onScrollToAssessment={() => scrollToSection('assessment')} />
        <Stats />
        <DiagnosticWidget />
        <ServicesSection onSelectService={navigateToService} />
        <ProcessSection />
        <BioSection />
        <ArticlesSection onSelectArticle={navigateToArticle} />
        <FaqSection />
        <ConsultationForm />
      </main>

      <Footer
        onNavigateHome={navigateToHome}
        onNavigateService={navigateToService}
        onNavigateArticle={navigateToArticle}
        onNavigatePrivacy={navigateToPrivacy}
      />

      <FloatingActions />
    </div>
  );
};
