import React from 'react';
import { Grid, Paper, Typography, withStyles, Button } from '@material-ui/core';

const styles = theme => ({
    root: {
        padding: 2*theme.spacing.unit,
        marginBottom: 3*theme.spacing.unit,
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },

    overline: {
        fontSize: 14,
    },
})

const FullGrievance = (props) => {

    const { classes } = props;
    const { grievance } = props.location.state;

    return(
        <Grid container spacing={0} >
            <Grid item xs={12} sm={12} md={9} xl={8} style={{margin: 'auto'}}>
                <Paper className={classes.root}>
                    <Grid container spacing={0}>
                        <Grid item xs={12} sm={12}>
                            <Typography variant="h6">TOKEN: {grievance.token}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="overline" color="primary" className={classes.overline} >Submitted At: {grievance.submittedTime}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="overline" color="secondary" className={classes.overline}>Status: {grievance.status}</Typography>
                        </Grid>   
                        <Grid item xs={12} sm={12} md={12} xl={12} >
                            <Typography variant="subheading" inline={true}>Description: </Typography>
                            <Typography variant="body1" inline={true}>{grievance.description}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="subheading" inline={true}>Grievance Submitted to: </Typography>
                            <Typography variant="overline" className={classes.overline} inline={true}>{grievance.officerName}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="subheading" inline={true}>Designation: </Typography>
                            <Typography variant="overline" className={classes.overline} inline={true}>{grievance.role}</Typography>
                        </Grid>
                        {/* <Button
                            variant="outlined"
                            onClick={ () => {
                                const win = window.open(`https://grievance-portal.herokuapp.com/${  grievance.attachments[0] }`);
                                win.focus();
                            }}
                        >
                            Attachments
                        </Button> */}
                </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(FullGrievance);