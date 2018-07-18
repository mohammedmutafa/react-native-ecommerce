import React from 'react';
import PropTypes from 'prop-types';

import UserProfileContainer from './UserProfileContainer';

const index = ({ navigation }) => {
    const { params } = navigation.state;
    const userID = params ? params.userID : null;
    const userExistInDB = params ? params.userExistInDB : false;

    return (
        <UserProfileContainer
            navigation={navigation}
            userID={userID}
            userExistInDB={userExistInDB}
        />
    );
};

index.propTypes = {
    navigation: PropTypes.object
};

export default index;
