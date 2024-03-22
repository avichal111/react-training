import React, { useContext, useEffect, useRef } from 'react';
import {mount} from 'staticpages/HomePage';
import { UserContext, userContextType, userType } from '../context/context';
export type homeprops = {
  user: userType,
  login: (user:userType) => void, 
   logout: () => void}
type homeReturn = {onUserStateChange: (user:userType) => void}
   
   
   const HomePage = () : JSX.Element => {

  const context = useContext<userContextType>(UserContext)
  const homepagediv = useRef<HTMLDivElement>(null);

  const login = (user: userType) => {
    context.login(user)
    context.onLoginStateChaged(user)
  }
  
  const logout = () => {
    context.logout()
    context.onLoginStateChaged({id: 0, name: '', role: ''})
  }

  const props:homeprops = {
    user: {id: context.id,name: context.name,role:context.role},
    login,
    logout
  }

  useEffect( () => {
    const homereturn: homeReturn = mount(homepagediv.current, props);
    context.onLoginStateChaged = homereturn.onUserStateChange
   } , []);

  return (
    <div ref={homepagediv} />
  );
}

export default HomePage;
