import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import "../../src/App.css";
import "../components/ProfInfo/NameForm";
import NameForm from "../components/ProfInfo/NameForm";
import ZipForm from "../components/ProfInfo/ZipForm";
import DashNav from "../components/ProfInfo/dashNav"
import LpNav from "../components/LandingPage/LpNav";
import EmailForm from "../components/ProfInfo/EmailForm";
import PasswordForm from "../components/ProfInfo/PassForm";


const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class Dashboard extends Component {
  state = {
    notName: "",
    id: "",
    location: "",
    email: "",
    password: "",
    nameDisabled: true,
    locationDisabled: true,
    passDisabled: true,
    emailDisabled: true,
    prevnotName: "",
    prevLocation: "",
    prevPass: "",
    prevEmail: "",
  };

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
          this.setState({
            id: result.data.user,
            prevLocation: result.data.loc,
            prevnotName: result.data.name,
            email: result.data.email,
          });
        },
        error => {
          console.log(error);
        }
      );
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleClick = name => {
    this.setState({
      [name + "Disabled"]: !this.state[name + "Disabled"],
    });
    console.log(this.state[name + "Disabled"]);
  };

  updateProfile = event => {
    event.preventDefault();
    let name = this.state.notName;
    if(!name){
      name = this.state.prevnotName;
    }
    let location = this.state.location
    if(!location){
      location = this.state.prevLocation;
    }
    console.log(name)
    console.log(location)
    //           let data = {
    //             name: this.state.name,
    //             location: this.state.location
    //           }
    //           fetch("/api/users",
    //           {
    //             method: "PUT", // *GET, POST, PUT, DELETE, etc.
    // mode: "cors", // no-cors, cors, *same-origin
    // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: "same-origin", // include, *same-origin, omit
    // headers: {
    //   "Content-Type": "application/json",
    //   // "Content-Type": "application/x-www-form-urlencoded",
    // },
    // redirect: "follow", // manual, *follow, error
    // referrer: "no-referrer", // no-referrer, *client
    // body: JSON.stringify(data)
    //           })
    //           .then(function(response){
    //             console.log(response)
    //           })
    //           .catch(err=>{
    //             console.log(err)
    //           })
  };

  render() {
    return (
      <div>
<LpNav />
      <div className="dashGrid">
        <DashNav />
        <div>
        <Typography component="h1" variant="h5" align="center">
          Keep your account up to date here!
        </Typography>

          <form className="formGrid" onSubmit={this.updateProfile}>

            <NameForm
              name={this.state.prevnotName}
              nameDisabled={this.state.nameDisabled}
              handleClick={this.handleClick}
              handleChange={this.handleChange}
              className="nameForm"
            />

            <ZipForm
              zip={this.state.prevLocation}
              nameDisabled={this.state.locationDisabled}
              handleClick={this.handleClick}
              handleChange={this.handleChange}
              className="zipInput"
            />

            <EmailForm 
              email={this.state.email}
              emailDisabled={this.state.emailDisabled}
              handleClick={this.handleClick}
              handleChange={this.handleChange}
              className="emailInput"/>

            <Button
              className="submitButton"
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Submit your edits
            </Button>

          </form>

          <form>

            <PasswordForm />

          </form>

          </div>
      </div>
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);
