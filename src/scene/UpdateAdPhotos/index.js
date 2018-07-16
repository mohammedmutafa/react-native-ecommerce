import React from 'react';
import PropTypes from 'prop-types';

import UpdateAdPhotosContainer from './UpdateAdPhotosContainer';

const index = ({ navigation }) => {
    return <UpdateAdPhotosContainer
        navigation={navigation}
    />;
};

index.propTypes = {
    navigation: PropTypes.object
};

export default index;
