import { AuthProvider } from "./context/authContext";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import{BrowserRouter as Router, Switch }from "react-router-dom";
import AppRoute from "./Router/AppRoute";
import { RouteType } from "../src/types";
import routes from "./Router/routes";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          {
            routes.map(route => <AppRoute 
              component = {route.component}
              path = {route.path}
              routeType = {route.routeType}
              key = {route.path}
              exact
            >
            </AppRoute>)
          }
        </Switch>
      </Router>
    </AuthProvider>    
  );
}

export default App;
