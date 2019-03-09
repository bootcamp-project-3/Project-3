import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "../../App.css";
// import withStyles from "@material-ui/core/styles/withStyles";
// import { createMuiTheme } from "@material-ui/core";

// const theme = createMuiTheme({
//   typography: {
//     fontFamily: ["Arvo", "serif"].join(","),
//     fontSize: 26,
//   },
// });

function fordForm(props) {
  console.log(props);
  // const name = props.name.notName;
  return (
    <div>
      <Paper className="fordGrid">
        <Typography className="formTitle">
          Please update your FORD here
        </Typography>
      
        <FormControl className="FInput" margin="normal">
          <InputLabel  htmlFor="F" width="100">
            F
          </InputLabel>
          <Input
            disabled={props.nameDisabled}
            onChange={props.handleChange}
            name="notName"
            id="name"
            autoComplete="name"
          />
        </FormControl>

        <Button
          className="FButton"
          onClick={() => props.handleClick("name")}
        >
          <EditIcon />
        </Button>

        <FormControl className="OInput" margin="normal">
          <InputLabel  htmlFor="O" width="100">
            O
          </InputLabel>
          <Input
            disabled={props.nameDisabled}
            onChange={props.handleChange}
            name="notName"
            id="name"
            autoComplete="name"
          />
        </FormControl>

        <Button
          className="OButton"
          onClick={() => props.handleClick("name")}
        >
          <EditIcon />
        </Button>
        <FormControl className="RInput" margin="normal">
          <InputLabel  htmlFor="R" width="100">
            R
          </InputLabel>
          <Input
            disabled={props.nameDisabled}
            onChange={props.handleChange}
            name="notName"
            id="name"
            autoComplete="name"
          />
        </FormControl>

        <Button
          className="RButton"
          onClick={() => props.handleClick("name")}
        >
          <EditIcon />
        </Button>
        <FormControl className="DInput" margin="normal">
          <InputLabel  htmlFor="D" width="100">
            D
          </InputLabel>
          <Input
            disabled={props.nameDisabled}
            onChange={props.handleChange}
            name="notName"
            id="name"
            autoComplete="name"
          />
        </FormControl>

        <Button
          className="DButton"
          onClick={() => props.handleClick("name")}
        >
          <EditIcon />
        </Button>
      </Paper>
    </div>
  );
}

export default (fordForm);
