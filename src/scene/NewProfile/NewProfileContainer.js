import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NewProfile from './NewProfile';

class NewProfileContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <NewProfile />
    }
}

NewProfile.propTypes = {

};

export default NewProfile;
