import { StyleSheet } from 'react-native';

import { screenHeight, screenWidth, deviceScaledHeight } from '../../utilities/ScreenSize';

export default StyleSheet.create({
    container: {
        height: screenHeight,
        width: screenWidth,
        backgroundColor: '#000000'
    },
    navigationBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        width: screenWidth,
        height: deviceScaledHeight(50),
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        position: 'absolute'
    }
});
