import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UserProfile from './UserProfile';

class UserProfileContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <UserProfile />
    }
}

UserProfile.propTypes = {

};

export default UserProfile;
