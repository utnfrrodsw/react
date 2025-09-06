import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect, jest } from "@jest/globals";
import { AuthContext } from "../Context/AuthContext";
import RouterComponent from "./RouterComponent";

// jest.mock("./AdminPage", () => {
//   return function MockAdminPage() {
//     return <p>My Mock Admin Page</p>
//   }
// })

describe("RouterComponent", () => {
  it("renders admin page for authorized user", () => {
    const user = { name: "Lucas", role: "admin" };
    render(
      <AuthContext.Provider value={{ user }}>
        <MemoryRouter initialEntries={["/admin"]}>
          <RouterComponent />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText("Admin Page")).toBeInTheDocument();
  });

  it("redirects unauthorized user to /unauthorized", () => {
    const user = { name: "Lucas", role: "operator" };
    render(
      <AuthContext.Provider value={{ user }}>
        <MemoryRouter initialEntries={["/admin"]}>
          <RouterComponent />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText("Unauthorized")).toBeInTheDocument();
  });

  it("should redirect to /login", () => {
    const user = null;
    render(
      <AuthContext.Provider value={{ user }}>
        <MemoryRouter initialEntries={["/admin"]}>
          <RouterComponent />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText("Login")).toBeInTheDocument();
  });
});
