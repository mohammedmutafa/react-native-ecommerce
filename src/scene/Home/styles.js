import { StyleSheet, Platform, Dimensions } from 'react-native';

import colors from '../../styles/Color';

import { screenHeight, screenWidth } from '../../utilities/ScreenSize';

const window = Dimensions.get('window');

const STICKY_HEADER_HEIGHT = (110 / 768) * window.height;
const SLIDER_HEIGHT = window.width / 1.7;

export default styles = StyleSheet.create({
    mainConatinerStyle: {
        flexDirection: 'column',
        flex: 1
    },
    containerStyle: {
        alignSelf: 'center',
        width: window.width,
        overflow: 'hidden', // for hide the not important parts from circle
        height: SLIDER_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center'

    },
    sliderContainerStyle: {
        borderRadius: window.width, // border borderRadius same as width and height
        width: window.width * 2,
        height: window.width * 2,
        marginLeft: -(window.width / 2),// reposition the circle inside parent view
        position: 'absolute',
        bottom: 0, // show the bottom part of circle
        overflow: 'hidden' // hide not important part of image

    },
    wrapper: {
    },
    slide1: {
        height: SLIDER_HEIGHT,// same width and height for the container
        width: window.width,
        position: 'absolute', // position it in circle
        bottom: 0, // position it in circle
        marginLeft: window.width / 2, // center it in main view same value as marginLeft for circle but positive
        backgroundColor: '#FFFFFF'
    },
    floatingMenuButtonStyle: {
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 35,
        paddingRight: 15
    },
    stickySection: {
        height: STICKY_HEADER_HEIGHT,
        width: window.width,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    }
});
