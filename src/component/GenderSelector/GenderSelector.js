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
import Fonts from '../../styles/Fonts';
const {
    container,
    separatorStyle,
    titleTextContainer
} = styles;

export const GenderSelector = ({ isSelectGenderModalViewVisible, gender, setGenderFemale, setGenderMale, setGenderOther }) => (
    <Modal
        style={{ flexDirection: 'column' }}
        visible={isSelectGenderModalViewVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => null}
    >
        <View style={{ flex: 1.2, backgroundColor: Color.semiTransparentDarkOverlay }} />
        <View style={container}>
            <View style={titleTextContainer}>
                <Text style={{ fontFamily: Fonts.DancingScriptOT, fontSize: 25 }}>Select Gender  </Text>
                <View style={separatorStyle} />
            </View>

            <View style={{ flexDirection: 'column', justifyContent: 'center', marginVertical: 15, alignSelf: 'flex-start', alignItems: 'flex-start' }}>
                <CheckBox
                    containerStyle={{ borderWidth: 0, backgroundColor: 'transparent' }}
                    title="Female"
                    checkedColor={Color.dark}
                    iconType="ionicon"
                    checkedIcon="ios-checkmark-circle"
                    textStyle={{ color: Color.dark, fontFamily: Fonts.CharterBT }}
                    uncheckedIcon="ios-checkmark-circle-outline"
                    checked={gender === 'Female' ? true : false}
                    onPress={setGenderFemale}
                    size={35}
                />
                <CheckBox
                    containerStyle={{ borderWidth: 0, backgroundColor: 'transparent' }}
                    title="Male"
                    checkedColor={Color.dark}
                    textStyle={{ color: Color.dark, fontFamily: Fonts.CharterBT }}
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
                    textStyle={{ color: Color.dark, fontFamily: Fonts.CharterBT }}
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
