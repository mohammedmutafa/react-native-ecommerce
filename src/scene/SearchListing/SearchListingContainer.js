import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchListing from './SearchListing';

class SearchListingContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {

            //Filters
            minPriceFilter: undefined,
            maxPriceFilter: undefined,
            selectedCategory: undefined,
            selectedSubCategory: undefined,
            selectedLocation: '',
            isLocationFilterModalViewVisible: false,
            isCategorySelectorModalViewVisible: false
        }
    }

    changeStateForLocationFilterModalView = () => {
        this.setState({
            isLocationFilterModalViewVisible: !this.state.isLocationFilterModalViewVisible
        });
    }

    changeStateForCategorySelectorModalView = () => {
        this.setState({
            isCategorySelectorModalViewVisible: !this.state.isCategorySelectorModalViewVisible
        });
    }

    onMinPriceInput = (value) => {
        this.setState({
            minPriceFilter: parseInt(value, 10)
        });
    }

    onMaxPriceInput = (value) => {
        this.setState({
            maxPriceFilter: parseInt(value, 10)
        });
    }

    updateProductCategory = (key, value) => {
        switch (key) {
            case 'selectedCategory':
                this.setState({
                    selectedCategory: value[0],
                    selectedSubCategory: value[1]
                });
        }
    }

    updateSelectedLocations = (selectedLocation) => {
        this.setState({
            selectedLocation: selectedLocation,
            isLocationFilterModalViewVisible: false
        });
    }

    render() {
        const {
            maxPriceFilter,
            minPriceFilter,
            selectedCategory,
            selectedSubCategory,
            selectedLocation,
            isCategorySelectorModalViewVisible,
            isLocationFilterModalViewVisible
        } = this.state;

        return (
            <SearchListing
                navigation={this.props.navigation}

                //Filters
                maxPriceFilter={maxPriceFilter}
                minPriceFilter={minPriceFilter}
                onMinPriceInput={this.onMinPriceInput}
                onMaxPriceInput={this.onMaxPriceInput}

                selectedCategory={selectedCategory}
                selectedSubCategory={selectedSubCategory}
                selectedLocation={selectedLocation}

                isCategorySelectorModalViewVisible={isCategorySelectorModalViewVisible}
                changeStateForCategorySelectorModalView={this.changeStateForCategorySelectorModalView}
                updateProductCategory={this.updateProductCategory}

                isLocationFilterModalViewVisible={isLocationFilterModalViewVisible}
                updateSelectedLocations={this.updateSelectedLocations}
                changeStateForLocationFilterModalView={this.changeStateForLocationFilterModalView}
            />
        );
    }
}

SearchListingContainer.propTypes = {
    navigation: PropTypes.object
};

export default SearchListingContainer;
