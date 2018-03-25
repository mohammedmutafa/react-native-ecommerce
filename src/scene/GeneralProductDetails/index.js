import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GeneralProductDetailsContainer from './GeneralProductDetailsContainer';

const index = ({ navigation }) => {
    return <GeneralProductDetailsContainer
        navigation={navigation}
    />;
};

index.propTypes = {
    navigation: PropTypes.object
};

export default index;
