import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section scrollspy
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-warm-50/95 backdrop-blur-md shadow-subtle border-b border-warm-200/80 py-3'
          : 'bg-transparent py-5'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#home"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded-lg p-1"
            aria-label="Payanshi Jain — Return to top"
          >
            <div className="w-10 h-10 rounded-full bg-warm-100 border border-warm-300 flex items-center justify-center text-rose-700 font-serif font-bold text-lg group-hover:bg-rose-50 group-hover:border-rose-300 transition-colors">
              PJ
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-semibold tracking-tight text-charcoal-900 group-hover:text-rose-700 transition-colors leading-tight">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-mono tracking-wider text-charcoal-500 uppercase">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-warm-100/80 border border-warm-200/90 rounded-full px-3 py-1.5 backdrop-blur-sm" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 ${
                    isActive
                      ? 'bg-white text-rose-800 shadow-sm font-semibold border border-rose-200/60'
                      : 'text-charcoal-600 hover:text-charcoal-900 hover:bg-white/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={personalInfo.contact.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-charcoal-700 hover:text-rose-700 bg-white hover:bg-rose-50/70 border border-warm-300 hover:border-rose-300 px-3.5 py-2 rounded-lg transition-all shadow-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
            >
              <FileText className="w-3.5 h-3.5 text-rose-600" />
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-700 px-4 py-2 rounded-lg transition-colors shadow-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
            >
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={personalInfo.contact.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden inline-flex items-center gap-1 text-xs font-medium text-rose-700 bg-white border border-rose-200 px-2.5 py-1.5 rounded-md"
              aria-label="Resume PDF"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-charcoal-700 hover:text-charcoal-900 hover:bg-warm-100 border border-warm-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
              aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-[60px] bg-warm-50/98 backdrop-blur-xl border-b border-warm-200 z-40 flex flex-col p-6 overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="text-xs font-mono uppercase tracking-wider text-charcoal-400 mb-4 pb-2 border-b border-warm-200">
            Navigation Index
          </div>
          <nav className="flex flex-col gap-1.5">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between text-base px-4 py-3 rounded-xl transition-all ${
                    isActive
                      ? 'bg-rose-50 text-rose-900 font-semibold border border-rose-200'
                      : 'text-charcoal-700 hover:text-charcoal-900 hover:bg-warm-100'
                  }`}
                >
                  <span className="font-serif">{link.name}</span>
                  <span className="text-xs font-mono text-charcoal-400">
                    #{link.href.substring(1)}
                  </span>
                </a>
              );
            })}
          </nav>

          <div className="mt-8 pt-6 border-t border-warm-200 flex flex-col gap-3">
            <a
              href={personalInfo.contact.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-medium text-charcoal-800 bg-white border border-warm-300 hover:border-rose-400 shadow-subtle"
            >
              <FileText className="w-4 h-4 text-rose-600" />
              <span>Download Official Resume (PDF)</span>
              <ArrowUpRight className="w-4 h-4 text-charcoal-400" />
            </a>

            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-semibold text-white bg-rose-600 hover:bg-rose-700 shadow-subtle"
            >
              <span>Contact Payanshi</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
