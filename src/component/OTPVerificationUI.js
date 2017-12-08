import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Dimensions
} from 'react-native';
import { Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

class OTPVerificationUI extends Component {

    renderSeparator = () => <View style={styles.separator} />

    renderBackButton = () => {
        return (
            <View style={styles.backButtonStyle}>
                <Icon
                    name='chevron-with-circle-left'
                    type='entypo'
                    color='#C7C7CD'
                    size={30}
                    onPress={this.props.changeOTPVerificationUIState}
                />
            </View>
        );
    }

    renderCodeInput = () => {
        return <TextInput
            style={styles.verificationCodeInputStyle}
            // onChangeText={onPhoneNumberInputChange}
            // value={phoneNumberInput}
            placeholderTextColor='#C7C7CD'
            color='#FFFFFF'
            keyboardType='phone-pad'
            maxLength={1}
            borderWidth={1}
            borderColor='#DAA520'
        />
    }

    renderVerificationUI = () => {
        const { phoneNumberInputContainer } = styles;
        const { phoneNumberInput, onPhoneNumberInputChange } = this.props;

        return (
            <Animatable.View style={phoneNumberInputContainer} animation='fadeInLeft'>
                <Text style={{ color: '#FFFFFF', fontSize: 20 }}>Verification Code</Text>
                {this.renderSeparator()}
                <Text style={{ color: '#FFFFFF', fontSize: 14 }}>Please enter 4 digit verification code.</Text>
                <View style={styles.verificationCodeInputContainer}>
                    {this.renderCodeInput()}
                    {this.renderCodeInput()}
                    {this.renderCodeInput()}
                    {this.renderCodeInput()}
                </View>
            </Animatable.View>
        );
    }

    render() {
        const { phoneNumberInputUIVisible } = this.props;

        return (
            <View style={styles.mainConatinerStyle} >
                {this.renderBackButton()}
                {this.renderVerificationUI()}
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
        backgroundColor: '#2a2a2a'
    },
    floatingMenuButtonStyle: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 35
    },
    phoneNumberInputContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
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
    },
    verificationCodeInputContainer: {
        flexDirection: 'row',
        marginTop: 20
    },
    verificationCodeInputStyle: {
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        textAlign: 'center'
    }
});

export default OTPVerificationUI;
