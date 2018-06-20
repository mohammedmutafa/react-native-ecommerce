import { StyleSheet } from 'react-native';

import Color from '../../styles/Color';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 30,
        backgroundColor: Color.semiTransparentDarkOverlay
    },
    searchTextInputStyle: {
        padding: 15,
        backgroundColor: Color.lightBlueWhite
    }
});
