import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Download, 
  FileText, 
  ExternalLink, 
  Linkedin, 
  Github, 
  Code2, 
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const validate = () => {
    const errs = {};
    if (!formState.name.trim()) errs.name = 'Please enter your name.';
    if (!formState.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email.trim())) {
      errs.email = 'Please enter a valid email format.';
    }
    if (!formState.subject.trim()) errs.subject = 'Please specify a subject.';
    if (!formState.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formState.message.trim().length < 15) {
      errs.message = 'Message should be at least 15 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Open mailto fallback with prepared contents
    const subjectEncoded = encodeURIComponent(`[Portfolio Inquiry] ${formState.subject}`);
    const bodyEncoded = encodeURIComponent(
      `Hi Payanshi,\n\nName: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}\n\nSent from Portfolio Website.`
    );
    const mailtoUrl = `mailto:${personalInfo.contact.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-warm-100/70 border-t border-warm-200/90 section-anchor"
      aria-label="Contact Information and Direct Inquiries"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-rose-700 font-semibold mb-2">
            <Mail className="w-4 h-4" />
            <span>09 / Contact & Direct Recruitment</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-charcoal-900 tracking-tight leading-tight">
            Let's discuss opportunities.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-charcoal-600">
            Currently interviewing for Software Engineer, Java Full-Stack, and Full-Stack Developer roles. Feel free to reach out directly via email or the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact & Resume Download (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl bg-white border border-warm-200 shadow-subtle space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-charcoal-400">
                Direct Email Address
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-warm-50 border border-warm-200">
                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="font-mono text-sm font-semibold text-charcoal-900 hover:text-rose-700 transition-colors break-all"
                >
                  {personalInfo.contact.email}
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-charcoal-700 hover:text-rose-800 bg-white border border-warm-300 hover:border-rose-300 transition-all shrink-0 self-start sm:self-center"
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-charcoal-500" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-charcoal-500">
                Direct email response typically within 24 business hours.
              </p>
            </div>

            {/* Resume Download Action */}
            <div className="p-6 rounded-2xl bg-white border border-warm-200 shadow-subtle space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-charcoal-400">
                Curriculum Vitae / Resume
              </div>
              <p className="text-xs text-charcoal-600">
                Includes complete academic transcripts, hackathon achievements, verified internship details, and technical repository links.
              </p>
              
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={personalInfo.contact.resumeUrl}
                  download="Payanshi_Jain_Resume.pdf"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-rose-600 hover:bg-rose-700 shadow-subtle transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF Resume</span>
                </a>

                <a
                  href={personalInfo.contact.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-medium text-charcoal-700 bg-warm-50 hover:bg-warm-100 border border-warm-200 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Open</span>
                  <ExternalLink className="w-3 h-3 text-charcoal-400" />
                </a>
              </div>
            </div>

            {/* Social / Profiles */}
            <div className="p-6 rounded-2xl bg-white border border-warm-200 shadow-subtle space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-charcoal-400">
                Professional Networks
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-warm-50 hover:bg-rose-50/60 border border-warm-200 hover:border-rose-200 transition-all text-xs text-charcoal-800"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-rose-700" />
                    <span>LinkedIn Profile</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-charcoal-400" />
                </a>

                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-warm-50 hover:bg-rose-50/60 border border-warm-200 hover:border-rose-200 transition-all text-xs text-charcoal-800"
                >
                  <span className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-rose-700" />
                    <span>GitHub (@Payanshi2006)</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-charcoal-400" />
                </a>

                <a
                  href={personalInfo.contact.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-warm-50 hover:bg-rose-50/60 border border-warm-200 hover:border-rose-200 transition-all text-xs text-charcoal-800"
                >
                  <span className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-rose-700" />
                    <span>LeetCode Profile</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-charcoal-400" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-warm-200 p-8 sm:p-10 shadow-editorial">
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="w-4 h-4 text-rose-600" />
              <h3 className="font-serif text-xl font-semibold text-charcoal-900">
                Send a Recruitment Message
              </h3>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-rose-50/80 border border-rose-200 text-charcoal-800 space-y-4 animate-in fade-in">
                <div className="flex items-center gap-2 text-rose-800 font-semibold text-base font-serif">
                  <Check className="w-5 h-5 text-rose-600" />
                  <span>Email Client Triggered</span>
                </div>
                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                  Your message was packaged and prepared in your default email client. If it did not launch automatically, you can send an email directly to <strong className="font-mono text-rose-900">{personalInfo.contact.email}</strong>.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormState({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="text-xs font-mono font-medium text-rose-800 hover:underline"
                  >
                    ← Send another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1">
                    <label htmlFor="contact-name" className="block text-xs font-mono text-charcoal-700">
                      Your Name <span className="text-rose-600">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Jane Doe"
                      className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-warm-50 border ${
                        errors.name ? 'border-red-400 bg-red-50/30' : 'border-warm-200'
                      } focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-500`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-600 font-mono mt-0.5">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1">
                    <label htmlFor="contact-email" className="block text-xs font-mono text-charcoal-700">
                      Your Email Address <span className="text-rose-600">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. recruiter@company.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-warm-50 border ${
                        errors.email ? 'border-red-400 bg-red-50/30' : 'border-warm-200'
                      } focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-500`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-600 font-mono mt-0.5">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1">
                  <label htmlFor="contact-subject" className="block text-xs font-mono text-charcoal-700">
                    Subject / Role Title <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="e.g. Software Engineer Opportunity / Interview Request"
                    className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-warm-50 border ${
                      errors.subject ? 'border-red-400 bg-red-50/30' : 'border-warm-200'
                    } focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-500`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-red-600 font-mono mt-0.5">{errors.subject}</p>
                  )}
                </div>

                {/* Message Textarea */}
                <div className="space-y-1">
                  <label htmlFor="contact-message" className="block text-xs font-mono text-charcoal-700">
                    Message <span className="text-rose-600">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Provide details about the engineering position, team stack, or project discussion..."
                    className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-warm-50 border ${
                      errors.message ? 'border-red-400 bg-red-50/30' : 'border-warm-200'
                    } focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-500`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-600 font-mono mt-0.5">{errors.message}</p>
                  )}
                </div>

                {/* Technical Transparency Note */}
                <div className="flex items-start gap-2 p-3 rounded-xl bg-warm-50 border border-warm-200 text-[11px] text-charcoal-600 leading-normal">
                  <AlertCircle className="w-3.5 h-3.5 text-charcoal-400 shrink-0 mt-0.5" />
                  <span>
                    Submitting activates your email client with your pre-filled inquiry directed to <strong className="font-mono text-charcoal-800">{personalInfo.contact.email}</strong>, ensuring privacy without unverified third-party form intermediaries.
                  </span>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-xs font-semibold text-white bg-rose-600 hover:bg-rose-700 shadow-subtle transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
