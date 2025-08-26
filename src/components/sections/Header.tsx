import React from "react";
import { Button } from "@/components/ui/button";
import { NAV, SOCIALS } from "@/data/content";
import { Menu, X } from "lucide-react";
import { useScrollTo } from "./hooks";

export function Header() {
  const [open, setOpen] = React.useState(false);
  const scrollTo = useScrollTo();

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="bg-[url('./assets/image/image-hero-1.png')] w-8 h-8 bg-cover"></div>
            <span className="font-semibold tracking-tight">Pham Quoc Nhat</span>
          </div>

          <nav className="hidden md:flex items-center gap-2">
            {NAV.map((n) => (
              <Button
                key={n.id}
                variant="ghost"
                className="font-medium cursor-pointer"
                onClick={() => scrollTo(n.id)}
              >
                {n.label}
              </Button>
            ))}
            <div className="w-px h-6 bg-border mx-2" />
            {SOCIALS.map((s) => (
              <Button asChild size="icon" variant="ghost" key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                >
                  <s.icon className="size-5" />
                </a>
              </Button>
            ))}
          </nav>

          <Button
            className="md:hidden cursor-pointer"
            size="icon"
            variant="ghost"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-1">
              {NAV.map((n) => (
                <Button
                  key={n.id}
                  variant="ghost"
                  className="justify-start cursor-pointer"
                  onClick={() => {
                    scrollTo(n.id);
                    setOpen(false);
                  }}
                >
                  {n.label}
                </Button>
              ))}
            </div>
            <div className="flex gap-2 pt-2">
              {SOCIALS.map((s) => (
                <Button asChild size="icon" variant="ghost" key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                  >
                    <s.icon className="size-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
