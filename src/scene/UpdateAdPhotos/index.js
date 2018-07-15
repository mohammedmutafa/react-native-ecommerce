import React from 'react';
import PropTypes from 'prop-types';

import UpdateAdPhotos from './UpdateAdPhotos';

const index = ({ navigation }) => {
    return <UpdateAdPhotos
        navigation={navigation}
    />;
};

index.propTypes = {
    navigation: PropTypes.object
};

export default index;
