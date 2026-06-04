'use client';

import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaGithub } from 'react-icons/fa';

export default function ProjectDetail({ project }) {
  const { title, emoji, subtitle, desc, live, github, stack, role, type, status, year, features, challenges, improvements } = project;

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: 'var(--nav-h)' }}>
        {/* Hero */}
        <div className="py-[60px]" style={{ borderBottom: '1px solid var(--glass-border)' }}>
          <div className="max-w-[1120px] mx-auto px-5 md:px-[60px]">
            <Link
              href="/"
              className="inline-flex items-center gap-2 mb-10 px-4 py-2 rounded-[4px] text-[0.7rem] tracking-[0.06em] uppercase transition-all duration-200"
              style={{ fontFamily: 'var(--font-mono)', color: 'rgba(214,249,221,0.62)', background: 'var(--glass)', border: '1px solid var(--glass-border)' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#D6F9DD'; e.currentTarget.style.background = 'var(--glass-hover)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(214,249,221,0.62)'; e.currentTarget.style.background = 'var(--glass)'; }}
            >
              ← Back to Projects
            </Link>

            <div className="flex items-center gap-[18px] mb-[10px]">
              <div className="text-[2.8rem]">{emoji}</div>
              <div>
                <div
                  className="inline-flex items-center gap-[10px] mb-[6px] text-[0.68rem] tracking-[0.14em] uppercase"
                  style={{ fontFamily: 'var(--font-mono)', color: '#99F7AB' }}
                >
                  <span style={{ color: 'rgba(214,249,221,0.32)' }}>—</span> {subtitle}
                </div>
                <h1
                  className="font-bold leading-none tracking-[-0.02em]"
                  style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem,5vw,3.8rem)', color: '#D6F9DD' }}
                >
                  {title}
                </h1>
              </div>
            </div>

            <p className="text-[1.05rem] leading-[1.8] max-w-[640px] mb-7" style={{ color: 'rgba(214,249,221,0.62)' }}>
              {desc}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-[22px] py-3 rounded-[5px] font-medium text-[0.75rem] tracking-[0.05em] uppercase transition-all duration-200 hover:opacity-[0.88] hover:-translate-y-[2px]"
                style={{ fontFamily: 'var(--font-mono)', background: '#99F7AB', color: '#111f26' }}
              >
                🌐 Live Demo ↗
              </a>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-[22px] py-3 rounded-[5px] text-[0.75rem] tracking-[0.05em] uppercase transition-all duration-200 hover:-translate-y-[2px]"
                style={{ fontFamily: 'var(--font-mono)', background: 'var(--glass)', border: '1px solid var(--glass-border)', backdropFilter: 'blur(12px)', color: '#D6F9DD' }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'var(--glass-hover)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'var(--glass)'}
              >
                <FaGithub size={14} /> GitHub (Client) →
              </a>
            </div>

            {/* Meta grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] mt-11 overflow-hidden rounded-[5px]">
              {[
                { label: 'My Role', val: role },
                { label: 'Type', val: type },
                { label: 'Status', val: status, accent: true },
                { label: 'Year', val: year },
              ].map(({ label, val, accent }) => (
                <div key={label} className="px-[22px] py-5" style={{ background: 'var(--glass)', backdropFilter: 'blur(16px)', border: '1px solid var(--glass-border)' }}>
                  <div className="text-[0.62rem] uppercase tracking-[0.1em] mb-[6px]" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(214,249,221,0.32)' }}>{label}</div>
                  <div className="text-[0.9rem] font-bold" style={{ color: accent ? '#99F7AB' : '#D6F9DD' }}>{val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="py-[60px]">
          <div className="max-w-[1120px] mx-auto px-5 md:px-[60px]">
            <div className="grid gap-9 lg:grid-cols-[1fr_300px] items-start">

              {/* Main */}
              <div className="flex flex-col gap-7">
                {/* Challenges */}
                <div className="p-[30px] rounded-md" style={{ background: 'var(--glass)', border: '1px solid var(--glass-border)', backdropFilter: 'blur(20px)' }}>
                  <h3 className="font-bold mb-[18px] flex items-center gap-[10px]" style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: '#D6F9DD' }}>
                    Challenges Faced
                  </h3>
                  {challenges.map(({ title: ct, desc: cd }) => (
                    <div key={ct} className="mb-5 last:mb-0">
                      <div className="text-[0.75rem] tracking-[0.06em] uppercase mb-[6px]" style={{ fontFamily: 'var(--font-mono)', color: '#99F7AB' }}>{ct}</div>
                      <div className="text-[0.9rem] leading-[1.75]" style={{ color: 'rgba(214,249,221,0.62)' }}>{cd}</div>
                    </div>
                  ))}
                </div>

                {/* Future improvements */}
                <div className="p-[30px] rounded-md" style={{ background: 'var(--glass)', border: '1px solid var(--glass-border)', backdropFilter: 'blur(20px)' }}>
                  <h3 className="font-bold mb-[18px]" style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: '#D6F9DD' }}>
                    Future Improvements
                  </h3>
                  <ul className="pl-5 space-y-2">
                    {improvements.map((item) => (
                      <li key={item} className="text-[0.93rem] leading-[1.8]" style={{ color: 'rgba(214,249,221,0.62)' }}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sidebar */}
              <div className="flex flex-col gap-[18px]">
                {/* Stack */}
                <div className="p-[22px] rounded-[5px]" style={{ background: 'var(--glass)', border: '1px solid var(--glass-border)', backdropFilter: 'blur(20px)' }}>
                  <h4 className="text-[0.7rem] uppercase tracking-[0.1em] mb-[14px]" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(214,249,221,0.32)' }}>Tech Stack</h4>
                  <div className="flex flex-wrap gap-[7px]">
                    {stack.map((s) => <span key={s} className="sidebar-pill">{s}</span>)}
                  </div>
                </div>

                {/* Features */}
                <div className="p-[22px] rounded-[5px]" style={{ background: 'var(--glass)', border: '1px solid var(--glass-border)', backdropFilter: 'blur(20px)' }}>
                  <h4 className="text-[0.7rem] uppercase tracking-[0.1em] mb-[14px]" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(214,249,221,0.32)' }}>Key Features</h4>
                  <div className="flex flex-col gap-[9px]">
                    {features.map((f) => <div key={f} className="feature-item">{f}</div>)}
                  </div>
                </div>

                {/* Quick links */}
                <div className="p-[22px] rounded-[5px]" style={{ background: 'var(--glass)', border: '1px solid var(--glass-border)', backdropFilter: 'blur(20px)' }}>
                  <h4 className="text-[0.7rem] uppercase tracking-[0.1em] mb-[14px]" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(214,249,221,0.32)' }}>Quick Links</h4>
                  <div className="flex flex-col gap-[9px]">
                    <a
                      href={live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-[9px] px-[14px] py-[10px] rounded-[4px] text-[0.72rem] tracking-[0.04em] font-medium transition-opacity duration-200 hover:opacity-[0.88]"
                      style={{ fontFamily: 'var(--font-mono)', background: '#99F7AB', color: '#111f26' }}
                    >
                      🌐 View Live Site ↗
                    </a>
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-[9px] px-[14px] py-[10px] rounded-[4px] text-[0.72rem] tracking-[0.04em] transition-all duration-200"
                      style={{ fontFamily: 'var(--font-mono)', background: 'var(--glass)', border: '1px solid var(--glass-border)', color: 'rgba(214,249,221,0.62)' }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--glass-hover)'; e.currentTarget.style.color = '#D6F9DD'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--glass)'; e.currentTarget.style.color = 'rgba(214,249,221,0.62)'; }}
                    >
                      <FaGithub size={13} /> GitHub Repository →
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
