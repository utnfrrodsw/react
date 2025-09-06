import { jest, describe, expect, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { AuthContext } from "./AuthContext";
import Welcome from "./Welcome";

describe("WelcomeComponent", () => {
  it("should render welcome message", () => {
    const user = { name: "John Connor" };

    render(
      <AuthContext.Provider value={{ user }}>
        <Welcome />
      </AuthContext.Provider>
    );

    expect(screen.getByText("Welcome, John Connor")).toBeInTheDocument();
  });

  it("should fail render component out of provider", () => {
    expect(() => render(<Welcome />)).toThrow(
      "useAuth must be used within an AuthProvider"
    );
  });
});
