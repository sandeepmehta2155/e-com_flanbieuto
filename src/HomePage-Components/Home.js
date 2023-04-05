import * as useComponent from "../index";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export function Home() {
  const items = [
    <img
      alt=""
      className="ImgHomePage"
      src="https://whataftercollege.com/wp-content/uploads/2019/03/3-2-1024x535.jpg"
    />,
    <img
      alt=""
      className="ImgHomePage"
      src="https://static.onecms.io/wp-content/uploads/sites/34/2019/12/bookshelf-organization-dark-room-full-rick-lozier-1219.jpg"
    />
  ];
  return (
    <>
      <AliceCarousel
        mouseTracking
        autoPlay
        autoPlayInterval="1500"
        infinite
        disableButtonsControls
        items={items}
      />

      <useComponent.FeaturedAuthors />
      <useComponent.BookBatches />
    </>
  );
}
