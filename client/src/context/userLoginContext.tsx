import { createContext, useContext, useState } from 'react'

type UserLoginType={
    name: string,
    email: string,
}

const defaultValue = {
    userLogin: {name: "", email: ""},
    setUserLogin: (userLogin:UserLoginType) =>{}
} as userLoginContextInterface;

interface userLoginContextInterface{
    userLogin: UserLoginType;
    setUserLogin: React.Dispatch<React.SetStateAction<UserLoginType>> 
}

export const UserLoginContext = createContext(defaultValue);

type userLoginProviderProps={
    children: React.ReactNode
};

export const UserLoginContextProvider = ({children}:userLoginProviderProps) => {

    const [userLogin, setUserLogin] = useState<UserLoginType>({name:'', email:''});

    return (
        <UserLoginContext.Provider value={{userLogin, setUserLogin}}>
            {children}
        </UserLoginContext.Provider>
    )

};


    
