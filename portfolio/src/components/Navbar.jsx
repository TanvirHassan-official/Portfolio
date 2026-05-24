'use client';
 
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
 
const NAV_LINKS = ['about', 'skills', 'projects', 'contact'];
 
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === '/';
 
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
 
  const handleNav = (id) => {
    setMenuOpen(false);
    document.body.style.overflow = '';
 
    if (id === 'home') {
      if (isHome) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        router.push('/');
      }
      return;
    }
 
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      router.push(`/#${id}`);
    }
  };
 
  // After navigating to /#section, scroll to it once the page loads
  useEffect(() => {
    if (!isHome) return;
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
      // Clean up the hash from the URL without reloading
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
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] h-[72px] border-b border-[rgba(153,247,171,0.14)] backdrop-blur-[24px] transition-all duration-300 ${
          scrolled ? 'bg-[rgba(17,31,38,0.95)]' : 'bg-[rgba(25,50,60,0.80)]'
        }`}
      >
        <div className="max-w-[1120px] mx-auto px-5 md:px-[60px] h-full flex items-center justify-between">
 
          {/* Logo */}
          <button
            onClick={() => handleNav('home')}
            className="text-[#99F7AB] text-[1.35rem] font-bold tracking-[-0.01em] font-[family-name:var(--font-display)] cursor-pointer bg-transparent border-none"
          >
            Tanvir Hassan.
          </button>
 
          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((id) => (
              <button
                key={id}
                onClick={() => handleNav(id)}
                className="capitalize px-4 py-2 rounded-md text-[0.72rem] tracking-[0.06em] uppercase font-[family-name:var(--font-mono)] text-[rgba(214,249,221,0.62)] transition-all duration-200 cursor-pointer bg-transparent border-none hover:text-[#D6F9DD] hover:bg-[rgba(153,247,171,0.06)]"
              >
                {id}
              </button>
            ))}
          </div>
 
          {/* Hire Me CTA */}
          <button
            onClick={() => handleNav('contact')}
            className="hidden md:inline-flex items-center gap-2 px-[22px] py-[9px] rounded-md text-[0.72rem] font-medium tracking-[0.06em] uppercase font-[family-name:var(--font-mono)] bg-[#99F7AB] text-[#111f26] transition-all duration-200 hover:opacity-[0.88] hover:-translate-y-[1px] cursor-pointer border-none"
          >
            Hire Me
          </button>
 
          {/* Hamburger */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-[5px] cursor-pointer p-[6px] bg-transparent border-none"
            aria-label="Toggle menu"
          >
            <span
              className="block w-[22px] h-[1.5px] rounded-[1px] bg-[#D6F9DD] transition-all duration-300"
              style={{ transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none' }}
            />
            <span
              className="block w-[22px] h-[1.5px] rounded-[1px] bg-[#D6F9DD] transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-[22px] h-[1.5px] rounded-[1px] bg-[#D6F9DD] transition-all duration-300"
              style={{ transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none' }}
            />
          </button>
 
        </div>
      </nav>
 
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-[72px] left-0 right-0 bottom-0 z-[999] flex flex-col items-center justify-center gap-7 bg-[rgba(17,31,38,0.98)] backdrop-blur-[30px]">
          {['home', ...NAV_LINKS].map((id) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className="capitalize text-[2rem] font-semibold font-[family-name:var(--font-display)] text-[rgba(214,249,221,0.62)] transition-colors duration-200 cursor-pointer bg-transparent border-none hover:text-[#99F7AB]"
            >
              {id}
            </button>
          ))}
        </div>
      )}
    </>
  );
}