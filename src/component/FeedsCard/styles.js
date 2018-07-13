import {
    StyleSheet,
    Platform
} from 'react-native';

import {
    screenWidth,
    deviceScaledWidth
} from '../../utilities/ScreenSize';
import Color from '../../styles/Color';
import Fonts from '../../styles/Fonts';

const cardwidth = screenWidth;
const cardHeight = cardwidth * 0.7;

export default StyleSheet.create({
    container: {
        height: cardHeight,
        width: cardwidth,
        justifyContent: 'space-between',
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
    imageBackgroundStyle: {
        height: cardHeight,
        width: cardwidth,
        justifyContent: 'space-between'
    },
    semiTransparentViewStyle: {
        height: cardHeight,
        width: cardwidth,
        position: 'absolute',
        backgroundColor: 'rgba(60, 60, 60, 0.5)'
    },
    dateBoxStyle: {
        height: deviceScaledWidth(180),
        width: deviceScaledWidth(180),
        padding: 10,
        backgroundColor: Color.lightBlueWhite,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: -5,
        marginRight: -5,
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
    priceBoxStyle: {
        padding: 10,
        backgroundColor: 'rgba(218,165,32,0.3)',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 2,
        borderRightColor: Color.golden,
        marginHorizontal: 20
    },
    categoryTextStyle: {
        color: Color.lightBlueWhite,
        fontFamily: Fonts.CharterBT,
        fontSize: 16
    },
    dateTextStyle: {
        color: Color.dark,
        fontFamily: Fonts.CharterBT,
        fontSize: 14
    },
    titleTextStyle: {
        color: Color.lightBlueWhite,
        fontFamily: Fonts.CharterBT,
        fontSize: 16,
        //  width: cardwidth / 1.5
    },
    priceSymbolTextStyle: {
        color: Color.lightBlueWhite,
        fontSize: 50,
        textAlign: 'center',
        fontFamily: Fonts.CharterBT
    },
    priceTextStyle: {
        color: Color.lightBlueWhite,
        fontSize: 25,
        textAlign: 'center',
        fontFamily: Fonts.CharterBT
    },
    addressTextStyle: {
        color: Color.placeholderWhite,
        fontSize: 14,
        fontFamily: Fonts.CharterBT,
        paddingHorizontal: 5,
        alignSelf: 'center'
    }
});
