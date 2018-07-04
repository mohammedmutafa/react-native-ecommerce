import React from 'react';
import PropTypes from 'prop-types';

import CreateAdContainer from './CreateAdContainer';

const index = ({ navigation }) => {
    const { params } = navigation.state;
    const userID = params ? params.userID : null;

    return (
        <CreateAdContainer
            navigation={navigation}
            userID={userID}
        />
    );
};

index.propTypes = {
    navigation: PropTypes.object
};

export default index;
