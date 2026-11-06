import { ExternalLinkIcon, GithubIcon } from './Icons';

const iconLink =
  'flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-ink-950';

export default function ProjectCard({ project }) {
  const { title, description, tech, github, demo, image, accent } = project;

  return (
    <article className="group glass flex w-full flex-col overflow-hidden rounded-3xl transition duration-500 hover:-translate-y-1.5 hover:border-white/25 hover:shadow-[0_24px_60px_-24px_rgba(124,124,255,0.55)]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <div
          className={`absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110 ${
            image ? '' : `bg-gradient-to-br ${accent}`
          }`}
        >
          {image ? (
            <img
              src={image}
              alt={`Screenshot of ${title}`}
              loading="lazy"
              width="640"
              height="400"
              className="h-full w-full object-cover"
            />
          ) : (
            <div
              aria-hidden="true"
              className="flex h-full w-full items-center justify-center bg-[radial-gradient(rgba(255,255,255,0.2)_1px,transparent_1px)] font-display text-5xl font-bold text-white/85 [background-size:18px_18px]"
            >
              {title.slice(0, 2)}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-mist/65">{description}</p>

        <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Technologies used in ${title}`}>
          {tech.map((t) => (
            <li key={t} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-mist/85">
              {t}
            </li>
          ))}
        </ul>

        {(github || demo) && (
          <div className="mt-auto flex items-center gap-3 pt-6">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} source code on GitHub`}
                title="Source code"
                className={iconLink}
              >
                <GithubIcon />
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} live demo`}
                title="Live demo"
                className={iconLink}
              >
                <ExternalLinkIcon />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
