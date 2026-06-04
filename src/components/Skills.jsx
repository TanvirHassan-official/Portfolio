'use client';

import { useReveal } from '@/hooks/useReveal';

const skillCards = [
  {
    cat: 'Core Stack',
    title: 'Frontend',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Tailwind CSS', 'DaisyUI'],
    delay: 'reveal-delay-1',
  },
  {
    cat: 'Backend & Database',
    title: 'Backend',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'REST API', 'JWT', 'Better Auth'],
    delay: 'reveal-delay-2',
  },
  {
    cat: 'Tools & Design',
    title: 'Tooling',
    tags: ['Git', 'GitHub', 'Figma', 'Vercel', 'Netlify', 'Vite', 'Webpack', 'Postman'],
    delay: 'reveal-delay-3',
  },
  {
    cat: 'Libraries',
    title: 'Ecosystem',
    tags: ['Framer Motion', 'Zustand', 'React Query', 'Recharts', 'React Toastify', 'Axios', 'Animate.css'],
    delay: 'reveal-delay-1',
  },
  {
    cat: 'Other Languages',
    title: 'Languages',
    tags: ['C', 'C++', 'Java', 'Python', 'Svelte', 'Gatsby', 'Bootstrap'],
    delay: 'reveal-delay-2',
  },
  {
    cat: 'Craft',
    title: 'Strengths',
    tags: ['Responsive Design', 'Accessibility', 'Performance', 'SEO', 'Component UI', 'Animation', 'UI/UX Advocacy'],
    delay: 'reveal-delay-3',
  },
];

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className="py-[clamp(80px,11vw,130px)]" ref={ref}>
      <div className="max-w-[1120px] mx-auto px-5 md:px-[60px]">
        <div className="text-center mb-14">
          <div className="reveal inline-flex items-center gap-[10px] mb-[18px] text-[0.68rem] tracking-[0.14em] uppercase"
            style={{ fontFamily: 'var(--font-mono)', color: '#99F7AB' }}>
            <span style={{ color: 'rgba(214,249,221,0.32)' }}>—</span> Technical Skills
          </div>
          <h2
            className="reveal reveal-delay-1 font-bold leading-[1.08] tracking-[-0.02em] mb-4"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem,4.5vw,3.4rem)', color: '#D6F9DD' }}
          >
            Tools I trust.
          </h2>
          <p className="reveal reveal-delay-2 text-[1rem] leading-[1.75] max-w-[540px] mx-auto" style={{ color: 'rgba(214,249,221,0.62)' }}>
            A curated stack — every tool here is one I use with confidence in production.
          </p>
        </div>

        <div className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
          {skillCards.map(({ cat, title, tags, delay }) => (
            <div
              key={title}
              className={`reveal ${delay} relative p-[30px] rounded-md overflow-hidden transition-all duration-[280ms] skill-card-line`}
              style={{ background: 'var(--glass)', border: '1px solid var(--glass-border)', backdropFilter: 'blur(20px)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.background = 'var(--glass-hover)';
                e.currentTarget.style.borderColor = 'rgba(153,247,171,0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.background = 'var(--glass)';
                e.currentTarget.style.borderColor = 'var(--glass-border)';
              }}
            >
              <div className="text-[0.64rem] tracking-[0.12em] uppercase mb-[10px]" style={{ fontFamily: 'var(--font-mono)', color: '#99F7AB' }}>
                {cat}
              </div>
              <h3 className="font-bold mb-[18px]" style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: '#D6F9DD' }}>
                {title}
              </h3>
              <div className="flex flex-wrap gap-[7px]">
                {tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
