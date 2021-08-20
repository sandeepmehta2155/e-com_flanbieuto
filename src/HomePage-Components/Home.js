import * as useComponent from "../index";
import { useAuth } from "../Login-Page/auth-context";

export function Home() {
  const { isUserLoggedIn } = useAuth();

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
      {isUserLoggedIn && (
        <>
          <div className="cartTotalQuantity">
            <strong>{cartlistObj.length}</strong>
          </div>
          <div className="wishListTotalQuantity">
            <strong>{wishlistObj.length}</strong>
          </div>
        </>
      )}
      {!isUserLoggedIn && (
        <>
          <div className="cartTotalQuantity">
            <strong>0</strong>
          </div>
          <div className="wishListTotalQuantity">
            <strong>0</strong>
          </div>
        </>
      )}
      <useComponent.FeaturedAuthors />
      <useComponent.BookBatches />
    </>
  );
}
