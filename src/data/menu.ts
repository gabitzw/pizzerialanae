export type MenuItem = {
  name: string;
  weight?: string;
  ingredients?: string;
  price: number;
  highlight?: boolean;
};

export const pizzas: MenuItem[] = [
  { name: "Margherita", weight: "440g", ingredients: "blat, sos roșii, mozzarella", price: 24, highlight: true },
  { name: "Prosciutto", weight: "490g", ingredients: "blat, sos roșii, mozzarella, șuncă", price: 26 },
  { name: "Salami", weight: "490g", ingredients: "blat, sos roșii, mozzarella, salam", price: 26 },
  { name: "Mista", weight: "540g", ingredients: "blat, sos roșii, mozzarella, salam, șuncă", price: 26 },
  { name: "Prosciutto e Funghi", weight: "540g", ingredients: "blat, sos roșii, mozzarella, șuncă, ciuperci", price: 27 },
  { name: "Milano", weight: "590g", ingredients: "blat, sos roșii, mozzarella, salam, șuncă, ciuperci", price: 27 },
  { name: "De Post", weight: "550g", ingredients: "blat, sos roșii, ceapă, ardei, porumb, măsline, ciuperci, roșii", price: 27 },
  { name: "Roma", weight: "640g", ingredients: "blat, sos roșii, mozzarella, salam, șuncă, ciuperci, ou", price: 28 },
  { name: "Quattro Stagioni", weight: "640g", ingredients: "blat, sos roșii, mozzarella, salam, măsline, ciuperci, șuncă", price: 28 },
  { name: "Vegetaria", weight: "670g", ingredients: "blat, sos roșii, mozzarella, ceapă, ardei, porumb, măsline, ciuperci, roșii", price: 28 },
  { name: "Tonno", weight: "600g", ingredients: "blat, sos roșii, mozzarella, ton, ceapă, măsline", price: 28 },
  { name: "Țărănească", weight: "570g", ingredients: "blat, sos roșii, mozzarella, bacon, ceapă, ardei, roșii", price: 28 },
  { name: "Capriciosa", weight: "640g", ingredients: "blat, sos roșii, mozzarella, salam, șuncă, măsline, porumb", price: 28 },
  { name: "Diavola", weight: "570g", ingredients: "blat, sos roșii, mozzarella, salam, ciuperci, ceapă, ardei iuți", price: 28 },
  { name: "Cu Pui", weight: "740g", ingredients: "blat, sos roșii, mozzarella, piept de pui, ardei, ciuperci, măsline, porumb", price: 30 },
  { name: "Rustică", weight: "670g", ingredients: "blat, sos roșii, mozzarella, bacon, ciuperci, ardei, porumb, cârnați", price: 30 },
  { name: "Mexicană", weight: "620g", ingredients: "blat, sos roșii, mozzarella, salam, cârnați, măsline, ceapă, ardei iuți", price: 30 },
  { name: "Calzone", weight: "590g", ingredients: "blat, sos roșii, mozzarella, salam, șuncă, ciuperci", price: 30 },
  { name: "Quattro Formaggi", weight: "550g", ingredients: "blat, sos roșii, mozzarella, parmezan, telemea, gorgonzola", price: 30, highlight: true },
  { name: "Casei", weight: "720g", ingredients: "blat, sos roșii, mozzarella, bacon, salam, cârnați, măsline, ardei, porumb", price: 30 },
];

export const focaccia: MenuItem[] = [
  { name: "Focaccia", weight: "250g", ingredients: "blat, ulei de măsline, oregano", price: 8 },
  { name: "Focaccia cu Mozzarella", weight: "360g", ingredients: "blat, mozzarella, oregano", price: 20 },
];

export const others: MenuItem[] = [
  { name: "Pastramă de Oaie", weight: "200g", ingredients: "pastramă, mămăligă, murături", price: 40 },
];

export const toppingsBasic: MenuItem[] = [
  { name: "Ciuperci", price: 6 },
  { name: "Porumb", price: 6 },
  { name: "Măsline", price: 6 },
  { name: "Roșii", price: 6 },
  { name: "Ardei", price: 6 },
  { name: "Ceapă", price: 6 },
];

export const toppingsPremium: MenuItem[] = [
  { name: "Mozzarella", price: 8 },
  { name: "Șuncă", price: 8 },
  { name: "Salam", price: 8 },
  { name: "Cârnați", price: 8 },
  { name: "Pui", price: 8 },
  { name: "Ton", price: 8 },
  { name: "Bacon", price: 8 },
];

export const extras: MenuItem[] = [
  { name: "Ketchup (dulce / iute)", price: 2 },
  { name: "Sos de roșii (dulce / iute)", price: 3 },
];
