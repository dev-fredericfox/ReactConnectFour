import { render, screen } from "@testing-library/react";
import Coin from "../components/Coin";

it("renders white coin", () => {
  render(<Coin color="white" />);
  const coinDiv = screen.getByTestId("coin");
  expect(coinDiv.classList.contains("bg-white")).toBe(true);
});

it("renders fallback coin", () => {
  render(<Coin />);
  const coinDiv = screen.getByTestId("coin");
  expect(coinDiv.classList.contains("bg-midnight")).toBe(true);
});

it("renders custom color coin", () => {
  render(<Coin color="orange" />);
  const coinDiv = screen.getByTestId("coin");
  expect(coinDiv.classList.contains("bg-orange")).toBe(true);
});

