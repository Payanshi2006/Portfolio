import React from 'react';
import { Layers, Server, ShieldCheck, Database, Cpu, Compass } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const CORE_PILLARS = [
  {
    icon: Server,
    title: "Backend Engineering",
    description: "Designing reliable RESTful services in Java (Spring Boot) and Node.js/Express, focusing on clean separation of concerns, input validation, and predictable status handling."
  },
  {
    icon: ShieldCheck,
    title: "Authentication & Security",
    description: "Implementing stateless JWT architectures, secure HTTP-only cookies, password hashing with BCrypt, and role-based access control (Admin/User permissions)."
  },
  {
    icon: Database,
    title: "Database Modeling",
    description: "Structuring document schemas with MongoDB (utilizing GeoJSON and 2dsphere spatial indexing) and relational modeling in MySQL to match real querying access patterns."
  },
  {
    icon: Layers,
    title: "Full-Stack Integration",
    description: "Connecting responsive React user interfaces to backend endpoints with clear state synchronization, error boundaries, and low-latency WebSocket streaming."
  }
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-warm-100/60 border-y border-warm-200/70 section-anchor"
      aria-label="About Payanshi Jain"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-rose-700 font-semibold mb-2">
            <Compass className="w-4 h-4" />
            <span>01 / Background & Engineering Approach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-charcoal-900 tracking-tight">
            Engineering with curiosity, discipline, and verifiable code.
          </h2>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-charcoal-700 leading-relaxed text-base sm:text-lg">
            <p className="editorial-dropcap">
              {personalInfo.extendedBio[0]}
            </p>
            <p>
              {personalInfo.extendedBio[1]}
            </p>
            <p>
              {personalInfo.extendedBio[2]}
            </p>

            {/* Quote / Editorial Pullout */}
            <div className="mt-6 p-5 rounded-xl bg-white border-l-4 border-rose-600 shadow-subtle border border-warm-200">
              <p className="text-sm font-serif italic text-charcoal-800 leading-normal">
                "I value codebases that prioritize clear separation of concerns, readable business logic, and verifiable tests over superficial complexity."
              </p>
              <div className="mt-2 text-xs font-mono text-charcoal-500">
                — Payanshi Jain • Core Development Principle
              </div>
            </div>
          </div>

          {/* Right Column: Focus Pillars (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="text-xs font-mono uppercase tracking-wider text-charcoal-400 mb-1">
              Core Technical Competencies
            </div>

            {CORE_PILLARS.map((pillar) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-5 rounded-xl bg-white border border-warm-200 shadow-subtle hover:border-rose-300 transition-all duration-200"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-lg bg-warm-100 text-rose-700 border border-warm-200 shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-charcoal-900 font-serif">
                        {pillar.title}
                      </h3>
                      <p className="mt-1 text-xs text-charcoal-600 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
