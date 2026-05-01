import { Facebook, Phone, MapPin, Clock, Flame } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="h-10 w-10 rounded-full bg-gradient-warm flex items-center justify-center">
                <Flame className="h-5 w-5 text-primary-foreground" />
              </span>
              <span className="font-display text-xl font-bold">
                Pizzeria <span className="text-accent">La Nae</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-cream/70 leading-relaxed">
              Pizza autentică, coaptă în cuptor cu lemne, în inima satului Dârza.
            </p>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold text-accent">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-cream/80">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <a href="tel:0769696282" className="hover:text-accent transition">0769.696.282</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <span>Aleea Gării 336, Dârza, Dâmbovița 137182</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold text-accent">Program</h4>
            <ul className="mt-4 space-y-2 text-sm text-cream/80">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent" />
                <span>Marți – Duminică: 11:00 – 20:00</span>
              </li>
              <li className="ml-6">Luni: Închis</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold text-accent">Urmărește-ne</h4>
            <a
              href="https://facebook.com/PizzeriaDarza"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-cream/20 px-4 py-2 text-sm hover:bg-cream/10 transition"
            >
              <Facebook className="h-4 w-4" />
              Pizzeria Dârza
            </a>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-cream/15 flex flex-wrap items-center justify-between gap-4 text-xs text-cream/60">
          <span>© {new Date().getFullYear()} Pizzeria La Nae. Toate drepturile rezervate.</span>
          <span>Făcută cu ❤ în Dârza, Dâmbovița.</span>
        </div>
      </div>
    </footer>
  );
}
