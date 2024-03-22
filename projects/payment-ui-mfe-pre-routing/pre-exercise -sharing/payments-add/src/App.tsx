import React from 'react';
import './App.css';
import AddTransaction from './PaymentsAdd/AddTransaction';


function App() {
  return (
    <>
      <h1>Payments list app</h1>
      <AddTransaction serverUrl='http://someserver'/>
    </>      
  );
}

export default App;
