import { StyleSheet, Platform, Dimensions } from 'react-native';

import Colors from '../../styles/Color';

import { screenHeight, screenWidth } from '../../utilities/ScreenSize';
const window = Dimensions.get('window');

const STICKY_HEADER_HEIGHT = (110 / 768) * window.height;
const SLIDER_HEIGHT = window.width / 1.7;
const cardWidth = (window.width / 3);
const cardHeight = cardWidth + 40;

export default styles = StyleSheet.create({
    mainConatinerStyle: {
        flexDirection: 'column',
        flex: 1
    },
    floatingShareButtonStyle: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 35
    },
    containerStyle: {
        alignSelf: 'center',
        width: window.width,
        overflow: 'hidden',
        height: SLIDER_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center'
    },
    slide1: {
        height: SLIDER_HEIGHT,
        width: window.width,
        position: 'absolute',
        bottom: 0,
        marginLeft: window.width / 2,
        backgroundColor: '#FFFFFF'
    },
    titleTextStyle: {
        color: '#FFFFFF',
        fontSize: 25,
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 10,
        textAlign: 'center',
    },
    decsriptionTextStyle: {
        // color: '#00',
        fontSize: 16,
        //fontStyle: 'italic',
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 10,
        bottom: 5,
        // textAlign: 'justify' //The value 'justify' is only supported on iOS and fallbacks to left on Android.
    },
    boldSeparator: {
        color: Colors.golden,
        fontWeight: 'bold',
        fontSize: 30,
        marginLeft: 25,
        marginRight: 25,
        marginTop: 5,
        marginBottom: 10
    },
    floatingButtonContainerStyle: {
        backgroundColor: Colors.dark,
        borderWidth: 0.5,
        borderColor: Colors.golden
    },
    semiTransparentViewStyle: {
        height: SLIDER_HEIGHT, // same width and height for the container
        width: window.width,
        position: 'absolute',
        backgroundColor: 'rgba(60, 60, 60, 0.5)'
    },
    specificationTextStyle: {
        color: Colors.dark,
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
        width: window.width,
        position: 'absolute',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    textInputContainerStyle: {
        flexDirection: 'column',
        margin: 25,
        justifyContent: 'center',
    },
    titleDividerStyle: {
        height: 1,
        backgroundColor: Colors.golden,
        flex: 1,
        marginTop: 5
    },
    photoViewDividerTextstyle: {
        color: Colors.dark,
        fontStyle: 'italic',
        fontSize: 20
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
    },
    productCategoryContainerstyle: {
        flexDirection: 'column'
    },
    headerTextStyle: {
        fontSize: 18,
        color: Colors.dark
    },
    textInputStyle: {
        paddingVertical: 15,
        color: Colors.lightDark
    }
});
