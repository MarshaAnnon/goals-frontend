import React, { Component } from 'react';
import Registration from './auth/Registration';

class home extends Component {
    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    }

    handleSuccessfulAuth(data) {
    this.props.handleLogin(data);        
    this.props.history.push("./Dashboard");//this is how you redirect the user
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <h1>Status: {this.props.loggedInStatus}</h1>
                <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
            </div>
        );
    }
}

export default home;