import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Navbar from './Navbar';
import Home from './Home';
import Dataviz from './Dataviz';
import Profile from './Profile';
import './assets/css/App.css';


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dataviz" component={Dataviz}/>
          <Route path="/profile" component={Profile}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
