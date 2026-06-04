'use client';
 
const links = [
  { href: 'https://github.com/TanvirHassan-official', label: 'GitHub' },
  { href: 'https://linkedin.com/in/tanvir-hassan-bd/', label: 'LinkedIn' },
  { href: 'mailto:tanvirhassan0006@gmail.com', label: 'Email' },
];
 
export default function Footer() {
  return (
    <footer className="py-[26px] border-t border-[rgba(153,247,171,0.14)] bg-[rgba(17,31,38,0.85)] backdrop-blur-[20px]">
      <div className="max-w-[1120px] mx-auto px-5 md:px-[60px] flex items-center justify-between flex-wrap gap-4">
 
        <div className="text-[0.68rem] font-[family-name:var(--font-mono)] text-[rgba(214,249,221,0.32)]">
          © 2025{' '}
          <span className="text-[rgba(214,249,221,0.62)]">Tanvir Hassan</span>
          {' '}· Designed &amp; Built with care.
        </div>
 
        <div className="flex items-center gap-4">
          {links.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-[0.68rem] font-[family-name:var(--font-mono)] text-[rgba(214,249,221,0.32)] transition-colors duration-200 hover:text-[#99F7AB]"
            >
              {label}
            </a>
          ))}
 
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-[0.68rem] font-[family-name:var(--font-mono)] text-[rgba(214,249,221,0.32)] transition-colors duration-200 hover:text-[#99F7AB] cursor-pointer bg-transparent border-none"
          >
            ↑ Top
          </button>
        </div>
 
      </div>
    </footer>
  );
}