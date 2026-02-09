import { useEffect, useState, type ReactNode } from "react";
import { apis } from "../data/apis";
import { ApiContext } from "./ApiContext";

interface ApiProviderProps {
  children: ReactNode;
}

export function ApiProvider({ children }: ApiProviderProps) {
  const [selectedUrl, setSelectedUrl] = useState<string>(
    () => localStorage.getItem("selectedUrl") || "",
  );

  useEffect(() => {
    localStorage.setItem("selectedUrl", selectedUrl);
  }, [selectedUrl]);

  const handleClick = (categoryName: string) => {
    const api = apis.find((a) => a.category === categoryName);
    if (api) {
      setSelectedUrl(api.url);
    }
  };

  return (
    <ApiContext.Provider value={{ selectedUrl, setSelectedUrl, handleClick }}>
      {children}
    </ApiContext.Provider>
  );
}
