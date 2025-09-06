import { render, screen, fireEvent } from "@testing-library/react";
import { useAuth } from "./AuthContext";
import AuthProvider from "./AuthProvider";
import { describe, it, expect } from "@jest/globals";

function TestComponent() {
  const { user, login } = useAuth();
  return (
    <div>
      <span role="contentinfo">{user ? user.name : "no-user"}</span>
      <button onClick={() => login({ name: "Lucas" })}>Login</button>
    </div>
  );
}

describe("AuthProvider", () => {
  it("provides null user by default", () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );
    expect(screen.getByRole('contentinfo').textContent).toBe("no-user");
  });

  it("updates user on login", () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );
    fireEvent.click(screen.getByText("Login"));
    expect(screen.getByRole("contentinfo").textContent).toBe("Lucas");
  });
});