interface Apis {
  id: number;
  name: string;
  category: string;
  url: string;
}

export const apis = [
  {
    id: 1,
    name: "JSONPlaceholder",
    category: "Test / Demo",
    url: "https://jsonplaceholder.typicode.com/posts",
  },
  {
    id: 2,
    name: "REST Countries",
    category: "Countries",
    url: "https://restcountries.com/v3.1/all",
  },
  {
    id: 3,
    name: "The Cat API",
    category: "Animals",
    url: "https://api.thecatapi.com/v1/images/search",
  },
  {
    id: 4,
    name: "Dog CEO’s Dog API",
    category: "Animals",
    url: "https://dog.ceo/api/breeds/image/random",
  },
  {
    id: 5,
    name: "FakeStoreAPI",
    category: "E-commerce",
    url: "https://fakestoreapi.com/products",
  },
  {
    id: 6,
    name: "PokeAPI",
    category: "Games / Pokémon",
    url: "https://pokeapi.co/api/v2/pokemon",
  },
  {
    id: 7,
    name: "Open-Meteo",
    category: "Weather",
    url: "https://api.open-meteo.com/v1/forecast?latitude=35&longitude=139&hourly=temperature_2m",
  },
  {
    id: 8,
    name: "Random User API",
    category: "Users",
    url: "https://randomuser.me/api/?results=10",
  },
  {
    id: 9,
    name: "Advice Slip API",
    category: "Fun",
    url: "https://api.adviceslip.com/advice",
  },
  {
    id: 10,
    name: "Rick and Morty API",
    category: "TV / Shows",
    url: "https://rickandmortyapi.com/api/character",
  },
  {
    id: 11,
    name: "Studio Ghibli Films",
    category: "Movies",
    url: "https://ghibliapi.vercel.app/films",
  },
] as const satisfies readonly Apis[];
