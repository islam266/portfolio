import type { Dict } from "@/content/content";
import Section from "./Section";
import { ltrClass } from "@/lib/bidi";

export default function Skills({ d }: { d: Dict }) {
  return (
    <Section id="skills" index={5} kicker={d.k_skills} heading={d.h_skills}>
      <ul className="grid grid-cols-4 gap-5 max-[1024px]:grid-cols-2 max-[560px]:grid-cols-1">
        {d.skills.map(([title, items]) => (
          <li key={title} className="panel flex flex-col p-5">
            <h3 className="display text-[19px] leading-tight">{title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {items.map((item) => (
                <li key={item} className={`chip ${ltrClass(item) ?? ""}`}>
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
