import { StyleSheet, Platform } from 'react-native';

import { SLIDER_HEIGHT, screenWidth, screenHeight } from '../../utilities/ScreenSize';
import Colors from '../../styles/Color';

export default StyleSheet.create({
    searchbarContainerStyle: {
        width: screenWidth - 65,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0,0,0, .2)',
                shadowOffset: { height: 3, width: 0 },
                shadowOpacity: 1,
                shadowRadius: 5,
            },
            android: {
                elevation: 2,
            }
        })
    },
    textInputStyle: {
        width: screenWidth - 85,
    }
});
