import { Flame, Leaf, Home, Truck } from "lucide-react";
import oven from "@/assets/wood-oven.jpg";
import pizzaTop from "@/assets/pizza-top.jpg";

const features = [
  { icon: Flame, title: "Cuptor cu lemne", desc: "Blat subțire și crocant, copt pe vatră la temperatură înaltă." },
  { icon: Leaf, title: "Ingrediente proaspete", desc: "Selectate cu grijă, de la furnizori locali și mozzarella autentică." },
  { icon: Home, title: "Atmosferă de familie", desc: "Decor rustic-modern, cald, perfect pentru întâlniri intime." },
  { icon: Truck, title: "Livrare la domiciliu", desc: "Comandă rapid la telefon și primești pizza caldă, acasă." },
];

export function About() {
  return (
    <section id="despre" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src={pizzaTop}
              alt="Pizza Margherita autentică pe blat de lemn"
              width={1280}
              height={1280}
              loading="lazy"
              className="rounded-2xl shadow-warm w-full aspect-square object-cover"
            />
            <img
              src={oven}
              alt="Cuptor cu lemne tradițional"
              width={1280}
              height={1280}
              loading="lazy"
              className="hidden md:block absolute -bottom-10 -right-10 w-56 h-56 rounded-2xl shadow-warm object-cover border-8 border-background"
            />
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Povestea noastră
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold leading-tight text-balance">
              Pizza ca în Italia, <span className="italic text-primary">făcută cu suflet</span> în Dârza.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Pizzeria La Nae a luat naștere din dorința de a oferi tuturor clienților produse și servicii de cea mai bună
              calitate. Pizza noastră este coaptă în cuptor cu lemne, pe blat subțire și crocant, folosind ingrediente
              proaspete, atent selectate.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Locația noastră este potrivită pentru orice tip de întâlnire intimă, cu atmosferă caldă, de familie, și un
              decor rustic-modern. Poți chiar să-ți creezi propria pizza, alegând din toppingurile disponibile.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {features.map((f) => (
                <div key={f.title} className="rounded-xl border border-border bg-card p-5 shadow-soft">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold">{f.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
