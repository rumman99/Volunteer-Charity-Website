import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition  } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"
import { useContext } from "react";
import { UserLoginContext } from "../../context/userLoginContext";
import "./style.css"
import { getAuth, signOut } from 'firebase/auth';

const navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'About Us', href: '/about', current: false },
    { name: 'Donation', href: 'donation', current: false },
    { name: 'Blogs', href: 'blogs', current: false },
    { name: 'Events', href: 'events', current: false },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const Navbar = () => {
    const {userLogin, setUserLogin}= useContext(UserLoginContext);
    const [sessionUser, setSessionUser]= useState()
    useEffect(()=>{
        const sessionUser= JSON.parse(sessionStorage.getItem('user'));
        setSessionUser(sessionUser);
    },[])

/////// LOGOUT Implementation //////////////
    const handleLogOut=()=>{        /// 
      const auth = getAuth();          /////  
      signOut(auth).then(() => {          /////
        setUserLogin({name:'', email:''});    /////
        sessionStorage.removeItem('token');       ////
        sessionStorage.removeItem('user');          ////
      }).catch((error) => {                           /////
      console.log(error);                       ///////
      });                                ////////// 
    }                               ///////
///////////////////////////////////////    

    return (
        <div>
        {/* <div className="navbar rounded-full bg-base-100 flex justify-evenly bg-slate-500">
            <img className="w-20 hover:hue-rotate-90" src={logo} alt="" />
            <nav className="">
                <NavLink to='/' className="hover:text-white xl:mx-8 btn btn-ghost xl:text-lg">Home</NavLink>
                <NavLink className="hover:text-white btn btn-ghost xl:text-lg" to='/about'>About Us</NavLink>
                <NavLink to='donation' className="hover:text-white xl:mx-8 btn btn-ghost xl:text-lg">Donation</NavLink>
                <NavLink className="hover:text-white btn btn-ghost xl:text-lg" to='events'>Events</NavLink>
                <NavLink to='blogs' className="hover:text-white xl:mx-8 btn btn-ghost xl:text-lg">Blogs</NavLink>
                {!userLogin.email ? <NavLink to='login'><button className="hover:text-white btn btn-warning ">Login</button></NavLink> : <NavLink to='userTask' className="underline decoration-8 decoration-blue-700 hover:decoration-white hover:text-blue-500 btn btn-ghost text-white xl:text-lg">{userLogin.name}</NavLink>}
            </nav>
            </div> */}
            <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="py-4 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="w-14"
                    src={logo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                {/* Login/Profile*/}
                <Menu as="div" className="relative ml-3">
                  <div>
                  {userLogin.email || sessionStorage.getItem('user') ? <NavLink to='userTask' className="underline decoration-8 decoration-blue-700 hover:decoration-white hover:text-blue-500 btn btn-ghost text-white xl:text-lg">{userLogin.name || sessionUser?.name}</NavLink>: <NavLink to='login'><button className="hover:text-white btn btn-warning ">Login</button></NavLink>}
                  {sessionStorage.getItem('user')&& <button onClick={handleLogOut} className="ml-4 btn btn-error">Logout</button>}
                  </div>
                </Menu>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
        </div>
    );
};

export default Navbar;