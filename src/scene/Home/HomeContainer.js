import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import Home from './Home';

export default class HomeContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoginWithPhoneModalVisible: false,
            phoneNumberInput: undefined,
            phoneNumberInputUIVisible: false,
            otpVerificationUIVisible: false
        };
    }
    componentDidMount() {
        StatusBar.setHidden(true);
        //Temporary Solution .. need to hide for all app screen.
    }

    changeLoginWithPhoneModalViewState = () => {
        this.setState({ isLoginWithPhoneModalVisible: !this.state.isLoginWithPhoneModalVisible });
    }

    changePhoneNumberInputUIState = () => {
        this.setState({ phoneNumberInputUIVisible: !this.state.phoneNumberInputUIVisible });
    }

    changeOTPVerificationUIState = () => {
        this.setState({ otpVerificationUIVisible: !this.state.otpVerificationUIVisible });
    }

    onCreateAdButtonPress = () => {
        this.props.navigation.navigate('CreateAd');
    }

    onPhoneNumberInputChange = (text) => {
        let newText = '';
        let numbers = '1234567';

        for (var i = 0; i < text.length; i++) {
            if (numbers.indexOf(text[i]) > -1) {
                newText = newText + text[i];
            }
        }

        this.setState({ phoneNumberInput: newText })
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
            />
        );
    }
}

HomeContainer.propTypes = {
    navigation: PropTypes.object
};
