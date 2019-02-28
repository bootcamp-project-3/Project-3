import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Bulletin from "./pages/Bulletin";
import SignIn from "./pages/SignIn";
import HomePage from "./pages/HomePage";
import NoMatch from "./pages/NoMatch";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/sign-in" component={SignIn} />
              <Route exact path="/bulletin" component={Bulletin} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
