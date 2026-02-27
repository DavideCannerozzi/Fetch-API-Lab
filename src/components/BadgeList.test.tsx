import { describe, it, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import BadgeList from "./BadgeList";
import { categories } from "../data/data";

const mockFunction = vi.fn();
vi.mock("../hooks/useApiContext", () => ({
  useApiContext: () => ({ handleClick: mockFunction }),
}));

describe("Test BadgeList Component", () => {
  it("it should render a badge for each category", () => {
    render(<BadgeList />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(categories.length);
  });
  it("should call handleClick on badge clicked", () => {
    render(<BadgeList />);
    const firstBadge = screen.getByText(categories[0].name);
    fireEvent.click(firstBadge);
    expect(mockFunction).toHaveBeenCalledWith(categories[0].name);
  });
});
