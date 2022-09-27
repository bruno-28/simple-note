import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Create from "../Create";

const MockCreate = () => {
  return (
    <Router>
      <Create />
    </Router>
  );
};

const fillForm = (obj) => {
  for (const [key, value] of Object.entries(obj)) {
    fireEvent.change(screen.getByPlaceholderText(`Add ${key}...`), {
      target: { value: value },
    });
  }
};

describe("check if page contains correct elements", () => {
  it("should render add note heading", () => {
    render(<MockCreate />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent(/add a new note/i);
  });

  it("should render note title label", () => {
    render(<MockCreate />);
    const labelElement = screen.getByText(/note title:/i);
    expect(labelElement).toBeInTheDocument();
  });

  it("should render note title input", () => {
    render(<MockCreate />);
    const inputElement = screen.getByPlaceholderText(/add title.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it("should render note body label", () => {
    render(<MockCreate />);
    const labelElement = screen.getByText(/note body:/i);
    expect(labelElement).toBeInTheDocument();
  });

  it("should render note body input", () => {
    render(<MockCreate />);
    const inputElement = screen.getByPlaceholderText(/add body.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it("should render note author label", () => {
    render(<MockCreate />);
    const labelElement = screen.getByText(/note author:/i);
    expect(labelElement).toBeInTheDocument();
  });

  it("should render note author input", () => {
    render(<MockCreate />);
    const inputElement = screen.getByPlaceholderText(/add author.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it("should render add note button", () => {
    render(<MockCreate />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveTextContent(/add note/i);
  });
});

describe("check form functionality", () => {
  it("should render user input inside title box", () => {
    render(<MockCreate />);
    const inputElement = screen.getByPlaceholderText(/add title.../i);
    expect(inputElement).toHaveValue("");
    fireEvent.change(inputElement, { target: { value: "todo list" } });
    expect(inputElement).toHaveValue("todo list");
  });

  it("should render user input inside body box", () => {
    render(<MockCreate />);
    const inputElement = screen.getByPlaceholderText(/add body.../i);
    expect(inputElement).toHaveValue("");
    fireEvent.change(inputElement, { target: { value: "clean dishes" } });
    expect(inputElement).toHaveValue("clean dishes");
  });

  it("should render user input inside author box", () => {
    render(<MockCreate />);
    const inputElement = screen.getByPlaceholderText(/add author.../i);
    expect(inputElement).toHaveValue("");
    fireEvent.change(inputElement, { target: { value: "john doe" } });
    expect(inputElement).toHaveValue("john doe");
  });
  // TODO fix page changing upon submit
  it("should render create page if required info is missing and form submitted", () => {
    render(<MockCreate />);
    const headingElement = screen.getByRole("heading");
    const inputElement = screen.getByPlaceholderText(/add title.../i);
    const buttonElement = screen.getByRole("button");
    fireEvent.change(inputElement, { target: { value: "todo" } });
    fireEvent.click(buttonElement);
    expect(headingElement).toHaveTextContent(/add a new note/i);
  });
});
