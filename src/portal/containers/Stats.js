import React from 'react';
import Stats from './../components/Stats';

class StatsContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            stats: {
                submitted: 0,
                resolved: 0,
            }
        }
    }

    async getStats() {
        try {
            const res = await fetch('https://grievance-portal-server-1.herokuapp.com/', {
                method: 'GET',
                mode: 'cors',
            });

            let result = await res.json();
            return result;
        } catch(err) {
            console.log(err);
        }
    }

    componentDidMount() {
        this.getStats()
            .then ( result => {
                this.setState({stats: result.stats});
            })
    }

    render() {
        return (
            <Stats stats={this.state.stats} />
        );
    }

}

export default StatsContainer;  