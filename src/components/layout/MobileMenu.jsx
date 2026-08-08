import React from 'react';
import { NavLink } from 'react-router-dom';
import { X, Instagram, BookOpen, FileText, HelpCircle, Code, Briefcase, Info, Home } from 'lucide-react';
import Logo from '../common/Logo';
import { siteConfig } from '../../config/site';

export const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Courses', path: '/courses', icon: BookOpen },
    { name: 'Notes', path: '/notes', icon: FileText },
    { name: 'MCQs', path: '/mcqs', icon: HelpCircle },
    { name: 'Projects', path: '/projects', icon: Code },
    { name: 'Interview Prep', path: '/interview', icon: Briefcase },
    { name: 'About', path: '/about', icon: Info },
  ];

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm" onClick={onClose} />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white dark:bg-slate-900 shadow-2xl border-l border-slate-200 dark:border-slate-800 flex flex-col justify-between p-6 z-10 animate-in slide-in-from-right duration-200">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800">
            <Logo className="h-8 w-auto" />
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="mt-6 space-y-1">
            {navItems.map((item) => {
              const IconComp = item.icon;
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-base transition-colors ${
                      isActive
                        ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`
                  }
                >
                  <IconComp className="w-5 h-5 text-blue-500" />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Footer CTA */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-3">
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white shadow-lg"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow {siteConfig.instagramHandle}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
