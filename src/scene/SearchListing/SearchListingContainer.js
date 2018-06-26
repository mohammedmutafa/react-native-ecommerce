import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchListing from './SearchListing';

class SearchListingContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {

            //Filters
            isFilterVisible: false,
            minPriceFilter: undefined,
            maxPriceFilter: undefined,
            selectedCategory: undefined,
            selectedSubCategory: undefined,
            selectedLocation: '',
            isLocationFilterModalViewVisible: false,
            isCategorySelectorModalViewVisible: false,

            //Data Fetch Opertions
            isFetchingData: false
        }
    }

    onRefresh = () => {
        this.setState({
            isFetchingData: true
        });
        //FetchData operation goes here
    }

    changeStateForFilterUI = () => {
        /**
         * Its a reset button.
         * If user clicks back button instead of apply button, clear the filters
         */

        this.setState({
            isFilterVisible: !this.state.isFilterVisible,
            selectedLocation: '',
            minPriceFilter: undefined,
            maxPriceFilter: undefined,
            selectedCategory: undefined,
            selectedSubCategory: undefined,
        });
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
            isFilterVisible,
            maxPriceFilter,
            minPriceFilter,
            selectedCategory,
            selectedSubCategory,
            selectedLocation,
            isCategorySelectorModalViewVisible,
            isLocationFilterModalViewVisible,
            isFetchingData
        } = this.state;

        return (
            <SearchListing
                navigation={this.props.navigation}

                //Filters
                isFilterVisible={isFilterVisible}
                changeStateForFilterUI={this.changeStateForFilterUI}

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

                //Fetch Operation
                isFetchingData={isFetchingData}
                onRefresh={this.onRefresh}
            />
        );
    }
}

SearchListingContainer.propTypes = {
    navigation: PropTypes.object
};

export default SearchListingContainer;
