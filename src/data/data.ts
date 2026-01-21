export interface Categories {
  id: number;
  name: string;
  color: string;
}

export const categories = [
  { id: 1, name: "Test / Demo", color: "gray" },
  { id: 2, name: "Countries", color: "blue" },
  { id: 3, name: "Animals", color: "purple" },
  { id: 4, name: "E-commerce", color: "indigo" },
  { id: 5, name: "Games / Pokémon", color: "orange" },
  { id: 6, name: "Weather", color: "skyblue" },
  { id: 7, name: "Users", color: "teal" },
  { id: 8, name: "Fun", color: "pink" },
  { id: 9, name: "TV / Shows", color: "green" },
  { id: 10, name: "Movies", color: "red" },
] as const satisfies readonly Categories[];
