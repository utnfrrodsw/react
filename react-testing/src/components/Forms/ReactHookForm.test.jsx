import { render, screen, fireEvent } from "@testing-library/react";
import ComplexForm from "./ReactHookForm";
import userEvent from "@testing-library/user-event";
/* eslint-disable no-undef */

describe("ComplexForm", () => {
  it("shows validation errors and submits correctly", async () => {
    render(<ComplexForm />);

    // Submit without filling anything
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    // Validation errors should appear
    expect(await screen.findByText("Name is required")).toBeInTheDocument();
    expect(await screen.findByText("Email is required")).toBeInTheDocument();
    // expect(await screen.findByText("You must accept the terms")).toBeInTheDocument();

    // Fill the form
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "Alice" },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "alice@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/country/i), {
      target: { value: "ar" },
    });
    fireEvent.click(screen.getByRole("checkbox", { name: /accept terms/i }));

    // Submit again
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    // Result should be rendered
    expect(await screen.findByTestId("result")).toHaveTextContent("Name: Alice");
    expect(screen.getByTestId("result")).toHaveTextContent("Email: alice@example.com");
    expect(screen.getByTestId("result")).toHaveTextContent("Country: ar");
    expect(screen.getByTestId("result")).toHaveTextContent("Terms accepted: Yes");
  });


  it("shows validation errors and submits correctly - user event", async () => {
    const user = userEvent.setup();
    render(<ComplexForm />);

    // Submit without filling anything
    await user.click(screen.getByRole("button"));

    // Validation errors should appear
    expect(await screen.findByText("Name is required")).toBeInTheDocument();
    expect(await screen.findByText("Email is required")).toBeInTheDocument();
    // expect(await screen.findByText("You must accept the terms")).toBeInTheDocument();

    // Fill the form
    await user.type(screen.getByLabelText(/name/i), "Alice");
    await user.type(screen.getByLabelText(/email/i), "alice@example.com");
    await user.selectOptions(screen.getByLabelText(/country/i), "ar");
    

    await user.click(screen.getByRole("checkbox", { name: /accept terms/i }));

    // Submit again
    await user.click(screen.getByRole("button"));

    // Result should be rendered
    expect(await screen.findByTestId("result")).toHaveTextContent("Name: Alice");
    expect(screen.getByTestId("result")).toHaveTextContent("Email: alice@example.com");
    expect(screen.getByTestId("result")).toHaveTextContent("Country: ar");
    expect(screen.getByTestId("result")).toHaveTextContent("Terms accepted: Yes");
  });

  it("shows validation errors and submits correctly - user event", async () => {
    const user = userEvent.setup();
    render(<ComplexForm />);

    // Submit without filling anything
    await user.click(screen.getByRole("button"));

    // Validation errors should appear
    expect(await screen.findByText("Name is required")).toBeInTheDocument();
    expect(await screen.findByText("Email is required")).toBeInTheDocument();
    // expect(await screen.findByText("You must accept the terms")).toBeInTheDocument();

    // Fill the form
    await user.type(screen.getByLabelText(/name/i), "Alice");
    await user.type(screen.getByLabelText(/email/i), "alice@example.com");
    await user.selectOptions(screen.getByLabelText(/country/i), "ar");
    

    // await user.click(screen.getByRole("checkbox", { name: /accept terms/i }));

    // Submit again
    await user.click(screen.getByRole("button"));

    // Result should be rendered
    expect(await screen.findByTestId("result")).toHaveTextContent("Name: Alice");
    expect(screen.getByTestId("result")).toHaveTextContent("Email: alice@example.com");
    expect(screen.getByTestId("result")).toHaveTextContent("Country: ar");
    expect(screen.getByTestId("result")).toHaveTextContent("Terms accepted: No");
  });
});
