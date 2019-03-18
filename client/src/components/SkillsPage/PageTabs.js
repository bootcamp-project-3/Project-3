import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import BaseSkillsCard from "../SkillsCard/BaseSkillsCard";

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

  pageOne = () => {
    return;
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: "#4caf50" }}>
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Page 1" style={{ color: "#fafafa" }} />
            {this.props.posts.length > 10 ? (
              <Tab label="Page 2" style={{ color: "#fafafa" }} />
            ) : null}
            {this.props.posts.length > 20 ? (
              <Tab label="Page 3" style={{ color: "#fafafa" }} />
            ) : null}
            {this.props.posts.length > 30 ? (
              <Tab label="Page 4" style={{ color: "#fafafa" }} />
            ) : null}
            {this.props.posts.length > 40 ? (
              <Tab label="Page 5" style={{ color: "#fafafa" }} />
            ) : null}
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <BaseSkillsCard
              category="Skills/Services"
              posts={this.props.posts.filter((post, index) => {
                return index < 9;
              })}
              updatePosts={this.props.updatePosts}
            />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <BaseSkillsCard
              category="Skills/Services"
              posts={this.props.posts.filter((post, index) => {
                return index > 9 && index <= 19;
              })}
              updatePosts={this.props.updatePosts}
            />
          </TabContainer>
        )}
        {value === 2 && (
          <TabContainer>
            <BaseSkillsCard
              category="Skills/Services"
              posts={this.props.posts.filter((post, index) => {
                return index > 19 && index <= 29;
              })}
              updatePosts={this.props.updatePosts}
            />
          </TabContainer>
        )}
        {value === 3 && (
          <TabContainer>
            <BaseSkillsCard
              category="Skills/Services"
              posts={this.props.posts.filter((post, index) => {
                return index > 29 && index <= 39;
              })}
              updatePosts={this.props.updatePosts}
            />
          </TabContainer>
        )}
        {value === 4 && (
          <TabContainer>
            <BaseSkillsCard
              category="Skills/Services"
              posts={this.props.posts.filter((post, index) => {
                return index > 39;
              })}
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
