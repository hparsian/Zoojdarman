import React, { useState, useEffect } from 'react';
import { getTestBySlug, testsData } from '../data/testsData';
import { registerFaqSchema } from '../seo';
import { InnerPageTopBar } from './InnerPageTopBar';
import { ClinicalTrustFooter } from './ClinicalTrustFooter';
import {
  ShieldCheck,
  Brain,
  CheckCircle2,
  Clock,
  RotateCcw,
  Copy,
  Check,
  ChevronDown,
  Award,
  BookOpen,
  ChevronLeft,
  AlertCircle,
} from 'lucide-react';

interface SingleTestViewProps {
  testSlug: string;
  onBack: () => void;
  onNavigateHome?: () => void;
  onSelectOtherTest: (testSlugOrId: string) => void;
  onNavigateContact: () => void;
}

export const SingleTestView: React.FC<SingleTestViewProps> = ({
  testSlug,
  onBack,
  onNavigateHome,
  onSelectOtherTest,
  onNavigateContact,
}) => {
  const test = getTestBySlug(testSlug);
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
  }, [testSlug]);

  useEffect(() => {
    if (!test?.faqs || test.faqs.length === 0) return;
    return registerFaqSchema(test.faqs);
  }, [test]);

  if (!test) {
    return (
      <div className="min-h-screen bg-[#F4F1EC] flex flex-col items-center justify-center p-6 text-center">
        <AlertCircle className="w-14 h-14 text-[#344A42] mb-4" />
        <h1 className="text-2xl font-extrabold text-[#292D2A] mb-2">آزمون مورد نظر یافت نشد</h1>
        <p className="text-sm text-[#555650] mb-6">
          آدرس آزمون تغییر کرده یا به صفحه دیگری منتقل شده است.
        </p>
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-3 bg-[#344A42] hover:bg-[#273932] text-[#FCFBF8] rounded-lg font-semibold text-xs cursor-pointer"
        >
          مشاهده سایر خودسنجی‌های رابطه
        </button>
      </div>
    );
  }

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

  const totalScore = Object.values(selectedAnswers).reduce((a, b) => a + b, 0);
  const maxPossible = test.questions.length * 4;
  const scorePercentage = Math.round((totalScore / maxPossible) * 100);
  const diagnosis = test.getDiagnosis(scorePercentage);

  const shareText = `خلاصه خودسنجی «${test.title}»:\nشاخص: ${scorePercentage} از ۱۰۰ (${diagnosis.level})\nتوضیح آموزشی: ${diagnosis.summary}\nلینک: https://zoojdarman.ir/tests/${test.slug}`;

  const copyToClipboard = () => {
    navigator.clipboard?.writeText(shareText);
    setCopiedResult(true);
    setTimeout(() => setCopiedResult(false), 3000);
  };

  const otherTests = Object.values(testsData).filter((t) => t.id !== test.id);

  return (
    <div className="bg-[#F4F1EC] min-h-screen pb-24">
      <InnerPageTopBar
        onBack={onBack}
        backLabel="سامانه خودسنجی‌ها"
        onNavigateContact={onNavigateContact}
        maxWidthClass="max-w-4xl"
      />

      <div className="container-custom max-w-4xl pt-8 sm:pt-12">
        {/* Breadcrumbs (properly routes Home to / and Tools to /tools) */}
        <nav className="flex items-center gap-2 text-xs text-[#6E6E68] mb-6 flex-wrap">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigateHome) onNavigateHome();
              else onBack();
            }}
            className="hover:text-[#344A42]"
          >
            صفحه اصلی
          </a>
          <span>/</span>
          <a
            href="/tools"
            onClick={(e) => {
              e.preventDefault();
              onBack();
            }}
            className="hover:text-[#344A42]"
          >
            خودسنجی‌های آنلاین رابطه
          </a>
          <span>/</span>
          <span className="text-[#344A42] font-semibold">{test.title}</span>
        </nav>

        {/* Page Hero Box */}
        <div className="bg-[#FCFBF8] rounded-2xl p-6 sm:p-9 border border-[#E5E0D8] mb-8">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-medium text-[#3D5E4E] mb-3">
            <span>{test.badge}</span>
            <span className="flex items-center gap-1.5 text-[#555650]">
              <Clock className="w-3.5 h-3.5" />
              <span>
                {test.questionsCount} پرسش · {test.timeEstimate}
              </span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#292D2A] leading-snug mb-3">
            {test.h1}
          </h1>

          <p className="text-sm text-[#555650] leading-relaxed mb-5">
            {test.shortDesc}
          </p>

          <div className="p-4 bg-[#EDF2EE] rounded-xl border border-[#D3E0D7] flex items-start gap-3 text-xs text-[#344A42]">
            <ShieldCheck className="w-5 h-5 shrink-0 mt-0.5" />
            <span className="leading-relaxed">
              <strong>مبنای علمی:</strong> {test.scientificOrigin} — این ابزار جنبه آموزشی و
              خودآگاهی دارد و جایگزین تشخیص یا جلسه بالینی نیست.
            </span>
          </div>
        </div>

        {/* Interactive Test Card */}
        <div className="bg-[#FCFBF8] rounded-2xl p-6 sm:p-10 border border-[#CFC7BA] mb-12">
          {!testCompleted ? (
            <div>
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-[#E5E0D8]">
                <div>
                  <span className="text-xs font-semibold text-[#3D5E4E] block mb-1">
                    پرسش {currentQuestionIndex + 1} از {test.questions.length}
                  </span>
                  <h2 className="text-base sm:text-lg font-bold text-[#292D2A]">
                    {test.title}
                  </h2>
                </div>

                <div className="text-left">
                  <span className="text-xs text-[#6E6E68] block">پیشرفت</span>
                  <span className="text-sm font-bold text-[#344A42]" dir="ltr">
                    {Math.round(((currentQuestionIndex + 1) / test.questions.length) * 100)}%
                  </span>
                </div>
              </div>

              <div className="w-full bg-[#ECE7DF] h-2 rounded-full mb-8 overflow-hidden">
                <div
                  className="bg-[#344A42] h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${((currentQuestionIndex + 1) / test.questions.length) * 100}%`,
                  }}
                />
              </div>

              <div className="mb-8">
                <span className="inline-block text-xs font-semibold text-[#3D5E4E] mb-2">
                  محور: {currentQuestion.category}
                </span>
                <p className="text-base sm:text-xl font-bold text-[#292D2A] leading-relaxed">
                  {currentQuestion.text}
                </p>
              </div>

              <div className="flex flex-col gap-3 mb-8">
                {currentQuestion.options.map((opt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectOption(opt.score)}
                    className="w-full p-4 sm:p-5 rounded-xl bg-[#F4F1EC] hover:bg-[#EDF2EE] text-right text-xs sm:text-sm font-semibold text-[#292D2A] border border-[#E5E0D8] hover:border-[#8FAE9B] transition-colors flex items-center justify-between group cursor-pointer"
                  >
                    <span className="flex-1">{opt.label}</span>
                    <span className="w-5 h-5 rounded-full border border-[#CFC7BA] group-hover:border-[#344A42] shrink-0 mr-3" />
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-[#6E6E68] pt-4 border-t border-[#E5E0D8]">
                <span>پاسخ‌ها فقط در مرورگر شما پردازش می‌شوند و جایی ذخیره نمی‌گردند.</span>
                {currentQuestionIndex > 0 && (
                  <button
                    type="button"
                    onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
                    className="font-semibold text-[#344A42] hover:underline cursor-pointer shrink-0 mr-3"
                  >
                    پرسش قبلی
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div>
              <div className="text-center mb-8 pb-8 border-b border-[#E5E0D8]">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#EDF2EE] text-[#344A42] mb-4">
                  <Award className="w-7 h-7" />
                </div>

                <span className="block text-xs font-medium text-[#6E6E68] mb-1">
                  جمع‌بندی آموزشی خودسنجی
                </span>

                <h3 className="text-2xl font-extrabold text-[#292D2A] mb-5">
                  {test.title}
                </h3>

                <div className="inline-flex flex-col items-center justify-center p-6 rounded-2xl bg-[#F4F1EC] border border-[#E5E0D8] mb-4">
                  <span className="text-xs text-[#555650] font-semibold mb-1">شاخص تجمیعی</span>
                  <div className="text-4xl font-extrabold text-[#344A42]" dir="ltr">
                    {scorePercentage} <span className="text-xl font-semibold text-[#6E6E68]">/ ۱۰۰</span>
                  </div>
                  <span className="text-xs font-bold text-[#3D5E4E] mt-2">
                    {diagnosis.badge}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-[#292D2A] max-w-xl mx-auto">
                  {diagnosis.level}
                </h4>
              </div>

              <div className="bg-[#F4F1EC] p-6 sm:p-8 rounded-xl border border-[#E5E0D8] mb-8">
                <h5 className="text-sm font-bold text-[#344A42] mb-2">
                  تفسیر راهنما (مهناز خوینی · پروانه ۱۴۱۴۰۸۳)
                </h5>
                <p className="text-xs sm:text-sm text-[#292D2A] leading-[1.9] mb-5 text-justify">
                  {diagnosis.summary}
                </p>

                <h6 className="text-xs font-bold text-[#344A42] mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3D5E4E]" />
                  <span>گام‌های پیشنهادی برای گفت‌وگوی بعدی:</span>
                </h6>

                <ul className="space-y-2 mb-3">
                  {diagnosis.advice.map((item, aIdx) => (
                    <li
                      key={aIdx}
                      className="text-xs sm:text-sm text-[#555650] flex items-start gap-2 leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#344A42] mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-[11px] text-[#6E6E68] pt-3 border-t border-[#E5E0D8]">
                  توجه: این نتیجه جایگزین تشخیص روان‌شناسی نیست و برای حفظ محرمانگی، نمره شما
                  به‌صورت خودکار به هیچ فرد یا سروری ارسال نشده است.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <button
                  type="button"
                  onClick={onNavigateContact}
                  className="flex-1 min-w-[220px] py-3.5 px-6 bg-[#344A42] hover:bg-[#273932] text-[#FCFBF8] rounded-lg font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  رزرو جلسه گفت‌وگو و ارزیابی بالینی
                </button>

                <button
                  type="button"
                  onClick={copyToClipboard}
                  className="py-3.5 px-5 bg-[#F4F1EC] hover:bg-[#ECE7DF] text-[#344A42] border border-[#CFC7BA] rounded-lg font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  {copiedResult ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedResult ? 'خلاصه کپی شد' : 'کپی خلاصه در کلیپ‌بورد'}</span>
                </button>
              </div>

              <div className="flex justify-end pt-3 border-t border-[#E5E0D8] text-xs">
                <button
                  type="button"
                  onClick={handleReset}
                  className="font-semibold text-[#344A42] hover:underline flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>پاسخ‌دهی مجدد</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Scientific Background & Dimensions */}
        <div className="bg-[#FCFBF8] rounded-2xl p-6 sm:p-9 border border-[#E5E0D8] mb-10">
          <h2 className="text-base sm:text-lg font-bold text-[#292D2A] mb-3 flex items-center gap-2">
            <Brain className="w-5 h-5 text-[#344A42]" />
            <span>مبانی علمی این خودسنجی</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#555650] leading-[1.9] mb-6 text-justify">
            {test.scientificDescription}
          </p>

          <h3 className="text-xs sm:text-sm font-bold text-[#292D2A] mb-3">
            محورهای مورد بررسی:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {test.dimensionsTested.map((dim, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#F4F1EC] border border-[#E5E0D8] flex items-start gap-2.5 text-xs text-[#292D2A]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#3D5E4E] shrink-0 mt-0.5" />
                <span className="font-medium">{dim}</span>
              </div>
            ))}
          </div>
        </div>

        {test.detailedGuideHtml && (
          <article className="bg-[#FCFBF8] rounded-2xl p-6 sm:p-10 border border-[#E5E0D8] mb-10">
            <div
              className="article-rendered-content"
              dangerouslySetInnerHTML={{ __html: test.detailedGuideHtml }}
            />
          </article>
        )}

        {test.faqs.length > 0 && (
          <div className="bg-[#FCFBF8] rounded-2xl p-6 sm:p-9 border border-[#E5E0D8] mb-10">
            <h2 className="text-base sm:text-lg font-bold text-[#292D2A] mb-5 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#344A42]" />
              <span>پرسش‌های متداول درباره {test.title}</span>
            </h2>

            <div className="space-y-3">
              {test.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-[#E5E0D8] overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-4 sm:p-5 text-right flex items-center justify-between gap-4 cursor-pointer bg-[#F4F1EC] hover:bg-[#ECE7DF] transition-colors"
                    >
                      <span className="text-xs sm:text-sm font-bold text-[#292D2A]">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#344A42] transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="p-4 sm:p-5 bg-[#FCFBF8] text-xs sm:text-sm text-[#555650] leading-[1.9] border-t border-[#E5E0D8] text-justify">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <ClinicalTrustFooter context="test" />

        <div>
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-base sm:text-lg font-bold text-[#292D2A]">
              سایر ابزارهای خودسنجی رابطه
            </h3>
            <a
              href="/tools"
              onClick={(e) => {
                e.preventDefault();
                onBack();
              }}
              className="text-xs font-semibold text-[#344A42] hover:underline"
            >
              مشاهده همه
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherTests.map((ot) => (
              <a
                key={ot.id}
                href={`/tests/${ot.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectOtherTest(ot.slug);
                }}
                className="p-5 rounded-xl bg-[#FCFBF8] border border-[#E5E0D8] hover:border-[#8FAE9B] transition-colors text-right flex flex-col justify-between group"
              >
                <div>
                  <span className="text-xs font-medium text-[#6E6E68] mb-2 block">
                    {ot.badge}
                  </span>
                  <h4 className="text-sm font-bold text-[#292D2A] group-hover:text-[#344A42] mb-2 leading-snug">
                    {ot.title}
                  </h4>
                  <p className="text-xs text-[#555650] line-clamp-2 leading-relaxed mb-3">
                    {ot.shortDesc}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[#E5E0D8] text-xs font-semibold text-[#344A42]">
                  <span>شروع خودسنجی</span>
                  <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
