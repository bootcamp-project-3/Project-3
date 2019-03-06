import React, { Component } from "react";
import SideBar from "../components/Nav/SideBar/SideBar";
import Styled from "styled-components";
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button"
import EditIcon from "@material-ui/icons/Edit";
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';


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


const ContainerDiv = Styled.div`
width: 75%;
top: 30px;
margin: auto
`;

    
    class Dashboard extends Component {

      state = {
        name: "",
        id: "",
        location: "",
        nameDisabled: false,
        locationDisabled: true,
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
          .then(res =>res.json())
          .then(
              result => {
                console.log(result.data)
                this.setState({
                  id: result.data.user,
                  location: result.data.loc,
                  name: result.data.name,
                });
              },
              error => {
                console.log(error)
              }
          )
            }

            handleChange=event=>{
              const {name, value} = event.target;
              this.setState({
                [name]: value
              })
            }

            handleClick = name => {
              this.setState({
                [name]: !this.state[name],
              })
              console.log(this.state[name])
            }
        
    render() {

        return(
            <div>
            <SideBar />
            <ContainerDiv>
            <CssBaseline />
      <Paper>
        <Typography component="h1" variant="h5" align="center">
          Keep your account up to date here!
        </Typography>
        <form >
          <FormControl margin="normal">
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input name="name" id="name" autoComplete="name" />
            <EditIcon align="right"/>
          </FormControl>
          <br></br>
          <FormControl margin="normal">
            <InputLabel htmlFor="zipcode">Zipcode</InputLabel>
            <Input name="zipcode" id="zipcode" autoComplete="zipcode" />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Submit your edits
          </Button>
        </form>
      </Paper>
            </ContainerDiv>
            </div>
        )
    }
}

export default withStyles(styles)(Dashboard);  