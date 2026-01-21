import { useState } from "react";

export default function useFetchApi<T>() {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchApi = async (url: string): Promise<T | null> => {
    if (!url) return null;
    setError(null);
    setLoading(true);
    try {
      const res = await fetch(url);
      const json: T = await res.json();
      setData(json);
      return json;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to Fetch";
      setError(errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const clear = () => {
    setData(null);
    setError(null);
    setLoading(false);
  };

  return {
    data,
    error,
    loading,
    fetchApi,
    clear,
    setData: setData as React.Dispatch<React.SetStateAction<T | null>>,
  };
}
