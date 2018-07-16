import { StyleSheet, Platform } from 'react-native';

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
        fontSize: 18,
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 10,
        textAlign: 'center',
        fontFamily: Fonts.CharterBT
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
    dateTextStyle: {
        color: '#FFFFFF',
        fontSize: 12,
        paddingBottom: 10,
        fontFamily: Fonts.CharterBT
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
        fontSize: 25
    },
    carouselCardStyle: {
        height: cardHeight,
        width: cardWidth,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        backgroundColor: Color.lightWhite,
        marginHorizontal: 5
    }
});
