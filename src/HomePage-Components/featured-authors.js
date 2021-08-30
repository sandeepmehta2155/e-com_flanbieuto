import { useFeaturedAuthor } from "./featured-provider";

export function FeaturedAuthors() {
  const { FeaturedAuthors, FeaturedSeries } = useFeaturedAuthor();

  return (
    <>
      <div className="featuredObjects">
        <h1> Featured Indian Authors </h1>
        {FeaturedAuthors.length === 0 && (
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
        <ul className="img-group">
          {FeaturedAuthors.map(
            (obj) =>
              obj.nation === "India" && (
                <li key={obj.icon} className="list list-group-item">
                  <a href={obj.aboutWikilink}>
                    <img className="circle" alt="loading" src={obj.icon} />
                  </a>
                </li>
              )
          )}
        </ul>
        <h1> Featured International Authors </h1>
        {FeaturedAuthors.length === 0 && (
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
        <ul className="img-group">
          {FeaturedAuthors.map(
            (obj) =>
              obj.nation !== "India" && (
                <li key={obj.icon} className="list list-group-item">
                  <a href={obj.aboutWikilink}>
                    <img className="circle" alt="loading" src={obj.icon} />
                  </a>
                </li>
              )
          )}
        </ul>
        <h1> Featured Series</h1>
        {FeaturedSeries.length === 0 && (
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
        <ul className="img-group">
          {FeaturedSeries.map((obj) => (
            <li key={obj.titleSrc} className="list list-group-item">
              <a href={obj.aboutWikilink}>
                <img className="square" alt="loading" src={obj.titleSrc} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
