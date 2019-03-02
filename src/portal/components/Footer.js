import React from 'react';
import { withStyles, Typography } from '@material-ui/core';

const styles = theme => ({
    root: {
        background: '#08002A',
        color: '#fff',
        padding: 2*theme.spacing.unit,
    },

    footer: {
        width: '90%',
        margin: 'auto',
    },

    text: {
        color: '#ffffff',
    }
});

const Footer = (props) => {

    const { classes } = props;

    return (
        <div className={classes.root}>
            <footer className={classes.footer}>
                <Typography color="inherit" variant="subheading" >Content created by team Hakuna Matata @SIH2019</Typography>
                
            </footer>
        </div>
    );
}

export default withStyles(styles)(Footer);