import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Dimensions
} from 'react-native';
import { Icon, Button } from 'react-native-elements';

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

    renderSignInWithPhoneButton = () => {
        return <Button
            buttonStyle={styles.loginButtonStyle}
            icon={{ name: 'phone', type: 'feather' }}
            title='Sign In With Phone Number'
        />
    }

    renderNoteText = () => {
        return <Button
            buttonStyle={styles.noteContainerStyle}
            icon={{ name: 'ios-warning-outline', type: 'ionicon' }}
            title='Number will be visible to public users.'
        />
    }

    render() {
        const { mainConatinerStyle, imageBackgroundStyle, semiTransparentLayer } = styles;

        return (
            <View style={mainConatinerStyle}>
                {this.renderNoteText()}
                {this.renderSignInWithPhoneButton()}
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
    loginButtonStyle: {
        backgroundColor: 'transparent',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#f7f7f7'
    },
    noteContainerStyle: {
        backgroundColor: 'transparent',
        marginBottom: 25
    }
});

export default LoginWithPhone;
