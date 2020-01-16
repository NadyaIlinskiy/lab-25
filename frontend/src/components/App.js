import React from 'react';
import AuthProvider from   '../contexts/AuthContext';
import Login from './Login';

 import "../styles/styles.scss";

function App() {

  return (
   <div className='App'>
     <AuthProvider>
    <Login />
      </AuthProvider>
   </div>
  );
}

export default App;
