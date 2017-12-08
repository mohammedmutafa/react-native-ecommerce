import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
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
                    color='#2a2a2a'
                    onPress={changeLoginWithPhoneModalViewState}
                />
            </View>
        );
    }

    renderFloatingVerifyPhoneNumberButton = () => {
        const { changeLoginWithPhoneModalViewState } = this.props;

        return (
            <View style={styles.floatingMenuButtonStyle}>
                <Icon
                    raised
                    name='chevron-thin-right'
                    type='entypo'
                    color='#2a2a2a'
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
            icon={{ name: 'ios-warning-outline', type: 'ionicon', color: '#DAA520' }}
            title='Number will be visible to public users.'
        />
    }

    renderSeparator = () => {
        return <View style={styles.separator} />
    }

    renderEnterPhoneNumberUI = () => {
        const { phoneNumberInputContainer } = styles;
        const { phoneNumberInput, onPhoneNumberInputChange } = this.props;

        return (
            <View style={phoneNumberInputContainer} >
                <Text style={{ color: '#FFFFFF', fontSize: 20 }}> Nepal  (+977) </Text>
                {this.renderSeparator()}
                <TextInput
                    style={{ height: 40 }}
                    onChangeText={onPhoneNumberInputChange}
                    value={phoneNumberInput}
                    placeholderTextColor='#C7C7CD'
                    color='#FFFFFF'
                    keyboardType='phone-pad'
                    maxLength={10}
                    placeholder="Your Phone Number"
                />
                {this.renderSeparator()}
                <Text style={{ color: '#FFFFFF', fontSize: 14, marginTop: 5 }}>You will receive OTP for verification.</Text>
            </View>
        );
    }

    render() {
        const { mainConatinerStyle, imageBackgroundStyle, semiTransparentLayer } = styles;

        return (
            <View style={mainConatinerStyle}>
                {/*this.renderNoteText()}
                {this.renderSignInWithPhoneButton()*/}
                {this.renderEnterPhoneNumberUI()}
                {/*this.renderFloatingMenu()*/}
                {this.renderFloatingVerifyPhoneNumberButton()}
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
        backgroundColor: '#2a2a2a'//'rgba(60, 60, 60, 0.8)'
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
        borderColor: '#DAA520'
    },
    noteContainerStyle: {
        backgroundColor: 'transparent',
        marginBottom: 25
    },
    phoneNumberInputContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    separator: {
        height: 0.5,//StyleSheet.hairlineWidth,
        backgroundColor: '#DAA520',
        marginTop: 15,
        marginBottom: 15,
        width: window.width / 1.5,
    }
});

export default LoginWithPhone;
