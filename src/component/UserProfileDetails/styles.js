import {
    StyleSheet
} from 'react-native';

import Color from '../../styles/Color';
import Fonts from '../../styles/Fonts';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    nameTextStyle: {
        color: Color.dark,
        fontSize: 23,
        fontFamily: Fonts.CharterBT,
        fontWeight: 'bold',
        marginTop: 10
    },
    titleTextStyle: {
        color: Color.placeholderWhite,
        fontSize: 16,
        //paddingVertical: 5
    },
    valueTextStyle: {
        color: Color.lightBlueWhite,
        fontSize: 16,
        marginBottom: 20
    },
    editProfileButtonStyle: {
        backgroundColor: Color.dark,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: Color.golden,
        paddingHorizontal: 20
    },
});
