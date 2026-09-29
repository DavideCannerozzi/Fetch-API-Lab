import { useState, useRef } from "react";

export default function useFetchApi<T>() {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const controller = useRef(new AbortController());

  const fetchApi = async (url: string): Promise<T | null> => {
    if (!url) return null;
    controller.current = new AbortController();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch(url, { signal: controller.current.signal });
      if (!res.ok) {
        throw new Error(`Request failed: ${res.status} ${res.statusText}`);
      }
      const contentType = res.headers.get("content-type");

      if (
        !contentType ||
        (!contentType.includes("application/json") &&
          !contentType.includes("text/javascript"))
      ) {
        throw new Error("The provided URL does not return JSON");
      }
      const json: T = await res.json();
      setData(json);
      return json;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to Fetch";
      if (err instanceof Error && err.name === "AbortError") {
        return null;
      }
      setError(errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  };
  return {
    data,
    error,
    loading,
    fetchApi,
    setError,
    controller,
    setData: setData as React.Dispatch<React.SetStateAction<T | null>>,
  };
}
