import AuthLayout from "./route-layout/AuthLayout";
import UnauthLayout from "./route-layout/UnauthLayout";

function App() {
  const user = true;
  return user ? <AuthLayout /> : <UnauthLayout />;
}

export default App;
