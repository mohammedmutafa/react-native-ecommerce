import React from 'react';
import PropTypes from 'prop-types';

import UserProfileContainer from './UserProfileContainer';

const index = ({ navigation }) => {
    return (
        <UserProfileContainer
            navigation={navigation}
        />
    );
};

index.propTypes = {
    navigation: PropTypes.object
};

export default index;
