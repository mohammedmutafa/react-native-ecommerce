import { StyleSheet } from 'react-native';

import colors from '../../styles/Color';
import Fonts from '../../styles/Fonts';

import { screenWidth } from '../../utilities/ScreenSize';
import Color from '../../styles/Color';

export default styles = StyleSheet.create({
    conatinerStyle: {
        backgroundColor: colors.lightBlueWhite,
        flexDirection: 'column'
    },
    avatarStyle: {
        alignSelf: 'center',
        margin: 25
    },
    nameTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: 'bold',
        color: colors.dark,
        fontFamily: Fonts.CharterBT
    },
    addressTextStyle: {
        fontSize: 14,
        alignSelf: 'center',
        color: colors.lightDark,
        fontFamily: Fonts.CharterBT,
        paddingVertical: 5
    },
    gridViewCardStyle: {
        justifyContent: 'center',
        width: screenWidth / 3.2,
        backgroundColor: colors.placeholderWhite,
        alignItems: 'center',
        height: screenWidth / 3.2,
        margin: 1.5,
    },
    profileStatInfoStyle: {
        width: screenWidth,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.semiDarkWhite,
        padding: 10,
        marginVertical: 15
    },
    profileStatTextContainerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    profileStatCountTextStyle: {
        fontSize: 18,
        color: Color.dark,
        fontFamily: Fonts.CharterBT
    },
    profileStatTitleTextStyle: {
        fontSize: 14,
        color: Color.lightDark
    },
    followButtonTextstyle: {
        fontSize: 18,
        color: Color.golden,
        fontFamily: Fonts.CharterBT
    },
    activityIndicatorStyle: {
        marginTop: 25,
        alignItems: 'center'
    }
});
