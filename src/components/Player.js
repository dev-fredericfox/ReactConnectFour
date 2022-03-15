import Coin from "./Coin";

function Player(props) {
  const bold = () => {
    if (props.color.includes(props.turn)) {
      return "font-bold";
    }
    return;
  };
  const playerTurn = () => {
    if (props.color.includes(props.turn) && props.color.includes("Yellow")) {
      return (
        <div className="absolute -rotate-[142deg] ml-7 font-eightyone text-8xl text-transparent bg-clip-text bg-gradient-to-br from-sun to-nova w-[90px] h-[70px]">
          1
        </div>
      );
    } else if (
      props.color.includes(props.turn) &&
      props.color.includes("Red")
    ) {
      return (
        <div className="absolute -rotate-[142deg] ml-7 font-eightyone text-8xl text-transparent bg-clip-text bg-gradient-to-br from-pink to-nova w-[90px] h-[70px]">
          1
        </div>
      );
    }
  };
  return (
    <div>
      <div className="flex mt-1 flex-row w-44">
        <Coin size="small" color={props.color} />
        <div className={`text-white ml-2 text-lg sm:text-xl ${bold()}`}>
          {props.color} Player
        </div>
        {playerTurn()}
      </div>
    </div>
  );
}

export default Player;
