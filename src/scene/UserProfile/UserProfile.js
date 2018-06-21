import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    Image,
    FlatList,
    Platform,
    Dimensions,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

import styles from './styles';

class UserProfile extends Component {
    render() {
        return (
            <View />
        )
    }
}

UserProfile.propTypes = {
    navigation: PropTypes.object
};

export default UserProfile;
