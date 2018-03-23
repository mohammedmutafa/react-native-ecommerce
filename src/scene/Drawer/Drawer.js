import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text
} from 'react-native';

import { BackButton } from '../../component/BackButton';
import styles from './styles';
import Color from '../../styles/Color';

const { conatinerStyle } = styles;

class Drawer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={conatinerStyle}>
                <BackButton
                    style={{ right: 20 }}
                    iconName='ios-close-circle-outline'
                    iconType='ionicon'
                    iconColor={Color.golden}
                    onPress={() => this.props.navigation.navigate('DrawerToggle')} />
            </View>
        );
    }
}

Drawer.propTypes = {
    navigation: PropTypes.object
};

export default Drawer;
