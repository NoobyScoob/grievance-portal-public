import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles, Card, CardContent, Typography, Grid, Divider } from '@material-ui/core';


const styles = theme => ({
    root: {
        padding: theme.spacing.unit,
        marginLeft: 2*theme.spacing.unit,
        marginRight: 2*theme.spacing.unit,
        marginBottom: 2*theme.spacing.unit,
    },

    cardA: {
        maxWidth: 360,
        background: '#97E96D',
        margin: 'auto',
        marginBottom: theme.spacing.unit,
    },

    cardB: {
        maxWidth: 360,
        background: '#61B8F9',
        margin: 'auto',
        marginBottom: theme.spacing.unit,
    },

})

const Stats = (props) => {

    const { classes } = props;
    const { stats } = props;
    console.log(stats);

    return (
        <div>
        <Paper className={classes.root}>
            <Typography variant="subheading" color="primary">
                Grievance statistics for the year 2019
            </Typography>
            <Divider style={{marginBottom: '1rem'}} />
            <Grid container spacing={8}>
                <Grid item xs={12} sm={6}>
                    <Card className={classes.cardA} align="center">
                        <CardContent>
                            <Typography variant="subtitle1">
                                REGISTERED GRIEVANCES
                            </Typography>
                            <Divider />
                            <Typography variant="h6" align="center">
                                {stats.submitted}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card className={classes.cardB} align="center">
                        <CardContent>
                            <Typography variant="subtitle1">
                                RESOLVED GRIEVANCES
                            </Typography>
                            <Divider />
                            <Typography variant="h6" align="center">
                                {stats.resolved}
                            </Typography>
                        </CardContent>  
                    </Card>                
                </Grid>
            </Grid>
        </Paper>
        </div>
    )
}

export default withStyles(styles)(Stats);