import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Bulletin from "./pages/Bulletin";
import Dashboard from "./pages/Dashboard"
import SignIn from "./pages/SignIn";
import SignUp from "./pages/Signup";
import HomePage from "./pages/HomePage";
import InboxPage from "./pages/InboxPage";
import NoMatch from "./pages/NoMatch";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { createMuiTheme } from "@material-ui/core/styles";
import TermsOfService from "./pages/TermsOfService";
import ContactUs from "./pages/ContactUs";
import ThankYou from "./pages/ThankYou";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#66bb6a',
    },
  },
});

class App extends Component {

  state = {
    user: "",
    location: "",
  }

  componentDidMount() {
    fetch("/api/session", {
      method: "Get", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "include", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow", // manual, *follow, error
      referrer: "client", // no-referrer, *client
    })
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          console.log(result.data);
          this.setState({
            user: result.data.user,
            location: result.data.loc,
          });
        },
        error => {
          console.log(error);
        }
      );
  }

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
                <Route exact path="/profile" component={Dashboard} />
                <Route exact path="/bulletin" 
                component={this.state.user ? Bulletin : NoMatch} />
                <Route exact path="/inbox" component={InboxPage} />
                <Route exact path="/termsofservice" component={TermsOfService}/>
                <Route exact path="/contact-us" component={ContactUs}/>
                <Route exact path="/thank-you" component={ThankYou}/>
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
