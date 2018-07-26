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

            //Sorting by Price
            sortByPrice: 'none', //low: Low To High, high : High to Low

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

        const { mainCatSearchKey } = this.props;//selectedCategory
        const { postListDataSource } = this.state;
        let copyPostListDataSource = [...postListDataSource];

        //For order by issue refer this discussion : https://github.com/invertase/react-native-firebase/issues/568
        await postCollectionRef
            .where('selectedCategory', '==', `${mainCatSearchKey}`)
            .orderBy('updatedAt', 'desc')
            .get().then(function (querySnapshot) {
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

    async fetchDatafrom(query) {
        /*this.setState({
            isFetchingDataFromFirestore: true
        });*/

        let copyPostListDataSource = [];

        //For order by issue refer this discussion : https://github.com/invertase/react-native-firebase/issues/568
        await query.get().then(function (querySnapshot) {
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

    onApplyFilterButtonPressed = () => {
        const {
            //Filters
            minPriceFilter,
            maxPriceFilter,
            selectedCategory,
            selectedSubCategory,
            selectedLocation,
            sortByPrice
        } = this.state;

        const filterArray = {
            selectedLocation,
            selectedCategory,
            selectedSubCategory,
            minPriceFilter,
            maxPriceFilter
        }

        this.setState({
            isFilterVisible: !this.state.isFilterVisible
        });

        //Note: Cloud Firestore requires an index for every query,
        let combinedQuery = postCollectionRef;

        Object.entries(filterArray).forEach(([key, value]) => {
            switch (key) {
                case 'selectedLocation':
                    if (value) {
                        combinedQuery = combinedQuery.where('selectedLocation', '==', `${value}`)
                    }
                    break;
                case 'minPriceFilter':
                    if (value) {
                        //dataType of Price should be number
                        combinedQuery = combinedQuery.where('productPrice', '>=', value)
                    }
                    break;
                case 'maxPriceFilter':
                    if (value) {
                        combinedQuery = combinedQuery.where('productPrice', '<=', value)
                    }
                    break;
            }
        });

        if (minPriceFilter || maxPriceFilter) {
            //Add sorting by price fiter
            switch (sortByPrice) {
                case 'low':
                    combinedQuery = combinedQuery.orderBy('productPrice', 'asc')
                    break;
                case 'high':
                    combinedQuery = combinedQuery.orderBy('productPrice', 'desc')
                    break;
                default:
                    break;
            }
        } else {
            switch (sortByPrice) {
                case 'low':
                    combinedQuery = combinedQuery.orderBy('productPrice', 'asc')
                    break;
                case 'high':
                    combinedQuery = combinedQuery.orderBy('productPrice', 'desc')
                    break;
                default:
                    combinedQuery = combinedQuery.orderBy('updatedAt', 'desc')
                    break;
            }
        }

        if (minPriceFilter || maxPriceFilter || selectedCategory || selectedSubCategory || selectedLocation || sortByPrice !== 'none') {
            this.fetchDatafrom(combinedQuery);
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

    sortByPriceLowToHigh = () => {
        this.setState({
            sortByPrice: 'low'
        });
    }

    sortByPriceHighToLow = () => {
        this.setState({
            sortByPrice: 'high'
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
            isFetchingDataFromFirestore,
            sortByPrice
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

                //Sorting
                sortByPriceLowToHigh={this.sortByPriceLowToHigh}
                sortByPriceHighToLow={this.sortByPriceHighToLow}
                sortByPrice={sortByPrice}
            />
        );
    }
}

SearchListingContainer.propTypes = {
    navigation: PropTypes.object
};

export default SearchListingContainer;
