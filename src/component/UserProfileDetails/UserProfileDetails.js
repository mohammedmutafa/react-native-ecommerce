
import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground
} from 'react-native';
import PropTypes from 'prop-types';
import { Avatar, Button } from 'react-native-elements';

import styles from './styles';
import Fonts from '../../styles/Fonts';

/* eslint-disable */
const goldenGradientBackground = require('../../../assets/images/background_golden_gradient.jpg');
/* eslint-enable */

const {
    container,
    nameTextStyle,
    titleTextStyle,
    valueTextStyle,
    editProfileButtonStyle
} = styles;

export class UserProfileDetails extends Component {

    renderAvatar = () => {
        const {
            firstName,
            lastName,
            profileImageURL
        } = this.props;

        return (
            <View
                style={{ flex: 1, flexDirection: 'column', alignItems: 'center', marginVertical: 10 }}
            >
                <Avatar
                    rounded
                    width={100}
                    height={100}
                    // containerStyle={avatarStyle}
                    source={{ uri: profileImageURL }}
                    activeOpacity={0.7}
                />
                <Text style={nameTextStyle}>{firstName + ' ' + lastName}</Text>
            </View>

        );
    }

    renderUserInfo = (key, value) => {
        return (
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <Text style={titleTextStyle}>{key}</Text>
                <Text style={valueTextStyle}>{value}</Text>
            </View>
        );
    }

    renderEditProfileButton = () => {
        const { onPressEditButton } = this.props;
        return (
            <View style={{ flex: 1, alignItems: 'flex-end', flexDirection: 'row', marginBottom: 20 }}>
                <Button
                    buttonStyle={editProfileButtonStyle}
                    icon={{ name: 'edit', type: 'feather' }}
                    fontFamily={Fonts.CharterBT}
                    title="Edit Profile"
                    onPress={onPressEditButton}
                />
            </View>
        );
    }

    renderDetails = () => {
        const {
            userID,
            address,
            gender
        } = this.props;

        return (
            <View style={{ flex: 2, flexDirection: 'column', marginTop: 30 }}>
                {this.renderUserInfo('Telephone', userID)}
                {this.renderUserInfo('Gender', gender)}
                {this.renderUserInfo('Address', address)}
            </View>
        );
    }

    render() {
        return (
            <ImageBackground
                source={goldenGradientBackground}
                style={container}
            >
                {this.renderAvatar()}
                {this.renderDetails()}
                {this.renderEditProfileButton()}
            </ImageBackground>
        );
    }
}

UserProfileDetails.propTypes = {
    onPressEditButton: PropTypes.func,
    userID: PropTypes.string,
    address: PropTypes.string,
    gender: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    profileImageURL: PropTypes.string
};
