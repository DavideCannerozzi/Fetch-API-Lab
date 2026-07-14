import Badge from "./Badge";
import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Test badge component", () => {
  it("should call onClick when clicked", () => {
    const mockFunction = vi.fn();
    render(<Badge name="Test Name" color="test" onClick={mockFunction} />);
    const badge = screen.getByText("Test Name");
    fireEvent.click(badge);
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
  it("should render the badge name", () => {
    const mockFunction = vi.fn();
    render(<Badge name="Test Name" color="test" onClick={mockFunction} />);
    expect(screen.getByText("Test Name")).toBeInTheDocument();
  });
  it("should have the correct aria-label for accessibility", () => {
    const mockFunction = vi.fn();
    render(<Badge name="Test Name" color="test" onClick={mockFunction} />);
    expect(
      screen.getByLabelText("Select category Test Name"),
    ).toBeInTheDocument();
  });
});
