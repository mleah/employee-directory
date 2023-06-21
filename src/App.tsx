import React from 'react';
import './App.css';
import ProfileList from "./features/profiles/profileList";
import {Redirect, Route, Switch} from "react-router-dom";
import ProfilePage from "./features/profiles/profilePage";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/employeeDirectory/profile/:id"><ProfilePage /></Route>
                <Route path="/employeeDirectory"><ProfileList /></Route>
                <Route path="/">
                    <Redirect to="/employeeDirectory" />
                </Route>
            </Switch>

        </div>
    );
}

export default App;
