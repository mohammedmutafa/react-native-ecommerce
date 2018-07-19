import React from 'react';
import PropTypes from 'prop-types';

import UpdateAdDetailsContainer from './UpdateAdDetailsContainer';

const index = ({ navigation }) => {
    const { params } = navigation.state;
    const userID = params ? params.userID : null;
    const postID = params ? params.postID : undefined;
    const postItem = params ? params.postItem : undefined;

    return (
        <UpdateAdDetailsContainer
            navigation={navigation}
            userID={userID}
            postID={postID}
            postItem={postItem}
        />
    );
};

index.propTypes = {
    navigation: PropTypes.object
};

export default index;
