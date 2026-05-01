import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Menu } from "@/components/site/Menu";
import { Reviews } from "@/components/site/Reviews";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pizzeria La Nae · Cea mai bună pizza din Dârza, Dâmbovița" },
      {
        name: "description",
        content:
          "Pizza coaptă în cuptor cu lemne, pe blat subțire și crocant, din ingrediente proaspete. Livrare la domiciliu în Dârza, Crevedia, Dâmbovița. Sună 0769.696.282.",
      },
      { property: "og:title", content: "Pizzeria La Nae · Pizza în cuptor cu lemne" },
      {
        property: "og:description",
        content: "#1 restaurant în Dârza · 4.6–4.9 ★ · Pizza autentică, livrare la domiciliu.",
      },
      { property: "og:type", content: "restaurant" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
