import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import EventIcon from "@material-ui/icons/Event";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ListAltIcon from "@material-ui/icons/ListAlt";
import Nav from "../Nav";

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
};

class SideBar extends React.Component {
  state = {
    left: false,
    keyword: "",
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  openDrawer = () => {
    this.setState({
      left: true,
    });
  };

  handleOnChange = event => {
    let keyword = event.target.value;
    this.setState({
      keyword: keyword,
    });
    console.log(this.state.keyword);
  };

  renderIcons = index => {
    if (index === 0) {
      return <InboxIcon />;
    } else if (index === 1) {
      return <EventIcon />;
    } else if (index === 2) {
      return <AccountBoxIcon />;
    } else {
      return <ListAltIcon />;
    }
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {["Inbox", "Bulletin", "Dashboard", "Posts"].map((text, index) => (
            <ListItem button key={text} onClick={()=>{window.location="./"+text}}>
              <ListItemIcon>
                {/* {index === 0 ? <InboxIcon /> : <MailIcon />} */}
                {this.renderIcons(index)}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["About Us", "Terms Of Service", "Contact Us"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div>
        <Nav
          openDrawer={this.openDrawer}
          onChange={this.handleOnChange}
          keyword={this.state.keyword}
        />
        {/* Put this button as the dropdown on navbar */}
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
          >
            {sideList}
          </div>
        </Drawer>
        <Drawer
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer("right", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("right", false)}
            onKeyDown={this.toggleDrawer("right", false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

SideBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideBar);
