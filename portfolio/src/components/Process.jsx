'use client';

import { useReveal } from '@/hooks/useReveal';

const steps = [
  { num: '01', title: 'Understand', desc: 'Start with goals and user needs — clarifying what success looks like before writing a single line of code.', delay: 'reveal-delay-1' },
  { num: '02', title: 'Design', desc: 'Wireframe in Figma, establish component hierarchy and design tokens before development begins.', delay: 'reveal-delay-2' },
  { num: '03', title: 'Build', desc: 'Mobile-first, reusable React components — clean, typed, and tested across all viewports.', delay: 'reveal-delay-3' },
  { num: '04', title: 'Ship', desc: 'Audit Lighthouse scores, accessibility, and cross-browser compatibility before every deployment.', delay: 'reveal-delay-4' },
];

export default function Process() {
  const ref = useReveal();

  return (
    <section id="process" className="py-[clamp(80px,11vw,130px)]" ref={ref}>
      <div className="max-w-[1120px] mx-auto px-5 md:px-[60px]">
        <div className="text-center mb-14">
          <div className="reveal inline-flex items-center gap-[10px] mb-[18px] text-[0.68rem] tracking-[0.14em] uppercase"
            style={{ fontFamily: 'var(--font-mono)', color: '#99F7AB' }}>
            <span style={{ color: 'rgba(214,249,221,0.32)' }}>—</span> My Process
          </div>
          <h2
            className="reveal reveal-delay-1 font-bold leading-[1.08] tracking-[-0.02em] mb-4"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem,4.5vw,3.4rem)', color: '#D6F9DD' }}
          >
            How I work.
          </h2>
          <p className="reveal reveal-delay-2 text-[1rem] leading-[1.75] max-w-[540px] mx-auto" style={{ color: 'rgba(214,249,221,0.62)' }}>
            Consistent process. No surprises. Clean handoffs every time.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ num, title, desc, delay }) => (
            <div
              key={num}
              className={`reveal ${delay} text-center p-8 rounded-md transition-all duration-[240ms]`}
              style={{ background: 'var(--glass)', border: '1px solid var(--glass-border)', backdropFilter: 'blur(16px)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--glass-hover)';
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = 'rgba(153,247,171,0.25)';
                e.currentTarget.querySelector('.step-circle').style.background = '#99F7AB';
                e.currentTarget.querySelector('.step-circle').style.color = '#111f26';
                e.currentTarget.querySelector('.step-circle').style.borderColor = 'transparent';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--glass)';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.borderColor = 'var(--glass-border)';
                e.currentTarget.querySelector('.step-circle').style.background = 'var(--accent-dim)';
                e.currentTarget.querySelector('.step-circle').style.color = '#99F7AB';
                e.currentTarget.querySelector('.step-circle').style.borderColor = 'rgba(153,247,171,0.25)';
              }}
            >
              <div
                className="step-circle w-12 h-12 flex items-center justify-center mx-auto mb-5 rounded-full font-medium text-[0.85rem] transition-all duration-[240ms]"
                style={{ fontFamily: 'var(--font-mono)', background: 'var(--accent-dim)', border: '1px solid rgba(153,247,171,0.25)', color: '#99F7AB' }}
              >
                {num}
              </div>
              <h3 className="font-bold mb-[10px]" style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: '#D6F9DD' }}>
                {title}
              </h3>
              <p className="text-[0.83rem] leading-[1.65]" style={{ color: 'rgba(214,249,221,0.62)' }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
