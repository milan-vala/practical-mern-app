import AuthLayout from "./route-layout/AuthLayout";
import UnauthLayout from "./route-layout/UnauthLayout";

function App() {
  const user = false;
  return user ? <AuthLayout /> : <UnauthLayout />;
}

export default App;
