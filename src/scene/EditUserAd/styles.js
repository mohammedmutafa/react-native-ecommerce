import { StyleSheet, Platform } from 'react-native';

import colors from '../../styles/Color';
import Fonts from '../../styles/Fonts';

import { screenWidth } from '../../utilities/ScreenSize';
import Color from '../../styles/Color';

const cardWidth = screenWidth * 0.9;
const cardHeight = cardWidth / 2;

export default styles = StyleSheet.create({
    conatinerStyle: {
        backgroundColor: colors.lightBlueWhite,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    listCardStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: cardWidth,
        height: cardHeight,
        backgroundColor: colors.placeholderWhite,
        marginHorizontal: 5,
        marginVertical: 10,
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0,0,0, .3)',
                shadowOffset: { height: 0, width: 0 },
                shadowOpacity: 1,
                shadowRadius: 2,
            },
            android: {
                elevation: 2,
            }
        })
    },
    listCardImageStyle: {
        resizeMode: 'cover',
        flex: 4
    },
    activityIndicatorStyle: {
        marginTop: 35,
        alignItems: 'center'
    }
});
