import React, { useState } from 'react';
import { Search, Briefcase, ChevronDown, ChevronUp, Lightbulb, Code, Eye, EyeOff, CheckCircle2, AlertTriangle } from 'lucide-react';
import SEOHead from '../components/common/SEOHead';
import CodeBlock from '../components/common/CodeBlock';
import AdPlaceholder from '../components/common/AdPlaceholder';
import { interviewData } from '../data/interviewData';

export const InterviewPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [practiceMode, setPracticeMode] = useState(false);
  const [revealedIds, setRevealedIds] = useState([]);
  const [expandedIds, setExpandedIds] = useState([interviewData[0]?.id]);

  const categories = [
    'All', 
    'Verilog', 
    'Digital Electronics', 
    'RTL Design',
    'VLSI', 
    'SystemVerilog', 
    'FPGA', 
    'Computer Architecture'
  ];

  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced', 'Expert'];

  const filteredQuestions = interviewData.filter(q => {
    const matchCategory = selectedCategory === 'All' || q.category.toLowerCase().includes(selectedCategory.toLowerCase()) || q.topic.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchDiff = selectedDifficulty === 'All' || q.difficulty.toLowerCase() === selectedDifficulty.toLowerCase();
    const matchSearch = searchQuery === '' || 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      q.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchDiff && matchSearch;
  });

  const toggleExpand = (id) => {
    if (expandedIds.includes(id)) {
      setExpandedIds(expandedIds.filter(i => i !== id));
    } else {
      setExpandedIds([...expandedIds, id]);
    }
  };

  const toggleReveal = (id) => {
    if (revealedIds.includes(id)) {
      setRevealedIds(revealedIds.filter(i => i !== id));
    } else {
      setRevealedIds([...revealedIds, id]);
    }
  };

  return (
    <>
      <SEOHead 
        title={`VLSI & Verilog Interview Masterclass (${interviewData.length}+ Questions)`} 
        description="Top 500+ semiconductor technical interview questions and answers on Setup/Hold time, Blocking vs Non-Blocking assignments, CDC synchronizers, and CMOS."
      />

      <div className="py-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Career & Interview Prep</span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-1 mb-4">
              VLSI & RTL Interview Masterclass ({interviewData.length}+ Q&As)
            </h1>
            <p className="text-slate-300 text-base sm:text-lg">
              Frequently asked semiconductor technical interview questions, code snippets, hardware diagrams, and pro tips for top silicon chip companies.
            </p>
          </div>
        </div>
      </div>

      <div className="py-12 bg-slate-50 dark:bg-slate-950 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          {/* Search & Category Filter */}
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 w-full">
                <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search interview questions by keyword (Metastability, Setup, FIFO)..."
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-medium border border-transparent"
                />
              </div>

              {/* Practice Flashcard Mode Toggle */}
              <button
                onClick={() => setPracticeMode(!practiceMode)}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold transition-all border shrink-0 ${
                  practiceMode
                    ? 'bg-amber-500/20 text-amber-400 border-amber-500/40 shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                }`}
              >
                {practiceMode ? <EyeOff className="w-4 h-4 text-amber-400" /> : <Eye className="w-4 h-4 text-slate-400" />}
                <span>{practiceMode ? 'Practice Mode (Answers Hidden)' : 'Browse Mode (Answers Shown)'}</span>
              </button>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2 self-center">Category:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Difficulty Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">Level:</span>
              {difficulties.map((diff) => (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(diff)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    selectedDifficulty === diff
                      ? 'bg-purple-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {diff}
                </button>
              ))}
            </div>
          </div>

          <AdPlaceholder slot="betweenResources" />

          {/* Questions Accordion List */}
          <div className="space-y-4">
            {filteredQuestions.length === 0 ? (
              <div className="py-12 text-center text-slate-400 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                No interview questions match your search filters.
              </div>
            ) : (
              filteredQuestions.map((q, idx) => {
                const isExpanded = expandedIds.includes(q.id);
                const isRevealed = revealedIds.includes(q.id);
                const showAnswer = !practiceMode || isRevealed;

                return (
                  <div key={q.id} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden transition-all">
                    
                    {/* Header */}
                    <button
                      onClick={() => toggleExpand(q.id)}
                      className="w-full flex items-start justify-between p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                    >
                      <div className="space-y-1.5 pr-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded">
                            {q.topic}
                          </span>
                          <span className="text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
                            {q.difficulty}
                          </span>
                          <span className="text-xs text-slate-400 font-mono">Q{idx + 1}</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                          {q.question}
                        </h3>
                      </div>

                      <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 shrink-0">
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </div>
                    </button>

                    {/* Answer Detail */}
                    {isExpanded && (
                      <div className="p-6 pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-5 text-sm text-slate-700 dark:text-slate-300">
                        
                        {practiceMode && !isRevealed ? (
                          <div className="p-6 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/30 text-center space-y-3">
                            <p className="text-xs text-slate-500 font-medium">Practice Mode: Try answering mentally before revealing the solution!</p>
                            <button
                              onClick={() => toggleReveal(q.id)}
                              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-sm"
                            >
                              <Eye className="w-4 h-4" />
                              <span>Reveal Answer & Explanation</span>
                            </button>
                          </div>
                        ) : (
                          <>
                            <div>
                              <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1 flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                <span>Answer Summary</span>
                              </h4>
                              <p className="leading-relaxed text-slate-800 dark:text-slate-200">{q.answer}</p>
                            </div>

                            {q.explanation && (
                              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 text-xs sm:text-sm">
                                <span className="font-bold text-slate-900 dark:text-white block mb-1">Technical Deep Dive & Formulas:</span>
                                <p className="leading-relaxed whitespace-pre-line text-slate-600 dark:text-slate-300">{q.explanation}</p>
                              </div>
                            )}

                            {q.codeSnippet && (
                              <CodeBlock code={q.codeSnippet} language="verilog" filename="interview_solution.v" />
                            )}

                            {q.wrongAnswer && (
                              <div className="p-4 rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-900 dark:text-rose-200 text-xs sm:text-sm">
                                <span className="font-bold text-rose-600 dark:text-rose-400 block mb-1">Common Candidate Trap to Avoid:</span>
                                <p className="leading-relaxed">{q.wrongAnswer}</p>
                              </div>
                            )}

                            {q.tip && (
                              <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200 text-xs sm:text-sm flex items-start gap-3">
                                <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                                <div>
                                  <span className="font-bold text-amber-600 dark:text-amber-400 block mb-0.5">Pro Semiconductor Interview Tip:</span>
                                  <p className="leading-relaxed">{q.tip}</p>
                                </div>
                              </div>
                            )}

                            {q.followUp && (
                              <div className="p-4 rounded-xl border border-purple-500/30 bg-purple-500/10 text-purple-900 dark:text-purple-200 text-xs sm:text-sm">
                                <span className="font-bold text-purple-600 dark:text-purple-400 block mb-1">Expected Follow-Up Question:</span>
                                <p className="leading-relaxed font-semibold">{q.followUp}</p>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default InterviewPage;
