import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, Code2, ArrowRight, Instagram, CheckCircle2, 
  HelpCircle, Briefcase, Code, Sparkles, Cpu, Layers, Boxes, Binary, Zap
} from 'lucide-react';
import SEOHead from '../components/common/SEOHead';
import Logo from '../components/common/Logo';
import CourseCard from '../components/common/CourseCard';
import AdPlaceholder from '../components/common/AdPlaceholder';
import { siteConfig } from '../config/site';
import { coursesData } from '../data/coursesData';
import { topicsData } from '../data/topicsData';
import { notesData } from '../data/notesData';
import { mcqsData } from '../data/mcqsData';
import { interviewData } from '../data/interviewData';
import { projectsData } from '../data/projectsData';

export const HomePage = () => {
  const featuredCourses = coursesData.slice(0, 3);
  const latestNotes = notesData.slice(0, 2);
  const latestMcqs = mcqsData.slice(0, 2);
  const latestInterview = interviewData.slice(0, 2);
  const featuredProjects = projectsData.slice(0, 3);

  const topicIcons = {
    Cpu: Cpu,
    Code2: Code2,
    Boxes: Boxes,
    Layers: Layers,
    Binary: Binary,
    Zap: Zap,
    Microchip: Cpu
  };

  return (
    <>
      <SEOHead title="Master VLSI, Verilog & RTL Design" />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 dark:bg-blue-600/20 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-600/10 dark:bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Logo & Identity */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700/80 backdrop-blur-md mb-8 shadow-lg animate-fade-in">
            <Logo className="h-6 w-auto" />
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest pl-1 border-l border-slate-700">
              100% Free Education
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.1] mb-6">
            Master VLSI. Learn Verilog. <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
              Build Your Future.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
            Free, structured learning resources for VLSI, Verilog, RTL design, FPGA and semiconductor engineering.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Link
              to="/courses"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-base bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200"
            >
              <BookOpen className="w-5 h-5" />
              <span>Explore Free Courses</span>
            </Link>

            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-base bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 shadow-md hover:border-pink-500/50 transition-all duration-200"
            >
              <Instagram className="w-5 h-5 text-pink-400" />
              <span>Follow on Instagram</span>
            </a>
          </div>

          {/* Key Value Badges */}
          <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-xs sm:text-sm text-slate-400">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Zero Ads / No Login</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              <span>Structured Modules</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              <span>Interactive MCQs</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>RTL Code Projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Integration Slot (Rendered if enabled in adsConfig) */}
      <div className="max-w-7xl mx-auto px-4">
        <AdPlaceholder slot="betweenResources" />
      </div>

      {/* 2. EXPLORE COURSES */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Curated Engineering Catalog
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
                Explore Free Courses
              </h2>
            </div>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 mt-4 md:mt-0 font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
            >
              <span>View All Courses ({coursesData.length})</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. LEARN BY TOPIC */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              Structured Domains
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
              Learn by Topic
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-3 text-base">
              Choose your specialization area and dive straight into detailed tutorials, notes, and code samples.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topicsData.map((topic) => {
              const IconComp = topicIcons[topic.icon] || Cpu;
              return (
                <Link
                  key={topic.id}
                  to={`/courses?category=${encodeURIComponent(topic.name)}`}
                  className="group p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 hover:bg-white dark:hover:bg-slate-900 hover:border-blue-500/50 dark:hover:border-blue-500/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-5 group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                      {topic.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      {topic.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200/60 dark:border-slate-800 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    <span>{topic.badge}</span>
                    <ArrowRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. LATEST LEARNING RESOURCES */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              Fresh Content
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
              Latest Learning Resources
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Latest Notes */}
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold mb-4">
                <BookOpen className="w-5 h-5" />
                <h3 className="text-lg text-slate-900 dark:text-white">Latest Notes</h3>
              </div>
              <div className="space-y-4">
                {latestNotes.map((note) => (
                  <Link key={note.id} to="/notes" className="block p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-blue-50/50 dark:hover:bg-slate-800 transition-colors">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">{note.topic}</span>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mt-1 line-clamp-1">{note.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">{note.summary}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Latest MCQs */}
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold mb-4">
                <HelpCircle className="w-5 h-5" />
                <h3 className="text-lg text-slate-900 dark:text-white">Latest MCQs</h3>
              </div>
              <div className="space-y-4">
                {latestMcqs.map((mcq) => (
                  <Link key={mcq.id} to="/mcqs" className="block p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-purple-50/50 dark:hover:bg-slate-800 transition-colors">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">{mcq.category}</span>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mt-1 line-clamp-2">{mcq.question}</h4>
                  </Link>
                ))}
              </div>
            </div>

            {/* Latest Interview Qs */}
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold mb-4">
                <Briefcase className="w-5 h-5" />
                <h3 className="text-lg text-slate-900 dark:text-white">Interview Qs</h3>
              </div>
              <div className="space-y-4">
                {latestInterview.map((item) => (
                  <Link key={item.id} to="/interview" className="block p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-emerald-50/50 dark:hover:bg-slate-800 transition-colors">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">{item.topic}</span>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mt-1 line-clamp-2">{item.question}</h4>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRACTICE */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Interactive Assessment
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
              Practice & Test Your Knowledge
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-6">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Interactive MCQs</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  Practice hundreds of multiple-choice questions with instant feedback and step-by-step explanations.
                </p>
              </div>
              <Link to="/mcqs" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-blue-600 hover:bg-blue-500 text-white transition-colors">
                <span>Start MCQs Quiz</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center mb-6">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Verilog Coding Problems</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  Write synthesizable Verilog modules and testbenches for ALUs, FSMs, counters, and registers.
                </p>
              </div>
              <Link to="/courses/verilog-fundamentals" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-cyan-600 hover:bg-cyan-500 text-white transition-colors">
                <span>Solve Coding Problems</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-6">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">VLSI Interview Prep</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  Top technical interview questions asked by semiconductor giants like Intel, AMD, Nvidia, and Qualcomm.
                </p>
              </div>
              <Link to="/interview" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-purple-600 hover:bg-purple-500 text-white transition-colors">
                <span>Browse Interview Questions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROJECTS */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                Hands-On Hardware
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
                Practical RTL & FPGA Projects
              </h2>
            </div>
            <Link to="/projects" className="inline-flex items-center gap-2 mt-4 md:mt-0 font-semibold text-rose-600 dark:text-rose-400 hover:underline">
              <span>Explore All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between hover:shadow-lg transition-shadow">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">{project.category}</span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">{project.difficulty}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{project.summary}</p>
                </div>
                <Link to={`/projects/${project.id}`} className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                  <span>View Project Code</span>
                  <Code className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INSTAGRAM COMMUNITY BANNER */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-950 to-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 flex items-center justify-center mx-auto mb-6 shadow-xl">
            <Instagram className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Learn With Us on Instagram
          </h2>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto mb-8 font-normal">
            Get daily VLSI, Verilog, Digital Electronics and semiconductor content.
          </p>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base bg-white text-purple-950 hover:bg-purple-100 shadow-xl transition-all hover:scale-105"
          >
            <Instagram className="w-5 h-5 text-pink-600" />
            <span>Follow {siteConfig.instagramHandle}</span>
          </a>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-4">
            Start Learning for Free
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            No signup required. Dive straight into structured courses, practice MCQs, and RTL projects.
          </p>
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/30 transition-all"
          >
            <BookOpen className="w-5 h-5" />
            <span>Explore Courses</span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
