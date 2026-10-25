import React from 'react';
import { GraduationCap, Calendar, Award, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 bg-warm-100/60 border-t border-warm-200/80 section-anchor"
      aria-label="Educational Background and Academic Distinction"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-rose-700 font-semibold mb-2">
            <GraduationCap className="w-4 h-4" />
            <span>05 / Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-charcoal-900 tracking-tight">
            Education and foundational milestones.
          </h2>
        </div>

        {/* Academic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationData.map((item, index) => {
            const isCollege = index === 0;
            return (
              <div
                key={item.institution}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isCollege
                    ? 'bg-white border-2 border-rose-300/80 shadow-editorial'
                    : 'bg-white/80 border border-warm-200 shadow-subtle hover:bg-white'
                }`}
              >
                <div>
                  {/* Top Badge & Duration */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded font-semibold ${
                      isCollege
                        ? 'bg-rose-50 text-rose-800 border border-rose-200'
                        : 'bg-warm-100 text-charcoal-600 border border-warm-200'
                    }`}>
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-charcoal-400">
                      {item.duration}
                    </span>
                  </div>

                  {/* Institution Name */}
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-charcoal-900 leading-snug mb-1">
                    {item.institution}
                  </h3>
                  
                  {/* Qualification */}
                  <p className="text-xs sm:text-sm text-charcoal-600 mb-4">
                    {item.qualification}
                  </p>

                  {/* Score Callout */}
                  <div className="p-3.5 rounded-xl bg-warm-50 border border-warm-200 mb-6 flex items-center justify-between">
                    <span className="text-xs font-mono text-charcoal-500 uppercase tracking-wider">
                      Academic Distinction
                    </span>
                    <span className="text-xl font-serif font-semibold text-rose-800">
                      {item.score}
                    </span>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-charcoal-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-3 border-t border-warm-100 text-[10px] font-mono text-charcoal-400">
                  {isCollege ? 'Target Graduation: 2027 • Final Year' : 'Completed with distinction'}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
