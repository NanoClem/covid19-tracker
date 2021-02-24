import React, { useState } from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { isLogged } from '../utils'
import PrivateRoute from '../SecureRouting/PrivateRoute';
import PublicRoute from '../SecureRouting/PublicRoute';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import Login from '../Auth/Login';
import Logout from '../Auth/Logout'
import './App.css';


export default function App() {

  const [isAuthenticated, setAuthentication] = useState(isLogged);

  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isAuthenticated} />
        <Switch>
          <PublicRoute exact path="/" restricted={false} component={Home}  />
          <PublicRoute path="/login" restricted={true} setLoggedIn={setAuthentication} component={Login} />
          <PrivateRoute path="/logout" setLoggedIn={setAuthentication} component={Logout} />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}