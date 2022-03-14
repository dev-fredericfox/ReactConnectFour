import Coin from "./Coin";

function Cell(props) {
  return (
    <div
      onClick={() => {
        props.setCoin(props.column, props.turn);
      }}
      className="flex flex-row bg-blue-900 w-10 h-10"
    >
      {!props.cellStatus && <Coin color="white" />}
      {props.cellStatus === "Yellow" && <Coin color="yellow-400" />}
      {props.cellStatus === "Red" && <Coin color="red-700" />}
    </div>
  );
}

export default Cell;
