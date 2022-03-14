import { render, screen } from "@testing-library/react";
import Cell from "../components/Cell";

it("renders White coin in Blue Cell", () => {
  render(<Cell />);
  const coinDiv = screen.getByTestId("coin");
  expect(coinDiv.classList.contains("bg-midnight")).toBe(true);
});

it("renders Yellow coin in Blue Cell", () => {
  render(<Cell cellStatus={"Y"} />);
  const coinDiv = screen.getByTestId("coin");
  expect(coinDiv.classList.contains("bg-orange")).toBe(true);
});

it("renders Red coin in Blue Cell", () => {
    render(<Cell cellStatus={"R"} />);
    const coinDiv = screen.getByTestId("coin");
    expect(coinDiv.classList.contains("bg-purple")).toBe(true);
  });
