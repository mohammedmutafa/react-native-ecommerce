import {
    StyleSheet,
    Platform
} from 'react-native';

import {
    screenWidth,
    deviceScaledWidth
} from '../../utilities/ScreenSize';
import Color from '../../styles/Color';
import Fonts from '../../styles/Fonts';

export default StyleSheet.create({
    conatinerStyle: {
        flex: 1
    },
    descriptionTextStyle: {
        color: Color.placeholderWhite,
        fontSize: 14,
        fontFamily: Fonts.CharterBT,
        paddingHorizontal: 5,
        // alignSelf: 'center'
    }
});
