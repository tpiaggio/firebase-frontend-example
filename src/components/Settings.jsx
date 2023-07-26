import { useEffect, useState } from 'react';
import firebase from "firebase/app";

const Settings = () => {
  const [username, setUsername] = useState();

  useEffect(async () => {
    if(!username) {
      const userDoc = await firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).get();
      userDoc.exists && setUsername(userDoc.data().username);
    }
  }, [username]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid)
    .update({
      username
    })
    .then((result) => {
      console.log(result);
      alert('Username updated successfully');
    })
    .catch((error) => {
      console.log(error);
      alert('Username already taken');
    });
  }

  const handleDeleteAccount = async (e) => {
    e.preventDefault();
    const user = firebase.auth().currentUser;

    firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid)
    .delete()
    .then(async (result) => {
      console.log(result);
      await user.delete();
    })
    .catch((error) => {
      console.log(error);
      alert('Error deleting user');
    });
  }

  return (
    <div className="footer">
      <h2>Settings</h2>
      <button onClick={handleDeleteAccount}>Delete account</button>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Change Username</label>
          <input type="text" value={username} onChange={e => setUsername(e.currentTarget.value)} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
};

export default Settings;