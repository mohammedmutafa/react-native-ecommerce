import { StyleSheet } from 'react-native';

import { screenHeight, screenWidth, deviceScaledHeight } from '../../utilities/ScreenSize';

export default StyleSheet.create({
    container: {
        height: screenHeight - deviceScaledHeight(50),
        marginTop: 30,
        marginHorizontal: 15
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
        alignSelf: 'center',
        margin: 20,
        backgroundColor: '#2a2a2a',
        borderWidth: 0.5,
        borderColor: '#DAA520'
    }
});
