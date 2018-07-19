import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Dimensions,
    Modal
} from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

import styles from './styles';

import { CreateAdCoverPhoto } from '../../component/CreateAdCoverPhoto';
import { CreateAdsCard } from '../../component/CreateAdsCard';
import { BackButton } from '../../component/BackButton';
import { NewAdForm } from '../../component/NewAdForm';
import { CustomActivityIndicator } from '../../component/CustomActivityIndicator';

import Color from '../../styles/Color';

class UpdateAdDetails extends Component {

    renderImageView = () => {
        const { selectedImageSource } = this.props;

        return (
            <CreateAdCoverPhoto
                imageURL={selectedImageSource ? selectedImageSource : null}
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

    renderActivityIndicator = () => {
        const { isFirestoreDataUpdating } = this.props;

        return (
            <Modal
                visible={isFirestoreDataUpdating}
                transparent={true}
                animationType="none"
                onRequestClose={() => null}
            >
                <CustomActivityIndicator />
            </Modal>
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
            navigation
        } = this.props;

        if (createAdStatus) {
            return (
                <NewAdForm
                    imageURL={selectedImageSource}
                    isFromUpdateAdDetails={true}

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
                {this.renderActivityIndicator()}
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

UpdateAdDetails.propTypes = {
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
    selectedImageSource: PropTypes.string,

    //FireStore
    updateAdInFireStore: PropTypes.func,
    isFirestoreDataUpdating: PropTypes.bool
}

export default UpdateAdDetails;
