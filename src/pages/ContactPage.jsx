import React from 'react';
import { Mail, Instagram, MessageSquare, Send } from 'lucide-react';
import SEOHead from '../components/common/SEOHead';
import { siteConfig } from '../config/site';

export const ContactPage = () => {
  return (
    <>
      <SEOHead 
        title="Contact verilog.code" 
        description="Get in touch with verilog.code for educational collaborations, suggestions, and feedback."
      />

      <div className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Get in Touch
          </h1>
          <p className="text-slate-300 text-base sm:text-lg">
            Have questions, feedback, or content requests? Connect with us directly.
          </p>
        </div>
      </div>

      <div className="py-16 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-blue-500" />
              <span>Connect on Social Media</span>
            </h2>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              The fastest way to reach out for daily updates, career guidance, or feedback is through our official Instagram handle.
            </p>

            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white shadow-md hover:scale-105 transition-transform"
            >
              <Instagram className="w-5 h-5" />
              <span>Message {siteConfig.instagramHandle} on Instagram</span>
            </a>
          </div>

        </div>
      </div>
    </>
  );
};

export default ContactPage;
