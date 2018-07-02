import React from 'react';
import PropTypes from 'prop-types';

import UserProfileContainer from './UserProfileContainer';

const index = ({ navigation }) => {
    const { params } = navigation.state;
    const userID = params ? params.userID : null;

    return (
        <UserProfileContainer
            navigation={navigation}
            userID={userID}
        />
    );
};

index.propTypes = {
    navigation: PropTypes.object
};

export default index;
