import { useContext, useEffect } from "react";
import { AppContext } from "./utils/AppContext";
import AuthLayout from "./route-layout/AuthLayout";
import UnauthLayout from "./route-layout/UnauthLayout";
import { useLocation, useNavigate } from "react-router-dom";

function App() {
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();
  const { auth, isLoggedIn } = useContext(AppContext);

  useEffect(() => {
    if (isLoggedIn && (path === "/login" || path === "/signup")) navigate("/");
    if (!isLoggedIn && path === "/") navigate("/login");
  }, [auth, path]);

  return isLoggedIn ? <AuthLayout /> : <UnauthLayout />;
}

export default App;
