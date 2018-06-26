import { StyleSheet } from 'react-native';

import { screenWidth, deviceScaledHeight } from '../../utilities/ScreenSize';
import Color from '../../styles/Color';
import Fonts from '../../styles/Fonts';

export const STICKY_HEADER_HEIGHT = deviceScaledHeight(110);
export const SLIDER_HEIGHT = screenWidth / 1.7;
const cardWidth = screenWidth / 3;
const cardHeight = cardWidth + 40;

export default styles = StyleSheet.create({
    mainConatinerStyle: {
        flexDirection: 'column',
        flex: 1
    },
    floatingShareButtonStyle: {
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 35,
        paddingRight: 15
    },
    containerStyle: {
        alignSelf: 'center',
        width: screenWidth,
        overflow: 'hidden',
        height: SLIDER_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center'
    },
    slide1: {
        height: SLIDER_HEIGHT,
        width: screenWidth,
        position: 'absolute',
        bottom: 0,
        marginLeft: screenWidth / 2,
        backgroundColor: '#FFFFFF'
    },
    titleTextStyle: {
        color: '#FFFFFF',
        fontSize: 25,
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 10,
        textAlign: 'center',
        fontFamily: Fonts.DancingScriptOT
    },
    decsriptionTextStyle: {
        color: Color.dark,
        fontSize: 16,
        //fontStyle: 'italic',
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 10,
        bottom: 5,
        // textAlign: 'justify' //The value 'justify' is only supported on iOS and fallbacks to left on Android.
    },
    boldSeparator: {
        color: '#DAA520',
        fontWeight: 'bold',
        fontSize: 30,
        marginLeft: 25,
        marginRight: 25,
        marginTop: 5,
        marginBottom: 10
    },
    floatingButtonContainerStyle: {
        backgroundColor: Color.floatingButtonBackground,
        borderWidth: 1,
        borderColor: Color.golden
    },
    semiTransparentViewStyle: {
        height: SLIDER_HEIGHT, // same width and height for the container
        width: screenWidth,
        position: 'absolute',
        backgroundColor: 'rgba(60, 60, 60, 0.5)'
    },
    priceTextStyle: {
        color: '#2a2a2a',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 10
    },
    dateTextStyle: {
        color: '#FFFFFF',
        fontSize: 12,
        paddingBottom: 10
    },
    textContainerStyle: {
        height: SLIDER_HEIGHT, // same width and height for the container
        width: screenWidth,
        position: 'absolute',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    photoViewerDividerContainerStyle: {
        flexDirection: 'row',
        margin: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    photoViewerDividerStyle: {
        height: 1,
        backgroundColor: '#DAA520',
        flex: 1,
        marginTop: 5
    },
    photoViewDividerTextstyle: {
        color: '#2a2a2a',
        fontFamily: Fonts.DancingScriptOT,
        fontStyle: 'italic',
        fontSize: 25
    },
    photoCardStyle: {
        width: cardWidth,
        height: cardHeight,
        backgroundColor: '#F7F7F7',
        marginTop: 5,
        marginBottom: 5,
        marginRight: 5
    },
    imageRowStyle: {
        height: cardHeight,
        width: cardWidth,
        resizeMode: 'cover'
    },
    imageViewFlatListContainerStyle: {
        marginLeft: 25,
        marginRight: 25,
        marginTop: 5,
        marginBottom: 20
    }
});
