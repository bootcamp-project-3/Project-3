import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import Paper from "@material-ui/core/Paper";
import "../../App.css"
import Typography from "@material-ui/core/Typography";


function PassForm(props) {
  console.log(props);
  return (
    <div>
      <Paper className="editForm">
      <Typography className="formTitle">Edit your password here</Typography>
      <FormControl margin="normal" className="passInput">
        <InputLabel className="passwordInput" htmlFor="password" width="100">
          {props.password}
        </InputLabel>
        <Input
          disabled={props.passDisabled}
          onChange={props.handleChange}
          name="password"
          id="password"
          autoComplete="password"
        />
      </FormControl>
      <Button className="passButton" onClick={() => props.handleClick("password")}>
        <EditIcon />
      </Button>
      </Paper>
    </div>
  );
}

export default PassForm;
