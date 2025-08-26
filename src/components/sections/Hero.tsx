import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Code2, Rocket } from "lucide-react";
import { SOCIALS } from "@/data/content";
import { Section } from "./Section";
import { useScrollTo } from "./hooks";
import Typewriter from "typewriter-effect";
import image from "@/assets/image/image-hero-1.png";

export function Hero() {
  const scrollTo = useScrollTo();
  return (
    <Section id="home" className="pt-28 md:pt-32">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className="space-y-5"
        >
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm w-fit">
            <Rocket className="size-4" />
            Available for work
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-400 bg-clip-text text-transparent">
              Pham Quoc Nhat
            </span>{" "}
            <div className="mt-4">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      " I build clean, fast web apps with React & .NET."
                    )
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString(" Restful API")
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString(" Fullstack Developer")
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString("Responsive UI")
                    .pauseFor(2500)
                    .start();
                }}
                options={{
                  loop: true,
                  delay: 50,
                  deleteSpeed: 20,
                }}
              />
            </div>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-prose">
            Full-stack React & .NET developer focused on smooth DX. <br />
            Here are a few projects and skills that represent my work.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="ghost"
              className="cursor-pointer"
              onClick={() => scrollTo("projects")}
            >
              View Projects <ExternalLink className="size-4 ml-2" />
            </Button>
            <Button variant="outline" asChild>
              <a href="#" download>
                <Download className="size-4 mr-2" /> Download CV
              </a>
            </Button>
          </div>
          <div className="flex items-center gap-4 pt-2">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                className="inline-flex items-center gap-2 hover:underline"
                href={s.href}
                target="_blank"
                rel="noreferrer"
              >
                <s.icon className="size-4" /> {s.label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.1 }}
          className="relative"
        >
          <img
            src={image}
            alt="Pham Quoc Nhat"
            className="aspect-square rounded-3xl object-cover w-full md:w-full"
          />
          <div className="absolute -bottom-4 backdrop-blur rounded-2xl border p-4 shadow-sm flex items-center gap-3">
            <Code2 className="size-5" /> Clean code, happy users
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
