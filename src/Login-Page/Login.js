import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./auth-context";

export function Login() {
  const [passwordInput, setUserPassword] = useState("");
  const {
    isUserLoggedIn,
    LogOut,
    LoginUserWithCredentials,
    userExists,
    checkPassword
  } = useAuth();

  const [userName, setUserName] = useState();

  const { wishlistObj } = JSON.parse(localStorage.getItem("wishlistObj")) || {
    wishlistObj: []
  };

  const { cartlistObj } = JSON.parse(localStorage.getItem("cartlistObj")) || {
    cartlistObj: []
  };

  function LoginHandler() {
    return isUserLoggedIn
      ? LogOut()
      : LoginUserWithCredentials(userName, passwordInput);
  }

  return (
    <div className="loginPage">
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
      <h2>Login</h2>

      <input
        className="userLoginInput"
        type="text"
        id="txt"
        placeholder="    User name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />

      <small style={{ color: "red", display: userExists }}>
        User doesn't exists
      </small>

      <input
        className="passWordInput"
        type="password"
        id="email"
        placeholder="     Password"
        value={passwordInput}
        onChange={(e) => setUserPassword(e.target.value)}
      />
      <br />

      <small style={{ color: "red", display: checkPassword }}>
        Enter Correct Password
      </small>

      <br />

      <button className="LoginButton" onClick={LoginHandler}>
        {isUserLoggedIn ? "Logout" : "Login"}
      </button>

      <Link to="/subscription">
        <button className="SignupButton">Sign Up</button>
      </Link>
      <br />
      <span
        onClick={() => {
          setUserName("guest");
          setUserPassword("guest@123");
        }}
      >
        Login as Guest ?
      </span>
      <br />
    </div>
  );
}
