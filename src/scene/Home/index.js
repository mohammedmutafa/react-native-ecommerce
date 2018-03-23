import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HomeContainer from './HomeContainer';

const index = ({ navigation }) => {
    return <HomeContainer
        navigation={navigation}
    />;
};

index.propTypes = {
    navigation: PropTypes.object
};

export default index;
