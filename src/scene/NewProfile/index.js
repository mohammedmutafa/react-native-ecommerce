import React from 'react';
import PropTypes from 'prop-types';

import NewProfileContainer from './NewProfileContainer';

const index = ({ navigation }) => {
    return (
        <NewProfileContainer
            navigation={navigation}
        />
    );
};

index.propTypes = {
    navigation: PropTypes.object
};

export default index;
