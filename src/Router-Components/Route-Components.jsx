import { Route, Routes } from "react-router-dom";
import * as useComponent from "../index";

export function RouteComponents() {
  return (
    <>
      <Routes>
        <Route path="/" element={<useComponent.Home />} />
        <Route path="/products" element={<useComponent.Product />} />
        <Route path="/cart" element={<useComponent.Cart />} />
        <Route path="/wishlist" element={<useComponent.WishList />} />
        <Route path="/login" element={<useComponent.Login />} />
        <Route path="/subscription" element={<useComponent.Subscription />} />
        <Route path="*" element={<useComponent.RedirectPage />} />
        <Route path="/aboutus" element={<useComponent.AboutUs />} />
        <Route path="/contactus" element={<useComponent.ContactUs />} />
        <useComponent.PrivateRoute
          path="/profile"
          element={<useComponent.UserProfile />}
        />
      </Routes>
    </>
  );
}
