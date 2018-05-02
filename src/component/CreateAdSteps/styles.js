import { StyleSheet, Platform } from 'react-native';

import { screenWidth, screenHeight, deviceScaledHeight } from '../../utilities/ScreenSize';
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
        backgroundColor: 'rgba(39,34,35,0.8)'
        //backgroundColor: Colors.semiTransparentDarkOverlay
    },
    textInputPriceStyle: {
        borderBottomWidth: 2,
        borderColor: Colors.golden,
        width: screenWidth - 15,
        padding: 15,
        textAlign: 'center',
        position: 'absolute',
        color: Colors.lightWhite,
        fontSize: 18,
        flex: 1,
        marginTop: 100
    },
    textInputTitleStyle: {
        borderBottomWidth: 2,
        borderColor: Colors.golden,
        width: screenWidth - 15,
        padding: 15,
        position: 'absolute',
        color: Colors.lightWhite,
        fontSize: 18,
        marginTop: 100
    },
    textInputDescriptionStyle: {
        borderBottomWidth: 2,
        borderColor: Colors.golden,
        width: screenWidth - 15,
        paddingHorizontal: 15,
        paddingVertical: 25,
        position: 'absolute',
        color: Colors.lightWhite,
        fontSize: 18,
        marginTop: 100
    },
    navigationBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // padding: 15,
        width: screenWidth,
        height: deviceScaledHeight(55),
        backgroundColor: Colors.dark,
        position: 'absolute'
    }
});
