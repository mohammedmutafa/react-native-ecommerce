import {
    StyleSheet,
    Platform
} from 'react-native';

import {
    screenWidth
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
        marginVertical: 5
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
    titleTextStyle: {
        color: Color.lightBlueWhite,
        fontFamily: Fonts.CharterBT,
        fontSize: 16,
        //  width: cardwidth / 1.5
    },
    priceSymbolTextStyle: {
        color: Color.lightBlueWhite,
        fontSize: 30,
        textAlign: 'center',
        fontFamily: Fonts.CharterBT
    },
    priceTextStyle: {
        color: Color.lightBlueWhite,
        fontSize: 18,
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
