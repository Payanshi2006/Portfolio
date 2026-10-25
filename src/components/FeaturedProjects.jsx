import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Layers, 
  Server, 
  Cpu, 
  Radio, 
  Compass, 
  ArrowRight, 
  Sparkles,
  Database,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const leadProject = projectsData.find((p) => p.tier === 'featured-lead');
  const supportingProjects = projectsData.filter((p) => p.tier === 'featured-supporting');
  const compactProjects = projectsData.filter((p) => p.tier === 'supporting-compact');

  return (
    <section
      id="projects"
      className="py-24 bg-warm-100/40 border-t border-warm-200/80 section-anchor"
      aria-label="Featured Projects and System Architectures"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-rose-700 font-semibold mb-2">
            <FolderGit2 className="w-4 h-4" />
            <span>03 / Verified Engineering Projects</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-charcoal-900 tracking-tight leading-tight">
            Production-grade systems, microservices, and web platforms.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-charcoal-600">
            Every project listed represents an inspected, functional implementation with public GitHub repositories, documented architectural decisions, and authentic technical ownership.
          </p>
        </div>

        {/* ============================================================== */}
        {/* 1. PROMINENT LEAD PROJECT: NeuroForge Nexus Individual         */}
        {/* ============================================================== */}
        {leadProject && (
          <div className="mb-14 bg-white rounded-3xl border border-warm-200/90 shadow-editorial overflow-hidden hover:border-rose-300/80 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Column: Project Details (7 cols) */}
              <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  {/* Badge & Lead Marker */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-mono font-semibold">
                      <Sparkles className="w-3.5 h-3.5 text-rose-600" />
                      Lead Flagship Project
                    </span>
                    <span className="text-xs font-mono text-charcoal-400">
                      Java 17 • Spring Boot 3 • Kafka
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-serif text-charcoal-900 font-normal leading-tight">
                    {leadProject.title}
                  </h3>
                  <p className="text-sm sm:text-base font-serif italic text-rose-700 mt-1 mb-4">
                    {leadProject.tagline}
                  </p>

                  <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed mb-6">
                    {leadProject.brief}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-mono uppercase tracking-wider text-charcoal-400 mb-1">
                      Key Technical Implementations
                    </div>
                    {leadProject.architecture.highlights.slice(0, 4).map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-charcoal-700">
                        <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {leadProject.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-warm-50 text-charcoal-700 border border-warm-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-warm-100">
                  <button
                    onClick={() => setSelectedProject(leadProject)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-rose-600 hover:bg-rose-700 shadow-subtle transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                  >
                    <span>View Architecture Deep-Dive</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={leadProject.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-charcoal-700 bg-white hover:bg-warm-100 border border-warm-300 hover:border-rose-400 shadow-subtle transition-all"
                  >
                    <Github className="w-4 h-4 text-charcoal-800" />
                    <span>GitHub Repository</span>
                    <ExternalLink className="w-3 h-3 text-charcoal-400" />
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive Microservice Schematic Preview (5 cols) */}
              <div className="lg:col-span-5 bg-warm-50/90 border-t lg:border-t-0 lg:border-l border-warm-200 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-charcoal-500 font-semibold flex items-center gap-1.5">
                      <Server className="w-3.5 h-3.5 text-rose-600" />
                      Microservice Topology
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                      Decoupled
                    </span>
                  </div>

                  {/* Microservices Nodes */}
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-xl bg-white border border-warm-200 shadow-subtle">
                      <div className="flex items-center justify-between text-xs font-mono font-semibold text-charcoal-900 mb-1">
                        <span>user-service (Spring Boot)</span>
                        <span className="text-rose-700 bg-rose-50 px-1.5 py-0.2 rounded border border-rose-200">:8081</span>
                      </div>
                      <p className="text-[11px] text-charcoal-600">
                        Spring Security JWT, Sprint Velocity & Burndown computation, MongoDB driver.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-warm-200 shadow-subtle">
                      <div className="flex items-center justify-between text-xs font-mono font-semibold text-charcoal-900 mb-1">
                        <span>cicd-service (Spring Boot)</span>
                        <span className="text-rose-700 bg-rose-50 px-1.5 py-0.2 rounded border border-rose-200">:8082</span>
                      </div>
                      <p className="text-[11px] text-charcoal-600">
                        Automated build triggers, Jenkins pipeline integration, containerized test runner.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-warm-200 shadow-subtle">
                      <div className="flex items-center justify-between text-xs font-mono font-semibold text-charcoal-900 mb-1">
                        <span>Spring Kafka Event Broker</span>
                        <span className="text-charcoal-600 bg-warm-100 px-1.5 py-0.2 rounded border border-warm-200">:9092</span>
                      </div>
                      <p className="text-[11px] text-charcoal-600">
                        Topic: <code className="text-rose-700 font-mono">task-events</code>. Emits TASK_CREATED, TASK_UPDATED, TASK_DELETED events.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-warm-200 shadow-subtle">
                      <div className="flex items-center justify-between text-xs font-mono font-semibold text-charcoal-900 mb-1">
                        <span>Prometheus Metrics</span>
                        <span className="text-charcoal-600 bg-warm-100 px-1.5 py-0.2 rounded border border-warm-200">:9090</span>
                      </div>
                      <p className="text-[11px] text-charcoal-600">
                        Spring Boot Actuator metric scraping for throughput, JVM health, and latency.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Architecture Note */}
                <div className="mt-6 pt-4 border-t border-warm-200/80 text-[11px] font-mono text-charcoal-500">
                  Target: Full-Stack Java Developer & Software Engineer roles.
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* 2. SUPPORTING PROJECTS: VendorMap & Tavilyte                  */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          {supportingProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl border border-warm-200 shadow-subtle hover:shadow-editorial transition-all duration-300 p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-rose-700 font-semibold">
                    {project.id === 'vendormap' ? 'Geospatial MERN Platform' : 'Agentic AI & Web Search'}
                  </span>
                  <span className="text-xs font-mono text-charcoal-400">
                    {project.id === 'vendormap' ? '2dsphere Indexing' : 'LangGraph + Tavily'}
                  </span>
                </div>

                <h3 className="text-2xl font-serif text-charcoal-900 font-normal">
                  {project.title}
                </h3>
                <p className="text-sm font-serif italic text-rose-700 mt-0.5 mb-3">
                  {project.tagline}
                </p>

                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed mb-5">
                  {project.brief}
                </p>

                {/* Architectural Highlights */}
                <div className="space-y-2 mb-6">
                  {project.architecture.highlights.slice(0, 3).map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-charcoal-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-1 rounded bg-warm-50 text-charcoal-700 border border-warm-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-warm-100">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-rose-700 hover:text-rose-900 inline-flex items-center gap-1 focus:outline-none focus-visible:underline"
                >
                  <span>Full Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-charcoal-700 hover:text-charcoal-900 bg-warm-50 hover:bg-warm-100 border border-warm-200 px-3 py-1.5 rounded-lg transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Repository</span>
                  <ExternalLink className="w-3 h-3 text-charcoal-400" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ============================================================== */}
        {/* 3. COMPACT CASE STUDIES: Cynbit Event System & PlacePrep      */}
        {/* ============================================================== */}
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-charcoal-400 mb-4">
            Additional Verified Implementations & Collaborative SaaS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {compactProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl border border-warm-200 p-6 shadow-subtle hover:border-rose-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono uppercase text-rose-700 font-semibold">
                      {project.id === 'placeprep' ? 'Java 25 & Spring Boot SaaS' : 'Industry Internship System'}
                    </span>
                    {project.liveUrl && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Live Vercel App
                      </span>
                    )}
                  </div>

                  <h4 className="text-xl font-serif text-charcoal-900 font-medium">
                    {project.title}
                  </h4>
                  <p className="text-xs font-serif italic text-charcoal-600 mb-3">
                    {project.tagline}
                  </p>
                  <p className="text-xs text-charcoal-600 leading-relaxed mb-4">
                    {project.brief}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.stack.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-warm-50 text-charcoal-700 border border-warm-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-warm-100">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-rose-700 hover:text-rose-900 inline-flex items-center gap-1"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-2.5 py-1 rounded"
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}

                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-charcoal-700 bg-warm-50 hover:bg-warm-100 border border-warm-200 px-2.5 py-1 rounded"
                    >
                      <Github className="w-3 h-3" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Deep-Dive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
