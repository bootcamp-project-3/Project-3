import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "../../App.css"
import withStyles from "@material-ui/core/styles/withStyles";
import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Arvo",
      'serif'
    ].join(','),
    fontSize: 26,
  },
});

function NameForm(props) {
  // const name = props.name.notName;
  return (
    <div>
      <Paper  className="editForm">
      <Typography className="formTitle">Edit your name here</Typography>

      <FormControl margin="normal">
        <InputLabel className="nameInput" htmlFor="name" width="100">
         {props.name}
        </InputLabel>
        <Input
          disabled={props.nameDisabled}
          onChange={props.handleChange}
          name="notName"
          id="name"
          autoComplete="name"
          defaultValue={props.name}
        />
      </FormControl>
      <Button className="nameButton" onClick={()=>props.handleClick("name")}>
        <EditIcon />
      </Button>
      </Paper>
    </div>
  );
}

export default withStyles(theme)(NameForm);
