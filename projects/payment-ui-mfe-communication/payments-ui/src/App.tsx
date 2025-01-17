import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PaymentsAdd from './remoteComponents/PaymentsAdd';
import PaymentsList from './remoteComponents/PaymentsList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageHeader from './components/pageHeader/PageHeader';
import HomePage from './remoteComponents/HomePage';
import PageNotFound from './remoteComponents/PageNotFound';
import { UserContext, userType } from './context/context';

function App() {

  const [user, setUser] = useState<userType>({id: 0, name: '', role: ''})

  const login = (user:userType) => {
    setUser(user)
  }

  const logout = () => {
    setUser({id: 0, name: '', role: ''})
  }


  return (
    <UserContext.Provider value={{...user, login, logout, onLoginStateChaged: (user: userType) => {},}}>
    <BrowserRouter>
      <PageHeader />
      <Routes>
        <Route path="/find" element={<PaymentsList />} />
        <Route path="/add" element={<PaymentsAdd />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
