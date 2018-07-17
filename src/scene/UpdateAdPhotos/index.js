import React from 'react';
import PropTypes from 'prop-types';

import UpdateAdPhotosContainer from './UpdateAdPhotosContainer';

const index = ({ navigation }) => {
    const { params } = navigation.state;
    const postID = params ? params.postID : undefined;
    console.log(postID);

    return <UpdateAdPhotosContainer
        navigation={navigation}
        postID={postID}
    />;
};

index.propTypes = {
    navigation: PropTypes.object
};

export default index;
