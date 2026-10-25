import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Code2, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const handleResumeClick = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#9C5369', '#EBE3DA', '#713344', '#FAF8F5'],
        disableForReducedMotion: true
      });
    } catch {
      // Graceful fallback
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
      aria-label="Hero Introduction"
    >
      {/* Subtle background ambient warmth */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-100/40 rounded-full blur-3xl pointer-events-none -z-10 translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-warm-200/50 rounded-full blur-3xl pointer-events-none -z-10 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Bio (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-warm-300 shadow-subtle text-xs font-mono text-charcoal-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Software Engineer & Full-Stack Roles</span>
            </div>

            {/* Name & Titles */}
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-rose-700 font-semibold">
                Portfolio of Payanshi Jain
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-charcoal-900 leading-[1.12]">
                Building thoughtful software.
                <span className="block italic text-rose-700 font-serif">
                  Solving real-world problems.
                </span>
              </h1>
            </div>

            {/* Concise Authentic Introduction */}
            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed max-w-2xl font-normal">
              {personalInfo.bio}
            </p>

            {/* Role Tags */}
            <div className="flex flex-wrap gap-2 pt-1" aria-label="Target Roles">
              {personalInfo.titles.map((title) => (
                <span
                  key={title}
                  className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-md bg-warm-100 text-charcoal-700 border border-warm-200"
                >
                  <CheckCircle2 className="w-3 h-3 text-rose-600" />
                  {title}
                </span>
              ))}
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-rose-600 hover:bg-rose-700 shadow-subtle transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.contact.resumeUrl}
                download="Payanshi_Jain_Resume.pdf"
                onClick={handleResumeClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-charcoal-800 bg-white hover:bg-warm-100 border border-warm-300 hover:border-rose-400 shadow-subtle transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
              >
                <Download className="w-4 h-4 text-rose-600" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social & Coding Profile Links */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-charcoal-400">
                Connect:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white border border-warm-300 hover:border-rose-300 text-charcoal-700 hover:text-rose-700 transition-colors shadow-subtle"
                  aria-label="GitHub Profile (@Payanshi2006)"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white border border-warm-300 hover:border-rose-300 text-charcoal-700 hover:text-rose-700 transition-colors shadow-subtle"
                  aria-label="LinkedIn Profile (Payanshi Jain)"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.contact.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white border border-warm-300 hover:border-rose-300 text-charcoal-700 hover:text-rose-700 transition-colors shadow-subtle"
                  aria-label="LeetCode Profile (@payanshiJain2006)"
                  title="LeetCode Coding Profile"
                >
                  <Code2 className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Photograph & Key Highlights (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
              
              {/* Decorative Subtle Frame */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-warm-200 via-rose-100 to-warm-100 rounded-3xl -rotate-1 shadow-subtle -z-10" />
              
              {/* Image Container */}
              <div className="relative bg-white p-3 rounded-2xl border border-warm-200 shadow-editorial overflow-hidden">
                <img
                  src={personalInfo.contact.photoUrl}
                  alt="Payanshi Jain — Software Engineer and Full-Stack Developer"
                  className="w-full h-auto max-h-[440px] object-cover object-top rounded-xl filter contrast-[1.02]"
                  loading="eager"
                  width="440"
                  height="500"
                />

                {/* Floating Caption / Education pill */}
                <div className="absolute bottom-6 left-6 right-6 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-warm-200/90 shadow-editorial text-xs text-charcoal-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-serif font-semibold text-charcoal-900 text-sm">
                        Payanshi Jain
                      </div>
                      <div className="text-[11px] text-charcoal-500 font-mono">
                        B.Tech AI & Data Science • 9.20 CGPA
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-2 py-0.5 rounded bg-rose-50 text-rose-800 border border-rose-200 text-[10px] font-mono font-semibold">
                        JECRC 2027
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Proof-Points Ribbon */}
        <div className="mt-16 pt-8 border-t border-warm-200/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-serif font-normal text-charcoal-900">
              9.20 <span className="text-xs font-mono text-rose-700">CGPA</span>
            </div>
            <div className="text-xs text-charcoal-500">
              Academic distinction at JECRC (AI & DS)
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-serif font-normal text-charcoal-900">
              5 <span className="text-xs font-mono text-rose-700">Repos</span>
            </div>
            <div className="text-xs text-charcoal-500">
              Spring Boot, Kafka, MERN & AI architectures
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-serif font-normal text-charcoal-900">
              6 <span className="text-xs font-mono text-rose-700">Weeks</span>
            </div>
            <div className="text-xs text-charcoal-500">
              Full-stack intern at Cynbit Technologies
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-serif font-normal text-charcoal-900">
              Top 23 <span className="text-xs font-mono text-rose-700">Rank</span>
            </div>
            <div className="text-xs text-charcoal-500">
              National finalist in Smart India Hackathon
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
