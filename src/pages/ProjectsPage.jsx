import React from 'react';
import { Link } from 'react-router-dom';
import { Code, ArrowRight, Layers, Cpu } from 'lucide-react';
import SEOHead from '../components/common/SEOHead';
import AdPlaceholder from '../components/common/AdPlaceholder';
import { projectsData } from '../data/projectsData';

export const ProjectsPage = () => {
  return (
    <>
      <SEOHead 
        title="Verilog & FPGA RTL Engineering Projects" 
        description="Explore practical Verilog HDL projects including ALUs, Traffic Light FSMs, UART cores, Dual-Clock FIFOs, and RISC-V processors."
      />

      <div className="py-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-400">Practical Portfolio</span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-1 mb-4">
              Hardware Design Projects
            </h1>
            <p className="text-slate-300 text-base sm:text-lg">
              Hands-on Verilog RTL designs, testbenches, GTKWave simulation waveforms, and FPGA Vivado synthesis guides.
            </p>
          </div>
        </div>
      </div>

      <div className="py-12 bg-slate-50 dark:bg-slate-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          <AdPlaceholder slot="betweenResources" />

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <div key={project.id} className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-0.5 rounded-md">
                      {project.category}
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
                      {project.difficulty}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies?.map((tech, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to={`/projects/${project.id}`}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-xs bg-slate-900 dark:bg-slate-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-white transition-colors"
                >
                  <span>View Project Code</span>
                  <Code className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
