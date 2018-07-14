import React from 'react';
import PropTypes from 'prop-types';

import GeneralProductDetailsContainer from './GeneralProductDetailsContainer';

const index = ({ navigation }) => {
    const { params } = navigation.state;
    const thumbnailURL = params ? params.thumbnailURL : null;
    const time = params ? params.time : '';
    const price = params ? params.price : 0;
    const title = params ? params.title : '';
    const details = params ? params.productDescription : '';
    const location = params ? params.selectedLocation : '';
    const ownerID = params ? params.ownerID : '';
    const isNavigatedFromPublicProfile = params ? params.isNavigatedFromPublicProfile : false

    return (
        <GeneralProductDetailsContainer
            navigation={navigation}
            thumbnailURL={thumbnailURL}
            time={time}
            price={price}
            title={title}
            details={details}
            location={location}
            ownerID={ownerID}
            isNavigatedFromPublicProfile={isNavigatedFromPublicProfile}
        />
    )
};

index.propTypes = {
    navigation: PropTypes.object
};

export default index;
