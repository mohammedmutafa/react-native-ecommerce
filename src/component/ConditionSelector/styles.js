import { StyleSheet } from 'react-native';
import { screenWidth, screenHeight } from '../../utilities/ScreenSize';
export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: screenWidth - 15,
        paddingHorizontal: 15,
        position: 'absolute'
    }
});
