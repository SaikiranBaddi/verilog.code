import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import SEOHead from '../components/common/SEOHead';

export const NotFoundPage = () => {
  return (
    <>
      <SEOHead title="404 Page Not Found" />
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white">
        <span className="font-mono text-6xl font-extrabold text-blue-500 mb-2">404</span>
        <h1 className="text-2xl sm:text-4xl font-extrabold mb-3">Module Not Found</h1>
        <p className="text-slate-500 max-w-md mb-8 text-sm">
          The educational resource or page path you requested could not be located.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-blue-600 hover:bg-blue-500 text-white shadow-md transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </>
  );
};

export default NotFoundPage;
