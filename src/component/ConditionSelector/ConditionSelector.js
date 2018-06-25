import React, { Component } from 'react';
import {
    View,
    Text,
    Modal
} from 'react-native';
import PropTypes from 'prop-types';
import { CheckBox } from 'react-native-elements';

import styles from './styles';
import Color from '../../styles/Color';
import Fonts from '../../styles/Fonts';

const {
    container
} = styles;

export const ConditionSelector = ({ selectedProductCondition, setProductConditionUsed, setProductConditionNew, isProductConditionModalViewVisible }) => (
    <Modal
        style={{ flexDirection: 'column' }}
        visible={isProductConditionModalViewVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => null}
    >
        <View style={{ flex: 1.5, backgroundColor: Color.semiTransparentDarkOverlay }} />
        <View style={container}>
            <Text >Select the condition of the product.</Text>
            <CheckBox
                containerStyle={{ borderWidth: 0, backgroundColor: 'transparent' }}
                title="New Product"
                checkedColor={Color.dark}
                iconType="ionicon"
                checkedIcon="ios-checkmark-circle"
                textStyle={{ color: Color.dark, fontFamily: Fonts.CharterBT }}
                uncheckedIcon="ios-checkmark-circle-outline"
                checked={selectedProductCondition === 'New' ? true : false}
                onPress={setProductConditionNew}
                size={35}
            />
            <CheckBox
                containerStyle={{ borderWidth: 0, backgroundColor: 'transparent' }}
                title="Used Product"
                checkedColor={Color.dark}
                textStyle={{ color: Color.dark, fontFamily: Fonts.CharterBT }}
                iconType="ionicon"
                checkedIcon="ios-checkmark-circle"
                uncheckedIcon="ios-checkmark-circle-outline"
                checked={selectedProductCondition === 'Used' ? true : false}
                onPress={setProductConditionUsed}
                size={35}
            />
        </View>
    </Modal>
);

ConditionSelector.propTypes = {
    selectedProductCondition: PropTypes.string,
    setProductConditionUsed: PropTypes.func,
    setProductConditionNew: PropTypes.func,
    isProductConditionModalViewVisible: PropTypes.bool
};
