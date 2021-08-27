import { useNavigate } from "react-router-dom";
import { PaymentImg } from "./payment";
import { useRef } from "react";

export const CheckoutPage = () => {
  const navigate = useNavigate();
  const inputEl = useRef(null);

  const { wishlistObj } = JSON.parse(localStorage.getItem("wishlistObj")) || {
    wishlistObj: []
  };

  const { cartlistObj } = JSON.parse(localStorage.getItem("cartlistObj")) || {
    cartlistObj: []
  };

  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };

  return (
    <>
      <>
        <div className="cartTotalQuantity">
          <strong>{cartlistObj.length}</strong>
        </div>
        <div className="wishListTotalQuantity">
          <strong>{wishlistObj.length}</strong>
        </div>
      </>
      <div className="cartDetails">
        <h2> Card Details </h2>
        <input placeholder="Debit /Credit card no. *" ref={inputEl} />
        <br />
        <input placeholder="Name on card *" />
        <br />
        <input placeholder="Pin code" />
        <br />
        <input placeholder="Valid through (MM/YY)" />
        <br />
        <input placeholder="CVV " />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          class="cardForm-base-cvvInfoIcon"
        >
          <g fill="none" fill-rule="evenodd">
            <circle
              cx="6"
              cy="6"
              r="5.75"
              stroke="#000"
              stroke-width=".5"
            ></circle>
            <g fill="#000" transform="translate(5.5 3)">
              <rect width="1" height="4" y="2" rx=".5"></rect>
              <rect width="1" height="1" rx=".5"></rect>
            </g>
          </g>
        </svg>
        <br />

        <button className="payNowButton" onClick={() => navigate("/payment")}>
          Pay Now
        </button>
        <PaymentImg />
      </div>
    </>
  );
};
