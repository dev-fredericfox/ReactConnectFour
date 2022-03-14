import { render, screen } from "@testing-library/react";
import Coin from "../components/Coin";

test("renders white coin", () => {
  render(<Coin color="white" />);
  const coinDiv = screen.getByTestId("coin");
  expect(coinDiv.classList.contains("bg-white")).toBe(true);
});

test("renders fallback coin", () => {
  render(<Coin />);
  const coinDiv = screen.getByTestId("coin");
  expect(coinDiv.classList.contains("bg-white")).toBe(true);
});

test("renders red coin", () => {
    render(<Coin color="red-700"/>);
    const coinDiv = screen.getByTestId("coin");
    expect(coinDiv.classList.contains("bg-red-700")).toBe(true);
  });

  test("renders yellow coin", () => {
    render(<Coin color="yellow-400"/>);
    const coinDiv = screen.getByTestId("coin");
    expect(coinDiv.classList.contains("bg-yellow-400")).toBe(true);
  });
