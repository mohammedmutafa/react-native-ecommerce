import { StyleSheet } from 'react-native';

import { screenHeight, screenWidth } from '../../utilities/ScreenSize';
import color from '../../styles/Color';
import Color from '../../styles/Color';

export default styles = StyleSheet.create({
    mainConatinerStyle: {
        flexDirection: 'column',
        flex: 1,
        padding: 25,
        backgroundColor: 'rgba(60, 60, 60, 0.8)',
        height: screenHeight,
        width: screenWidth
    },
    semiTransparentContainer: {
        backgroundColor: Color.semiTransparentDarkOverlay
    },
    scrollViewConatinerStyle: {
        marginHorizontal: 25,
        marginVertical: 35,
        backgroundColor: color.lightWhite
    },
    backButtonStyle: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 35
    },
    level2TitleHeaderContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 25
    },
    level2FlatListContainerStyle: {
        flexDirection: 'column',
        height: screenHeight - (225)
    },
    dividerStyle: {
        height: 1,
        backgroundColor: color.golden,
        width: screenWidth - 50,
        marginTop: 5
    },
    cancelTextStyle: {
        paddingLeft: 25,
        fontSize: 20,
        color: color.golden
    },
    selectedCategoryTextStyle: {
        paddingLeft: 5,
        fontSize: 14,
        color: color.dark
    }
});
