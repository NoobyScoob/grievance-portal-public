import React from 'react';
import GrievanceForm from './../components/GrievanceForm';
import { connect } from 'react-redux';

class GrievanceFormContainer extends React.Component {

    constructor(props) {
        super(props);

        const fullName = this.props.profile.fullName.split(' ');
        
        this.state = {
            userProfile: {
                firstName: fullName[0],
                lastName: fullName[1],
                gender: this.props.profile.gender,
                address: this.props.profile.address,
                country: this.props.profile.country,
                state: this.props.profile.state,
                pincode: this.props.profile.pincode,
                phoneNumber: this.props.profile.phoneNumber,
                email: this.props.profile.email,
                district: this.props.profile.district,
            },
            isGrievance: false,
            dialogOpen: false,
            message: 'true',
        }

        this.handleUserFormSubmit = this.handleUserFormSubmit.bind(this);
        this.handleGrievanceFormSubmit = this.handleGrievanceFormSubmit.bind(this);
        this.handleIsGrievanceToggle = this.handleIsGrievanceToggle.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.toggleDialogOpen = this.toggleDialogOpen.bind(this);
    }

    handleIsGrievanceToggle() {
        this.setState((prevState) => ({
            isGrievance: !prevState.isGrievance
        }));
    }

    toggleDialogOpen() {
        this.setState({dialogOpen: false});
    }

    handleInputChange(e) {
        let userProfile = {};
        userProfile[e.target.id] = e.target.value;
        this.setState({userProfile});
    }

    handleUserFormSubmit(e) {
        e.preventDefault();
        // set state to grievance page
        this.handleIsGrievanceToggle();
        // user details in the form
        const userProfile = {
            firstName: e.target.elements.firstName.value,
            lastName: e.target.elements.lastName.value,
            gender: e.target.elements.gender.value,
            address: e.target.elements.address.value,
            country: e.target.elements.country.value,
            district: e.target.elements.district.value,
            state: e.target.elements.state.value,
            pincode: e.target.elements.pincode.value,
            phoneNumber: e.target.elements.phoneNumber.value,
            email: e.target.elements.email.value,
        };
        this.setState({userProfile});
    }

    handleGrievanceFormSubmit(e) {
        e.preventDefault();
        this.setState({dialogOpen: true});

        const formData = new FormData(e.target);

        // append userdata to formData
        for( let key in this.state.userProfile ) {
            if ( key !== 'firstName' && key !== 'lastName') {
                formData.append(key, this.state.userProfile[key]);
            }
        }

        // append fullName to formdata
        const fullName = this.state.userProfile.firstName + ' ' + this.state.userProfile.lastName;
        formData.append('fullName', fullName);
        
        // to check formData
        // for(var pair of formData.entries()) {
        //     console.log(pair[0]+ ', '+ pair[1]); 
        // }

        // post request
        this.registerGrievance(formData)
            .then(result => { 
                this.setState({message: result.message});
                });
    }

    async registerGrievance(formData) {
        try {
            const res = await fetch('https://grievance-portal-server-1.herokuapp.com/api/public/newGrievance', {
            method: 'POST',
            mode: 'cors',
            headers: {
                "enctype": "multipart/form-data",
                "Authorization": "Bearer " + this.props.profile.auth.jwt
            },
            body: formData
            });
            const result = await res.json();
            return result;
        } catch(err) {
            console.log(err);
            throw new Error(err);
        }
    }

    render() {
        return(
            <GrievanceForm 
                handleUserFormSubmit={this.handleUserFormSubmit}
                handleGrievanceFormSubmit={this.handleGrievanceFormSubmit}
                isGrievance={this.state.isGrievance}
                handleIsGrievanceToggle={this.handleIsGrievanceToggle}
                userProfile={this.state.userProfile}
                handleInputChange={this.handleInputChange}
                dialogOpen={this.state.dialogOpen}
                message={this.state.message}
                toggleDialogOpen={this.toggleDialogOpen}
            />
        )
    }
}

const mapStateToProps = (status) => ({
    profile: status.profile,
});

export default connect(mapStateToProps)(GrievanceFormContainer);