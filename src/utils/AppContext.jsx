import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(window.sessionStorage.getItem("token"));

  useEffect(() => {
    const userToken = window.sessionStorage.getItem("token");
    if (userToken !== auth) {
      setAuth(userToken);
    }
  }, [auth]);

  return <AppContext.Provider value={auth}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
