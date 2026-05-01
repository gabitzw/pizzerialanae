import { Phone, Flame } from "lucide-react";

const links = [
  { href: "#despre", label: "Despre" },
  { href: "#meniu", label: "Meniu" },
  { href: "#recenzii", label: "Recenzii" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="h-9 w-9 rounded-full bg-gradient-warm flex items-center justify-center shadow-soft">
            <Flame className="h-5 w-5 text-primary-foreground" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            Pizzeria <span className="text-primary">La Nae</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="tel:0769696282"
          className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold shadow-soft hover:bg-primary/90 transition"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">0769.696.282</span>
          <span className="sm:hidden">Sună</span>
        </a>
      </div>
    </header>
  );
}
