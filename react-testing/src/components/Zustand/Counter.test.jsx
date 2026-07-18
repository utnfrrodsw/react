import { describe, it, expect, beforeEach } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";
import { useCounterStore } from "./counterStore";

describe("Counter", () => {
  beforeEach(() => {
    useCounterStore.setState({ count: 0 });
  });

  it("should render with initial count of 0", () => {
    render(<Counter />);
    expect(screen.getByText("Count: 0")).toBeInTheDocument();
  });

  it("should increment when clicking Incrementar", () => {
    render(<Counter />);
    fireEvent.click(screen.getByText("Incrementar"));
    expect(screen.getByText("Count: 1")).toBeInTheDocument();
  });

  it("should decrement when clicking Decrementar", () => {
    render(<Counter />);
    fireEvent.click(screen.getByText("Decrementar"));
    expect(screen.getByText("Count: -1")).toBeInTheDocument();
  });

  it("should reset when clicking Reset", () => {
    render(<Counter />);
    fireEvent.click(screen.getByText("Incrementar"));
    fireEvent.click(screen.getByText("Incrementar"));
    fireEvent.click(screen.getByText("Reset"));
    expect(screen.getByText("Count: 0")).toBeInTheDocument();
  });
});
