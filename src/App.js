import React from 'react';
import './style.css';
import { signUp, useAuth } from "./firebaseConfig";
import { useRef, useState } from 'react';

function App() {
   const [loading, setLoading] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    const currentUser = useAuth();
    async function hendleSignUp(){
      try{
        setLoading(true);
    await signUp(emailRef.current.value, passwordRef.current.value) 
   } catch {
    alert("Errors");
     }
     setLoading(false);
    }
  return (
    <div className="App">
      <header className="App-header">
      <div>{currentUser?.email}  </div>
       <input ref={ emailRef } placeholder="Enter your email"/>  
       <input ref={ passwordRef } type="password" placeholder="Enter your password"/>  
       <button desabled={loading || currentUser  } onClick={hendleSignUp}>Sign-Up</button>
       </header>
    </div>
    
  );
}

export default App;
