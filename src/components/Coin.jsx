import { Fragment } from "react";
function Coin({color, size}) {
  const colorCoin = () => {
    if (color.includes("R")) {
      return "bg-gradient-to-br from-red to-pink";
    }
    if (color.includes("Y")) {
      return "bg-gradient-to-t from-nova to-sun";
    }
    return "bg-midnight";
  };
  const bigCoin = () => (
    <div
      data-testid="coin"
      className={`${colorCoin()} absolute m-auto sm:w-10 sm:h-10 h-7 w-7 rounded-full ml-2 mt-2`}
    />
  );
  const smallCoin = () => (
    <div data-testid="coin" className={`${colorCoin()} h-6 w-6 rounded-full`} />
  );
  return (
    <Fragment>
      {size === "big" && bigCoin()}
      {size === "small" && smallCoin()}
    </Fragment>
  );
}

export default Coin;
