import { createContext, useEffect, useState } from "react";
import { fetchAuthSession, fetchUserAttributes } from "aws-amplify/auth";

export const AuthContext = createContext();

export default function AuthProvider({ children}) {
    // set jwt token and user attribute
    const [jwtToken, setJwtToken] = useState(null);
    const [userAttr, setUserAttr] = useState(null);

    // get jwt token and user attribute from aws-amplify sdk
    useEffect(() => {
        const getToken = async() => {
            try {
                const session = await fetchAuthSession();
                const token = session.tokens?.accessToken?.toString() || null;
                setJwtToken(token);
                if (token) {
                    const user = await fetchUserAttributes();
                    setUserAttr(user);
                } else {
                    setUserAttr(null);
                }
            } catch (error) {
                console.log("User not logged in or token acquisition failed", error);
            }
        };
        getToken();
    }, []);

    return (
        <AuthContext.Provider value={{ jwtToken, userAttr }}>
            { children  }
        </AuthContext.Provider>
    );
}