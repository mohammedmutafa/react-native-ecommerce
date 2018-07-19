
import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import styles from './styles';
import Color from '../../styles/Color';
import { numberWithCommas } from '../../utilities/Functions';

import { CreateAdCoverPhoto } from '../CreateAdCoverPhoto';
import { CategorySelector } from '../CategorySelector';
import { ConditionSelector } from '../ConditionSelector';
import { LocationSelector } from '../LocationSelector/LocationSelector';
import { ProductDetailsInput } from '../ProductDetailsInput';
import { BackButton } from '../BackButton';

const {
    container,
    textInputTextStyle,
    textInputPlaceHolderStyle,
    textInputTitleStyle,
    floatingNextButtonStyle,
    cameraButtonStyle,
    separatorStyle
} = styles;

export class NewAdForm extends Component {

    renderImageView = () => {
        const {
            imageURL,
            selectPhotoTapped,
            selectedImageSource,
            isFromUpdateAdDetails
        } = this.props;

        if (isFromUpdateAdDetails) {
            return (
                <CreateAdCoverPhoto
                    imageURL={imageURL ? imageURL : null}
                />
            );
        }

        return (
            <View>
                <CreateAdCoverPhoto
                    localImageSource={selectedImageSource ? selectedImageSource : null}
                />
                <TouchableOpacity
                    style={cameraButtonStyle}
                >
                    <Icon
                        name="ios-camera-outline"
                        type="ionicon"
                        size={40}
                        color={Color.lightWhite}
                        underlayColor="transparent"
                        onPress={selectPhotoTapped}
                    />
                </TouchableOpacity>
            </View>
        );
    }

    renderSeparator = () => <View style={separatorStyle} />;

    renderChevronIcon = () => (
        <Icon
            name="chevron-thin-right"
            size={20}
            type="entypo"
            color={Color.placeholderWhite}
        />
    );

    goBack = () => {
        this.props.navigation.goBack();
    }

    renderBackButton = () => (
        <BackButton
            style={{ left: 20 }}
            onPress={this.goBack}
        />
    );

    renderNextButton = () => {
        const { createAdStatusDone } = this.props;

        return (
            <TouchableOpacity
                onPress={createAdStatusDone}
                style={floatingNextButtonStyle}
            >
                <Icon
                    raised
                    name="arrow-right"
                    type="material-community"
                    color={Color.lightWhite}
                    //onPress={isUserLoggedIn ? onCreateAdButtonPress : changeLoginWithPhoneModalViewState}
                    containerStyle={{
                        backgroundColor: Color.dark,
                        borderWidth: 0.5,
                        borderColor: Color.golden
                    }}
                />
            </TouchableOpacity>
        );
    }

    renderPriceTextInput = () => {
        const { productPrice, onProductPriceInput } = this.props;
        const value = productPrice ? numberWithCommas(productPrice) : undefined;

        return (
            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                <Text style={textInputTitleStyle}>Price</Text>
                <TextInput
                    style={value ? textInputTextStyle : textInputPlaceHolderStyle}
                    placeholderTextColor={Color.placeholderWhite}
                    keyboardType="numeric"
                    placeholder="₹ (Price)"
                    autoFocus={false}
                    clearButtonMode="always"
                    multiline={false}
                    maxLength={13}
                    onChangeText={(text) => onProductPriceInput(text.replace(/[^0-9]/g, ''))}
                    value={value ? `₹ ${value}` : null}
                    underlineColorAndroid="transparent"
                />
            </View>
        );
    }

    renderTitleTextInput = () => {
        const { productTitle, setProductTitle } = this.props;

        return (
            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                <Text style={textInputTitleStyle}>Title</Text>
                <TextInput
                    style={textInputTextStyle}
                    placeholderTextColor={Color.placeholderWhite}
                    onChangeText={setProductTitle}
                    placeholder="Enter Title"
                    clearButtonMode="always"
                    multiline={false}
                    maxLength={50}
                    keyboardType="default"
                    autoFocus={false}
                    value={productTitle}
                    underlineColorAndroid="transparent"
                />
            </View>
        );
    }

    renderProductCondition = () => {
        const { selectedProductCondition, changeStateOfProductConditionModalView } = this.props;

        return (
            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                <Text style={textInputTitleStyle}>Condition</Text>
                <TouchableOpacity
                    style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
                    onPress={changeStateOfProductConditionModalView}
                >
                    <Text style={selectedProductCondition ? textInputTextStyle : textInputPlaceHolderStyle}>{selectedProductCondition ? selectedProductCondition : 'Select Condition'}</Text>
                    {this.renderChevronIcon()}
                </TouchableOpacity>
            </View>
        );
    }

