import React from 'react';
import {
    View,
    Text,
    Modal
} from 'react-native';
import PropTypes from 'prop-types';
import { CheckBox } from 'react-native-elements';

import styles from './styles';
import Color from '../../styles/Color';

const {
    container
} = styles;

export const GenderSelector = ({ selectedProductCondition, setProductConditionUsed, setProductConditionNew, isProductConditionModalViewVisible }) => (
    <Modal
        style={{ flexDirection: 'column' }}
        visible={isProductConditionModalViewVisible}
        animationType="fade"
        transparent={true}
    >
        <View style={{ flex: 1.4, backgroundColor: Color.semiTransparentDarkOverlay }} />
        <View style={container}>
            <Text>Select your Gender.</Text>
            <View style={{ flexDirection: 'column', justifyContent: 'center', marginVertical: 10, alignItems: 'flex-start' }}>
                <CheckBox
                    containerStyle={{ borderWidth: 0, backgroundColor: 'transparent' }}
                    title="Male"
                    checkedColor={Color.dark}
                    iconType="ionicon"
                    checkedIcon="ios-checkmark-circle"
                    textStyle={{ color: Color.dark }}
                    uncheckedIcon="ios-checkmark-circle-outline"
                    checked={selectedProductCondition === 'Male' ? true : false}
                    onPress={setProductConditionNew}
                    size={35}
                />
                <CheckBox
                    containerStyle={{ borderWidth: 0, backgroundColor: 'transparent' }}
                    title="Female"
                    checkedColor={Color.dark}
                    textStyle={{ color: Color.dark }}
                    iconType="ionicon"
                    checkedIcon="ios-checkmark-circle"
                    uncheckedIcon="ios-checkmark-circle-outline"
                    checked={selectedProductCondition === 'Female' ? true : false}
                    onPress={setProductConditionUsed}
                    size={35}
                />
                <CheckBox
                    containerStyle={{ borderWidth: 0, backgroundColor: 'transparent' }}
                    title="Other"
                    checkedColor={Color.dark}
                    textStyle={{ color: Color.dark }}
                    iconType="ionicon"
                    checkedIcon="ios-checkmark-circle"
                    uncheckedIcon="ios-checkmark-circle-outline"
                    checked={selectedProductCondition === 'Other' ? true : false}
                    onPress={setProductConditionUsed}
                    size={35}
                />
            </View>
        </View>
    </Modal>
);

GenderSelector.propTypes = {
    selectedProductCondition: PropTypes.string,
    setProductConditionUsed: PropTypes.func,
    setProductConditionNew: PropTypes.func,
    isProductConditionModalViewVisible: PropTypes.bool
};
