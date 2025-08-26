import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "@/data/content";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section id="projects" className="bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 cursor-pointer">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
          Projects
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Card className="overflow-hidden group h-full flex flex-col">
                <img
                  src={p.image}
                  alt={p.title}
                  className="object-cover w-full h-80 group-hover:scale-105 transition-transform duration-300"
                />
                <CardContent className="p-5 flex flex-col gap-3 grow">
                  <div className="font-semibold text-lg">{p.title}</div>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {p.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="rounded-xl">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-auto pt-3 flex gap-2">
                    <Button variant="ghost" asChild size="sm">
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center"
                      >
                        Live <ExternalLink className="size-4 ml-2" />
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="outline">
                      <a
                        href={p.source}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center"
                      >
                        Code <Github className="size-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
