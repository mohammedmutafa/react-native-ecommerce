import { StyleSheet } from 'react-native';

import { screenWidth } from '../../utilities/ScreenSize';
import colors from '../../styles/Color';

const containerWidth = screenWidth;
const containerHeight = containerWidth * 0.7;

export default StyleSheet.create({
    container: {
        width: containerWidth,
        height: containerHeight,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#F7F7F7',
        marginVertical: 5
    },
    titleContainerStyle: {
        paddingVertical: 5,
        paddingHorizontal: 5,
        flex: 0.8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imageViewContainerStyle: {
        flex: 5,
        backgroundColor: '#D7D7D7',
    },
    imageViewStyle: {
        resizeMode: 'cover',
        flex: 5
    },
    titleTextStyle: {
        fontSize: 14,
        flex: 4,
        //fontWeight: 'bold',
        color: colors.dark,
        alignSelf: 'center'
    },
    dateTextStyle: {
        alignSelf: 'flex-end',
        color: colors.lightDark,
        fontSize: 10
    },
    productDescriptionTextStyle: {
        color: colors.dark,
        marginVertical: 10,
        flex: 0.5,
        fontSize: 14,
        marginHorizontal: 5
    }
});
