import { useState } from "react";
import BadgeList from "./components/BadgeList";
import InputApi from "./components/InputApi";
import ApiViewer from "./components/ApiViewer";
import useFetchApi from "./hooks/useFetch";
import Footer from "./components/Footer";

interface ApiResponse {
  [key: string]: unknown;
}

function App() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const { fetchApi, loading, error } = useFetchApi<ApiResponse>();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <h1 className="text-center m-6 text-4xl">Fetch Api Labs</h1>
        <h2 className="text-center mb-12 text-orange-400">
          <span className="text-xl mr-4">🚀</span>
          Explore public APIs: enter any JSON API URL or pick a category from
          the badges to see live data.
        </h2>
        <main className="max-w-7xl mx-auto px-4">
          <BadgeList />
          <InputApi
            setData={setData}
            fetchApi={fetchApi}
            loading={loading}
            error={error}
          />
          <ApiViewer data={data} loading={loading} />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
