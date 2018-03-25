import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GeneralProductDetailsContainer from './GeneralProductDetailsContainer';

const index = ({ navigation }) => {
    const { params } = navigation.state;
    const thumbnailURL = params ? params.thumbnailURL : null;
    const time = params ? params.time : '';
    const price = params ? params.price : 0;
    const details = params ? params.title : '';

    return <GeneralProductDetailsContainer
        navigation={navigation}
        thumbnailURL={thumbnailURL}
        time={time}
        price={price}
        details={details}
    />;
};

index.propTypes = {
    navigation: PropTypes.object
};

export default index;
