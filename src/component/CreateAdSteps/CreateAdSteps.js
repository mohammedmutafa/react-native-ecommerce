
import React, { Component } from 'react';
import {
    Image,
    View,
    TextInput,
    Text, Button,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import colors from '../../styles/Color';
import { numberWithCommas } from '../../utilities/Functions';
import Color from '../../styles/Color';

const {
    container,
    imageViewStyle,
    semiTransparentViewStyle,
    textInputPriceStyle,
    textInputTitleStyle,
    backButtonsContainer
} = styles;

export class CreateAdSteps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1, // 1: Price, 2: Title: 3: Details 4: Location
        }
    }

    renderNextButton = () => {
        const { step } = this.state;
        return (
            <View style={backButtonsContainer}>
                <Text style={{ color: '#ffffff', padding: 25, backgroundColor: 'transparent', fontSize: 18 }}
                    onPress={() => this.setState({ step: step === 1 ? null : (step - 1) })}
                >
                    {step === 1 ? '' : 'Back'}
                </Text>
                <Text style={{ color: '#ffffff', padding: 25, backgroundColor: 'transparent', fontSize: 18 }}
                    onPress={() => this.setState({ step: this.state.step + 1 })}
                >
                    {step === 4 ? 'Done' : 'Next'}
                </Text>
            </View>
        );
    }

    renderPriceTextInput = () => {
        return (
            <TextInput
                style={textInputPriceStyle}
                keyboardType='numeric'
                placeholder='₹ (Price)'
                placeholderTextColor={Color.lightWhite}
                autoFocus={true}
                multiline={false}
                maxLength={10}
            // onChangeText={(text) => onProductPriceInput(text.replace(/[^0-9]/g, ''))}
            // value={productPrice ? productPrice.toLocaleString('en') : ''}
            // value={'20000'}
            />
        );
    }

    renderTitleTextInput = () => {
        return (
            <TextInput
                style={textInputTitleStyle}
                // onChangeText={(text) => this.setState({ text })}
                placeholder="Product Title"
                clearButtonMode='always'
                placeholderTextColor={Color.lightWhite}
                multiline={false}
                maxLength={50}
                autoFocus={true}
            // value={this.state.text}
            />
        );
    }

    renderDescriptionTextInput = () => {
        return (
            <TextInput
                style={textInputTitleStyle}
                // onChangeText={(text) => this.setState({ text })}
                placeholder="Product Description"
                clearButtonMode='always'
                placeholderTextColor='#FFFFFF'
                multiline={true}
                maxLength={500}
                numberOfLines={4}
                autoFocus={true}
            // value={this.state.text}
            />
        );
    }

    renderDynamicView = () => {
        switch (this.state.step) {
            case 1:
                return this.renderPriceTextInput();
            case 2:
                return this.renderTitleTextInput();
            case 3:
                return this.renderDescriptionTextInput();
        }
    }

    render() {
        const { imageURL } = this.props;
        const { step } = this.state;

        return (
            <View style={container}>
                <Image
                    source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/innernepal-dca5b.appspot.com/o/showcaseImages%2Fshowcase_macbook_air.jpeg?alt=media&token=98f2f5dd-0d02-4365-b92d-f91a06bedb64' }}
                    style={imageViewStyle}
                />
                <View style={semiTransparentViewStyle} />
                {this.renderNextButton()}
                {this.renderDynamicView()}
            </View >
        );
    }
}

CreateAdSteps.propTypes = {

};
