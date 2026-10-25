import React, { useEffect } from 'react';
import { X, Github, ExternalLink, Cpu, CheckCircle2, Server, ArrowRight, ShieldCheck, Database } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl border border-warm-200 shadow-2xl overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-warm-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-rose-700 font-semibold">
              Deep-Dive Case Study
            </span>
            <span className="text-charcoal-300">•</span>
            <span className="text-xs font-mono text-charcoal-500">
              {project.id}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-charcoal-500 hover:text-charcoal-900 hover:bg-warm-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
            aria-label="Close modal dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Project Title & Tagline */}
          <div className="space-y-2">
            <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-serif text-charcoal-900">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base font-serif italic text-rose-700">
              {project.tagline}
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-3 py-1 rounded-md bg-warm-100 text-charcoal-800 border border-warm-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-warm-50 border border-warm-200 space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-charcoal-500 font-semibold">
                Problem Statement
              </div>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-200 space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-rose-800 font-semibold">
                Engineered Solution
              </div>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Microservices Breakdown (if available) */}
          {project.architecture?.services && (
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-charcoal-500 font-semibold flex items-center gap-2">
                <Server className="w-4 h-4 text-rose-600" />
                <span>Microservice Architecture & Port Allocations</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.architecture.services.map((svc) => (
                  <div key={svc.name} className="p-3.5 rounded-lg border border-warm-200 bg-white shadow-subtle">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-xs font-semibold text-charcoal-900">{svc.name}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-warm-100 text-charcoal-600 border border-warm-200">Port {svc.port}</span>
                    </div>
                    <p className="text-[11px] text-charcoal-600">{svc.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Architectural Decisions & Features */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-charcoal-500 font-semibold flex items-center gap-2">
              <Cpu className="w-4 h-4 text-rose-600" />
              <span>Technical Decisions & Implementation Highlights</span>
            </div>
            <ul className="space-y-2">
              {project.architecture?.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-700">
                  <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Personal Contribution */}
          <div className="p-4 rounded-xl bg-warm-100/70 border border-warm-300 space-y-1.5">
            <div className="text-xs font-mono uppercase tracking-wider text-charcoal-600 font-semibold">
              Verified Individual Contribution
            </div>
            <p className="text-xs sm:text-sm text-charcoal-800 leading-relaxed">
              {project.contributions}
            </p>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="sticky bottom-0 bg-warm-50/95 backdrop-blur-md px-6 py-4 border-t border-warm-200 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs font-mono text-charcoal-500">
            Source repository hosted on GitHub
          </div>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-charcoal-800 bg-white hover:bg-warm-100 border border-warm-300 shadow-subtle transition-all"
              >
                <span>Live Deployment</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg text-xs font-semibold text-white bg-rose-600 hover:bg-rose-700 shadow-subtle transition-all"
            >
              <Github className="w-3.5 h-3.5" />
              <span>View GitHub Repository</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
