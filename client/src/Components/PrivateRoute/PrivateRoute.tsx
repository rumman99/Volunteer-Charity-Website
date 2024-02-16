import { useContext } from "react";
import { UserLoginContext } from "../../context/userLoginContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {userLogin, setUserLogin}= useContext(UserLoginContext);
    const location= useLocation();

    if(sessionStorage.getItem('token') || userLogin.email){
    return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace/>

};

export default PrivateRoute;