import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchListing from './SearchListing';

import {
    postCollectionRef
} from '../../utilities/DBReferences';

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
            isFetchingData: false,
            //FireStore
            postListDataSource: [],
            isFetchingDataFromFirestore: false
        }
    }

    async componentWillMount() {
        this.setState({
            isFetchingDataFromFirestore: true
        });

        const { postListDataSource } = this.state;
        let copyPostListDataSource = [...postListDataSource];

        //For order by issue refer this discussion : https://github.com/invertase/react-native-firebase/issues/568
        await postCollectionRef.orderBy('updatedAt', 'desc').get().then(function (querySnapshot) {
            let dSArray = [];
            querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                dSArray.push(doc.data());
            });
            copyPostListDataSource = [...copyPostListDataSource, ...dSArray];
        }).catch((err) => {
            this.setState({
                isFetchingDataFromFirestore: false
            });
        });

        this.setState({
            postListDataSource: copyPostListDataSource,
            isFetchingDataFromFirestore: false
        });
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

        //TODO click filter icon should not reset it, only when back button pressed

        this.setState({
            isFilterVisible: !this.state.isFilterVisible,
            selectedLocation: '',
            minPriceFilter: undefined,
            maxPriceFilter: undefined,
            selectedCategory: undefined,
            selectedSubCategory: undefined,
        });
    }

    onApplyFilterButtonPressed = () => {
        this.setState({
            isFilterVisible: !this.state.isFilterVisible
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
            isFetchingData,
            postListDataSource,
            isFetchingDataFromFirestore
        } = this.state;

        return (
            <SearchListing
                navigation={this.props.navigation}

                //Filters
                isFilterVisible={isFilterVisible}
                changeStateForFilterUI={this.changeStateForFilterUI}
                onApplyFilterButtonPressed={this.onApplyFilterButtonPressed}

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

                //FireStore
                postListDataSource={postListDataSource}
                isFetchingDataFromFirestore={isFetchingDataFromFirestore}
            />
        );
    }
}

SearchListingContainer.propTypes = {
    navigation: PropTypes.object
};

export default SearchListingContainer;
