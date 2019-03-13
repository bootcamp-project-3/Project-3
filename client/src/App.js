import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Bulletin from "./pages/Bulletin";
import Dashboard from "./pages/Dashboard";
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
import General from "./pages/General";
import AboutUs from "./pages/AboutUs";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#e8f5e9",
      main: "#66bb6a",

    },
    secondary: {
      light: "#fafafa",
      main: "#DC143C",
      dark: "#e0e0e0",
    },
  },
});

class App extends Component {
  state = {
    user: "",
    location: "",
  };

  componentDidMount() {
    // This method of authentication is no longer working using the react-router-links
    // fetch("/api/session", {
    //   method: "get", // *GET, POST, PUT, DELETE, etc.
    //   mode: "cors", // no-cors, cors, *same-origin
    //   cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //   credentials: "include", // include, *same-origin, omit
    //   headers: {
    //     "Content-Type": "application/json",
    //     // "Content-Type": "application/x-www-form-urlencoded",
    //   },
    //   redirect: "follow", // manual, *follow, error
    //   referrer: "client", // no-referrer, *client
    // })
    //   .then(res => res.json())
    //   .then(
    //     result => {
    //       if (result.status === 401) {
    //       }
    //       console.log(result);
    //       console.log(result.data);
    //       this.setState({
    //         user: result.data.user,
    //         location: result.data.loc,
    //       });
    //     },
    //     error => {
    //       console.log(error);
    //     }
    //   );
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
                <Route exact path="/bulletin" component={Bulletin} />
                <Route exact path="/inbox" component={InboxPage} />
                <Route exact path="/general" component={General} />
                {/* <Route exact path="/tools" component={Tools} />
                <Route exact path="/carpool" component={CarPool} />
                <Route exact path="/skills" component={Skills} />
                <Route exact path="/events" component={Events} /> */}
                <Route
                  exact
                  path="/termsofservice"
                  component={TermsOfService}
                />
                <Route exact path="/contact-us" component={ContactUs} />
                <Route exact path="/thank-you" component={ThankYou} />
                <Route exact path="/aboutus" component={AboutUs}/>
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
