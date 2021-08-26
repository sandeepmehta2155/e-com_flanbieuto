import { useBookBatches } from "./book-batch-provider";

export function BookBatches() {
  const { img } = useBookBatches();

  return (
    <div className="bookBatches">
      {img.length === 0 && (
        <>
          <h2> Loading ... </h2>
          <div class="container">
            <div class="wrapper">
              <div class="loader">
                <div class="dot"></div>
              </div>
              <div class="loader">
                <div class="dot"></div>
              </div>
              <div class="loader">
                <div class="dot"></div>
              </div>
              <div class="loader">
                <div class="dot"></div>
              </div>
              <div class="loader">
                <div class="dot"></div>
              </div>
              <div class="loader">
                <div class="dot"></div>
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
