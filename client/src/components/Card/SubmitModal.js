import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import TextFields from "./TextFields";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: "absolute",
    width: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none",
  },
  button: {
    margin: theme.spacing.unit,
  },
});

const ButtonWrapper = Styled.div`
  margin: 25px 0 25px 40px;
`;

class SubmitModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <ButtonWrapper>
          <Button onClick={this.handleOpen} align="justify">
            Add Post
          </Button>
        </ButtonWrapper>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography align="center" variant="h4">
              Post
            </Typography>
            <TextFields
              category={this.props.category}
              posts={this.props.posts}
              closeModal={this.handleClose}
              updatePosts={this.props.updatePosts}
            />
          </div>
        </Modal>
      </div>
    );
  }
}

SubmitModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SubmitModal);

export default SimpleModalWrapped;
