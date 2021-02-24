import React, { useState } from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";

import PrivateRoute from '../SecureRouting/PrivateRoute';
import PublicRoute from '../SecureRouting/PublicRoute';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import './App.css';


export default function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <PublicRoute exact path="/" restricted={false} component={Home}  />
          <PublicRoute path="/login" restricted={true} component={Login} />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}