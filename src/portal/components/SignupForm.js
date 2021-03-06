import React from 'react';
import { withStyles, FormControl, TextField, Typography, Button, Paper} from '@material-ui/core';
import ConnErrDialog from './ConnErrDialog';
import ResultDialog from './ResultDialog';

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

const SignupForm = (props) => {

    const { classes } = props;
    const { handleSignupSubmit, dialogOpen, message, toggleDialogOpen } = props;

    return (
        <Paper className={classes.root}>
            <ResultDialog message={message} dialogOpen={dialogOpen} toggleDialogOpen={toggleDialogOpen} />
            <ConnErrDialog />
            <form onSubmit={ handleSignupSubmit } className={classes.form}>
                    <FormControl fullWidth>
                        <Typography variant="h6" color="primary" align="center" >Public Signup</Typography>
                        <div className={classes.row}>
                            <TextField
                                className={classes.mobileField}
                                id="firstName"
                                label="First Name"
                                margin="normal"
                                variant="outlined"
                                placeholder="First Name"
                                required
                            />
                            <TextField
                                className={classes.mobileField}
                                id="lastName"
                                label="Last Name"
                                margin="normal"
                                variant="outlined"
                                placeholder="Last Name"
                                required
                            />
                        </div>
                        <div className={classes.row}>
                            
                                <TextField
                                    className={classes.field}
                                    id="gender"
                                    select
                                    label="gender"
                                    margin="normal"
                                    SelectProps={{
                                        native: true,
                                    }}
                                    
                                    helperText="please select gender"
                                    variant="outlined"
                                >
                                    <option>Female</option>
                                    <option>Male</option>
                                    <option>Rather not specify</option>
                                </TextField>
                        </div>
                        <div className={classes.row}>
                            <TextField
                                className={classes.mobileField}
                                id="address"
                                fullWidth
                                label="Address"
                                margin="normal"
                                multiline
                                variant="outlined"
                                placeholder="Address"
                            />
                        </div>

                        <div >
                            <TextField
                                style={{ marginRight: '1rem' }}
                                className={classes.mobileField}
                                id="country"
                                label="Country"
                                select
                                margin="normal"
                                variant="outlined"
                                placeholder="Country"
                                required="true"
                                SelectProps={{
                                    native: true,
                                }}
                            >
                                <option>India</option>
                            </TextField>
                            <TextField
                                className={classes.mobileField}
                                id="state"
                                label="State"
                                select
                                margin="normal"
                                variant="outlined"
                                required
                                placeholder="State"
                                SelectProps={{
                                    native: true,
                                }}
                            >
                                <option>Telangana</option>
                                <option>Uttar Pradesh</option>
                            </TextField>
                        </div>

                        <div>
                            <TextField
                                style={{ marginRight: '1rem' }}
                                className={classes.mobileField}
                                id="district"
                                label="District"
                                select
                                margin="normal"
                                variant="outlined"
                                placeholder="District"
                                required="true"
                                SelectProps={{
                                    native: true,
                                }}
                            >
                                <option>Hyderabad</option>
                                <option>RangaReddy</option>
                                <option>Lucknow</option>
                                <option>Kanpur</option>
                            </TextField>
                            <TextField
                                className={classes.mobileField}
                                id="pincode"
                                label="Pincode"
                                select
                                margin="normal"
                                variant="outlined"
                                required
                                placeholder="Pincode"
                                SelectProps={{
                                    native: true,
                                }}
                            >
                                <option>500079</option>
                                <option>500081</option>
                                <option>208001</option>
                                <option>226001</option>
                            </TextField>
                        </div>

                        <div className={classes.row}>
                            <TextField
                                className={classes.mobileField}
                                id="phoneNumber"
                                label="Phone Number"
                                margin="normal"
                                variant="outlined"
                                placeholder="Phone Number"
                                required="true"
                            />
                            <TextField
                                className={classes.mobileField}
                                id="email"
                                label="Email"
                                margin="normal"
                                variant="outlined"
                                required
                                placeholder="Email"
                                type="email"
                            />
                        </div>

                        <div className={classes.row}>
                            <TextField
                                className={classes.mobileField}
                                id="password"
                                label="Password"
                                margin="normal"
                                variant="outlined"
                                placeholder="Password"
                                required="true"
                                type="password"
                                autoComplete="current-password"
                            />
                            <TextField
                                className={classes.mobileField}
                                id="cnfPassword"
                                label="Confirm password"
                                margin="normal"
                                variant="outlined"
                                required
                                placeholder="Confirm password"
                                type="password"
                                autoComplete="current-password"
                            />
                        </div>

                        <Button type="submit" className={classes.btn} variant="contained" color="primary" fullWidth>
                            Sign up
                        </Button>

                    </FormControl>
            </form>
        </Paper>
    );
}

export default withStyles(styles)(SignupForm);