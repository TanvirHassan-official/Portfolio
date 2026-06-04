'use client';

import { useReveal } from '@/hooks/useReveal';

export default function Education() {
  const ref = useReveal();

  return (
    <section id="education" className="py-[clamp(80px,11vw,130px)]" ref={ref}>
      <div className="max-w-[1120px] mx-auto px-5 md:px-[60px]">
        <div className="text-center mb-14">
          <div
            className="reveal inline-flex items-center gap-[10px] mb-[18px] text-[0.68rem] tracking-[0.14em] uppercase"
            style={{ fontFamily: 'var(--font-mono)', color: '#99F7AB' }}
          >
            <span style={{ color: 'rgba(214,249,221,0.32)' }}>—</span> Education
          </div>
          <h2
            className="reveal reveal-delay-1 font-bold leading-[1.08] tracking-[-0.02em]"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem,4.5vw,3.4rem)',
              color: '#D6F9DD',
            }}
          >
            Academic background.
          </h2>
        </div>

        <div className="reveal reveal-delay-2 flex flex-col gap-[22px]">
          <div
            className="relative p-5 sm:p-7 rounded-md transition-all duration-200"
            style={{
              background: 'var(--glass)',
              border: '1px solid var(--glass-border)',
              backdropFilter: 'blur(20px)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--glass-hover)';
              e.currentTarget.style.transform = 'translateX(5px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--glass)';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <div className="flex flex-col sm:flex-row sm:gap-8">
              {/* Date */}
              <div
                className="text-[0.7rem] tracking-[0.04em] mb-3 sm:mb-0 sm:pt-1 sm:min-w-[160px] sm:max-w-[160px]"
                style={{ fontFamily: 'var(--font-mono)', color: '#99F7AB' }}
              >
                2022 — Present
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3
                  className="font-bold mb-1 text-[1.05rem] sm:text-[1.2rem]"
                  style={{ fontFamily: 'var(--font-display)', color: '#D6F9DD' }}
                >
                  B.Sc. in Computer Science &amp; Engineering
                </h3>
                <div
                  className="text-[0.75rem] tracking-[0.04em] mb-[10px]"
                  style={{ fontFamily: 'var(--font-mono)', color: '#99F7AB' }}
                >
                  Currently Pursuing · Dhaka, Bangladesh
                </div>
                <p
                  className="text-[0.85rem] sm:text-[0.9rem] leading-[1.75]"
                  style={{ color: 'rgba(214,249,221,0.62)' }}
                >
                  Studying computer science fundamentals including data structures, algorithms,
                  databases, software engineering, and computer networks. Supplementing coursework
                  with hands-on web development projects to bridge theory and practice — building
                  real-world applications that apply what I learn in the classroom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}