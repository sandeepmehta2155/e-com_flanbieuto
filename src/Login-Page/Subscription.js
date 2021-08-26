import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export function Subscription() {
  const [userName, setUserName] = useState("");
  const [userNameValidation, setUserNameValidation] = useState("none");
  const [passwordInput, setUserPassword] = useState("");
  const [passwordReInput, setpasswordReInput] = useState("");

  const [userExists, setUserExists] = useState("none");
  const [userAdded, setUserAdded] = useState("none");

  const [type, setType] = useState("password");

  const reg = /([0-9])/;

  async function setResponseFromDB() {
    const response = await axios.post(
      "https://e-commerce.sandeepmehta215.repl.co/signup",
      {
        username: userName,
        password: passwordInput
      }
    );

    console.log(response.data.message);

    response.data.message === "enter valid username"
      ? setUserNameValidation("block")
      : setUserNameValidation("none");

    response.data.message === "user Exists for given username"
      ? setUserExists("block")
      : setUserExists("none");

    response.data.message === "user added in database"
      ? setUserAdded("block")
      : setUserAdded("none");
  }

  return (
    <div className="signUpPage">
      <h2>Subscribe</h2>

      <input
        className="userLoginInput"
        type="text"
        id="txt"
        placeholder="    User name"
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />

      <small style={{ color: "red", display: userNameValidation }}>
        Enter valid username
      </small>
      <small style={{ color: "red", display: userExists }}>User exists</small>

      <br />

      <input
        className="passWordInput"
        type="password"
        id="email"
        placeholder="     Password"
        onChange={(e) => setUserPassword(e.target.value)}
      />
      <br />
      <br />

      <input
        className="passWordInput"
        id="email"
        type={type}
        placeholder="     Re-enter your password"
        onChange={(e) => setpasswordReInput(e.target.value)}
      />
      <br />
      <br />

      <label id="shpass">Show password</label>
      <input
        id="check"
        type="checkbox"
        onClick={() => {
          if (type === "password") setType("text");
          else setType("password");
        }}
      />

      <br />
      {!reg.test(passwordInput) && (
        <div style={{ color: "red" }}>Password should contain a number </div>
      )}
      <br />
      {passwordReInput && (
        <div>
          {passwordReInput !== passwordInput && (
            <div style={{ color: "red" }}> Error! Try matching password </div>
          )}
        </div>
      )}
      <br />
      <Link to="/login">
        <button className="LoginButton">Back to Login</button>
      </Link>
      <button
        className="SignupButton"
        onClick={() => {
          setResponseFromDB();
        }}
      >
        Sign Up
      </button>
      <span style={{ color: "green", display: userAdded }}>
        User Added in database
        <span role="img" aria-labelledby="emoji">
          ✅
        </span>
      </span>
    </div>
  );
}
