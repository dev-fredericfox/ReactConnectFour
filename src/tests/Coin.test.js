import { render, screen } from "@testing-library/react";
import Coin from "../components/Coin";


it("renders big yellow coin", () => {
  render(<Coin color="Red" size="big" />);
  const coinDiv = screen.getByTestId("big-coin");
  expect(coinDiv.classList.contains("bg-gradient-to-br" && "from-red" && "to-pink")).toBe(true);
});

it("renders small red coin", () => {
  render(<Coin color="Yellow" size="small" />);
  const coinDiv = screen.getByTestId("small-coin");
  expect(coinDiv.classList.contains("bg-gradient-to-br" && "from-nova" && "to-sun")).toBe(true);
});

