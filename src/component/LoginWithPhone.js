import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Dimensions
} from 'react-native';
import PropTypes from 'prop-types';
import { Icon, Button } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

import OTPVerificationUIComponent from '../component/OTPVerificationUI';

class LoginWithPhone extends Component {

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

    renderFloatingVerifyPhoneNumberButton = () => {
        const { otpVerificationUIVisible, changeOTPVerificationUIState } = this.props;

        return (
            <View style={styles.floatingMenuButtonStyle}>
                <Icon
                    raised
                    name="chevron-thin-right"
                    type="entypo"
                    color="#2a2a2a"
                    onPress={!otpVerificationUIVisible ? changeOTPVerificationUIState : null}
                />
            </View>
        );
    }

    renderSignInWithPhoneButton = () => {
        const { changePhoneNumberInputUIState } = this.props;
        return (
            <Button
                buttonStyle={styles.loginButtonStyle}
                icon={{ name: 'phone', type: 'feather' }}
                title="Sign In With Phone Number"
                onPress={changePhoneNumberInputUIState}
            />
        );
    }

    renderNoteText = () => {
        return (
            <Button
                buttonStyle={styles.noteContainerStyle}
                icon={{ name: 'ios-warning-outline', type: 'ionicon', color: '#DAA520' }}
                title="Number will be visible to public users."
            />
        );
    }

    renderSeparator = () => <View style={styles.separator} />

    renderEnterPhoneNumberUI = () => {
        const { phoneNumberInputContainer } = styles;
        const { phoneNumberInput, onPhoneNumberInputChange } = this.props;

        return (
            <Animatable.View style={phoneNumberInputContainer} animation="fadeInLeft">
                <Text style={{ color: '#FFFFFF', fontSize: 20 }}>Nepal (+977)</Text>
                {this.renderSeparator()}
                <TextInput
                    style={{ height: 40, color: '#FFFFFF', fontSize: 18, width: window.width / 1.5 }}
                    onChangeText={onPhoneNumberInputChange}
                    value={phoneNumberInput}
                    placeholderTextColor="#C7C7CD"
                    keyboardType="phone-pad"
                    maxLength={10}
                    placeholder="Your Phone Number"
                />
                {this.renderSeparator()}
                <Text style={{ color: '#FFFFFF', fontSize: 14, marginTop: 5 }}>You will receive OTP for verification.</Text>
            </Animatable.View>
        );
    }

    renderSignInWithPhoneUI = () => {
        return (
            <View style={styles.mainConatinerStyle}>
                {this.renderNoteText()}
                {this.renderSignInWithPhoneButton()}
                {this.renderFloatingMenu()}
            </View >
        );
    }

    renderPhoneNumberInputUI = () => {
        return (
            <View style={styles.mainConatinerStyle} >
                <View style={styles.backButtonStyle}>
                    <Icon
                        underlayColor="transparent"
                        name="chevron-with-circle-left"
                        type="entypo"
                        color="#C7C7CD"
                        size={30}
                        onPress={this.props.changePhoneNumberInputUIState}
                    />
                </View>
                {this.renderEnterPhoneNumberUI()}
                {this.renderFloatingVerifyPhoneNumberButton()}
            </View>
        );
    }

    render() {
        const { phoneNumberInputUIVisible, otpVerificationUIVisible, changeOTPVerificationUIState } = this.props;

        if (otpVerificationUIVisible) {
            return <OTPVerificationUIComponent changeOTPVerificationUIState={changeOTPVerificationUIState} />
        }

        return phoneNumberInputUIVisible ? this.renderPhoneNumberInputUI() : this.renderSignInWithPhoneUI();
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
    },
    backButtonStyle: {
        alignSelf: 'center',
        position: 'absolute',
        top: 20,
        left: 20
    }
});

export default LoginWithPhone;

LoginWithPhone.propTypes = {
    changeLoginWithPhoneModalViewState: PropTypes.func,
    phoneNumberInput: PropTypes.string,
    onPhoneNumberInputChange: PropTypes.func,
    phoneNumberInputUIVisible: PropTypes.bool,
    changePhoneNumberInputUIState: PropTypes.func,
    otpVerificationUIVisible: PropTypes.bool,
    changeOTPVerificationUIState: PropTypes.func
}
