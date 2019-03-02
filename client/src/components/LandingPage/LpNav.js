import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';







const styles = theme => ({

  root: {
    flexGrow:1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  
});


function LpNav(props) {
  const { classes } = props;
  console.log(props)
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" onClick={props.openDrawer} aria-label="Open drawer">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Menu
          </Typography>
          <Typography align="center" variant="h6" color="inherit" >
            Around The Block
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

LpNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LpNav);