import React, { useState } from 'react';
import { Search, FileText, Download, Eye, X } from 'lucide-react';
import SEOHead from '../components/common/SEOHead';
import AdPlaceholder from '../components/common/AdPlaceholder';
import { notesData } from '../data/notesData';

export const NotesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeNote, setActiveNote] = useState(null);

  const categories = ['All', 'VLSI', 'Verilog', 'Digital Electronics', 'FPGA', 'Semiconductor'];

  const filteredNotes = notesData.filter(note => {
    const matchCategory = selectedCategory === 'All' || note.category === selectedCategory;
    const matchSearch = searchQuery === '' || 
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      note.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleDownloadPdf = (title) => {
    alert(`Downloading study note PDF for "${title}"...`);
  };

  return (
    <>
      <SEOHead 
        title="Engineering Study Notes — Verilog, VLSI & Digital Electronics" 
        description="Free downloadable reference notes and cheat sheets on Verilog HDL, setup/hold time, FSM state machines, and semiconductor physics."
      />

      <div className="py-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Reference Library</span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-1 mb-4">
              VLSI & RTL Engineering Notes
            </h1>
            <p className="text-slate-300 text-base sm:text-lg">
              Concise revision notes, formulas, design rules, and downloadable reference sheets.
            </p>
          </div>
        </div>
      </div>

      <div className="py-12 bg-slate-50 dark:bg-slate-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Search & Filter */}
          <div className="mb-10 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-4">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search notes by keyword..."
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-medium border border-transparent"
              />
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
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
          </div>

          <AdPlaceholder slot="betweenResources" />

          {/* Notes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNotes.map((note) => (
              <div key={note.id} className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/60 px-2.5 py-0.5 rounded-md">
                      {note.topic}
                    </span>
                    <span className="text-xs text-slate-400">{note.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-2">
                    {note.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6 line-clamp-3">
                    {note.summary}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => setActiveNote(note)}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Read Note</span>
                  </button>
                  <button
                    onClick={() => handleDownloadPdf(note.title)}
                    className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    title="Download PDF"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Note Reader Modal */}
      {activeNote && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
          <div className="w-full max-w-3xl max-h-[85vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-800">
              <div>
                <span className="text-xs font-bold uppercase text-blue-500">{activeNote.topic}</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">{activeNote.title}</h3>
              </div>
              <button onClick={() => setActiveNote(null)} className="p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto font-mono text-sm leading-relaxed text-slate-800 dark:text-slate-200 whitespace-pre-line">
              {activeNote.content}
            </div>
            <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setActiveNote(null)}
                className="px-5 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-white hover:bg-slate-700"
              >
                Close Reader
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NotesPage;
