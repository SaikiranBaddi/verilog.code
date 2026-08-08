import React from 'react';
import { Instagram, Cpu, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import SEOHead from '../components/common/SEOHead';
import Logo from '../components/common/Logo';
import { siteConfig } from '../config/site';

export const AboutPage = () => {
  return (
    <>
      <SEOHead 
        title="About verilog.code — Free Semiconductor Education" 
        description="Learn about verilog.code's mission to make VLSI, Verilog HDL, RTL Design, and semiconductor study resources 100% free and accessible for engineering students worldwide."
      />

      <div className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <Logo className="h-12 w-auto mx-auto mb-6" />
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Democratizing Semiconductor Education
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            <span className="font-semibold text-white">verilog.code</span> was born out of a passion to simplify VLSI, Verilog HDL, and digital electronics concepts for students and engineers around the world.
          </p>
        </div>
      </div>

      <div className="py-16 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Mission */}
          <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-blue-500" />
              <span>Our Mission</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              We believe quality hardware engineering education should be accessible to everyone—without paywalls, expensive subscriptions, or gated content. Whether you are preparing for campus placements, semiconductor interviews, or building your first FPGA bitstream, <span className="font-semibold text-slate-900 dark:text-white">verilog.code</span> provides structured resources every step of the way.
            </p>
          </div>

          {/* Core Focus */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-center">
              <Cpu className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">VLSI & RTL Design</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Synthesis, CDC, STA signoff, setup/hold constraints, and standard cell library fundamentals.</p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-center">
              <ShieldCheck className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">100% Free Forever</h3>
              <p className="text-xs text-slate-500 leading-relaxed">No subscriptions, no logins, no paywalls. Open educational material for all engineers.</p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-center">
              <Instagram className="w-8 h-8 text-pink-500 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Instagram Community</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Daily infographics, interview tips, code challenges, and semiconductor news on Instagram.</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default AboutPage;
