import { createContext, useReducer } from "react";
import { initialState, AuthReducer } from "../state/AuthReducer";


const AuthContext = createContext(initialState)



export default function AuthProvider({children}) {

    const [state, dispatch] = useReducer(AuthReducer, initialState)
    const signIn = () => {}


    const values = {
        user: null,
        signIn, 
        signOut
        
    }
    
    return(
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}