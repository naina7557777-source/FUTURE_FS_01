import { navLinks, profile } from '/src/data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-x flex flex-col items-center justify-between gap-6 text-sm text-mist/60 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React and Tailwind CSS.
        </p>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className="transition hover:text-white">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
