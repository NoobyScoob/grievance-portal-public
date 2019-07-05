import React from 'react';
import UserHome from '../components/UserHome';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ConnErrDialog from '../components/ConnErrDialog';

class UserHomeContainer extends React.Component {
    constructor(props) {
        super(props);
        
        // state
        this.state = {
            grievanceList: [],
        }

        // bindings
        this.handleLodgeGrievance = this.handleLodgeGrievance.bind(this);
        this.handleViewGrievance = this.handleViewGrievance.bind(this);
        this.handleCancelGrievance = this.handleCancelGrievance.bind(this);
    }

    handleViewGrievance(grievance) {
        this.props.history.push({
            pathname: `/user/grievances/${grievance.token}`,
            state: { grievance }
          });   
    }

    handleLodgeGrievance() {
        this.props.history.push('/user/lodgeNewGrievance');
    }

    handleCancelGrievance(token) {
        this.cancelGrievance(token)
    }

    async getGrievances() {
        try {
            this.setState({grievanceList: [true]});
            const res = await fetch('https://grievance-portal-server-1.herokuapp.com/api/public/submittedGrievances', {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Authorization': `Bearer ${this.props.profile.auth.jwt}`
                }   
            });
            const result = await res.json();
            return result.grievances;
        } catch (err) {
            console.log(err);
        }
    }

    async cancelGrievance(token) {
        try {
            
            const res = await fetch(`https://grievance-portal-server-1.herokuapp.com/api/public/cancelGrievance?token=${token}`, {
                method: 'PUT',
                mode: 'cors',
                headers: {
                    'Authorization': `Bearer ${this.props.profile.auth.jwt}`
                }
            });

            if ( res.status === 500 ) {
                window.location.reload();
            }
            
             
        } catch(err) {

        }
    }

    componentDidMount() {
        this.getGrievances()
            .then(grievanceList => {
                if(!!grievanceList) {
                this.setState({grievanceList: []});
                console.log(grievanceList);
                    this.setState({grievanceList: grievanceList});
                }
            })
    }

    render() {
        return (
            this.props.profile.auth.loggedIn ? 
            <UserHome 
                handleLodgeGrievance={this.handleLodgeGrievance}
                grievanceList={this.state.grievanceList}
                handleViewGrievance={this.handleViewGrievance}
                handleCancelGrievance={this.handleCancelGrievance}
            > <ConnErrDialog /> </UserHome>
            :
            <div> <ConnErrDialog/> You should be logged in to access this route </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile
    };
};

export default connect(mapStateToProps)(withRouter(UserHomeContainer));