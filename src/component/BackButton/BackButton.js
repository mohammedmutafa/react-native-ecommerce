import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

import styles from './styles';
import colors from '../../styles/Color';

const { container } = styles;

export const BackButton = ({ onPress, style, iconName, iconType, iconColor }) => (
    <View style={[container, style]}>
        <Icon
            underlayColor="transparent"
            name={iconName}
            type={iconType}
            color={iconColor}
            size={30}
            onPress={(onPress)}
        />
    </View>
)

BackButton.propTypes = {
    onPress: PropTypes.func,
    style: PropTypes.object,
    iconName: PropTypes.string,
    iconType: PropTypes.string,
    iconColor: PropTypes.string
};

BackButton.defaultProps = {
    iconType: "entypo",
    iconName: "chevron-with-circle-left",
    iconColor: colors.lightWhite
}
