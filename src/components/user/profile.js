import React, { Component } from 'react';


class Profile extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (

                        <div>
                           <h2>{this.props.currentUser.name}</h2>
                           <p className="profile-email">{this.props.currentUser.email}</p>
                        </div>

        );
    }
}

export default Profile