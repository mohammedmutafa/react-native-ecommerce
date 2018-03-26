import { StyleSheet, Platform } from 'react-native';

import { screenHeight, screenWidth } from '../../utilities/ScreenSize';
import Color from '../../styles/Color';

export default styles = StyleSheet.create({
    conatinerStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F6F8FC',
        paddingVertical: 15
    },
    swipeCardStyle: {
        width: screenWidth - 30,
        height: (screenWidth - 30) * 0.6,
        marginVertical: 20,
        borderRadius: 5,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        // backgroundColor: '#F6F8FC',
        backgroundColor: Color.dark,
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0,0,0, .2)',
                shadowOffset: { height: 0, width: 0 },
                shadowOpacity: 1,
                shadowRadius: 2,
            },
            android: {
                elevation: 2,
            }
        })
    },
    swiperStyle: {
        width: screenWidth,
        height: (screenWidth) * 0.6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    descriptionCardStyle: {
        marginVertical: 20,
        marginHorizontal: 15,
        borderRadius: 5,
        padding: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.dark,
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0,0,0, .2)',
                shadowOffset: { height: 0, width: 0 },
                shadowOpacity: 1,
                shadowRadius: 2,
            },
            android: {
                elevation: 2,
            }
        })
    }
});
