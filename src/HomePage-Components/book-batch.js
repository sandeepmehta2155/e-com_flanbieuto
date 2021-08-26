import { useBookBatches } from "./book-batch-provider";

export function BookBatches() {
  const { img } = useBookBatches();

  return (
    <div className="bookBatches">
      {img.length === 0 && (
        <>
          <br />
          <br /> <h1> Loading ... </h1> <br /> <br />
        </>
      )}
      {img.map((obj) => (
        <img className="bookBatchPills" src={obj} alt="loading" key={obj} />
      ))}
    </div>
  );
}
