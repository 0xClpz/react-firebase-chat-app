import React from 'react';
import firebase from 'firebase';

const doLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

export const Login = props =>
  <div>
    <h1>Login</h1>
    <button onClick={doLogin}>Google Login</button>
  </div>;

