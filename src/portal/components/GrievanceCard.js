import React from 'react';
import { withStyles, Card, CardActionArea, CardContent, Typography, Button, CardActions, Divider} from '@material-ui/core';

const styles = theme => ({
    card: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginBottom: 3*theme.spacing.unit,
    },

    subText: {
        display: 'inline',
    }
});

const GrievanceCard = (props) => {

    const { classes } = props;
    const { grievance, handleViewGrievance, handleCancelGrievance } = props;

    return (
        <Card className={classes.card}>
            <CardActionArea onClick={ () => handleViewGrievance( grievance ) }>
                <CardContent>

                    <Typography variant="h6" inline={true}>
                        TokenID :&nbsp;
                    </Typography>
                    <Typography inline={false} variant="h6" className={classes.subText}>
                            {grievance.token}
                    </Typography>

                    <Typography inline={false}>
                        Recieved Date :&nbsp;
                    </Typography>
                    <Typography inline={true} variant="overline" color="primary" className={classes.subText}>
                             {grievance.submittedTime}
                    </Typography><br/>

                    <Typography inline={true}>
                        Description :&nbsp;
                    </Typography>
                    <Typography inline={true} variant="body1" className={classes.subText}>
                            {grievance.description.substring(0, 40)}.....
                    </Typography>

                </CardContent>
            </CardActionArea>

            <Divider />

            <CardActions style={{justifyContent: 'space-between'}}>
                
                    <Button variant="outlined" size="small">
                        Attachment
                    </Button>
                    <Typography>
                        Status :&nbsp;
                        <Typography variant="overline" style={{display: 'inline', color: 'green'}}>
                            {grievance.status}
                        </Typography>
                    </Typography>
                    <Button 
                        disabled={grievance.status !== 'submitted'}
                        variant="outlined"
                        size="small"
                        color="secondary"
                        onClick={ () => handleCancelGrievance(grievance.token) }
                    >
                        Cancel
                    </Button>
            </CardActions>

        </Card>
    );
}

export default withStyles(styles)(GrievanceCard);