import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
import HeaderBottomShade from './../img/header-bottom-shade.png';

const styles = theme => ({
    root: {
        background: `url(${HeaderBottomShade}) repeat-x bottom center #eaeaea`,
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 4*theme.spacing.unit,
        paddingRight: 4*theme.spacing.unit,
        paddingTop: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
    },

    emblem: {
        width: '60px',
        height: '100px',
        margin: 'auto 0'
    },

    content: {
        padding: theme.spacing.unit,
    }
})

const Header = (props) => {
    const {classes} = props;
    return (
        <div>
            
        
        <header className={classes.root} >
            <img className={classes.emblem} src={require('./../img/emblem-dark.png')} alt="emblem"></img>
            <Typography className={classes.content} variant="caption">
                Ministry of Commerce and Industry
                <Typography variant="title" >
                    DEPARTMENT OF INDUSTRIAL POLICY
                </Typography>
                <Typography variant="title" >
                    AND PROMOTION
                </Typography>
                <Typography variant="body2" color="primary">
                    GRIEVANCE REDRESSAL PORTAL
                </Typography>
            </Typography>
        </header>
        
        </div>
    )
}

export default withStyles(styles)(Header);