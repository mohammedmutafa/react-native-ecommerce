import { StyleSheet } from 'react-native';

import { deviceScaledHeight } from '../../utilities/ScreenSize';

export default StyleSheet.create({
    container: {
        alignSelf: 'flex-end',
        position: 'absolute',
        padding: 15
    },
    floatingButton: {
        shadowOpacity: 0.75,
        shadowColor: '#D3D3D3',
        shadowOffset: { height: 0, width: 0 },
        width: 60, //Using hardcoded size to keep icon size same for multiple devices
        height: 60,
        borderRadius: 60 / 2,
        backgroundColor: '#444951',
        justifyContent: 'center',
        alignItems: 'center'
    },
    floatingMenuButtonTop: {
        bottom: deviceScaledHeight(120)
    },
    floatingMenuButtonEnd: {
        bottom: deviceScaledHeight(10)
    }, iconStyle: {
        height: 40,
        width: 40
    }
});
