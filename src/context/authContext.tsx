import { createContext, Dispatch, FC, ReactNode, useContext, useReducer } from "react";
import { AuthActions } from "../state/actions/authActions";
import { authInitialState, AuthReducer } from "../state/reducers/authReducer";
import { User } from "../types";

export const AuthStateContext = createContext<User>(authInitialState);
export const AuthDispachContext = createContext<Dispatch<AuthActions>>(()=> undefined);

interface AuthProviderProps{
    children: ReactNode
}

export const AuthProvider: FC<AuthProviderProps> =({children}) =>{
    const [user, dispatch] = useReducer(AuthReducer, authInitialState);

    return(
        <AuthStateContext.Provider value={user}>
            <AuthDispachContext.Provider value={dispatch}>
                {children}
            </AuthDispachContext.Provider>
        </AuthStateContext.Provider>

    );
};

export const useAuthState = () => {
    const context = useContext(AuthStateContext);

    if(context === undefined){
        throw new Error("useAuthState must be used within an AuthProvider");
    }

    return context;
}

export const useAuthDispatch = () => {
    const context = useContext(AuthDispachContext);

    if(context === undefined){
        throw new Error("useAuthDispachContext must be used within an AuthProvider");
    }

    return context;
}