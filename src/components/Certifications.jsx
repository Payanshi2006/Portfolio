import React from 'react';
import { BadgeCheck, Calendar, ShieldCheck } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-16 bg-warm-100/40 border-t border-warm-200/80 section-anchor"
      aria-label="Industry Credentials and Technical Certifications"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-rose-700 font-semibold mb-2">
            <BadgeCheck className="w-4 h-4" />
            <span>07 / Industry Credentials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-charcoal-900 tracking-tight">
            Verified technical certifications.
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.name}
              className="bg-white rounded-2xl border border-warm-200 p-6 shadow-subtle hover:border-rose-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-warm-100 text-charcoal-600 border border-warm-200">
                    {cert.issuer}
                  </span>
                  <span className="text-xs font-mono text-charcoal-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-semibold text-charcoal-900 leading-snug mb-2">
                  {cert.name}
                </h3>

                <p className="text-xs text-charcoal-600 leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              <div className="pt-3 border-t border-warm-100 flex items-center justify-between text-[11px] font-mono">
                <span className="text-emerald-700 flex items-center gap-1 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  {cert.status}
                </span>
                <span className="text-charcoal-400">
                  {cert.credentialId}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
