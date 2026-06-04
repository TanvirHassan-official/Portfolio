'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const NAV_LINKS = ['about', 'skills', 'projects', 'contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    NAV_LINKS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHome]);

  const handleNav = (id) => {
    setMenuOpen(false);
    document.body.style.overflow = '';

    if (id === 'home') {
      if (isHome) window.scrollTo({ top: 0, behavior: 'smooth' });
      else router.push('/');
      return;
    }

    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      router.push(`/#${id}`);
    }
  };

  useEffect(() => {
    if (!isHome) return;
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
      history.replaceState(null, '', '/');
    }
  }, [isHome]);

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? 'hidden' : '';
  };

  return (
    <>
      <style>{`
        /* Shared glass base for pills */
        .glass-pill {
          background: rgba(153, 247, 171, 0.06);
          border: 1px solid rgba(153, 247, 171, 0.13);
          backdrop-filter: blur(20px) saturate(160%);
          -webkit-backdrop-filter: blur(20px) saturate(160%);
          box-shadow:
            0 2px 12px rgba(0,0,0,0.18),
            inset 0 1px 0 rgba(153,247,171,0.08);
          transition: all 0.22s ease;
        }
        .glass-pill:hover {
          background: rgba(153, 247, 171, 0.10);
          border-color: rgba(153, 247, 171, 0.22);
          box-shadow:
            0 4px 20px rgba(0,0,0,0.22),
            inset 0 1px 0 rgba(153,247,171,0.12);
        }

        /* Logo glass badge */
        .logo-glass {
          background: rgba(153, 247, 171, 0.07);
          border: 1px solid rgba(153, 247, 171, 0.15);
          backdrop-filter: blur(24px) saturate(160%);
          -webkit-backdrop-filter: blur(24px) saturate(160%);
          box-shadow:
            0 2px 16px rgba(0,0,0,0.20),
            inset 0 1px 0 rgba(153,247,171,0.10);
          transition: all 0.25s ease;
        }
        .logo-glass:hover {
          background: rgba(153, 247, 171, 0.11);
          border-color: rgba(153, 247, 171, 0.25);
          box-shadow:
            0 4px 24px rgba(0,0,0,0.26),
            0 0 20px rgba(153,247,171,0.08),
            inset 0 1px 0 rgba(153,247,171,0.14);
        }

        /* Active dot indicator under nav link */
        .nav-btn::after {
          content: '';
          display: block;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #99F7AB;
          margin: 3px auto 0;
          opacity: 0;
          transform: scale(0);
          transition: opacity 0.2s, transform 0.2s;
        }
        .nav-btn.is-active::after {
          opacity: 1;
          transform: scale(1);
        }

        /* Hire Me solid-glass CTA */
        .hire-glass {
          background: rgba(153, 247, 171, 0.92);
          border: 1px solid rgba(153, 247, 171, 0.50);
          backdrop-filter: blur(20px) saturate(160%);
          -webkit-backdrop-filter: blur(20px) saturate(160%);
          box-shadow:
            0 2px 14px rgba(153,247,171,0.18),
            inset 0 1px 0 rgba(255,255,255,0.25);
          position: relative;
          overflow: hidden;
          transition: all 0.22s ease;
        }
        .hire-glass::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 55%);
          pointer-events: none;
        }
        .hire-glass:hover {
          background: rgba(153, 247, 171, 1);
          box-shadow:
            0 4px 24px rgba(153,247,171,0.30),
            inset 0 1px 0 rgba(255,255,255,0.30);
          transform: translateY(-1px);
        }

        /* Hamburger glass square */
        .ham-glass {
          background: rgba(153, 247, 171, 0.06);
          border: 1px solid rgba(153, 247, 171, 0.13);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 2px 10px rgba(0,0,0,0.15);
          transition: all 0.2s ease;
        }
        .ham-glass:hover,
        .ham-glass.open {
          background: rgba(153, 247, 171, 0.10);
          border-color: rgba(153, 247, 171, 0.22);
        }

        /* Mobile link hover */
        .mobile-link {
          transition: color 0.2s, text-shadow 0.2s;
        }
        .mobile-link:hover {
          color: #99F7AB !important;
          text-shadow: 0 0 24px rgba(153,247,171,0.45);
        }
      `}</style>

      {/* ── NAVBAR — transparent bar, sticky ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-[1000] h-[72px]"
        style={{
          background: 'transparent',
          borderBottom: scrolled
            ? '1px solid rgba(153,247,171,0.08)'
            : '1px solid transparent',
          transition: 'border-color 0.4s',
        }}
      >
        <div className="max-w-[1120px] mx-auto px-5 md:px-[60px] h-full flex items-center justify-between">

          {/* Logo glass badge */}
          <button
            onClick={() => handleNav('home')}
            className="logo-glass flex items-center gap-[10px] px-[14px] py-[8px] rounded-[8px] border-none cursor-pointer"
          >
            <img src="/favicon.svg" alt="TH" className="w-6 h-6 flex-shrink-0" />
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.15rem',
                fontWeight: 700,
                letterSpacing: '-0.01em',
                color: '#99F7AB',
                textShadow: '0 0 16px rgba(153,247,171,0.30)',
              }}
            >
              Tanvir Hassan
            </span>
          </button>

          {/* Desktop nav links — each a glass pill */}
          <div className="hidden md:flex items-center gap-[6px]">
            {NAV_LINKS.map((id) => {
              const isActive = activeSection === id;
              return (
                <button
                  key={id}
                  onClick={() => handleNav(id)}
                  className={`nav-btn glass-pill capitalize px-[16px] py-[8px] rounded-[7px] border-none cursor-pointer${isActive ? ' is-active' : ''}`}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: isActive ? '#D6F9DD' : 'rgba(214,249,221,0.58)',
                    background: isActive ? 'rgba(153,247,171,0.10)' : 'rgba(153,247,171,0.06)',
                    borderColor: isActive ? 'rgba(153,247,171,0.22)' : 'rgba(153,247,171,0.13)',
                  }}
                >
                  {id}
                </button>
              );
            })}
          </div>

          {/* Hire Me glass CTA */}
          <button
            onClick={() => handleNav('contact')}
            className="hire-glass hidden md:inline-flex items-center gap-2 px-[20px] py-[9px] rounded-[7px] border-none cursor-pointer"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: '#111f26',
            }}
          >
            Hire Me
          </button>

          {/* Hamburger glass square */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className={`ham-glass md:hidden flex flex-col justify-center items-center gap-[5px] w-[40px] h-[40px] rounded-[7px] border-none cursor-pointer${menuOpen ? ' open' : ''}`}
          >
            <span
              className="block w-[18px] h-[1.5px] rounded bg-[#D6F9DD] transition-all duration-300"
              style={{ transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none' }}
            />
            <span
              className="block w-[18px] h-[1.5px] rounded bg-[#D6F9DD] transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-[18px] h-[1.5px] rounded bg-[#D6F9DD] transition-all duration-300"
              style={{ transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none' }}
            />
          </button>

        </div>
      </nav>

      {/* Mobile full-screen menu */}
      {menuOpen && (
        <div
          className="md:hidden fixed top-[72px] left-0 right-0 bottom-0 z-[999] flex flex-col items-center justify-center gap-7"
          style={{
            background: 'rgba(11, 21, 27, 0.96)',
            backdropFilter: 'blur(32px) saturate(180%)',
            WebkitBackdropFilter: 'blur(32px) saturate(180%)',
          }}
        >
          {/* ambient glow blob */}
          <div
            style={{
              position: 'absolute',
              top: '35%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              width: '320px',
              height: '320px',
              background: 'radial-gradient(circle, rgba(153,247,171,0.07) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          {['home', ...NAV_LINKS].map((id) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className="mobile-link capitalize bg-transparent border-none cursor-pointer"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem',
                fontWeight: 600,
                color: activeSection === id ? '#99F7AB' : 'rgba(214,249,221,0.60)',
                letterSpacing: '-0.01em',
              }}
            >
              {id}
            </button>
          ))}

          <button
            onClick={() => handleNav('contact')}
            className="hire-glass border-none cursor-pointer rounded-[7px] mt-2"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: '#111f26',
              padding: '13px 36px',
            }}
          >
            Hire Me
          </button>
        </div>
      )}
    </>
  );
}