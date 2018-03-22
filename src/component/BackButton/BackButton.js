import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

import styles from './styles';
import colors from '../../styles/Color';

const { container } = styles;

export const BackButton = ({ onPress }) => (
    <View style={container}>
        <Icon
            name="chevron-with-circle-left"
            type="entypo"
            color={colors.lightWhite}
            size={30}
            onPress={(onPress)}
        />
    </View>
)

BackButton.propTypes = {
    onPress: PropTypes.func
};
