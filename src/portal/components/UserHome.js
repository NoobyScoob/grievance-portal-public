import React from 'react';
import { withStyles, Grid, Button, Typography, Divider, Paper, CircularProgress } from '@material-ui/core';
import GrievanceCard from './GrievanceCard';
import ConnErrDialog from './ConnErrDialog';

const styles = theme => ({
    head: {
        padding: theme.spacing.unit,
        marginBottom: 2*theme.spacing.unit,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },

    grievanceGrid: {
        margin: theme.spacing.unit,
    },

    hiddenPaper: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 2*theme.spacing.unit,
        padding: theme.spacing.unit,
    },

    btn: {
        background: '#300D4F',
        color: '#ffffff',
        '&:hover': {
            background: '#501882',
        }
    }
});

const UserHome = (props) => {

    const {classes} = props;
    const {handleLodgeGrievance, grievanceList, handleViewGrievance, handleCancelGrievance} = props;

    return (
        <Grid container spacing={0}>
            <ConnErrDialog />
            <Grid item xs={12} sm={12} md={9} xl={8} style={{margin: 'auto'}}>
                <div className={classes.head}>
                    <Button onClick={handleLodgeGrievance} variant="contained" className={classes.btn}>
                            Lodge A new Grievance
                    </Button>
                </div>
                <Divider style={{marginBottom: '1rem'}}/>
                <div className={classes.head}>
                    <Typography variant="overline" color="secondary" style={{fontSize: 14}}>
                        Submitted Grievances List
                    </Typography>
                </div>
                <Grid container spacing={0}>
                    {
                        grievanceList.length !== 0 ?
                        (grievanceList[0] === true ?
                        
                        <CircularProgress style={{margin: '1rem auto'}} />
                         :
                        grievanceList.map( ( grievance, index ) => (
                            <Grid key={grievance.token} item xs={12} sm={6} md={6}>
                                <GrievanceCard
                                    grievance={grievance} 
                                    handleViewGrievance={handleViewGrievance}
                                    handleCancelGrievance={handleCancelGrievance}
                                />
                            </Grid>)
                        )) : 
                        <Paper className={classes.hiddenPaper}>
                            <Typography variant="subheading" color="default">
                            You have not submitted any grievances yet!
                        </Typography>
                        </Paper>
                    }
                </Grid>
            </Grid>
        </Grid>
    );
};

export default withStyles(styles)(UserHome);