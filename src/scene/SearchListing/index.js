import React from 'react';
import PropTypes from 'prop-types';

import SearchListingContainer from './SearchListingContainer';

const index = ({ navigation }) => {
    return <SearchListingContainer
        navigation={navigation}
    />;
};

index.propTypes = {
    navigation: PropTypes.object
};

export default index;
