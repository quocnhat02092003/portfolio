import { Award, Briefcase, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            About
          </h2>
          <p className="text-muted-foreground">
            I’m a web developer focused on building delightful user experiences
            and robust backends. My toolkit centers on React, Tailwind, and
            ASP.NET Core. I enjoy designing APIs, crafting reusable UI
            components, and deploying with Docker.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 text-sm">
            <li className="flex items-center gap-2">
              <Award className="size-4" /> Clean, accessible UI
            </li>
            <li className="flex items-center gap-2">
              <Award className="size-4" /> Strong type-safety
            </li>
            <li className="flex items-center gap-2">
              <Award className="size-4" /> Performance-first
            </li>
            <li className="flex items-center gap-2">
              <Award className="size-4" /> DX focused
            </li>
          </ul>
        </div>
        <Card>
          <CardContent className="p-6 space-y-2">
            <div className="flex items-start gap-3">
              <Briefcase className="mt-1 size-5" />
              <div>
                <div className="font-medium">Currently</div>
                <div className="text-sm text-muted-foreground">
                  Freelance / Open to full‑time
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 size-5" />
              <div>
                <div className="font-medium">Ho Chi Minh City, VN</div>
                <div className="text-sm text-muted-foreground">UTC+7</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
