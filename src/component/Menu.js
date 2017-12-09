import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Dimensions
} from 'react-native';
import { Icon, Button } from 'react-native-elements';

class Menu extends Component {
    renderFloatingMenu = () => {
        const { changeLoginWithPhoneModalViewState } = this.props;

        return (
            <View style={styles.floatingMenuButtonStyle}>
                <Icon
                    raised
                    name="close"
                    type="evilIcons"
                    color="#2a2a2a"
                    onPress={changeLoginWithPhoneModalViewState}
                />
            </View>
        );
    }

    renderMenuButton = (title, iconName, iconType) => {
        return <Button
            buttonStyle={styles.noteContainerStyle}
            icon={{ name: iconName, type: iconType }}
            title={title}
        />
    }

    render() {
        const { mainConatinerStyle, imageBackgroundStyle, semiTransparentLayer } = styles;

        return (
            <View style={mainConatinerStyle}>
                {this.renderMenuButton('Profile', 'user', 'simple-line-icon')}
                {this.renderMenuButton('Sell Product', 'ios-cash-outline', 'ionicon')}
                {this.renderMenuButton('Location Filter', 'location', 'evilicon')}

                {this.renderFloatingMenu()}
            </View>
        );
    }
}

const window = Dimensions.get('window');

const styles = StyleSheet.create({
    mainConatinerStyle: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(60, 60, 60, 0.8)'
    },
    floatingMenuButtonStyle: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 35
    },
    noteContainerStyle: {
        backgroundColor: 'transparent',
        marginBottom: 15
    }
});

export default Menu;
