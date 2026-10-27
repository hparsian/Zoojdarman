import React, { useState, useEffect } from 'react';
import { TestDetailData, testsData } from '../data/testsData';
import { registerFaqSchema } from '../seo';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Brain,
  CheckCircle2,
  Clock,
  RotateCcw,
  Share2,
  MessageSquare,
  ChevronDown,
  Award,
  BookOpen,
  ChevronLeft
} from 'lucide-react';

interface SingleTestViewProps {
  test: TestDetailData;
  onBack: () => void;
  onSelectOtherTest: (testSlugOrId: string) => void;
  onNavigateContact: () => void;
}

export const SingleTestView: React.FC<SingleTestViewProps> = ({
  test,
  onBack,
  onSelectOtherTest,
  onNavigateContact,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [testCompleted, setTestCompleted] = useState(false);
  const [copiedResult, setCopiedResult] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setTestCompleted(false);
    setCopiedResult(false);
  }, [test]);

  // داده‌های ساختاریافته پرسش‌وپاسخ آزمون (JSON-LD)
  useEffect(() => registerFaqSchema(test.faqs), [test]);

  const currentQuestion = test.questions[currentQuestionIndex];

  const handleSelectOption = (score: number) => {
    const updated = {
      ...selectedAnswers,
      [currentQuestion.id]: score,
    };
    setSelectedAnswers(updated);

    if (currentQuestionIndex < test.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setTestCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setTestCompleted(false);
    setCopiedResult(false);
  };

  // Score calculation
  const totalScore = Object.values(selectedAnswers).reduce((a, b) => a + b, 0);
  const maxPossible = test.questions.length * 4;
  const scorePercentage = Math.round((totalScore / maxPossible) * 100);
  const diagnosis = test.getDiagnosis(scorePercentage);

  const shareText = `سلام، من در «${test.title}» سایت زوج‌درمان شرکت کردم.\nنتیجه شاخص رابطه من: ${scorePercentage}٪ (${diagnosis.level})\nتحلیل بالینی: ${diagnosis.summary}\nلینک شرکت رایگان در این تست: https://zoojdarman.ir/tests/${test.slug}`;

  const copyToClipboard = () => {
    navigator.clipboard?.writeText(shareText);
    setCopiedResult(true);
    setTimeout(() => setCopiedResult(false), 3000);
  };

  // Other related tests for cross-linking
  const otherTests = Object.values(testsData).filter((t) => t.id !== test.id);

  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-24">
      {/* Top Bar */}
      <div className="bg-white border-b border-[#E5E0EA] sticky top-0 z-40">
        <div className="container-custom h-16 flex items-center justify-between">
          <a
            href="/tools"
            onClick={(e) => { e.preventDefault(); onBack(); }}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-[#6D5AA8] hover:text-[#44386B] cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
            <span>بازگشت به سامانه آزمون‌ها</span>
          </a>

          <div className="flex items-center text-lg font-black text-[#44386B]" dir="ltr">
            <span>Z</span>
            <svg width="14" height="14" viewBox="0 0 32 29" className="inline-block mx-0.5 fill-[#8FAF9B]">
              <path d="M16 29 C16 29 0 18.5 0 8.8 C0 3.5 4 0 8.6 0 C11.8 0 14.4 1.8 16 4.6 C17.6 1.8 20.2 0 23.4 0 C28 0 32 3.5 32 8.8 C32 18.5 16 29 16 29 Z" />
            </svg>
            <svg width="14" height="14" viewBox="0 0 32 29" className="inline-block mx-0.5 fill-[#E8A58D]">
              <path d="M16 29 C16 29 0 18.5 0 8.8 C0 3.5 4 0 8.6 0 C11.8 0 14.4 1.8 16 4.6 C17.6 1.8 20.2 0 23.4 0 C28 0 32 3.5 32 8.8 C32 18.5 16 29 16 29 Z" />
            </svg>
            <span>jdarman.ir</span>
          </div>
        </div>
      </div>

      <div className="container-custom max-w-4xl pt-8 sm:pt-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-[#8e8a96] mb-6 flex-wrap">
          <a href="/" onClick={(e) => { e.preventDefault(); onBack(); }} className="hover:text-[#6D5AA8] cursor-pointer">
            صفحه اصلی
          </a>
          <span>/</span>
          <a href="/tools" onClick={(e) => { e.preventDefault(); onBack(); }} className="hover:text-[#6D5AA8] cursor-pointer">
            سامانه تست‌های آنلاین رابطه
          </a>
          <span>/</span>
          <span className="text-[#6D5AA8] font-bold">{test.title}</span>
        </nav>

        {/* Page Hero Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E5E0EA] shadow-xs mb-8">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <span className="inline-block bg-[#f2eff8] text-[#6D5AA8] text-xs font-black px-3.5 py-1.5 rounded-full border border-[#6D5AA8]/20">
              {test.badge}
            </span>
            <div className="flex items-center gap-4 text-xs font-bold text-[#6F6B78]">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#5e826b]" />
                <span>مدت پاسخگویی: {test.timeEstimate}</span>
              </span>
              <span>{test.questionsCount} سوال بالینی</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-[#44386B] leading-tight mb-4">
            {test.h1}
          </h1>

          <p className="text-xs sm:text-sm text-[#6F6B78] leading-relaxed mb-6 text-justify">
            {test.shortDesc}
          </p>

          <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-[#E5E0EA] flex items-start gap-3 text-xs text-[#5e826b]">
            <ShieldCheck className="w-5 h-5 shrink-0 mt-0.5" />
            <span className="leading-relaxed">
              <strong>اعتبار علمی آزمون:</strong> {test.scientificOrigin}
            </span>
          </div>
        </div>

        {/* Interactive Test Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E5E0EA] shadow-md mb-12">
          {!testCompleted ? (
            /* Question In Progress */
            <div>
              {/* Progress & Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E5E0EA]">
                <div>
                  <span className="text-xs font-black text-[#6D5AA8] block mb-1">
                    سوال {currentQuestionIndex + 1} از {test.questions.length}
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-[#44386B]">
                    {test.title}
                  </h3>
                </div>

                <div className="text-left">
                  <span className="text-xs font-bold text-[#6F6B78] block">پیشرفت تست</span>
                  <span className="text-sm font-black text-[#44386B]" dir="ltr">
                    {Math.round(((currentQuestionIndex + 1) / test.questions.length) * 100)}%
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-[#f2eff8] h-2.5 rounded-full mb-8 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-[#8FAF9B] to-[#6D5AA8] h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${((currentQuestionIndex + 1) / test.questions.length) * 100}%`,
                  }}
                />
              </div>

              {/* Question Text */}
              <div className="mb-8">
                <span className="inline-block text-[11px] font-bold text-[#5e826b] bg-[#edf5f0] px-3 py-1 rounded-full mb-3">
                  موضوع ارزیابی: {currentQuestion.category}
                </span>
                <p className="text-base sm:text-xl font-black text-[#292733] leading-relaxed">
                  {currentQuestion.text}
                </p>
              </div>

              {/* Options */}
              <div className="flex flex-col gap-3 mb-8">
                {currentQuestion.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt.score)}
                    className="w-full p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] hover:bg-[#f2eff8] text-right text-xs sm:text-sm font-extrabold text-[#292733] border border-[#E5E0EA] hover:border-[#6D5AA8] hover:text-[#44386B] transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <span className="flex-1">{opt.label}</span>
                    <span className="w-6 h-6 rounded-full border-2 border-[#E5E0EA] group-hover:border-[#6D5AA8] flex items-center justify-center shrink-0 mr-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-transparent group-hover:bg-[#6D5AA8] transition-colors" />
                    </span>
                  </button>
                ))}
              </div>

              {/* Navigation Back */}
              <div className="flex items-center justify-between text-xs text-[#8e8a96] pt-4 border-t border-[#E5E0EA]">
                <span>پاسخ‌های شما کاملاً محرمانه در مرورگر شما ارزیابی می‌شوند.</span>
                {currentQuestionIndex > 0 && (
                  <button
                    onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
                    className="font-bold text-[#6D5AA8] hover:underline cursor-pointer"
                  >
                    بازگشت به سوال قبلی
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Results View */
            <div>
              {/* Score Dial */}
              <div className="text-center mb-8 pb-8 border-b border-[#E5E0EA]">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#f2eff8] text-[#6D5AA8] mb-4 shadow-inner">
                  <Award className="w-8 h-8" />
                </div>

                <span className="block text-xs font-bold text-[#6F6B78] mb-1">
                  نتیجه نهایی ارزیابی روانشناسی
                </span>

                <h3 className="text-2xl sm:text-3xl font-black text-[#44386B] mb-4">
                  {test.title}
                </h3>

                <div className="inline-flex flex-col items-center justify-center p-6 rounded-3xl bg-[#FAF8F5] border border-[#E5E0EA] shadow-inner mb-4">
                  <span className="text-xs text-[#6F6B78] font-bold mb-1">شاخص کل سلامت رابطه</span>
                  <div className="text-4xl sm:text-5xl font-black text-[#6D5AA8]" dir="ltr">
                    {scorePercentage} <span className="text-2xl font-bold text-[#8FAF9B]">/ ۱۰۰</span>
                  </div>
                  <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-black mt-3 border ${diagnosis.color}`}>
                    {diagnosis.badge}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-black text-[#292733] max-w-xl mx-auto">
                  {diagnosis.level}
                </h4>
              </div>

              {/* Clinical Analysis by Mahnaz Khoini */}
              <div className="bg-[#FAF8F5] p-6 sm:p-8 rounded-2xl border border-[#E5E0EA] mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="/images/mahnaz-khoini-thumb.webp"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/mahnaz-khoini.jpg';
                    }}
                    alt="مهناز خوینی"
                    width={617}
                    height={775}
                    loading="lazy"
                    decoding="async"
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#6D5AA8]"
                  />
                  <div>
                    <h5 className="text-sm font-black text-[#44386B]">
                      تحلیل بالینی مهناز خوینی (روانشناس بالینی و زوج‌درمانگر)
                    </h5>
                    <span className="text-[11px] text-[#6F6B78] font-bold">
                      پروانه نظام روان‌شناسی: ۱۴۱۴۰۸۳
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#292733] leading-relaxed mb-6 text-justify">
                  {diagnosis.summary}
                </p>

                <h6 className="text-xs font-black text-[#44386B] mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5e826b]" />
                  <span>توصیه‌های کاربردی برای آغاز ترمیم رابطه:</span>
                </h6>

                <ul className="space-y-2 mb-2">
                  {diagnosis.advice.map((item, aIdx) => (
                    <li
                      key={aIdx}
                      className="text-xs sm:text-sm text-[#6F6B78] flex items-start gap-2 leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6D5AA8] mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <a
                  href={`https://wa.me/989199087264?text=${encodeURIComponent(
                    `سلام خانم خوینی، در «${test.title}» سایت شرکت کردم. نمره من ${scorePercentage} از ۱۰۰ شد (${diagnosis.level}). برای جلسه تحلیل کارنامه و مشاوره زوج‌درمانی درخواست وقت دارم.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 px-6 bg-[#6D5AA8] hover:bg-[#44386B] text-white rounded-2xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>رزرو نوبت تحلیل کارنامه در واتساپ</span>
                </a>

                <a
                  href={`https://wa.me/?text=${encodeURIComponent(shareText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 px-6 bg-[#edf5f0] hover:bg-[#d8e8dd] text-[#5e826b] rounded-2xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 border border-[#8FAF9B]/40 transition-all"
                >
                  <Share2 className="w-4 h-4" />
                  <span>ارسال این کارنامه به همسر در واتساپ</span>
                </a>
              </div>

              {/* Utility actions */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#E5E0EA] text-xs">
                <button
                  onClick={copyToClipboard}
                  className="font-bold text-[#6F6B78] hover:text-[#6D5AA8] flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{copiedResult ? 'متن کارنامه کپی شد!' : 'کپی متن خلاصه نتایج'}</span>
                </button>

                <button
                  onClick={handleReset}
                  className="font-black text-[#6D5AA8] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>تکرار مجدد این آزمون</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Scientific Background & Dimensions */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E5E0EA] shadow-xs mb-10">
          <h2 className="text-base sm:text-lg font-black text-[#44386B] mb-3 flex items-center gap-2">
            <Brain className="w-5 h-5 text-[#6D5AA8]" />
            <span>مبانی علمی و پیشینه بالینی این آزمون</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#6F6B78] leading-relaxed mb-6 text-justify">
            {test.scientificDescription}
          </p>

          <h3 className="text-xs sm:text-sm font-black text-[#292733] mb-3">
            ابعاد و فاکتورهایی که در این تست سنجیده می‌شوند:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {test.dimensionsTested.map((dim, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E5E0EA] flex items-start gap-2.5 text-xs text-[#44386B]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#5e826b] shrink-0 mt-0.5" />
                <span className="font-bold">{dim}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Test FAQs */}
        {test.faqs.length > 0 && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E5E0EA] shadow-xs mb-10">
            <h2 className="text-base sm:text-lg font-black text-[#44386B] mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#E8A58D]" />
              <span>پرسش‌های متداول درباره {test.title}</span>
            </h2>

            <div className="space-y-3">
              {test.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-[#E5E0EA] overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-4 sm:p-5 text-right flex items-center justify-between gap-4 cursor-pointer bg-[#FAF8F5] hover:bg-[#f2eff8] transition-colors"
                    >
                      <span className="text-xs sm:text-sm font-black text-[#292733]">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#6D5AA8] transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="p-4 sm:p-5 bg-white text-xs sm:text-sm text-[#6F6B78] leading-relaxed border-t border-[#E5E0EA] text-justify">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Other Related Tests (Cross-linking for High Traffic) */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-base sm:text-lg font-black text-[#44386B]">
              سایر تست‌های روانشناسی و ارزیابی رابطه
            </h3>
            <a
              href="/tools"
              onClick={(e) => { e.preventDefault(); onBack(); }}
              className="text-xs font-bold text-[#6D5AA8] hover:underline cursor-pointer"
            >
              مشاهده همه تست‌ها
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherTests.map((ot) => (
              <a
                key={ot.id}
                href={`/tests/${ot.slug}`}
                onClick={(e) => { e.preventDefault(); onSelectOtherTest(ot.slug); }}
                className="p-5 rounded-2xl bg-white border border-[#E5E0EA] hover:border-[#6D5AA8] hover:shadow-md transition-all text-right flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <span className="text-[10px] font-black text-[#6D5AA8] bg-[#f2eff8] px-2.5 py-1 rounded-full mb-2 inline-block">
                    {ot.badge}
                  </span>
                  <h4 className="text-xs sm:text-sm font-black text-[#292733] group-hover:text-[#6D5AA8] mb-2 leading-snug">
                    {ot.title}
                  </h4>
                  <p className="text-[11px] text-[#6F6B78] line-clamp-2 leading-relaxed mb-3">
                    {ot.shortDesc}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[#E5E0EA] text-xs font-bold text-[#6D5AA8] w-full">
                  <span>شروع این تست</span>
                  <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Consultation Callout */}
        <div className="bg-gradient-to-r from-[#44386B] to-[#6D5AA8] rounded-3xl p-6 sm:p-10 text-white text-center shadow-lg">
          <h3 className="text-xl sm:text-2xl font-black mb-2">
            تمایل دارید کارنامه رابطه شما توسط متخصص بررسی شود؟
          </h3>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-6 max-w-xl mx-auto">
            خانم مهناز خوینی در جلسات بالینی ارزیابی اولیه، ریشه‌های دقیق تله‌های دلبستگی و الگوهای تکراری تعارضات شما را کالبدشکافی کرده و برنامه گام‌به‌گام ارائه می‌دهند.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onNavigateContact}
              className="px-7 py-3.5 bg-white text-[#44386B] rounded-full font-black text-xs sm:text-sm shadow hover:bg-[#FAF8F5] transition-all cursor-pointer"
            >
              هماهنگی وقت مشاوره زوجی
            </button>
            <a
              href="https://wa.me/989199087264?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D9%85%D8%B4%D8%A7%D9%88%D8%B1%D9%87%20%D8%AA%D8%AD%D9%84%DB%8C%D9%84%20%D8%AA%D8%B3%D8%AA%E2%80%8C%D9%87%D8%A7%DB%8C%20%D8%B1%D8%A7%D8%A8%D8%B7%D9%87%20%D9%BE%DB%8C%D8%A7%D9%85%20%D9%85%DB%8C%E2%80%8C%D8%AF%D9%87%D9%85."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-white/20 hover:bg-white/30 text-white rounded-full font-bold text-xs sm:text-sm backdrop-blur-xs transition-all"
            >
              پیام مستقیم به پذیرش واتساپ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
