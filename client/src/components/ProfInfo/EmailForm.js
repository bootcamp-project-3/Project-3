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
      <Paper className="editForm">
        <Typography className="formTitle">Edit your email here</Typography>
        <FormControl margin="normal" className="formInput">
          <InputLabel className="emailInput" htmlFor="email" width="100">
            {props.email}
          </InputLabel>
          <Input
            disabled={props.emailDisabled}
            onChange={props.handleChange}
            name="email"
            id="email"
            defaultValue={props.email}
          />
          <Button
            className="nameButton"
            onClick={() => props.handleClick("email")}
          >
            <EditIcon />
          </Button>
        </FormControl>
      </Paper>
    </div>
  );
}
export default EmailForm;
