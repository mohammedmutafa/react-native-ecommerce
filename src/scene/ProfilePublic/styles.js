import { StyleSheet, Platform } from 'react-native';

import colors from '../../styles/Color';

import { screenHeight, screenWidth } from '../../utilities/ScreenSize';

export default styles = StyleSheet.create({
    conatinerStyle: {
        backgroundColor: colors.lightWhite
    },
    triangleDown: {
        width: 0,
        height: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0,0,0, .5)',
                shadowOffset: { height: 3, width: 0 },
                shadowOpacity: 1,
                shadowRadius: 5,
            },
            android: {
                elevation: 2,
            }
        }),
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: screenWidth / 1.5,
        borderRightWidth: screenWidth / 1.5,
        borderBottomWidth: screenWidth / 1.8,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: colors.dark,
        transform: [
            { rotate: '180deg' }
        ]
    },
    circleContainer: {
        margin: 20,
        position: 'absolute',
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0,0,0, .5)',
                shadowOffset: { height: 3, width: 0 },
                shadowOpacity: 1,
                shadowRadius: 5,
            },
            android: {
                elevation: 2,
            }
        })
    },
    circle: {
        width: 120,
        height: 120,
        borderRadius: 120 / 2,
        backgroundColor: colors.dark,
        transform: [
            { rotate: '180deg' }
        ],
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatarStyle: {
        alignSelf: 'center',
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
    }
});
