import React from 'react';
import { withStyles, Paper, FormControl, Typography, TextField, Button } from '@material-ui/core';
import ConnErrDialog from './ConnErrDialog';

const styles = theme => ({
    root: {
        [theme.breakpoints.down('sm')]: {
            width: '94%',
        },
        maxWidth: 520,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 2*theme.spacing.unit,
        border: '1px solid #eaeaea',
        borderRadius: theme.spacing.unit,
    },

    form: {
        marginRight: 2*theme.spacing.unit,
        marginLeft: 2*theme.spacing.unit,
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit, 
    },

    row: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

    mobileField: {
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        }
    },

    btn: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    }
});

const ViewStatusForm = (props) => {
    
    const { classes } = props;
    const { handleFormSubmit, errMessage } = props;
    
    return (
        <Paper className={classes.root}>
            <ConnErrDialog />       
            <form onSubmit={ handleFormSubmit } className={classes.form}>
                <FormControl fullWidth>
                    <Typography variant="overline" style={{fontSize: 16}} color="secondary" align="center" >View Grievance Status</Typography>  
                    {
                        // show error if login fails
                        !!errMessage ? 
                            <FormControl className={classes.formControl}>
                                <Typography variant="body1" color="error" align="center">
                                    {errMessage}
                                </Typography>
                            </FormControl>
                        : null
                    }
                    <TextField
                        id="tokenId"
                        name="tokenId"
                        label="Grievance Token Id"
                        margin="normal"
                        variant="outlined"
                        type="number"
                        required={true}
                    />
                    <TextField
                        id="tokenPassword"
                        name="tokenPassword"
                        label="Token Password"
                        type="password"
                        margin="normal"
                        variant="outlined"
                        required={true}
                        autoComplete="current-password"
                    />
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className={classes.btn}
                        >
                            View status
                        </Button>
                    </div>      
                </FormControl>
            </form>
        </Paper>
    )
}

export default withStyles(styles)(ViewStatusForm);