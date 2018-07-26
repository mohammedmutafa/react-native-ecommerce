import React from 'react';
import PropTypes from 'prop-types';

import SearchListingContainer from './SearchListingContainer';

const index = ({ navigation }) => {
    const { params } = navigation.state;
    const mainCatSearchKey = params ? params.mainCatSearchKey : undefined;

    return <SearchListingContainer
        navigation={navigation}
        mainCatSearchKey={mainCatSearchKey}
    />;
};

index.propTypes = {
    navigation: PropTypes.object
};

export default index;
