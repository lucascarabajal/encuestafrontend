import{ Route, Navigate, RouteProps, useNavigate, NavigateProps} from "react-router-dom";
import { useAuthState } from "../context/authContext";
import { RouteType } from "../types";

interface AppRouteProps extends RouteProps{
    component: any,
    routeType: RouteType
}

const AppRoute = (props: AppRouteProps) => {

    const{ component: Component, path, routeType,...rest} = props;

    const user = useAuthState();

    const renderComponent = (routeProps: NavigateProps) =>{
        switch(routeType){
            case "PRIVATE":
                if(user.isAuthenticated){
                    return<Component {...routeProps}></Component>
                }else{
                    return <Navigate replace to="/login"></Navigate>
                }
            case "GUEST":
                if(!user.isAuthenticated){
                    return<Component {...routeProps}></Component>
                }else{
                    return <Navigate replace to="/user"></Navigate>
                }
            case "PUBLIC":
                return <Component {...routeProps}></Component>

        }
    }

    return(
        <Route {...rest} path= {path!} render={(routeProps: NavigateProps) => renderComponent(routeProps)}>

        </Route>
    )
}
export default AppRoute