import { render, screen } from "@testing-library/react";
import Cell from "../components/Cell";

test("renders White coin in Blue Cell", () => {
  render(<Cell />);
  const coinDiv = screen.getByTestId("coin");
  expect(coinDiv.classList.contains("bg-white")).toBe(true);
});

test("renders Yellow coin in Blue Cell", () => {
  render(<Cell cellStatus={"Yellow"} />);
  const coinDiv = screen.getByTestId("coin");
  expect(coinDiv.classList.contains("bg-yellow-400")).toBe(true);
});

test("renders Red coin in Blue Cell", () => {
    render(<Cell cellStatus={"Red"} />);
    const coinDiv = screen.getByTestId("coin");
    expect(coinDiv.classList.contains("bg-red-700")).toBe(true);
  });
