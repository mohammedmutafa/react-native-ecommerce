import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    FlatList,
    Modal
} from 'react-native';
import { Icon } from 'react-native-elements';
import Moment from 'moment';

import { FeedsCard } from '../../component/FeedsCard';
import { Filter } from '../../component/Filter';
import { CustomActivityIndicator } from '../../component/CustomActivityIndicator';

import styles from './styles';
import Color from '../../styles/Color';

const {
    floatingFilterButtonStyle
} = styles;

class SearchListing extends Component {

    keyExtractor = (item, index) => index.toString();

    renderFloatingFilterButton = () => {
        const {
            changeStateForFilterUI,
            isFetchingData
        } = this.props;

        if (isFetchingData) {
            return <View />;
        }

        return (
            <View style={floatingFilterButtonStyle}>
                <Icon
                    raised
                    name="sound-mix"
                    type="entypo"
                    color={Color.golden}
                    underlayColor="transparent"
                    onPress={changeStateForFilterUI}
                    containerStyle={{
                        backgroundColor: Color.floatingButtonBackground,
                        borderWidth: 1,
                        borderColor: Color.golden
                    }}
                />
            </View>
        );
    }

    renderFeedsCard = ({ item }) => {
        const { navigation } = this.props;

        const {
            updatedAt,
            ownerID,
            productPrice,
            productTitle,
            productDescription,
            selectedLocation,
            //Images
            image_0,
            image_1,
            image_2,
            image_3,
            image_4,
            image_5,
            image_6,
            image_7
        } = item;

        let formatedDate = '';
        let formatedDay = '';
        let formatedMonth = '';
        let formatedYear = '';

        const imageDataSource = [
            // { url: coverImageURL, index: 0 },
            { url: image_1, index: 1 },
            { url: image_2, index: 2 },
            { url: image_3, index: 3 },
            { url: image_4, index: 4 },
            { url: image_5, index: 5 },
            { url: image_6, index: 6 },
            { url: image_7, index: 7 }
        ];
        const filteredImageDataSource = [];

        for (const obj of imageDataSource) {
            if (obj && obj.url) {
                filteredImageDataSource.push(obj)
            }
        }

        if (updatedAt) {
            Moment.locale('en');
            //formatedDate = Moment(item.updatedAt).format("Do-MMM-YYYY");
            formatedDay = Moment(item.updatedAt).format("D");
            formatedMonth = Moment(item.updatedAt).format("MMM");
            formatedYear = Moment(item.updatedAt).format("YYYY");

            formatedDate = Moment(item.updatedAt).fromNow();
        }

        return (
            <FeedsCard
                time={formatedDate}
                formatedDay={formatedDay}
                formatedMonth={formatedMonth}
                formatedYear={formatedYear}
                ownerID={ownerID}
                price={productPrice}
                title={productTitle}
                productDescription={productDescription}
                selectedLocation={selectedLocation}
                thumbnailURL={image_0}
                imageDataSource={filteredImageDataSource}
                navigation={navigation}
            />
        );
    }

    renderFlatList = () => {
        const {
            isFetchingData,
            onRefresh,
            postListDataSource
        } = this.props;

        return (
            <FlatList
                onRefresh={onRefresh}
                refreshing={isFetchingData}
                extraData={postListDataSource}
                data={postListDataSource}
                renderItem={this.renderFeedsCard}
                // removeClippedSubviews={false}
                keyExtractor={this.keyExtractor}
                showsVerticalScrollIndicator={false}
            />
        );
    }

    renderFilter = () => {
        const {
            isFilterVisible,
            changeStateForFilterUI,
            onApplyFilterButtonPressed,

            selectedCategory,
            selectedSubCategory,
            selectedLocation,
            maxPriceFilter,
            minPriceFilter,
            onMinPriceInput,
            onMaxPriceInput,
            updateProductCategory,
            isCategorySelectorModalViewVisible,
            isLocationFilterModalViewVisible,
            updateSelectedLocations,
            changeStateForCategorySelectorModalView,
            changeStateForLocationFilterModalView,
            //Sorting
            sortByPriceLowToHigh,
            sortByPriceHighToLow,
            sortByPrice
        } = this.props;

        if (!isFilterVisible) {
            return <View />;
        }

        return (
            <Filter
                //Filters
                isFilterVisible={isFilterVisible}
                changeStateForFilterUI={changeStateForFilterUI}
                onApplyFilterButtonPressed={onApplyFilterButtonPressed}

                maxPriceFilter={maxPriceFilter}
                minPriceFilter={minPriceFilter}
                onMinPriceInput={onMinPriceInput}
                onMaxPriceInput={onMaxPriceInput}

                selectedCategory={selectedCategory}
                selectedSubCategory={selectedSubCategory}
                selectedLocation={selectedLocation}

                isCategorySelectorModalViewVisible={isCategorySelectorModalViewVisible}
                changeStateForCategorySelectorModalView={changeStateForCategorySelectorModalView}
                updateProductCategory={updateProductCategory}

                isLocationFilterModalViewVisible={isLocationFilterModalViewVisible}
                updateSelectedLocations={updateSelectedLocations}
                changeStateForLocationFilterModalView={changeStateForLocationFilterModalView}

                sortByPriceLowToHigh={sortByPriceLowToHigh}
                sortByPriceHighToLow={sortByPriceHighToLow}
                sortByPrice={sortByPrice}
            />
        );
    }

    renderActivityIndicator = () => {
        const { isFetchingDataFromFirestore } = this.props;

        return (
            <Modal
                visible={isFetchingDataFromFirestore}
                transparent={true}
                animationType="none"
                onRequestClose={() => null}
            >
                <CustomActivityIndicator />
            </Modal>
        );
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                {this.renderFlatList()}
                {this.renderFloatingFilterButton()}
                {this.renderFilter()}
                {this.renderActivityIndicator()}
            </View>

        );
    }
}

SearchListing.propTypes = {
    navigation: PropTypes.object,

    //Filters
    isFilterVisible: PropTypes.bool,
    changeStateForFilterUI: PropTypes.func,
    maxPriceFilter: PropTypes.number,
    minPriceFilter: PropTypes.number,
    onMinPriceInput: PropTypes.func,
    onMaxPriceInput: PropTypes.func,
    isCategorySelectorModalViewVisible: PropTypes.bool,
    isLocationFilterModalViewVisible: PropTypes.bool,
    changeStateForCategorySelectorModalView: PropTypes.func,
    updateProductCategory: PropTypes.func,
    selectedCategory: PropTypes.string,
    selectedSubCategory: PropTypes.string,
    changeStateForLocationFilterModalView: PropTypes.func,
    updateSelectedLocations: PropTypes.func,
    selectedLocation: PropTypes.string,

    //Fetch Operation
    isFetchingData: PropTypes.bool,
    onRefresh: PropTypes.func,

    //FireStore
    isFetchingDataFromFirestore: PropTypes.bool,
    postListDataSource: PropTypes.array,

    //Sorting
    sortByPriceLowToHigh: PropTypes.func,
    sortByPriceHighToLow: PropTypes.func,
    sortByPrice: PropTypes.string
};

export default SearchListing;
