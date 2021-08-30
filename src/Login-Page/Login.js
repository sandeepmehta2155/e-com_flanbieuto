import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./auth-context";

export function Login() {
  const {
    LogOut,
    LoginUserWithCredentials,
    userExists,
    setUserExists,
    checkPassword,
    isUserLoggedIn,
    loader
  } = useAuth();

  const [userName, setUserName] = useState("");
  const [passwordInput, setUserPassword] = useState("");

  function LoginHandler() {
    return isUserLoggedIn
      ? LogOut()
      : LoginUserWithCredentials(userName, passwordInput);
  }

  return (
    <div className="loginPage">
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
      <span
        onClick={() => {
          setUserName("guest");
          setUserPassword("guest@123");
        }}
      >
        Login as Guest ?
      </span>{" "}
      <br />
      <button className="LoginButton" onClick={LoginHandler}>
        {" "}
        Login
        <div className="loginLoaderAnimation" style={{ display: loader }}>
          <div className="loginContainer">
            <div className="loginWrapper">
              <div className="loginLoader">
                <div className="loginDot"></div>
              </div>
              <div className="loginLoader">
                <div className="loginDot"></div>
              </div>
              <div className="loginLoader">
                <div className="loginDot"></div>
              </div>
              <div className="loginLoader">
                <div className="loginDot"></div>
              </div>
              <div className="loginLoader">
                <div className="loginDot"></div>
              </div>
              <div className="loginLoader">
                <div className="loginDot"></div>
              </div>
            </div>
          </div>
        </div>
      </button>
      <Link to="/subscription">
        <button className="SignupButton">Sign Up</button>
      </Link>
      <br />
    </div>
  );
}
