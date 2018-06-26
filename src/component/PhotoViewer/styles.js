import { StyleSheet } from 'react-native';

import { screenWidth } from '../../utilities/ScreenSize';
import Color from '../../styles/Color';

export default StyleSheet.create({
    navigationBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        width: screenWidth,
        backgroundColor: Color.semiTransparentDarkOverlay,
        position: 'absolute'
    }
});
