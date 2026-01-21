interface ApiViewerProps {
  data: unknown;
  loading: boolean;
}

export default function ApiViewer({ data, loading }: ApiViewerProps) {
  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No data available</p>;

  return (
    <div className="mt-4">
      <h3 className="font-bold mb-2">API Response</h3>
      <pre className="bg-gray-50 p-4 rounded border overflow-auto max-h-96 text-sm">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}
