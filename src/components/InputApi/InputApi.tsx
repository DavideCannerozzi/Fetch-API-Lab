import React, { useEffect, useState } from "react";
import { useApiContext } from "../../hooks/useApiContext";

interface ApiResponse {
  [key: string]: unknown;
}

interface InputApiProps {
  setData: React.Dispatch<React.SetStateAction<ApiResponse | null>>;
  fetchApi: (url: string) => Promise<ApiResponse | null>;
  loading: boolean;
  error: string | null;
}

export default function InputApi({
  setData,
  fetchApi,
  loading,
  error,
}: InputApiProps) {
  const { selectedUrl, setSelectedUrl } = useApiContext();
  const [copied, setCopied] = useState(false);

  const handleFetch = async () => {
    if (!selectedUrl) return;
    const data = await fetchApi(selectedUrl);
    setData(data);
  };

  const clearInput = () => {
    setSelectedUrl("");
    setData(null);
  };

  const copyUrl = async () => {
    await navigator.clipboard.writeText(selectedUrl);
    setCopied(true);
  };

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4 md:gap-0">
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            placeholder="Enter API URL or select a category"
            className="w-full p-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedUrl}
            onChange={(e) => setSelectedUrl(e.target.value)}
          />
          {copied && <p className="text-center">Copied!</p>}
          <button
            onClick={copyUrl}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
          >
            📋
          </button>
        </div>

        <div className="flex gap-4 md:ml-8">
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleFetch}
            disabled={loading || !selectedUrl}
          >
            {loading ? "Loading..." : "Fetch"}
          </button>
          <button
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={clearInput}
            disabled={!selectedUrl}
          >
            Clear
          </button>
        </div>
      </div>
      <div>{error && <p className="mt-12 text-red-600">⚠️ {error}</p>}</div>
    </>
  );
}
