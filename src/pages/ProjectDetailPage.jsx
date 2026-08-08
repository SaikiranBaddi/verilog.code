import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Code, CheckCircle2, Cpu, FileCode } from 'lucide-react';
import SEOHead from '../components/common/SEOHead';
import CodeBlock from '../components/common/CodeBlock';
import AdPlaceholder from '../components/common/AdPlaceholder';
import { projectsData } from '../data/projectsData';

export const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const project = projectsData.find(p => p.id === projectId) || projectsData[0];

  return (
    <>
      <SEOHead 
        title={`${project.title} — Verilog RTL Project`}
        description={project.summary}
      />

      <div className="py-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/projects" className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 mb-4">
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
          <div className="max-w-4xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-400 bg-rose-500/10 px-2.5 py-0.5 rounded border border-rose-500/20">
                {project.category}
              </span>
              <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300">
                {project.difficulty}
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              {project.title}
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      <div className="py-12 bg-slate-50 dark:bg-slate-950 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* Skills Learned */}
          <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span>Skills Learned in this Project</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.skills?.map((skill, sIdx) => (
                <div key={sIdx} className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <AdPlaceholder slot="inArticle" />

          {/* RTL Verilog Code */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <FileCode className="w-6 h-6 text-blue-500" />
              <span>Verilog RTL Design Module</span>
            </h2>
            <CodeBlock code={project.verilogCode} language="verilog" filename={`${project.id}.v`} />
          </div>

          {/* Testbench Code */}
          {project.testbenchCode && (
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <FileCode className="w-6 h-6 text-purple-500" />
                <span>Simulation Testbench Module</span>
              </h2>
              <CodeBlock code={project.testbenchCode} language="verilog" filename={`tb_${project.id}.v`} />
            </div>
          )}

        </div>
      </div>
    </>
  );
};

export default ProjectDetailPage;
