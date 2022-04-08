import{ Route, Navigate, RouteProps, useNavigate, NavigateProps, Outlet} from "react-router-dom";
import { useAuthState } from "../context/authContext";
import { RouteType } from "../types";

const user = useAuthState();

const AppRoute = (routeType:RouteType) =>{    
    switch(routeType){
        case "PRIVATE":
            return user.isAuthenticated? <Outlet/> : <Navigate to = "/login"/>;
        case "GUEST":
            return !user.isAuthenticated? <Outlet/> : <Navigate to = "/user"/>;
        case "PUBLIC":
            return <Outlet/>
    }
}
export default AppRoute