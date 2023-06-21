import React from 'react';
import './App.css';
import ProfileList from "./features/profileList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Here's some profiles mebbe, made with MUI
          <ProfileList/>
      </header>
    </div>
  );
}

export default App;
