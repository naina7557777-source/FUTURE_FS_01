import { profile, projects } from '../data/portfolio';
import ProjectCard from './ProjectCard';
import SectionHeading from './SectionHeading';

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading id="projects-title" title="Projects I’ve built">
          Projects from my Full Stack Web Development internship.
        </SectionHeading>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.id} className="flex">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm text-mist/60">
          More experiments and coursework are on{' '}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-apricot underline-offset-4 hover:underline"
          >
            my GitHub profile
          </a>
          .
        </p>
      </div>
    </section>
  );
}
