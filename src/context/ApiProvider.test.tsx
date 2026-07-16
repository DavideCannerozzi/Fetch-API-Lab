import { describe, expect, it } from "vitest";
import { ApiProvider } from "./ApiProvider";
import { render, screen, fireEvent } from "@testing-library/react";
import { useApiContext } from "../hooks/useApiContext";

function TestComponent() {
  const { selectedUrl } = useApiContext();
  return <div data-testid="selected-url">{selectedUrl}</div>;
}

function ChangeState() {
  const { setSelectedUrl } = useApiContext();
  return (
    <button onClick={() => setSelectedUrl("https://api.example.com")}>
      Change State Url
    </button>
  );
}

describe("Api Provider Context", () => {
  it("should initialize selectedUrl from localStorage", () => {
    localStorage.setItem("selectedUrl", "https://api.example.com");
    render(
      <ApiProvider>
        <TestComponent />
      </ApiProvider>,
    );
    expect(screen.getByTestId("selected-url")).toHaveTextContent(
      "https://api.example.com",
    );
  });
  it("should have empty selectedUrl", () => {
    localStorage.removeItem("selectedUrl");
    render(
      <ApiProvider>
        <TestComponent />
      </ApiProvider>,
    );
    expect(screen.getByTestId("selected-url")).toHaveTextContent("");
  });

  it("local storage should have new updated url inside the useEffect", () => {
    render(
      <ApiProvider>
        <ChangeState />
      </ApiProvider>,
    );
    fireEvent.click(screen.getByRole("button"));
    expect(localStorage.getItem("selectedUrl")).toBe("https://api.example.com");
  });
});
