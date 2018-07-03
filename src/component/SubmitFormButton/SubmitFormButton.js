import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

export const SubmitFormButton = ({ onPress, style }) => (
    <View style={[container, style]}>
        <TouchableOpacity
            onPress={onPress}
            style={submitButtonStyle}
        >
            <Text style={submitTextStyle}>Submit</Text>
        </TouchableOpacity>
    </View>
);

const {
    container,
    submitButtonStyle,
    submitTextStyle
} = styles;

SubmitFormButton.propTypes = {
    onPress: PropTypes.func,
    style: PropTypes.object,
    iconName: PropTypes.string,
    iconType: PropTypes.string,
    iconColor: PropTypes.string
};
