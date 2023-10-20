import { useContext } from "react";
import { AppContext } from "./utils/AppContext";
import AuthLayout from "./route-layout/AuthLayout";
import UnauthLayout from "./route-layout/UnauthLayout";

function App() {
  const user = useContext(AppContext);

  return user ? <AuthLayout /> : <UnauthLayout />;
}

export default App;
