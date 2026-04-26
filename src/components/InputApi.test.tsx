import { fireEvent, screen, render, waitFor } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach } from "vitest";
import InputApi from "./InputApi";

const mockSetData = vi.fn();
const mockFetchApi = vi.fn();
const mockSetSelectedUrl = vi.fn();

vi.mock("../hooks/useApiContext", () => ({
  useApiContext: () => ({
    selectedUrl: "https://fake-api.com",
    setSelectedUrl: mockSetSelectedUrl,
  }),
}));

describe("Test InputApi component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should call setSelectedUrl when input value changes", () => {
    render(
      <InputApi
        setData={mockSetData}
        fetchApi={mockFetchApi}
        loading={false}
        error={null}
      />,
    );
    const input = screen.getByPlaceholderText(
      "Enter API URL or select a category",
    );
    fireEvent.change(input, { target: { value: "test" } });
    expect(mockSetSelectedUrl).toHaveBeenCalledWith("test");
  });
  it("First button should call fetchApi on click", async () => {
    mockFetchApi.mockResolvedValue({ test: "data" });
    render(
      <InputApi
        setData={mockSetData}
        fetchApi={mockFetchApi}
        loading={false}
        error={null}
      />,
    );
    const fetchButton = screen.getByText("Fetch");
    fireEvent.click(fetchButton);
    expect(mockFetchApi).toHaveBeenCalledWith("https://fake-api.com");
    await waitFor(() => {
      expect(mockSetData).toHaveBeenCalledWith({ test: "data" });
    });
  });
});
