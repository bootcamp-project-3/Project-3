import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Bulletin from "./pages/Bulletin";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/Signup";
import HomePage from "./pages/HomePage";
import Inbox from "./pages/Inbox";
import NoMatch from "./pages/NoMatch";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { createMuiTheme } from "@material-ui/core/styles";
import TermsOfService from "./pages/TermsOfService";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#66bb6a',
    },
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <Router>
            <div>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/sign-in" component={SignIn} />
                <Route exact path="/sign-up" component={SignUp} />
                <Route exact path="/bulletin" component={Bulletin} />
                <Route exact path="/inbox" component={Inbox} />
                <Route exact path="/termsofservice" component={TermsOfService}/>
                <Route component={NoMatch} />
              </Switch>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
