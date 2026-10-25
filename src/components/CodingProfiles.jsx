import React from 'react';
import { Github, Linkedin, Code2, ExternalLink, Terminal, CheckCircle2 } from 'lucide-react';
import { codingProfilesData } from '../data/portfolioData';

const PROFILE_ICONS = {
  GitHub: Github,
  LeetCode: Code2,
  LinkedIn: Linkedin,
};

export default function CodingProfiles() {
  return (
    <section
      id="profiles"
      className="py-16 bg-warm-50 section-anchor"
      aria-label="Coding Profiles and Technical Presence"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-rose-700 font-semibold mb-2">
            <Terminal className="w-4 h-4" />
            <span>08 / Online Technical Presence</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-charcoal-900 tracking-tight">
            Developer profiles and problem solving.
          </h2>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {codingProfilesData.map((item) => {
            const Icon = PROFILE_ICONS[item.platform] || Terminal;
            return (
              <div
                key={item.platform}
                className="bg-white rounded-2xl border border-warm-200 p-6 shadow-subtle hover:border-rose-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-warm-100 text-charcoal-800 border border-warm-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-rose-800 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded font-semibold">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-semibold text-charcoal-900 mb-0.5">
                    {item.platform}
                  </h3>
                  <div className="text-xs font-mono text-charcoal-500 mb-3">
                    @{item.username}
                  </div>

                  <p className="text-xs text-charcoal-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-warm-100">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-charcoal-800 bg-warm-50 hover:bg-rose-50 hover:text-rose-900 hover:border-rose-300 border border-warm-200 transition-all shadow-subtle"
                  >
                    <span>{item.primaryAction}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
