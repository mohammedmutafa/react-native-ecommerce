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

        };
    }
    componentDidMount() {
        StatusBar.setHidden(true);
        //Temporary Solution .. need to hide for all app screen.
    }

    /*Phone Auth Functions*/
    firePhoneAuthentication = (phoneNumber) => {

    }

    verifyUserLogin = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                return true;
            }
            return false;
        });
    }

    changeLoginWithPhoneModalViewState = () => {
        this.setState({ isLoginWithPhoneModalVisible: !this.state.isLoginWithPhoneModalVisible });
    }

    changePhoneNumberInputUIState = () => {
        this.setState({ phoneNumberInputUIVisible: !this.state.phoneNumberInputUIVisible });
    }

    changeOTPVerificationUIState = () => {
        const { phoneNumberInput } = this.state;
        //TODO: check phone no is undefined or equal or 10.
        //TODO: show Activity Indicator and prevent user from double click.
        firebase.auth().signInWithPhoneNumber(phoneNumberInput)
            .then((confirmResult) => this.setState({
                otpVerificationUIVisible: !this.state.otpVerificationUIVisible
            }))
            .catch((error) => console.log('Error is Phone number Authentication'));
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
        const { isLoginWithPhoneModalVisible, phoneNumberInput, phoneNumberInputUIVisible, otpVerificationUIVisible } = this.state;

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
            />
        );
    }
}

HomeContainer.propTypes = {
    navigation: PropTypes.object
};
