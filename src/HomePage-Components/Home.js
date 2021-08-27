import * as useComponent from "../index";

export function Home() {
  const { wishlistObj } = JSON.parse(localStorage.getItem("wishlistObj")) || {
    wishlistObj: []
  };

  const { cartlistObj } = JSON.parse(localStorage.getItem("cartlistObj")) || {
    cartlistObj: []
  };

  return (
    <>
      <img
        src="https://static.onecms.io/wp-content/uploads/sites/34/2019/12/bookshelf-organization-dark-room-full-rick-lozier-1219.jpg"
        alt="loading..."
        className="ImgHomePage"
      />

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
