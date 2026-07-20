import { describe, expect, it } from "vitest";
import { ApiProvider } from "./ApiProvider";
import { render, screen } from "@testing-library/react";
import { useApiContext } from "../hooks/useApiContext";
import userEvent from "@testing-library/user-event";

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

function HandleClick() {
  const { handleClick, selectedUrl } = useApiContext();
  return (
    <>
      <button onClick={() => handleClick("Animals")}>Click</button>
      <div data-testid="updated-url">{selectedUrl}</div>
    </>
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

  it("should update localStorage when selectedUrl changes", async () => {
    const user = userEvent.setup();
    render(
      <ApiProvider>
        <ChangeState />
      </ApiProvider>,
    );
    await user.click(screen.getByRole("button"));
    expect(localStorage.getItem("selectedUrl")).toBe("https://api.example.com");
  });
  it("should update selectedUrl when an existing category is clicked", async () => {
    const user = userEvent.setup();
    render(
      <ApiProvider>
        <HandleClick />
      </ApiProvider>,
    );
    await user.click(screen.getByRole("button", { name: "Click" }));
    expect(screen.getByTestId("updated-url")).toHaveTextContent(
      "https://api.thecatapi.com/v1/images/search",
    );
  });
});
