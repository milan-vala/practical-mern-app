import AuthLayout from "./route-layout/AuthLayout";
import UnauthLayout from "./route-layout/UnauthLayout";

function App() {
  return true ? <UnauthLayout /> : <AuthLayout />;
}

export default App;
