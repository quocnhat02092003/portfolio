import { motion } from "framer-motion";
import { EXPERIENCE } from "@/data/content";
import { Section } from "./Section";
import { MapPin } from "lucide-react";

export function Experience() {
  return (
    <Section id="experience" className="bg-muted/30">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
          Experience
        </h2>
        <div className="grid gap-6">
          {EXPERIENCE.map((e, i) => (
            <motion.div
              key={e.role}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-5 border rounded-2xl bg-background"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="font-medium">
                  {e.role} · {e.company}
                </div>
                <div className="text-sm text-muted-foreground">{e.time}</div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                <MapPin className="size-4" /> {e.location}
              </div>
              <ul className="mt-3 list-disc pl-5 text-sm space-y-1">
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
