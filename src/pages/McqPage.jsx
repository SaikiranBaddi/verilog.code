import React, { useState, useMemo } from 'react';
import { HelpCircle, CheckCircle2, XCircle, ArrowRight, RotateCcw, Award, Shuffle, Filter, Check } from 'lucide-react';
import SEOHead from '../components/common/SEOHead';
import AdPlaceholder from '../components/common/AdPlaceholder';
import { mcqsData } from '../data/mcqsData';

export const McqPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);

  const categories = ['All', 'Verilog', 'Digital Electronics', 'RTL Design', 'VLSI', 'SystemVerilog', 'FPGA', 'Computer Architecture', 'Semiconductor'];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Hard', 'Interview'];

  const filteredQuestions = useMemo(() => {
    return mcqsData.filter(q => {
      const matchCat = selectedCategory === 'All' || q.category.toLowerCase().includes(selectedCategory.toLowerCase());
      const matchDiff = selectedDifficulty === 'All' || q.difficulty.toLowerCase() === selectedDifficulty.toLowerCase();
      return matchCat && matchDiff;
    });
  }, [selectedCategory, selectedDifficulty]);

  const currentQuestion = filteredQuestions[currentIndex] || filteredQuestions[0];

  const handleSelectCategory = (cat) => {
    setSelectedCategory(cat);
    setCurrentIndex(0);
    setSelectedOption(null);
    setSubmitted(false);
    setScore(0);
    setAnsweredCount(0);
  };

  const handleSelectDifficulty = (diff) => {
    setSelectedDifficulty(diff);
    setCurrentIndex(0);
    setSelectedOption(null);
    setSubmitted(false);
    setScore(0);
    setAnsweredCount(0);
  };

  const handleSelectOption = (idx) => {
    if (submitted) return;
    setSelectedOption(idx);
  };

  const handleSubmit = () => {
    if (selectedOption === null || submitted) return;
    setSubmitted(true);
    setAnsweredCount(prev => prev + 1);
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setSubmitted(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setSelectedOption(null);
      setSubmitted(false);
    }
  };

  const handleRandom = () => {
    if (filteredQuestions.length === 0) return;
    const randomIdx = Math.floor(Math.random() * filteredQuestions.length);
    setCurrentIndex(randomIdx);
    setSelectedOption(null);
    setSubmitted(false);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setSubmitted(false);
    setScore(0);
    setAnsweredCount(0);
  };

  return (
    <>
      <SEOHead 
        title={`Interactive ${mcqsData.length}+ VLSI & Verilog MCQs Practice Platform`} 
        description="Practice 1000+ multiple-choice questions on Verilog HDL, RTL design, digital electronics, setup/hold timing, CMOS, and SystemVerilog."
      />

      <div className="py-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400">Interactive MCQ Engine</span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-1 mb-4">
              Verilog & VLSI MCQs ({mcqsData.length}+ Questions)
            </h1>
            <p className="text-slate-300 text-base sm:text-lg">
              Practice multiple-choice questions with instant scoring, feedback, and step-by-step explanations.
            </p>
          </div>
        </div>
      </div>

      <div className="py-12 bg-slate-50 dark:bg-slate-950 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

          {/* Filters Bar */}
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">Category:</span>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleSelectCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      selectedCategory === cat
                        ? 'bg-purple-600 text-white shadow-sm'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-1">Difficulty:</span>
                {difficulties.map((diff) => (
                  <button
                    key={diff}
                    onClick={() => handleSelectDifficulty(diff)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                      selectedDifficulty === diff
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {diff}
                  </button>
                ))}
              </div>

              <button
                onClick={handleRandom}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 transition-colors"
              >
                <Shuffle className="w-3.5 h-3.5 text-purple-500" />
                <span>Random Question</span>
              </button>
            </div>
          </div>

          <AdPlaceholder slot="betweenResources" />

          {/* Quiz Card */}
          {filteredQuestions.length === 0 ? (
            <div className="p-12 text-center text-slate-400 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
              No MCQs available in this filtered category/difficulty combination.
            </div>
          ) : (
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg space-y-6">
              
              {/* Question Header Progress */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-purple-600 dark:text-purple-400">
                  <HelpCircle className="w-4 h-4" />
                  <span>Question {currentIndex + 1} of {filteredQuestions.length}</span>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono font-bold">
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {currentQuestion.difficulty}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    Score: {score} / {answeredCount}
                  </span>
                </div>
              </div>

              {/* Question Text */}
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
                {currentQuestion.question}
              </h2>

              {/* Options Grid */}
              <div className="space-y-3 pt-2">
                {currentQuestion.options.map((opt, oIdx) => {
                  let btnStyle = "border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 text-slate-800 dark:text-slate-200 hover:border-purple-500/50";
                  
                  if (selectedOption === oIdx) {
                    btnStyle = "border-purple-500 bg-purple-500/10 text-purple-600 dark:text-purple-300 font-bold ring-1 ring-purple-500";
                  }

                  if (submitted) {
                    if (oIdx === currentQuestion.correctAnswer) {
                      btnStyle = "border-emerald-500 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 font-bold ring-2 ring-emerald-500/50";
                    } else if (selectedOption === oIdx) {
                      btnStyle = "border-rose-500 bg-rose-500/15 text-rose-700 dark:text-rose-300 font-bold";
                    }
                  }

                  return (
                    <button
                      key={oIdx}
                      disabled={submitted}
                      onClick={() => handleSelectOption(oIdx)}
                      className={`w-full flex items-center justify-between p-4 rounded-xl border text-left text-xs sm:text-sm transition-all ${btnStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-lg bg-slate-200 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 font-mono text-xs flex items-center justify-center font-bold shrink-0">
                          {String.fromCharCode(65 + oIdx)}
                        </span>
                        <span className="leading-snug">{opt}</span>
                      </div>

                      {submitted && oIdx === currentQuestion.correctAnswer && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 ml-2" />
                      )}
                      {submitted && selectedOption === oIdx && oIdx !== currentQuestion.correctAnswer && (
                        <XCircle className="w-5 h-5 text-rose-500 shrink-0 ml-2" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex items-center justify-between gap-4">
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 disabled:opacity-40 text-xs font-bold text-slate-700 dark:text-slate-300"
                >
                  Previous
                </button>

                {!submitted ? (
                  <button
                    onClick={handleSubmit}
                    disabled={selectedOption === null}
                    className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-40 text-white text-xs font-bold transition-all shadow-md"
                  >
                    Submit Answer
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    disabled={currentIndex === filteredQuestions.length - 1}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white text-xs font-bold transition-all shadow-md"
                  >
                    <span>Next Question</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Step-by-Step Explanation Accordion */}
              {submitted && (
                <div className="p-5 rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-950 dark:text-blue-100 space-y-2 animate-fade-in">
                  <div className="font-bold text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    Step-by-Step Explanation:
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                    {currentQuestion.explanation}
                  </p>
                </div>
              )}

            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default McqPage;
