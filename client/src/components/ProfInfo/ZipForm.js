import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import Paper from "@material-ui/core/Paper";
import "../../App.css"
import Typography from "@material-ui/core/Typography";


function ZipForm(props) {
  console.log(props);
  // const name = props.name.notName;
  return (
    <div>
      <Typography>Edit your zipcode here</Typography>
      <Paper className="editForm">
      <FormControl margin="normal" className="formInput">
        <InputLabel className="locationInput" htmlFor="zipcode" width="100">
          {props.zip}
        </InputLabel>
        <Input
          disabled={props.nameDisabled}
          onChange={props.handleChange}
          name="location"
          id="zipcode"
          autoComplete="zipcode"
        />
      </FormControl>
      <Button className="nameButton" onClick={() => props.handleClick("location")}>
        <EditIcon />
      </Button>
      </Paper>
    </div>
  );
}

export default ZipForm;
