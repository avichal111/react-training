import {createContext} from "react";

export type userType = {id: Number, name : String, role : String};

export type onLoginStateChange = {onLoginStateChaged: (user:userType) => void}

export type userContextType = userType & onLoginStateChange & { login : (user : userType) => void, logout : () => void};

export const UserContext : React.Context<userContextType> = 
    createContext<userContextType>({id: 0, name : "", role : "", onLoginStateChaged: (user: userType) => {}, login : () => {}, logout: () => {}});