import React from 'react';
import PropTypes from 'prop-types';

import EditUserAd from './EditUserAd';

const index = ({ navigation }) => {
    return <EditUserAd
        navigation={navigation}
    />;
};

index.propTypes = {
    navigation: PropTypes.object
};

export default index;
