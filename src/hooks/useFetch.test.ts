import { act, renderHook } from "@testing-library/react";
import { vi, it, expect, afterEach } from "vitest";
import useFetchApi from "./useFetch";

it("show return data from fetch call", async () => {
  const mockFetchFunction = vi.fn(() =>
    Promise.resolve({
      ok: true,
      status: 200,
      headers: { get: () => "application/json" },
      json: () => Promise.resolve({ test: "Data" }),
    }),
  );
  vi.stubGlobal("fetch", mockFetchFunction);
  const { result } = renderHook(() => useFetchApi());
  let data;

  await act(async () => {
    data = await result.current.fetchApi("https://fake-api.com");
  });

  expect(data).toEqual({ test: "Data" });
  expect(result.current.data).toEqual({ test: "Data" });
});

afterEach(() => {
  vi.unstubAllGlobals();
});
