import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Github, Linkedin, Heart } from 'lucide-react';
import Logo from '../common/Logo';
import { siteConfig } from '../../config/site';

export const Footer = () => {
  return (
    <footer className="w-full bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Logo className="h-10 w-auto" />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {siteConfig.description}
            </p>
            <p className="text-xs text-slate-500 font-mono">
              Designed for hardware engineers, VLSI enthusiasts, and semiconductor students worldwide.
            </p>
          </div>

          {/* Learn Section */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Learn</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/courses" className="hover:text-blue-400 transition-colors">Courses</Link></li>
              <li><Link to="/notes" className="hover:text-blue-400 transition-colors">Notes</Link></li>
              <li><Link to="/mcqs" className="hover:text-blue-400 transition-colors">MCQs</Link></li>
              <li><Link to="/projects" className="hover:text-blue-400 transition-colors">Projects</Link></li>
              <li><Link to="/interview" className="hover:text-blue-400 transition-colors">Interview Prep</Link></li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Connect</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-pink-400 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-500" />
                  <span>Instagram ({siteConfig.instagramHandle})</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-slate-200 transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-300" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Website Section */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Website</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
              <li><Link to="/legal" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/legal" className="hover:text-blue-400 transition-colors">Terms of Use</Link></li>
              <li><Link to="/legal" className="hover:text-blue-400 transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {siteConfig.year} <span className="font-semibold text-slate-300">verilog.code</span>. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Built with passion for semiconductor education</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
