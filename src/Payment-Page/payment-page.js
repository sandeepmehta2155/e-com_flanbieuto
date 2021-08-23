import { useNavigate } from "react-router-dom";

export const PaymentPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="cartDetails">
        <h2> Card Details </h2>
        <input placeholder="Debit /Credit card no. *" />
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
      </div>
    </>
  );
};
