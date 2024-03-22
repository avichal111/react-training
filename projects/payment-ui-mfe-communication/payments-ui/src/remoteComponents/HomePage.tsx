import React, { useContext, useEffect, useRef } from 'react';
import {mount} from 'staticpages/HomePage';
import { UserContext, userContextType, userType } from '../context/context';

export type homeprops = {user: userType, login: (user:userType) => void, logout: () => void}
const HomePage = () : JSX.Element => {

  const context = useContext<userContextType>(UserContext)
  const homepagediv = useRef<HTMLDivElement>(null);

  const login = (user: userType) => {
    console.log("Login the user:", user)
    context.login(user)
  }
  
  const logout = () => {
    console.log("Logout")
    context.logout()
  }

  const props:homeprops = {
    user: {id: context.id,name: context.name,role:context.role},
    login,
    logout
  }

  useEffect( () => {
    mount(homepagediv.current, props);
  } , []);

  return (
    <div ref={homepagediv} />
  );
}

export default HomePage;
