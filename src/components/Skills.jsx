import React, { useState } from 'react';
import { Code, Terminal, Server, Layout, Database, Wrench, BookOpen, Star } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const CATEGORY_ICONS = {
  "Programming Languages": Code,
  "Backend & Systems": Server,
  "Frontend Engineering": Layout,
  "Databases & Storage": Database,
  "Developer Tools & DevOps": Wrench,
  "Computer Science Fundamentals": BookOpen,
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const displayedSkills = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter((s) => s.category === selectedCategory);

  return (
    <section
      id="skills"
      className="py-20 bg-warm-50 section-anchor"
      aria-label="Technical Skills and Core Competencies"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-rose-700 font-semibold mb-2">
              <Terminal className="w-4 h-4" />
              <span>02 / Technical Proficiencies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-charcoal-900 tracking-tight">
              Tools, languages, and core computer science foundations.
            </h2>
          </div>

          <p className="text-xs font-mono text-charcoal-500 max-w-xs">
            * Emphasizing Java backend engineering, RESTful APIs, Spring Boot microservices, and React.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-warm-200/80">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-mono px-3.5 py-1.5 rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 ${
                  isSelected
                    ? 'bg-rose-600 text-white font-medium shadow-subtle'
                    : 'bg-white text-charcoal-600 hover:text-charcoal-900 border border-warm-200 hover:border-warm-300'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedSkills.map((group) => {
            const IconComponent = CATEGORY_ICONS[group.category] || Code;
            return (
              <div
                key={group.category}
                className="bg-white rounded-2xl border border-warm-200 p-6 shadow-subtle hover:shadow-editorial transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-4 mb-4 border-b border-warm-100">
                    <div className="p-2 rounded-lg bg-warm-100 text-rose-700 border border-warm-200">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-charcoal-900 text-base">
                        {group.category}
                      </h3>
                      <p className="text-[11px] text-charcoal-400 font-mono">
                        {group.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {group.items.map((skill) => (
                      <div
                        key={skill.name}
                        className={`p-2.5 rounded-lg transition-colors border ${
                          skill.featured
                            ? 'bg-rose-50/50 border-rose-200/80'
                            : 'bg-warm-50/60 border-warm-100'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`text-xs font-semibold ${skill.featured ? 'text-rose-900 font-mono' : 'text-charcoal-800'}`}>
                            {skill.name}
                          </span>
                          {skill.featured && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-mono font-medium text-rose-700 bg-white border border-rose-200 px-1.5 py-0.5 rounded">
                              <Star className="w-2.5 h-2.5 fill-rose-600 text-rose-600" />
                              Primary
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-charcoal-500 mt-1 leading-snug">
                          {skill.note}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-warm-100 text-[10px] font-mono text-charcoal-400 flex items-center justify-between">
                  <span>{group.items.length} verified competencies</span>
                  <span className="text-rose-600">•</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
