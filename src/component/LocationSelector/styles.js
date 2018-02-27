import { StyleSheet } from 'react-native';

import { screenHeight, screenWidth, deviceScaledHeight } from '../../utilities/ScreenSize';

export default StyleSheet.create({
    container: {
        height: screenHeight,
        width: screenWidth,
        paddingHorizontal: 30
    },
    navigationBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        width: screenWidth,
        height: deviceScaledHeight(60),
        backgroundColor: '#2a2a2a',
        // position: 'absolute'
    }
});
