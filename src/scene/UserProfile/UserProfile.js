import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    TextInput,
    Modal,
    TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { CreateAdCoverPhoto } from '../../component/CreateAdCoverPhoto';
//import { BackButton } from '../../component/BackButton';
import { GenderSelector } from '../../component/GenderSelector';
import { SubmitFormButton } from '../../component/SubmitFormButton';
import { CustomActivityIndicator } from '../../component/CustomActivityIndicator';

import styles from './styles';
import Color from '../../styles/Color';
//import { BottomOverlayButton } from '../../component/BottomOverlayButton';

class UserProfile extends Component {

    renderSeparator = () => <View style={separatorStyle} />;

    renderChevronIcon = () => (
        <Icon
            name="chevron-thin-right"
            size={20}
            type="entypo"
            underlayColor="transparent"
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
            profileImageURL,
            selectPhotoTapped
        } = this.props;

        return (
            <View>
                <CreateAdCoverPhoto
                    localImageSource={selectedImageSource ? selectedImageSource : null}
                    imageURL={profileImageURL}
                    isUserProfile={true}
                />
                <TouchableOpacity
                    style={cameraButtonStyle}
                >
                    <Icon
                        name="ios-camera-outline"
                        type="ionicon"
                        size={40}
                        underlayColor="transparent"
                        color={Color.lightWhite}
                        onPress={selectPhotoTapped}
                    />
                </TouchableOpacity>
            </View>
        );
    }

    renderFirstNameInput = () => {
        const {
            firstName,
            onFirstNameInput
        } = this.props;

        return (
            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                <Text style={textInputTitleStyle}>First name</Text>
                <TextInput
                    style={firstName ? textInputTextStyle : textInputPlaceHolderStyle}
                    placeholderTextColor={Color.placeholderWhite}
                    keyboardType="default"
                    placeholder="Enter first name"
                    autoFocus={false}
                    clearButtonMode="always"
                    multiline={false}
                    maxLength={50}
                    onChangeText={onFirstNameInput}
                    value={firstName}
                    underlineColorAndroid="transparent"
                />
            </View>
        );
    }

    renderLastNameInput = () => {
        const {
            lastName,
            onLastNameInput
        } = this.props;

        return (
            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                <Text style={textInputTitleStyle}>Last name</Text>
                <TextInput
                    style={lastName ? textInputTextStyle : textInputPlaceHolderStyle}
                    placeholderTextColor={Color.placeholderWhite}
                    keyboardType="default"
                    placeholder="Enter last name"
                    autoFocus={false}
                    clearButtonMode="always"
                    multiline={false}
                    maxLength={50}
                    onChangeText={onLastNameInput}
                    value={lastName}
                    underlineColorAndroid="transparent"
                />
            </View>
        );
    }

    renderGenderSelector = () => {
        const {
            gender,
            changeStateOfSelectGenderModalView
        } = this.props;

        return (
            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                <Text style={textInputTitleStyle}>Gender</Text>
                <TouchableOpacity
                    style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
                    onPress={changeStateOfSelectGenderModalView}
                >
                    <Text style={gender ? textInputTextStyle : textInputPlaceHolderStyle}>{gender ? gender : 'Select Gender'}</Text>
                    {this.renderChevronIcon()}
                </TouchableOpacity>
            </View>
        );
    }

    renderEmailInput = () => {
        const {
            email,
            onEmailInput
        } = this.props;

        return (
            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                <Text style={textInputTitleStyle}>Email</Text>
                <TextInput
                    style={email ? textInputTextStyle : textInputPlaceHolderStyle}
                    placeholderTextColor={Color.placeholderWhite}
                    keyboardType="email-address"
                    placeholder="Enter email address"
                    autoFocus={false}
                    clearButtonMode="always"
                    multiline={false}
                    maxLength={50}
                    onChangeText={onEmailInput}
                    value={email}
                    underlineColorAndroid="transparent"
                />
            </View>
        );
    }

    renderAddressInput = () => {
        const {
            address,
            onAddressInput
        } = this.props;

        return (
            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                <Text style={textInputTitleStyle}>Address</Text>
                <TextInput
                    style={address ? textInputTextStyle : textInputPlaceHolderStyle}
                    placeholderTextColor={Color.placeholderWhite}
                    keyboardType="default"
                    placeholder="Enter address"
                    autoFocus={false}
                    clearButtonMode="always"
                    multiline={true}
                    maxLength={200}
                    onChangeText={onAddressInput}
                    value={address}
                    underlineColorAndroid="transparent"
                />
            </View>
        );
    }

    renderGenderModalSelection = () => {
        const {
            isSelectGenderModalViewVisible,
            setGenderFemale,
            setGenderMale,
            setGenderOther,
            gender
        } = this.props;

        return (
            <GenderSelector
                isSelectGenderModalViewVisible={isSelectGenderModalViewVisible}
                setGenderFemale={setGenderFemale}
                setGenderMale={setGenderMale}
                setGenderOther={setGenderOther}
                gender={gender}
            />
        );
    }

    renderOverlayButton = () => {
        const { updateUserInfo } = this.props;

        return (
            <SubmitFormButton
                onPress={updateUserInfo}
            />
        );
    }

    renderActivityIndicator = () => {
        const { isUserDataUpdating } = this.props;

        return (
            <Modal
                visible={isUserDataUpdating}
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
            <View style={container}>
                <KeyboardAwareScrollView
                    // bounces={false}
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
                </KeyboardAwareScrollView>
                {/*this.renderFloatingShareButton()}
                {this.renderBackButton()*/}
                {this.renderOverlayButton()}
                {this.renderActivityIndicator()}
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
    //FirstName
    firstName: PropTypes.string,
    onFirstNameInput: PropTypes.func,

    //Last Name
    lastName: PropTypes.string,
    onLastNameInput: PropTypes.func,

    //Gender
    gender: PropTypes.string,
    setGenderFemale: PropTypes.func,
    setGenderMale: PropTypes.func,
    setGenderOther: PropTypes.func,

    //Email
    email: PropTypes.string,
    onEmailInput: PropTypes.func,

    //Address
    address: PropTypes.string,
    onAddressInput: PropTypes.func,

    isSelectGenderModalViewVisible: PropTypes.bool,
    changeStateOfSelectGenderModalView: PropTypes.func,

    //Navigation
    navigation: PropTypes.object,

    //Image
    selectedImageSource: PropTypes.object,
    selectPhotoTapped: PropTypes.func,
    profileImageURL: PropTypes.string,

    //FireStore
    updateUserInfo: PropTypes.func,
    isUserDataUpdating: PropTypes.bool,

}

export default UserProfile;
