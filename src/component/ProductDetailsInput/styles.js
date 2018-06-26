import { StyleSheet } from 'react-native';

import { screenHeight, screenWidth, deviceScaledHeight } from '../../utilities/ScreenSize';
import Color from '../../styles/Color';

export default StyleSheet.create({
    container: {
        height: screenHeight - deviceScaledHeight(50),
        marginHorizontal: 15
    },
    textInputStyle: {
        // height: screenHeight / 1.5,
        fontSize: 16,
        marginTop: 5,
        color: Color.dark
    },
    titleTextStyle: {
        color: Color.dark,
        fontSize: 20,
        alignSelf: 'center',
        marginVertical: 10
    },
    hintTextStyle: {
        color: Color.dark,
        fontSize: 12,
        textAlign: 'center',
        marginVertical: 10
    },
    doneButtonStyle: {
        alignSelf: 'flex-end'
    },
    doneTextStyle: {
        fontSize: 20,
        paddingVertical: 20,
        color: Color.golden
    },
    separatorStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        alignSelf: 'center',
        height: StyleSheet.hairlineWidth,
        width: screenWidth / 2.5,
        backgroundColor: Color.golden,
        marginVertical: 15
    }
});
