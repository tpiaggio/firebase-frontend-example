import firebase from "firebase";

import TimeList from "../components/TimesList";
import TimeForm from "../components/TimeForm";
import Settings from "../components/Settings";

const Home = () => {

  return (
    <>
      <div className="header">
        <h1>Welcome to Time Tracker, {firebase.auth().currentUser.displayName}!</h1>
        <button onClick={() => firebase.auth().signOut()}>Sign out</button>
      </div>
      <TimeList />
      <TimeForm />
      <Settings />
    </>
  );
}

export default Home;
