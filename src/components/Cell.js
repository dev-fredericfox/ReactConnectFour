import Coin from "./Coin";

function Cell(props) {
  return (
    <div
      onClick={() => {
        props.setCoin(props.column, props.turn);
      }}
      className="flex flex-row bg-midnight w-11 h-11 sm:w-14 sm:h-14 m-[1.5px]"
    >
      {!props.cellStatus && <Coin />}
      <Coin color={props.cellStatus} size="big" />
    </div>
  );
}

export default Cell;
