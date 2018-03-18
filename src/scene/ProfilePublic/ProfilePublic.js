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
            </View>

        );
    }
}

const { triangleDown, circle, circleContainer, conatinerStyle, avatarStyle } = styles;

ProfilePublic.propTypes = {

};

export default ProfilePublic;
