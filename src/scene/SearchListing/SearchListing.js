import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FeedsCard } from '../../component/FeedsCard';

class SearchListing extends Component {
    render() {
        return (
            <FeedsCard
                time='1 day ago'
                name='Dipak Katwal'
                title='iPhone 8 , box Pack'
                imageURL='https://img2.carmax.com/img/vehicles/15213982/1/320.jpg'
                thumbnailURL='https://img2.carmax.com/img/vehicles/15213982/1/320.jpg'
            />
        );
    }
}

const { map } = styles;

SearchListing.propTypes = {

};

export default SearchListing;
