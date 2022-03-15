function Imprint(props) {
  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          onClick={() => props.close(false)}
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
          <div className="bg-midnight px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div
              onClick={() => props.close(false)}
              className="text-center flex flex-row-reverse mb-6 text-2xl cursor-pointer"
            >
              <div className="w-9 h-9 text-slate-50 rounded-full border-teal border">
              X
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex text-center mt-0 ml-2">
                <h3
                  className="text-xl mb-6 leading-6 font-medium text-slate-50"
                  id="modal-title"
                >
                  Impressum
                </h3>
              </div>
            </div>
            <div className="grid grid-cols-1 text-slate-50 text-center mt-0 ml-2">
              <p>Angaben gemäß § 5 TMG</p>
              <p>Frederic Fox</p>
              <p>Hintere Dorfstr. 6</p>
              <p>79588 Efringen-Kirchen</p>
              <p>Kontakt Telefon: 016092201612</p>
              <p>E-Mail: dev.frederic.fox@gmail.com</p>
              <p>Quelle: eRecht24</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Imprint;
