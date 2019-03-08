import React, { Component } from "react";
import SideBar from "../components/Nav/SideBar/SideBar";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import "../../src/App.css";

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
    nameDisabled: true,
    locationDisabled: true,
    prevnotName: "",
    prevLocation: ""
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
          console.log(result.data);
          this.setState({
            id: result.data.user,
            prevLocation: result.data.loc,
            prevnotName: result.data.name,
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
    console.log(this.state.notName, this.state.location);
  };

  render() {
    return (
      <div>
        <SideBar />
        <Paper className="dashboardHolder">

          <Typography component="h1" variant="h5" align="center">
            Keep your account up to date here!
          </Typography>

          <form className="formGrid" onSubmit={this.updateProfile}>
            <FormControl margin="normal">
            <Typography>
              
            </Typography>
              <InputLabel  className="nameInput" htmlFor="name" width="100">
                {this.state.prevnotName}
              </InputLabel>
              <Input
                disabled={this.state.nameDisabled}
                onChange={this.handleChange}
                name="notName"
                id="name"
                autoComplete="name"
              />
            </FormControl>
            <Button className="nameButton" onClick={() => this.handleClick("name")}>
              <EditIcon />
            </Button>

            <FormControl  margin="normal">
              <InputLabel className="locationInput" htmlFor="zipcode">
              {this.state.prevLocation}
              </InputLabel>
              <Input
                disabled={this.state.locationDisabled}
                onChange={this.handleChange}
                name="location"
                id="zipcode"
                autoComplete="zipcode"
              />
            </FormControl>
            <Button className="locationButton" onClick={() => this.handleClick("location")}>
              <EditIcon />
            </Button>

            <Button className="submitButton" type="submit" fullWidth variant="contained" color="primary">
            Submit your edits
          </Button>
            </form>
          
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);
