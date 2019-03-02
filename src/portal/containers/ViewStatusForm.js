import React from 'react';
import ViewStatusForm from '../components/ViewStatusForm';
import { withRouter } from 'react-router-dom';

class ViewStatusFormContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            grievance: {},
            errMessage: '',
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    // /api/grievance/status

    async postViewStatusForm(formData) {
        try {
            const res = await fetch('https://grievance-portal-server-1.herokuapp.com/api/grievance/status', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            let result = await res.json();

            if (res.status === 200) {
                console.log(result);
                return result;
            }
            else if(res.status === 500) {
                // handle token id or password wrong error
            }

        } catch(err) {
            console.log(err);
        }
    }

    handleFormSubmit(e) {
        e.preventDefault();
        const formData = {
            tokenId: e.target.elements.tokenId.value,
            tokenPassword: e.target.elements.tokenPassword.value
        }
        console.log(formData);

        this.postViewStatusForm(formData)
            .then( result => {

                const grievance = result.grievance;
                if ( ! (Object.keys(grievance).length === 0 && grievance.constructor === Object) ) {

                    this.setState({grievance});
                    this.props.history.push({
                        pathname: `/user/grievances/${this.state.grievance.token}`,
                        state: { grievance }
                    });

                } // check for empty object

                this.setState({errMessage: result.message});
            })
    }

    render() {
        return(
            <ViewStatusForm
                handleFormSubmit={ this.handleFormSubmit }
                errMessage={this.state.errMessage}
            />
        )
    }

}

export default withRouter(ViewStatusFormContainer);