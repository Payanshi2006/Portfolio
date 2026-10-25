import React, { useState } from 'react';
import { Trophy, Award, ExternalLink, X, FileText, CheckCircle2 } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export default function Achievements() {
  const [activePdf, setActivePdf] = useState(null);

  return (
    <section
      id="achievements"
      className="py-20 bg-warm-50 section-anchor"
      aria-label="Technical Achievements and Hackathons"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-rose-700 font-semibold mb-2">
            <Trophy className="w-4 h-4" />
            <span>06 / Verified Honors & Competitions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-charcoal-900 tracking-tight">
            Hackathons and leadership recognition.
          </h2>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementsData.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl border border-warm-200 p-6 sm:p-7 shadow-subtle hover:shadow-editorial transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-rose-50 text-rose-800 border border-rose-200 font-semibold">
                    {item.category}
                  </span>
                  <Award className="w-4 h-4 text-rose-600" />
                </div>

                <h3 className="font-serif text-xl font-semibold text-charcoal-900 mb-1">
                  {item.title}
                </h3>

                <div className="text-sm font-semibold text-rose-700 mb-3 font-mono">
                  {item.award}
                </div>

                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {item.certificateUrl ? (
                <div className="pt-4 border-t border-warm-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified Certificate
                  </span>
                  <a
                    href={item.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-rose-700 hover:text-rose-900 hover:underline"
                  >
                    <span>View PDF</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ) : (
                <div className="pt-4 border-t border-warm-100 text-[11px] font-mono text-charcoal-400">
                  Competitive Round Selection
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
