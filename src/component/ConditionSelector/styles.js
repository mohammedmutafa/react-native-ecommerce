import { StyleSheet } from 'react-native';
import Color from '../../styles/Color';
export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 0.5,
        paddingHorizontal: 25,
        paddingVertical: 25,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Color.placeholderWhite,
        backgroundColor: Color.lightBlueWhite
    }
});
