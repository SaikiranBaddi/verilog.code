import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  BookOpen, Clock, Signal, CheckCircle2, ChevronDown, ChevronUp, 
  PlayCircle, ArrowRight, ShieldCheck, HelpCircle, Briefcase, Code, Award, X
} from 'lucide-react';
import SEOHead from '../components/common/SEOHead';
import AdPlaceholder from '../components/common/AdPlaceholder';
import { coursesData } from '../data/coursesData';
import { mcqsData } from '../data/mcqsData';
import { interviewData } from '../data/interviewData';
import { projectsData } from '../data/projectsData';
import { getPerformanceRating } from '../data/assessmentsData';

export const CourseDetailPage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = coursesData.find(c => c.id === courseId) || coursesData[0];
  const [openModuleIndex, setOpenModuleIndex] = useState(0);
  const [showAssessmentModal, setShowAssessmentModal] = useState(false);
  const [assessmentScore, setAssessmentScore] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  // Related counts
  const totalModules = course.modules?.length || 0;
  const totalLessons = course.modules?.reduce((acc, m) => acc + (m.content?.sections?.length || 3), 0) || 0;
  const relatedMcqs = mcqsData.filter(m => m.category.toLowerCase().includes(course.category.toLowerCase()) || m.topic.toLowerCase().includes(course.title.toLowerCase())).length || 25;
  const relatedInterviews = interviewData.filter(i => i.category.toLowerCase().includes(course.category.toLowerCase()) || i.topic.toLowerCase().includes(course.title.toLowerCase())).length || 15;
  const relatedProjects = projectsData.filter(p => p.category.toLowerCase().includes(course.category.toLowerCase())).length || 5;

  const toggleModule = (idx) => {
    setOpenModuleIndex(openModuleIndex === idx ? null : idx);
  };

  const handleStartLearning = () => {
    const firstModuleId = course.modules?.[0]?.id || 'module-1';
    navigate(`/courses/${course.id}/modules/${firstModuleId}`);
  };

  // Sample Quiz Questions for Course Assessment
  const assessmentQuestions = mcqsData.slice(0, 5);

  const handleSelectAnswer = (qIdx, optIdx) => {
    setSelectedAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
  };

  const handleCalculateResult = () => {
    let score = 0;
    assessmentQuestions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) {
        score += 1;
      }
    });
    const percentage = Math.round((score / assessmentQuestions.length) * 100);
    setAssessmentScore(percentage);
  };

  return (
    <>
      <SEOHead 
        title={`${course.title} — Free Learning Course`} 
        description={course.description}
      />

      {/* Course Header Banner */}
      <div className="py-12 md:py-16 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
              <span className="px-3 py-1 rounded-md bg-blue-500/20 text-blue-400 border border-blue-500/30 uppercase tracking-wider">
                {course.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                {course.level}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {course.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {course.description}
            </p>

            {/* Quick Metadata */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs sm:text-sm text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-400" />
                <span>{totalModules} Modules ({totalLessons} Lessons)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-400" />
                <span>{course.duration || '6 Hours'} Total Time</span>
              </div>
              <div className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-400" />
                <span>{relatedMcqs} Practice MCQs</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-emerald-400" />
                <span>{relatedInterviews} Interview Qs</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={handleStartLearning}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-base bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25 transition-all"
              >
                <PlayCircle className="w-5 h-5" />
                <span>Start Learning Course</span>
              </button>

              <button
                onClick={() => setShowAssessmentModal(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-bold text-base bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all"
              >
                <Award className="w-5 h-5 text-amber-400" />
                <span>Take Course Assessment</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-slate-50 dark:bg-slate-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left / Main Column */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* WHAT YOU WILL LEARN */}
            <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                <span>What You Will Learn</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.learningOutcomes?.map((outcome, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✓
                    </div>
                    <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {outcome}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ad Placeholder */}
            <AdPlaceholder slot="inArticle" />

            {/* COURSE CURRICULUM */}
            <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Course Curriculum
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {totalModules} modules • Click to preview module lesson details
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {course.modules?.map((mod, idx) => {
                  const isOpen = openModuleIndex === idx;
                  return (
                    <div
                      key={mod.id}
                      className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => toggleModule(idx)}
                        className="w-full flex items-center justify-between p-4 text-left font-semibold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-bold shrink-0">
                            {idx + 1}
                          </span>
                          <span className="text-sm font-semibold truncate">{mod.title}</span>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          <span className="text-xs text-slate-400 hidden sm:inline">{mod.duration}</span>
                          {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-5 py-4 border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900 text-sm text-slate-600 dark:text-slate-300">
                          <p className="leading-relaxed mb-4">{mod.content?.summary}</p>
                          <Link
                            to={`/courses/${course.id}/modules/${mod.id}`}
                            className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
                          >
                            <span>Open Module Lesson & Examples</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right / Sidebar Column */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm sticky top-24">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                Course Details
              </h3>
              
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 pb-4 mb-6">
                <li className="flex justify-between">
                  <span className="text-slate-400">Category:</span>
                  <span className="font-semibold text-slate-900 dark:text-white">{course.category}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">Skill Level:</span>
                  <span className="font-semibold text-slate-900 dark:text-white">{course.level}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">Total Modules:</span>
                  <span className="font-semibold text-slate-900 dark:text-white">{totalModules}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">Total Lessons:</span>
                  <span className="font-semibold text-slate-900 dark:text-white">{totalLessons}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">Related MCQs:</span>
                  <span className="font-semibold text-slate-900 dark:text-white">{relatedMcqs}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">Interview Qs:</span>
                  <span className="font-semibold text-slate-900 dark:text-white">{relatedInterviews}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">Access:</span>
                  <span className="font-bold text-emerald-500">100% FREE</span>
                </li>
              </ul>

              <button
                onClick={handleStartLearning}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm bg-blue-600 hover:bg-blue-500 text-white shadow-md transition-colors"
              >
                <span>Start Learning Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <AdPlaceholder slot="sidebar" className="mt-6" />
            </div>
          </div>

        </div>
      </div>

      {/* Course Assessment Modal */}
      {showAssessmentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-6">
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6 text-amber-500" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{course.title} Assessment</h3>
              </div>
              <button onClick={() => setShowAssessmentModal(false)} className="p-1 text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {assessmentScore !== null ? (
              <div className="text-center py-8 space-y-4">
                <div className="text-5xl font-extrabold text-blue-500">{assessmentScore}%</div>
                {(() => {
                  const rating = getPerformanceRating(assessmentScore);
                  return (
                    <div className="space-y-3">
                      <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold border ${rating.color}`}>
                        Performance Level: {rating.level}
                      </span>
                      <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">{rating.message}</p>
                    </div>
                  );
                })()}
                <button
                  onClick={() => { setAssessmentScore(null); setSelectedAnswers({}); }}
                  className="mt-6 px-6 py-2.5 rounded-xl text-xs font-bold bg-blue-600 text-white"
                >
                  Retake Assessment
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {assessmentQuestions.map((q, idx) => (
                  <div key={q.id} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 space-y-3">
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      Q{idx + 1}. {q.question}
                    </div>
                    <div className="space-y-2">
                      {q.options.map((opt, oIdx) => (
                        <button
                          key={oIdx}
                          onClick={() => handleSelectAnswer(idx, oIdx)}
                          className={`w-full text-left p-3 rounded-lg text-xs font-medium border transition-colors ${
                            selectedAnswers[idx] === oIdx
                              ? 'bg-blue-600 text-white border-blue-600'
                              : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}

                <button
                  onClick={handleCalculateResult}
                  disabled={Object.keys(selectedAnswers).length < assessmentQuestions.length}
                  className="w-full py-3 rounded-xl text-sm font-bold bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white shadow-md transition-colors"
                >
                  Submit Assessment & View Results
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CourseDetailPage;
