import React from 'react';
import PropTypes from 'prop-types';

import ProfilePublicContainer from './ProfilePublicContainer';

const index = ({ navigation }) => {

    const { params } = navigation.state;
    const sellerData = params ? params.sellerData : null;

    return (
        <ProfilePublicContainer
            navigation={navigation}
            sellerData={sellerData}
        />
    );
};

index.propTypes = {
    navigation: PropTypes.object,
    sellerData: PropTypes.object
};

export default index;
