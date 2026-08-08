import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, ArrowRight, BookOpen, CheckCircle, Lightbulb, AlertTriangle, 
  HelpCircle, Menu, X 
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

  return (
    <>
      <SEOHead 
        title={`${activeModule.title} — ${course.title}`}
        description={activeModule.content?.summary || course.description}
      />

      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col">
        {/* Module Header Bar */}
        <div className="bg-slate-900 text-white border-b border-slate-800 px-4 py-3 sticky top-16 z-30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to={`/courses/${course.id}`} className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 block">{course.title}</span>
              <h1 className="text-sm sm:text-base font-bold text-white truncate max-w-xs sm:max-w-md">{activeModule.title}</h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">
              Module {currentModuleIndex + 1} of {modules.length}
            </span>
          </div>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* LEFT SIDEBAR: Course Modules List */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sticky top-36">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 px-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-500" />
                <span>Course Modules</span>
              </h3>

              <div className="space-y-1.5 max-h-[70vh] overflow-y-auto pr-1">
                {modules.map((mod, idx) => {
                  const isActive = mod.id === activeModule.id;
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
                        isActive ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                      }`}>
                        {idx + 1}
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
                <div className="pb-6 mb-8 border-b border-slate-200 dark:border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    Module {currentModuleIndex + 1}
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
                    {activeModule.title}
                  </h2>
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
                    if (sec.type === 'note' || sec.type === 'tip') {
                      return (
                        <div key={sIdx} className="p-4 rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-950 dark:text-blue-200">
                          <div className="flex items-center gap-2 font-bold text-sm mb-1 text-blue-600 dark:text-blue-400">
                            <Lightbulb className="w-4 h-4" />
                            <span>{sec.title || 'Pro Tip'}</span>
                          </div>
                          <p className="text-xs sm:text-sm">{sec.text}</p>
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

                {/* Continue Learning Links */}
                {activeModule.content?.nextTopics && (
                  <div className="my-8 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40">
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-3">
                      Continue Learning — Recommended Next Topics:
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {activeModule.content.nextTopics.map((top, tIdx) => (
                        <Link
                          key={tIdx}
                          to={top.link}
                          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-colors shadow-xs"
                        >
                          <span>{top.title}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-blue-500" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
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
