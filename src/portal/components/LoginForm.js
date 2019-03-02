import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import CssBaseLine from '@material-ui/core/CssBaseline';
import { Typography, withStyles, Link, TextField } from '@material-ui/core';

const styles = theme => ({
    root: {
        marginBottom: 2*theme.spacing.unit,
        marginLeft: 2*theme.spacing.unit,
        marginRight: 2*theme.spacing.unit,
    },

    loginFormPaper: {
        background: '#9da9cb',
        margin: 'auto',
        paddingLeft: (1/2)*theme.spacing.unit,
        paddingRight: (1/2)*theme.spacing.unit,
        paddingTop: 2*theme.spacing.unit,
        paddingBottom: 2*theme.spacing.unit,
    },

    loginForm: {
        width: '88.8%',
        margin: 'auto',
    },

    formHeading: {
        textAlign: 'center',
        marginBottom: theme.spacing.unit,
    },

    formControl: {
        display: 'block',
        marginBottom: 2*theme.spacing.unit,
    },

    customButton: {
        background: '#300D4F',
        '&:hover': {
            background: '#08002A',
        }
    }
});

const LoginForm = (props) => {

    const { classes } = props;
    const { handleLoginSubmit, loginErr } = props;

    return(
        <div className={classes.root}>
            <CssBaseLine />
            <Paper className={classes.loginFormPaper}>
                <Typography variant="h6" className={classes.formHeading}>Public Login</Typography>
                <form onSubmit={ handleLoginSubmit } className={classes.loginForm}>
                    {
                        // show error if login fails
                        loginErr ? 
                            <FormControl className={classes.formControl}>
                                <Typography variant="body1" color="error" align="center">
                                    username or password is incorrect
                                </Typography>
                            </FormControl>
                        : null
                    }
                    <FormControl className={classes.formControl} >
                        
                        <TextField type="text"
                            id="username"
                            fullWidth
                            name="username"
                            autoComplete="username"
                            required
                            variant="outlined"
                            label="username"
                        />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <TextField
                            type="password"
                            id="pass"
                            fullWidth
                            name="pass"
                            autoComplete="current-password"
                            required
                            inputProps={{ minLength: 6 }}
                            variant="outlined"
                            label="Password"
                        />
                    </FormControl>
                    
                    <FormControl className={classes.formControl}>
                        <Button
                            type="Submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.customButton}
                        >
                            Log In
                        </Button>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <Link component={RouterLink} push="true" to="/signup">
                            No account? Signup!
                        </Link>

                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <Link component={RouterLink} push="true" to="/forgotPassword">
                            <Typography color="error" inline={true}>Forgot Password?</Typography>
                        </Link>
                    </FormControl>
                </form>
            </Paper>
        </div>
    );
}

export default withStyles(styles)(LoginForm);