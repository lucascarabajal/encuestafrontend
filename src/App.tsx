import { AuthProvider } from "./context/authContext";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import{BrowserRouter as Router, Routes, Route }from "react-router-dom";
import AppRoute2 from "./Router/AppRoute2";
import { RouteType } from "../src/types";
import routes from "./Router/routes";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {
            routes.map(route => <AppRoute2 
              component = {route.component}
              path = {route.path}
              routeType = {route.routeType}
              key = {route.path}
            >
            </AppRoute2>)
          }
        </Routes>
      </Router>
    </AuthProvider>    
  );
}

export default App;
