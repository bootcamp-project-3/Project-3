import React from "react";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import EventIcon from "@material-ui/icons/Event";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ListAltIcon from "@material-ui/icons/ListAlt";

const renderIcons = index => {
    if (index === 0) {
      return (
          <InboxIcon />
      );
    } else if (index === 1) {
      return (
          <EventIcon />
      );
    } else if (index === 2) {
      return (
          <AccountBoxIcon />
      );
    } else {
      return (
          <ListAltIcon />
      );
    }
  };



const sideNav = (
    <div>
      <List>
        {["Inbox", "Bulletin", "Profile", "Posts"].map((text, index) => (
          <ListItem button component="a" href={"/" + text.toLocaleLowerCase()}>
            <ListItemIcon>
              
              {renderIcons(index)}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
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
)
function dashNav () {
      
    return(
    sideNav
    )
};

export default dashNav