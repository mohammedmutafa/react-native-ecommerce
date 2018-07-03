import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

import styles from './styles';

import { CreateAdCoverPhoto } from '../../component/CreateAdCoverPhoto';
import { CreateAdsCard } from '../../component/CreateAdsCard';
import { BackButton } from '../../component/BackButton';
import { NewAdForm } from '../../component/NewAdForm';
import Color from '../../styles/Color';

class CreateAd extends Component {

    renderImageView = () => {
        const { selectedImageSource } = this.props;

        return (
            <CreateAdCoverPhoto
                localImageSource={selectedImageSource ? selectedImageSource : null}
            />
        );
    }

    renderFloatingShareButton = () => {
        const { updateAdInFireStore } = this.props;

        return (
            <TouchableOpacity
                style={floatingShareButtonStyle}
                onPress={updateAdInFireStore}
            >
                <Icon
                    raised
                    name="chevron-thin-right"
                    type="entypo"
                    color={Color.lightWhite}
                    underlayColor="transparent"
                    containerStyle={floatingButtonContainerStyle}
                    onPress={null}
                />
            </TouchableOpacity>
        );
    }

    goBack = () => {
        this.props.navigation.goBack();
    }

    renderBackButton = () => {
        return (
            <BackButton
                style={{ left: 20 }}
                onPress={this.goBack}
            />
        );
    }

    render() {
        const {
            changeStateOfProductConditionModalView,
            isProductConditionModalViewVisible,
            isSelectLocationModalViewVisible,
            changeStateOfSelectLocationModalView,
            updateProductDetails,
            isProductDescriptionModalViewVisible,
            changeStateOfproductDescriptionModalView,
            selectedLocation,
            updateSelectedLocations,
            productPrice,
            onProductPriceInput,
            createAdStatusDone,
            createAdStatus,
            productTitle,
            setProductTitle,
            productDescription,
            setProductDescription,
            changeStateOfProductCategoryModalView,
            isProductCategoryModalViewVisible,
            selectedCategory,
            selectedSubCategory,
            selectedProductCondition,
            setProductConditionUsed,
            setProductConditionNew,
            selectedImageSource,
            selectPhotoTapped,
            navigation
        } = this.props;

        if (createAdStatus) {
            return (
                <NewAdForm
                    selectedImageSource={selectedImageSource}
                    selectPhotoTapped={selectPhotoTapped}

                    selectedCategory={selectedCategory}
                    selectedSubCategory={selectedSubCategory}
                    updateProductDetails={updateProductDetails}
                    isProductCategoryModalViewVisible={isProductCategoryModalViewVisible}
                    changeStateOfProductCategoryModalView={changeStateOfProductCategoryModalView}

                    selectedProductCondition={selectedProductCondition}
                    isProductConditionModalViewVisible={isProductConditionModalViewVisible}
                    changeStateOfProductConditionModalView={changeStateOfProductConditionModalView}
                    setProductConditionUsed={setProductConditionUsed}
                    setProductConditionNew={setProductConditionNew}

                    productPrice={productPrice}
                    onProductPriceInput={onProductPriceInput}

                    selectedLocation={selectedLocation}
                    isSelectLocationModalViewVisible={isSelectLocationModalViewVisible}
                    changeStateOfSelectLocationModalView={changeStateOfSelectLocationModalView}
                    updateSelectedLocations={updateSelectedLocations}

                    createAdStatus={createAdStatus}
                    productTitle={productTitle}
                    setProductTitle={setProductTitle}

                    productDescription={productDescription}
                    changeStateOfproductDescriptionModalView={changeStateOfproductDescriptionModalView}
                    isProductDescriptionModalViewVisible={isProductDescriptionModalViewVisible}
                    setProductDescription={setProductDescription}

                    createAdStatusDone={createAdStatusDone}

                    navigation={navigation}
                />
            );
        }

        return (
            <View style={mainConatinerStyle}>
                <ParallaxScrollView
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    backgroundColor="#FFFFFF"
                    // stickyHeaderHeight={STICKY_HEADER_HEIGHT}
                    parallaxHeaderHeight={SLIDER_HEIGHT}
                    renderForeground={() => (
                        <View style={{ height: SLIDER_HEIGHT, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            {this.renderImageView()}
                        </View>
                    )}
                >
                    <CreateAdsCard
                        selectedLocation={selectedLocation}
                        productPrice={productPrice}
                        selectedProductCondition={selectedProductCondition}
                        productTitle={productTitle}
                        productDescription={productDescription}
                        selectedCategory={selectedCategory}
                        selectedSubCategory={selectedSubCategory}
                        navigation={navigation}
                    />
                </ParallaxScrollView>
                {this.renderFloatingShareButton()}
                {this.renderBackButton()}
            </View >
        );
    }
}

const window = Dimensions.get('window');
const SLIDER_HEIGHT = window.width / 1.7;

const {
    mainConatinerStyle,
    floatingShareButtonStyle,
    floatingButtonContainerStyle
} = styles;

CreateAd.propTypes = {
    //Product Condition
    isProductConditionModalViewVisible: PropTypes.bool,
    selectedProductCondition: PropTypes.string,
    changeStateOfProductConditionModalView: PropTypes.func,
    setProductConditionUsed: PropTypes.func,
    setProductConditionNew: PropTypes.func,

    //Product Category
    updateProductDetails: PropTypes.func,
    isProductCategoryModalViewVisible: PropTypes.bool,
    changeStateOfProductCategoryModalView: PropTypes.func,
    selectedCategory: PropTypes.string,
    selectedSubCategory: PropTypes.string,

    //Product Title:
    productTitle: PropTypes.string,
    setProductTitle: PropTypes.func,

    //Propduct Price
    productPrice: PropTypes.number,
    onProductPriceInput: PropTypes.func,

    //Location
    isSelectLocationModalViewVisible: PropTypes.bool,
    updateSelectedLocations: PropTypes.func,
    changeStateOfSelectLocationModalView: PropTypes.func,
    selectedLocation: PropTypes.string,

    //Details
    changeStateOfproductDescriptionModalView: PropTypes.func,
    setProductDescription: PropTypes.func,
    isProductDescriptionModalViewVisible: PropTypes.bool,
    productDescription: PropTypes.string,

    //Navigation
    navigation: PropTypes.object,
    createAdStatusDone: PropTypes.func,
    createAdStatus: PropTypes.bool,

    //Image
    selectedImageSource: PropTypes.object,
    selectPhotoTapped: PropTypes.func,

    //FireStore
    updateAdInFireStore: PropTypes.func
}

export default CreateAd;
