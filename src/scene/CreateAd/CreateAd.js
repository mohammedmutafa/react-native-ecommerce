import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    Dimensions,
    ScrollView,
    Platform,
    FlatList,
    TextInput,
    TouchableOpacity,
    Text,
    Modal
} from 'react-native';
import { Icon, FormLabel, FormInput, CheckBox } from 'react-native-elements';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import * as Animatable from 'react-native-animatable';

import Categories from '../../styles/Categories';
import districts from '../../utilities/Functions';
import Colors from '../../styles/Color';
import styles from './styles';

import { CreateAdCoverPhoto } from '../../component/CreateAdCoverPhoto';
import { CreateAdSteps } from '../../component/CreateAdSteps';
import { CreateAdsCard } from '../../component/CreateAdsCard';
import { BackButton } from '../../component/BackButton';

import { NewAdForm } from '../../component/NewAdForm';

const { categoryList } = Categories;

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
                    name='chevron-thin-right'
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
            isCreateAdSpecificationModalViewVisible,
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
            navigation
        } = this.props;

        const { selectedProductCondition, setProductConditionUsed, setProductConditionNew } = this.props;


        if (createAdStatus) {
            return (
                <NewAdForm
                    onProductPriceInput={onProductPriceInput}
                    productPrice={productPrice}

                    selectedProductCondition={selectedProductCondition}
                    setProductConditionUsed={setProductConditionUsed}
                    setProductConditionNew={setProductConditionNew}
                    isProductConditionModalViewVisible={isProductConditionModalViewVisible}
                    changeStateOfProductConditionModalView={changeStateOfProductConditionModalView}

                    isSelectLocationModalViewVisible={isSelectLocationModalViewVisible}
                    changeStateOfSelectLocationModalView={changeStateOfSelectLocationModalView}

                    selectedLocation={selectedLocation}
                    updateSelectedLocations={updateSelectedLocations}

                    productTitle={productTitle}
                    setProductTitle={setProductTitle}
                    productDescription={productDescription}
                    setProductDescription={setProductDescription}

                    updateProductDetails={updateProductDetails}
                    selectedCategory={selectedCategory}
                    selectedSubCategory={selectedSubCategory}
                    createAdStatusDone={createAdStatusDone}
                    isProductCategoryModalViewVisible={isProductCategoryModalViewVisible}
                    changeStateOfProductCategoryModalView={changeStateOfProductCategoryModalView}

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

const STICKY_HEADER_HEIGHT = (110 / 768) * window.height;
const SLIDER_HEIGHT = window.width / 1.7;
const cardWidth = (window.width / 3);
const cardHeight = cardWidth + 40;

const {
    mainConatinerStyle,
    floatingShareButtonStyle,
    containerStyle,
    slide1,
    titleTextStyle,
    decsriptionTextStyle,
    boldSeparator,
    floatingButtonContainerStyle,
    semiTransparentViewStyle,
    specificationTextStyle,
    dateTextStyle,
    textContainerStyle,
    textInputContainerStyle,
    titleDividerStyle,
    photoViewDividerTextstyle,
    photoCardStyle,
    imageRowStyle,
    imageViewFlatListContainerStyle,
    productCategoryContainerstyle,
    headerTextStyle,
    textInputStyle
} = styles;

export default CreateAd;
