import React from 'react';
import AuthProvider from   '../contexts/AuthContext';
import AuthViewer from './AuthViewer'
import Login from './Login';
import BookViewer from './BookViewer';
import BookAdder from './BookAdder';

 import "../styles/styles.scss";

function App() {

  return (
   <div className='App'>
     <AuthProvider>
    <Login />
    <AuthViewer>
      <h1>Welcome! You're Logged In!</h1>
    <BookViewer />
    </AuthViewer>
        <AuthViewer role = 'admin'>  
          <BookViewer />
          <BookAdder />
        </AuthViewer>
      </AuthProvider>
   </div>
  );
}

export default App;
