import React, { createContext, useEffect, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// const AuthContext = createContext();
// const AuthContextProvider = (props) => {
//   <AuthContext.Provider value={}></AuthContext.Provider>
// }


const Auth = () => {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        const currentUser = user
        setUser(currentUser)
      } 
    })
  }, [])
  
  const signUp = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
      
    })
  }

  return (
    <div>
      
    </div>
  );
};

export default Auth;