import Coin from "./Coin";

function Cell({setCoin, column, turn, cellStatus}) {
  return (
    <div
      onClick={() => {
        setCoin(column,turn);
      }}
      className="flex flex-row bg-midnight w-11 h-11 sm:w-14 sm:h-14 m-[1.5px]"
    >
      {cellStatus && <Coin />}
      <Coin color={cellStatus} size="big" />
    </div>
  );
}

export default Cell;
