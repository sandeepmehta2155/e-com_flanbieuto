import { useNavigate } from "react-router-dom";
import { PaymentImg } from "./payment";

export const CheckoutPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="cartDetails">
        <h2> Contact Details </h2>
        <input placeholder="Name *" />
        <br />
        <input placeholder="Moble no. *" />
        <h2> Address </h2>
        <input placeholder="Pin code" />
        <br />
        <input placeholder="Address (House no. , Building, Street, Area)" />
        <br />
        <input placeholder="Locality / Town" />
        <br />
        <input placeholder="Landmark (eg. near XYZ Bank)" />
        <br />
        <h2> Save address as </h2>
        <span> Home </span> <span>Work </span> <br /> <br />
        <button
          className="addAddressButton"
          onClick={() => navigate("/payment")}
        >
          Add address
        </button>
        <PaymentImg />
      </div>
    </>
  );
};
