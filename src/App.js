import { useState, useEffect } from 'react';
import './App.css';
import firebase from "firebase";

import Onboard from './pages/Onboard';
import Login from './pages/Login';

function App() {
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      setSignedIn(!!user);
    });
  }, []);

  return (
    <div className="App">
      {signedIn ? <Onboard /> : <Login />}
    </div>
  );
}

export default App;
