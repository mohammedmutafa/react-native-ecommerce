import React from 'react';
import PropTypes from 'prop-types';

import UpdateAdPhotosContainer from './UpdateAdPhotosContainer';

const index = ({ navigation }) => {
    const { params } = navigation.state;

    const item = params ? params.item : undefined;
    const postID = params ? params.postID : undefined;
    const ownerID = params ? params.ownerID : undefined;

    return <UpdateAdPhotosContainer
        navigation={navigation}
        postItem={item}
        postID={postID}
        ownerID={ownerID}
    />;
};

index.propTypes = {
    navigation: PropTypes.object
};

export default index;
