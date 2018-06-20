import React, { Component } from 'react';
import {
    View,
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

class CreateAd extends Component {

    renderImageView = () => {
        return (
            <CreateAdCoverPhoto
                imageURL='https://firebasestorage.googleapis.com/v0/b/innernepal-dca5b.appspot.com/o/fashion.jpg?alt=media&token=3426181c-22fa-43f1-aac3-177b20676bb5'
            />
        );
    }

    renderFloatingShareButton = () => {
        return (
            <View style={floatingShareButtonStyle}>
                <Icon
                    raised
                    name="chevron-thin-right"
                    type="entypo"
                    color="#DAA520"
                    containerStyle={floatingButtonContainerStyle}
                    onPress={null}
                />
            </View>
        );
    }

    renderBackButton = () => {
        return (
            <BackButton
                style={{ left: 20 }}
                onPress={() => this.props.navigation.goBack()} />
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
            navigation
        } = this.props;

        if (createAdStatus) {
            return (
                <NewAdForm
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
    createAdStatus: PropTypes.bool
}

export default CreateAd;
