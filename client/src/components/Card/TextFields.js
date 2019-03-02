import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Styled from "styled-components";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 550,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

const ButtonWrapper = Styled.div`
  margin: 25px 0 25px 40px;
`;

class TextFields extends React.Component {
  state = {
    title: "",
    name: "",
    body: "",
    category: this.props.category,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = () => {
    console.log(this.state.title);
    console.log(this.state.name);
    console.log(this.state.body);
    console.log(this.state.category);
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="title"
            label="Title"
            className={classes.textField}
            value={this.state.title}
            onChange={this.handleChange("title")}
            margin="normal"
          />

          <TextField
            id="standard-name"
            label="Name"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange("name")}
            margin="normal"
          />

          <TextField
            id="standard-multiline-flexible"
            label="Post"
            multiline
            rowsMax="8"
            value={this.state.multiline}
            onChange={this.handleChange("body")}
            className={classes.textField}
            margin="normal"
          />
        </form>
        <label htmlFor="contained-button-file">
          <ButtonWrapper>
            <Button
              variant="contained"
              component="span"
              className={classes.button}
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </ButtonWrapper>
        </label>
      </div>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
