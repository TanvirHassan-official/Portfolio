/* eslint-disable react-hooks/refs */
'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';


const stats = [
  { num: '2+', label: 'Years Exp.' },
  { num: '15+', label: 'Projects' },
  { num: '98', label: 'Lighthouse' },
  { num: '100%', label: 'Satisfaction' },
];

export default function Hero() {
  const refs = useRef([]);

  useEffect(() => {
    refs.current.forEach((el, i) => {
      if (!el) return;
      setTimeout(() => el.classList.add('visible'), 100 + i * 120);
    });
  }, []);

  const addRef = (i) => (el) => { refs.current[i] = el; };

  return (
    <section
      id="hero-section"
      className="min-h-svh flex items-center relative overflow-hidden"
      style={{ padding: 'calc(72px + 60px) 0 80px' }}
    >
      {/* Content */}
      <div className="relative z-10 max-w-[1120px] mx-auto px-5 md:px-[60px] w-full">
        <div className="grid gap-[80px] items-center" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>

          {/* Left */}
          <div>
            <div
              ref={addRef(0)}
              className="reveal inline-flex items-center gap-[10px] mb-7 px-4 py-[7px] rounded-[4px] text-[0.7rem] tracking-[0.1em] uppercase"
              style={{ fontFamily: 'var(--font-mono)', color: '#99F7AB', background: 'var(--accent-dim)', border: '1px solid var(--glass-border)' }}
            >
              <span className="w-[6px] h-[6px] rounded-full bg-[#99F7AB] animate-blink" />
              Available for Work &nbsp;·&nbsp; Dhaka, Bangladesh
            </div>

            <h1
              ref={addRef(1)}
              className="reveal reveal-delay-1 leading-[1.0] tracking-[-0.02em] font-bold mb-6"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem,6.5vw,5.6rem)', color: '#D6F9DD' }}
            >
              I build<br />interfaces that<br />
              <em style={{ color: '#99F7AB', fontStyle: 'italic' }}>perform.</em>
            </h1>

            <p
              ref={addRef(2)}
              className="reveal reveal-delay-2 text-[1.02rem] leading-[1.8] max-w-[500px] mb-10"
              style={{ color: 'rgba(214,249,221,0.62)', fontFamily: 'var(--font-body)' }}
            >
              I&apos;m <strong style={{ color: '#D6F9DD', fontWeight: 700 }}>Tanvir Hassan</strong> — a frontend developer
              specialising in React and Next.js, crafting responsive, accessible, and high-performance web experiences
              that users genuinely enjoy.
            </p>

            <div ref={addRef(3)} className="reveal reveal-delay-3 flex flex-wrap gap-[14px] mb-12">

              <a href="#projects"
                onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 px-7 py-[13px] rounded-md font-medium text-[0.78rem] tracking-[0.04em] uppercase transition-all duration-200 hover:opacity-[0.88] hover:-translate-y-[2px]"
                style={{ fontFamily: 'var(--font-mono)', background: '#99F7AB', color: '#111f26' }}
              >
                {'View Projects →'}
              </a>

              <a href="https://drive.google.com/file/d/1JTX9bpSEcP4OG5GF9740TUACzgn9O5Yf/view?usp=sharing"
                target='_blank'
                className="inline-flex items-center gap-2 px-7 py-[13px] rounded-md text-[0.78rem] tracking-[0.04em] uppercase transition-all duration-200 hover:-translate-y-[2px]"
                style={{
                  fontFamily: 'var(--font-mono)',
                  background: 'transparent',
                  border: '1px solid #99F7AB',
                  color: '#99F7AB',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'var(--accent-dim)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                {'View Resume →'}
              </a>
              {/* <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 px-7 py-[13px] rounded-md text-[0.78rem] tracking-[0.04em] uppercase transition-all duration-200 hover:-translate-y-[2px]"
                style={{
                  fontFamily: 'var(--font-mono)',
                  background: 'var(--glass)',
                  border: '1px solid var(--glass-border)',
                  backdropFilter: 'blur(12px)',
                  color: '#D6F9DD',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'var(--glass-hover)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'var(--glass)'}
              >
                {'Contact Me'}
              </a> */}
            </div>

            {/* Stats
            <div
              ref={addRef(4)}
              className="reveal reveal-delay-4 grid grid-cols-2 sm:grid-cols-4 gap-[1px] rounded-md overflow-hidden"
            >
              {stats.map(({ num, label }) => (
                <div
                  key={label}
                  className="py-[18px] px-4 text-center"
                  style={{ background: 'var(--glass)', border: '1px solid var(--glass-border)', backdropFilter: 'blur(12px)' }}
                >
                  <div className="leading-none mb-1 font-bold" style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: '#99F7AB' }}>{num}</div>
                  <div className="text-[0.62rem] uppercase tracking-[0.08em]" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(214,249,221,0.32)' }}>{label}</div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Right — Photo */}
          <div className="max-w-100 w-full mx-auto lg:mx-0">
            <div className="relative w-full rounded-sm overflow-hidden" style={{ aspectRatio: '4/5', background: '#1e3c47', border: '1px solid var(--glass-border)' }}>
              <Image
                src="/assets/hehe.jpeg"
                alt="Tanvir Hassan — Frontend Developer"
                fill
                sizes="w-full"
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 55%, rgba(17,31,38,0.75))' }} />
              {/* <div
                className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 px-[18px] py-2 rounded-[4px] text-[0.68rem] tracking-[0.06em] uppercase whitespace-nowrap"
                style={{ fontFamily: 'var(--font-mono)', color: '#99F7AB', background: 'rgba(25,50,60,0.85)', border: '1px solid var(--glass-border)', backdropFilter: 'blur(12px)' }}
              >
                <span className="w-[6px] h-[6px] rounded-full bg-[#99F7AB] animate-blink" />
                Open to work
              </div> */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}