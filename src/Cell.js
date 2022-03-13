import Coin from "./Coin";

function Cell(props) {
  return (
    <div
      onClick={() => {
        props.setCoin(props.column, props.turn);
      }}
      className="flex flex-row bg-blue-900 w-10 h-10"
    >
      <Coin color="white" />
      {props.cellStatus === "X" && <Coin color="yellow-400" />}
      {props.cellStatus === "O" && <Coin color="red-700" />}
    </div>
  );
}

export default Cell;
