import React, { Component } from "react";
import SideBar from "../components/Nav/SideBar/SideBar";
import { withStyles } from "@material-ui/core/styles";
import Styled from "styled-components";
import BaseToolCard from "../components/ToolCard/BaseToolCard";
import BaseEventCard from "../components/EventCard/BaseEventCard";
import BaseGeneralCard from "../components/GeneralCard/BaseGeneralCard";
import BaseSkillsCard from "../components/SkillsCard/BaseSkillsCard.js";
import BaseCarPoolCard from "../components/CarPoolCard/BaseCarPoolCard";
import BottomNav from "../components/Nav/BottomNav";
import MapCard from "../components/Map/MapCard";
import SubmitModal from "../components/SubmitModal/SubmitModal";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import SnackBar from "../components/SnackBar/SnackBar";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const NavWrapperDiv = Styled.div`
  margin-bottom: 100px;
`;

const Grid = Styled.div`
  display: grid;
  grid-template-columns: [col-1] 20% [col-2] 40% [col-3] 40%;
  grid-template-rows: [row-1] auto [row-2] auto [row-3] auto [row-4] auto;
  justify-content: start;
`;

const SideBarItem = Styled.div`
  grid-column-start: col-1;
  grid-column-end: col-1;
  grid-row-start: row-1
  grid-row-end: span row-4
  margin-right: 10px;
  padding-right: 20px;
  border-right: solid rgba(189, 195, 199, 0.7) 1px;
`;

const SubmitItem = Styled.div`
  margin: 200pt 0 0 0;
`;

const SubmitTextWrapper = Styled.div`
  margin-left: 15px;
`;

const BottomNavSpacer = Styled.div`
  margin-top: 100px;
`;

const ToolItem = Styled.div`
  grid-column-start: col-2;
  grid-column-end: col-2;
  grid-row-start: row-1;
  grid-row-end: row-1;
  margin: 0 5px 10px 0;
  
`;

const CarPoolItem = Styled.div`
  grid-column-start: col-3;
  grid-column-end: col-3;
  grid-row-start: row-1;
  grid-row-end: row-1;
  margin: 0 0 10px 5px;
`;

const GeneralItem = Styled.div`
  grid-column-start: col-2;
  grid-column-end: span col-3;
  grid-row-start: row-2;
  grid-row-end: row-2;
  margin: 10px 0 10px 0;
  width: 199%;
`;

const EventItem = Styled.div`
  grid-column-start: col-2;
  grid-column-end: col-2;
  grid-row-start: row-3;
  grid-row-end: row-3;
  margin: 0 5px 10px 0;
`;

const SkillsItem = Styled.div`
  grid-column-start: col-3;
  grid-column-end: col-3;
  grid-row-start: row-3;
  grid-row-end: row-3;
  margin: 0 5px 10px 0;
`;

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

class Bulletin extends Component {
  state = {
    posts: [],
    id: "",
    location: "",
    name: "",
    snackBar: false,
    open: false,
    recipientName: "",
    recipientId: "",
    replyContent: "",
    replySubject: "",
  };

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
      .then(res => res.json())
      .then(
        result => {
          const { user, loc, name } = result.data;
          console.log(result);
          this.setState({
            id: user,
            location: loc,
            name: name,
          });
          this.updatePosts();
        },
        error => {
          console.log(error);
        }
      );
  }

  updatePosts = () => {
    fetch(`/api/posts/50/${this.state.location}`, {
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
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.setState({
            posts: result,
          });
        },
        error => {
          console.log(error);
        }
      );
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  sendMessage = () => {
    const message = {
      senderId: this.state.id,
      senderName: this.state.name,
      recipientId: this.state.recipientId,
      recipientName: this.state.recipientName,
      subject: this.state.replySubject,
      content: this.state.replyContent,
    };
    console.log(message);
    this.openSnackBar();
    // Send a message to another user through the api
    // fetch("/api/messages", {
    //   method: "POST", // *GET, POST, PUT, DELETE, etc.
    //   mode: "same-origin", // no-cors, cors, *same-origin
    //   cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //   credentials: "include", // include, *same-origin, omit
    //   headers: {
    //     "Content-Type": "application/json",
    //     // "Content-Type": "application/x-www-form-urlencoded",
    //   },
    //   redirect: "follow", // manual, *follow, error
    //   referrer: "client", // no-referrer, *client
    //   body: JSON.stringify(message),
    // })
    //   .then(res => res.json())
    //   .then(
    //     result => {
    //       console.log(result);
    //     },
    //     error => {
    //       console.log(error);
    //     }
    //   );
  };

  updateReply = (name, id) => {
    this.setState({
      recipientName: name,
      recipientId: id,
    });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  openSnackBar = () => {
    this.setState({ snackBar: true });
  };

  closeSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ snackBar: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <main>
        <NavWrapperDiv>
          <SideBar />
        </NavWrapperDiv>

        <Grid>
          <SideBarItem>
            <MapCard
              location={this.state.location}
              name={this.state.name}
              id={this.state.id}
            />
            <SubmitItem>
              <SubmitTextWrapper>
                <Typography color="textSecondary">
                  Want to contribute? Just click the button to create your own
                  post.
                </Typography>
              </SubmitTextWrapper>
              <SubmitModal
                posts={this.state.posts}
                updatePosts={this.updatePosts}
                id={this.state.id}
                name={this.state.name}
                location={this.state.location}
              />
            </SubmitItem>
          </SideBarItem>
          <ToolItem>
            <BaseToolCard
              category="Equipment/Tools"
              posts={this.state.posts}
              updatePosts={this.updatePosts}
            />
          </ToolItem>
          <CarPoolItem>
            <BaseCarPoolCard
              category="Carpool"
              posts={this.state.posts}
              updatePosts={this.updatePosts}
            />
          </CarPoolItem>
          <GeneralItem>
            <BaseGeneralCard
              category="General"
              posts={this.state.posts}
              updatePosts={this.updatePosts}
            />
          </GeneralItem>
          <EventItem>
            <BaseEventCard
              category="Events"
              posts={this.state.posts}
              updatePosts={this.updatePosts}
              updateReply={this.updateReply}
              openModal={this.handleOpen}
            />
          </EventItem>
          <SkillsItem>
            <BaseSkillsCard
              category="Skills/Services"
              posts={this.state.posts}
              updatePosts={this.updatePosts}
            />
          </SkillsItem>
        </Grid>
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
              <b>To:</b> {this.state.recipientName}
            </Typography>
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
                onClick={this.sendMessage}
              >
                Send
              </Button>
            </ButtonWrapper>
          </div>
        </Modal>
        <SnackBar
          open={this.state.snackBar}
          openSnackBar={this.openSnackBar}
          closeSnackBar={this.closeSnackBar}
        />
        <BottomNavSpacer />
        <BottomNav />
      </main>
    );
  }
}

export default withStyles(styles)(Bulletin);
