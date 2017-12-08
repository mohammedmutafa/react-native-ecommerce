import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import HomeComponent from '../component/Home';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoginWithPhoneModalVisible: false,
            phoneNumberInput: undefined,
            phoneNumberInputUIVisible: false
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

    onPhoneNumberInputChange = (text) => {
        let newText = '';
        let numbers = '0123456789';

        for (var i = 0; i < text.length; i++) {
            if (numbers.indexOf(text[i]) > -1) {
                newText = newText + text[i];
            }
        }

        this.setState({ phoneNumberInput: newText })
    }

    render() {
        const { isLoginWithPhoneModalVisible, phoneNumberInput, phoneNumberInputUIVisible } = this.state;
        return (
            <HomeComponent
                isLoginWithPhoneModalVisible={isLoginWithPhoneModalVisible}
                changeLoginWithPhoneModalViewState={this.changeLoginWithPhoneModalViewState}
                phoneNumberInput={phoneNumberInput}
                phoneNumberInputUIVisible={phoneNumberInputUIVisible}
                onPhoneNumberInputChange={this.onPhoneNumberInputChange}
                changePhoneNumberInputUIState={this.changePhoneNumberInputUIState}
            />
        );
    }
}
