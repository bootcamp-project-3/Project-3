import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import BaseCarPoolCard from "../CarPoolCard/BaseCarPoolCard";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.light,
  },
});

class PageTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: "#4caf50" }}>
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Page 1" style={{ color: "#fafafa" }} />
            <Tab label="Page 2" style={{ color: "#fafafa" }} />
            <Tab label="Page 3" style={{ color: "#fafafa" }} />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <BaseCarPoolCard
              category={this.props.category}
              posts={this.props.posts}
              updatePosts={this.props.updatePosts}
            />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <BaseCarPoolCard
              category={this.props.category}
              posts={this.props.posts}
              updatePosts={this.props.updatePosts}
            />
          </TabContainer>
        )}
        {value === 2 && (
          <TabContainer>
            <BaseCarPoolCard
              category={this.props.category}
              posts={this.props.posts}
              updatePosts={this.props.updatePosts}
            />
          </TabContainer>
        )}
      </div>
    );
  }
}

PageTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PageTabs);
