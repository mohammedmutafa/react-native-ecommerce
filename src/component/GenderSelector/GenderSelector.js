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
    container,
    separatorStyle
} = styles;

export const GenderSelector = ({ isSelectGenderModalViewVisible, gender, setGenderFemale, setGenderMale, setGenderOther }) => (
    <Modal
        style={{ flexDirection: 'column' }}
        visible={isSelectGenderModalViewVisible}
        animationType="fade"
        transparent={true}
    >
        <View style={{ flex: 1.1, backgroundColor: Color.semiTransparentDarkOverlay }} />
        <View style={container}>
            <Text style={{ padding: 5 }}>Select your Gender</Text>
            <View style={separatorStyle} />
            <View style={{ flexDirection: 'column', justifyContent: 'center', marginVertical: 15, alignSelf: 'flex-start', alignItems: 'flex-start' }}>
                <CheckBox
                    containerStyle={{ borderWidth: 0, backgroundColor: 'transparent' }}
                    title="Female"
                    checkedColor={Color.dark}
                    iconType="ionicon"
                    checkedIcon="ios-checkmark-circle"
                    textStyle={{ color: Color.dark }}
                    uncheckedIcon="ios-checkmark-circle-outline"
                    checked={gender === 'Female' ? true : false}
                    onPress={setGenderFemale}
                    size={35}
                />
                <CheckBox
                    containerStyle={{ borderWidth: 0, backgroundColor: 'transparent' }}
                    title="Male"
                    checkedColor={Color.dark}
                    textStyle={{ color: Color.dark }}
                    iconType="ionicon"
                    checkedIcon="ios-checkmark-circle"
                    uncheckedIcon="ios-checkmark-circle-outline"
                    checked={gender === 'Male' ? true : false}
                    onPress={setGenderMale}
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
                    checked={gender === 'Other' ? true : false}
                    onPress={setGenderOther}
                    size={35}
                />
            </View>
        </View>
    </Modal>
);

GenderSelector.propTypes = {
    isSelectGenderModalViewVisible: PropTypes.bool,
    setGenderFemale: PropTypes.func,
    setGenderMale: PropTypes.func,
    setGenderOther: PropTypes.func,
    gender: PropTypes.string
};
