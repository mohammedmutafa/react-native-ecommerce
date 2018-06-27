import { StyleSheet } from 'react-native';

import Color from '../../styles/Color';

export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 0.8,
        paddingHorizontal: 25,
        paddingVertical: 25,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Color.placeholderWhite,
        backgroundColor: Color.lightBlueWhite
    },
    separatorStyle: {
        height: 1,
        backgroundColor: Color.golden,
        flex: 1
    },
    titleTextContainer: {
        flexDirection: 'row',
        margin: 25,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
