'use client';

import { useReveal } from '@/hooks/useReveal';
import { FaGithub, FaLinkedin, FaWhatsapp, FaGlobe } from 'react-icons/fa';

const infoCards = [
  { icon: '💼', title: 'Open to full-time roles', sub: 'Frontend / UI Engineer positions' },
  { icon: '🚀', title: 'Available for freelance', sub: 'React apps, landing pages, redesigns' },
  { icon: '⏱', title: 'Fast response time', sub: 'Usually within 24 hours' },
  { icon: '🌏', title: 'Remote-friendly', sub: 'Comfortable working with global teams' },
  { icon: '📍', title: 'Dhaka, Bangladesh', sub: 'GMT+6 timezone' },
];

const socials = [
  { href: 'https://github.com/TanvirHassan-official', icon: <FaGithub size={13} />, label: 'GitHub' },
  { href: 'https://linkedin.com/in/tanvir-hassan-bd/', icon: <FaLinkedin size={13} />, label: 'LinkedIn' },
  { href: 'https://wa.me/8801534900825', icon: <FaWhatsapp size={13} />, label: 'WhatsApp' },
  { href: 'https://tanvirofficial.com', icon: <FaGlobe size={13} />, label: 'Website' },
];

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" className="py-[clamp(80px,11vw,130px)]" ref={ref}>
      <div className="max-w-[1120px] mx-auto px-5 md:px-[60px]">
        <div className="grid gap-[60px] items-start md:grid-cols-2">

          {/* Left */}
          <div>
            <div className="reveal inline-flex items-center gap-[10px] mb-[18px] text-[0.68rem] tracking-[0.14em] uppercase"
              style={{ fontFamily: 'var(--font-mono)', color: '#99F7AB' }}>
              <span style={{ color: 'rgba(214,249,221,0.32)' }}>—</span> Get In Touch
            </div>
            <h2
              className="reveal reveal-delay-1 font-bold leading-[1.08] tracking-[-0.02em] mb-4"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem,4.5vw,3.4rem)', color: '#D6F9DD' }}
            >
              Let&apos;s build something<br />
              <em style={{ color: '#99F7AB', fontStyle: 'italic' }}>worth shipping.</em>
            </h2>
            <p className="reveal reveal-delay-2 text-[1rem] leading-[1.75] max-w-[540px] mb-0" style={{ color: 'rgba(214,249,221,0.62)' }}>
              Open to full-time roles and freelance projects. I respond within 24 hours.
            </p>

            <a
              href="mailto:tanvirhassan0006@gmail.com"
              className="reveal reveal-delay-2 inline-flex items-center gap-[10px] font-bold my-[22px] pb-4 transition-opacity duration-200 hover:opacity-75"
              style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: '#99F7AB', borderBottom: '1px solid var(--glass-border)' }}
            >
              📧 tanvirhassan0006@gmail.com
            </a>

            <div className="reveal reveal-delay-3 space-y-2 mb-7">
              <div className="flex items-center gap-[10px] text-[0.82rem]" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(214,249,221,0.62)' }}>
                📞 <span style={{ color: '#D6F9DD' }}>+880 1534-900825</span>
              </div>
              <div className="flex items-center gap-[10px] text-[0.82rem]" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(214,249,221,0.62)' }}>
                💬 WhatsApp: <span style={{ color: '#D6F9DD' }}>+880 1534-900825</span>
              </div>
            </div>

            <div className="reveal reveal-delay-3 flex flex-wrap gap-3 mb-9">
              <a
                href="mailto:tanvirhassan0006@gmail.com"
                className="inline-flex items-center gap-2 px-7 py-[13px] rounded-md font-medium text-[0.78rem] tracking-[0.04em] uppercase transition-all duration-200 hover:opacity-[0.88] hover:-translate-y-[2px]"
                style={{ fontFamily: 'var(--font-mono)', background: '#99F7AB', color: '#111f26' }}
              >
                Send Email →
              </a>
              <a
                href="https://wa.me/8801534900825"
                target="_blank"
                rel="noopener noreferrer"
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
                WhatsApp ↗
              </a>
            </div>

            <div className="reveal reveal-delay-4">
              <div className="text-[0.62rem] uppercase tracking-[0.12em] mb-[14px]" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(214,249,221,0.32)' }}>
                Find me on
              </div>
              <div className="flex flex-wrap gap-2">
                {socials.map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-[7px] px-4 py-[9px] rounded-[4px] text-[0.7rem] tracking-[0.04em] transition-all duration-200"
                    style={{ fontFamily: 'var(--font-mono)', background: 'var(--glass)', border: '1px solid var(--glass-border)', backdropFilter: 'blur(12px)', color: 'rgba(214,249,221,0.62)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#D6F9DD';
                      e.currentTarget.style.background = 'var(--glass-hover)';
                      e.currentTarget.style.borderColor = 'rgba(153,247,171,0.25)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(214,249,221,0.62)';
                      e.currentTarget.style.background = 'var(--glass)';
                      e.currentTarget.style.borderColor = 'var(--glass-border)';
                    }}
                  >
                    {icon} {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — info cards */}
          <div className="reveal reveal-delay-2 flex flex-col gap-[14px]">
            {infoCards.map(({ icon, title, sub }) => (
              <div
                key={title}
                className="flex items-center gap-4 px-6 py-5 rounded-[5px] transition-all duration-200"
                style={{ background: 'var(--glass)', border: '1px solid var(--glass-border)', backdropFilter: 'blur(20px)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--glass-hover)';
                  e.currentTarget.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--glass)';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <div className="text-[1.2rem] flex-shrink-0">{icon}</div>
                <div>
                  <div className="text-[0.88rem] font-bold mb-[3px]" style={{ color: '#D6F9DD' }}>{title}</div>
                  <div className="text-[0.7rem]" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(214,249,221,0.62)' }}>{sub}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
