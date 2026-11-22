import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { Header } from './components/Header';
import { PageLoader } from './components/PageLoader';
import { Hero } from './components/Hero';
import { EmotionalRecognitionSection } from './components/EmotionalRecognitionSection';
import { ServicesSection } from './components/ServicesSection';
import { RelationshipGalaxySection } from './components/RelationshipGalaxySection';
import { BioSection } from './components/BioSection';
import { ProcessSection } from './components/ProcessSection';
import { TrustSafetySection } from './components/TrustSafetySection';
import { HomeToolsTeaser } from './components/HomeToolsTeaser';
import { ArticlesSection } from './components/ArticlesSection';
import { HomeRegionalGateway } from './components/HomeRegionalGateway';
import { VideosSection } from './components/VideosSection';
import { FaqSection } from './components/FaqSection';
import { ConsultationForm } from './components/ConsultationForm';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { RouteState } from './types';
import { applySeo, seoForRoute } from './seo';

// Code-split internal views and heavy data bundles (articles.json, services.json, tests, cities, countries)
const ArticleView = lazy(() =>
  import('./components/ArticleView').then((m) => ({ default: m.ArticleView }))
);
const ServiceView = lazy(() =>
  import('./components/ServiceView').then((m) => ({ default: m.ServiceView }))
);
const ArticlesArchiveView = lazy(() =>
  import('./components/ArticlesArchiveView').then((m) => ({ default: m.ArticlesArchiveView }))
);
const ServicesArchiveView = lazy(() =>
  import('./components/ServicesArchiveView').then((m) => ({ default: m.ServicesArchiveView }))
);
const AboutView = lazy(() =>
  import('./components/AboutView').then((m) => ({ default: m.AboutView }))
);
const ProcessView = lazy(() =>
  import('./components/ProcessView').then((m) => ({ default: m.ProcessView }))
);
const FaqView = lazy(() =>
  import('./components/FaqView').then((m) => ({ default: m.FaqView }))
);
const ContactView = lazy(() =>
  import('./components/ContactView').then((m) => ({ default: m.ContactView }))
);
const ToolsView = lazy(() =>
  import('./components/ToolsView').then((m) => ({ default: m.ToolsView }))
);
const SingleTestView = lazy(() =>
  import('./components/SingleTestView').then((m) => ({ default: m.SingleTestView }))
);
const TopicsView = lazy(() =>
  import('./components/TopicsView').then((m) => ({ default: m.TopicsView }))
);
const FeesView = lazy(() =>
  import('./components/FeesView').then((m) => ({ default: m.FeesView }))
);
const BestTherapistView = lazy(() =>
  import('./components/BestTherapistView').then((m) => ({ default: m.BestTherapistView }))
);
const VideosView = lazy(() =>
  import('./components/VideosView').then((m) => ({ default: m.VideosView }))
);
const PrivacyPolicyView = lazy(() =>
  import('./components/PrivacyPolicyView').then((m) => ({ default: m.PrivacyPolicyView }))
);
const CitiesHubView = lazy(() =>
  import('./components/CitiesHubView').then((m) => ({ default: m.CitiesHubView }))
);
const CityLandingView = lazy(() =>
  import('./components/CityLandingView').then((m) => ({ default: m.CityLandingView }))
);
const CountriesHubView = lazy(() =>
  import('./components/CountriesHubView').then((m) => ({ default: m.CountriesHubView }))
);
const CountryLandingView = lazy(() =>
  import('./components/CountryLandingView').then((m) => ({ default: m.CountryLandingView }))
);
const NotFoundView = lazy(() =>
  import('./components/NotFoundView').then((m) => ({ default: m.NotFoundView }))
);

