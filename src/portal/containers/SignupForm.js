import React from 'react';
import SignupForm from '../components/SignupForm';
import { connect } from 'react-redux';
import connErr from './../redux/actions/connErr';
import { withRouter } from 'react-router-dom';

class SignupFormContainer extends React.Component {
    constructor() {
        super();
        this.handleSignupSubmit = this.handleSignupSubmit.bind(this);
    }

    async registerUser(data) {
        console.log(data);
        try {
            const res = await fetch('https://grievance-portal-server-1.herokuapp.com/api/public/auth/register', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
            });
            let result = await res.json();

            if (res.status === 200) {
                this.props.history.push('/');
            }


        } catch(err) {
            this.props.dispatch(connErr());
        }
    }

    handleSignupSubmit(e) {
        e.preventDefault();
        const fullName = e.target.elements.firstName.value + ' ' + e.target.elements.lastName.value;
        const formData = {
            fullName,
            gender: e.target.elements.gender.value,
            address: e.target.elements.address.value,
            country: e.target.elements.country.value,
            state: e.target.elements.state.value,
            district: e.target.elements.district.value,
            pincode: e.target.elements.pincode.value,
            phoneNumber: e.target.elements.phoneNumber.value,
            email: e.target.elements.email.value,
            password: e.target.elements.password.value,
        };
        this.registerUser(formData)
            
    }

    render() {
        return(
            <SignupForm 
                handleSignupSubmit={this.handleSignupSubmit}
            />
        )
    }
}

export default connect()( withRouter(SignupFormContainer));