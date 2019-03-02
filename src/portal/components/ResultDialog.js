import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Typography, CircularProgress } from '@material-ui/core';

const ResultDialog = (props) => {

    const { message, dialogOpen, toggleDialogOpen } = props;

    return(
        <Dialog
            PaperProps={{
                style: {background: '#f9f9fa'}
            }}
            open={dialogOpen}
            aria-labelledby="dialog-title"
            aria-describedby="dialog-description"
        >
            
            {
                message === 'true' ?
                <CircularProgress />
                : <div>
                    <DialogTitle
                        id="dialog-title"    
                    >
                        { message }
                    </DialogTitle>
                    <DialogContent>
                        {/* <DialogContentText>
                            <Typography>TokenId: {message.split(' ')}</Typography>
                        </DialogContentText> */}
                        <DialogActions>
                            <Button onClick={toggleDialogOpen} variant="contained" color="secondary">
                                Okay
                            </Button>
                        </DialogActions>
                    </DialogContent>
                </div>
        }
        </Dialog>
    )
}

const mapStateToProps = (state) => ({
    connection: state.profile.connection,
})

export default ResultDialog;