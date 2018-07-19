import { StyleSheet } from 'react-native';

import Colors from '../../styles/Color';

export default styles = StyleSheet.create({
    mainConatinerStyle: {
        flexDirection: 'column',
        flex: 1
    },
    floatingShareButtonStyle: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 35
    },
    floatingButtonContainerStyle: {
        backgroundColor: Colors.semiTransparentDarkOverlay,
        // borderWidth: 0.5,
        //borderColor: Colors.golden
    }
});
