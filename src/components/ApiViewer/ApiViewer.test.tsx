import ApiViewer from "./ApiViewer";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

describe("Api Viewer Component", () => {
  it("should show 'Loading...' when loading is true and data is null", () => {
    render(<ApiViewer loading={true} data={null} />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
  it("should show 'No data available' when data is null and loading is false", () => {
    render(<ApiViewer loading={false} data={null} />);
    expect(screen.getByText("No data available")).toBeInTheDocument();
  });
  it("should show the api response when data is an array", () => {
    const mockDataArray = [{ body: "Content" }];
    render(<ApiViewer loading={false} data={mockDataArray} />);
    expect(screen.getByText("API Response")).toBeInTheDocument();
  });
  it("should show the api response when data is an object", () => {
    const mockDataObject = { id: 1, title: "Post", body: "Content" };
    render(<ApiViewer loading={false} data={mockDataObject} />);
    expect(screen.getByText("API Response")).toBeInTheDocument();
  });
});
