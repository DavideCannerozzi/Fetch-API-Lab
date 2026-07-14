export interface Categories {
  id: number;
  name: string;
  color: string;
}

export const categories = [
  { id: 1, name: "Test / Demo", color: "#374151" },
  { id: 2, name: "Countries", color: "#1D4ED8" },
  { id: 3, name: "Animals", color: "#7E22CE" },
  { id: 4, name: "E-commerce", color: "#4338CA" },
  { id: 5, name: "Games / Pokémon", color: "#C2410C" },
  { id: 6, name: "Weather", color: "#0369A1" },
  { id: 7, name: "Users", color: "#0F766E" },
  { id: 8, name: "Fun", color: "#BE185D" },
  { id: 9, name: "TV / Shows", color: "#15803D" },
  { id: 10, name: "Movies", color: "#B91C1C" },
] as const satisfies readonly Categories[];
