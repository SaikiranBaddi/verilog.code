import React from 'react';
import SEOHead from '../components/common/SEOHead';
import { siteConfig } from '../config/site';

export const LegalPage = () => {
  return (
    <>
      <SEOHead 
        title="Privacy Policy, Terms of Use & Disclaimer" 
        description="Legal terms, privacy policy, and educational disclaimer for verilog.code."
      />

      <div className="py-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold">
            Privacy Policy & Terms of Use
          </h1>
        </div>
      </div>

      <div className="py-16 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 leading-relaxed text-sm">
          
          <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Privacy Policy</h2>
            <p>
              At <span className="font-semibold">{siteConfig.name}</span>, we respect your privacy. We do not require account creation, passwords, or personal login information to access any educational materials.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Terms of Use</h2>
            <p>
              All learning materials, code examples, testbenches, and study notes provided on <span className="font-semibold">{siteConfig.name}</span> are free for personal learning, educational study, and interview preparation.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Educational Disclaimer</h2>
            <p>
              The code examples and diagrams are provided for academic learning purposes. Registered trademarks (e.g. Verilog, SystemVerilog, Vivado, ModelSim, Intel, AMD, Xilinx) belong to their respective owners.
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default LegalPage;
