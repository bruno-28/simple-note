import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../Navbar";

const MockNavbar = () => {
  return (
    <Router>
      <Navbar />
    </Router>
  );
};

it("should render Simple Note in the navbar", () => {
  render(<MockNavbar />);
  const headingElement = screen.getByText(/simple note/i);
  expect(headingElement).toBeInTheDocument();
});

it("should render 3 anchor tags", () => {
  render(<MockNavbar />);
  const numOfAnchorTags = screen.getAllByRole("link").length;
  expect(numOfAnchorTags).toBe(3);
});

it("should render Home anchor tag", () => {
  render(<MockNavbar />);
  expect(screen.getByText("Home").href).toBe("http://localhost/");
});

it("should render New Note anchor tag", () => {
  render(<MockNavbar />);
  expect(screen.getByText("New note").href).toBe("http://localhost/create");
});

it("should render About anchor tag", () => {
  render(<MockNavbar />);
  expect(screen.getByText("About").href).toBe("http://localhost/about");
});