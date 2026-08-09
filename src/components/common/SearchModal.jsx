import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, BookOpen, FileText, HelpCircle, Code, Briefcase, ArrowRight, Layers } from 'lucide-react';
import { coursesData } from '../../data/coursesData';
import { notesData } from '../../data/notesData';
import { mcqsData } from '../../data/mcqsData';
import { interviewData } from '../../data/interviewData';
import { projectsData } from '../../data/projectsData';

export const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const q = query.toLowerCase();
    const matches = [];

    // Search Courses & Modules
    coursesData.forEach(c => {
      if (c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q) || c.category.toLowerCase().includes(q)) {
        matches.push({ type: 'course', title: c.title, subtitle: `${c.category} Course`, url: `/courses/${c.id}`, icon: BookOpen });
      }
      c.modules?.forEach(m => {
        if (m.title.toLowerCase().includes(q) || m.content?.summary?.toLowerCase().includes(q)) {
          matches.push({ type: 'module', title: m.title, subtitle: `Module in ${c.title}`, url: `/courses/${c.id}/modules/${m.id}`, icon: Layers });
        }
      });
    });

    // Search Notes
    notesData.forEach(n => {
      if (n.title.toLowerCase().includes(q) || n.summary.toLowerCase().includes(q) || n.category.toLowerCase().includes(q)) {
        matches.push({ type: 'note', title: n.title, subtitle: `${n.topic} Technical Note`, url: `/notes`, icon: FileText });
      }
    });

    // Search MCQs
    mcqsData.forEach((m) => {
      if (m.question.toLowerCase().includes(q) || m.category.toLowerCase().includes(q)) {
        matches.push({ type: 'mcq', title: m.question, subtitle: `${m.category} MCQ (${m.difficulty})`, url: `/mcqs`, icon: HelpCircle });
      }
    });

    // Search Interview Prep
    interviewData.forEach(i => {
      if (i.question.toLowerCase().includes(q) || i.answer.toLowerCase().includes(q) || i.category.toLowerCase().includes(q)) {
        matches.push({ type: 'interview', title: i.question, subtitle: i.category, url: `/interview`, icon: Briefcase });
      }
    });

    // Search Projects
    projectsData.forEach(p => {
      if (p.title.toLowerCase().includes(q) || p.summary.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)) {
        matches.push({ type: 'project', title: p.title, subtitle: `${p.category} Project (${p.difficulty})`, url: `/projects/${p.id}`, icon: Code });
      }
    });

    setResults(matches.slice(0, 10));
  }, [query]);

  if (!isOpen) return null;

  const handleSelect = (url) => {
    navigate(url);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-24 px-4 bg-slate-950/70 backdrop-blur-sm transition-opacity animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Search input bar */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-slate-800">
          <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search courses, modules, notes, MCQs, interview questions, projects..."
            className="w-full bg-transparent text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none text-base font-medium"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-white mr-1">
              <X className="w-4 h-4" />
            </button>
          )}
          <button onClick={onClose} className="px-2 py-1 text-xs font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
            ESC
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-3">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-slate-400 text-sm">
              Type <span className="font-mono text-blue-500">"FSM"</span>, <span className="font-mono text-blue-500">"Verilog"</span>, <span className="font-mono text-blue-500">"Setup Time"</span>, or <span className="font-mono text-blue-500">"ALU"</span> to search resources.
            </div>
          ) : results.length === 0 ? (
            <div className="py-8 text-center text-slate-400 text-sm">
              No learning resources found matching "<span className="text-slate-900 dark:text-white font-semibold">{query}</span>"
            </div>
          ) : (
            <div className="space-y-1">
              <div className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-400">Search Results</div>
              {results.map((res, i) => {
                const IconComponent = res.icon;
                return (
                  <div
                    key={i}
                    onClick={() => handleSelect(res.url)}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 cursor-pointer group transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          {res.title}
                        </h4>
                        <span className="text-xs text-slate-500 dark:text-slate-400">{res.subtitle}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
