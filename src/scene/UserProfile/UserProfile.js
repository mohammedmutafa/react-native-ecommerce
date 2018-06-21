import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { Icon } from 'react-native-elements';

import { CreateAdCoverPhoto } from '../../component/CreateAdCoverPhoto';
import { CreateAdsCard } from '../../component/CreateAdsCard';
import { BackButton } from '../../component/BackButton';
import { GenderSelector } from '../../component/GenderSelector';

import styles from './styles';
import Color from '../../styles/Color';

class UserProfile extends Component {

    renderSeparator = () => <View style={separatorStyle} />;

    renderChevronIcon = () => (
        <Icon
            name="chevron-thin-right"
            size={20}
            type="entypo"
            color={Color.placeholderWhite}
        />
    );

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

    renderImageView = () => {
        const {
            selectedImageSource,
            selectPhotoTapped
        } = this.props;

        return (
            <View>
                <CreateAdCoverPhoto
                    //localImageSource={selectedImageSource ? selectedImageSource : null}
                    imageURL="data:image/jpeg;base64,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"
                    isUserProfile={true}
                />
                <TouchableOpacity
                    style={cameraButtonStyle}
                >
                    <Icon
                        name="ios-camera-outline"
                        type="ionicon"
                        size={40}
                        color={Color.lightWhite}
                        onPress={selectPhotoTapped}
                    />
                </TouchableOpacity>
            </View>
        );
    }

    renderFirstNameInput = () => {
        const { productPrice, onProductPriceInput } = this.props;

        return (
            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                <Text style={textInputTitleStyle}>First name</Text>
                <TextInput
                    style={productPrice ? textInputTextStyle : textInputPlaceHolderStyle}
                    placeholderTextColor={Color.placeholderWhite}
                    keyboardType="default"
                    placeholder="Enter first name"
                    autoFocus={false}
                    clearButtonMode="always"
                    multiline={false}
                    maxLength={50}
                    // onChangeText={(text) => onProductPriceInput(text)}
                    value={productPrice}
                    underlineColorAndroid="transparent"
                />
            </View>
        );
    }

    renderLastNameInput = () => {
        const { productPrice, onProductPriceInput } = this.props;

        return (
            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                <Text style={textInputTitleStyle}>Last name</Text>
                <TextInput
                    style={productPrice ? textInputTextStyle : textInputPlaceHolderStyle}
                    placeholderTextColor={Color.placeholderWhite}
                    keyboardType="default"
                    placeholder="Enter last name"
                    autoFocus={false}
                    clearButtonMode="always"
                    multiline={false}
                    maxLength={50}
                    // onChangeText={(text) => onProductPriceInput(text)}
                    value={productPrice}
                    underlineColorAndroid="transparent"
                />
            </View>
        );
    }

    renderGenderSelector = () => {
        const { selectedProductCondition, changeStateOfProductConditionModalView } = this.props;

        return (
            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                <Text style={textInputTitleStyle}>Gender</Text>
                <TouchableOpacity
                    style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
                    onPress={changeStateOfProductConditionModalView}
                >
                    <Text style={selectedProductCondition ? textInputTextStyle : textInputPlaceHolderStyle}>{selectedProductCondition ? selectedProductCondition : 'Select Gender'}</Text>
                    {this.renderChevronIcon()}
                </TouchableOpacity>
            </View>
        );
    }

    renderEmailInput = () => {
        const { productPrice, onProductPriceInput } = this.props;

        return (
            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                <Text style={textInputTitleStyle}>Email</Text>
                <TextInput
                    style={productPrice ? textInputTextStyle : textInputPlaceHolderStyle}
                    placeholderTextColor={Color.placeholderWhite}
                    keyboardType="email-address"
                    placeholder="Enter email address"
                    autoFocus={false}
                    clearButtonMode="always"
                    multiline={false}
                    maxLength={50}
                    // onChangeText={(text) => onProductPriceInput(text)}
                    value={productPrice}
                    underlineColorAndroid="transparent"
                />
            </View>
        );
    }

    renderAddressInput = () => {
        const { productPrice, onProductPriceInput } = this.props;

        return (
            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                <Text style={textInputTitleStyle}>Address</Text>
                <TextInput
                    style={productPrice ? textInputTextStyle : textInputPlaceHolderStyle}
                    placeholderTextColor={Color.placeholderWhite}
                    keyboardType="default"
                    placeholder="Enter address"
                    autoFocus={false}
                    clearButtonMode="always"
                    multiline={true}
                    maxLength={200}
                    // onChangeText={(text) => onProductPriceInput(text)}
                    value={productPrice}
                    underlineColorAndroid="transparent"
                />
            </View>
        );
    }

    renderGenderModalSelection = () => {
        const {
            isProductConditionModalViewVisible,
            selectedProductCondition,
            setProductConditionUsed,
            setProductConditionNew
        } = this.props;

        return (
            <GenderSelector
                isProductConditionModalViewVisible={false}
                selectedProductCondition={selectedProductCondition}
                setProductConditionUsed={setProductConditionUsed}
                setProductConditionNew={setProductConditionNew}
            />
        );
    }

    render() {
        return (
            <View style={container}>
                <ScrollView
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    style={container}
                >
                    {this.renderImageView()}
                    <View style={{ padding: 20 }}>
                        {this.renderFirstNameInput()}
                        {this.renderSeparator()}
                        {this.renderLastNameInput()}
                        {this.renderSeparator()}
                        <Text style={{ fontSize: 18, fontWeight: 'bold', paddingVertical: 15, color: Color.dark }}>Private details</Text>
                        {this.renderGenderSelector()}
                        {this.renderSeparator()}
                        {this.renderEmailInput()}
                        {this.renderSeparator()}
                        {this.renderAddressInput()}
                        {this.renderSeparator()}
                        {this.renderGenderModalSelection()}
                        <View style={{ height: 50 }} />
                    </View>
                </ScrollView>
                {/*this.renderFloatingShareButton()}
    {this.renderBackButton()*/}
            </View >
        );
    }
}

const {
    floatingShareButtonStyle,
    floatingButtonContainerStyle,
    container,
    textInputTextStyle,
    textInputPlaceHolderStyle,
    textInputTitleStyle,
    floatingNextButtonStyle,
    cameraButtonStyle,
    separatorStyle
} = styles;

UserProfile.propTypes = {
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
    selectPhotoTapped: PropTypes.func
}


export default UserProfile;
