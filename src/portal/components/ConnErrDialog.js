import React from 'react';
import { connect } from 'react-redux';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Fab } from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';

const ConnErrDialog = (props) => {

    const { connection } = props;

    return(
        <Dialog
            PaperProps={{
                style: {background: '#f9f9fa'}
            }}
            open={!connection}
            aria-labelledby="dialog-title"
            aria-describedby="dialog-description"
        >
            <DialogTitle 
                id="dialog-title"    
            >
                {"Connection Broken"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <img alt="connection error" src={require('./../img/error.png')} />
                </DialogContentText>
                <DialogActions>
                    <Fab onClick={ () => { window.location.reload() } } color="default">
                        <RefreshIcon />
                    </Fab>
                </DialogActions>
            </DialogContent>
        </Dialog>
    )
}

const mapStateToProps = (state) => ({
    connection: state.profile.connection,
})

export default connect(mapStateToProps)(ConnErrDialog);