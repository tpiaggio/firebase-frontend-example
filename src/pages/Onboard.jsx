import { useState, useEffect } from 'react';
import firebase from "firebase";

import Home from './Home';

const Onboard = () => {
  const [loading, setLoading] = useState();
  const [user, setUser] = useState();
  const [username, setUsername] = useState("");

  useEffect(async () => {
    if(!user) {
      setLoading(true);
      const userDoc = await firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).get();
      userDoc.exists && setUser(userDoc.data());
      setLoading(false);
    }
  }, [user]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid)
    .set({
      name: firebase.auth().currentUser.displayName,
      email: firebase.auth().currentUser.email,
      username
    })
    .then((result) => {
      console.log(result);
      setUser(true);
    })
    .catch((error) => {
      console.log(error);
      alert('Username already taken');
    });
  }

  return user ? <Home /> : loading ? "Loading..." : (
    <>
      <div className="header">
        <h1>Please select a username, {firebase.auth().currentUser.displayName}</h1>
        <button onClick={() => firebase.auth().signOut()}>Sign out</button>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input type="text" value={username} onChange={e => setUsername(e.currentTarget.value)} />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}

export default Onboard;
