import React from 'react';
import PropTypes from 'prop-types';

import ProfilePublicContainer from './ProfilePublicContainer';

const index = ({ navigation }) => {
    return <ProfilePublicContainer
        navigation={navigation}
    />;
};

index.propTypes = {
    navigation: PropTypes.object
};

export default index;
