import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchListing from './SearchListing';

class SearchListingContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return <SearchListing />
    }
}

SearchListingContainer.propTypes = {

};

export default SearchListingContainer;
