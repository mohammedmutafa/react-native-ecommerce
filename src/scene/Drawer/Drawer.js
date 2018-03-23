import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';

import { BackButton } from '../../component/BackButton';
import styles from './styles';
import Color from '../../styles/Color';

const { conatinerStyle } = styles;

class Drawer extends Component {

    constructor(props) {
        super(props);
    }

    renderRow = (title) => {
        return (
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 15,
                marginTop: 20
            }}>
                <TouchableOpacity>
                    <Text style={{ fontSize: 18, color: Color.lightWhite }}>{title}</Text>
                </TouchableOpacity>
                <Icon
                    underlayColor='transparent'
                    name='chevron-right'
                    type='evilicon'
                    color={Color.golden}
                    size={40}
                    onPress={() => console.log('Dipak')}
                />
            </View>
        );
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
                <View style={{ marginTop: 100 }}>
                    {this.renderRow('Profile')}
                    {this.renderRow('Bookmarked Items')}
                    {this.renderRow('Settings')}
                    {this.renderRow('About')}
                    {this.renderRow('Logout')}
                </View>
            </View>
        );
    }
}

Drawer.propTypes = {
    navigation: PropTypes.object
};

export default Drawer;
