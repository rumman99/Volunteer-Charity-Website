import { useContext } from "react";
import { UserLoginContext } from "../../context/userLoginContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {userLogin, setUserLogin}= useContext(UserLoginContext);
    const location= useLocation();

    if(!userLogin.email){
        return <Navigate to='/login' state={{ from: location }} replace/>
    }
    return children;
};

export default PrivateRoute;