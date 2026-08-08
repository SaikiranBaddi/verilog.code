import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, ArrowRight, RotateCcw, Award } from 'lucide-react';
import SEOHead from '../components/common/SEOHead';
import AdPlaceholder from '../components/common/AdPlaceholder';
import { mcqsData } from '../data/mcqsData';

export const McqPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const categories = ['All', 'VLSI', 'Verilog', 'Digital Electronics', 'FPGA', 'Semiconductor'];

  const filteredQuestions = mcqsData.filter(q => selectedCategory === 'All' || q.category === selectedCategory);
  const currentQuestion = filteredQuestions[currentIndex] || filteredQuestions[0];

  const handleSelectCategory = (cat) => {
    setSelectedCategory(cat);
    setCurrentIndex(0);
    setSelectedOption(null);
    setSubmitted(false);
    setScore(0);
  };

  const handleSelectOption = (idx) => {
    if (submitted) return;
    setSelectedOption(idx);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    setSubmitted(true);
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

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setSubmitted(false);
    setScore(0);
  };

  return (
    <>
      <SEOHead 
        title="Interactive VLSI & Verilog MCQ Practice Platform" 
        description="Test your semiconductor knowledge with interactive multiple-choice questions on Verilog HDL, setup/hold time, logic gates, and FPGA architecture."
      />

      <div className="py-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400">Interactive Quiz</span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-1 mb-4">
              Verilog & VLSI MCQs Practice
            </h1>
            <p className="text-slate-300 text-base sm:text-lg">
              Practice multiple-choice questions with instant scoring, feedback, and step-by-step explanations.
            </p>
          </div>
        </div>
      </div>

      <div className="py-12 bg-slate-50 dark:bg-slate-950 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          {/* Category Selector Tabs */}
          <div className="flex flex-wrap gap-2 p-2 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleSelectCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quiz Card */}
          {filteredQuestions.length === 0 ? (
            <div className="p-12 text-center text-slate-400 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
              No MCQs available in this category yet.
            </div>
          ) : (
            <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg space-y-6">
              
              {/* Question Header Progress */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-purple-600 dark:text-purple-400">
                  <HelpCircle className="w-4 h-4" />
                  <span>Question {currentIndex + 1} of {filteredQuestions.length}</span>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono font-bold">
                  <span className="text-slate-500">Difficulty: <span className="text-slate-900 dark:text-white">{currentQuestion.difficulty}</span></span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    Score: {score}
                  </span>
                </div>
              </div>

              {/* Question Text */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
                {currentQuestion.question}
              </h2>

              {/* Options Grid */}
              <div className="space-y-3 pt-2">
                {currentQuestion.options.map((opt, oIdx) => {
                  let btnStyle = "border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 text-slate-800 dark:text-slate-200 hover:border-purple-500/50";
                  
                  if (selectedOption === oIdx) {
                    btnStyle = "border-purple-500 bg-purple-500/10 text-purple-600 dark:text-purple-300 font-bold";
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
                      className={`w-full flex items-center justify-between p-4 rounded-xl border text-left text-sm transition-all ${btnStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-lg bg-slate-200 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 font-mono text-xs flex items-center justify-center font-bold">
                          {String.fromCharCode(65 + oIdx)}
                        </span>
                        <span>{opt}</span>
                      </div>

                      {submitted && oIdx === currentQuestion.correctAnswer && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      )}
                      {submitted && selectedOption === oIdx && oIdx !== currentQuestion.correctAnswer && (
                        <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Submit & Navigation Buttons */}
              <div className="pt-4 flex items-center justify-between">
                {!submitted ? (
                  <button
                    disabled={selectedOption === null}
                    onClick={handleSubmit}
                    className="px-6 py-3 rounded-xl font-bold text-sm bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white shadow-md transition-all"
                  >
                    Submit Answer
                  </button>
                ) : (
                  <div className="w-full flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500">
                      {selectedOption === currentQuestion.correctAnswer ? (
                        <span className="text-emerald-500 font-bold">✓ Correct Answer!</span>
                      ) : (
                        <span className="text-rose-500 font-bold">✗ Incorrect Answer</span>
                      )}
                    </span>

                    {currentIndex < filteredQuestions.length - 1 ? (
                      <button
                        onClick={handleNext}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-blue-600 hover:bg-blue-500 text-white shadow-md transition-all"
                      >
                        <span>Next Question</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        onClick={handleRestart}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-slate-800 text-white hover:bg-slate-700 transition-all"
                      >
                        <RotateCcw className="w-4 h-4" />
                        <span>Restart Quiz</span>
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* Explanation Box */}
              {submitted && (
                <div className="p-5 rounded-xl border border-blue-500/20 bg-blue-500/10 text-xs sm:text-sm text-blue-950 dark:text-blue-200 animate-in fade-in">
                  <div className="font-bold text-blue-600 dark:text-blue-400 mb-1">Detailed Explanation:</div>
                  <p className="leading-relaxed">{currentQuestion.explanation}</p>
                </div>
              )}

            </div>
          )}

          <AdPlaceholder slot="bottom" />

        </div>
      </div>
    </>
  );
};

export default McqPage;
