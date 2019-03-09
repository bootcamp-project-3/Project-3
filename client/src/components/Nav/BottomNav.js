import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const styles = {
    root: {
        width: "100%",
    }
};


class BottomNav extends React.Component {
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
            <BottomNavigation
                value={value}
                onChange={this.handleChange}
                showLabels
                className={classes.bottomNav}




            >
                <BottomNavigationAction label="Github" icon={<RestoreIcon />}onClick={() => {
                    window.open("https://github.com/bootcamp-project-3/Project-3" , '_blank');
                }} /> />
                <BottomNavigationAction label="Terms of Service" icon={<FavoriteIcon />} onClick={() => {
                    window.location = "/TermsOfService";
                }} />
                <BottomNavigationAction label="Contact Us" icon={<LocationOnIcon />} onClick={ () => {window.location.href = "mailto:user@example.com?subject=Neighborly&body=message%20goes%20here";}} />
            </BottomNavigation>
        );
    }
}

BottomNav.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomNav);