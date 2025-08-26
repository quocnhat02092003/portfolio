import { Badge } from "@/components/ui/badge";
import { SKILLS } from "@/data/content";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {SKILLS.map((s) => (
            <Badge key={s} className="rounded-xl px-3 py-1" variant="secondary">
              {s}
            </Badge>
          ))}
        </div>
      </div>
    </Section>
  );
}
