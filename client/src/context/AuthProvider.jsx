import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const navigate = useNavigate();





    const login = (token, user) => {
        localStorage.setItem('accessToken', token);
        setAuth({ token, user });
        navigate("/App");
    };

    const logout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('id_user');
        localStorage.removeItem('name_user');


        setAuth({});
        navigate("/login");
    };

    const isAuthenticated = () => !!localStorage.getItem('accessToken'); 
    return (
        <AuthContext.Provider value={{ auth, setAuth, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
