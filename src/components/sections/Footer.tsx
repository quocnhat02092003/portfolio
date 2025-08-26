export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-10 border-t">
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>© {year} Pham Quoc Nhat. All rights reserved.</div>
        <div className="flex items-center gap-2">
          Built with Vite-React, Tailwind & shadcn/ui
        </div>
      </div>
    </footer>
  );
}
