import { StyleSheet } from 'react-native';

import { screenHeight, screenWidth } from '../../utilities/ScreenSize';
import color from '../../styles/Color';
import Color from '../../styles/Color';
import Fonts from '../../styles/Fonts'

export default styles = StyleSheet.create({
    mainConatinerStyle: {
        flexDirection: 'column',
        flex: 1,
        height: screenHeight,
        width: screenWidth
    },
    semiTransparentContainer: {
        backgroundColor: Color.semiTransparentDarkOverlay,
        height: screenHeight,
        width: screenWidth
    },
    scrollViewConatinerStyle: {
        marginHorizontal: 25,
        marginVertical: 35,
        backgroundColor: color.lightBlueWhite
    },
    backButtonStyle: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 35
    },
    level2TitleHeaderContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 25
    },
    level2FlatListContainerStyle: {
        flexDirection: 'column',
        height: screenHeight - (225)
    },
    dividerStyle: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: color.golden,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        marginTop: 5
    },
    cancelTextStyle: {
        paddingLeft: 25,
        fontSize: 20,
        color: color.golden,
        fontFamily: Fonts.CharterBT
    },
    selectedCategoryTextStyle: {
        paddingLeft: 5,
        fontSize: 14,
        color: color.golden,
        fontFamily: Fonts.CharterBT
    },
    parentTitleTextStyle: {
        color: Color.dark,
        fontSize: 18,
        fontFamily: Fonts.CharterBT
    },
    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20
    },
    rowTextStyle: {
        paddingLeft: 10,
        fontSize: 16,
        color: Color.dark,
        fontFamily: Fonts.CharterBT
    }
});
