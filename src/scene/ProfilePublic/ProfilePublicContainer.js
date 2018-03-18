import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProfilePublic from './ProfilePublic';

class SearchListingContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return <ProfilePublic />
    }
}

ProfilePublic.propTypes = {

};

export default ProfilePublic;
