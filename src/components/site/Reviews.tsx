import { Star, Quote } from "lucide-react";

const reviews = [
  {
    quote: "Cea mai bună pizza din zonă! Blatul subțire, crocant, exact cum trebuie.",
    author: "Andreea M.",
    source: "Google",
    rating: 5,
  },
  {
    quote: "Pizza ca în Italia — serviciu ireproșabil, ingrediente proaspete. Recomand cu drag!",
    author: "Mihai P.",
    source: "Facebook",
    rating: 5,
  },
  {
    quote: "Cei mai ospitalieri oameni, mâncare minunată. Atmosferă de familie, ne întoarcem mereu.",
    author: "Familia Ionescu",
    source: "Google",
    rating: 5,
  },
];

export function Reviews() {
  return (
    <section id="recenzii" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 text-sm font-semibold text-primary">
            <Star className="h-4 w-4 fill-current" />
            4.6 – 4.9 ★ pe Google și Facebook
          </div>
          <h2 className="mt-5 font-display text-4xl md:text-6xl font-bold text-balance">
            Iubiți de comunitatea <span className="italic text-primary">din Dârza</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <figure
              key={r.author}
              className="relative rounded-2xl bg-card border border-border p-8 shadow-soft hover:shadow-warm transition-shadow"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-accent/40" />
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 font-display text-xl leading-snug text-balance">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-semibold">{r.author}</span>
                <span className="text-muted-foreground"> · {r.source}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