function parseCurrentPath(): RouteState {
  if (typeof window === 'undefined') return { type: 'home' };
  const path = window.location.pathname.replace(/\/$/, '');
  const hash = window.location.hash.replace(/^#/, '');

  if (path === '' || path === '/') {
    return { type: 'home', section: hash || undefined };
  }
  if (path.startsWith('/articles/')) {
    return { type: 'article', slug: path.slice('/articles/'.length) };
  }
  if (path === '/articles') {
    return { type: 'articles' };
  }
  if (path.startsWith('/services/')) {
    return { type: 'service', slug: path.slice('/services/'.length) };
  }
  if (path === '/services') {
    return { type: 'services' };
  }
  if (path.startsWith('/tests/')) {
    return { type: 'singleTest', testSlug: path.slice('/tests/'.length) };
  }
  if (path.startsWith('/tools/') && path !== '/tools') {
    return { type: 'singleTest', testSlug: path.slice('/tools/'.length) };
  }
  if (path === '/about' || path === '/bio') {
    return { type: 'about' };
  }
  if (path === '/process' || path === '/treatment-process') {
    return { type: 'process' };
  }
  if (path === '/faq') {
    return { type: 'faq' };
  }
  if (path === '/contact' || path === '/appointment') {
    return { type: 'contact' };
  }
  if (path === '/tools' || path === '/assessments' || path === '/tests') {
    return { type: 'tools' };
  }
  if (path === '/topics' || path === '/qa') {
    return { type: 'topics' };
  }
  if (path === '/fees' || path === '/pricing' || path === '/costs' || path === '/tariffs') {
    return { type: 'fees' };
  }
  if (
    path === '/best-couples-therapist-tehran' ||
    path === '/best-couples-therapist' ||
    path === '/best-couples-therapist-tehran-online'
  ) {
    return { type: 'bestTherapist' };
  }
  if (path === '/privacy-policy') {
    return { type: 'privacy' };
  }
  if (path === '/videos' || path === '/media' || path === '/aparat' || path === '/youtube') {
    return { type: 'videos' };
  }
  if (path.startsWith('/cities/')) {
    return { type: 'city', citySlug: path.slice('/cities/'.length) };
  }
  if (path.startsWith('/city/')) {
    return { type: 'city', citySlug: path.slice('/city/'.length) };
  }
  if (path === '/cities' || path === '/centers') {
    return { type: 'cities' };
  }
  if (path.startsWith('/countries/')) {
    return { type: 'country', countrySlug: path.slice('/countries/'.length) };
  }
  if (path.startsWith('/country/')) {
    return { type: 'country', countrySlug: path.slice('/country/'.length) };
  }
  if (path === '/countries' || path === '/international') {
    return { type: 'countries' };
  }

  return { type: '404' };
}

export const App: React.FC = () => {
  const [route, setRoute] = useState<RouteState>(() => parseCurrentPath());
  const [isRouteLoading, setIsRouteLoading] = useState(false);
  const transitionTimerRef = useRef<number | null>(null);

  const triggerPageTransition = () => {
    if (typeof window === 'undefined') return;
    if (transitionTimerRef.current !== null) {
      window.clearTimeout(transitionTimerRef.current);
      transitionTimerRef.current = null;
    }
    const prefersReduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    setIsRouteLoading(true);
    transitionTimerRef.current = window.setTimeout(() => {
      setIsRouteLoading(false);
      transitionTimerRef.current = null;
    }, 420);
  };

  useEffect(() => {
    return () => {
      if (transitionTimerRef.current !== null) {
        window.clearTimeout(transitionTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      triggerPageTransition();
      setRoute(parseCurrentPath());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    applySeo(seoForRoute(route));
  }, [route]);

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

  const pushRoute = (url: string, nextRoute: RouteState) => {
    triggerPageTransition();
    window.history.pushState({}, '', url);
    setRoute(nextRoute);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const navigateToHome = (sectionId?: string) => {
    const wasHome = route.type === 'home';
    if (!wasHome) {
      triggerPageTransition();
    }
    window.history.pushState({}, '', sectionId ? `/#${sectionId}` : '/');
    setRoute({ type: 'home', section: sectionId });
    setTimeout(() => scrollToSection(sectionId), wasHome ? 60 : 120);
  };

  const navigateToServices = () => pushRoute('/services', { type: 'services' });
  const navigateToService = (slug: string) => pushRoute(`/services/${slug}`, { type: 'service', slug });
  const navigateToArticles = () => pushRoute('/articles', { type: 'articles' });
  const navigateToArticle = (slug: string) => pushRoute(`/articles/${slug}`, { type: 'article', slug });
  const navigateToAbout = () => pushRoute('/about', { type: 'about' });
  const navigateToProcess = () => pushRoute('/process', { type: 'process' });
  const navigateToFaq = () => pushRoute('/faq', { type: 'faq' });
  const navigateToContact = () => pushRoute('/contact', { type: 'contact' });
  const navigateToTools = () => pushRoute('/tools', { type: 'tools' });
  const navigateToSingleTest = (testSlug: string) =>
    pushRoute(`/tests/${testSlug}`, { type: 'singleTest', testSlug });
  const navigateToTopics = () => pushRoute('/topics', { type: 'topics' });
  const navigateToFees = () => pushRoute('/fees', { type: 'fees' });
  const navigateToBestTherapist = () =>
    pushRoute('/best-couples-therapist-tehran', { type: 'bestTherapist' });
  const navigateToVideos = () => pushRoute('/videos', { type: 'videos' });
  const navigateToPrivacy = () => pushRoute('/privacy-policy', { type: 'privacy' });
  const navigateToCities = () => pushRoute('/cities', { type: 'cities' });
  const navigateToCity = (citySlug: string) => {
    if (citySlug === 'hub') {
      navigateToCities();
      return;
    }
    pushRoute(`/cities/${citySlug}`, { type: 'city', citySlug });
  };
  const navigateToCountries = () => pushRoute('/countries', { type: 'countries' });
  const navigateToCountry = (countrySlug: string) => {
    if (countrySlug === 'hub') {
      navigateToCountries();
      return;
    }
    pushRoute(`/countries/${countrySlug}`, { type: 'country', countrySlug });
  };

  const renderLazyRoute = () => {
    switch (route.type) {
      case 'article':
        return (
          <ArticleView
            slug={route.slug}
            onBack={() => navigateToHome('articles')}
            onSelectArticle={navigateToArticle}
            onNavigateHome={() => navigateToHome()}
            onNavigateContact={navigateToContact}
          />
        );
      case 'articles':
        return (
          <ArticlesArchiveView
            onBack={() => navigateToHome('articles')}
            onSelectArticle={navigateToArticle}
            onNavigateTools={navigateToTools}
          />
        );
      case 'service':
        return (
          <ServiceView
            slug={route.slug}
            onBack={() => navigateToHome('services')}
            onNavigateHome={() => navigateToHome()}
            onNavigateContact={navigateToContact}
          />
        );
      case 'services':
        return (
          <ServicesArchiveView
            onBack={() => navigateToHome('services')}
            onSelectService={navigateToService}
            onNavigateContact={navigateToContact}
            onNavigateTools={navigateToTools}
          />
        );
      case 'singleTest':
        return (
          <SingleTestView
            testSlug={route.testSlug}
            onBack={navigateToTools}
            onNavigateHome={() => navigateToHome()}
            onSelectOtherTest={navigateToSingleTest}
            onNavigateContact={navigateToContact}
          />
        );
      case 'tools':
        return (
          <ToolsView
            onBack={() => navigateToHome('tools')}
            onNavigateContact={navigateToContact}
            onSelectTest={navigateToSingleTest}
          />
        );
      case 'about':
        return (
          <AboutView
            onBack={() => navigateToHome('bio')}
            onNavigateContact={navigateToContact}
            onNavigateTools={navigateToTools}
          />
        );
      case 'process':
        return (
          <ProcessView
            onBack={() => navigateToHome('process')}
            onNavigateContact={navigateToContact}
            onNavigateTools={navigateToTools}
          />
        );
      case 'faq':
        return (
          <FaqView
            onBack={() => navigateToHome('faq')}
            onNavigateContact={navigateToContact}
            onNavigateTools={navigateToTools}
          />
        );
      case 'contact':
        return (
          <ContactView
            onBack={() => navigateToHome('contact')}
            onNavigateTools={navigateToTools}
          />
        );
      case 'topics':
        return (
          <TopicsView
            onBack={() => navigateToHome()}
            onSelectArticle={navigateToArticle}
            onSelectService={navigateToService}
            onNavigateTools={navigateToTools}
          />
        );
      case 'fees':
        return (
          <FeesView
            onBack={() => navigateToHome()}
            onNavigateContact={navigateToContact}
            onSelectService={navigateToService}
          />
        );
      case 'bestTherapist':
        return (
          <BestTherapistView
            onBack={() => navigateToHome()}
            onNavigateContact={navigateToContact}
            onNavigateTools={navigateToTools}
            onSelectService={navigateToService}
            onSelectArticle={navigateToArticle}
          />
        );
      case 'videos':
        return (
          <VideosView
            onNavigateHome={() => navigateToHome()}
            onNavigateContact={navigateToContact}
            onNavigateTools={navigateToTools}
          />
        );
      case 'privacy':
        return <PrivacyPolicyView onBack={() => navigateToHome()} />;
      case 'city':
        return (
          <CityLandingView
            citySlug={route.citySlug}
            onNavigateHome={() => navigateToHome()}
            onNavigateContact={navigateToContact}
            onNavigateTools={navigateToTools}
            onSelectArticle={navigateToArticle}
            onSelectCity={navigateToCity}
          />
        );
      case 'cities':
        return (
          <CitiesHubView
            onNavigateHome={() => navigateToHome()}
            onSelectCity={navigateToCity}
            onNavigateContact={navigateToContact}
          />
        );
      case 'country':
        return (
          <CountryLandingView
            countrySlug={route.countrySlug}
            onNavigateHome={() => navigateToHome()}
            onNavigateContact={navigateToContact}
            onNavigateTools={navigateToTools}
            onSelectArticle={navigateToArticle}
            onSelectCountry={navigateToCountry}
          />
        );
      case 'countries':
        return (
          <CountriesHubView
            onNavigateHome={() => navigateToHome()}
            onSelectCountry={navigateToCountry}
            onNavigateContact={navigateToContact}
          />
        );
      case '404':
        return (
          <NotFoundView
            onNavigateHome={navigateToHome}
            onNavigateArticles={navigateToArticles}
            onNavigateTools={navigateToTools}
          />
        );
      default:
        return null;
    }
  };

  if (route.type !== 'home') {
    return (
      <>
        <PageLoader visible={isRouteLoading} />
        <Suspense fallback={<PageLoader />}>{renderLazyRoute()}</Suspense>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-[#F4F1EC] text-[#292D2A] flex flex-col">
      <PageLoader visible={isRouteLoading} />
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
        onNavigateCities={navigateToCities}
        onNavigateCountries={navigateToCountries}
      />

      <main id="main-content" className="flex-1 home-page">
        <Hero
          onScrollToTools={navigateToTools}
          onNavigateContact={navigateToContact}
          onSelectService={navigateToService}
          onNavigateBestTherapist={navigateToBestTherapist}
        />

        <EmotionalRecognitionSection
          onSelectService={navigateToService}
          onSelectArticle={navigateToArticle}
        />

        <ServicesSection
          onSelectService={navigateToService}
          onNavigateServices={navigateToServices}
        />

        <RelationshipGalaxySection
          onSelectService={navigateToService}
          onSelectArticle={navigateToArticle}
          onSelectTest={navigateToSingleTest}
          onNavigateContact={navigateToContact}
        />

        <BioSection
          onNavigateAbout={navigateToAbout}
          onNavigateProcess={navigateToProcess}
        />

        <ProcessSection onNavigateProcess={navigateToProcess} />

        <TrustSafetySection onNavigatePrivacy={navigateToPrivacy} />

        <HomeToolsTeaser
          onNavigateTools={navigateToTools}
          onSelectTest={navigateToSingleTest}
        />

        <ArticlesSection
          onSelectArticle={navigateToArticle}
          onNavigateArticles={navigateToArticles}
          limit={6}
        />

        <HomeRegionalGateway
          onSelectCity={navigateToCity}
          onSelectCountry={navigateToCountry}
          onNavigateCities={navigateToCities}
          onNavigateCountries={navigateToCountries}
          onNavigateBestTherapist={navigateToBestTherapist}
          onSelectService={navigateToService}
        />

        <VideosSection
          onNavigateContact={navigateToContact}
          onNavigateVideos={navigateToVideos}
          limit={3}
        />

        <FaqSection onNavigateFaq={navigateToFaq} limit={5} />

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
        onNavigateCities={navigateToCities}
        onNavigateCountries={navigateToCountries}
        onNavigateBestTherapist={navigateToBestTherapist}
        onNavigateCity={navigateToCity}
        onNavigateCountry={navigateToCountry}
        onSelectTest={navigateToSingleTest}
      />

      <FloatingActions onNavigateContact={navigateToContact} />
    </div>
  );
};
