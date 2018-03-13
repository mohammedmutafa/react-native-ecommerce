import { Dimensions } from 'react-native';

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

export const deviceScaledHeight = (value) => {
    return (value / 768) * screenHeight;
};

export const deviceScaledWidth = (value) => {
    return (value / 1024) * screenWidth;
};

export const STICKY_HEADER_HEIGHT = (110 / 768) * window.height;
export const SLIDER_HEIGHT = screenWidth / 1.7;
