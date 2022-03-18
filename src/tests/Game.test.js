import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Game from "../components/Game";

it("Checks if the gamebord is complete (grid of 42)", () => {
  render(<Game />);
  const cells = screen.queryAllByTestId("cell");
  expect(cells).toHaveLength(42);
});

it("Checks if the Reset Button is Present", () => {
  render(<Game />);
  const resetButton = screen.queryAllByTestId("reset-button");
  expect(resetButton).toHaveLength(1);
});

it("Checks if Clicking the gameboard generates coin", () => {
  const changeTurn = () => {
    return true;
  };
  render(<Game turn="Y" changeTurn={changeTurn} />);
  const cell = screen.queryAllByTestId("cell")[0];
  fireEvent.click(cell);
  const coinDiv = screen.queryAllByTestId("big-coin");
  const yellowCoin = coinDiv.filter(el => el.className.includes('from-nova'))
  expect(yellowCoin).toHaveLength(1);
});