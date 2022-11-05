import { createContext, useReducer, useContext } from "react";
import { initialState, AuthReducer } from "../state/AuthReducer";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";



const AuthContext = createContext(initialState)



export default function AuthProvider({ children }) {

    const [state, dispatch] = useReducer(AuthReducer, initialState)
    const signIn = async () => {
        GoogleSignin.configure({
            webClientId: "462671993634-lsbm61qmsbu7s6t64os8i3aj9kv2a23m.apps.googleusercontent.com",
        });

        console.log("click");
        
        try {
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            const { idToken } = await GoogleSignin.signIn();

            const googleCredential = auth.GoogleAuthProvider.credential(idToken);

            let result = await auth().signInWithCredential(googleCredential);

            console.log(result);

            dispatch({
                type: "SIGN_IN",
                payload: {
                    user: "user1"
                }
            })
        }
        catch (e) {
            console.log(e);
        }
    }

    const signOut = () => {}


    const values = {
        user: null,
        signIn,
        signOut

    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);

    if(context === undefined)
        throw new Error("useAuth must be used within AuthContext");
    
    return context;
}