import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import EnhancedTable from "./EnhancedTable";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Styled from "styled-components";
import LoadingCircle from "../CarPoolCard/LoadingCircle";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const ButtonWrapper = Styled.div`
  display: grid;
  grid-template-columns: 120px 120px;
  justify-content: end;
  justify-items: center;
  margin-top: 20px;
  
`;

const styles = theme => ({
  paper: {
    position: "absolute",
    width: "40%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none",
  },
  divider: {
    marginTop: "30px",
    marginBottom: "30px",
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: "10px",
    width: "90%",
  },
});

const ModalPosition = Styled.div`
  position: absolute;
  left: 500px;
  top: 500px;
`;

class SimpleModal extends React.Component {
  state = {
    open: false,
    replyContent: this.props.replyContent,
    replySubject: this.props.replySubject,
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
        <ModalPosition>
          {/* <Button onClick={this.handleOpen}>Open Modal</Button> */}
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
          >
            <div style={getModalStyle()} className={classes.paper}>
              <Typography gutterBottom variant="h5" id="modal-title">
                Message
              </Typography>
              <Divider variant="fullWidth" />
              <Typography variant="subtitle1" id="modal-title">
                <b>From:</b> {this.props.recipientName}
              </Typography>
              <Typography variant="subtitle1" id="simple-modal-description">
                <b>Subject:</b> {this.props.messageSubject}
              </Typography>
              <Typography variant="subtitle1">
                <b>Body:</b>
              </Typography>
              <Typography paragraph variant="subtitle1">
                {this.props.messageContent}
              </Typography>

              <Typography gutterBottom variant="h5" id="modal-title">
                Reply
              </Typography>
              <Divider variant="fullWidth" />
              <TextField
                id="standard-name"
                label="Subject"
                name="replySubject"
                className={classes.textField}
                value={this.props.replySubject}
                onChange={this.props.handleInputChange}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="standard-multiline-flexible"
                multiline
                rowsMax="6"
                label="Message"
                className={classes.textField}
                name="replyContent"
                value={this.props.replyContent}
                onChange={this.props.handleInputChange}
                margin="normal"
                variant="outlined"
              />
              <ButtonWrapper>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={this.handleClose}
                >
                  Cancel
                </Button>

                <Button
                  variant="outlined"
                  color="primary"
                  onClick={this.props.sendReply}
                >
                  Send
                </Button>
              </ButtonWrapper>
            </div>
          </Modal>
        </ModalPosition>
        {this.props.messages ? (
          <EnhancedTable
            updateReply={this.props.updateReply}
            messages={this.props.messages}
            handleOpen={this.handleOpen}
          />
        ) : (
          <LoadingCircle />
        )}
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const ReplyModal = withStyles(styles)(SimpleModal);

export default ReplyModal;
