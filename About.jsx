import { profile, skillGroups } from '../data/portfolio';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-20 sm:py-24">
      <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading id="about-title" title="A developer who likes the whole stack" />
          <div className="mt-6 max-w-prose space-y-4 leading-relaxed text-mist/70">
            {profile.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          {skillGroups.map((group) => (
            <div key={group.title} className="glass rounded-2xl p-5 sm:p-6">
              <h3 className="text-lg font-semibold">{group.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-mist/85 transition hover:border-apricot/50 hover:text-white"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
