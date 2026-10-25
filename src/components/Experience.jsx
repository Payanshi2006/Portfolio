import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, ExternalLink, X } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  const [showCertificate, setShowCertificate] = useState(false);

  return (
    <section
      id="experience"
      className="py-20 bg-warm-50 section-anchor"
      aria-label="Professional Experience and Industry Internship"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-rose-700 font-semibold mb-2">
            <Briefcase className="w-4 h-4" />
            <span>04 / Professional Work Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-charcoal-900 tracking-tight">
            Industry development experience.
          </h2>
        </div>

        {/* Experience Timeline / Cards */}
        <div className="space-y-8">
          {experienceData.map((exp) => (
            <div
              key={exp.company}
              className="bg-white rounded-3xl border border-warm-200 p-8 sm:p-10 shadow-editorial relative overflow-hidden"
            >
              {/* Subtle top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-600 via-rose-400 to-warm-200" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Meta Column (4 cols) */}
                <div className="lg:col-span-4 space-y-4">
                  <div>
                    <span className="inline-block text-[11px] font-mono uppercase tracking-wider text-rose-800 bg-rose-50 border border-rose-200 px-2.5 py-1 rounded-md mb-2 font-semibold">
                      {exp.type}
                    </span>
                    <h3 className="text-2xl font-serif text-charcoal-900 font-semibold">
                      {exp.company}
                    </h3>
                    <p className="text-sm font-medium text-rose-700 mt-0.5">
                      {exp.role}
                    </p>
                  </div>

                  <div className="space-y-2 text-xs font-mono text-charcoal-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-charcoal-400" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-charcoal-400" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 text-charcoal-400" />
                      <span>Project: {exp.project}</span>
                    </div>
                  </div>

                  {/* Certificate Action */}
                  {exp.certificateUrl && (
                    <div className="pt-2">
                      <button
                        onClick={() => setShowCertificate(true)}
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium text-rose-800 bg-rose-50 hover:bg-rose-100/80 border border-rose-200 transition-colors shadow-subtle"
                      >
                        <Award className="w-4 h-4 text-rose-600" />
                        <span>View Verified Certificate</span>
                        <ExternalLink className="w-3 h-3 text-rose-500" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Right Responsibilities Column (8 cols) */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="text-xs font-mono uppercase tracking-wider text-charcoal-400">
                    Delivered Responsibilities & Engineering Contributions
                  </div>

                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-warm-100 flex flex-wrap gap-2">
                    <span className="text-xs font-mono text-charcoal-400 mr-1 self-center">Stack:</span>
                    {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'REST APIs', 'RBAC'].map((tag) => (
                      <span key={tag} className="text-xs font-mono px-2.5 py-0.5 rounded bg-warm-50 text-charcoal-700 border border-warm-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Certificate Viewer Modal */}
      {showCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-900/70 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 border border-warm-200 shadow-2xl flex flex-col">
            <div className="flex items-center justify-between pb-4 border-b border-warm-200 mb-4">
              <div>
                <h4 className="font-serif font-semibold text-charcoal-900 text-lg">
                  Cynbit Technologies — Internship Certificate
                </h4>
                <p className="text-xs font-mono text-charcoal-500">
                  Full Stack Development Intern • July – August 2025
                </p>
              </div>
              <button
                onClick={() => setShowCertificate(false)}
                className="p-1.5 rounded-lg text-charcoal-500 hover:text-charcoal-900 hover:bg-warm-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-hidden rounded-xl border border-warm-200 max-h-[70vh] flex items-center justify-center bg-warm-50">
              <img
                src={experienceData[0].certificateUrl}
                alt="Cynbit Technologies Internship Certificate for Payanshi Jain"
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="mt-4 pt-3 border-t border-warm-200 flex justify-end">
              <a
                href={experienceData[0].certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-rose-700 hover:underline inline-flex items-center gap-1"
              >
                <span>Open original image in new tab</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
