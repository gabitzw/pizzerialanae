import { MapPin, Phone, Clock, Wifi, Car, Utensils, Trees } from "lucide-react";

const services = [
  { icon: Utensils, label: "La pachet & livrare" },
  { icon: Trees, label: "Terasă în aer liber" },
  { icon: Wifi, label: "WiFi gratuit" },
  { icon: Car, label: "Parcare gratuită" },
];

const hours = [
  { day: "Luni", time: "Închis" },
  { day: "Marți – Duminică", time: "11:00 – 20:00" },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Contact & Locație
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold text-balance">
            Te așteptăm la <span className="italic text-primary">Pizzeria La Nae</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-5">
            <div className="rounded-2xl bg-card border border-border p-7 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">Adresă</h3>
                  <p className="mt-1 text-muted-foreground">
                    Strada Gării, nr. 336<br />
                    Dârza, comuna Crevedia<br />
                    Dâmbovița, 137182
                  </p>
                </div>
              </div>
            </div>

            <a
              href="tel:0769696282"
              className="block rounded-2xl bg-card border border-border p-7 shadow-soft hover:shadow-warm transition"
            >
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">Telefon & Comenzi</h3>
                  <p className="mt-1 font-display text-2xl font-bold text-primary">0769.696.282</p>
                </div>
              </div>
            </a>

            <div className="rounded-2xl bg-card border border-border p-7 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold">Program</h3>
                  <ul className="mt-2 space-y-1 text-muted-foreground">
                    {hours.map((h) => (
                      <li key={h.day} className="flex justify-between gap-4">
                        <span>{h.day}</span>
                        <span className="font-medium text-foreground">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-card border border-border p-7 shadow-soft">
              <h3 className="font-display text-lg font-semibold">Servicii</h3>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {services.map((s) => (
                  <div key={s.label} className="flex items-center gap-2 text-sm">
                    <s.icon className="h-4 w-4 text-primary shrink-0" />
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-warm border border-border min-h-[500px]">
            <iframe
              title="Locația Pizzeria La Nae"
              src="https://www.google.com/maps?q=Strada+G%C4%83rii+336,+D%C3%A2rza,+Crevedia,+D%C3%A2mbovi%C8%9Ba&output=embed"
              className="w-full h-full min-h-[500px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
