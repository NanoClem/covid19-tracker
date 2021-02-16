import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Dataviz from '../Dataviz/Dataviz';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import './App.css';


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dataviz" component={Dataviz} />
          <Route path="/profile" component={Profile} />
          <Route pah="/login" component={Login} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
