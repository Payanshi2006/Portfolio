import React from 'react';
import { ArrowUp, Github, Linkedin, Code2, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-warm-200 py-12 text-xs text-charcoal-600" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-warm-100">
          
          {/* Brand & Monogram */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-warm-100 border border-warm-300 flex items-center justify-center text-rose-700 font-serif font-bold text-sm">
              PJ
            </div>
            <div>
              <span className="font-serif font-semibold text-charcoal-900 text-sm">
                Payanshi Jain
              </span>
              <p className="text-[11px] font-mono text-charcoal-500">
                Full-Stack & Java Software Engineer • Jaipur, India (IST)
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-warm-50 hover:bg-rose-50 text-charcoal-700 hover:text-rose-700 border border-warm-200 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-warm-50 hover:bg-rose-50 text-charcoal-700 hover:text-rose-700 border border-warm-200 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.contact.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-warm-50 hover:bg-rose-50 text-charcoal-700 hover:text-rose-700 border border-warm-200 transition-colors"
              aria-label="LeetCode Profile"
            >
              <Code2 className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="ml-2 inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-warm-100 hover:bg-warm-200 text-charcoal-800 border border-warm-300 transition-all font-mono text-[11px]"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-charcoal-400">
          <div>
            © {currentYear} Payanshi Jain. Designed & developed with React, Vite & Tailwind CSS.
          </div>
          <div>
            B.Tech in Artificial Intelligence & Data Science • JECRC
          </div>
        </div>
      </div>
    </footer>
  );
}
