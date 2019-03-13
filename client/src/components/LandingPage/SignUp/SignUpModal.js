import React from "react";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";



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

function SUModal(props) {
  const { classes } = props;


  const saveUser = event => {
    event.preventDefault();
    let data = {
      email: event.target.email.value.toLowerCase(),
      password: event.target.password.value,
      name: event.target.name.value,
      zip: event.target.zipcode.value,
    };

    
    fetch("/api/users", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
      .then(function(response) {
        console.log(data);
        props.saveEmail(data.email);
        props.changeSISU();

      })
      .catch(err => {
        console.log(err);
      });
  };
  

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={props.SUOpen}
      onClose={props.SUClose}
    >
      <div style={getModalStyle()} className={classes.paper}>
        <Typography component="h1" variant="h5" align="center">
          Create an account with Neighborly
        </Typography>
        <form className={classes.form} onSubmit={saveUser}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="email" autoFocus />
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
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input name="name" id="name" autoComplete="name" />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="zipcode">Zipcode</InputLabel>
            <Input name="zipcode" id="zipcode" autoComplete="zipcode" />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Create account
          </Button>
        </form>
      </div>
    </Modal>
  );
}

export default withStyles(styles)(SUModal);
