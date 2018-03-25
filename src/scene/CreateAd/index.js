import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CreateAdContainer from './CreateAdContainer';

const index = ({ navigation }) => {
    return <CreateAdContainer
        navigation={navigation}
    />;
};

index.propTypes = {
    navigation: PropTypes.object
};

export default index;
