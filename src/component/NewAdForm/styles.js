import { StyleSheet } from 'react-native';

import { screenWidth } from '../../utilities/ScreenSize';
import Color from '../../styles/Color';

export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: Color.lightWhite
    },
    textInputTextStyle: {
        fontSize: 16,
        color: Color.dark
    },
    textInputPlaceHolderStyle: {
        color: Color.placeholderWhite,
        fontSize: 16,
    },
    textInputTitleStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Color.dark,
        marginTop: 20,
        marginBottom: 10
    },
    separatorStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        height: StyleSheet.hairlineWidth,
        backgroundColor: Color.placeholderWhite,
        marginVertical: 15
    },
    floatingNextButtonStyle: {
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 35,
        paddingRight: 15
    }
});
