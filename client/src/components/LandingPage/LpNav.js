import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Image from "../LandingPage/assets/neighborlyFinal.png";
import Button from '@material-ui/core/Button';







const styles = theme => ({

  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  signin:{
    backgroundcolor:"white",
    align:"left",
    marginRight: 0,
  },

});

// const Font = Styled.h1`
//     font-family: 'Ranchers',cursive;
//     color: white;
//     margin:auto;
// `;

// const Logo = Styled.img`
//     background: url(${Image}) no-repeat center center fixed;
// `;






function LpNav(props) {
  const { classes } = props;
  console.log(props)
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton className={classes.menuButton} color="inherit" onClick={props.openDrawer} aria-label="Open drawer">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Menu
          </Typography> */}
          <Typography align="center" variant="h6" color="inherit" className={classes.grow}>
            <img alt="" src={Image} width="20%" />
          </Typography>
          <div className={classes.signin}>
            <Typography align="right" variant="h6" color="inherit" className={classes.grow} >
              {/* <a href="/sign-in">Sign In</a> */}
              
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

LpNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LpNav);