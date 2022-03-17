import { Fragment } from "react";
import Coin from "./Coin";

function Player({color, turn}) {
  const bold = () => {
    if (color.includes(turn)) {
      return "font-bold";
    }
    return;
  };
  const playerTurn = () => {
    if (color.includes(turn) && color.includes("Yellow")) {
      return (
        <div className="absolute -rotate-[142deg] ml-7 font-eightyone text-8xl text-transparent bg-clip-text bg-gradient-to-br from-sun to-nova w-[90px] h-[70px]">
          1
        </div>
      );
    } else if (
      color.includes(turn) &&
      color.includes("Red")
    ) {
      return (
        <div className="absolute rotate-[32deg] mr-7 font-eightyone text-8xl text-transparent bg-clip-text bg-gradient-to-br from-pink to-nova w-[90px] h-[70px]">
          1
        </div>
      );
    }
  };
  return (
    <Fragment>
      <Coin size="small" color={color} />
      <div className={`text-white ml-1 mr-1 text-lg sm:text-xl ${bold()}`}>
        {color} Player
      </div>
      {playerTurn()}
    </Fragment>
  );
}

export default Player;
