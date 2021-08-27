import { useBookBatches } from "./book-batch-provider";

export function BookBatches() {
  const { img } = useBookBatches();

  return (
    <div className="bookBatches">
      {img.length === 0 && (
        <>
          <h1> Loading... </h1> <br /> <br />
          <div className="container">
            <div className="wrapper">
              <div className="loader">
                <div className="dot"></div>
              </div>
              <div className="loader">
                <div className="dot"></div>
              </div>
              <div className="loader">
                <div className="dot"></div>
              </div>
              <div className="loader">
                <div className="dot"></div>
              </div>
              <div className="loader">
                <div className="dot"></div>
              </div>
              <div className="loader">
                <div className="dot"></div>
              </div>
            </div>
          </div>
        </>
      )}
      {img.map((obj) => (
        <img className="bookBatchPills" src={obj} alt="loading" key={obj} />
      ))}
    </div>
  );
}
