import React, { useState } from 'react';
import { Search, Briefcase, ChevronDown, ChevronUp, Lightbulb, Code } from 'lucide-react';
import SEOHead from '../components/common/SEOHead';
import CodeBlock from '../components/common/CodeBlock';
import AdPlaceholder from '../components/common/AdPlaceholder';
import { interviewData } from '../data/interviewData';

export const InterviewPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedIds, setExpandedIds] = useState([interviewData[0]?.id]);

  const categories = [
    'All', 
    'VLSI Interview Questions', 
    'Verilog Interview Questions', 
    'Digital Electronics Questions', 
    'FPGA Questions', 
    'Semiconductor Questions'
  ];

  const filteredQuestions = interviewData.filter(q => {
    const matchCategory = selectedCategory === 'All' || q.category === selectedCategory || q.topic.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchSearch = searchQuery === '' || 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      q.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const toggleExpand = (id) => {
    if (expandedIds.includes(id)) {
      setExpandedIds(expandedIds.filter(i => i !== id));
    } else {
      setExpandedIds([...expandedIds, id]);
    }
  };

  return (
    <>
      <SEOHead 
        title="VLSI & Verilog Technical Interview Questions & Answers" 
        description="Top technical interview questions and solutions on Setup/Hold time, Blocking vs Non-Blocking assignments, CDC synchronizers, and CMOS design."
      />

      <div className="py-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Career Preparation</span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-1 mb-4">
              VLSI & RTL Interview Prep
            </h1>
            <p className="text-slate-300 text-base sm:text-lg">
              Frequently asked semiconductor interview questions, code snippets, and pro tips for top hardware companies.
            </p>
          </div>
        </div>
      </div>

      <div className="py-12 bg-slate-50 dark:bg-slate-950 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          {/* Search & Category Filter */}
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-4">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search interview questions by keyword (e.g. Metastability, Setup, FIFO)..."
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-medium border border-transparent"
              />
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
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
          </div>

          <AdPlaceholder slot="betweenResources" />

          {/* Questions Accordion List */}
          <div className="space-y-4">
            {filteredQuestions.length === 0 ? (
              <div className="py-12 text-center text-slate-400 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                No interview questions match your search.
              </div>
            ) : (
              filteredQuestions.map((q, idx) => {
                const isExpanded = expandedIds.includes(q.id);
                return (
                  <div key={q.id} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden transition-all">
                    
                    {/* Header */}
                    <button
                      onClick={() => toggleExpand(q.id)}
                      className="w-full flex items-start justify-between p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                    >
                      <div className="space-y-1.5 pr-4">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
                            {q.topic}
                          </span>
                          <span className="text-xs text-slate-400">Q{idx + 1}</span>
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
                        
                        <div>
                          <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">Answer</h4>
                          <p className="leading-relaxed">{q.answer}</p>
                        </div>

                        {q.explanation && (
                          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 text-xs sm:text-sm">
                            <span className="font-bold text-slate-900 dark:text-white block mb-1">Technical Explanation:</span>
                            <p className="leading-relaxed whitespace-pre-line text-slate-600 dark:text-slate-300">{q.explanation}</p>
                          </div>
                        )}

                        {q.codeSnippet && (
                          <CodeBlock code={q.codeSnippet} language="verilog" filename="interview_solution.v" />
                        )}

                        {q.tip && (
                          <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200 text-xs sm:text-sm flex items-start gap-3">
                            <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                            <div>
                              <span className="font-bold text-amber-600 dark:text-amber-400 block mb-0.5">Interview Tip:</span>
                              <p className="leading-relaxed">{q.tip}</p>
                            </div>
                          </div>
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
