import React from "react";
import UserProfile from "./UserProfile";

function App() {
  const userData = {
    name: 'AYUSH',
    age: 20,
    location: 'Bhavnagar',
    bio: 'JAY SHREE RAM'
  }
  return (
    <>
      <div>
        <UserProfile name={userData.name} age={userData.age} location={userData.location} bio={userData.bio} />
      </div>
    </>
  );
}

export default App;