import { useState } from 'react';
import { profile } from '../data/portfolio';
import useTypewriter from '../hooks/useTypewriter';
import { DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from './Icons';

function ProfileGrid() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="animate-rise relative mx-auto w-full max-w-md" style={{ animationDelay: '320ms' }}>
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-iris/30 via-transparent to-lagoon/20 blur-2xl"
      />
      <div className="grid aspect-square grid-cols-3 grid-rows-3 gap-3 sm:gap-4">
        <figure className="glass relative col-span-2 row-span-2 overflow-hidden rounded-3xl">
          {failed ? (
            <div
              role="img"
              aria-label="Profile photo placeholder"
              className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-iris/50 to-lagoon/30 font-display text-6xl font-semibold text-white"
            >
              {profile.initials}
            </div>
          ) : (
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width="480"
              height="480"
              className="absolute inset-0 h-full w-full object-cover"
              onError={() => setFailed(true)}
            />
          )}
        </figure>

        {profile.tiles.map((tile) => (
          <div
            key={tile.label}
            className="glass flex flex-col items-center justify-center rounded-2xl p-2 text-center transition duration-300 hover:-translate-y-1 hover:bg-white/10"
          >
            <span className="font-display text-sm font-semibold text-white sm:text-lg">{tile.label}</span>
            <span className="mt-0.5 text-[11px] leading-tight text-mist/60 sm:text-xs">{tile.caption}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const role = useTypewriter(profile.roles);

  return (
    <section id="home" aria-labelledby="hero-title" className="relative">
      <div className="container-x grid items-center gap-14 py-14 sm:py-20 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
        <div>
          <p className="animate-rise glass inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-sm text-mist/85">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lagoon/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lagoon" />
            </span>
            {profile.availability}
          </p>

          <h1
            id="hero-title"
            className="animate-rise mt-6 text-balance text-4xl font-semibold leading-[1.08] sm:text-5xl xl:text-6xl"
            style={{ animationDelay: '100ms' }}
          >
            Hi, I’m {profile.name}.
            <br />
            {profile.tagline}
          </h1>

          <p className="animate-rise mt-6 text-xl text-white sm:text-2xl" style={{ animationDelay: '180ms' }}>
            <span className="text-mist/60">Currently a </span>
            <span className="sr-only">{profile.roles.join(', ')}</span>
            <span aria-hidden="true" className="font-medium text-apricot">
              {role}
            </span>
            <span aria-hidden="true" className="ml-0.5 inline-block h-6 w-0.5 translate-y-1 animate-blink bg-apricot" />
          </p>

          <p
            className="animate-rise mt-5 max-w-xl text-base leading-relaxed text-mist/70 sm:text-lg"
            style={{ animationDelay: '240ms' }}
          >
            {profile.summary}
          </p>

          <div className="animate-rise mt-9 flex flex-wrap items-center gap-3" style={{ animationDelay: '300ms' }}>
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href={profile.resumeUrl} download className="btn btn-glass">
              <DownloadIcon className="h-4 w-4" />
              Download Resume
            </a>
          </div>

          <ul className="animate-rise mt-8 flex items-center gap-3" style={{ animationDelay: '360ms' }} aria-label="Social links">
            {[
              { href: profile.github, label: 'GitHub profile', Icon: GithubIcon, external: true },
              { href: profile.linkedin, label: 'LinkedIn profile', Icon: LinkedinIcon, external: true },
              { href: profile.emailHref, label: 'Send an email', Icon: MailIcon, external: true },
            ].map(({ href, label, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  title={label}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="glass flex h-11 w-11 items-center justify-center rounded-full text-mist/80 transition hover:-translate-y-0.5 hover:bg-white hover:text-ink-950"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ProfileGrid />
      </div>
    </section>
  );
}
