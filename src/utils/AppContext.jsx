import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(window.sessionStorage.getItem("token"));
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userToken = window.sessionStorage.getItem("token");
    if (userToken) {
      setAuth(userToken);
    }
  }, [auth]);

  return (
    <AppContext.Provider value={{ auth, isLoggedIn, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
