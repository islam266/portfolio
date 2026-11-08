import type { Dict, Project } from "@/content/content";
import Section from "./Section";
import { ltrClass } from "@/lib/bidi";

function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="card flex flex-col p-6 max-sm:p-5">
      {/* TODO: image hook — when a screenshot exists, render it here as a
          next/image above the status row (16:9, rounded 3px, border --line)
          and add the file to /public. No placeholder is rendered until then. */}
      <p className="label flex items-center gap-2 text-[11px] text-muted">
        <span className="dot" style={{ background: project.c }} />
        {project.s}
      </p>

      <h3 className="display mt-4 text-[26px] leading-tight max-sm:text-[22px]">
        {project.t}
      </h3>

      <p className="mt-3 leading-relaxed text-muted">{project.p}</p>

      <ul className="mt-auto flex flex-wrap gap-2 pt-6">
        {project.g.map((chip) => (
          <li key={chip} className={`chip ${ltrClass(chip) ?? ""}`}>
            {chip}
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function Projects({ d }: { d: Dict }) {
  return (
    <Section id="projects" index={3} kicker={d.k_proj} heading={d.h_proj}>
      <ul className="grid grid-cols-2 gap-5 max-[820px]:grid-cols-1">
        {d.proj.map((project) => (
          <ProjectCard key={project.t} project={project} />
        ))}
      </ul>
    </Section>
  );
}
