import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

import styles from './styles';
import colors from '../../styles/Color';

const { container } = styles;

export const BackButton = ({ onPress, style, icon = 'chevron-with-circle-left', iconColor = colors.lightWhite }) => (
    <View style={[container, style]}>
        <Icon
            underlayColor='transparent'
            name={icon}
            type="entypo"
            color={iconColor}
            size={30}
            onPress={(onPress)}
        />
    </View>
)

BackButton.propTypes = {
    onPress: PropTypes.func,
    style: PropTypes.object
};
