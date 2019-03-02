import React from 'react';
import { Button, Menu, MenuItem, Typography } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { connect } from 'react-redux';
import logout from './../redux/actions/logout';
import { withRouter } from 'react-router-dom';

class UserMenu extends React.Component {

    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };
    
    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    handleUserLogout = () => {
        this.props.dispatch(logout());
        this.props.history.push('/');

        // clear local storage on logout
        localStorage.clear();
    };

    render() {

        const { anchorEl } = this.state;

        return (
            this.props.loggedIn &&
            <div style={{marginLeft: 'auto'}}>
                <Button
                    color="inherit"
                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                    <Typography color="inherit" variant="subtitle2">
                        { this.props.fullName.split(' ')[0] }
                    </Typography>
                    <PersonIcon style={{margin: '0 0 4px 6px'}} />
                </Button>
                <Menu
                    id="userMenu    "
                    anchorEl={anchorEl}
                    open={!!anchorEl}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                    <MenuItem onClick={this.handleUserLogout}>Logout</MenuItem>
                </Menu>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    fullName: state.profile.fullName,
    loggedIn: state.profile.auth.loggedIn
})

export default connect(mapStateToProps)(withRouter(UserMenu));