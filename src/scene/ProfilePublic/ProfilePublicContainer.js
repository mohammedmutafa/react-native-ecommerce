import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProfilePublic from './ProfilePublic';

class SearchListingContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { sellerData } = this.props;

        return (
            <ProfilePublic
                sellerData={sellerData}
            />
        );
    }
}

ProfilePublic.propTypes = {
    sellerData: PropTypes.object
};

export default ProfilePublic;
