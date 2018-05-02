import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import firebase from 'react-native-firebase';

import Home from './Home';

export default class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.unsubscribe = null;
        this.state = {
            isLoginWithPhoneModalVisible: false,
            phoneNumberInputUIVisible: false,
            otpVerificationUIVisible: false,
            phoneNumberInput: undefined,
            confirmResult: undefined,
            isOTPVerified: undefined,
            user: undefined
        };
    }

    componentDidMount() {
        StatusBar.setHidden(true);
        //Temporary Solution .. need to hide for all app screen.

        //More Details: https://firebase.google.com/docs/auth/web/manage-users
        this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user: user.toJSON() });
            } else {
                // User has been signed out, reset the state
                this.setState({
                    isLoginWithPhoneModalVisible: false,
                    phoneNumberInputUIVisible: false,
                    otpVerificationUIVisible: false,
                    phoneNumberInput: undefined
                });
            }
        });
    }

    componentWillReceiveProps(nextProps) {
        //TODO Refresh Home page after Logout pressed on Drawer with Redux.
    }

    componentWillUnmount() {
        if (this.unsubscribe) this.unsubscribe();
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
            phoneNumberInput: undefined,
            isOTPVerified: undefined,
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
            isOTPVerified,
            user
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
                isUserLoggedIn={user ? true : false}
                verifyOTP={this.verifyOTP}
                isOTPVerified={isOTPVerified}
            />
        );
    }
}

HomeContainer.propTypes = {
    navigation: PropTypes.object
};
