import { createContext } from "react";

interface ApiContextProps {
  selectedUrl: string;
  setSelectedUrl: (url: string) => void;
  handleClick: (categoryName: string) => void;
}

export const ApiContext = createContext<ApiContextProps | undefined>(undefined);
