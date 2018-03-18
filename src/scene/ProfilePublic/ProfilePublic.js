import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    Image,
    FlatList, Platform,
    TouchableOpacity
} from 'react-native';
import { Avatar, Icon } from 'react-native-elements';

import styles from './styles';
import colors from '../../styles/Color';

import { screenHeight, screenWidth } from '../../utilities/ScreenSize';

class ProfilePublic extends Component {

    render() {
        return (
            <View style={conatinerStyle}>
                <View style={triangleDown}>
                    <View style={circleContainer}>
                        <View style={circle} >
                            <Avatar
                                rounded
                                width={100}
                                height={100}
                                containerStyle={avatarStyle}
                                source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg" }}
                                onPress={() => console.log("Works!")}
                                activeOpacity={0.7}
                            />
                        </View>
                    </View>
                </View>

                <Text style={nameTextStyle}>Dipak Katwal</Text>
                <Text style={addressTextStyle}>Kathmandu, Nepal</Text>

                <View style={socialButtonsContainer}>
                    <Icon
                        raised
                        name='call'
                        type='material'
                        color={colors.lightWhite}
                        containerStyle={iconContainerStyle}
                        onPress={() => console.log('hello')} />
                    <Icon
                        raised
                        name='sc-facebook'
                        type='evilicon'
                        color={colors.lightWhite}
                        containerStyle={iconContainerStyle}
                        onPress={() => console.log('hello')} />
                    <Icon
                        raised
                        name='logo-instagram'
                        type='ionicon'
                        color={colors.lightWhite}
                        containerStyle={iconContainerStyle}
                        onPress={() => console.log('hello')} />
                    <Icon
                        raised
                        name='email'
                        type='zocial'
                        color={colors.lightWhite}
                        containerStyle={iconContainerStyle}
                        onPress={() => console.log('hello')} />
                </View>
                <View style={dividerStyle} />
            </View>
        );
    }
}

const {
    triangleDown,
    circle,
    circleContainer,
    conatinerStyle,
    avatarStyle,
    nameTextStyle,
    addressTextStyle,
    socialButtonsContainer,
    iconContainerStyle,
    dividerStyle
} = styles;

ProfilePublic.propTypes = {

};

export default ProfilePublic;
