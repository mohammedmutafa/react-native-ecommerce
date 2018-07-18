import { StyleSheet } from 'react-native';

import { screenWidth } from '../../utilities/ScreenSize';
import Color from '../../styles/Color';
import Fonts from '../../styles/Fonts';

const cardwidth = screenWidth;
const cardHeight = cardwidth * 0.6;
const contentHeight = cardHeight * 0.25

export default StyleSheet.create({
    container: {
        height: cardHeight + contentHeight,
        width: cardwidth,
        justifyContent: 'space-between',
        marginVertical: 5,
        backgroundColor: Color.lightWhite
    },
    imageBackgroundStyle: {
        height: cardHeight,
        width: cardwidth,
        justifyContent: 'space-between'
    },
    priceBoxStyle: {
        padding: 10,
        backgroundColor: Color.semiTransparentDarkOverlay,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 2,
        borderRightColor: Color.golden
    },
    titleTextStyle: {
        color: Color.dark,
        fontFamily: Fonts.CharterBT,
        fontSize: 16,
        marginTop: 5
    },
    priceTextStyle: {
        color: Color.lightBlueWhite,
        fontSize: 18,
        textAlign: 'center',
        fontFamily: Fonts.CharterBT
    },
    addressTextStyle: {
        color: Color.lightDark,
        fontSize: 12,
        fontFamily: Fonts.CharterBT,
        paddingHorizontal: 5,
        alignSelf: 'center'
    }
});
