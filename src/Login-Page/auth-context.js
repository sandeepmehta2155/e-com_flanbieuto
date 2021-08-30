import { createContext, useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userExists, setUserExists] = useState("none");
  const [checkPassword, setCheckPassword] = useState("none");
  const [loader, setLoader] = useState("none");

  const navigate = useNavigate();

  function LogOut() {
    setUserExists("none");
    setCheckPassword("none");
    localStorage.removeItem("cartlistLength");
    localStorage.removeItem("wishlistLength");
    localStorage.removeItem("cartlistObj");
    localStorage.removeItem("wishlistObj");
    localStorage.removeItem("username");
    navigate("/");
  }

  async function LoginUserWithCredentials(userName, passwordInput) {
    if (userName === "") setUserExists("block");

    setCheckPassword("none");
    setLoader("block");

    const response = await axios.get(
      `https://e-commerce.sandeepmehta215.repl.co/userauth/${userName}?password=${passwordInput}`
    );

    if (response.data.message === "user auth is successful") {
      localStorage.setItem(
        "wishlistObj",
        JSON.stringify({
          wishlistObj: response.data.wishlistids
        })
      );
      localStorage.setItem(
        "wishlistLength",
        JSON.stringify({
          wishlistLength: response.data.wishlistids.length
        })
      );
      localStorage.setItem(
        "cartlistObj",
        JSON.stringify({
          cartlistObj: response.data.cartids
        })
      );
      localStorage.setItem(
        "cartlistLength",
        JSON.stringify({
          cartlistLength: response.data.cartids.length
        })
      );
      localStorage.setItem(
        "username",
        JSON.stringify({
          username: response.data.username
        })
      );

      setTimeout(() => {
        navigate("/products");
        setLoader("none");
      }, 1000);
    }

    setTimeout(() => {
      setLoader("none");
    }, 1000);

    response.data.message === "invalid username"
      ? setUserExists("block")
      : setUserExists("none");

    response.data.message === "invalid password"
      ? setCheckPassword("block")
      : setCheckPassword("none");
  }

  return (
    <AuthContext.Provider
      value={{
        LogOut,
        LoginUserWithCredentials,
        userExists,
        checkPassword,
        setUserExists,
        setCheckPassword,
        loader
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
