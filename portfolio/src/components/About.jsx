'use client';
 
import { useReveal } from '@/hooks/useReveal';
 
const badges = [
  {
    icon: '⚡',
    title: 'Performance-first mindset',
    sub: 'Core Web Vitals · Lighthouse · Bundle analysis',
  },
  {
    icon: '♿',
    title: 'Accessibility by default',
    sub: 'WCAG 2.1 · Semantic HTML · Keyboard nav',
  },
  {
    icon: '📱',
    title: 'Truly responsive design',
    sub: 'Mobile-first · All viewports · Touch-friendly',
  },
  {
    icon: '🎨',
    title: 'Design sensibility',
    sub: 'Figma · Design systems · Component tokens',
  },
  {
    icon: '🚀',
    title: 'Growing into full-stack',
    sub: 'MERN Stack · Node.js · Express · MongoDB',
  },
];
 
export default function About() {
  const ref = useReveal();
 
  return (
    <section
      id="about"
      ref={ref}
      className="py-[clamp(80px,11vw,130px)]"
    >
      <div className="max-w-[1120px] mx-auto px-5 md:px-[60px]">
        <div className="grid md:grid-cols-2 gap-20 items-start">
 
          {/* Left */}
          <div>
            <div className="reveal mb-4 inline-flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.14em] font-[family-name:var(--font-mono)] text-[#99F7AB]">
              <span className="text-[rgba(214,249,221,0.32)]">—</span>
              About Me
            </div>
 
            <h2 className="reveal reveal-delay-1 font-bold leading-[1.08] tracking-[-0.02em] mb-4 font-[family-name:var(--font-display)] text-[clamp(2.2rem,4.5vw,3.4rem)] text-[#D6F9DD]">
              Developer,<br />not just a coder.
            </h2>
 
            <div
              suppressHydrationWarning
              className="reveal reveal-delay-2 space-y-5 text-[1rem] leading-[1.85] text-[rgba(214,249,221,0.62)]"
            >
              <p suppressHydrationWarning>
                I&apos;m{' '}
                <strong className="font-bold text-[#D6F9DD]">Tanvir Hassan</strong>
                , a frontend developer from Dhaka, Bangladesh with a deep passion for crafting
                web experiences that are technically strong and visually compelling. My journey
                began when I first discovered how a few lines of HTML could create something on
                screen — and I have been hooked ever since.
              </p>
 
              <p suppressHydrationWarning>
                My specialty lies in the{' '}
                <strong className="font-bold text-[#D6F9DD]">React and Next.js ecosystem</strong>
                . I enjoy building component-driven architectures that are clean, maintainable,
                and performant. I don&apos;t just write code that works — I write code that
                scales, passes accessibility checks, and performs well on Core Web Vitals.
              </p>
 
              <p suppressHydrationWarning>
                I&apos;m currently{' '}
                <strong className="font-bold text-[#D6F9DD]">expanding into full-stack development</strong>
                {' '}with the MERN stack, and I&apos;m genuinely excited about building
                end-to-end products. I believe the best developers are naturally curious,
                and I&apos;m always learning.
              </p>
 
              <p suppressHydrationWarning>
                Outside the screen, you&apos;ll usually find me exploring UI design trends,
                following technology news, or enjoying a quiet evening with a good book.
                I bring that same attention to detail into every project I build.
              </p>
            </div>
          </div>
 
          {/* Right — badges */}
          <div className="reveal reveal-delay-3 flex flex-col gap-3">
            {badges.map((badge) => (
              <div
                key={badge.title}
                className="flex items-center gap-4 px-6 py-5 rounded-md cursor-default transition-all duration-300 hover:translate-x-[5px] hover:border-[rgba(153,247,171,0.25)] border border-[rgba(153,247,171,0.14)] backdrop-blur-[16px] bg-[rgba(153,247,171,0.06)]"
              >
                <div className="w-10 h-10 shrink-0 rounded-sm flex items-center justify-center text-[1.1rem] bg-[rgba(153,247,171,0.18)] border border-[rgba(153,247,171,0.14)]">
                  {badge.icon}
                </div>
                <div>
                  <div className="font-bold text-[0.88rem] mb-1 text-[#D6F9DD]">
                    {badge.title}
                  </div>
                  <div className="text-[0.65rem] font-[family-name:var(--font-mono)] text-[rgba(214,249,221,0.32)]">
                    {badge.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
 
        </div>
      </div>
    </section>
  );
}
 