import { StyleSheet } from 'react-native';

import { screenWidth } from '../../utilities/ScreenSize';
import Color from '../../styles/Color';

export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 0.9,
        paddingHorizontal: 25,
        paddingVertical: 25,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Color.placeholderWhite,
        backgroundColor: Color.lightBlueWhite
    },
    separatorStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        alignSelf: 'center',
        height: StyleSheet.hairlineWidth,
        width: screenWidth / 2.5,
        backgroundColor: Color.golden,
        marginVertical: 10
    }
});
