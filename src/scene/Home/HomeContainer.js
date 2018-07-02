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
            //Users
            user: undefined,
            userExistInDB: false
        };
    }

    componentDidMount() {
        StatusBar.setHidden(true);
        //Temporary Solution .. need to hide for all app screen.

        //More Details: https://firebase.google.com/docs/auth/web/manage-users
        this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                const userID = user.phoneNumber
                //Keep doc id as string.
                let userRef = firebase.firestore().collection('users').doc(`${userID.replace('+91', '').trim()}`);
                /**
                 * Check if user already logged In with phone number and completed the sign-up form.
                 */
                userRef.get().then((doc) => {
                    if (!doc.exists) {
                        this.setState({
                            user: user.toJSON(),
                            userExistInDB: false
                        });
                    } else {
                        this.setState({
                            user: user.toJSON(),
                            userExistInDB: true
                        });
                    }
                }).catch((err) => {
                    this.setState({
                        userExistInDB: undefined //if undefined then some error in fetching data
                    });
                });
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

        //Phone no validation.
        if ((phoneNumberInput === undefined) || (phoneNumberInput.length < 10)) {
            return;
        }
        //TODO: show Activity Indicator and prevent user from double click.

        //TODO: it will only use captcha on iOS if you haven't set up the silent notifications as detailed here:
        // https://firebase.google.com/docs/auth/ios/phone-auth#start-receiving-silent-notifications

        firebase.auth().signInWithPhoneNumber(`+91${phoneNumberInput}`)
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

    onPressFloatingMenu = () => {
        const {
            user,
            userExistInDB
        } = this.state;

        if (user) {
            if (userExistInDB === true) {
                this.props.navigation.navigate('CreateAd');
            } else if (userExistInDB === false) {
                this.props.navigation.navigate('UserProfile');
            } else {
                //some network issue
                console.log('unable to connect to server');
            }
        } else {
            this.changeLoginWithPhoneModalViewState();
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

    onPhoneNumberInputChange = (text) => {
        let newText = '';

        for (let i = 0; i < text.length; i++) {
            if (text.indexOf(text[i]) > -1) {
                newText = newText + text[i];
            }
        }

        this.setState({ phoneNumberInput: newText })
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
                verifyOTP={this.verifyOTP}
                isOTPVerified={isOTPVerified}
                onPressFloatingMenu={this.onPressFloatingMenu}
            />
        );
    }
}

HomeContainer.propTypes = {
    navigation: PropTypes.object
};
