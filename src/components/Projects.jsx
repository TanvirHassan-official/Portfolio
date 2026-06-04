'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useReveal } from '@/hooks/useReveal';
import { projectsList } from '@/data/projects';

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="projects" className="py-24 lg:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 md:px-15">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="reveal inline-flex items-center gap-2.5 mb-[18px] text-[0.68rem] tracking-[0.14em] uppercase font-mono text-[#99F7AB]">
            <span className="text-[rgba(214,249,221,0.32)]">—</span> Featured Projects
          </div>
          <h2 className="reveal reveal-delay-1 font-bold leading-[1.08] tracking-[-0.02em] mb-4 font-display text-[clamp(2.2rem,4.5vw,3.4rem)] text-[#D6F9DD]">
            Selected work.
          </h2>
          <p className="reveal reveal-delay-2 text-base leading-[1.75] max-w-[540px] mx-auto text-[rgba(214,249,221,0.62)]">
            Real projects built with modern tooling and deployed to production.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectsList.map(({ slug, emoji, num, title, shortDesc, stack }, i) => (
            <Link
              key={slug}
              href={`/projects/${slug}`}
              className={`reveal reveal-delay-${i + 1} relative flex flex-col rounded-md overflow-hidden project-card-line
                bg-[var(--glass)] border border-[var(--glass-border)] backdrop-blur-xl
                hover:-translate-y-[7px] hover:border-[rgba(153,247,171,0.3)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]
                transition-all duration-[280ms]`}
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden aspect-[16/10] border-b border-[var(--glass-border)] bg-[#1e3c47]">
                <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
                  <Image
                    src={emoji}
                    alt={title}
                    fill
                    className="object-cover opacity-60"
                  />
                  <div className="font-bold text-center tracking-[-0.02em] z-10 relative font-display text-[1.6rem] text-[#D6F9DD]">
                    {title}
                  </div>
                </div>
                <div className="absolute top-3 left-3 text-[0.62rem] tracking-[0.06em] px-2.5 py-1 rounded-[3px] font-mono text-[#99F7AB] bg-[rgba(25,50,60,0.8)] border border-[var(--glass-border)] backdrop-blur-md">
                  {num}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold mb-2 font-display text-[1.25rem] text-[#D6F9DD]">
                  {title}
                </h3>
                <p className="text-sm leading-[1.7] flex-1 mb-4 text-[rgba(214,249,221,0.62)]">
                  {shortDesc}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-[18px]">
                  {stack.slice(0, 5).map((s) => (
                    <span key={s} className="stack-pill">{s}</span>
                  ))}
                </div>
                <span className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-[4px] w-full font-medium text-[0.72rem] tracking-[0.04em] uppercase font-mono bg-[#99F7AB] text-[#111f26] hover:opacity-[0.88] transition-opacity duration-200">
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