import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"
import { useContext } from "react";
import { UserLoginContext } from "../../context/userLoginContext";
import "./style.css"

const Navbar = () => {
    const {userLogin, setUserLogin}= useContext(UserLoginContext);

    return (
        <div className="">
        <div className="navbar rounded-full bg-base-100 flex justify-evenly bg-slate-500">
            <img className="w-20 hover:hue-rotate-90" src={logo} alt="" />
            <nav className="">
                <NavLink to='/' className="hover:text-white xl:mx-8 btn btn-ghost xl:text-lg">Home</NavLink>
                <NavLink className="hover:text-white btn btn-ghost xl:text-lg" to='/about'>About Us</NavLink>
                <NavLink to='donation' className="hover:text-white xl:mx-8 btn btn-ghost xl:text-lg">Donation</NavLink>
                <NavLink className="hover:text-white btn btn-ghost xl:text-lg" to='events'>Events</NavLink>
                <NavLink to='blogs' className="hover:text-white xl:mx-8 btn btn-ghost xl:text-lg">Blogs</NavLink>
                {!userLogin.email ? <NavLink to='login'><button className="hover:text-white btn btn-warning ">Login</button></NavLink> : <NavLink to='userTask' className="underline decoration-8 decoration-blue-700 hover:decoration-white hover:text-blue-500 btn btn-ghost text-white xl:text-lg">{userLogin.name}</NavLink>}
            </nav>
            </div>
        </div>
    );
};

export default Navbar;