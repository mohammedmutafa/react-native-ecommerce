import { StyleSheet } from 'react-native';

import Color from '../../styles/Color';
import { screenWidth } from '../../utilities/ScreenSize';
import Fonts from '../../styles/Fonts';

export default StyleSheet.create({
    container: {
        backgroundColor: Color.lightWhite,
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        zIndex: 1,
        bottom: 0,
        width: screenWidth,
        padding: 15
    },
    submitButtonStyle: {
        backgroundColor: Color.dark,
        justifyContent: 'center',
        alignItems: 'center',
        width: screenWidth / 3,
        borderRadius: 5
    },
    submitTextStyle: {
        fontSize: 16,
        fontFamily: Fonts.CharterBT,
        color: Color.lightWhite,
        padding: 20
    }
});
