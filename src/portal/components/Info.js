import React from 'react';
import { withStyles, Paper, Grid, Typography } from '@material-ui/core';

const styles = theme => ({
    root: {
        padding: theme.spacing.unit,
        marginLeft: 2*theme.spacing.unit,
        marginRight: 2*theme.spacing.unit,
        marginBottom: 2*theme.spacing.unit,
        background: '#fff',
    }
});

const Info = (props) => {

    const {classes} = props;

    return(
        <Paper className={classes.root}>
            <Grid container spacing={8} >
                <Grid item xs={12} sm={6} >
                <div style={{textAlign: 'center'}}>
                    <img alt="head" width="150" height="150" src={require('./../img/Shri_Suresh_Prabhu.png')}/>
                    <Typography variant="subtitle2">Minister of Commerce and Industry</Typography>
                    <Typography variant="overline" color="secondary">Shri Suresh Prabhu</Typography>
                </div>
                    
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div style={{textAlign: 'center'}}>
                        <img alt="head" width="150" height="150" src={require('./../img/Shri_R_Chaudhary.png')}/>
                        <Typography variant="subtitle2">Minister of State for Commerce and Industry</Typography>
                        <Typography variant="overline" color="secondary">Shri R Chaudhary</Typography>
                    </div>
                </Grid>
                
            </Grid>
        </Paper>
    );
}

export default withStyles(styles)(Info);