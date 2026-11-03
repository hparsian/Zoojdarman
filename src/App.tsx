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
import { InteractiveToolsSuite } from './components/InteractiveToolsSuite';
import { KeywordsHubSection } from './components/KeywordsHubSection';
import { CouplesTherapyGuideSection } from './components/CouplesTherapyGuideSection';
import { AboutView } from './components/AboutView';
import { ProcessView } from './components/ProcessView';
import { FaqView } from './components/FaqView';
import { ContactView } from './components/ContactView';
import { ToolsView } from './components/ToolsView';
import { SingleTestView } from './components/SingleTestView';
import { ArticlesArchiveView } from './components/ArticlesArchiveView';
import { ServicesArchiveView } from './components/ServicesArchiveView';
import { TopicsView } from './components/TopicsView';
import { FeesView } from './components/FeesView';
import { BestTherapistView } from './components/BestTherapistView';
import { VideosSection } from './components/VideosSection';
import { VideosView } from './components/VideosView';
import { getTestBySlug } from './data/testsData';
import { AlertCircle } from 'lucide-react';
import { RouteState } from './types';
import { applySeo, seoForRoute } from './seo';
import { BrandPreloader } from './components/BrandPreloader';

export const App: React.FC = () => {
  const [route, setRoute] = useState<RouteState>({ type: 'home' });
  const [showPreloader, setShowPreloader] = useState(true);

  // Parse path on initial load & popstate
  const parsePath = () => {
    const path = window.location.pathname.replace(/\/$/, '');
    const hash = window.location.hash.replace(/^#/, '');

    if (path.startsWith('/articles/')) {
      const slug = path.replace('/articles/', '');
      setRoute({ type: 'article', slug });
    } else if (path === '/articles') {
      setRoute({ type: 'articles' });
    } else if (path.startsWith('/services/')) {
      const slug = path.replace('/services/', '');
      setRoute({ type: 'service', slug });
    } else if (path === '/services') {
      setRoute({ type: 'services' });
    } else if (path.startsWith('/tests/')) {
      const testSlug = path.replace('/tests/', '');
      setRoute({ type: 'singleTest', testSlug });
    } else if (path.startsWith('/tools/') && path !== '/tools') {
      const testSlug = path.replace('/tools/', '');
      setRoute({ type: 'singleTest', testSlug });
    } else if (path === '/about' || path === '/bio') {
      setRoute({ type: 'about' });
    } else if (path === '/process' || path === '/treatment-process') {
      setRoute({ type: 'process' });
    } else if (path === '/faq') {
      setRoute({ type: 'faq' });
    } else if (path === '/contact' || path === '/appointment') {
      setRoute({ type: 'contact' });
    } else if (path === '/tools' || path === '/assessments' || path === '/tests') {
      setRoute({ type: 'tools' });
    } else if (path === '/topics' || path === '/qa') {
      setRoute({ type: 'topics' });
    } else if (path === '/fees' || path === '/pricing' || path === '/costs' || path === '/tariffs') {
      setRoute({ type: 'fees' });
    } else if (
      path === '/best-couples-therapist-tehran' ||
      path === '/best-couples-therapist' ||
      path === '/best-couples-therapist-tehran-online'
    ) {
      setRoute({ type: 'bestTherapist' });
    } else if (path === '/privacy-policy') {
      setRoute({ type: 'privacy' });
    } else if (path === '/videos' || path === '/media' || path === '/aparat' || path === '/youtube') {
      setRoute({ type: 'videos' });
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

  // بهروزرسانی متا سئو (عنوان، توضیحات، canonical، OG و JSON-LD) برای هر مسیر
  useEffect(() => {
    applySeo(seoForRoute(route));
  }, [route]);

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

  const navigateToServices = () => {
    window.history.pushState({}, '', '/services');
    setRoute({ type: 'services' });
  };

  const navigateToService = (slug: string) => {
    window.history.pushState({}, '', `/services/${slug}`);
    setRoute({ type: 'service', slug });
  };

  const navigateToArticles = () => {
    window.history.pushState({}, '', '/articles');
    setRoute({ type: 'articles' });
  };

  const navigateToArticle = (slug: string) => {
    window.history.pushState({}, '', `/articles/${slug}`);
    setRoute({ type: 'article', slug });
  };

  const navigateToAbout = () => {
    window.history.pushState({}, '', '/about');
    setRoute({ type: 'about' });
  };

  const navigateToProcess = () => {
    window.history.pushState({}, '', '/process');
    setRoute({ type: 'process' });
  };

  const navigateToFaq = () => {
    window.history.pushState({}, '', '/faq');
    setRoute({ type: 'faq' });
  };

  const navigateToContact = () => {
    window.history.pushState({}, '', '/contact');
    setRoute({ type: 'contact' });
  };

  const navigateToTools = () => {
    window.history.pushState({}, '', '/tools');
    setRoute({ type: 'tools' });
  };

  const navigateToSingleTest = (testSlug: string) => {
    window.history.pushState({}, '', `/tests/${testSlug}`);
    setRoute({ type: 'singleTest', testSlug });
  };

  const navigateToTopics = () => {
    window.history.pushState({}, '', '/topics');
    setRoute({ type: 'topics' });
  };

  const navigateToFees = () => {
    window.history.pushState({}, '', '/fees');
    setRoute({ type: 'fees' });
  };

  const navigateToBestTherapist = () => {
    window.history.pushState({}, '', '/best-couples-therapist-tehran');
    setRoute({ type: 'bestTherapist' });
  };

  const navigateToVideos = () => {
    window.history.pushState({}, '', '/videos');
    setRoute({ type: 'videos' });
  };

  const navigateToPrivacy = () => {
    window.history.pushState({}, '', '/privacy-policy');
    setRoute({ type: 'privacy' });
  };

  // Render view depending on route
  const renderContent = () => {
    if (route.type === 'singleTest') {
      const currentTest = getTestBySlug(route.testSlug);
      if (!currentTest) {
        return (
          <div className="min-h-screen bg-[#FAF8F5] flex flex-col items-center justify-center p-6 text-center">
            <AlertCircle className="w-16 h-16 text-[#6D5AA8] mb-4" />
            <h1 className="text-2xl font-black text-[#44386B] mb-2">آزمون مورد نظر یافت نشد</h1>
            <p className="text-sm text-[#6F6B78] mb-6">آدرس آزمون تغییر کرده یا به صفحه دیگری منتقل شده است.</p>
            <button
              onClick={() => navigateToTools()}
              className="px-6 py-3 bg-[#6D5AA8] text-white rounded-full font-bold text-xs cursor-pointer"
            >
              مشاهده سایر آزمون‌های رابطه
            </button>
          </div>
        );
      }
      return (
        <SingleTestView
          test={currentTest}
          onBack={navigateToTools}
          onSelectOtherTest={navigateToSingleTest}
          onNavigateContact={navigateToContact}
        />
      );
    }
    if (route.type === 'articles') {
      return (
        <ArticlesArchiveView
          onBack={() => navigateToHome('articles')}
          onSelectArticle={navigateToArticle}
          onNavigateTools={navigateToTools}
        />
      );
    }

    if (route.type === 'services') {
      return (
        <ServicesArchiveView
          onBack={() => navigateToHome('services')}
          onSelectService={navigateToService}
          onNavigateContact={navigateToContact}
          onNavigateTools={navigateToTools}
        />
      );
    }

    if (route.type === 'about') {
      return (
        <AboutView
          onBack={() => navigateToHome('bio')}
          onNavigateContact={navigateToContact}
          onNavigateTools={navigateToTools}
        />
      );
    }

    if (route.type === 'process') {
      return (
        <ProcessView
          onBack={() => navigateToHome('process')}
          onNavigateContact={navigateToContact}
          onNavigateTools={navigateToTools}
        />
      );
    }

    if (route.type === 'faq') {
      return (
        <FaqView
          onBack={() => navigateToHome('faq')}
          onNavigateContact={navigateToContact}
          onNavigateTools={navigateToTools}
        />
      );
    }

    if (route.type === 'contact') {
      return (
        <ContactView
          onBack={() => navigateToHome('contact')}
          onNavigateTools={navigateToTools}
        />
      );
    }

    if (route.type === 'tools') {
      return (
        <ToolsView
          onBack={() => navigateToHome('tools')}
          onNavigateContact={navigateToContact}
          onSelectTest={navigateToSingleTest}
        />
      );
    }

    if (route.type === 'topics') {
      return (
        <TopicsView
          onBack={() => navigateToHome('seo-hub')}
          onSelectArticle={navigateToArticle}
          onSelectService={navigateToService}
          onNavigateTools={navigateToTools}
        />
      );
    }

    if (route.type === 'fees') {
      return (
        <FeesView
          onBack={() => navigateToHome('pricing')}
          onNavigateContact={navigateToContact}
          onSelectService={navigateToService}
        />
      );
    }

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

    if (route.type === 'bestTherapist') {
      return (
        <BestTherapistView
          onBack={() => navigateToHome()}
          onNavigateContact={navigateToContact}
          onNavigateTools={navigateToTools}
          onSelectService={navigateToService}
          onSelectArticle={navigateToArticle}
        />
      );
    }

    if (route.type === 'videos') {
      return (
        <VideosView
          onNavigateHome={() => navigateToHome()}
          onNavigateContact={navigateToContact}
          onNavigateTools={navigateToTools}
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
          onNavigateAbout={navigateToAbout}
          onNavigateProcess={navigateToProcess}
          onNavigateFaq={navigateToFaq}
          onNavigateContact={navigateToContact}
          onNavigateTools={navigateToTools}
          onNavigateArticles={navigateToArticles}
          onNavigateServices={navigateToServices}
          onNavigateTopics={navigateToTopics}
          onNavigateFees={navigateToFees}
          onNavigateVideos={navigateToVideos}
        />

        <main className="flex-1 home-page">
          <Hero
            onScrollToAssessment={() => scrollToSection('assessment')}
            onScrollToTools={() => scrollToSection('tools')}
          />
          <Stats />
          <InteractiveToolsSuite />
          <ServicesSection onSelectService={navigateToService} />
          <VideosSection
            onNavigateContact={navigateToContact}
            onNavigateVideos={navigateToVideos}
            limit={6}
          />
          <CouplesTherapyGuideSection
            onScrollToTools={() => scrollToSection('tools')}
            onNavigateService={navigateToService}
            onNavigateContact={navigateToContact}
          />
          <ProcessSection />
          <DiagnosticWidget />
          <KeywordsHubSection
            onSelectArticle={navigateToArticle}
            onSelectService={navigateToService}
            onScrollToTools={() => scrollToSection('tools')}
          />
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
          onNavigateAbout={navigateToAbout}
          onNavigateProcess={navigateToProcess}
          onNavigateFaq={navigateToFaq}
          onNavigateContact={navigateToContact}
          onNavigateTools={navigateToTools}
          onNavigateArticles={navigateToArticles}
          onNavigateServices={navigateToServices}
          onNavigateTopics={navigateToTopics}
          onNavigateFees={navigateToFees}
          onNavigateVideos={navigateToVideos}
        />

        <FloatingActions />
      </div>
    );
  };

  return (
    <>
      {showPreloader && <BrandPreloader onFinish={() => setShowPreloader(false)} />}
      {renderContent()}
    </>
  );
};
