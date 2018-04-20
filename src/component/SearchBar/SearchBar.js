
import React, { Component } from 'react';
import {
    Image,
    View,
    TextInput,
    Text,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

import styles from './styles';
import Color from '../../styles/Color';

const {
    searchbarContainerStyle,
    textInputStyle
} = styles;

export class SearchBar extends Component {

    render() {
        return (
            <View style={searchbarContainerStyle}>
                <TextInput
                    style={textInputStyle}
                    placeholder='Search for the product....'
                    placeholderTextColor={Color.lightDark}
                    returnKeyType={'search'}
                    onSubmitEditing={() => console.log(' search button pressed.....')}
                    multiline={false}
                    underlineColorAndroid='transparent'
                    maxLength={10}
                    clearButtonMode='always'
                // onChangeText={(text) => onProductPriceInput(text.replace(/[^0-9]/g, ''))}
                //value={`₹ ${numberWithCommas(productPrice)}`}
                />
            </View>
        );
    }
}

SearchBar.propTypes = {

};
