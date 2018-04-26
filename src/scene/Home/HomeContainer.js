import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import firebase from 'react-native-firebase';

import Home from './Home';

export default class HomeContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoginWithPhoneModalVisible: false,
            phoneNumberInputUIVisible: false,
            otpVerificationUIVisible: false,
            phoneNumberInput: undefined,
            confirmResult: undefined,
            isOTPVerified: undefined
        };
    }
    componentDidMount() {
        StatusBar.setHidden(true);
        //Temporary Solution .. need to hide for all app screen.
    }

    verifyUserLogin = () => {
        const users = firebase.auth().currentUser;
        console.log('DIPAK');
        console.log(users);
        if (users === undefined || users === null) {
            return false;
        }

        return true;
    }

    changeOTPVerificationUIState = () => {
        const { phoneNumberInput } = this.state;
        //TODO: check phone no is undefined or equal or 10.
        //TODO: show Activity Indicator and prevent user from double click.

        //TODO: it will only use captcha on iOS if you haven't set up the silent notifications as detailed here:
        // https://firebase.google.com/docs/auth/ios/phone-auth#start-receiving-silent-notifications

        firebase.auth().signInWithPhoneNumber(phoneNumberInput)
            .then((confirmResult) => this.setState({
                otpVerificationUIVisible: !this.state.otpVerificationUIVisible,
                confirmResult: confirmResult
            }))
            .catch((error) => console.log('Error is Phone number Authentication'));
    }

    verifyOTP = (codeInput) => {
        const { confirmResult } = this.state;

        if (confirmResult && codeInput.length === 6) {
            confirmResult.confirm(codeInput)
                .then((user) => {
                    this.setState({
                        isOTPVerified: true
                    });
                })
                .catch((error) =>
                    this.setState({
                        isOTPVerified: false
                    }));
        }
    }

    changeLoginWithPhoneModalViewState = () => {
        this.setState({
            isLoginWithPhoneModalVisible: !this.state.isLoginWithPhoneModalVisible,
            phoneNumberInputUIVisible: false,
            otpVerificationUIVisible: false,
            phoneNumberInput: undefined
        });
    }

    changePhoneNumberInputUIState = () => {
        this.setState({ phoneNumberInputUIVisible: !this.state.phoneNumberInputUIVisible });
    }

    onCreateAdButtonPress = () => {
        this.props.navigation.navigate('CreateAd');
    }

    onPhoneNumberInputChange = (text) => {
        let newText = '';

        for (var i = 0; i < text.length; i++) {
            if (text.indexOf(text[i]) > -1) {
                newText = newText + text[i];
            }
        }

        this.setState({ phoneNumberInput: '+917829366565' })
    }

    render() {
        const {
            isLoginWithPhoneModalVisible,
            phoneNumberInput,
            phoneNumberInputUIVisible,
            otpVerificationUIVisible,
            isOTPVerified
        } = this.state;

        return (
            <Home
                isLoginWithPhoneModalVisible={isLoginWithPhoneModalVisible}
                changeLoginWithPhoneModalViewState={this.changeLoginWithPhoneModalViewState}
                phoneNumberInput={phoneNumberInput}
                phoneNumberInputUIVisible={phoneNumberInputUIVisible}
                onPhoneNumberInputChange={this.onPhoneNumberInputChange}
                changePhoneNumberInputUIState={this.changePhoneNumberInputUIState}
                otpVerificationUIVisible={otpVerificationUIVisible}
                changeOTPVerificationUIState={this.changeOTPVerificationUIState}
                navigation={this.props.navigation}
                onCreateAdButtonPress={this.onCreateAdButtonPress}
                isUserLoggedIn={this.verifyUserLogin()}
                verifyOTP={this.verifyOTP}
                isOTPVerified={isOTPVerified}
            />
        );
    }
}

HomeContainer.propTypes = {
    navigation: PropTypes.object
};
