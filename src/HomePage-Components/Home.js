import * as useComponent from "../index";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export function Home() {
  const { wishlistObj } = JSON.parse(localStorage.getItem("wishlistObj")) || {
    wishlistObj: []
  };

  const { cartlistObj } = JSON.parse(localStorage.getItem("cartlistObj")) || {
    cartlistObj: []
  };

  return (
    <>
      <AliceCarousel autoPlay autoPlayInterval="2000">
        <img
          src="https://www.detroitlabs.com/wp-content/uploads/2018/02/alfons-morales-YLSwjSy7stw-unsplash.jpg"
          className="ImgHomePage"
          alt=""
        />
        <img
          src="https://whataftercollege.com/wp-content/uploads/2019/03/3-2-1024x535.jpg"
          className="ImgHomePage"
          alt=""
        />
        <img
          src="https://static.onecms.io/wp-content/uploads/sites/34/2019/12/bookshelf-organization-dark-room-full-rick-lozier-1219.jpg"
          alt=""
          className="ImgHomePage"
        />
      </AliceCarousel>
      <>
        <div className="cartTotalQuantity">
          <strong>{cartlistObj.length}</strong>
        </div>
        <div className="wishListTotalQuantity">
          <strong>{wishlistObj.length}</strong>
        </div>
      </>
      <useComponent.FeaturedAuthors />
      <useComponent.BookBatches />
    </>
  );
}
