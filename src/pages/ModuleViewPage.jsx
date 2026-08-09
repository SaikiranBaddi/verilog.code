import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, ArrowRight, BookOpen, CheckCircle, Lightbulb, AlertTriangle, 
  HelpCircle, Briefcase, Code, Check
} from 'lucide-react';
import SEOHead from '../components/common/SEOHead';
import CodeBlock from '../components/common/CodeBlock';
import AdPlaceholder from '../components/common/AdPlaceholder';
import { coursesData } from '../data/coursesData';

export const ModuleViewPage = () => {
  const { courseId, moduleId } = useParams();
  const navigate = useNavigate();

  const course = coursesData.find(c => c.id === courseId) || coursesData[0];
  const modules = course.modules || [];
  
  const currentModuleIndex = modules.findIndex(m => m.id === moduleId);
  const activeModule = modules[currentModuleIndex >= 0 ? currentModuleIndex : 0] || modules[0];

  const prevModule = currentModuleIndex > 0 ? modules[currentModuleIndex - 1] : null;
  const nextModule = currentModuleIndex < modules.length - 1 ? modules[currentModuleIndex + 1] : null;

  // Completion State via localStorage
  const storageKey = `completed_module_${course.id}_${activeModule.id}`;
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    setIsCompleted(saved === 'true');
  }, [storageKey]);

  const toggleCompleted = () => {
    const nextState = !isCompleted;
    setIsCompleted(nextState);
    localStorage.setItem(storageKey, nextState.toString());
  };

  return (
    <>
      <SEOHead 
        title={`${activeModule.title} — ${course.title}`}
        description={activeModule.content?.summary || course.description}
      />

      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col">
        {/* Module Header Bar */}
        <div className="bg-slate-900 text-white border-b border-slate-800 px-4 py-3 sticky top-16 z-30 flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <Link to={`/courses/${course.id}`} className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="min-w-0">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 block truncate">{course.title}</span>
              <h1 className="text-sm sm:text-base font-bold text-white truncate max-w-xs sm:max-w-md">{activeModule.title}</h1>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={toggleCompleted}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                isCompleted
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
              }`}
            >
              <Check className={`w-3.5 h-3.5 ${isCompleted ? 'text-emerald-400' : 'text-slate-500'}`} />
              <span>{isCompleted ? 'Completed' : 'Mark as Complete'}</span>
            </button>

            <span className="text-xs text-slate-400 font-mono hidden md:inline">
              Module {currentModuleIndex + 1} of {modules.length}
            </span>
          </div>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* LEFT SIDEBAR: Course Modules List */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sticky top-36">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 px-2 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-500" />
                  <span>Modules Navigation</span>
                </span>
                <span className="text-[10px] font-mono text-slate-500">{currentModuleIndex + 1}/{modules.length}</span>
              </h3>

              <div className="space-y-1.5 max-h-[70vh] overflow-y-auto pr-1">
                {modules.map((mod, idx) => {
                  const isActive = mod.id === activeModule.id;
                  const modSaved = localStorage.getItem(`completed_module_${course.id}_${mod.id}`) === 'true';
                  return (
                    <Link
                      key={mod.id}
                      to={`/courses/${course.id}/modules/${mod.id}`}
                      className={`flex items-start gap-2.5 p-3 rounded-xl text-xs font-semibold transition-all ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 text-[10px] font-bold ${
                        isActive ? 'bg-white/20 text-white' : modSaved ? 'bg-emerald-500/20 text-emerald-500' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                      }`}>
                        {modSaved ? '✓' : idx + 1}
                      </span>
                      <span className="line-clamp-2 leading-snug">{mod.title}</span>
                    </Link>
                  );
                })}
              </div>

              <AdPlaceholder slot="sidebar" className="mt-6" />
            </div>
          </div>

          {/* RIGHT CANVAS: Learning Content Reader */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-10 shadow-sm min-h-[600px] flex flex-col justify-between">
              
              <div>
                {/* Module Title */}
                <div className="pb-6 mb-8 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      Module {currentModuleIndex + 1} of {modules.length}
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
                      {activeModule.title}
                    </h2>
                  </div>

                  <button
                    onClick={toggleCompleted}
                    className={`hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                      isCompleted
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <Check className="w-4 h-4" />
                    <span>{isCompleted ? 'Completed' : 'Mark Complete'}</span>
                  </button>
                </div>

                {/* Structured Sections rendering */}
                <div className="space-y-6 text-slate-800 dark:text-slate-200 leading-relaxed">
                  {activeModule.content?.sections?.map((sec, sIdx) => {
                    if (sec.type === 'heading') {
                      return (
                        <h3 key={sIdx} className="text-xl font-bold text-slate-900 dark:text-white pt-4 border-t border-slate-100 dark:border-slate-800/80">
                          {sec.text}
                        </h3>
                      );
                    }
                    if (sec.type === 'paragraph') {
                      return (
                        <p key={sIdx} className="text-base text-slate-700 dark:text-slate-300">
                          {sec.text}
                        </p>
                      );
                    }
                    if (sec.type === 'code') {
                      return (
                        <CodeBlock
                          key={sIdx}
                          code={sec.code}
                          language={sec.language || 'verilog'}
                          filename={sec.filename}
                        />
                      );
                    }
                    if (sec.type === 'important') {
                      return (
                        <div key={sIdx} className="p-4 rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200">
                          <div className="flex items-center gap-2 font-bold text-sm mb-1 text-amber-600 dark:text-amber-400">
                            <AlertTriangle className="w-4 h-4" />
                            <span>{sec.title || 'Important Rule'}</span>
                          </div>
                          <p className="text-xs sm:text-sm whitespace-pre-line">{sec.text}</p>
                        </div>
                      );
                    }
                    if (sec.type === 'warning') {
                      return (
                        <div key={sIdx} className="p-4 rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-900 dark:text-rose-200">
                          <div className="flex items-center gap-2 font-bold text-sm mb-1 text-rose-600 dark:text-rose-400">
                            <AlertTriangle className="w-4 h-4" />
                            <span>{sec.title || 'Warning / Pitfall'}</span>
                          </div>
                          <p className="text-xs sm:text-sm whitespace-pre-line">{sec.text}</p>
                        </div>
                      );
                    }
                    if (sec.type === 'note' || sec.type === 'tip') {
                      return (
                        <div key={sIdx} className="p-4 rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-950 dark:text-blue-200">
                          <div className="flex items-center gap-2 font-bold text-sm mb-1 text-blue-600 dark:text-blue-400">
                            <Lightbulb className="w-4 h-4" />
                            <span>{sec.title || 'Pro Tip'}</span>
                          </div>
                          <p className="text-xs sm:text-sm whitespace-pre-line">{sec.text}</p>
                        </div>
                      );
                    }
                    if (sec.type === 'table') {
                      return (
                        <div key={sIdx} className="my-6 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
                          <table className="w-full text-left text-xs sm:text-sm">
                            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold">
                              <tr>
                                {sec.headers?.map((h, hIdx) => (
                                  <th key={hIdx} className="p-3 border-b border-slate-200 dark:border-slate-700">{h}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                              {sec.rows?.map((row, rIdx) => (
                                <tr key={rIdx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                                  {row.map((cell, cIdx) => (
                                    <td key={cIdx} className="p-3 font-mono text-xs text-slate-700 dark:text-slate-300">{cell}</td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>

                {/* Quick Revision Box */}
                {activeModule.content?.revisionPoints && (
                  <div className="my-8 p-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-950 dark:text-emerald-100">
                    <h4 className="font-bold text-base text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span>Quick Revision Checklist</span>
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm">
                      {activeModule.content.revisionPoints.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="text-emerald-500 font-bold">✓</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Related Learning Links */}
                <div className="my-8 pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Link to="/mcqs" className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 hover:border-blue-500 transition-colors flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-purple-500 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">Practice Related MCQs</div>
                      <div className="text-[11px] text-slate-500">Test module concepts</div>
                    </div>
                  </Link>

                  <Link to="/interview" className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 hover:border-blue-500 transition-colors flex items-center gap-3">
                    <Briefcase className="w-5 h-5 text-emerald-500 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">Interview Questions</div>
                      <div className="text-[11px] text-slate-500">Practice Q&A</div>
                    </div>
                  </Link>

                  <Link to="/projects" className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 hover:border-blue-500 transition-colors flex items-center gap-3">
                    <Code className="w-5 h-5 text-cyan-500 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">RTL Projects</div>
                      <div className="text-[11px] text-slate-500">Build hardware code</div>
                    </div>
                  </Link>
                </div>
              </div>

              {/* In-Article Ad Placeholder */}
              <AdPlaceholder slot="inArticle" />

              {/* Module Navigation Footer */}
              <div className="pt-8 mt-12 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
                {prevModule ? (
                  <Link
                    to={`/courses/${course.id}/modules/${prevModule.id}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs sm:text-sm font-semibold transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Previous Module</span>
                  </Link>
                ) : (
                  <div />
                )}

                {nextModule ? (
                  <Link
                    to={`/courses/${course.id}/modules/${nextModule.id}`}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold transition-colors shadow-md"
                  >
                    <span>Next Module</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <Link
                    to={`/courses/${course.id}`}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold transition-colors"
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>Complete Course</span>
                  </Link>
                )}
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ModuleViewPage;
