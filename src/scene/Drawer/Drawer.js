import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';
import firebase from 'react-native-firebase';

import { BackButton } from '../../component/BackButton';
import styles from './styles';
import Color from '../../styles/Color';

const { conatinerStyle } = styles;

class Drawer extends Component {

    constructor(props) {
        super(props);
    }

    onPressRow = (key) => {
        switch (key) {
            case 'Logout':
                firebase.auth().signOut();
                break;
        }
    }

    renderRow = (title) => {
        return (
            <TouchableOpacity style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 15,
                marginTop: 20
            }}
            >
                <Text style={{ fontSize: 18, color: Color.lightWhite }}>{title}</Text>
                <Icon
                    underlayColor="transparent"
                    name="chevron-right"
                    type="evilicon"
                    color={Color.golden}
                    size={40}
                    onPress={() => this.renderRow(title)}
                />
            </TouchableOpacity>
        );
    }

    toggleDrawer = () => {
        this.props.navigation.navigate('DrawerClose');
    }

    render() {
        return (
            <View style={conatinerStyle}>
                <BackButton
                    style={{ right: 20, marginTop: 20 }}
                    iconName="ios-close-circle-outline"
                    iconType="ionicon"
                    iconColor={Color.lightWhite}
                    onPress={this.toggleDrawer}
                />
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
