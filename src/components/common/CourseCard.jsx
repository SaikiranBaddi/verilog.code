import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Signal, ArrowRight, Award } from 'lucide-react';

export const CourseCard = ({ course }) => {
  const levelColors = {
    Beginner: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    Intermediate: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
    Advanced: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
  };

  return (
    <div className="group relative flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
      {/* Visual Accent Header Banner */}
      <div className="h-3 shadow-inner bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 group-hover:h-4 transition-all duration-300" />

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Level Badges */}
          <div className="flex items-center justify-between gap-2 mb-3.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-md border border-blue-200 dark:border-blue-900/50">
              {course.category}
            </span>
            <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${levelColors[course.level] || levelColors.Beginner}`}>
              {course.level}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 mb-2">
            {course.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed mb-6">
            {course.description}
          </p>
        </div>

        <div>
          {/* Metadata Grid */}
          <div className="grid grid-cols-2 gap-2 pt-4 mb-5 border-t border-slate-100 dark:border-slate-800/80 text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-blue-500" />
              <span>{course.moduleCount || course.modules?.length || 10} Modules</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-purple-500" />
              <span>{course.duration || '4 Hours'}</span>
            </div>
          </div>

          {/* Action Button */}
          <Link
            to={`/courses/${course.id}`}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm bg-slate-900 dark:bg-slate-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-white transition-all shadow-md group-hover:shadow-blue-500/25"
          >
            <span>Start Learning</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
