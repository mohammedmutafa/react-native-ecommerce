import { StyleSheet } from 'react-native';

import { screenHeight, screenWidth, deviceScaledHeight } from '../../utilities/ScreenSize';

export default StyleSheet.create({
    container: {
        height: screenHeight - deviceScaledHeight(50),
        margin: 15
    },
    navigationBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        width: screenWidth,
        height: deviceScaledHeight(50),
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    textInputStyle: {
        height: screenHeight / 1.5,
        fontSize: 18,
        marginTop: 5
    },
    titleTextStyle: {
        fontSize: 20
    },
    doneButtonStyle: {
        backgroundColor: '#2a2a2a',
        alignSelf: 'center',
        margin: 20
    }
});