    renderProductDescription = () => {
        const {
            changeStateOfproductDescriptionModalView,
            productDescription
        } = this.props;

        return (
            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                <Text style={textInputTitleStyle}>Details</Text>
                <TouchableOpacity
                    style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
                    onPress={changeStateOfproductDescriptionModalView}
                >
                    <Text
                        style={productDescription ? textInputTextStyle : textInputPlaceHolderStyle}
                        ellipsizeMode="tail"
                        numberOfLines={1}
                    >
                        {productDescription ? productDescription : 'Enter Details'}
                    </Text>
                    {this.renderChevronIcon()}
                </TouchableOpacity>
            </View>
        );
    }

    renderProductCategory = () => {
        const { changeStateOfProductCategoryModalView, selectedCategory, selectedSubCategory } = this.props;

        return (
            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                <Text style={textInputTitleStyle}>Category</Text>
                <TouchableOpacity
                    style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
                    onPress={changeStateOfProductCategoryModalView}
                >
                    <Text style={selectedCategory ? textInputTextStyle : textInputPlaceHolderStyle}>{selectedCategory ? (selectedCategory + '/' + selectedSubCategory) : 'Select Category'}</Text>
                    {this.renderChevronIcon()}
                </TouchableOpacity>
            </View>
        );
    }

    renderLocationSelector = () => {
        const {
            changeStateOfSelectLocationModalView,
            selectedLocation
        } = this.props;

        return (
            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                <Text style={textInputTitleStyle}>Location</Text>
                <TouchableOpacity
                    style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
                    onPress={changeStateOfSelectLocationModalView}
                >
                    <Text style={selectedLocation ? textInputTextStyle : textInputPlaceHolderStyle}>{selectedLocation ? selectedLocation : 'Select Location'}</Text>
                    {this.renderChevronIcon()}
                </TouchableOpacity>
            </View>
        );
    }

    renderProductConditionModalSelection = () => {
        const {
            isProductConditionModalViewVisible,
            selectedProductCondition,
            setProductConditionUsed,
            setProductConditionNew
        } = this.props;

        return (
            <ConditionSelector
                isProductConditionModalViewVisible={isProductConditionModalViewVisible}
                selectedProductCondition={selectedProductCondition}
                setProductConditionUsed={setProductConditionUsed}
                setProductConditionNew={setProductConditionNew}
            />
        );
    }

    renderProductCategoryModalSelection = () => {
        const {
            updateProductDetails,
            changeStateOfProductCategoryModalView,
            selectedCategory,
            selectedSubCategory,
            isProductCategoryModalViewVisible
        } = this.props;

        return (
            <CategorySelector
                isProductCategoryModalViewVisible={isProductCategoryModalViewVisible}
                updateProductDetails={updateProductDetails}
                createAdStatusDone={changeStateOfProductCategoryModalView}//Hide Modal view for now instead of finishing the form UI.
                selectedCategory={selectedCategory}
                selectedSubCategory={selectedSubCategory}
            />
        );
    }

    renderLocationModalSelection = () => {
        const {
            isSelectLocationModalViewVisible,
            updateSelectedLocations,
            selectedLocation
        } = this.props;

        return (
            <LocationSelector
                isSelectLocationModalViewVisible={isSelectLocationModalViewVisible}
                updateSelectedLocations={updateSelectedLocations}
                selectedLocation={selectedLocation}
            />
        );
    }

    renderProductDetailsModalSelection = () => {
        const {
            isProductDescriptionModalViewVisible,
            setProductDescription
        } = this.props;

        return (
            <ProductDetailsInput
                isProductDescriptionModalViewVisible={isProductDescriptionModalViewVisible}
                setProductDescription={setProductDescription}
            />
        );
    }

    render() {
        return (
            <View
                style={container}
            >
                <KeyboardAwareScrollView
                    //  bounces={false}
                    showsVerticalScrollIndicator={false}
                    style={container}
                >
                    {this.renderImageView()}
                    <View style={{ padding: 20 }}>
                        {this.renderPriceTextInput()}
                        {this.renderSeparator()}
                        {this.renderTitleTextInput()}
                        {this.renderSeparator()}
                        {this.renderProductCondition()}
                        {this.renderSeparator()}
                        {this.renderProductDescription()}
                        {this.renderSeparator()}
                        {this.renderProductCategory()}
                        {this.renderSeparator()}
                        {this.renderLocationSelector()}
                        {this.renderSeparator()}
                        {this.renderProductConditionModalSelection()}
                        {this.renderProductCategoryModalSelection()}
                        {this.renderLocationModalSelection()}
                        {this.renderProductDetailsModalSelection()}
                        <View style={{ height: 50 }} />
                    </View>
                </KeyboardAwareScrollView>
                {this.renderBackButton()}
                {this.renderNextButton()}
            </View>
        );
    }
}

NewAdForm.propTypes = {
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

    //Image
    selectedImageSource: PropTypes.object,
    imageURL: PropTypes.string,
    isFromUpdateAdDetails: PropTypes.bool,
    selectPhotoTapped: PropTypes.func
}
