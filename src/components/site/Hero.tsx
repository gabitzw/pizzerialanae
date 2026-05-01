import { Phone, Star, MapPin } from "lucide-react";
import heroPizza from "@/assets/hero-pizza.jpg";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <img
        src={heroPizza}
        alt="Pizza coaptă în cuptor cu lemne la Pizzeria La Nae"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 py-28 md:py-40 lg:py-48">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/90 px-4 py-1.5 text-xs font-semibold text-accent-foreground shadow-soft">
            <Star className="h-3.5 w-3.5 fill-current" />
            #1 Restaurant în Dârza · 4.6–4.9 ★
          </div>

          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-cream text-balance">
            Pizzeria <span className="text-accent italic">La Nae</span>
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-cream/90 max-w-2xl text-balance">
            Cea mai bună pizza din zonă — coaptă pe vatră, în cuptor cu lemne, din ingrediente proaspete și alese cu grijă.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="tel:0769696282"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 text-base font-semibold shadow-warm hover:scale-[1.02] transition-transform"
            >
              <Phone className="h-5 w-5" />
              Comandă acum · 0769.696.282
            </a>
            <a
              href="#meniu"
              className="inline-flex items-center gap-2 rounded-full border border-cream/40 bg-cream/10 backdrop-blur text-cream px-7 py-4 text-base font-semibold hover:bg-cream/20 transition"
            >
              Vezi meniul
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-cream/80">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" />
              Aleea Gării 336, Dârza, Dâmbovița
            </span>
            <span>Ma–Du · 11:00 – 20:00</span>
            <span>Livrare la domiciliu</span>
          </div>
        </div>
      </div>
    </section>
  );
}
