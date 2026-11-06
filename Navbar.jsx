import { useEffect, useState } from 'react';
import { navLinks, profile } from '/src/data/portfolio';
import useScrollSpy from '/src/hooks/useScrollSpy';
import { CloseIcon, MenuIcon } from './Icons';

const ids = navLinks.map((l) => l.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useScrollSpy(ids);

  // Stronger glass once the page has been scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // Close the mobile menu when the viewport grows to desktop width
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const onChange = (e) => e.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6">
      <div
        className={`glass mx-auto max-w-6xl rounded-3xl transition-all duration-300 ${
          scrolled ? 'bg-ink-900/70 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.7)]' : ''
        }`}
      >
        <div className="flex items-center justify-between px-4 py-2.5 sm:px-6">
          <a href="#home" className="flex items-center gap-3 text-white" aria-label={`${profile.name}, back to top`}>
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-apricot font-display text-sm font-bold text-ink-950">
              {profile.initials}
            </span>
            <span className="hidden font-display text-base font-semibold sm:block">{profile.name}</span>
          </a>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navLinks.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={active === id ? 'page' : undefined}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      active === id ? 'bg-white/10 text-white' : 'text-mist/70 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a href="#contact" className="btn btn-primary hidden !px-5 !py-2 md:inline-flex">
              Hire me
            </a>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/10 md:hidden"
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {open && (
          <nav id="mobile-menu" aria-label="Mobile" className="animate-rise border-t border-white/10 p-3 md:hidden">
            <ul className="flex flex-col gap-1">
              {navLinks.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === id ? 'page' : undefined}
                    className={`block rounded-2xl px-4 py-3 text-base font-medium transition ${
                      active === id ? 'bg-white/10 text-white' : 'text-mist/75 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="p-1 pt-2">
                <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary w-full">
                  Hire me
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
