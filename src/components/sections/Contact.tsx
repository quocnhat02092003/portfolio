import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Mail, ExternalLink } from "lucide-react";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section id="contact">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Let’s work together
          </h2>
          <p className="text-muted-foreground">
            My inbox is open — whether you have a question or just want to say
            hi.
          </p>
          <div className="flex gap-2">
            <Button asChild>
              <a
                href="mailto:quocnhat02092003@gmail.com"
                className="inline-flex items-center"
              >
                <Mail className="size-4 mr-2" /> Say hello
              </a>
            </Button>
            <Button asChild variant="outline">
              <a
                href="https://github.com/quocnhat02092003"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center"
              >
                <Github className="size-4 mr-2" /> GitHub
              </a>
            </Button>
          </div>
        </div>
        <Card>
          <CardContent className="p-6">
            <form
              className="grid gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks! Your message has been sent.");
              }}
            >
              <h1 className="text-3xl">Contact me</h1>
              <Input placeholder="Your name" required />
              <Input type="email" placeholder="Your email" required />
              <Textarea placeholder="Message" rows={5} required />
              <Button
                variant="outline"
                type="submit"
                className="mx-auto cursor-pointer"
              >
                Send message{" "}
              </Button>
              {/* <span className="inline-flex items-center justify-end text-xs opacity-80 text-right">
                demo <ExternalLink className="size-3 ml-1 inline" />
              </span> */}
            </form>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
