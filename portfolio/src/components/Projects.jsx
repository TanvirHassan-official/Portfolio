'use client';

import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';
import { projectsList } from '@/data/projects';

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="projects" className="py-[clamp(80px,11vw,130px)]" ref={ref}>
      <div className="max-w-[1120px] mx-auto px-5 md:px-[60px]">
        <div className="text-center mb-14">
          <div className="reveal inline-flex items-center gap-[10px] mb-[18px] text-[0.68rem] tracking-[0.14em] uppercase"
            style={{ fontFamily: 'var(--font-mono)', color: '#99F7AB' }}>
            <span style={{ color: 'rgba(214,249,221,0.32)' }}>—</span> Featured Projects
          </div>
          <h2
            className="reveal reveal-delay-1 font-bold leading-[1.08] tracking-[-0.02em] mb-4"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem,4.5vw,3.4rem)', color: '#D6F9DD' }}
          >
            Selected work.
          </h2>
          <p className="reveal reveal-delay-2 text-[1rem] leading-[1.75] max-w-[540px] mx-auto" style={{ color: 'rgba(214,249,221,0.62)' }}>
            Real projects built with modern tooling and deployed to production.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectsList.map(({ slug, emoji, num, title, shortDesc, stack }, i) => (
            <Link
              key={slug}
              href={`/projects/${slug}`}
              className={`reveal reveal-delay-${i + 1} relative flex flex-col rounded-md overflow-hidden transition-all duration-[280ms] project-card-line`}
              style={{ background: 'var(--glass)', border: '1px solid var(--glass-border)', backdropFilter: 'blur(20px)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-7px)';
                e.currentTarget.style.borderColor = 'rgba(153,247,171,0.3)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.borderColor = 'var(--glass-border)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/10', borderBottom: '1px solid var(--glass-border)', background: '#1e3c47' }}>
                <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-[5rem] opacity-10 transition-all duration-400">
                    {emoji}
                  </div>
                  <div className="font-bold text-center tracking-[-0.02em] z-10 relative" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: '#D6F9DD' }}>
                    {title}
                  </div>
                </div>
                <div
                  className="absolute top-3 left-3 text-[0.62rem] tracking-[0.06em] px-[10px] py-1 rounded-[3px]"
                  style={{ fontFamily: 'var(--font-mono)', color: '#99F7AB', background: 'rgba(25,50,60,0.8)', border: '1px solid var(--glass-border)', backdropFilter: 'blur(8px)' }}
                >
                  {num}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold mb-2" style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: '#D6F9DD' }}>
                  {title}
                </h3>
                <p className="text-[0.875rem] leading-[1.7] flex-1 mb-4" style={{ color: 'rgba(214,249,221,0.62)' }}>
                  {shortDesc}
                </p>
                <div className="flex flex-wrap gap-[6px] mb-[18px]">
                  {stack.slice(0, 5).map((s) => (
                    <span key={s} className="stack-pill">{s}</span>
                  ))}
                </div>
                <span
                  className="flex items-center justify-center gap-2 px-5 py-[10px] rounded-[4px] w-full font-medium text-[0.72rem] tracking-[0.04em] uppercase transition-opacity duration-200 hover:opacity-[0.88]"
                  style={{ fontFamily: 'var(--font-mono)', background: '#99F7AB', color: '#111f26' }}
                >
                  View Details →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
