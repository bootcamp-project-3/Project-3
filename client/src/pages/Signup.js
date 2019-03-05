import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Image from "../components/LandingPage/assets/be-neighborly.png";

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

const getUser =  (event) => {
  event.preventDefault();
  console.log(event.target.email.value);
  console.log(event.target.password.value)
  fetch("/api/users", 
  {
    email: event.target.email.value,  
    password: event.target.password.value,
    name: event.target.name.value,
    zipcode: event.target.zipcode.value
  }
  )
  .then(function(response){
    console.log(response);
      })
  .catch(err=>{
    console.log(err)
  })
}

const Logo = withStyles({
  root:{
    background: "grey"
  }
})(Button)

function SignUp(props) {
  const { classes } = props;

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
      <Logo align="center" className={classes.grow} onClick={()=>{window.location="./"}}>
           <img alt="" src={Image}  width= "75%"/>
      </Logo>
        <Typography component="h1" variant="h5" align="center">
          Create an account with Neighborly
        </Typography>
        <form className={classes.form } onSubmit={getUser}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="email" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" id="password" autoComplete="current-password" />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input name="name" id="name" autoComplete="name" />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="zipcode">Zipcode</InputLabel>
            <Input name="zipcode" id="zipcode" autoComplete="zipcode" />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=>{window.location="./bulletin"}}
          >
            Create account
          </Button>
        </form>
      </Paper>
      <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={()=>{window.location="./auth/google"}}
          >
            Sign up with Google
          </Button>
    </main>
  );
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUp);  