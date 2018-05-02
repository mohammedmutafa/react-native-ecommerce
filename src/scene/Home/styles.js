import { StyleSheet, Platform, Dimensions } from 'react-native';

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
    floatingMenuButtonStyle: {
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 35,
        paddingRight: 15
    },
    slide1: {
        height: SLIDER_HEIGHT,
        width: window.width,
        position: 'absolute',
        bottom: 0,
        marginLeft: window.width / 2
    }
});
