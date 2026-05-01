import {
  pizzas,
  focaccia,
  others,
  toppingsBasic,
  toppingsPremium,
  extras,
  type MenuItem,
} from "@/data/menu";
import { Star } from "lucide-react";

function PriceRow({ item }: { item: MenuItem }) {
  return (
    <div className="flex items-baseline gap-3 py-4 border-b border-dashed border-border last:border-0">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h4 className="font-display text-lg font-semibold">
            {item.name}
            {item.highlight && (
              <Star className="inline-block ml-1.5 h-3.5 w-3.5 -mt-1 fill-accent text-accent" />
            )}
          </h4>
          {item.weight && (
            <span className="text-xs text-muted-foreground font-medium">{item.weight}</span>
          )}
        </div>
        {item.ingredients && (
          <p className="mt-1 text-sm text-muted-foreground leading-snug">{item.ingredients}</p>
        )}
      </div>
      <div className="shrink-0 font-display text-lg font-bold text-primary tabular-nums">
        {item.price} <span className="text-xs font-semibold text-muted-foreground">LEI</span>
      </div>
    </div>
  );
}

function Section({
  title,
  subtitle,
  items,
  columns = 2,
}: {
  title: string;
  subtitle?: string;
  items: MenuItem[];
  columns?: 1 | 2;
}) {
  return (
    <div className="mb-16">
      <div className="mb-6 flex items-end justify-between gap-4 border-b-2 border-primary/20 pb-3">
        <h3 className="font-display text-3xl md:text-4xl font-bold text-primary">{title}</h3>
        {subtitle && <span className="text-sm text-muted-foreground">{subtitle}</span>}
      </div>
      <div className={columns === 2 ? "grid md:grid-cols-2 md:gap-x-12" : ""}>
        {items.map((it) => (
          <PriceRow key={it.name} item={it} />
        ))}
      </div>
    </div>
  );
}

export function Menu() {
  return (
    <section id="meniu" className="py-24 md:py-32 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Meniu complet
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold text-balance">
            Tot ce iese din <span className="italic text-primary">cuptorul nostru</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Prețuri în LEI. Toate pizzele sunt coapte în cuptor cu lemne, pe blat subțire.
          </p>
        </div>

        <div className="rounded-2xl bg-card shadow-warm p-7 md:p-12 border border-border">
          <Section title="Pizza" subtitle={`${pizzas.length} sortimente`} items={pizzas} />
          <Section title="Focaccia" items={focaccia} />
          <Section title="Specialități" items={others} columns={1} />

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Section title="Toppinguri 6 LEI" items={toppingsBasic} columns={1} />
            </div>
            <div>
              <Section title="Toppinguri 8 LEI" items={toppingsPremium} columns={1} />
            </div>
          </div>

          <Section title="Extra" items={extras} columns={1} />

          <p className="mt-4 text-sm text-muted-foreground italic text-center">
            ★ Recomandate de casă · Creează-ți propria pizza alegând toppingurile preferate.
          </p>
        </div>
      </div>
    </section>
  );
}
