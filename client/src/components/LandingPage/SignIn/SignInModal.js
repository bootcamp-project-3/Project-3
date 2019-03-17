import React from "react";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import withStyles from "@material-ui/core/styles/withStyles";
import { Redirect } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import validator from "email-validator";
import { FormHelperText } from "@material-ui/core";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none",
  },
});

class SIModal extends React.Component {
  state = {
    error: false,
    helper: "",
    redirect: false,
  };

  validEmail = input => {
    return validator.validate(input);
  };

  renderRedirect = () => {
    if (this.state.redirect === true)
      return <Redirect to="/bulletin">Redirect</Redirect>;
  };

  getUser = event => {
    event.preventDefault();
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    if (!this.validEmail(event.target.email.value)) {
      console.log("Invalid Email!");
      this.setState({
        error: true,
        helper: "Please input a valid email address!",
      });
      return;
    } else if (this.validEmail(event.target.email.value)) {
      let data = {
        email: event.target.email.value.toLowerCase(),
        password: event.target.password.value,
      };
      fetch("/api/signin", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "include", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      })
        .then(response => {
          console.log(response);
          if (response.status === 200) {
            this.setState({ redirect: true });
            console.log(this.state.redirect);
          } else if (response.status === 401) {
            this.setState({
              error: true,
              helper: "Incorrect email or password!",
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      console.log("ERROR!");
      return;
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.props.open}
        onClose={this.props.onClose}
      >
        <div style={getModalStyle()} className={classes.paper}>
          <Typography component="h1" variant="h5" align="center">
            Sign into your Neighborly account
          </Typography>
          <form onSubmit={this.getUser}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input
                id="email"
                name="email"
                defaultValue={this.props.email}
                autoFocus
                error={this.state.error}
              />
              <FormHelperText error={this.state.error}>
                {this.state.helper}
              </FormHelperText>
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </FormControl>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Sign in
            </Button>
            <div>{this.renderRedirect()}</div>
          </form>
        </div>
      </Modal>
    );
  }
}

export default withStyles(styles)(SIModal);
