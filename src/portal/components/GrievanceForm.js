import React from 'react';
import { withStyles, Grid, Paper, TextField, FormControl, Typography, Button } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import BackArrowIcon from '@material-ui/icons/ArrowBackSharp';
import ConnErrDialog from './ConnErrDialog';
import ResultDialog from './ResultDialog';

const styles = theme => ({
    paper: {
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
    },

});

const GrievanceForm = (props) => {

    const   { classes } = props;
    const { handleUserFormSubmit,
            handleGrievanceFormSubmit,
            isGrievance,
            handleIsGrievanceToggle,
            userProfile,
            handleInputChange,
            dialogOpen,
            message,
            toggleDialogOpen,
            } = props;
    
    return (
        <Grid container spacing={0}>
            <ResultDialog message={message} dialogOpen={dialogOpen} toggleDialogOpen={toggleDialogOpen} />
            <ConnErrDialog />
            <Grid item xs={12} sm={10} md= {10} xl={10} style={{margin: 'auto'}}>
                {
                    !isGrievance &&
                    <Paper onSubmit={ handleUserFormSubmit } className={classes.paper}>
                        <form className={classes.form}>
                            <FormControl fullWidth>
                            <Typography variant="title" color="textPrimary" align="left" >Please confirm user details</Typography>
                            <Typography variant="subtitle1" color="secondary" align="left" >Email and phone number are used to send alerts</Typography>
                            <div className={classes.row}>
                                <TextField
                                    className={classes.mobileField}
                                    id="firstName"
                                    label="First Name"
                                    margin="normal"
                                    variant="outlined"
                                    required={true}
                                    value= {userProfile.firstName}
                                    onChange={ handleInputChange }
                                    placeholder="First Name"
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                />
                                <TextField
                                    className={classes.mobileField}
                                    id="lastName"
                                    label="Last Name"
                                    margin="normal"
                                    variant="outlined"
                                    placeholder="Last Name"
                                    required={true}
                                    value={userProfile.lastName}
                                    onChange={handleInputChange}
                                    InputLabelProps={{
                                        shrink: true
                                    }}
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
                                        required={true}
                                        helperText="please select gender"
                                        variant="outlined"
                                        value={userProfile.gender}
                                        onChange={handleInputChange}
                                        InputLabelProps={{
                                            shrink: true
                                        }}
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
                                    required={true}
                                    multiline
                                    variant="outlined"
                                    placeholder="Address"
                                    value={userProfile.address}
                                    onChange={handleInputChange}
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                />
                            </div>

                            <div className={classes.row}>
                                <TextField
                                    className={classes.mobileField}
                                    id="country"
                                    label="Country"
                                    margin="normal"
                                    variant="outlined"
                                    placeholder="Country"
                                    required={true}
                                    value={userProfile.country}
                                    onChange={handleInputChange}
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                />
                                <TextField
                                    className={ classes.mobileField }
                                    id="state"
                                    label="State"
                                    margin="normal"
                                    variant="outlined"
                                    required={true}
                                    placeholder="State"
                                    value={userProfile.state}
                                    onChange={handleInputChange}
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                />
                            </div>

                            <div className={classes.row}>
                                <TextField
                                    className={classes.mobileField}
                                    id="district"
                                    label="District"
                                    margin="normal"
                                    variant="outlined"
                                    placeholder="District"
                                    required={true}
                                    value={userProfile.district}
                                    onChange={handleInputChange}
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                />
                                <TextField
                                    className={classes.mobileField}
                                    id="pincode"
                                    label="Pincode"
                                    margin="normal"
                                    variant="outlined"
                                    required={true}
                                    placeholder="Pincode"
                                    value={userProfile.pincode}
                                    onChange={handleInputChange}
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                />
                            </div>

                            <div className={classes.row}>
                                <TextField
                                    className={classes.mobileField}
                                    id="phoneNumber"
                                    label="Phone Number"
                                    margin="normal"
                                    variant="outlined"
                                    placeholder="Phone Number"
                                    required={true}
                                    value={userProfile.phoneNumber}
                                    onChange={handleInputChange}
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                    
                                />
                                <TextField
                                    className={classes.mobileField}
                                    id="email"
                                    label="Email"
                                    margin="normal"
                                    variant="outlined"
                                    required={true}
                                    placeholder="Email"
                                    type="email"
                                    value={userProfile.email}
                                    onChange={handleInputChange}
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                />
                            </div>
                            
                            </FormControl>
                            <div style={{textAlign: "right"}}>
                                <Typography inline color="primary" variant="overline">
                                    Hit next to fill grievance form&nbsp;
                                </Typography>
                                <Button type="submit" className={classes.btn} variant="contained" color="primary" >
                                    Next
                                </Button>
                            </div>
                        </form>
                    </Paper>
                }
                {
                    isGrievance &&
                    <Paper className={classes.paper} style={{maxWidth: 620}}>
                        <form onSubmit={ handleGrievanceFormSubmit } className={classes.form}>
                            <Button color="secondary" onClick={ handleIsGrievanceToggle }><BackArrowIcon/> GO BACK </Button>
                            <FormControl fullWidth>
                                <Typography color="primary" variant="overline" style={{fontSize: 16}} align="center">
                                    REGISTER GRIEVANCE
                                </Typography>
                            
                                <TextField 
                                    id="department"
                                    name="department"
                                    select
                                    label="Department"
                                    margin="normal"
                                    SelectProps={{
                                        native: true,
                                    }}
                                    variant="outlined"
                                >
                                    <option>Department of Industrial Policy and Promotion</option>
                                    <option>Department of agriculture</option>
                                </TextField>
                                <TextField
                                    id="description"
                                    name="description"
                                    multiline
                                    label="Grievance Description"
                                    margin="normal"
                                    rows={6}
                                    variant="outlined"
                                />
                                
                                <input
                                    type="file"
                                    id="attachments"
                                    name="attachments"
                                    accept=".pdf"
                                    style={{display: 'none'}}
                                />
            
                                <label htmlFor="attachments">
                                    <Typography variant="subtitle2">Select file(if any)</Typography>
                                    <Button component="span" className={classes.btn} variant="contained">
                                        Upload
                                        <CloudUploadIcon style={{ margin: '0 0 4px 6px' }} />
                                    </Button>
                                    <Typography color="secondary">Only pdf file format is supported</Typography>
                                </label>

                                <TextField
                                    id="reference"
                                    name="reference"
                                    type="number"
                                    label="Reference Number(If any)"
                                    margin="normal"
                                    placeholder="Reference number of any submitted grievance"
                                    variant="outlined"
                                />

                                <div >
                                    <Typography variant="body2">
                                        I hereby state that the facts mentioned above are true to the best of my knowledge and belief.
                                    </Typography>
                                    <Button type="submit" className={classes.btn} variant="contained" color="primary">
                                        Agree and Submit
                                    </Button>
                                </div>
                                
                            </FormControl>
                        </form>
                    </Paper>
                }
            </Grid>
        </Grid>
    );
}

export default withStyles(styles)(GrievanceForm);