import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders hotel header", () => {
  render(<App />);
  const linkElement = screen.getByText(/hotel/i);
  expect(linkElement).toBeInTheDocument();
});
