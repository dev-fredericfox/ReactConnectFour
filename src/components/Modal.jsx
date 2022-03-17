import Coin from "./Coin";

function Modal({ winner, resetGame }) {
  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="relative w-screen inline-block border border-teal align-bottom text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          {/* <div className={`${topBarColor()} px-4 pt-5 pb-4 sm:p-4 sm:pb-4`}>
          </div> */}
          <div className="bg-midnight px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center rounded-full bg-red-100 mx-0 h-10 w-10">
                {/* <div className={`rounded-full ${topBarColor()} h-6 w-6`}></div> */}
                <Coin size="small" color={winner} />
              </div>
              <div className="flex text-center mt-0 ml-2">
                <h3
                  className="text-xl leading-6 font-medium text-slate-50"
                  id="modal-title"
                >
                  {winner} Player Wins!
                </h3>
              </div>
            </div>
          </div>
          <div className="bg-midnight px-4 py-3 sm:px-6 flex items-center justify-center">
            <button
              onClick={() => {
                resetGame();
              }}
              type="button"
              className="bg-emerald-200  hover:bg-emerald-300  text-midnight px-4 py-2 mt-4 font-bold mb-2 text-xl"
            >
              Start new game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
