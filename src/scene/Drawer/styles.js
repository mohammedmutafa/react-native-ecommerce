import { StyleSheet, Platform } from 'react-native';

import colors from '../../styles/Color';

import { screenHeight, screenWidth } from '../../utilities/ScreenSize';

export default styles = StyleSheet.create({
    conatinerStyle: {
        backgroundColor: colors.dark,
        flexDirection: 'column',
        flex: 1
    }
});
