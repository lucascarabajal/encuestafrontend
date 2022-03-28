import { AuthProvider } from "./context/authContext";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <AuthProvider>
      <Login></Login>
    </AuthProvider>    
  );
}

export default App;
