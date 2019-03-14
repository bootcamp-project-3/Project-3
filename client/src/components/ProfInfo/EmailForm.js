import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

function EmailForm(props) {
  return (
    <div>
      <Paper  className="editForm">
      <Typography className="formTitle">Edit your account's email address here</Typography>

      <FormControl margin="normal">
        <InputLabel className="nameInput" htmlFor="name" width="100">
         {props.email}
        </InputLabel>
        <Input
          disabled={props.emailDisabled}
          onChange={props.handleChange}
          name="email"
          id="name"
          autoComplete="name"
          defaultValue={props.email}
        />
      </FormControl>
      <Button className="nameButton" onClick={()=>props.handleClick("email")}>
        <EditIcon />
      </Button>
      </Paper>
    </div>
  );
}
export default EmailForm;
