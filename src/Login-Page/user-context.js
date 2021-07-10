import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const { username } = JSON.parse(localStorage.getItem("username")) || {
    username: null
  };

  const [userName, setUserName] = useState(username);
  return (
    <UserContext.Provider
      value={{
        userName,
        setUserName
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserNameProvider() {
  return useContext(UserContext);
}
