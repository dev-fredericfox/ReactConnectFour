import { fireEvent, render, screen } from "@testing-library/react";
import Cell from "../components/Cell";

it("renders Red coin in Blue Cell", () => {
  render(<Cell cellStatus="Red" />);
  const coinDiv = screen.getByTestId("big-coin");
  expect(
    coinDiv.classList.contains(
      "bg-gradient-to-br" &&
        "from-red" &&
        "to-pink" &&
        "absolute" &&
        "h-7" &&
        "w-7"
    )
  ).toBe(true);
});

it("renders Yellow coin in Blue Cell", () => {
  render(<Cell cellStatus="Y" />);
  const coinDiv = screen.getByTestId("big-coin");
  expect(
    coinDiv.classList.contains(
      "bg-gradient-to-br" &&
        "from-nova" &&
        "to-sun" &&
        "absolute" &&
        "h-7" &&
        "w-7"
    )
  ).toBe(true);
});

it("renders Emtpy Cell", () => {
  render(<Cell />);
  const coinDiv = screen.queryByTestId("big-coin");
  expect(coinDiv).not.toBeInTheDocument();
});

describe("When Cell is clicked", () => {
  it("Calls function set coin once", () => {
    const setCoinFn = jest.fn()
    render(<Cell setCoin={setCoinFn} />);
    const cell = screen.queryByTestId("cell");
    fireEvent.click(cell)
    expect(setCoinFn).toHaveBeenCalledTimes(1);
  });
});
