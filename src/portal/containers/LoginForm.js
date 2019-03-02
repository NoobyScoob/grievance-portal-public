import LoginForm from './../components/LoginForm';
import React from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

// redux actions
import login from './../redux/actions/login';
import connErr from './../redux/actions/connErr';

class LoginFormContainer extends React.Component {

    constructor(props) {
        super(props);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.state = {
            loginErr: false,
            redirect: false,
            disabled: false,
        }
    }

    async authenticateUser(username, password) {
        try {
            const data = { username, password }
            // POST request for login
            const res = await fetch('https://grievance-portal-server-1.herokuapp.com/api/public/auth/login', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
            });

            let result = await res.json();
            
            if (res.status === 200) {
                return result;
            } else if(res.status === 500) {
                this.setState({loginErr: true, disabled: false });
            }
        }
        catch(err) {
            // err occured in post request to server
            this.props.dispatch(connErr());
        }
    }

    handleLoginSubmit(e) {
        e.preventDefault();
        this.setState({disabled: true});
        const username = e.target.elements.username.value;
        const pass = e.target.elements.pass.value;
        this.authenticateUser(username, pass)
            .then(result => {
                const profile = {
                    username: result.user.username,
                    fullName: result.user.fullName,
                    gender: result.user.gender,
                    address: result.user.address,
                    country: result.user.country,
                    state: result.user.state,
                    pincode: result.user.pincode,
                    district: result.user.district,
                    phoneNumber: result.user.phoneNumber,
                    email: result.user.email,
                    auth: {
                        loggedIn: result.auth,
                        jwt: result.token
                    },
                }

                // set redux and local states
                this.props.dispatch(login(profile));
                this.setState({redirect: true});

                // set user details local storage
                for ( let key in result.user ) {
                    localStorage.setItem(key, result.user[key]);
                }

                // set jwt in localstorage
                localStorage.setItem('jwt', result.token);
            })
    }

    render() {
        return(
            this.state.redirect ?
            <Redirect push to="/user" />
            :
            <LoginForm
                handleLoginSubmit={ this.handleLoginSubmit }
                loginErr={ this.state.loginErr }
                disabled={ this.state.disabled }
            />
        );
    }

}

const mapStateToProps = (state) => {
    return {
        profile: state.profile,
    }
}

export default connect(mapStateToProps)(LoginFormContainer);