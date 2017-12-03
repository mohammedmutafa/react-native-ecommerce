import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Dimensions
} from 'react-native';
import { Icon } from 'react-native-elements';

class LoginWithPhone extends Component {
    renderFloatingMenu = () => {
        const { changeLoginWithPhoneModalViewState } = this.props;

        return (
            <View style={styles.floatingMenuButtonStyle}>
                <Icon
                    raised
                    name='close'
                    type='evilIcons'
                    color='#f50'
                    onPress={changeLoginWithPhoneModalViewState}
                />
            </View>
        );
    }

    render() {
        const { mainConatinerStyle, imageBackgroundStyle, semiTransparentLayer } = styles;

        return (
            <View style={mainConatinerStyle}>
                <View style={semiTransparentLayer} />
                {this.renderFloatingMenu()}
            </View>
        );
    }
}

const window = Dimensions.get('window');

const styles = StyleSheet.create({
    mainConatinerStyle: {
        flexDirection: 'column',
        flex: 1
    },
    semiTransparentLayer: {
        backgroundColor: 'rgba(60, 60, 60, 0.8)',
        position: 'absolute',
        height: window.height,
        width: window.width
    },
    floatingMenuButtonStyle: {
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 35,
        paddingRight: 15
    }
});

export default LoginWithPhone;
