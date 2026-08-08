import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, BookOpen } from 'lucide-react';
import SEOHead from '../components/common/SEOHead';
import CourseCard from '../components/common/CourseCard';
import AdPlaceholder from '../components/common/AdPlaceholder';
import { coursesData } from '../data/coursesData';

export const CoursesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'VLSI', 'Verilog / RTL', 'Digital Electronics', 'FPGA'];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = useMemo(() => {
    return coursesData.filter(course => {
      const matchCategory = selectedCategory === 'All' || course.category.toLowerCase().includes(selectedCategory.toLowerCase());
      const matchLevel = selectedLevel === 'All' || course.level.toLowerCase() === selectedLevel.toLowerCase();
      const matchSearch = searchQuery === '' || 
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        course.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchLevel && matchSearch;
    });
  }, [selectedCategory, selectedLevel, searchQuery]);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    if (cat === 'All') searchParams.delete('category');
    else searchParams.set('category', cat);
    setSearchParams(searchParams);
  };

  return (
    <>
      <SEOHead 
        title="All Courses — VLSI, Verilog, RTL & Digital Electronics" 
        description="Browse free structured engineering courses on VLSI, Verilog HDL, CMOS, SystemVerilog, FPGA Architecture, and Static Timing Analysis."
      />

      <div className="py-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Course Catalog</span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-1 mb-4">
              Explore All Engineering Courses
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Step-by-step structured courses designed for VLSI job aspirants, HDL logic designers, and semiconductor engineering students.
            </p>
          </div>
        </div>
      </div>

      <div className="py-12 bg-slate-50 dark:bg-slate-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Search & Filter Bar */}
          <div className="mb-10 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Input */}
              <div className="relative flex-1">
                <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search courses by keyword, topic or protocol..."
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-medium border border-transparent"
                />
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Category:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Level Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">Level:</span>
              {levels.map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    selectedLevel === lvl
                      ? 'bg-purple-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          {/* Ad Placeholder */}
          <AdPlaceholder slot="betweenResources" />

          {/* Course Grid */}
          {filteredCourses.length === 0 ? (
            <div className="py-20 text-center text-slate-400">
              <BookOpen className="w-12 h-12 mx-auto mb-3 text-slate-300 dark:text-slate-700" />
              <h3 className="text-lg font-bold text-slate-700 dark:text-slate-300">No courses match your filter</h3>
              <p className="text-xs text-slate-500 mt-1">Try clearing your search term or switching categories.</p>
              <button
                onClick={() => { setSelectedCategory('All'); setSelectedLevel('All'); setSearchQuery(''); }}
                className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 text-white"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CoursesPage;
