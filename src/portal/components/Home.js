import React from 'react';
import LoginFormContainer from './../containers/LoginForm';
import Info from './Info';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ConnErrDialog from './ConnErrDialog';
import StatsContainer from '../containers/Stats';

const Home = (props) => {

    const { loggedIn } = props;

    return (
        loggedIn ?
            <Redirect to="/user" />
        :
        <div>
            <Grid container spacing={0}>
                <ConnErrDialog />
                <Grid item xs={12} sm={12} md= {11} xl={10} style={{margin: 'auto'}}>

                    <Grid container spacing={0}>
                        <Grid item xs={12} sm={4} md={4} xl={3}>
                            <LoginFormContainer />
                        </Grid>
                        <Grid item xs={12} sm={8} md={8} xl={8}>
                            <Info />
                            <StatsContainer />
                        </Grid>
                    </Grid>
                    
                </Grid>
            </Grid>
            
        </div>
    );
}

const mapStateToProps = (state) => ({
    loggedIn: state.profile.auth.loggedIn,
})

export default connect(mapStateToProps)(Home);