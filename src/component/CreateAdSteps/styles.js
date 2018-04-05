import { StyleSheet, Platform } from 'react-native';

import { screenWidth, screenHeight } from '../../utilities/ScreenSize';
import Colors from '../../styles/Color';

const containerWidth = screenWidth;
const containerHeight = containerWidth * 0.8;
export const descriptionTextInputHeight = screenHeight / 3;

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    semiTransparentViewStyle: {
        height: screenHeight,
        width: screenWidth,
        position: 'absolute',
        backgroundColor: Colors.semiTransparentDarkOverlay
    },
    imageViewStyle: {
        height: screenHeight,
        width: screenWidth,
        resizeMode: 'cover'
    },
    textInputPriceStyle: {
        width: screenWidth / 2,
        textAlign: 'center',
        position: 'absolute',
        color: '#ffffff',
        fontSize: 24,
        flex: 1,
        marginTop: screenHeight / 2.5
    },
    textInputTitleStyle: {
        width: screenWidth - 15,
        paddingHorizontal: 15,
        textAlign: 'center',
        position: 'absolute',
        color: '#ffffff',
        fontSize: 24,
        marginTop: screenHeight / 2.5
    },
    textInputDescriptionStyle: {
        width: screenWidth - 15,
        paddingHorizontal: 15,
        textAlign: 'center',
        position: 'absolute',
        color: '#ffffff',
        fontSize: 24,
        marginTop: 100
    },
    backButtonsContainer: {
        width: screenWidth,
        position: 'absolute',
        top: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});
