import { jest, describe, expect, it, beforeEach } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import FetchUser from "./FetchUser";

global.fetch = jest.fn();

describe("FetchComponent", () => {
  const mockFetch = jest.spyOn(global, "fetch");

  beforeEach(() => {
    mockFetch.mockRestore();
  });

  it("fetches and displays user", async () => {
    const user = { name: "John Connor" };
    
    mockFetch.mockResolvedValue({
        json: () => Promise.resolve(user),
        ok: true,
    });
    render(<FetchUser />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    expect(await screen.findByText(user.name)).toBeInTheDocument();
  });

  it("should fail when fetch user", async () => {
    mockFetch.mockResolvedValue({
        json: () => Promise.resolve({}),
        ok: false,
        status: 500,
    });

    render(<FetchUser />);
    expect(await screen.findByText("Error recovering user...")).toBeInTheDocument();
    expect(screen.queryByText("Loading")).not.toBeInTheDocument();
  });
});
